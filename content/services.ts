import { serviceImages } from "./assets";

export type ServiceCategory =
  | "sports"
  | "neurological"
  | "musculoskeletal"
  | "womens-health"
  | "pediatric"
  | "cardiorespiratory"
  | "geriatric"
  | "occupational-health"
  | "telerehabilitation"
  | "community"
  | "exercise-therapy"
  | "wellness"
  | "assistive-devices";

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ServiceCategory;
  summary: string;
  description: string[];
  examples?: string[];
  image?: string;
};

export type ServiceGroup = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  serviceSlugs: Service["slug"][];
};

export const services: Service[] = [
  {
    slug: "sports-physiotherapy",
    title: "Sports Physiotherapy",
    shortTitle: "Sports",
    category: "sports",
    image: serviceImages.sportsPhysiotherapy,
    summary:
      "Assessment and treatment for injuries related to sport, exercise, training, and active lifestyles.",
    description: [
      "Sports physiotherapy focuses on injuries related to sports and exercise at all levels and ages.",
      "Athletes and active people often place higher performance demands on joints, ligaments, muscles, and tendons. Care is shaped around recovery, safe return to activity, and reducing the risk of further injury.",
    ],
  },
  {
    slug: "neurological-physiotherapy",
    title: "Neurological Physiotherapy",
    shortTitle: "Neurological",
    category: "neurological",
    image: serviceImages.neurologicalPhysiotherapy,
    summary:
      "Physiotherapy for people living with neurological conditions affecting movement, coordination, balance, and function.",
    description: [
      "Neurological physiotherapy supports individuals with conditions affecting the brain, spinal cord, and nerves.",
      "Treatment is designed to improve functional ability, confidence, mobility, and quality of life after neurological change or injury.",
    ],
    examples: [
      "Stroke",
      "Multiple sclerosis",
      "Spinal cord injury",
      "Parkinson's disease",
    ],
  },
  {
    slug: "orthopedic-physiotherapy",
    title: "Orthopedic Physiotherapy",
    shortTitle: "Orthopedic",
    category: "musculoskeletal",
    image: serviceImages.orthopedicPhysiotherapy,
    summary:
      "Musculoskeletal care for joints, muscles, bones, ligaments, tendons, and post-operative recovery.",
    description: [
      "Orthopedic physiotherapy focuses on conditions affecting the musculoskeletal system, including joints, muscles, bones, ligaments, and tendons.",
      "Care may support pain reduction, movement restoration, strengthening, and recovery after orthopedic surgery.",
    ],
    examples: [
      "Fractures",
      "Muscle strains",
      "Ligament sprains",
      "Post-operative conditions",
      "Tendonitis",
      "Bursitis",
    ],
  },
  {
    slug: "womens-health-physiotherapy",
    title: "Women's Health Physiotherapy",
    shortTitle: "Women's Health",
    category: "womens-health",
    image: serviceImages.womensHealthPhysiotherapy,
    summary:
      "Specialist care for women's health needs, including antenatal, postnatal, pelvic health, and recovery support.",
    description: [
      "Women's health physiotherapy supports women through childbirth-related needs, antenatal and postnatal care, and pelvic health concerns.",
      "Care may also support women recovering after gynaecological surgery and those managing pain, continence concerns, or movement changes.",
    ],
    examples: [
      "Incontinence",
      "Pelvic pain",
      "Prenatal and postpartum musculoskeletal pain",
      "Osteoporosis",
      "Rehabilitation following breast surgery",
      "Lymphedema",
      "Education, prevention, wellness, and exercise",
    ],
  },
  {
    slug: "pediatric-physiotherapy",
    title: "Paediatric Physiotherapy",
    shortTitle: "Paediatric",
    category: "pediatric",
    image: serviceImages.pediatricPhysiotherapy,
    summary:
      "Physiotherapy for babies and children with congenital conditions, developmental needs, or acquired injuries.",
    description: [
      "Paediatric physiotherapy, also known as children's physiotherapy, helps manage congenital diseases and acquired injuries in babies and children.",
      "Care may focus on orthopedic, neurological, developmental, and movement-related needs.",
    ],
    examples: ["Orthopaedics", "Congenital malformations", "Neurology"],
  },
  {
    slug: "cardiorespiratory-physiotherapy",
    title: "Cardiorespiratory Physiotherapy",
    shortTitle: "Cardiorespiratory",
    category: "cardiorespiratory",
    image: serviceImages.cardiorespiratoryPhysiotherapy,
    summary:
      "Physiotherapy for prevention, rehabilitation, and support for conditions affecting the heart and lungs.",
    description: [
      "Cardiorespiratory physiotherapy supports clients with diseases and injuries affecting the heart and lungs.",
      "Care may include rehabilitation, breathing support, conditioning, and recovery after illness, injury, or surgery.",
    ],
    examples: [
      "COPD",
      "Asthma",
      "Bronchiectasis",
      "Bronchitis",
      "Emphysema",
      "Respiratory infections",
      "Pneumonia",
      "Heart or lung injury",
      "Recovery after heart or lung surgery",
    ],
  },
  {
    slug: "geriatric-physiotherapy",
    title: "Geriatric Physiotherapy",
    shortTitle: "Geriatric",
    category: "geriatric",
    image: serviceImages.geriatricPhysiotherapy,
    summary:
      "Physiotherapy for older adults focused on mobility, strength, coordination, balance, and daily function.",
    description: [
      "Geriatric physiotherapy addresses physical issues concerning elderly people.",
      "Care considers age-related changes including reduced activity, loss of muscle strength, decreased coordination, and lower tolerance for physical effort.",
    ],
  },
  {
    slug: "occupational-health-ergonomics",
    title: "Occupational Health and Ergonomics",
    shortTitle: "Occupational Health",
    category: "occupational-health",
    image: serviceImages.occupationalHealthErgonomics,
    summary:
      "Workplace-focused care that promotes health, wellbeing, and injury prevention.",
    description: [
      "Occupational health and ergonomics focuses on proactively promoting health and wellbeing in the work environment.",
      "Ergonomic care aims to reduce workplace injury risk and help workers avoid illness, injury, absence, and secondary health consequences.",
    ],
  },
  {
    slug: "telerehabilitation",
    title: "Telerehabilitation",
    shortTitle: "Telerehabilitation",
    category: "telerehabilitation",
    summary:
      "Remote physiotherapy guidance for clients who need flexible support beyond the clinic.",
    description: [
      "Telerehabilitation provides physiotherapy guidance, follow-up, education, and exercise support through remote communication.",
      "It can help clients stay consistent with recovery plans when travel, distance, or scheduling makes in-person visits difficult.",
    ],
  },
  {
    slug: "community-physiotherapy",
    title: "Community Physiotherapy",
    shortTitle: "Community",
    category: "community",
    summary:
      "Physiotherapy support designed around people, families, and practical day-to-day recovery needs.",
    description: [
      "Community physiotherapy helps people receive practical rehabilitation and movement support in ways that fit daily life.",
      "Care may include education, mobility support, exercise planning, and guidance for families or caregivers.",
    ],
  },
  {
    slug: "exercise-therapy-fitness-conditioning",
    title: "Exercise Therapy and Fitness Conditioning",
    shortTitle: "Exercise Therapy",
    category: "exercise-therapy",
    summary:
      "Exercise-based therapy to improve strength, conditioning, mobility, balance, and physical confidence.",
    description: [
      "Exercise therapy uses guided movement and progressive activity to support recovery, prevent injury, and improve physical capacity.",
      "Programs can be adapted for rehabilitation, general conditioning, and safe return to active routines.",
    ],
  },
  {
    slug: "health-promotion-wellness",
    title: "Health Promotion and Wellness",
    shortTitle: "Wellness",
    category: "wellness",
    summary:
      "Education and prevention-focused care to support healthier movement and long-term wellbeing.",
    description: [
      "Health promotion and wellness services focus on prevention, education, lifestyle support, and sustainable movement habits.",
      "The goal is to help clients understand their bodies, stay active, and make informed decisions about their recovery and wellbeing.",
    ],
  },
  {
    slug: "assistive-devices-aids",
    title: "Provision of Assistive Devices and Aids",
    shortTitle: "Assistive Devices",
    category: "assistive-devices",
    summary:
      "Guidance on supportive devices and aids that improve safety, mobility, independence, and comfort.",
    description: [
      "Assistive devices and aids can help clients move more safely, conserve energy, and maintain independence during recovery or long-term care.",
      "The clinic can advise on suitable supports based on a client's condition, goals, and daily environment.",
    ],
  },
];

