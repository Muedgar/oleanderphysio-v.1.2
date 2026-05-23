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
    title: "Oleander Physio Clinic | Pan-African Rehabilitation Care",
    description:
      "Oleander Physio Clinic provides physiotherapy care for recovery, movement, and everyday wellbeing across its Gambia clinic and Rwanda expansion.",
    path: "/",
  },
  about: {
    title: "About Oleander Physio Clinic",
    description:
      "Learn about Oleander Physio Clinic, a Pan-African rehabilitation center advancing modern physiotherapy and movement care across Africa.",
    path: "/about/",
  },
  services: {
    title: "Physiotherapy Services and Recovery Pathways",
    description:
      "Explore sports, musculoskeletal, neurological, paediatric, geriatric, women's health, cardiorespiratory, workplace ergonomics, wellness, and fitness rehabilitation.",
    path: "/services/",
  },
  foundation: {
    title: "Oleander Foundation",
    description:
      "Oleander Foundation supports vulnerable communities across Africa through rehabilitation access, caregiver education, advocacy, and community-based care.",
    path: "/foundation/",
  },
  contact: {
    title: "Contact Oleander Physio Clinic",
    description:
      "Contact Oleander Physio Clinic Gambia or ask about the Rwanda expansion, appointments, insurance, and physiotherapy assessment support.",
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
  "@type": ["MedicalBusiness", "MedicalClinic"],
  "@id": `${siteConfig.siteUrl}/#clinic`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateNames,
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
  areaServed: ["The Gambia", "Rwanda", "Africa"],
  medicalSpecialty: "Physiotherapy",
  slogan: siteConfig.tagline,
  priceRange: "$$",
  paymentAccepted: siteConfig.insuranceAccepted.join(", "),
  knowsAbout: [
    "Sports physiotherapy",
    "Musculoskeletal rehabilitation",
    "Neurological physiotherapy",
    "Orthopedic physiotherapy",
    "Women's health physiotherapy",
    "Paediatric physiotherapy",
    "Cardiorespiratory physiotherapy",
    "Geriatric physiotherapy",
    "Occupational health and ergonomics",
    "Wellness and fitness conditioning",
  ],
  addressText: fullAddress,
} as const;

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.siteUrl}/#website`,
  name: siteConfig.name,
  alternateName: siteConfig.alternateNames,
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
