export const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Clinic",
    href: "/about/",
  },
  {
    label: "Care",
    href: "/services/",
  },
  {
    label: "Community",
    href: "/foundation/",
  },
  {
    label: "Contact",
    href: "/contact/",
  },
] as const;

export const footerNavigation = [
  {
    title: "Clinic",
    links: [
      { label: "Clinic", href: "/about/" },
      { label: "Care", href: "/services/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Care",
    links: [
      { label: "Sports Physiotherapy", href: "/services/#sports-physiotherapy" },
      {
        label: "Neurological Physiotherapy",
        href: "/services/#neurological-physiotherapy",
      },
      { label: "Women's Health", href: "/services/#womens-health-physiotherapy" },
      { label: "Paediatric Physiotherapy", href: "/services/#pediatric-physiotherapy" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Start assessment", href: "tel:+2207538791" },
      { label: "Tell us what hurts", href: "mailto:oleanderphysioclinic@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/2207538791" },
    ],
  },
] as const;
