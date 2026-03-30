/**
 * Shared PostHog constants used by both client-side and server-side code.
 */

/** Cookie name for the visitor UUID set by middleware */
export const VISITOR_ID_COOKIE = 'amolino_visitor_id';

/** Cookie max age: 1 year in seconds */
export const VISITOR_ID_MAX_AGE_SECONDS = 365 * 24 * 60 * 60;

/** PostHog ingestion host (direct, not proxied) */
export const POSTHOG_HOST = 'https://us.i.posthog.com';

/** PostHog API proxy path (via Next.js rewrites, used client-side) */
export const POSTHOG_PROXY_HOST = '/ingest';

/** PostHog UI host (for toolbar, etc.) */
export const POSTHOG_UI_HOST = 'https://us.posthog.com';

/* ==========================================================================
   EVENT NAMES
   Single source of truth for all PostHog event names.
   Never use raw strings — always import from here.
   ========================================================================== */

export const EVENTS = {
  // ── Pageviews ──────────────────────────────────────────────────────────
  /** Fired by middleware (source:'server') and client SPA nav (source:'client') */
  PAGEVIEW: '$pageview',
  /** Auto-captured by PostHog client SDK */
  PAGELEAVE: '$pageleave',

  // ── CTA Clicks ─────────────────────────────────────────────────────────
  /** Primary CTA buttons: "Book a Demo", "Try Free", "Get Started" */
  CTA_CLICKED: 'cta_clicked',
  /** Pricing page: user selects a pricing tier */
  PRICING_TIER_SELECTED: 'pricing_tier_selected',

  // ── Forms ──────────────────────────────────────────────────────────────
  /** Demo request form submitted */
  DEMO_FORM_SUBMITTED: 'demo_form_submitted',
  /** Login form submitted */
  LOGIN_ATTEMPTED: 'login_attempted',

  // ── Video ──────────────────────────────────────────────────────────────
  /** Video modal opened (e.g. "Watch 2-Min Overview") */
  VIDEO_OPENED: 'video_opened',
  /** Video modal closed */
  VIDEO_CLOSED: 'video_closed',

  // ── Navigation ─────────────────────────────────────────────────────────
  /** Navbar dropdown opened (desktop) */
  NAV_DROPDOWN_OPENED: 'nav_dropdown_opened',
  /** Link clicked inside a navbar dropdown */
  NAV_DROPDOWN_LINK_CLICKED: 'nav_dropdown_link_clicked',
  /** Mobile menu toggled open/closed */
  MOBILE_MENU_TOGGLED: 'mobile_menu_toggled',

  // ── Search ─────────────────────────────────────────────────────────────
  /** Search modal opened */
  SEARCH_OPENED: 'search_opened',
  /** User selected a search result */
  SEARCH_RESULT_SELECTED: 'search_result_selected',

  // ── Content Engagement ─────────────────────────────────────────────────
  /** Table of contents / guide section link clicked */
  TOC_SECTION_CLICKED: 'toc_section_clicked',
  /** Tab switched (e.g. team role tabs in QBR guide) */
  TAB_SWITCHED: 'tab_switched',

  // ── External Links ─────────────────────────────────────────────────────
  /** Click to app.amolino.ai */
  APP_LINK_CLICKED: 'app_link_clicked',
  /** Social media link clicked (LinkedIn, X, Facebook, etc.) */
  SOCIAL_LINK_CLICKED: 'social_link_clicked',
  /** Any other external link */
  EXTERNAL_LINK_CLICKED: 'external_link_clicked',
} as const;

/** Type-safe event name */
export type EventName = (typeof EVENTS)[keyof typeof EVENTS];
