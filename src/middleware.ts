import { NextRequest, NextResponse } from 'next/server';
import {
  captureEvent,
  getClientIp,
  parseUserAgent,
  VISITOR_ID_COOKIE,
  VISITOR_ID_MAX_AGE_SECONDS,
  EVENTS,
} from '@/lib/posthog';

// Skip middleware for static assets, API routes, and internal Next.js routes
const SKIP_PATTERNS = [
  /^\/_next/,
  /^\/api/,
  /^\/ingest/,
  /^\/favicon/,
  /^\/sitemap/,
  /^\/robots/,
  /^\/feed/,
  /^\/.well-known/,
  /^\/photos\//,
  /^\/screenshots\//,
  /^\/images\//,
  /\.(ico|png|jpg|jpeg|gif|svg|webp|avif|css|js|json|woff|woff2|ttf|eot|map|xml|txt|mp4|webm|pdf)$/,
];

function shouldSkip(pathname: string): boolean {
  return SKIP_PATTERNS.some((pattern) => pattern.test(pathname));
}

/**
 * Detect non-human requests: build-time rendering, prefetches, and bots.
 * These should not be counted as visitor pageviews.
 */
function isNonHumanRequest(request: NextRequest): boolean {
  const userAgent = request.headers.get('user-agent') || '';

  // Vercel build-time static generation / ISR
  if (
    request.headers.get('x-vercel-deployment-url') ||
    request.headers.get('x-middleware-prefetch') === '1' ||
    request.headers.get('purpose') === 'prefetch' ||
    request.headers.get('sec-purpose') === 'prefetch'
  ) {
    return true;
  }

  // Next.js internal prefetch requests
  if (request.headers.get('next-router-prefetch') === '1') {
    return true;
  }

  // Headless browsers used during build
  if (/vercel|headless|prerender|lighthouse|pingdom|uptimerobot/i.test(userAgent)) {
    return true;
  }

  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (shouldSkip(pathname)) {
    return NextResponse.next();
  }

  // Skip build-time rendering, prefetches, and monitoring bots
  if (isNonHumanRequest(request)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();

  // Read or create visitor ID
  const existingVisitorId = request.cookies.get(VISITOR_ID_COOKIE)?.value;
  const isNewVisitor = !existingVisitorId;
  const visitorId = existingVisitorId || crypto.randomUUID();

  // Set cookie if new visitor
  if (isNewVisitor) {
    response.cookies.set(VISITOR_ID_COOKIE, visitorId, {
      httpOnly: false, // Client-side PostHog needs to read this
      secure: true,
      sameSite: 'lax',
      maxAge: VISITOR_ID_MAX_AGE_SECONDS,
      path: '/',
    });
  }

  // Extract visitor details
  const clientIp = getClientIp(request.headers);
  const userAgent = request.headers.get('user-agent') || '';
  const referer = request.headers.get('referer') || '';
  const currentUrl = request.nextUrl.href;

  // Parse UA for browser/OS/device info (blocker-proof)
  const ua = parseUserAgent(userAgent);

  // Skip bots — don't pollute analytics
  if (ua.deviceType === 'Bot') {
    return response;
  }

  // Fire $pageview — this is the primary, blocker-proof pageview source.
  // Client-side SPA navigations fire separately with source:'client'.
  captureEvent({
    distinctId: visitorId,
    event: EVENTS.PAGEVIEW,
    properties: {
      $ip: clientIp,
      $user_agent: userAgent,
      $current_url: currentUrl,
      $pathname: pathname,
      $referrer: referer,
      $host: request.nextUrl.host,
      // Server-parsed browser/OS (available even when client JS is blocked)
      $browser: ua.browser,
      $browser_version: ua.browserVersion,
      $os: ua.os,
      $os_version: ua.osVersion,
      $device_type: ua.deviceType,
      // Distinguish from client-side pageviews
      source: 'server',
      is_new_visitor: isNewVisitor,
    },
    // $set — updates on every visit
    setProperties: {
      last_seen_ip: clientIp,
      last_seen_at: new Date().toISOString(),
      last_user_agent: userAgent,
      last_page_viewed: pathname,
      last_browser: ua.browser,
      last_os: ua.os,
      last_device_type: ua.deviceType,
    },
    // $set_once — only set on first visit, never overwritten
    setOnceProperties: {
      // PostHog uses 'name' as the person display name
      name: `amolino-user-${visitorId.slice(0, 8)}`,
      first_seen_ip: clientIp,
      first_seen_at: new Date().toISOString(),
      initial_referrer: referer || 'direct',
      initial_landing_page: pathname,
      initial_user_agent: userAgent,
      initial_browser: ua.browser,
      initial_os: ua.os,
      initial_device_type: ua.deviceType,
    },
  });

  // Pass visitor ID to client via response header
  response.headers.set('x-visitor-id', visitorId);

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot|map)$).*)',
  ],
};
