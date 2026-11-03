import Image from "next/image";
import Link from "next/link";
import type { Photo } from "@/lib/site";
import { breadcrumbSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";
import { LogoMark } from "./Logo";

type Crumb = { name: string; path: string };

export function PageHero({
  title,
  lede,
  crumbs,
  children,
  photo,
}: {
  title: string;
  lede?: string;
  crumbs: Crumb[];
  children?: React.ReactNode;
  photo?: Photo;
}) {
  const all = [{ name: "Home", path: "/" }, ...crumbs];
  return (
    <section className={photo ? "phero phero--photo" : "phero"}>
      {photo ? (
        <div className="phero__photo">
          <Image src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" sizes="(max-width: 900px) 90vw, 300px" />
        </div>
      ) : (
        <div className="phero__shape" aria-hidden="true">
          <LogoMark size={220} />
        </div>
      )}
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
