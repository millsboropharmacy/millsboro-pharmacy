import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { BIZ, NPP_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How the Millsboro Pharmacy website handles your information, and where to find our HIPAA Notice of Privacy Practices.",
  alternates: { canonical: "/privacy" },
};

const EFFECTIVE = "October 15, 2026";

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        lede={`Effective ${EFFECTIVE}. This policy covers the Millsboro Pharmacy website. How we protect your health information at the pharmacy is covered by our HIPAA Notice of Privacy Practices.`}
        crumbs={[{ name: "Privacy Policy", path: "/privacy" }]}
      />
      <section className="section">
        <div className="wrap legal">
          <h2>Your health information</h2>
          <p>
            As a pharmacy, we are required by the Health Insurance Portability and Accountability Act
            (HIPAA) to protect your health information and to give you a Notice of Privacy Practices
            that explains how we may use and share it and what your rights are.{" "}
            {NPP_URL ? (
              <>
                <a href={NPP_URL}>Read our Notice of Privacy Practices</a> (<a href="/notice-of-privacy-practices.pdf">PDF</a>), or ask for a printed copy at
                the counter.
              </>
            ) : (
              <>
                You can ask for a copy at the counter or by calling{" "}
                <a href={BIZ.phoneHref}>{BIZ.phone}</a>.
              </>
            )}
          </p>

          <h2>What this website collects</h2>
          <p>
            This website does not ask for or store your prescriptions, medical information, insurance
            details or ID. There are no forms on this site that send us your personal information, and
            we do not create accounts. To transfer or refill a prescription, you call or visit us.
          </p>
          <p>
            Like most websites, our hosting provider automatically records basic technical
            information when you visit, such as your IP address, browser type, the page you asked for
            and the time of the request. This is used to run the site, keep it secure and fix
            problems. We do not use it to identify you, and we do not sell it.
          </p>
          <p>
            We do not use advertising cookies, tracking pixels or analytics tools on this website.
          </p>

          <h2>Third-party services</h2>
          <p>Some parts of the site are provided by other companies, which have their own privacy policies:</p>
          <ul>
            <li>
              <strong>Google Maps</strong> shows our location on the Contact page and home page. Google
              may set cookies or collect information when the map loads.
            </li>
            <li>
              <strong>Calendly</strong> handles vaccine and appointment booking. When you book, the
              details you enter go to Calendly. Please only enter your name and contact information
              there, not health details.
            </li>
            <li>
              <strong>Vercel</strong> hosts this website.
            </li>
          </ul>

          <h2>Email</h2>
          <p>
            Regular email is not a secure way to send health information. Please do not email us
            prescriptions, medical details, insurance information or photos of your ID or insurance
            card. Call us at <a href={BIZ.phoneHref}>{BIZ.phone}</a> or stop by instead.
          </p>

          <h2>Children</h2>
          <p>This website is not directed to children under 13, and we do not knowingly collect information from them.</p>

          <h2>Changes to this policy</h2>
          <p>
            If we change this policy, we will post the new version on this page and update the
            effective date at the top.
          </p>

          <h2>Contact us</h2>
          <p>
            Millsboro Pharmacy
            <br />
            {BIZ.street}, {BIZ.city}, {BIZ.state} {BIZ.zip}
            <br />
            Phone <a href={BIZ.phoneHref}>{BIZ.phone}</a> · Fax {BIZ.fax}
            <br />
            <a href={`mailto:${BIZ.email}`}>{BIZ.email}</a>
          </p>
          <p>
            <Link href="/contact-us" className="text-link">
              Contact page
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
