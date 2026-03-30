/**
 * Lightweight User-Agent parser for Edge Runtime.
 *
 * Extracts browser, OS, and device type from a UA string without
 * external dependencies. Covers the major browsers and platforms
 * that matter for B2B marketing analytics.
 */

export interface ParsedUserAgent {
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  deviceType: 'Desktop' | 'Mobile' | 'Tablet' | 'Bot' | 'Unknown';
}

const BOT_PATTERN = /bot|crawl|spider|slurp|mediapartners|facebookexternalhit|linkedinbot|twitterbot|whatsapp|preview|headless/i;
const MOBILE_PATTERN = /Mobile|Android.*Mobile|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i;
const TABLET_PATTERN = /iPad|Android(?!.*Mobile)|Tablet/i;

interface BrowserMatch {
  name: string;
  pattern: RegExp;
}

// Order matters — more specific patterns first
const BROWSERS: BrowserMatch[] = [
  { name: 'Edge', pattern: /Edg(?:e|A|iOS)?\/(\d+[\d.]*)/ },
  { name: 'Opera', pattern: /OPR\/(\d+[\d.]*)/ },
  { name: 'Brave', pattern: /Brave\/(\d+[\d.]*)/ },
  { name: 'Vivaldi', pattern: /Vivaldi\/(\d+[\d.]*)/ },
  { name: 'Samsung Internet', pattern: /SamsungBrowser\/(\d+[\d.]*)/ },
  { name: 'Chrome', pattern: /(?:Chrome|CriOS)\/(\d+[\d.]*)/ },
  { name: 'Firefox', pattern: /(?:Firefox|FxiOS)\/(\d+[\d.]*)/ },
  { name: 'Safari', pattern: /Version\/(\d+[\d.]*).*Safari/ },
  { name: 'IE', pattern: /(?:MSIE |Trident.*rv:)(\d+[\d.]*)/ },
];

interface OSMatch {
  name: string;
  pattern: RegExp;
  versionPattern?: RegExp;
}

const OPERATING_SYSTEMS: OSMatch[] = [
  { name: 'Windows', pattern: /Windows/, versionPattern: /Windows NT (\d+\.\d+)/ },
  { name: 'macOS', pattern: /Mac OS X/, versionPattern: /Mac OS X (\d+[._]\d+[._]?\d*)/ },
  { name: 'iOS', pattern: /iPhone|iPad|iPod/, versionPattern: /OS (\d+[._]\d+[._]?\d*)/ },
  { name: 'Android', pattern: /Android/, versionPattern: /Android (\d+[\d.]*)/ },
  { name: 'Chrome OS', pattern: /CrOS/ },
  { name: 'Linux', pattern: /Linux/ },
];

export function parseUserAgent(ua: string): ParsedUserAgent {
  if (!ua) {
    return { browser: 'Unknown', browserVersion: '', os: 'Unknown', osVersion: '', deviceType: 'Unknown' };
  }

  // Detect bot
  if (BOT_PATTERN.test(ua)) {
    return { browser: 'Bot', browserVersion: '', os: 'Unknown', osVersion: '', deviceType: 'Bot' };
  }

  // Parse browser
  let browser = 'Unknown';
  let browserVersion = '';
  for (const { name, pattern } of BROWSERS) {
    const match = ua.match(pattern);
    if (match) {
      browser = name;
      browserVersion = match[1] || '';
      break;
    }
  }

  // Parse OS
  let os = 'Unknown';
  let osVersion = '';
  for (const { name, pattern, versionPattern } of OPERATING_SYSTEMS) {
    if (pattern.test(ua)) {
      os = name;
      if (versionPattern) {
        const vMatch = ua.match(versionPattern);
        if (vMatch) {
          osVersion = vMatch[1].replace(/_/g, '.');
        }
      }
      break;
    }
  }

  // Detect device type
  let deviceType: ParsedUserAgent['deviceType'] = 'Desktop';
  if (TABLET_PATTERN.test(ua)) {
    deviceType = 'Tablet';
  } else if (MOBILE_PATTERN.test(ua)) {
    deviceType = 'Mobile';
  }

  return { browser, browserVersion, os, osVersion, deviceType };
}
