import { LOGO_NAVY, LOGO_RED, LOGO_VIEWBOX, LOGO_WHITE } from "@/lib/logo";

// The pharmacy's own logo (vector-traced from their logo file, so it's sharp at any size).
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg className={className} width={size} height={size} viewBox={LOGO_VIEWBOX} aria-hidden="true" focusable="false">
      <path fill="#FFFFFF" fillRule="evenodd" d={LOGO_WHITE} />
      <path fill="#C0212B" fillRule="evenodd" d={LOGO_RED} />
      <path fill="#1B3A6B" fillRule="evenodd" d={LOGO_NAVY} />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark${light ? " wordmark--light" : ""}`}>
      <LogoMark size={38} className={light ? "wordmark__mark--chip" : undefined} />
      <span className="wordmark__text">
        Millsboro <b>Pharmacy</b>
      </span>
    </span>
  );
}
