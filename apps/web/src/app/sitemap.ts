import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const PATHS = ["/", "/about", "/docs", "/social", "/privacy", "/terms", "/application/terminal", "/application/rugcheck", "/application/leaderboard", "/application/swap", "/application/marketplace"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PATHS.map((p) => ({ url: `${site.url}${p === "/" ? "" : p}`, lastModified: new Date() }));
}
