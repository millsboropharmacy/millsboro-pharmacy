import { ImageResponse } from "next/og";

// Home-screen icon for iPhones (logo mark on white).
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
        <svg width="140" height="137" viewBox="55 15 300 295">
          <rect x="62" y="100" width="288" height="122" rx="24" fill="#C0212B" />
          <rect x="140" y="20" width="130" height="285" rx="30" fill="#1B3A6B" />
          <polyline points="100,161 138,161 166,109 205,220 244,109 272,161 312,161" fill="none" stroke="#FFFFFF" strokeWidth="19" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    size,
  );
}
