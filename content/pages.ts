import { clinicImages, promoImages } from "./assets";
import { featuredServices, serviceGroups, services } from "./services";
import { siteConfig } from "./site";

export const careModes = [
  {
    title: "Restore",
    description:
      "Calm, focused care for pain, injury rehabilitation, and the first safe steps back into movement.",
    services: [
      "Sports physiotherapy",
      "Orthopedic physiotherapy",
      "Pain and mobility support",
    ],
  },
  {
    title: "Strengthen",
    description:
      "Guided exercise that rebuilds control, conditioning, and confidence for daily life.",
    services: ["Exercise therapy", "Fitness conditioning", "Wellness support"],
  },
  {
    title: "Rebalance",
    description:
      "Support for posture, balance, coordination, breathing, and the movements that help life feel easier.",
    services: [
      "Neurological physiotherapy",
      "Geriatric physiotherapy",
      "Ergonomics and workplace health",
    ],
  },
] as const;

export const homePage = {
  eyebrow: siteConfig.tagline,
  title: "Modern rehabilitation care across Africa.",
  intro:
    "Oleander Physio Clinic is a Pan-African rehabilitation center advancing modern physiotherapy care across Africa.",
  heroImage: promoImages.appointment,
  recoveryStatement: {
    kicker: "Physiotherapy care",
    title: "Physiotherapy care for recovery, movement, and everyday wellbeing.",
    description:
      "Oleander Physio Clinic provides specialist physiotherapy services for people recovering from injury, managing pain, rebuilding strength, or looking for professional movement support.",
  },
  clinicFocus: [
    "Sports Rehabilitation",
    "Musculoskeletal Rehabilitation",
    "Neurological Rehabilitation",
    "Paediatric Rehabilitation",
    "Geriatric Rehabilitation",
    "Women's Health Physiotherapy",
    "Cardiorespiratory Rehabilitation",
    "Workplace Ergonomics",
    "Wellness and Fitness Conditioning",
  ],
  careModes,
  imageMoment: {
    title: "Every plan begins with understanding how you move.",
    description:
      "First we understand. Then hands-on treatment, education, and progressive exercise come together to help you move with less pain and more trust in your body.",
    image: clinicImages.hallwayOne,
    caption: "Bakau, The Gambia. Assessment-led care begins with careful observation.",
  },
  highlights: [
    "Restore movement after pain, injury, or surgery",
    "Strengthen mobility, balance, and everyday confidence",
    "Rebalance posture, breathing, work habits, and long-term wellbeing",
  ],
  featuredServices,
  insuranceIntro: "Insurance accepted",
  insuranceAccepted: siteConfig.insuranceAccepted,
} as const;

export const aboutPage = {
  title: "About Us",
  intro:
    "Oleander Physio Clinic is a Pan-African rehabilitation center advancing modern physiotherapy and movement care across Africa.",
  sections: [
    {
      title: "Patient-centered rehabilitation",
      body:
        "Founded to bridge the gap in quality rehabilitation services, Oleander Physio Clinic delivers patient-centered physiotherapy focused on recovery, pain management, movement restoration, strength, and long-term wellbeing.",
    },
    {
      title: "Modern movement care",
      body:
        "We combine clinical expertise with a modern approach to rehabilitation to help individuals return to daily life, sport, work, and performance with confidence.",
    },
    {
      title: "A Pan-African vision",
      body:
        "Our vision is to build a leading African rehabilitation network that makes specialist physiotherapy services more accessible across the continent while promoting healthier, more active communities.",
    },
    {
      title: "Professional commitment",
      body:
        "At Oleander Physio Clinic, we are committed to professional excellence, evidence-based care, and helping people move better, recover stronger, and live healthier.",
    },
  ],
  locations: siteConfig.locations,
  values: [
    "Professional excellence",
    "Evidence-based care",
    "Movement restoration",
    "Long-term wellbeing",
  ],
} as const;

export const servicesPage = {
  title: "Choose your recovery pathway.",
  intro:
    "Start with what has changed in your body, then find the care area closest to the support you need. Every pathway begins with assessment and a plan.",
  groups: serviceGroups,
  services,
} as const;

export const foundationPage = {
  title: "Oleander Foundation",
  intro:
    "Oleander Foundation is a Pan-African rehabilitation and community health initiative dedicated to improving the lives of children and adults living with neurological and physical conditions in vulnerable communities.",
  sections: [
    {
      title: "Access to rehabilitation",
      body:
        "The foundation was established to increase access to rehabilitation services, support systems, and community-based care for individuals who often face barriers to treatment, mobility, education, and independent living.",
    },
    {
      title: "Community-based support",
      body:
        "Through physiotherapy outreach, advocacy, rehabilitation support, caregiver education, and community programs, we aim to create inclusive opportunities for people living with neurological and long-term conditions.",
    },
    {
      title: "Our mission",
      body:
        "Our mission is to support underserved communities across Africa with compassionate, accessible, and sustainable rehabilitation initiatives that improve quality of life and promote dignity, mobility, and independence.",
    },
    {
      title: "Partnerships",
      body:
        "Oleander Foundation is actively seeking collaborators, healthcare professionals, NGOs, institutions, donors, and strategic partners who share our vision of expanding rehabilitation access and strengthening community support systems across Africa.",
    },
  ],
} as const;

export const contactPage = {
  title: "Contact Oleander Physio Clinic",
  intro:
    "Tell the clinic what hurts, what has changed, or what you want to return to. Leave the first conversation with a clearer next step.",
  formSubject: "Physiotherapy assessment request",
} as const;
