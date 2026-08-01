import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/privacidade", priority: 0.3 },
    { path: "/termos", priority: 0.3 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
