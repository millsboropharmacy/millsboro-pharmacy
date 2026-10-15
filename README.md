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
- **Required (HIPAA):** post the pharmacy's Notice of Privacy Practices (Dhruv is sending the Rx30 one). Drop the PDF in `public/` and set `NPP_URL` in `lib/site.ts`; it then links from the footer and the Privacy Policy.
- Remove the opening banner after Nov 2, 2026 (`openingNote` / `openingDate` in `lib/site.ts`, and the opening card on the home page).
- Confirm the insurance list with Dhruv.
- Confirm Saturday hours (old site said "9am - 3am"; this uses 9am to 3pm).
- Add a photo of Dhruv for the About page (currently initials).
- Add the Google Business Profile link to `BIZ.socials` in `lib/site.ts` once it exists (Facebook and Instagram are in).
- Google indexing and link-preview URLs switch to millsboropharmacy.com automatically once that domain is the Vercel project's production domain. Preview copies stay noindex.

## Going live on Dhruv's Vercel
In the existing Vercel project: Settings > Git, connect this repo. The domain stays the same. `/contact` redirects to `/contact-us`.

## Fonts
Fraunces (headlines) and Inter (everything else), the same faces as the original site, self-hosted via Fontsource.

## Logo
`lib/logo.ts` holds the pharmacy's own logo, vector-traced from their original logo file (app/icon.png in the old repo). Also saved as `public/logo.svg`.

## Icons
No photos (Dhruv's call). Line-icon decals live in `components/Icons.tsx`; each service picks one in `lib/site.ts`.

## Patient actions
The home page has three cards: Transfer, Refill (`/refill`) and Book a vaccine (Calendly). Transfer and Refill show call-in options until `TRANSFER_FORM_URL` / `REFILL_FORM_URL` in `lib/site.ts` are set to a HIPAA form with a BAA (or Rx30's refill app link).
