import Link from "next/link";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { LogoMark } from "./Logo";

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
      <div className="phero__shape" aria-hidden="true">
        <LogoMark size={220} />
      </div>
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
