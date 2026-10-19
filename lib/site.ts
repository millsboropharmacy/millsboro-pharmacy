// Single source for business facts. Every fact here comes from the current
// millsboropharmacy.com site. Change it here and it updates everywhere (pages,
// footer, schema.org data, sitemap).

export const SITE_URL = "https://www.millsboropharmacy.com";

export const BIZ = {
  name: "Millsboro Pharmacy",
  legalName: "Millsboro Pharmacy",
  phone: "(302) 297-5345",
  phoneHref: "tel:+13022975345",
  phoneE164: "+1-302-297-5345",
  fax: "(302) 297-5344",
  faxE164: "+1-302-297-5344",
  email: "millsboropharmacyde@gmail.com",
  street: "26670 Centerview Dr, Unit 9",
  city: "Millsboro",
  state: "DE",
  stateFull: "Delaware",
  zip: "19966",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Millsboro+Pharmacy+26670+Centerview+Dr+Unit+9+Millsboro+DE+19966",
  mapsEmbed:
    "https://maps.google.com/maps?q=26670%20Centerview%20Dr%20Unit%209%2C%20Millsboro%2C%20DE%2019966&z=15&output=embed",
  calendly:
    "https://calendly.com/millsboropharmacy/schedule-your-appointment?background_color=f7f3ea&text_color=0f2447&primary_color=c0212b",
  pharmacist: {
    name: "Dhruv Patel, PharmD",
    short: "Dhruv",
  },
  // From the pharmacy's own Instagram post. Set openingNote/openingDate to "" once open.
  openingNote: "Opening November 2, 2026 in BJ's Plaza",
  openingDate: "November 2, 2026",
  plaza: "BJ's Plaza",
  socials: [
    { label: "Facebook", url: "https://www.facebook.com/share/1Es1U3mqRW/" },
    { label: "Instagram", url: "https://www.instagram.com/millsboropharmacy/" },
  ] as { label: string; url: string }[],
};

// HIPAA-covered transfer form (HIPAAtizer or the Rx30 option).
// Paste the form's embed URL here when it's set up. Until then the transfer
// page shows call / fax / walk-in options and no data is collected on the site.
export const TRANSFER_FORM_URL = "";

// HIPAA requires the pharmacy's Notice of Privacy Practices to be posted on its website.
// Put the PDF in /public (e.g. /notice-of-privacy-practices.pdf) and set the path here.
export const NPP_URL = "/notice-of-privacy-practices";

// Same idea for refills: the secure form's embed URL, or Rx30's refill app link.
export const REFILL_FORM_URL = "";

export const REFILL_FAQS: Faq[] = [
  {
    q: "Where do I find my prescription number?",
    a: "It's printed on your prescription label, usually near the top and marked Rx. If you can't find it, tell us your name and date of birth and the medication, and we'll look it up.",
  },
  {
    q: "How soon will my refill be ready?",
    a: "Most in-stock refills are ready in under 15 minutes. We'll tell you when you call.",
  },
  {
    q: "What if I'm out of refills?",
    a: "We'll contact your doctor's office for a new prescription and let you know when it comes in.",
  },
  {
    q: "Can you deliver my refill?",
    a: "Yes, free around Millsboro and Dagsboro. Refills filled before 3pm on a weekday can come the same day.",
  },
];

// Hours. Saturday is listed as "9am - 3am" on the old site, which reads as a
// typo for 3pm. CONFIRM WITH DHRUV before launch.
export const HOURS = [
  { days: "Monday to Friday", short: "Mon to Fri", open: "09:00", close: "19:00", label: "9am to 7pm", dow: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"] },
  { days: "Saturday", short: "Sat", open: "09:00", close: "15:00", label: "9am to 3pm", dow: ["Saturday"] },
  { days: "Sunday", short: "Sun", open: "", close: "", label: "Closed", dow: ["Sunday"] },
];

export const INSURANCE = [
  "Medicare Part D",
  "Delaware Medicaid",
  "Aetna",
  "Blue Cross Blue Shield",
  "Cigna",
  "UnitedHealthcare",
  "Humana",
  "Express Scripts",
  "CVS Caremark",
  "OptumRx",
  "Workers' Comp",
];

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  nav: string;
  title: string; // <title>
  description: string; // meta description
  h1: string;
  blurb: string; // one line for lists
  body: string[];
  points?: string[];
  faqs: Faq[];
  cta?: "transfer" | "book" | "call";
  icon: import("@/components/Icons").IconName;
};

