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
          <div className="socials">
            {BIZ.socials.map((s) => (
              <a key={s.label} href={s.url} target="_blank" rel="noopener" aria-label={`Millsboro Pharmacy on ${s.label}`}>
                {s.label === "Facebook" ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="#fff" d="M13.5 21v-7.5h2.5l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21z" />
                  </svg>
                ) : s.label === "Google" ? (
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                    <path fill="#fff" d="M21.6 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.4c-.2 1.2-.9 2.3-2 3v2.5h3.2c1.9-1.7 3-4.3 3-7.3zM12 22c2.7 0 5-.9 6.6-2.4l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.6C4.7 19.8 8.1 22 12 22zM6.4 14c-.2-.6-.3-1.3-.3-2s.1-1.4.3-2V7.4H3.1C2.4 8.8 2 10.4 2 12s.4 3.2 1.1 4.6L6.4 14zM12 5.9c1.5 0 2.8.5 3.8 1.5l2.9-2.9C17 2.9 14.7 2 12 2 8.1 2 4.7 4.2 3.1 7.4L6.4 10c.8-2.3 3-4.1 5.6-4.1z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="#fff" strokeWidth="2">
                    <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.3" cy="6.7" r="1" fill="#fff" stroke="none" />
                  </svg>
                )}
              </a>
            ))}
          </div>
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
