import { MetadataRoute } from "next";

const baseUrl = "https://dapioil.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/about", "/activites", "/rse", "/contact"];
  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
