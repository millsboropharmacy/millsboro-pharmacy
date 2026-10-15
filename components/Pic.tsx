import Image from "next/image";
import { PHOTOS, type PhotoKey } from "@/lib/photos";

export function Pic({
  name,
  sizes = "(max-width: 900px) 100vw, 33vw",
  className = "",
  priority = false,
}: {
  name: PhotoKey;
  sizes?: string;
  className?: string;
  priority?: boolean;
}) {
  const p = PHOTOS[name];
  return (
    <div className={`pic ${className}`}>
      <Image
        src={p.src}
        alt={p.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: p.position ?? "50% 50%" }}
      />
    </div>
  );
}
