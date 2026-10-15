import type { Faq } from "@/lib/site";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "./JsonLd";

export function FaqList({ faqs, heading = "Questions people ask" }: { faqs: Faq[]; heading?: string }) {
  return (
    <section className="faq">
      <h2 className="h2">{heading}</h2>
      <div className="faq__list">
        {faqs.map((f) => (
          <details key={f.q}>
            <summary>
              <span>{f.q}</span>
              <span className="faq__icon" aria-hidden="true" />
            </summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
      <JsonLd data={faqSchema(faqs)} />
    </section>
  );
}
