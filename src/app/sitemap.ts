import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/privacidade", priority: 0.3 },
    { path: "/termos", priority: 0.3 },
    ...projects.map((project) => ({
      path: `/projetos/${project.slug}`,
      priority: project.featured ? 0.8 : 0.7,
    })),
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteConfig.url}${path}`,
    changeFrequency: "monthly",
    priority,
  }));
}
