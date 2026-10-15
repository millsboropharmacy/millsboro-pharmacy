import { ImageResponse } from "next/og";
import { LOGO_NAVY, LOGO_RED, LOGO_VIEWBOX, LOGO_WHITE } from "@/lib/logo";

// Link preview card (iMessage, Facebook, Google, etc.): the logo front and center.
export const dynamic = "force-static";
export const alt = "Millsboro Pharmacy logo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          background: "#0F2447",
          padding: "0 90px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 340,
            height: 340,
            borderRadius: 64,
            background: "#FFFFFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <svg width="270" height="270" viewBox={LOGO_VIEWBOX}>
            <path fill="#FFFFFF" fillRule="evenodd" d={LOGO_WHITE} />
            <path fill="#C0212B" fillRule="evenodd" d={LOGO_RED} />
            <path fill="#1B3A6B" fillRule="evenodd" d={LOGO_NAVY} />
          </svg>
        </div>
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 70, color: "#FFFFFF" }}>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1 }}>Millsboro</div>
          <div style={{ fontSize: 92, fontWeight: 800, lineHeight: 1.05 }}>Pharmacy</div>
          <div style={{ fontSize: 34, marginTop: 30, color: "#DBE5F5" }}>Independent pharmacy in Millsboro, DE</div>
          <div style={{ display: "flex", marginTop: 26, fontSize: 32, color: "#FFFFFF" }}>
            <div style={{ background: "#C0212B", borderRadius: 12, padding: "10px 22px" }}>(302) 297-5345</div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
