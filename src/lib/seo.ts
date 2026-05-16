import type { Metadata } from "next";

import { defaultSeo, pageSeo, siteConfig } from "../../content";

type PageSeoKey = keyof typeof pageSeo;

export function createPageMetadata(page: PageSeoKey): Metadata {
  const metadata = pageSeo[page];
  const absoluteUrl = `${siteConfig.siteUrl}${metadata.path}`;

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: metadata.path,
    },
    openGraph: {
      title:
        page === "home"
          ? siteConfig.name
          : `${metadata.title} | ${siteConfig.name}`,
      description: metadata.description,
      url: absoluteUrl,
      siteName: defaultSeo.openGraph.siteName,
      locale: defaultSeo.openGraph.locale,
      type: defaultSeo.openGraph.type,
      images: [
        {
          url: defaultSeo.openGraph.image,
          width: 905,
          height: 1280,
          alt: `${siteConfig.name} services overview`,
        },
      ],
    },
    twitter: {
      card: defaultSeo.twitter.card,
      title:
        page === "home"
          ? siteConfig.name
          : `${metadata.title} | ${siteConfig.name}`,
      description: metadata.description,
      images: [defaultSeo.twitter.image],
    },
  };
}
