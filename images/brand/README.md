# Front Vision — Favicon & Link Share Image

Place this folder at `C:\Front_Vision\Website\images\brand`.

## Files

| File | Size | Purpose |
|---|---|---|
| `favicon.svg` | vector | Primary favicon — modern browsers, scales to any size |
| `favicon-16.png` | 16×16 | Legacy tab icon |
| `favicon-32.png` | 32×32 | Legacy tab icon / bookmark bar |
| `favicon-48.png` | 48×48 | Windows shortcut / older Chrome |
| `apple-touch-icon.png` | 180×180 | iOS home-screen icon |
| `icon-192.png` | 192×192 | Android / PWA manifest |
| `icon-512.png` | 512×512 | PWA splash + maskable source |
| `og-image.png` | 1200×630 | The image that appears when the site link is shared (WhatsApp, LinkedIn, X, Slack, iMessage, email previews) |

Mark: focus brackets in Signal Red `#E62E3E` on Void Black `#0B0B0D`, ice-white focal dot `#F7F7F8`. Bracket weight is deliberately heavier at small sizes so 16px stays legible.

## Head markup — paste into every page's `<head>`

Replace `https://www.frontvision.in` with the live domain.

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
<meta property="og:site_name" content="Front Vision">
<meta property="og:url" content="https://www.frontvision.in/">
<meta property="og:title" content="Front Vision — Surveillance, Networks & Computing">
<meta property="og:description" content="Surveillance, enterprise networking and custom computing, engineered as one system. Deployed across defence, government and industrial sites.">
<meta property="og:image" content="https://www.frontvision.in/images/brand/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Front Vision — surveillance, networks and computing, engineered as one system.">

<!-- Link preview (X / Twitter) -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Front Vision — Surveillance, Networks & Computing">
<meta name="twitter:description" content="Surveillance, enterprise networking and custom computing, engineered as one system.">
<meta name="twitter:image" content="https://www.frontvision.in/images/brand/og-image.png">
```

## site.webmanifest — create at the web root

```json
{
  "name": "Front Vision",
  "short_name": "Front Vision",
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
