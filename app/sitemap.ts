import type { MetadataRoute } from "next";
import { blogs, services, site, team } from "./data/category";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    "",
    "/about",
    "/services",
    "/team",
    "/banking-partners",
    "/testimonials",
    "/blog",
    "/faqs",
    "/enquire-now",
    "/contact",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  return [
    ...pages.map((p) => ({
      url: `${site.url}${p}`,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8,
    })),
    ...services.map((s) => ({ url: `${site.url}/services/${s.slug}`, changeFrequency: "monthly" as const, priority: 0.7 })),
    ...team.map((m) => ({ url: `${site.url}/team/${m.slug}`, changeFrequency: "yearly" as const, priority: 0.5 })),
    ...blogs.map((b) => ({ url: `${site.url}/blog/${b.slug}`, lastModified: b.date, priority: 0.6 })),
  ];
}
