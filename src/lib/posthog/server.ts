/**
 * Server-side / Edge-compatible PostHog utilities.
 *
 * Uses the PostHog HTTP API directly via fetch() — works in Vercel Edge Runtime
 * where posthog-node is not available.
 */

import { POSTHOG_HOST } from './constants';

const POSTHOG_API_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;

interface CaptureEventOptions {
  distinctId: string;
  event: string;
  properties?: Record<string, unknown>;
  /** Person properties to update (overwrite) on every event */
  setProperties?: Record<string, unknown>;
  /** Person properties to set once (never overwritten) */
  setOnceProperties?: Record<string, unknown>;
}

/**
 * Send an event to PostHog via the HTTP API.
 *
 * Includes `$process_person_profile: true` to ensure a person profile
 * is always created/updated, even for anonymous visitors.
 */
export async function captureEvent({
  distinctId,
  event,
  properties = {},
  setProperties,
  setOnceProperties,
}: CaptureEventOptions): Promise<void> {
  if (!POSTHOG_API_KEY) {
    return;
  }

  const eventProperties: Record<string, unknown> = {
    ...properties,
    $lib: 'amolino-middleware',
    // Ensure a person profile is created for every event,
    // even without an explicit identify() call.
    // See: https://posthog.com/docs/data/persons#capturing-person-profiles
    $process_person_profile: true,
  };

  if (setProperties) {
    eventProperties.$set = setProperties;
  }
  if (setOnceProperties) {
    eventProperties.$set_once = setOnceProperties;
  }

  const body = {
    api_key: POSTHOG_API_KEY,
    event,
    distinct_id: distinctId,
    properties: eventProperties,
  };

  try {
    await fetch(`${POSTHOG_HOST}/capture/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
  } catch (error) {
    // Analytics should never break the site
    console.error('PostHog capture failed:', error);
  }
}

/**
 * Extract the real client IP from request headers.
 *
 * Priority:
 * 1. x-vercel-forwarded-for (Vercel-specific, most reliable)
 * 2. x-forwarded-for (standard reverse proxy header)
 * 3. x-real-ip (nginx/alternative proxies)
 */
export function getClientIp(headers: Headers): string {
  const vercelForwardedFor = headers.get('x-vercel-forwarded-for');
  if (vercelForwardedFor) {
    return vercelForwardedFor.split(',')[0].trim();
  }

  const forwardedFor = headers.get('x-forwarded-for');
  if (forwardedFor) {
    return forwardedFor.split(',')[0].trim();
  }

  const realIp = headers.get('x-real-ip');
  if (realIp) {
    return realIp.trim();
  }

  return 'unknown';
}
