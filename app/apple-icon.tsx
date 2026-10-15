import { ImageResponse } from "next/og";
import { LOGO_NAVY, LOGO_RED, LOGO_VIEWBOX, LOGO_WHITE } from "@/lib/logo";

// Home-screen icon for iPhones (logo mark on white).
export const dynamic = "force-static";
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#FFFFFF" }}>
        <svg width="150" height="150" viewBox={LOGO_VIEWBOX}>
            <path fill="#FFFFFF" fillRule="evenodd" d={LOGO_WHITE} />
            <path fill="#C0212B" fillRule="evenodd" d={LOGO_RED} />
            <path fill="#1B3A6B" fillRule="evenodd" d={LOGO_NAVY} />
          </svg>
      </div>
    ),
    size,
  );
}
