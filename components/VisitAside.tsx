import Link from "next/link";
import { BIZ, HOURS } from "@/lib/site";

export function VisitAside({ cta = "transfer" }: { cta?: "transfer" | "book" | "call" }) {
  return (
    <aside className="aside">
      <h2>Millsboro Pharmacy</h2>
      <p>
        {BIZ.street}, {BIZ.city}, {BIZ.state} {BIZ.zip}
      </p>
      <dl className="hours">
        {HOURS.map((h) => (
          <div key={h.days}>
            <dt>{h.short}</dt>
            <dd>{h.label}</dd>
          </div>
        ))}
      </dl>
      {cta === "book" && (
        <a href={BIZ.calendly} className="btn btn--red" target="_blank" rel="noopener">
          Book an appointment
        </a>
      )}
      {cta === "transfer" && (
        <Link href="/transfer" className="btn btn--red">
          Transfer my prescriptions
        </Link>
      )}
      <a href={BIZ.phoneHref} className={`btn ${cta === "call" ? "btn--red" : "btn--outline"}`}>
        Call {BIZ.phone}
      </a>
    </aside>
  );
}
