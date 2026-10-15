import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

type Crumb = { name: string; path: string };

export function PageHero({
  title,
  lede,
  crumbs,
  children,
}: {
  title: string;
  lede?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
}) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className="phero">
      <svg className="phero__shape" viewBox="0 0 340 340" aria-hidden="true">
        <rect x="120" y="0" width="110" height="340" rx="30" fill="#2B5598" />
        <rect x="20" y="110" width="320" height="110" rx="28" fill="#C0212B" />
        <rect x="120" y="110" width="110" height="110" fill="#9E1B24" />
        <polyline
          points="0,166 110,166 140,120 175,212 210,120 240,166 340,166"
          fill="none"
          stroke="#F7F3EA"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="wrap phero__inner">
        <nav className="crumbs" aria-label="Breadcrumb">
          {all.map((c, i) => (
            <span key={c.path} style={{ margin: 0 }}>
              {i > 0 && <span aria-hidden="true">/</span>}
              {i < all.length - 1 ? <Link href={c.path}>{c.name}</Link> : <span style={{ margin: 0 }}>{c.name}</span>}
            </span>
          ))}
        </nav>
        <h1>{title}</h1>
        {lede && <p>{lede}</p>}
        {children}
      </div>
      <JsonLd data={breadcrumbSchema(all)} />
    </section>
  );
}
