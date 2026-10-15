import type { Metadata } from "next";
import { StepIcon } from "@/components/Art";
import { FaqList } from "@/components/Faq";
import { PageHero } from "@/components/PageHero";
import { BIZ, TRANSFER_FAQS, TRANSFER_FORM_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Transfer Your Prescription to Millsboro Pharmacy" },
  description:
    "Switch your prescriptions from CVS, Walgreens, Walmart or any pharmacy to Millsboro Pharmacy in Millsboro, DE. We call your old pharmacy for you, usually same day.",
  alternates: { canonical: "/transfer" },
};

export default function TransferPage() {
  return (
    <>
      <PageHero
        title="Transfer your prescriptions to Millsboro Pharmacy"
        lede="Give us a few details and we take it from there. We call your old pharmacy, check your insurance and let you know when everything's ready, usually the same day."
        crumbs={[{ name: "Transfer Rx", path: "/transfer" }]}
      />

      <section className="section">
        <div className="wrap transfer">
          <div>
            {TRANSFER_FORM_URL ? (
              <div className="panel">
                <h2>Start your transfer</h2>
                <p>This form is secure. Your information goes straight to the pharmacy.</p>
                <iframe
                  className="form-embed"
                  title="Prescription transfer form"
                  src={TRANSFER_FORM_URL}
                  loading="lazy"
                />
              </div>
            ) : (
              <div className="panel">
                <h2>Call us and we&rsquo;ll do the rest</h2>
                <p>
                  It takes a couple of minutes on the phone. Tell us what you take and where you fill it
                  now, and we handle the transfer.
                </p>
                <a href={BIZ.phoneHref} className="panel__big">
                  {BIZ.phone}
                </a>
                <div className="panel__row">
                  <a href={BIZ.phoneHref} className="btn btn--red btn--lg">
                    Call to transfer
                  </a>
                  <a href={BIZ.mapsUrl} className="btn btn--outline btn--lg" target="_blank" rel="noopener">
                    Stop by instead
                  </a>
                </div>
                <small>
                  Already talking to your old pharmacy? Give them our phone number {BIZ.phone} and fax{" "}
                  {BIZ.fax} and they can send your prescriptions straight to us.
                </small>
              </div>
            )}
          </div>

          <div className="need">
            <h2>Have this handy</h2>
            <ul>
              <li>Your name, date of birth and phone number</li>
              <li>The pharmacy you use now and its phone number</li>
              <li>The medications you want to move</li>
              <li>Your insurance plan, member ID and group number</li>
            </ul>
            <p style={{ marginTop: 16, color: "var(--muted)" }}>
              We use your insurance details to confirm we take your plan before you switch.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--mist">
        <div className="wrap">
          <h2 className="h2">What happens next</h2>
          <div className="flow">
            <div>
              <StepIcon kind="form" />
              <h3>You give us the details</h3>
              <p>By phone or at the counter. It takes about two minutes.</p>
            </div>
            <div>
              <StepIcon kind="phone" />
              <h3>We call your old pharmacy</h3>
              <p>You don&rsquo;t have to. We also check your insurance so there are no surprises.</p>
            </div>
            <div>
              <StepIcon kind="bag" />
              <h3>Pick up or get it delivered</h3>
              <p>Usually the same day. Delivery is free around Millsboro and Dagsboro.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <FaqList faqs={TRANSFER_FAQS} heading="Transfer questions" />
        </div>
      </section>
    </>
  );
}
