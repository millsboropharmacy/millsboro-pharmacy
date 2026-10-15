import { BIZ, HOURS, SERVICES, SITE_URL, type Faq } from "./site";

export const PHARMACY_ID = `${SITE_URL}/#pharmacy`;

export function pharmacySchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": PHARMACY_ID,
    name: BIZ.name,
    url: SITE_URL,
    logo: `${SITE_URL}/icon.svg`,
    image: `${SITE_URL}/opengraph-image`,
    telephone: BIZ.phoneE164,
    faxNumber: BIZ.faxE164,
    email: BIZ.email,
    priceRange: "$",
    address: {
      "@type": "PostalAddress",
      streetAddress: BIZ.street,
      addressLocality: BIZ.city,
      addressRegion: BIZ.state,
      postalCode: BIZ.zip,
      addressCountry: "US",
    },
    hasMap: BIZ.mapsUrl,
    areaServed: [
      { "@type": "City", name: "Millsboro, DE" },
      { "@type": "City", name: "Dagsboro, DE" },
      { "@type": "AdministrativeArea", name: "Sussex County, DE" },
    ],
    openingHoursSpecification: HOURS.filter((h) => h.open).map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.dow.map((d) => `https://schema.org/${d}`),
      opens: h.open,
      closes: h.close,
    })),
    employee: {
      "@type": "Person",
      name: "Dhruv Patel",
      honorificSuffix: "PharmD",
      jobTitle: "Pharmacist",
    },
    paymentAccepted: "Cash, Credit Card, Insurance",
    currenciesAccepted: "USD",
    availableService: SERVICES.map((s) => ({
      "@type": "MedicalProcedure",
      name: s.name,
      url: `${SITE_URL}/services/${s.slug}`,
    })),
    sameAs: BIZ.socials.map((s) => s.url),
  };
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

export function serviceSchema(slug: string) {
  const s = SERVICES.find((x) => x.slug === slug)!;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.name,
    serviceType: s.name,
    description: s.description,
    url: `${SITE_URL}/services/${s.slug}`,
    provider: { "@id": PHARMACY_ID },
    areaServed: { "@type": "City", name: "Millsboro, DE" },
  };
}
