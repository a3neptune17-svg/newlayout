# Ohio release audit — 19 October 2026

## Baseline and publication target

- Local root: `C:\website-prototype`; branch: `main`.
- Baseline: `7b787d1`; working tree was clean.
- Next.js 16.3.4 / React 19.2.8 / TypeScript / npm (`package-lock.json`).
- Baseline production build passed; 61 generated entries, including framework error routes.
- The local remote had been changed to `Layouts.mr.detailer`. The user explicitly selected `a3neptune17-svg/newlayout` for this release. The remote was restored accordingly. No history was reset or rewritten.
- Existing target: Vercel project `newlayout`, ID `prj_Bu4W61hxWfwhDVVFWcPKaWAjkOCA`, production alias `newlayout-sand.vercel.app`. Its previous READY deployment was sourced from `newlayout/main`, commit `9615923`.

## Source audit

All 13 reference pages below were retrieved successfully, including their embedded literal content collections. Each was also opened in the browser and its full DOM content inspected. The Customisation Build anchor was inspected separately. Reference scripts were parsed as data, not executed locally. Only literal content is checked into `reference-data.json`.

Base: `https://mr-detailer-ppf-concepts.webrightlines.chatgpt.site/`

| Reference | Local route under `/ohio-preview/explore/` | Verified content and flow |
| --- | --- | --- |
| packages-journey | packages-journey | Five package descriptions, complete inclusion lists, use cases, scope notes |
| packages | packages | Package selection, one-step/two-step comparison, sealant distinction, FAQs, enquiry draft |
| automods | automods | Bodywork specifications, five modification categories, build selection, Inspect/Agree/Finish |
| autotuning | autotuning | Engine, ECU, Exhaust, Chassis; scope/options/process, vehicle-specific enquiry |
| coatings-gallery | coatings-gallery | All nine named packages and catalogue periods/inclusions; comparison, aftercare, FAQs |
| detailing-menu | detailing-menu | Package selection, selectable focused interests, vehicle enquiry, process and FAQs |
| shop-care-shelf | shop-care-shelf | Six reference catalogue concepts, search/filter, quantity list, honest availability enquiry |
| about-ohio | about-ohio | Source-confirmed 2015/2020 history, interactive timeline, four studio principles |
| car-care-planner | car-care-planner | Package comparison, vehicle priorities, preliminary enquiry and assessment guidance |
| warranty-care-hub | warranty-care-hub | Maintenance, annual inspection, claim-support steps, FAQs; no simulated lookup |
| own-a-studio | own-a-studio | Three partnership models, training/brand/operations/product support, consent and enquiry |
| customisation-build | customisation-build#autotuning | Three moodboards, wishlist, tuning anchor, PPF/coating links, suitability guidance |
| detail-journal | detail-journal | Actual source article titles and full sections, category/search, reader, editorial updates preview |

## Homepage and assets

- Approved homepage structure and Preview 2 retained. Top preview selector was already removed; small footer link retained.
- Compact navigation, four-line trigger and plus indicators retained. Existing targeted removal of the Detailing Packages overlay arrow retained; useful arrows remain.
- Navigation rails remain transparent. Main service headings dominate the smaller supporting text. Green hover/focus states retained.
- Exact approved PPF and NameX supporting copy restored; Auto Mods tagline retained.
- Theme preference shared across routes; default is dark when no preference exists. No conflicting theme library added.
- NameX product specs no longer claim unverified laboratory results, fixed durability, hardness, contact angles or fictional SKU codes.
- NameX product images use containment, preserving packaging. Nine mapped product/studio images were visually inspected together; original files were preserved. The three coating kits/bottles and two film packaging photos are distinct from the four studio work photographs.
- No NameX external destination has been invented. Its enquiry now uses the already approved WhatsApp destination instead of the unrelated number introduced in the previous component.
- Local videos preserved; no fake static-photo playback controls added.

## Verification

- Production build and TypeScript passed before and after the source/content revisions.
- Targeted ESLint for changed React components passed.
- Full repository ESLint reports 51 errors and 88 warnings in legacy layouts/helpers and older unused components. These were not silently reported as passing.
- All 59 normal generated routes, 25 initial rendered assets and 36 linked routes passed the first HTTP sweep. The checked-in route checker additionally checks both actual video paths and the tuning anchor.
- All 13 inner pages were opened at 390px width: no horizontal overflow. Desktop and tablet layouts also checked during final QA.
- Browser-tested selection, search, basket quantities, journal reader, form required fields, reviewable drafts and selection invalidation. No test enquiry was transmitted.
- Publication and live verification results are recorded in the release response; use `node scripts/check-ohio-routes.mjs <base-url>` to repeat the HTTP sweep.

## Remaining content decisions

- Contact discrepancy remains: the existing site displays `+91 76936 06006`, the supplied references display `+91 76963 60606`, and the previously confirmed WhatsApp destination is `+91 97793 97773`. Existing displayed contact and approved WhatsApp were preserved rather than silently choosing a replacement.
- The references consistently list `SCF 1, I Block, Sarabha Nagar, Ludhiana – 141001`. This verified address now appears in the shared location configuration.
- The approved privacy, cookie and service policies remain to be supplied. Existing policy pages honestly direct customers to the studio.
- No online checkout, live inventory, warranty database, automatic reminders, CMS news feed or appointment backend exists. Enquiries prepare drafts for the customer to review and send.
