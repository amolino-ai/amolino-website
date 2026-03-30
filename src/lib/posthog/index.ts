/**
 * PostHog analytics module.
 *
 * All PostHog configuration, tracking, and utilities are consolidated here.
 *
 * - constants.ts          — Shared config (cookie names, hosts)
 * - server.ts             — Edge-compatible server-side capture via HTTP API
 * - client.tsx            — Client-side provider, initialization, and SPA pageview tracking
 * - parse-user-agent.ts   — Lightweight UA parser for Edge Runtime
 */

export { VISITOR_ID_COOKIE, VISITOR_ID_MAX_AGE_SECONDS, POSTHOG_HOST, POSTHOG_PROXY_HOST, POSTHOG_UI_HOST, EVENTS } from './constants';
export type { EventName } from './constants';
export { captureEvent, getClientIp } from './server';
export { PostHogProvider, trackEvent } from './client';
export { parseUserAgent } from './parse-user-agent';
export type { ParsedUserAgent } from './parse-user-agent';
