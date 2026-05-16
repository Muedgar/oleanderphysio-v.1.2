export const mainNavigation = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about/",
  },
  {
    label: "Services",
    href: "/services/",
  },
  {
    label: "Foundation",
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
      { label: "About", href: "/about/" },
      { label: "Services", href: "/services/" },
      { label: "Contact", href: "/contact/" },
    ],
  },
  {
    title: "Services",
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
      { label: "Book an appointment", href: "tel:+2207538791" },
      { label: "Email the clinic", href: "mailto:oleanderphysioclinic@gmail.com" },
      { label: "WhatsApp", href: "https://wa.me/2207538791" },
    ],
  },
] as const;
