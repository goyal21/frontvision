# Royal Engineering Consultancy — Favicon & Link Share Image

Place this folder at `C:\RECPL_Website\images\brand`.

## Files

| File | Size | Purpose |
|---|---|---|
| `favicon.svg` | vector | Primary favicon — **transparent background**, scales to any size |
| `favicon-16.png` | 16×16 | Legacy tab icon — transparent |
| `favicon-32.png` | 32×32 | Legacy tab icon / bookmark bar — transparent |
| `favicon-48.png` | 48×48 | Windows shortcut / older Chrome — transparent |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon |
| `icon-192.png` | 192×192 | Android / PWA manifest |
| `icon-512.png` | 512×512 | PWA splash + maskable source |
| `og-image.jpg` | 1200×630 | The image that appears when the site link is shared (WhatsApp, LinkedIn, X, Slack, iMessage, email previews) |
| `bimi-logo.svg` | 512×512 | Brand Indicator for Message Identification (BIMI) — shown next to authenticated emails in supporting inboxes |

**The mark is "Open Bracket"** — two offset brackets in Signal Red `#E62E3E` holding a single focal square, never a dot. Per brand guidelines the centre must always contrast against its background rather than repeat the red, so `favicon.svg` renders the centre square in Ink `#0B0B0D` by default and switches to Paper `#F7F7F8` under `prefers-color-scheme: dark` (the static PNG favicons use the light-mode Ink version, which reads correctly on the overwhelming majority of light browser chrome). Bracket weight is deliberately heavier at small sizes so 16px stays legible.

The app icons (`apple-touch-icon`, `icon-192`, `icon-512`) and `bimi-logo.svg` stay **opaque** on Void Black `#0B0B0D` with a Paper `#F7F7F8` centre square — iOS, Android and BIMI all composite home-screen/inbox icons onto their own background and require a filled square.

## Head markup — paste into every page's `<head>`

Replace `https://www.recplindia.com` with the live domain.

```html
<!-- Favicon -->
<link rel="icon" href="/images/brand/favicon.svg" type="image/svg+xml">
<link rel="icon" href="/images/brand/favicon-32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/images/brand/favicon-16.png" sizes="16x16" type="image/png">
<link rel="apple-touch-icon" href="/images/brand/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#0B0B0D">

<!-- Link preview (Open Graph — WhatsApp, LinkedIn, Facebook, Slack, iMessage) -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="Royal Engineering Consultancy">
<meta property="og:url" content="https://www.recplindia.com/">
<meta property="og:title" content="Royal Engineering Consultancy — Surveillance, Networks & Computing">
<meta property="og:description" content="Surveillance, enterprise networking and custom computing, engineered as one system. Deployed across defence, government and industrial sites.">
<meta property="og:image" content="https://www.recplindia.com/images/brand/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Royal Engineering Consultancy — surveillance, networks and computing, engineered as one system.">

<!-- Link preview (X / Twitter) -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Royal Engineering Consultancy — Surveillance, Networks & Computing">
<meta name="twitter:description" content="Surveillance, enterprise networking and custom computing, engineered as one system.">
<meta name="twitter:image" content="https://www.recplindia.com/images/brand/og-image.jpg">
```

## site.webmanifest — create at the web root

```json
{
  "name": "Royal Engineering Consultancy",
  "short_name": "Royal Engineering Consultancy",
  "icons": [
    { "src": "/images/brand/icon-192.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/images/brand/icon-512.png", "sizes": "512x512", "type": "image/png" }
  ],
  "theme_color": "#0B0B0D",
  "background_color": "#0B0B0D",
  "display": "standalone"
}
```

## Rules

- `og:image` **must** be an absolute `https://` URL — relative paths do not render in WhatsApp or LinkedIn.
- Scrapers cache aggressively. After deploying, force a refresh: LinkedIn Post Inspector, Facebook Sharing Debugger, and for WhatsApp re-share the link with a `?v=2` query string.
- One `og:image` per page is enough. If per-page share images are wanted later, keep the same 1200×630 frame and swap only the headline.
- Do not add `favicon.ico` unless IE11 support is required; the SVG + PNG pair covers all current browsers.
