import type { MetadataRoute } from "next";
import { CASE_STUDIES } from "./referenzen/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.impova.de",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://www.impova.de/ueber-mich",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://www.impova.de/webdesign",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://www.impova.de/referenzen",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://www.impova.de/standorte/landshut",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    ...CASE_STUDIES.map((c) => ({
      url: `https://www.impova.de/referenzen/${c.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    })),
  ];
}
