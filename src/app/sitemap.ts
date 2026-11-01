import type { MetadataRoute } from "next";

const siteUrl = "https://onesimo-digital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-11-02");
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projectos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/termos", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/projectos/form", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/nexus", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/cliniq", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/aura", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path || "/" }`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
