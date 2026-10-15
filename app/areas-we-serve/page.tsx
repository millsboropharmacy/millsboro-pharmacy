import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BIZ } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pharmacy Near Millsboro, Dagsboro and Sussex County, DE",
  description:
    "Millsboro Pharmacy serves Millsboro, Dagsboro and nearby Sussex County towns with free prescription delivery, transfers, vaccines and refills.",
  alternates: { canonical: "/areas-we-serve" },
};

const TOWNS = [
  {
    name: "Millsboro",
    text: "We're on Centerview Dr. Stop in, or get your prescriptions delivered free. Weekday orders filled before 3pm can arrive the same day.",
  },
  {
    name: "Dagsboro",
    text: "Dagsboro is on our free delivery route. Transfer your prescriptions and we'll bring refills to your door.",
  },
];

export default function AreasPage() {
  return (
    <>
      <PageHero
        title="A local pharmacy for Millsboro, Dagsboro and the towns around them"
        lede="Free delivery, same-day transfers and walk-in vaccines for this part of Sussex County."
        crumbs={[{ name: "Areas we serve", path: "/areas-we-serve" }]}
      />
      <section className="section">
        <div className="wrap">
          <div className="towns">
            {TOWNS.map((t) => (
              <div className="town" key={t.name}>
                <h2>Pharmacy for {t.name}, DE</h2>
                <p>{t.text}</p>
              </div>
            ))}
          </div>
          <div className="prose" style={{ marginTop: 48 }}>
            <h2>Live a little farther out?</h2>
            <p>
              If you&rsquo;re in Long Neck, Georgetown, Frankford or somewhere else nearby, call us at{" "}
              <a href={BIZ.phoneHref}>{BIZ.phone}</a> and we&rsquo;ll tell you if we can deliver to
              your street. You&rsquo;re always welcome to pick up at the counter.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <Link href="/services/free-delivery" className="btn btn--navy">
                How delivery works
              </Link>
              <Link href="/transfer" className="btn btn--red">
                Transfer my prescriptions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
