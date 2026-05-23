import { brandAssets } from "./assets";
import { contactInfo, fullAddress } from "./contact";

export const siteConfig = {
  name: "Oleander Physio Clinic",
  legalName: "Oleander Physio Clinic",
  alternateNames: [
    "Oleander Physio",
    "Oleander Physio Clinic Gambia",
    "Oleander Physio Clinic Rwanda",
  ],
  tagline: "Your Path To Recovery",
  description:
    "Oleander Physio Clinic is a Pan-African rehabilitation center advancing modern physiotherapy and movement care across Africa.",
  locale: "en_GM",
  siteUrl: "https://www.oleanderphysio.com",
  logo: brandAssets.logo,
  favicon: brandAssets.favicon,
  appleTouchIcon: brandAssets.appleTouchIcon,
  contact: contactInfo,
  address: fullAddress,
  foundingLocation: "Bakau, The Gambia",
  insuranceAccepted: ["Central Bank of The Gambia", "GamSwitch"],
  locations: [
    {
      name: "Oleander Physio Clinic Gambia",
      country: "The Gambia",
      status: "Serving patients in Bakau",
      address: fullAddress,
      insuranceAccepted: ["Central Bank of The Gambia", "GamSwitch"],
    },
    {
      name: "Oleander Physio Clinic Rwanda",
      country: "Rwanda",
      status: "Rehabilitation and physiotherapy services expanding soon",
      address: "Rwanda location details coming soon",
      insuranceAccepted: [],
    },
  ],
  primaryCallToAction: {
    label: "Start assessment",
    href: "tel:+2207538791",
  },
  secondaryCallToAction: {
    label: "Tell us what hurts",
    href: "mailto:oleanderphysioclinic@gmail.com",
  },
} as const;

export const brandPalette = {
  teal: "#2bb4a7",
  deepTeal: "#168f86",
  mint: "#d7f2ef",
  ink: "#102a2a",
  softGray: "#f5f7f7",
  white: "#ffffff",
} as const;
