import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import {
  defaultSeo,
  localBusinessJsonLd,
  siteConfig,
  websiteJsonLd,
} from "../../content";
import { JsonLd } from "@/components/seo/json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: defaultSeo.title,
    template: defaultSeo.titleTemplate,
  },
  description: defaultSeo.description,
  icons: {
    icon: [
      {
        url: siteConfig.favicon,
        type: "image/png",
      },
      {
        url: "/icon.png",
        type: "image/png",
      },
      {
        url: siteConfig.logo,
        type: "image/png",
      },
    ],
    shortcut: siteConfig.faviconIco,
    apple: siteConfig.appleTouchIcon,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.description,
    url: defaultSeo.openGraph.url,
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
    title: defaultSeo.twitter.title,
    description: defaultSeo.twitter.description,
    images: [defaultSeo.twitter.image],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <JsonLd data={[localBusinessJsonLd, websiteJsonLd]} />
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
