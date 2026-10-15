import { LogoMark } from "./Logo";
// Geometric art built from the logo's own shapes (cross arms, heartbeat) plus a capsule.
// No stock photos: the store isn't open yet, so nothing here pretends to be a real photo.

export function HeroArt() {
  // The real logo on a white disc, with a soft pulse ring and two drifting pills.
  // .hero-art also gets the scroll parallax from ScrollFx.
  return (
    <div className="hero-art" aria-hidden="true">
      <span className="hero-art__ring" />
      <span className="hero-art__ring hero-art__ring--late" />
      <div className="hero-art__disc">
        <LogoMark size={260} className="hero-art__logo" />
      </div>
      <svg className="hero-art__pill float-a" viewBox="0 0 200 80">
        <g transform="rotate(-32 100 40)">
          <rect x="0" y="2" width="200" height="76" rx="38" fill="#F7F3EA" />
          <path d="M100 2h62a38 38 0 0 1 0 76h-62z" fill="#BCD3F0" />
        </g>
      </svg>
      <svg className="hero-art__tab float-b" viewBox="0 0 112 112">
        <circle cx="56" cy="56" r="56" fill="#BCD3F0" />
        <line x1="16" y1="96" x2="96" y2="16" stroke="#1B3A6B" strokeWidth="10" strokeLinecap="round" />
      </svg>
    </div>
  );
}

export function TileArt({ kind }: { kind: "delivery" | "pharmacist" | "vaccine" }) {
  if (kind === "delivery")
    return (
      <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="300" height="300" fill="#BCD3F0" />
        <rect x="62" y="96" width="150" height="112" rx="16" fill="#F7F3EA" />
        <path d="M212 126h34l28 34v48h-62z" fill="#1B3A6B" />
        <rect x="226" y="136" width="22" height="22" rx="4" fill="#BCD3F0" />
        <circle cx="104" cy="214" r="22" fill="#1B3A6B" />
        <circle cx="104" cy="214" r="8" fill="#BCD3F0" />
        <circle cx="240" cy="214" r="22" fill="#1B3A6B" />
        <circle cx="240" cy="214" r="8" fill="#BCD3F0" />
        <rect x="86" y="128" width="44" height="52" rx="6" fill="#C0212B" />
        <rect x="140" y="140" width="44" height="40" rx="6" fill="#1B3A6B" />
        <rect x="100" y="120" width="16" height="12" rx="3" fill="#9E1B24" />
        <path d="M30 150h22M20 170h32M36 190h16" stroke="#1B3A6B" strokeWidth="8" strokeLinecap="round" />
      </svg>
    );
  if (kind === "pharmacist")
    return (
      <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <rect width="300" height="300" fill="#C0212B" />
        <rect x="70" y="80" width="160" height="190" rx="22" fill="#F7F3EA" />
        <rect x="70" y="80" width="160" height="44" rx="22" fill="#1B3A6B" />
        <rect x="70" y="102" width="160" height="22" fill="#1B3A6B" />
        <rect x="96" y="148" width="108" height="10" rx="5" fill="#1B3A6B" opacity=".8" />
        <rect x="96" y="172" width="80" height="10" rx="5" fill="#1B3A6B" opacity=".35" />
        <rect x="96" y="196" width="94" height="10" rx="5" fill="#1B3A6B" opacity=".35" />
        <polyline points="96,236 128,236 140,220 156,250 168,236 204,236" fill="none" stroke="#C0212B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  return (
    <svg viewBox="0 0 300 300" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <rect width="300" height="300" fill="#F7F3EA" />
      <g transform="rotate(-40 150 150)">
        <rect x="120" y="70" width="60" height="140" rx="12" fill="#1B3A6B" />
        <rect x="132" y="96" width="36" height="90" rx="6" fill="#BCD3F0" />
        <rect x="132" y="140" width="36" height="46" rx="4" fill="#C0212B" />
        <rect x="110" y="56" width="80" height="20" rx="8" fill="#1B3A6B" />
        <rect x="142" y="18" width="16" height="40" rx="6" fill="#1B3A6B" />
        <rect x="147" y="210" width="6" height="56" rx="3" fill="#1B3A6B" />
      </g>
    </svg>
  );
}

export function StepIcon({ kind }: { kind: "form" | "phone" | "bag" }) {
  const common = { width: 56, height: 56, viewBox: "0 0 56 56", "aria-hidden": true } as const;
  if (kind === "form")
    return (
      <svg {...common}>
        <rect x="10" y="6" width="36" height="44" rx="6" fill="#BCD3F0" />
        <rect x="17" y="16" width="22" height="4" rx="2" fill="#1B3A6B" />
        <rect x="17" y="25" width="16" height="4" rx="2" fill="#1B3A6B" opacity=".5" />
        <rect x="17" y="34" width="19" height="4" rx="2" fill="#1B3A6B" opacity=".5" />
        <circle cx="42" cy="42" r="9" fill="#C0212B" />
        <path d="M38 42l3 3 5-6" stroke="#fff" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  if (kind === "phone")
    return (
      <svg {...common}>
        <circle cx="28" cy="28" r="22" fill="#BCD3F0" />
        <path
          fill="#1B3A6B"
          d="M20.8 25.6a17 17 0 0 0 7.4 7.4l2.5-2.5a1.1 1.1 0 0 1 1.1-.3 13 13 0 0 0 4 .64 1.1 1.1 0 0 1 1.1 1.1V36a1.1 1.1 0 0 1-1.1 1.1A19 19 0 0 1 16.9 18a1.1 1.1 0 0 1 1.1-1.1h4a1.1 1.1 0 0 1 1.1 1.1 13 13 0 0 0 .64 4 1.1 1.1 0 0 1-.28 1.1z"
        />
        <circle cx="42" cy="14" r="7" fill="#C0212B" />
      </svg>
    );
  return (
    <svg {...common}>
      <path d="M12 20h32l-3 30H15z" fill="#BCD3F0" />
      <path d="M20 20v-4a8 8 0 0 1 16 0v4" stroke="#1B3A6B" strokeWidth="3.5" fill="none" />
      <rect x="25" y="28" width="6" height="16" rx="2" fill="#C0212B" />
      <rect x="20" y="33" width="16" height="6" rx="2" fill="#C0212B" />
    </svg>
  );
}
