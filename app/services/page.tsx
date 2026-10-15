import type { Metadata } from "next";
import Link from "next/link";
import { Icon } from "@/components/Icons";
import { PageHero } from "@/components/PageHero";
import { SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Pharmacy Services in Millsboro, DE",
  description:
    "Refills, transfers, flu shots, free delivery, med sync, blister packs, compounding and free medication reviews at Millsboro Pharmacy in Millsboro, DE.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Pharmacy services in Millsboro"
        lede="Everything we do at the counter on Centerview Dr. Tap a service for the details, or call us if you don't see what you need."
        crumbs={[{ name: "Services", path: "/services" }]}
      />
      <section className="section">
        <div className="wrap">
          <ul className="svc-index">
            <li>
              <Link href="/transfer">
                <Icon name="transfer" size={64} />
                <h2>Prescription transfers</h2>
                <p>From any pharmacy, usually the same day. We call your old pharmacy for you.</p>
              </Link>
            </li>
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>
                  <Icon name={s.icon} size={64} />
                  <h2>{s.name}</h2>
                  <p>{s.blurb}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
