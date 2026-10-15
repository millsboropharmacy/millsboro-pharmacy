// Vector redraw of the Millsboro Pharmacy mark (cross + heartbeat).
export function LogoMark({ size = 36, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      className={className}
      width={size}
      height={size * 0.98}
      viewBox="55 15 300 295"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="62" y="100" width="288" height="122" rx="24" fill="#C0212B" />
      <rect x="140" y="20" width="130" height="285" rx="30" fill="#1B3A6B" />
      <polyline
        points="100,161 138,161 166,109 205,220 244,109 272,161 312,161"
        fill="none"
        stroke="#fff"
        strokeWidth="19"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className={`wordmark${light ? " wordmark--light" : ""}`}>
      <LogoMark size={34} />
      <span className="wordmark__text">
        Millsboro <b>Pharmacy</b>
      </span>
    </span>
  );
}
