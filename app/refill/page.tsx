import type { Metadata } from "next";
import Link from "next/link";
import { FaqList } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { BIZ, HOURS, REFILL_FAQS, REFILL_FORM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Refill a Prescription at Millsboro Pharmacy" },
  description:
    "Refill your prescription at Millsboro Pharmacy in Millsboro, DE. Call (302) 297-5345 with your prescription number. Pickup or free local delivery.",
  alternates: { canonical: "/refill" },
};

export default function RefillPage() {
  return (
    <>
      <PageHero
        title="Refill a prescription"
        lede="Call us with your prescription number and we'll have it ready for pickup or bring it to you. Most in-stock refills take under 15 minutes."
        crumbs={[{ name: "Refill", path: "/refill" }]}
      />

      <section className="section">
        <div className="wrap transfer">
          <div>
            {REFILL_FORM_URL ? (
              <div className="panel">
                <h2>Request your refill</h2>
                <p>This form is secure. Your information goes straight to the pharmacy.</p>
                <iframe
                  className="form-embed"
                  title="Prescription refill form"
                  src={REFILL_FORM_URL}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="panel">
                <h2>Call in your refill</h2>
                <p>Tell us your name and your prescription number and we&rsquo;ll take it from there.</p>
                <a href={BIZ.phoneHref} className="panel__big">
                  {BIZ.phone}
                </a>
                <div className="panel__row">
                  <a href={BIZ.phoneHref} className="btn btn--red btn--lg">
                    Call to refill
                  </a>
                  <Link href="/services/free-delivery" className="btn btn--outline btn--lg">
                    Free delivery
                  </Link>
                </div>
                <dl className="hours" style={{ marginTop: 18 }}>
                  {HOURS.map((h) => (
                    <div key={h.days}>
                      <dt>{h.days}</dt>
                      <dd>{h.label}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <div className="need">
            <h2>Have this handy</h2>
            <ul>
              <li>Your name and date of birth</li>
              <li>The prescription number from your label (it starts with Rx)</li>
              <li>Whether you want to pick it up or have it delivered</li>
            </ul>
            <p style={{ marginTop: 16, color: "var(--muted)" }}>
              New to Millsboro Pharmacy? Start with a{" "}
              <Link href="/transfer">transfer</Link> and we&rsquo;ll move your prescriptions over.
            </p>
            <p style={{ color: "var(--muted)" }}>
              Taking several medications? Ask about{" "}
              <Link href="/services/medication-synchronization">med sync</Link> so everything is ready on
              the same day each month.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <FaqList faqs={REFILL_FAQS} heading="Refill questions" />
        </div>
      </section>
    </>
  );
}
