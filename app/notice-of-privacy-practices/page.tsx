import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { BIZ } from "@/lib/site";

// Based on the HHS Model Notice of Privacy Practices for health care providers
// (revised February 2026, includes 42 CFR Part 2 language), adapted for a pharmacy.
// Have the pharmacy's PSAO / compliance contact review before opening day.

export const metadata: Metadata = {
  title: { absolute: "Notice of Privacy Practices | Millsboro Pharmacy" },
  description:
    "Millsboro Pharmacy's HIPAA Notice of Privacy Practices: how your health information may be used and shared, your rights, and how to contact our Privacy Officer.",
  alternates: { canonical: "/notice-of-privacy-practices" },
};

const NPP_EFFECTIVE = "November 2, 2026";
const PRIVACY_OFFICER = "Dhruv Patel, PharmD, Privacy Officer";

export default function NoticePage() {
  return (
    <>
      <div className="npp-screen-only">
        <PageHero
          title="Notice of Privacy Practices"
          lede="Your information. Your rights. Our responsibilities."
          crumbs={[{ name: "Notice of Privacy Practices", path: "/notice-of-privacy-practices" }]}
        />
      </div>
      <section className="section npp-section">
        <div className="wrap legal npp">
          <div className="npp-print-head">
            <strong>Millsboro Pharmacy</strong>
            <span>
              {BIZ.street}, {BIZ.city}, {BIZ.state} {BIZ.zip} · {BIZ.phone}
            </span>
            <h1>Notice of Privacy Practices</h1>
          </div>

          <p className="npp-lead">
            <strong>
              This notice describes how medical information about you may be used and disclosed and how
              you can get access to this information. Please review it carefully.
            </strong>
          </p>
          <p>
            <strong>Effective date:</strong> {NPP_EFFECTIVE}
          </p>
          <div className="npp-contact">
            <strong>Questions or complaints? Contact our Privacy Officer</strong>
            <br />
            {PRIVACY_OFFICER}
            <br />
            Millsboro Pharmacy, {BIZ.street}, {BIZ.city}, {BIZ.state} {BIZ.zip}
            <br />
            Phone {BIZ.phone} · {BIZ.email}
          </div>
          <p className="npp-screen-only">
            <a href="/notice-of-privacy-practices.pdf" className="btn btn--navy">
              Download or print (PDF)
            </a>
          </p>

          <h2>Your rights</h2>
          <p>When it comes to your health information, you have certain rights. This section explains your rights and some of our responsibilities to help you.</p>

          <h3>Get an electronic or paper copy of your pharmacy record</h3>
          <ul>
            <li>You can ask to see or get an electronic or paper copy of your pharmacy record and other health information we have about you. Ask us how to do this.</li>
            <li>We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</li>
          </ul>

          <h3>Ask us to correct your pharmacy record</h3>
          <ul>
            <li>You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.</li>
            <li>We may say &ldquo;no&rdquo; to your request, but we&rsquo;ll tell you why in writing within 60 days.</li>
          </ul>

          <h3>Request confidential communications</h3>
          <ul>
            <li>You can ask us to contact you in a specific way (for example, home, office, or cell phone) or to send mail to a different address.</li>
            <li>We will say &ldquo;yes&rdquo; to all reasonable requests.</li>
          </ul>

          <h3>Ask us to limit what we use or share</h3>
          <ul>
            <li>You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say &ldquo;no&rdquo; if it could affect your care. If we agree, we may still share this information if you need emergency treatment.</li>
            <li>If you pay for a prescription or other health care item out of pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say &ldquo;yes&rdquo; unless a law requires us to share that information.</li>
          </ul>

          <h3>Get a list of those with whom we&rsquo;ve shared information</h3>
          <ul>
            <li>You can ask for a list (accounting) of the times we&rsquo;ve shared your health information for six years prior to the date you ask, who we shared it with, and why.</li>
            <li>We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We&rsquo;ll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.</li>
          </ul>

          <h3>Get a copy of this privacy notice</h3>
          <ul>
            <li>You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.</li>
          </ul>

          <h3>Choose someone to act for you</h3>
          <ul>
            <li>If someone has authority to act as your personal representative, such as if someone has your medical power of attorney or is your legal guardian, that person can exercise your rights and make choices about your health information.</li>
            <li>We will make sure the person has this authority and can act for you before we take any action.</li>
          </ul>

          <h3>File a complaint if you feel your rights are violated</h3>
          <ul>
            <li>You can complain if you feel we have violated your rights by contacting our Privacy Officer using the information at the top of this notice.</li>
            <li>You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting www.hhs.gov/hipaa/filing-a-complaint.</li>
            <li>We will not retaliate against you for filing a complaint.</li>
          </ul>

          <h2>Your choices</h2>
          <p>For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.</p>
          <p>In these cases, you have both the right and choice to tell us to:</p>
          <ul>
            <li>Share information with your family, close friends, or others involved in your care or payment for your care</li>
            <li>Share information in a disaster relief situation</li>
          </ul>
          <p>If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.</p>
          <p>
            <strong>Picking up prescriptions:</strong> We may use our professional judgment to let a family member, friend, or other person pick up filled prescriptions, medical supplies, or other similar items for you. Tell us if you do not want anyone else to pick up your prescriptions.
          </p>
          <p>In these cases we never share your information unless you give us written permission:</p>
          <ul>
            <li>Marketing purposes</li>
            <li>Sale of your information</li>
            <li>Most sharing of psychotherapy notes</li>
          </ul>
          <p>
            <strong>Fundraising:</strong> We do not contact patients for fundraising. If that ever changes, you can tell us not to contact you again. If we have your substance use disorder patient records, subject to 42 CFR part 2, we will give you clear and obvious notice in advance and a choice about whether to receive fundraising communications that use your Part 2 information.
          </p>

          <h2>Our uses and disclosures</h2>
          <h3>How do we typically use or share your health information?</h3>

          <p><strong>Treat you.</strong> We can use your health information and share it with other professionals who are treating you. Example: We contact your doctor about a possible interaction between a new prescription and a medication you already take.</p>
          <p><strong>Run our organization.</strong> We can use and share your health information to run our pharmacy, improve your care, and contact you when necessary, such as to let you know a prescription is ready or a refill is due. Example: We use health information about you to manage your medications and services.</p>
          <p><strong>Bill for your services.</strong> We can use and share your health information to bill and get payment from health plans or other entities. Example: We give information about you to your health insurance plan or pharmacy benefit manager so it will pay for your prescriptions.</p>

          <h3>How else can we use or share your health information?</h3>
          <p>We are allowed or required to share your information in other ways, usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes.</p>
          <p>In all cases, including those listed below, if we have substance use disorder patient records about you, subject to 42 CFR part 2, we cannot use or share information in those records in civil, criminal, administrative, or legislative investigations or proceedings against you without (1) your consent or (2) a court order and a subpoena.</p>

          <p><strong>Help with public health and safety issues.</strong> We can share health information about you for certain situations such as:</p>
          <ul>
            <li>Preventing disease</li>
            <li>Helping with product recalls</li>
            <li>Reporting adverse reactions to medications</li>
            <li>Reporting suspected abuse, neglect, or domestic violence</li>
            <li>Preventing or reducing a serious threat to anyone&rsquo;s health or safety</li>
            <li>Reporting controlled substance prescriptions to the state prescription monitoring program as required by law</li>
          </ul>
          <p><strong>Do research.</strong> We can use or share your information for health research.</p>
          <p><strong>Comply with the law.</strong> We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we&rsquo;re complying with federal privacy law.</p>
          <p><strong>Respond to organ and tissue donation requests.</strong> We can share health information about you with organ procurement organizations.</p>
          <p><strong>Work with a medical examiner or funeral director.</strong> We can share health information with a coroner, medical examiner, or funeral director when an individual dies.</p>
          <p><strong>Address workers&rsquo; compensation, law enforcement, and other government requests.</strong> We can use or share health information about you:</p>
          <ul>
            <li>For workers&rsquo; compensation claims</li>
            <li>For law enforcement purposes or with a law enforcement official</li>
            <li>With health oversight agencies for activities authorized by law</li>
            <li>For special government functions such as military, national security, and presidential protective services</li>
          </ul>
          <p><strong>Respond to lawsuits and legal actions.</strong> We can share health information about you in response to a court or administrative order, or in response to a subpoena.</p>

          <h2>Our responsibilities</h2>
          <ul>
            <li>We are required by law to maintain the privacy and security of your protected health information.</li>
            <li>We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.</li>
            <li>We must follow the duties and privacy practices described in this notice and give you a copy of it.</li>
            <li>We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.</li>
          </ul>
          <p>For more information see www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html.</p>

          <h2>Other things you should know</h2>
          <ul>
            <li>We never market or sell your personal information.</li>
            <li>If Delaware law or another law gives your health information more protection than this notice describes, we will follow that law.</li>
          </ul>

          <h2>Changes to the terms of this notice</h2>
          <p>We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our pharmacy, and on our website.</p>

          <p className="npp-foot">
            Millsboro Pharmacy · {BIZ.street}, {BIZ.city}, {BIZ.state} {BIZ.zip} · {BIZ.phone} · Effective {NPP_EFFECTIVE}
          </p>
        </div>
      </section>
    </>
  );
}
