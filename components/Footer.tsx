import Link from "next/link";
import { BIZ, HOURS, NPP_URL, SERVICES } from "@/lib/site";
import { Wordmark } from "./Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <div className="footer__brand">
          <Wordmark light />
          <p>
            Independent pharmacy on Centerview Dr in Millsboro, Delaware. Owned and run by a local
            pharmacist.
          </p>
          <Link href="/transfer" className="btn btn--red">
            Transfer your prescriptions
          </Link>
        </div>

        <div>
          <h2 className="footer__h">Visit</h2>
          <address>
            {BIZ.street}
            <br />
            {BIZ.city}, {BIZ.state} {BIZ.zip}
          </address>
          <p>
            <a href={BIZ.mapsUrl} target="_blank" rel="noopener">
              Get directions
            </a>
          </p>
          <p>
            Phone <a href={BIZ.phoneHref}>{BIZ.phone}</a>
            <br />
            Fax {BIZ.fax}
            <br />
            <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
          </p>
        </div>

        <div>
          <h2 className="footer__h">Hours</h2>
          <dl className="hours">
            {HOURS.map((h) => (
              <div key={h.days}>
                <dt>{h.short}</dt>
                <dd>{h.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="footer__h">Services</h2>
          <ul className="footer__list">
            {SERVICES.slice(0, 7).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`}>{s.name}</Link>
              </li>
            ))}
            <li>
              <Link href="/services">All services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrap footer__base">
        <span>© {new Date().getFullYear()} Millsboro Pharmacy</span>
        <span className="footer__base-links">
          <Link href="/refill">Refill</Link>
          <Link href="/about">About</Link>
          <Link href="/areas-we-serve">Areas we serve</Link>
          <Link href="/contact-us">Contact</Link>
          <Link href="/privacy">Privacy Policy</Link>
          {NPP_URL && <a href={NPP_URL}>Notice of Privacy Practices</a>}
        </span>
      </div>
    </footer>
  );
}