export const serviceGroups: ServiceGroup[] = [
  {
    id: "pain-injury-recovery",
    eyebrow: "Pathway 01",
    title: "Pain, injury, and recovery",
    description:
      "For pain, sports injuries, orthopedic recovery, post-operative movement, and the strength needed to return with confidence.",
    serviceSlugs: [
      "sports-physiotherapy",
      "orthopedic-physiotherapy",
      "exercise-therapy-fitness-conditioning",
    ],
  },
  {
    id: "mobility-balance-neurological",
    eyebrow: "Pathway 02",
    title: "Mobility, balance, and neurological care",
    description:
      "For movement changes, balance concerns, neurological rehabilitation, age-related mobility, and support that makes daily life safer.",
    serviceSlugs: [
      "neurological-physiotherapy",
      "geriatric-physiotherapy",
      "assistive-devices-aids",
    ],
  },
  {
    id: "family-life-stage-care",
    eyebrow: "Pathway 03",
    title: "Family and life-stage care",
    description:
      "For women's health, children, breathing support, and changing bodies that need careful physiotherapy at the right pace.",
    serviceSlugs: [
      "womens-health-physiotherapy",
      "pediatric-physiotherapy",
      "cardiorespiratory-physiotherapy",
    ],
  },
  {
    id: "work-wellness-community",
    eyebrow: "Pathway 04",
    title: "Work, wellness, and community",
    description:
      "For workplace health, prevention, remote guidance, wellness habits, and practical recovery support beyond the treatment room.",
    serviceSlugs: [
      "occupational-health-ergonomics",
      "health-promotion-wellness",
      "community-physiotherapy",
      "telerehabilitation",
    ],
  },
];

export const featuredServices = services.slice(0, 8);
