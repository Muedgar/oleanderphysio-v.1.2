import type { Metadata } from "next";

import { defaultSeo, pageSeo, siteConfig } from "../../content";

type PageSeoKey = keyof typeof pageSeo;

export function createPageMetadata(page: PageSeoKey): Metadata {
  const metadata = pageSeo[page];
  const absoluteUrl = `${siteConfig.siteUrl}${metadata.path}`;
  const title =
    page === "home" ? { absolute: metadata.title } : metadata.title;

  return {
    title,
    description: metadata.description,
    keywords: [
      "Oleander Physio",
      "Oleander Physio Clinic",
      "Oleander Physio Clinic Gambia",
      "physiotherapy in The Gambia",
      "physiotherapy in Bakau",
      "sports physiotherapy Gambia",
      "rehabilitation clinic Bakau",
    ],
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
