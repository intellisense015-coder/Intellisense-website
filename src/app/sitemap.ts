import type { MetadataRoute } from "next";
import { capabilities } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://intellisense.cloud";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    ...capabilities.map(({ slug }) => ({ url: `${base}/services/${slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    { url: `${base}/products/autobiz`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/products/solexa`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
