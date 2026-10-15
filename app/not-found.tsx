import Link from "next/link";

export default function NotFound() {
  return (
    <section className="nf">
      <div className="wrap">
        <h1 className="h2">We couldn&rsquo;t find that page</h1>
        <p>It may have moved. Try one of these.</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 20 }}>
          <Link href="/" className="btn btn--navy">
            Home
          </Link>
          <Link href="/transfer" className="btn btn--red">
            Transfer a prescription
          </Link>
          <Link href="/services" className="btn btn--outline">
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