export const SERVICES: Service[] = [
  {
    slug: "prescription-refills",
    icon: "bottle",
    name: "Prescriptions and refills",
    nav: "Prescriptions",
    title: "Prescription Refills in Millsboro, DE",
    description:
      "Fill and refill prescriptions at Millsboro Pharmacy on Centerview Dr. In-stock prescriptions are ready in under 15 minutes. Refill by phone, text or in person.",
    h1: "Prescriptions and refills in Millsboro",
    blurb: "In-stock prescriptions are ready in under 15 minutes.",
    body: [
      "Every prescription we fill gets checked against your full medication list, so if something you were just prescribed doesn't play well with what you already take, we catch it before it goes in the bag.",
      "If we have it on the shelf, it's usually ready in under 15 minutes. Refills can come in by phone, by text or at the counter, whichever is easiest for you.",
      "Starting with a new prescription? Ask your doctor to send it to Millsboro Pharmacy on Centerview Dr in Millsboro, or have their office fax it to (302) 297-5344.",
    ],
    points: [
      "Full medication review on every fill",
      "Refills by phone, text or in person",
      "Most in-stock prescriptions ready in under 15 minutes",
    ],
    faqs: [
      {
        q: "How do I get my doctor to send a prescription to you?",
        a: "Ask your doctor to send it electronically to Millsboro Pharmacy, 26670 Centerview Dr, Unit 9, Millsboro, DE 19966. Their office can also fax it to (302) 297-5344.",
      },
      {
        q: "Do you have my medication in stock?",
        a: "Call us at (302) 297-5345 and we'll check. If it isn't on the shelf we'll tell you when we can have it.",
      },
    ],
    cta: "transfer",
  },
  {
    slug: "vaccines",
    icon: "syringe",
    name: "Vaccines and immunizations",
    nav: "Vaccines",
    title: "Flu Shots and Vaccines in Millsboro, DE",
    description:
      "Get your flu shot, COVID-19, shingles, pneumonia, Tdap or hepatitis vaccine at Millsboro Pharmacy. Walk in or book online. Most are covered by insurance.",
    h1: "Flu shots and vaccines in Millsboro",
    blurb: "Flu, COVID-19, shingles, pneumonia, Tdap and hepatitis. Walk in or book.",
    body: [
      "We give flu, COVID-19, shingles, pneumonia, Tdap and hepatitis vaccines at the pharmacy. You can walk in, or book a time online if you'd rather not wait.",
      "Most vaccines are covered by insurance with nothing out of pocket. Bring your insurance card and we'll check your coverage before we give the shot.",
    ],
    points: ["Flu", "COVID-19", "Shingles", "Pneumonia", "Tdap", "Hepatitis"],
    faqs: [
      {
        q: "Do I need an appointment for a flu shot?",
        a: "No. Walk-ins are welcome. If you want a set time, book online and we'll have everything ready when you get here.",
      },
      {
        q: "Will my insurance cover my vaccine?",
        a: "Most vaccines are covered by insurance with no out-of-pocket cost. Bring your card and we'll check before we give it.",
      },
    ],
    cta: "book",
  },
  {
    slug: "free-delivery",
    icon: "delivery",
    name: "Free local delivery",
    nav: "Delivery",
    title: "Free Prescription Delivery in Millsboro, DE",
    description:
      "Millsboro Pharmacy delivers prescriptions free in Millsboro, Dagsboro and nearby towns. Same-day delivery for prescriptions filled before 3pm on weekdays.",
    h1: "Free prescription delivery around Millsboro",
    blurb: "No fee and no minimum. Same day on weekdays when filled before 3pm.",
    body: [
      "We bring prescriptions to your door in Millsboro, Dagsboro and the communities around them, and we don't charge for it. There's no minimum either.",
      "If your prescription is filled before 3pm on a weekday, it can come out to you the same day.",
      "Not sure if your street is on our route? Give us a call and we'll tell you.",
    ],
    faqs: [
      {
        q: "How much does delivery cost?",
        a: "Nothing. Local delivery is free with no minimum order.",
      },
      {
        q: "Can I get same-day delivery?",
        a: "Yes, for prescriptions filled before 3pm on a weekday.",
      },
    ],
    cta: "call",
  },
  {
    slug: "medication-synchronization",
    icon: "calendar",
    name: "Medication synchronization",
    nav: "Med sync",
    title: "Medication Synchronization in Millsboro, DE",
    description:
      "Line up all your refills for one monthly pickup at Millsboro Pharmacy. We call you before your sync date so nothing runs out.",
    h1: "All your refills, one pickup a month",
    blurb: "Line up your refills so you make one trip a month.",
    body: [
      "If you take more than one medication, the refill dates usually drift apart and you end up at the pharmacy every week. Med sync lines them all up so everything is ready on the same day each month.",
      "We call you before your sync date to check on any changes, then have it all ready for pickup or delivery.",
    ],
    faqs: [
      {
        q: "How do I sign up for med sync?",
        a: "Call us at (302) 297-5345 or ask at the counter. We'll look at your refill dates and pick a sync day that works for you.",
      },
    ],
    cta: "call",
  },
  {
    slug: "adherence-packaging",
    icon: "blister",
    name: "Blister and adherence packaging",
    nav: "Packaging",
    title: "Blister Pack Pharmacy in Millsboro, DE",
    description:
      "Medications packed by day and time in labeled blister cards. Helpful for seniors, recovery after surgery, or anyone taking 4 or more daily medications.",
    h1: "Medications packed by day and time",
    blurb: "Labeled cards by day and time, so you always know what's next.",
    body: [
      "We can pack your medications into labeled cards sorted by day and time of day, so you can see at a glance what you've taken and what's next.",
      "It's a big help for older patients, people recovering from surgery, caregivers, and anyone taking four or more medications a day.",
    ],
    faqs: [
      {
        q: "Who is blister packaging for?",
        a: "Anyone who wants an easier way to keep track. It's most useful for seniors, people recovering from surgery, and anyone on four or more daily medications.",
      },
    ],
    cta: "call",
  },
  {
    slug: "compounding",
    icon: "flask",
    name: "Non-sterile compounding",
    nav: "Compounding",
    title: "Compounding Pharmacy in Millsboro, DE",
    description:
      "Custom capsules, topical creams and oral suspensions made at Millsboro Pharmacy. Special orders usually arrive the next day.",
    h1: "Compounded medications made for you",
    blurb: "Custom capsules, creams and liquids. Special orders usually next day.",
    body: [
      "When the standard version of a medication doesn't work for you, we can make it in a different form. That includes custom capsules, topical creams and oral suspensions.",
      "Special orders usually arrive the next day. Your doctor can send the prescription to us directly, or call us to talk it through.",
    ],
    faqs: [
      {
        q: "What can you compound?",
        a: "We do non-sterile compounding, including custom capsules, topical creams and oral suspensions. Call us with your prescription and we'll let you know.",
      },
    ],
    cta: "call",
  },
  {
    slug: "insurance-and-savings",
    icon: "savings",
    name: "Insurance help and savings",
    nav: "Insurance",
    title: "Prescription Savings Help in Millsboro, DE",
    description:
      "We check your coverage, compare cash prices, handle prior authorizations and find manufacturer coupons and discount programs to lower what you pay.",
    h1: "Paying less for your prescriptions",
    blurb: "Coverage checks, cash price comparisons, prior auths and coupons.",
    body: [
      "We check your coverage before we fill, compare it against the cash price, and take care of prior authorizations with your doctor's office when your plan asks for one.",
      "We also look for manufacturer coupons and discount programs, and we'll tell you when one of them beats your copay.",
    ],
    faqs: [
      {
        q: "Which insurance plans do you take?",
        a: "Most major plans, including Medicare Part D, Delaware Medicaid, Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Express Scripts, CVS Caremark, OptumRx and Workers' Comp. Call us to check yours.",
      },
    ],
    cta: "call",
  },
  {
    slug: "medical-equipment",
    icon: "monitor",
    name: "Durable medical equipment",
    nav: "Equipment",
    title: "Medical Equipment in Millsboro, DE",
    description:
      "Blood pressure monitors, nebulizers, compression stockings, braces, bathroom safety equipment and mobility aids at Millsboro Pharmacy.",
    h1: "Medical equipment and home health supplies",
    blurb: "Blood pressure monitors, nebulizers, braces, mobility aids and more.",
    body: [
      "We carry blood pressure monitors, nebulizers, compression stockings, braces, bathroom safety equipment and mobility aids.",
      "What's on the shelf changes, so call ahead if you need something specific and we'll check or order it for you.",
    ],
    faqs: [
      {
        q: "Do you have what I need in stock?",
        a: "Availability changes, so call (302) 297-5345 before you come in and we'll check.",
      },
    ],
    cta: "call",
  },
  {
    slug: "otc-and-minor-ailments",
    icon: "chat",
    name: "Over-the-counter advice",
    nav: "OTC advice",
    title: "Pharmacist OTC Advice in Millsboro, DE",
    description:
      "Not sure what to take for a cold, allergy or minor injury? Ask the pharmacist at Millsboro Pharmacy. Vitamins, first aid and OTC medicines in store.",
    h1: "Ask the pharmacist before you pick a box",
    blurb: "OTC, vitamins and first aid, with a pharmacist to ask.",
    body: [
      "We keep a selection of over-the-counter medicines, vitamins and first aid supplies, and the pharmacist is right there to help you choose.",
      "We'll also tell you honestly when something sounds like it needs a doctor instead of a box from the shelf.",
    ],
    faqs: [
      {
        q: "Can the pharmacist help me pick an OTC medicine?",
        a: "Yes. Tell us your symptoms and what else you take, and we'll help you choose, or tell you if you should see a doctor.",
      },
    ],
    cta: "call",
  },
  {
    slug: "health-screenings",
    icon: "clipboard",
    name: "Point-of-care testing",
    nav: "Testing",
    title: "Health Screenings in Millsboro, DE",
    description:
      "In-store health screenings at Millsboro Pharmacy with results in minutes and a pharmacist to explain what's next.",
    h1: "Health screenings with results in minutes",
    blurb: "In-store screenings, results in minutes, and help with next steps.",
    body: [
      "We run screenings right in the store, with results in minutes. The pharmacist goes over the results with you and tells you what to do next, including when to follow up with your doctor.",
      "Call us to ask which screenings are available and whether you need to book a time.",
    ],
    faqs: [
      {
        q: "Do I need an appointment for a screening?",
        a: "Call us at (302) 297-5345 or book online and we'll set up a time.",
      },
    ],
    cta: "book",
  },
  {
    slug: "medication-reviews",
    icon: "review",
    name: "Medication reviews (MTM)",
    nav: "Med reviews",
    title: "Free Medication Review in Millsboro, DE",
    description:
      "A free sit-down review of all your prescriptions, supplements and OTC products with the pharmacist at Millsboro Pharmacy, with a written plan for your doctor.",
    h1: "A free review of everything you take",
    blurb: "Free sit-down review with a written plan to share with your doctor.",
    body: [
      "Bring in everything you take, including prescriptions, supplements and over-the-counter products, and the pharmacist will go through it with you.",
      "You leave with a written plan you can share with your doctor. It's free.",
    ],
    faqs: [
      {
        q: "What should I bring to a medication review?",
        a: "Everything you take, or a list of it: prescriptions, vitamins, supplements and anything over the counter.",
      },
    ],
    cta: "book",
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

// General FAQ used on the home page (also output as FAQPage schema).
export const HOME_FAQS: Faq[] = [
  {
    q: "How do I transfer my prescriptions to Millsboro Pharmacy?",
    a: "Call us at (302) 297-5345 or stop in with your name, date of birth, your current pharmacy and the medications you want moved. We call your old pharmacy and handle the rest, usually the same day.",
  },
  {
    q: "Do you take my insurance?",
    a: "We take most major plans, including Medicare Part D, Delaware Medicaid, Aetna, Blue Cross Blue Shield, Cigna, UnitedHealthcare, Humana, Express Scripts, CVS Caremark and OptumRx. Call to check yours.",
  },
  {
    q: "Do you deliver?",
    a: "Yes, free, in Millsboro, Dagsboro and nearby communities. Prescriptions filled before 3pm on weekdays can be delivered the same day.",
  },
  {
    q: "Can I walk in for a flu shot?",
    a: "Yes. Walk-ins are welcome, or you can book a time online.",
  },
  {
    q: "What are your hours?",
    a: "Monday to Friday 9am to 7pm, Saturday 9am to 3pm, closed Sunday.",
  },
];

export const TRANSFER_FAQS: Faq[] = [
  {
    q: "How long does a prescription transfer take?",
    a: "Usually the same day. We call your current pharmacy directly and let you know when your prescriptions are ready.",
  },
  {
    q: "Can I transfer from CVS, Walgreens, Walmart or another pharmacy?",
    a: "Yes. We can transfer active prescriptions from any pharmacy. Just tell us which one and give us their phone number if you have it.",
  },
  {
    q: "Do I have to call my old pharmacy?",
    a: "No. We contact them for you.",
  },
  {
    q: "What if my prescription has no refills left?",
    a: "We'll reach out to your doctor for a new prescription.",
  },
];

// Real domain vs preview copies. Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the
// project's main domain (the custom domain once one is attached).
const prodHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? "";
export const IS_REAL_DOMAIN = !process.env.VERCEL || prodHost.includes("millsboropharmacy.com");
// Link previews (og:image) must point at the site actually being shared.
export const BASE_URL = IS_REAL_DOMAIN ? SITE_URL : `https://${prodHost}`;
// Preview copies stay out of Google so they never compete with the real site.
export const NOINDEX = process.env.NOINDEX === "1" || !IS_REAL_DOMAIN;
