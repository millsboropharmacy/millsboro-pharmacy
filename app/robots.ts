import type { MetadataRoute } from "next";
import { NOINDEX, SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Preview copies stay out of Google through the noindex meta tag, not robots.txt.
  // Blocking crawlers here would also stop iMessage/Facebook from loading the link preview image,
  // and Google has to be allowed to crawl a page to see its noindex tag.
  if (NOINDEX) {
    return { rules: { userAgent: "*", allow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
