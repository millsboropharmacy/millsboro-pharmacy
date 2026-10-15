import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Pic } from "@/components/Pic";
import { VisitAside } from "@/components/VisitAside";
import { serviceSchema } from "@/lib/schema";
import { SERVICES, serviceBySlug } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: { title: `${s.title} | Millsboro Pharmacy`, description: s.description },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const s = serviceBySlug(slug);
  if (!s) notFound();
  const related = SERVICES.filter((x) => x.slug !== s.slug).slice(0, 6);

  return (
    <>
      <PageHero
        title={s.h1}
        lede={s.blurb}
        crumbs={[
          { name: "Services", path: "/services" },
          { name: s.name, path: `/services/${s.slug}` },
        ]}
      />
      <section className="section">
        <div className="wrap content">
          <div className="prose">
            {s.photo && <Pic name={s.photo} className="pic--wide" sizes="(max-width: 900px) 100vw, 60vw" priority />}
            {s.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {s.points && (
              <ul className="checks">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            )}
            <FaqList faqs={s.faqs} heading={`${s.name}: common questions`} />
            <div className="related">
              <h2 className="h2" style={{ fontSize: "1.4rem" }}>
                More from Millsboro Pharmacy
              </h2>
              <ul>
                <li>
                  <Link href="/transfer">Prescription transfers</Link>
                </li>
                {related.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/services/${r.slug}`}>{r.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <VisitAside cta={s.cta} />
        </div>
      </section>
      <JsonLd data={serviceSchema(s.slug)} />
    </>
  );
}
