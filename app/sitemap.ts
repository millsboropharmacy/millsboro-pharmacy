import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const core = [
    { path: "/", priority: 1 },
    { path: "/transfer", priority: 0.95 },
    { path: "/refill", priority: 0.9 },
    { path: "/services", priority: 0.8 },
    { path: "/about", priority: 0.6 },
    { path: "/contact-us", priority: 0.8 },
    { path: "/areas-we-serve", priority: 0.6 },
  ];
  return [
    ...core.map((c) => ({ url: `${SITE_URL}${c.path === "/" ? "" : c.path}`, lastModified: now, priority: c.priority })),
    ...SERVICES.map((s) => ({
      url: `${SITE_URL}/services/${s.slug}`,
      lastModified: now,
      priority: s.slug === "vaccines" || s.slug === "free-delivery" ? 0.85 : 0.7,
    })),
  ];
}
