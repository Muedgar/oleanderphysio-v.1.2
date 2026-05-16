import type { MetadataRoute } from "next";

import { sitemapPages, siteConfig } from "../../content";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitemapPages.map((page) => ({
    url: `${siteConfig.siteUrl}${page.path}`,
    lastModified,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
