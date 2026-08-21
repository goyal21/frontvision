# Front Vision — Website Image Assets

Drop this whole `images` folder at `C:\Front_Vision\Website\images`.
All paths below are relative to that folder, i.e. `images/<path>` from the site root.

Brand tokens for reference: Void Black `#0B0B0D`, Signal Red `#E62E3E`, near-white text `#F7F7F8`, muted body `#B3B6BC`, hairline border `#232327`, card surface `#121214`.

---

## hero/ — 1 file (used)

| File | Use |
|---|---|
| `hero/hero-background-video.mp4` | Full-bleed hero background video. `autoplay muted loop playsinline`, `object-fit: cover`, dark gradient overlay on top. |

---

## case-studies/ — 16 files (all used)

Deployment photography for the "Deployments" / case-study grid. 12 appear in the grid, 3 in the top stat cards, plus 2 installation-standard shots.

| File | Client / caption |
|---|---|
| `case-itbp-khanpur-new-delhi.jpg` | ITBP, Khanpur campus, New Delhi — 3,000+ stat card |
| `case-ntpc-telangana-thermal-plant.jpg` | NTPC Limited thermal plant, Telangana — 1,000+ stat card |
| `case-secom-fabrication-haryana.jpg` | Secom Fabrication, Haryana — 750+ stat card |
| `case-indian-post-office.jpg` | Indian Post Office |
| `case-indian-army.jpg` | Indian Army |
| `case-epfo-bhavan.jpg` | Employees' Provident Fund Organisation |
| `case-home-department-chandigarh.jpg` | Home Department, Chandigarh |
| `case-finance-department-uttar-pradesh.jpg` | Finance Department, Uttar Pradesh |
| `case-dept-school-education-literacy.jpg` | Department of School Education & Literacy |
| `case-agriculture-department-field.jpg` | Dept. of Agriculture, Cooperation & Farmers Welfare |
| `case-niine-shudh-plus-hygiene-plant.jpg` | Niine — Shudh Plus Hygiene Products |
| `case-residents-welfare-association.jpg` | Residents' Welfare Association |
| `case-rural-development-maharashtra.jpg` | Rural Development, Maharashtra |
| `case-defence-corporate-building.jpg` | Institutional & corporate buildings |
| `case-installation-standard-corporate-interior.jpg` | Installation standard (interior) |
| `case-installation-standard-under-canopy.jpg` | Installation standard (exterior canopy) — spare |

Card treatment: 150–170px image band, `object-fit: cover`, on `#0B0B0D`; card `#121214` with `1px solid #232327`, radius 5px.

---

## logos/oem/ — 29 files (all used)

OEM / partner logo grid. Rendered on a **white** tile (`background:#FFFFFF`, radius 3px, height 52px, `padding:8px 10px`, `object-fit: contain`) because the source logos are dark-on-transparent.

Order used on the site, grouped by category:

**Surveillance** `oem-cp-plus.png`, `oem-unv.png`, `oem-prama.png`, `oem-honeywell.png`, `oem-royalshield.png`
**Networking** `oem-cisco.png`, `oem-d-link.png`, `oem-netgear.png`, `oem-digisol.png`, `oem-grandstream.png`
**Computing** `oem-dell.png`, `oem-hp.png`, `oem-lenovo.png`, `oem-samsung.png`, `oem-asus.png`, `oem-acer.png`, `oem-lg.png`
**Accessories** `oem-lapcare.png`, `oem-portronics.png`, `oem-intex.png`
**Cabling & power** `oem-polycab.png`, `oem-usha-martin.png`, `oem-erd.png`, `oem-bpe.png`, `oem-microtek.png`, `oem-okaya.png`
**Racks & integration** `oem-dynamic-rack.png`, `oem-soltrix.png`, `oem-uniway-infocom.png`

---

## clients/ — 1 file

| File | Use |
|---|---|
| `client-logo-dept-agriculture-cooperation-farmers-welfare.jpg` | Government client emblem. Client strip is otherwise empty — real client logos still to be supplied. |

---

## product/ — 3 files (used)

| File | Use |
|---|---|
| `night-vision-full-colour-junction.png` | Top half of the night-vision split panel (colour night capture) |
| `night-vision-headlight-glare-suppression.png` | Bottom half of the same panel (glare suppression) |
| `product-portfolio-full-range.jpg` | Product-range hero / capability visual |

The split panel is a 2-row grid, 300px tall, radius 12px, red glow shadow; divider `1px solid #232327`.

---

## product-library/ — 71 files (not currently on the site)

Spare surveillance product and feature imagery, kept for future product/spec pages. Named by subject so they can be picked without opening them:

- `active-early-warning-*` — active deterrence / early-warning stills
- `vehicle-people-classification-*` — AI classification overlays
- `face-recognition-*` — face-recognition overlays
- `night-colour-imaging-*` — low-light colour comparisons
- `camera-lite-series-*`, `camera-bright-pro-series-*`, `camera-supreme-series-*` — camera range shots by tier
- `camera-thermal-*`, `camera-ptz-*` — thermal and PTZ units
- `nvr-lite-series-*`, `nvr-bright-supreme-series-*`, `xvr-5-in-1-*` — recorders
- `build-quality-ip-camera-*`, `build-quality-ptz-*`, `build-quality-nvr-*` — cutaways / construction detail
- `smart-imaging-feature-*` — smart imaging feature illustrations
- `nvr-feature-overview-*`, `vertical-solutions-overview-*` — diagrammatic overviews

---

## Notes for implementation

- Source imagery came from the RoyalShield catalogue (now part of the merged entity). If original client-site photography exists, replace the `case-studies/` files first — same filenames, no code change needed.
- Every `<img>` in the prototype carries a descriptive `alt`; keep those strings when porting.
- No ISO or certification claims are made anywhere — do not reintroduce them.
