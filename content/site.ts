import { brandAssets } from "./assets";
import { contactInfo, fullAddress } from "./contact";

export const siteConfig = {
  name: "Oleander Physio Clinic",
  legalName: "Oleander Physio Clinic",
  tagline: "Your Path To Recovery",
  description:
    "Physiotherapy clinic in Bakau, The Gambia, offering rehabilitation, recovery support, wellness care, and specialist physiotherapy services.",
  locale: "en_GM",
  siteUrl: "https://oleanderphysioclinic.com",
  logo: brandAssets.logo,
  favicon: brandAssets.favicon,
  faviconIco: brandAssets.faviconIco,
  appleTouchIcon: brandAssets.appleTouchIcon,
  contact: contactInfo,
  address: fullAddress,
  foundingLocation: "Bakau, The Gambia",
  insuranceAccepted: ["Central Bank of The Gambia", "GamSwitch"],
  primaryCallToAction: {
    label: "Book an appointment",
    href: "tel:+2207538791",
  },
  secondaryCallToAction: {
    label: "Send an email",
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
