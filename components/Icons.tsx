// Line-icon "decals": navy outline, one red accent, sitting in a soft blue circle.
// Drawn on a 64x64 grid with a 3px stroke so they all match.

export type IconName =
  | "delivery"
  | "mortar"
  | "syringe"
  | "heart"
  | "bottle"
  | "calendar"
  | "blister"
  | "flask"
  | "savings"
  | "monitor"
  | "chat"
  | "clipboard"
  | "review"
  | "transfer"
  | "capsule"
  | "store"
  | "pin";

const S = { fill: "none", stroke: "#1B3A6B", strokeWidth: 3.6, strokeLinecap: "round", strokeLinejoin: "round" } as const;
const RED = "#C0212B";

function Glyph({ name }: { name: IconName }) {
  switch (name) {
    case "delivery":
      return (
        <>
          <path {...S} d="M6 20h30v24H6zM36 28h11l9 9v7H36z" />
          <circle {...S} cx="16" cy="46" r="5" fill="#fff" />
          <circle {...S} cx="46" cy="46" r="5" fill="#fff" />
          <rect x="15" y="25" width="12" height="12" rx="2" fill={RED} />
        </>
      );
    case "mortar":
      return (
        <>
          <path {...S} d="M8 30h48c0 11-9 18-24 18S8 41 8 30zM24 48l-3 8h22l-3-8" />
          <path {...S} d="M38 28L52 10" />
          <circle cx="52" cy="10" r="4" fill="#1B3A6B" />
          <text x="25" y="43" fontFamily="Georgia, serif" fontWeight="700" fontSize="13" fill={RED}>Rx</text>
        </>
      );
    case "syringe":
      return (
        <>
          <path {...S} d="M42 8l14 14M49 15L22 42l-8 0 0-8L41 7zM14 50l6-6M30 20l6 6M24 26l6 6" />
          <path d="M10 52c0-3 3-7 3-7s3 4 3 7a3 3 0 0 1-6 0z" fill={RED} />
        </>
      );
    case "heart":
      return (
        <>
          <path
            {...S}
            d="M32 54S8 40 8 23c0-7 5-13 12-13 5 0 9 3 12 7 3-4 7-7 12-7 7 0 12 6 12 13 0 17-24 31-24 31z"
          />
          <path
            className="ico-beat"
            d="M32 37s-7-4-7-9c0-2 1.6-4 3.8-4 1.4 0 2.6.8 3.2 2 .6-1.2 1.8-2 3.2-2 2.2 0 3.8 2 3.8 4 0 5-7 9-7 9z"
            fill={RED}
          />
        </>
      );
    case "bottle":
      return (
        <>
          <rect {...S} x="18" y="8" width="28" height="9" rx="2" />
          <path {...S} d="M20 17h24v35a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z" />
          <rect x="25" y="28" width="14" height="5" rx="1.5" fill={RED} />
          <rect x="29.5" y="23.5" width="5" height="14" rx="1.5" fill={RED} />
        </>
      );
    case "calendar":
      return (
        <>
          <rect {...S} x="8" y="12" width="48" height="42" rx="5" />
          <path d="M13 12h38a5 5 0 0 1 5 5v7H8v-7a5 5 0 0 1 5-5z" fill={RED} />
          <path {...S} d="M8 24h48M20 7v10M44 7v10" />
          <g fill="#1B3A6B">
            <rect x="16" y="31" width="7" height="6" rx="1.5" />
            <rect x="28.5" y="31" width="7" height="6" rx="1.5" />
            <rect x="41" y="31" width="7" height="6" rx="1.5" />
            <rect x="16" y="42" width="7" height="6" rx="1.5" />
            <rect x="28.5" y="42" width="7" height="6" rx="1.5" />
          </g>
        </>
      );
    case "blister":
      return (
        <>
          <rect {...S} x="8" y="10" width="48" height="44" rx="6" />
          <circle {...S} cx="22" cy="24" r="5" />
          <circle {...S} cx="42" cy="24" r="5" />
          <circle {...S} cx="22" cy="40" r="5" />
          <circle cx="42" cy="40" r="6" fill={RED} />
        </>
      );
    case "flask":
      return (
        <>
          <path {...S} d="M24 8h16M27 8v16L12 50a4 4 0 0 0 3.5 6h33a4 4 0 0 0 3.5-6L37 24V8" />
          <path d="M19 42h26l4 8a2 2 0 0 1-1.8 3H16.8a2 2 0 0 1-1.8-3z" fill={RED} />
        </>
      );
    case "savings":
      return (
        <>
          <path {...S} d="M32 6l20 8v14c0 14-9 24-20 30C21 52 12 42 12 28V14z" />
          <path stroke={RED} strokeWidth={3.5} strokeLinecap="round" fill="none" d="M38 22c-2-2-4-3-6-3-3 0-6 2-6 5 0 7 13 4 13 11 0 3-3 5-7 5-2 0-5-1-7-3M32 15v4M32 40v4" />
        </>
      );
    case "monitor":
      return (
        <>
          <rect {...S} x="10" y="8" width="44" height="34" rx="5" />
          <path {...S} d="M24 56h16M32 42v14" />
          <polyline points="16,26 24,26 28,18 34,34 38,26 48,26" fill="none" stroke={RED} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" />
        </>
      );
    case "chat":
      return (
        <>
          <path {...S} d="M10 12h44v30H28l-12 10V42h-6z" />
          <rect x="29.5" y="19" width="5" height="16" rx="1.5" fill={RED} />
          <rect x="24" y="24.5" width="16" height="5" rx="1.5" fill={RED} />
        </>
      );
    case "clipboard":
      return (
        <>
          <rect {...S} x="12" y="10" width="40" height="46" rx="5" />
          <rect {...S} x="24" y="6" width="16" height="9" rx="2" fill="#fff" />
          <path stroke={RED} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" fill="none" d="M22 35l7 7 13-14" />
        </>
      );
    case "review":
      return (
        <>
          <rect {...S} x="10" y="8" width="34" height="46" rx="5" />
          <path {...S} d="M18 20h18M18 29h18M18 38h10" />
          <circle cx="44" cy="44" r="10" fill={RED} />
          <path d="M51 51l7 7" stroke="#1B3A6B" strokeWidth={4} strokeLinecap="round" />
        </>
      );
    case "capsule":
      return (
        <>
          <g transform="rotate(-45 32 32)">
            <path d="M22 20h10v24H22a12 12 0 0 1 0-24z" fill={RED} />
            <path d="M32 20h10a12 12 0 0 1 0 24H32z" fill="#1B3A6B" />
            <rect {...S} x="10" y="20" width="44" height="24" rx="12" />
            <path d="M18 27h8" stroke="#fff" strokeWidth={3} strokeLinecap="round" opacity=".7" />
          </g>
        </>
      );
    case "store":
      return (
        <>
          <path {...S} d="M12 28v26h40V28" />
          <path d="M8 14h48l4 12H4z" fill={RED} />
          <path d="M16 14l-3 12M24 14l-1.5 12M32 14v12M40 14l1.5 12M48 14l3 12" stroke="#fff" strokeWidth={2.5} />
          <path {...S} d="M8 14h48l4 12H4z" />
          <rect {...S} x="18" y="36" width="12" height="18" />
          <rect {...S} x="36" y="36" width="10" height="9" />
        </>
      );
    case "pin":
      return (
        <>
          <path d="M32 58S14 38 14 25a18 18 0 0 1 36 0c0 13-18 33-18 33z" fill={RED} />
          <circle cx="32" cy="25" r="7" fill="#fff" />
        </>
      );
    case "transfer":
      return (
        <>
          <path {...S} d="M10 22h40M40 12l10 10-10 10" />
          <path stroke={RED} strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" fill="none" d="M54 42H14M24 32L14 42l10 10" />
        </>
      );
  }
}

export function Icon({ name, size = 88, className = "" }: { name: IconName; size?: number; className?: string }) {
  return (
    <span className={`ico ${className}`} style={{ width: size, height: size }} aria-hidden="true">
      <svg viewBox="0 0 64 64" width={size * 0.56} height={size * 0.56}>
        <Glyph name={name} />
      </svg>
    </span>
  );
}
