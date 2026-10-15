import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: { absolute: "About Millsboro Pharmacy | Locally Owned in Millsboro, DE" },
  description:
    "Millsboro Pharmacy is independently owned and run by pharmacist Dhruv Patel, PharmD. No corporate office, no quotas, just a local pharmacy for Millsboro, DE.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="A pharmacy owned by the people behind the counter"
        lede="Millsboro Pharmacy is independent. There's no parent company and no distant office setting quotas. The owners fill your prescriptions."
        crumbs={[{ name: "About", path: "/about" }]}
      />

      <section className="section">
        <div className="wrap story">
          <div className="prose">
            <h2 style={{ marginTop: 0 }}>Why we opened</h2>
            <p>
              We spent years working behind pharmacy counters and kept seeing the same thing: long
              lines, rushed conversations, and people walking out with questions nobody had time to
              answer. Big chains are built around volume, and patients feel it.
            </p>
            <p>
              So we built the pharmacy we wanted to work in. Every prescription gets looked at by
              someone who knows your history. Your questions get answered before you leave. And if
              there&rsquo;s a way to pay less for something, we&rsquo;ll tell you.
            </p>
          </div>
          <blockquote className="pull">
            &ldquo;We didn&rsquo;t start a pharmacy to compete with chains. We started one because this
            town shouldn&rsquo;t have to settle for one.&rdquo;
            <cite>Dhruv Patel, PharmD</cite>
          </blockquote>
        </div>
      </section>

      <section className="section section--cream">
        <div className="wrap rph">
          <div className="rph__badge" aria-hidden="true">
            DP
          </div>
          <div className="prose">
            <h2 className="h2" style={{ marginTop: 0 }}>
              Dhruv Patel, PharmD
            </h2>
            <p>
              Dhruv has five years of retail pharmacy experience and earned his Doctor of Pharmacy at
              the University of Maryland Eastern Shore. He&rsquo;s licensed in Delaware and certified
              in immunization administration and medication therapy management.
            </p>
            <ul className="checks">
              <li>Doctor of Pharmacy, University of Maryland Eastern Shore</li>
              <li>Licensed pharmacist in Delaware</li>
              <li>Certified to give immunizations</li>
              <li>Certified in medication therapy management</li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
              <Link href="/transfer" className="btn btn--red">
                Transfer your prescriptions
              </Link>
              <Link href="/contact-us" className="btn btn--outline">
                Visit or call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
