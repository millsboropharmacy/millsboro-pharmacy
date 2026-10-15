import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BIZ, HOURS, INSURANCE } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Contact Millsboro Pharmacy | Hours and Directions" },
  description:
    "Millsboro Pharmacy, 26670 Centerview Dr, Unit 9, Millsboro, DE 19966. Call (302) 297-5345, fax (302) 297-5344. Open Monday to Friday 9 to 7, Saturday 9 to 3.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Visit or call Millsboro Pharmacy"
        lede="We're in BJ's Plaza at 26670 Centerview Dr, Unit 9, in Millsboro. Call, fax, email or just stop in."
        crumbs={[{ name: "Contact", path: "/contact-us" }]}
      />

      <section className="section">
        <div className="wrap visit__grid">
          <div>
            <h2 className="h2">Hours</h2>
            <dl className="hours hours--lg">
              {HOURS.map((h) => (
                <div key={h.days}>
                  <dt>{h.days}</dt>
                  <dd>{h.label}</dd>
                </div>
              ))}
            </dl>
            <p style={{ color: "var(--muted)", marginTop: 12 }}>Holiday hours may change, so call ahead.</p>

            <h2 className="h2" style={{ marginTop: 40 }}>
              Reach us
            </h2>
            <address className="visit__addr">
              {BIZ.street}
              <br />
              {BIZ.city}, {BIZ.stateFull} {BIZ.zip}
            </address>
            <p>
              Phone <a href={BIZ.phoneHref}>{BIZ.phone}</a>
              <br />
              Fax {BIZ.fax}
              <br />
              Email <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
            </p>
            <p style={{ color: "var(--muted)", fontSize: ".95rem" }}>
              Please don&rsquo;t email medical or insurance details. Call us instead.
            </p>
            <div className="visit__ctas">
              <a href={BIZ.mapsUrl} className="btn btn--navy" target="_blank" rel="noopener">
                Get directions
              </a>
              <a href={BIZ.phoneHref} className="btn btn--outline">
                Call {BIZ.phone}
              </a>
            </div>
          </div>
          <iframe
            className="map"
            title="Map to Millsboro Pharmacy"
            src={BIZ.mapsEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap towns">
          <div className="town" style={{ background: "#fff" }}>
            <h2>Parking</h2>
            <p>Free parking right in front of the pharmacy and in the lot next door.</p>
          </div>
          <div className="town" style={{ background: "#fff" }}>
            <h2>Accessibility</h2>
            <p>
              Fully wheelchair accessible, with a ground-level entrance, wide aisles and an accessible
              restroom. Can&rsquo;t make it in? We deliver for free.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="wrap ins">
          <div>
            <h2 className="h2">Insurance we take</h2>
            <p>This is a partial list. Call to check your plan.</p>
          </div>
          <ul className="ins__list">
            {INSURANCE.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
