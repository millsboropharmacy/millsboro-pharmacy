# Millsboro Pharmacy website (v2)

Redesign of millsboropharmacy.com by WebSage. Next.js 15 (App Router), no backend, no form handling on the site.

## Run it
```
npm install
npm run dev
```

## Where things live
- `lib/site.ts`: every business fact (phone, fax, hours, address, services, FAQs, insurance list). Edit here and it updates the whole site and the Google schema data.
- `lib/schema.ts`: schema.org data (Pharmacy, FAQPage, Breadcrumb, Service).
- `app/`: pages. Each service has its own page at `/services/<slug>` for search.

## Transfer form (HIPAA)
The site does not collect patient data. Set `TRANSFER_FORM_URL` in `lib/site.ts` to the embed URL of a HIPAA form tool with a signed BAA (HIPAAtizer, or Jotform Gold with HIPAA enabled). Until then the transfer page shows call, fax and walk-in options.

The old site's `app/api/send` route (Resend to Gmail with license and insurance photos) is intentionally gone. Remove the `RESEND_API` env var from Vercel when this goes live.

## Before launch
- Confirm Saturday hours (old site said "9am - 3am"; this uses 9am to 3pm).
- Add a photo of Dhruv for the About page (currently initials).
- Add Google Business Profile / Facebook links to `BIZ.socials` in `lib/site.ts`.
- Remove `NOINDEX=1` from the preview environment. Production must not set it.

## Going live on Dhruv's Vercel
In the existing Vercel project: Settings > Git, connect this repo. The domain stays the same. `/contact` redirects to `/contact-us`.
