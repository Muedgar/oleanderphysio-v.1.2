import { promoImages } from "./assets";
import { featuredServices, services } from "./services";
import { siteConfig } from "./site";

export const homePage = {
  eyebrow: siteConfig.tagline,
  title: "Physiotherapy care for recovery, movement, and everyday wellbeing.",
  intro:
    "Oleander Physio Clinic provides specialist physiotherapy services in Bakau for people recovering from injury, managing pain, rebuilding strength, or looking for professional movement support.",
  heroImage: promoImages.appointment,
  highlights: [
    "Sports and musculoskeletal rehabilitation",
    "Neurological, paediatric, geriatric, and women's health physiotherapy",
    "Cardiorespiratory care, workplace ergonomics, wellness, and fitness conditioning",
  ],
  featuredServices,
  insuranceIntro: "Insurance accepted",
  insuranceAccepted: siteConfig.insuranceAccepted,
} as const;

export const aboutPage = {
  title: "About Oleander Physio Clinic",
  intro:
    "Oleander Physio Clinic supports clients with practical, professional physiotherapy care shaped around recovery goals, daily function, and long-term wellbeing.",
  sections: [
    {
      title: "Care focused on recovery",
      body:
        "The clinic provides physiotherapy services for people with sports injuries, neurological conditions, musculoskeletal pain, women's health needs, paediatric concerns, respiratory conditions, age-related mobility changes, and workplace-related discomfort.",
    },
    {
      title: "A clear path forward",
      body:
        "Each client receives guidance that helps them understand their condition, follow a treatment plan, and take meaningful steps toward safer movement and better function.",
    },
  ],
  values: [
    "Professional assessment",
    "Practical rehabilitation",
    "Education and prevention",
    "Care for all ages",
  ],
} as const;

export const servicesPage = {
  title: "Physiotherapy Services",
  intro:
    "Explore physiotherapy services for injury recovery, neurological rehabilitation, women's health, paediatric care, respiratory conditions, workplace wellbeing, fitness conditioning, and long-term wellness.",
  services,
} as const;

export const foundationPage = {
  title: "Community Care",
  intro:
    "Oleander Physio Clinic promotes better movement, recovery education, and access to physiotherapy support for individuals, families, workplaces, and the wider community.",
  sections: [
    {
      title: "Health promotion",
      body:
        "Education, prevention, and wellness support help people understand their bodies, reduce injury risk, and make confident decisions about movement and recovery.",
    },
    {
      title: "Practical support",
      body:
        "Community-focused physiotherapy can include exercise guidance, mobility support, workplace ergonomics, caregiver education, and advice on assistive devices.",
    },
  ],
} as const;

export const contactPage = {
  title: "Contact Oleander Physio Clinic",
  intro:
    "Book an appointment, ask about services, or send details about the support you need. The clinic team will guide you on the next step.",
  formSubject: "Physiotherapy appointment request",
} as const;
