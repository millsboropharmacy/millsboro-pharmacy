"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { BIZ } from "@/lib/site";
import { Wordmark } from "./Logo";

const NAV = [
  { href: "/services", label: "Services" },
  { href: "/services/vaccines", label: "Vaccines" },
  { href: "/services/free-delivery", label: "Delivery" },
  { href: "/about", label: "About" },
  { href: "/contact-us", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="utility">
        <div className="wrap utility__row">
          {BIZ.openingNote ? <span className="utility__note">{BIZ.openingNote}</span> : <span />}
          <span className="utility__links">
            <a href={BIZ.phoneHref}>Call {BIZ.phone}</a>
            <span className="utility__sep" aria-hidden="true">|</span>
            <span>Fax {BIZ.fax}</span>
          </span>
        </div>
      </div>
      <div className="wrap nav">
        <Link href="/" className="nav__brand" aria-label="Millsboro Pharmacy home">
          <Wordmark />
        </Link>
        <nav className={`nav__links${open ? " is-open" : ""}`} aria-label="Main">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={pathname === n.href ? "is-active" : undefined}
            >
              {n.label}
            </Link>
          ))}
          <a className="nav__call-mobile" href={BIZ.phoneHref}>
            Call {BIZ.phone}
          </a>
        </nav>
        <div className="nav__actions">
          <Link href="/transfer" className="btn btn--red btn--sm">
            Transfer Rx
          </Link>
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
