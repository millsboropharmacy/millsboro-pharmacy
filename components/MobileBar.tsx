import Link from "next/link";
import { BIZ } from "@/lib/site";

// Floating split pill on phones: transfer is the main action.
export function MobileBar() {
  return (
    <div className="mbar" role="region" aria-label="Quick actions">
      <Link href="/transfer" className="mbar__main">
        Transfer my prescriptions
      </Link>
      <a href={BIZ.phoneHref} className="mbar__call" aria-label={`Call ${BIZ.phone}`}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            fill="currentColor"
            d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"
          />
        </svg>
        Call
      </a>
    </div>
  );
}
