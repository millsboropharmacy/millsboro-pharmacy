import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Millsboro Pharmacy, independent pharmacy in Millsboro, Delaware";
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
          background: "#0F2447",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ position: "absolute", left: 760, top: 40, width: 200, height: 620, borderRadius: 46, background: "#2B5598" }} />
        <div style={{ position: "absolute", left: 620, top: 230, width: 620, height: 180, borderRadius: 42, background: "#C0212B" }} />
        <div style={{ position: "absolute", left: 760, top: 230, width: 200, height: 180, background: "#9E1B24" }} />
        <div style={{ display: "flex", flexDirection: "column", padding: "90px 80px", color: "#fff", width: 640 }}>
          <div style={{ fontSize: 96, fontWeight: 800, lineHeight: 1 }}>Millsboro Pharmacy</div>
          <div style={{ fontSize: 34, marginTop: 30, color: "#DBE5F5", lineHeight: 1.3 }}>
            Independent pharmacy on Centerview Dr, Millsboro, DE
          </div>
          <div style={{ fontSize: 30, marginTop: 40, color: "#fff" }}>(302) 297-5345</div>
        </div>
      </div>
    ),
    size,
  );
}
