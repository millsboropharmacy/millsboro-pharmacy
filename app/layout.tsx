import type { Metadata, Viewport } from "next";
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/inter";
import { ScrollFx } from "@/components/ScrollFx";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { JsonLd } from "@/components/JsonLd";
import { pharmacySchema } from "@/lib/schema";
import { BASE_URL, NOINDEX } from "@/lib/site";

const noindex = NOINDEX;

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Millsboro Pharmacy | Independent Pharmacy in Millsboro, DE",
    template: "%s | Millsboro Pharmacy",
  },
  description:
    "Independent pharmacy on Centerview Dr in Millsboro, Delaware. Prescription transfers, refills, flu shots and vaccines, free local delivery and compounding. Call (302) 297-5345.",
  applicationName: "Millsboro Pharmacy",
  keywords: [
    "pharmacy Millsboro DE",
    "Millsboro pharmacy",
    "pharmacy near me",
    "independent pharmacy Sussex County",
    "prescription transfer Millsboro",
    "flu shot Millsboro",
    "pharmacy delivery Dagsboro",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Millsboro Pharmacy",
    locale: "en_US",
    url: BASE_URL,
  },
  twitter: { card: "summary_large_image" },
  robots: noindex
    ? { index: false, follow: false }
    : { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large" } },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#0F2447",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileBar />
        <ScrollFx />
        <JsonLd data={pharmacySchema()} />
      </body>
    </html>
  );
}
