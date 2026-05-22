import { promoImages } from "./assets";
import { featuredServices, services } from "./services";
import { siteConfig } from "./site";

export const careModes = [
  {
    title: "Restore",
    description:
      "Calm, focused care for pain recovery, injury rehabilitation, and post-operative movement.",
    services: [
      "Sports physiotherapy",
      "Orthopedic physiotherapy",
      "Pain and mobility support",
    ],
  },
  {
    title: "Strengthen",
    description:
      "Guided movement that rebuilds control, conditioning, and confidence in daily activity.",
    services: ["Exercise therapy", "Fitness conditioning", "Wellness support"],
  },
  {
    title: "Rebalance",
    description:
      "Support for posture, balance, coordination, breathing, and the movements that make life feel easier.",
    services: [
      "Neurological physiotherapy",
      "Geriatric physiotherapy",
      "Ergonomics and workplace health",
    ],
  },
] as const;

export const homePage = {
  eyebrow: siteConfig.tagline,
  title: "Move without fear again.",
  intro:
    "Specialist physiotherapy in Bakau for recovery, strength, and confident movement.",
  heroImage: promoImages.appointment,
  recoveryStatement: {
    kicker: "Recovery, reimagined",
    title: "Recovery is not rushed. It is guided, strengthened, and rebuilt.",
    description:
      "Oleander Physio Clinic supports people recovering from pain, injury, surgery, neurological change, and everyday movement limitations with care shaped around the body they want to return to.",
  },
  careModes,
  imageMoment: {
    title: "Every plan begins with understanding how you move.",
    description:
      "Assessment, hands-on treatment, education, and progressive exercise come together to help you move with less pain and more trust in your body.",
    image: promoImages.appointment,
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
