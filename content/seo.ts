import { promoImages } from "./assets";
import { fullAddress } from "./contact";
import { siteConfig } from "./site";

export const defaultSeo = {
  title: siteConfig.name,
  titleTemplate: `%s | ${siteConfig.name}`,
  description: siteConfig.description,
  canonical: siteConfig.siteUrl,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    siteName: siteConfig.name,
    url: siteConfig.siteUrl,
    image: `${siteConfig.siteUrl}${promoImages.servicesOverview}`,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    image: `${siteConfig.siteUrl}${promoImages.servicesOverview}`,
  },
} as const;

export const pageSeo = {
  home: {
    title: "Oleander Physio Clinic",
    description:
      "Physiotherapy clinic in Bakau, The Gambia, offering specialist rehabilitation, recovery support, and wellness services.",
    path: "/",
  },
  about: {
    title: "About",
    description:
      "Learn about Oleander Physio Clinic and its physiotherapy care for recovery, mobility, and wellbeing.",
    path: "/about/",
  },
  services: {
    title: "Services",
    description:
      "Sports, neurological, orthopedic, women's health, paediatric, cardiorespiratory, geriatric, community, and workplace physiotherapy services.",
    path: "/services/",
  },
  foundation: {
    title: "Community Care",
    description:
      "Community-focused physiotherapy support, prevention education, wellness guidance, and practical recovery care.",
    path: "/foundation/",
  },
  contact: {
    title: "Contact",
    description:
      "Contact Oleander Physio Clinic in Bakau to book an appointment or ask about physiotherapy services.",
    path: "/contact/",
  },
} as const;

export const sitemapPages = [
  {
    path: pageSeo.home.path,
    priority: 1,
    changeFrequency: "monthly",
  },
  {
    path: pageSeo.services.path,
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: pageSeo.contact.path,
    priority: 0.85,
    changeFrequency: "monthly",
  },
  {
    path: pageSeo.about.path,
    priority: 0.75,
    changeFrequency: "yearly",
  },
  {
    path: pageSeo.foundation.path,
    priority: 0.65,
    changeFrequency: "yearly",
  },
] as const;

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  description: siteConfig.description,
  url: siteConfig.siteUrl,
  logo: `${siteConfig.siteUrl}${siteConfig.logo}`,
  image: `${siteConfig.siteUrl}${promoImages.servicesOverview}`,
  telephone: siteConfig.contact.appointmentPhone,
  email: siteConfig.contact.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: [
      siteConfig.contact.address.street,
      siteConfig.contact.address.locality,
      siteConfig.contact.address.building,
    ].join(", "),
    addressLocality: siteConfig.contact.address.area,
    addressCountry: siteConfig.contact.address.country,
  },
  areaServed: "The Gambia",
  medicalSpecialty: "Physiotherapy",
  slogan: siteConfig.tagline,
  priceRange: "$$",
  paymentAccepted: siteConfig.insuranceAccepted.join(", "),
  knowsAbout: [
    "Sports physiotherapy",
    "Neurological physiotherapy",
    "Orthopedic physiotherapy",
    "Women's health physiotherapy",
    "Paediatric physiotherapy",
    "Cardiorespiratory physiotherapy",
    "Geriatric physiotherapy",
    "Occupational health and ergonomics",
  ],
  addressText: fullAddress,
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.siteUrl,
  description: siteConfig.description,
  inLanguage: "en",
  publisher: {
    "@type": "MedicalBusiness",
    name: siteConfig.name,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.siteUrl}${siteConfig.logo}`,
    },
  },
} as const;
