import type { MetadataRoute } from "next";

const siteUrl = "https://onesimo-digital.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/servicos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projectos", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/sobre", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/contactos", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/privacidade", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/termos", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/projectos/compra-certa", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/meu-negocio", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/marque-ja", priority: 0.6, changeFrequency: "monthly" as const },
    { path: "/projectos/minha-marca", priority: 0.6, changeFrequency: "monthly" as const },
  ];

  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path || "/"}`,
    changeFrequency,
    priority,
  }));
}
