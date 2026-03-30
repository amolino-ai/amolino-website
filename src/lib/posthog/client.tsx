'use client';

/**
 * Client-side PostHog provider — enrichment + SPA safety net.
 *
 * Primary pageview source is the server-side middleware ($pageview with source:'server').
 * This client component handles:
 *
 * 1. identify() — stitches the middleware visitor UUID to PostHog's client-side ID
 * 2. $set browser details — enriches person profile with client-only data
 *    ($screen_width, $screen_height, $viewport_width, $viewport_height, timezone)
 * 3. SPA pageview safety net — fires $pageview with source:'client' on soft navigations
 *    that middleware can't see
 */

import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';
import { PostHogProvider as PHProvider, usePostHog } from 'posthog-js/react';
import { Suspense, useEffect, useRef } from 'react';
import { VISITOR_ID_COOKIE, POSTHOG_PROXY_HOST, POSTHOG_UI_HOST, EVENTS } from './constants';

function getVisitorIdFromCookie(): string | null {
  if (typeof document === 'undefined') return null;

  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${VISITOR_ID_COOKIE}=`));

  return match ? match.split('=')[1] : null;
}

/**
 * Capture client-only browser details that the server can't know.
 * Called once after PostHog initializes.
 */
function enrichPersonWithClientDetails(): void {
  posthog.setPersonProperties({
    $screen_width: window.screen.width,
    $screen_height: window.screen.height,
    viewport_width: window.innerWidth,
    viewport_height: window.innerHeight,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
    cookie_enabled: navigator.cookieEnabled,
  });
}

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY) {
      console.warn('PostHog key not found in environment variables');
      return;
    }

    const visitorId = getVisitorIdFromCookie();

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
      api_host: POSTHOG_PROXY_HOST,
      ui_host: POSTHOG_UI_HOST,
      capture_pageview: false, // We handle pageviews ourselves
      capture_pageleave: true,
      debug: process.env.NODE_ENV === 'development',
      persistence: 'localStorage+cookie',
      // Always create person profiles for every visitor.
      // See: https://posthog.com/docs/data/persons#capturing-person-profiles
      person_profiles: 'always',
      bootstrap: {
        distinctID: visitorId || undefined,
      },
    });

    // Override the default library name so client events show as
    // 'amolino-web' in PostHog, matching 'amolino-middleware' from server.
    posthog.register({ $lib: 'amolino-web' });

    // Stitch middleware visitor ID to client-side PostHog
    if (visitorId && posthog.get_distinct_id() !== visitorId) {
      posthog.identify(visitorId);
    }

    // Enrich person with client-only details (screen, timezone, etc.)
    enrichPersonWithClientDetails();
  }, []);

  return (
    <PHProvider client={posthog}>
      <SuspendedSpaPageView />
      {children}
    </PHProvider>
  );
}

/**
 * SPA navigation safety net.
 *
 * Fires $pageview with source:'client' on soft navigations only.
 * Initial page load is handled by middleware (source:'server').
 */
function SpaPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const posthog = usePostHog();
  const isInitialLoad = useRef(true);

  useEffect(() => {
    // Skip first render — middleware already captured the initial pageview
    if (isInitialLoad.current) {
      isInitialLoad.current = false;
      return;
    }

    if (pathname && posthog) {
      let url = window.origin + pathname;
      const search = searchParams.toString();
      if (search) {
        url += '?' + search;
      }
      posthog.capture(EVENTS.PAGEVIEW, {
        $current_url: url,
        source: 'client',
      });
    }
  }, [pathname, searchParams, posthog]);

  return null;
}

function SuspendedSpaPageView() {
  return (
    <Suspense fallback={null}>
      <SpaPageView />
    </Suspense>
  );
}

/* ==========================================================================
   trackEvent — convenience helper for components
   ========================================================================== */

import type { EventName } from './constants';

/**
 * Track a client-side event. Import this in any component:
 *
 * ```tsx
 * import { trackEvent, EVENTS } from '@/lib/posthog';
 *
 * <button onClick={() => trackEvent(EVENTS.CTA_CLICKED, { cta: 'Book Demo', page: '/pricing' })}>
 *   Book a Demo
 * </button>
 * ```
 */
export function trackEvent(event: EventName, properties?: Record<string, unknown>): void {
  if (typeof window === 'undefined') return;

  posthog.capture(event, {
    ...properties,
    source: 'client',
  });
}
