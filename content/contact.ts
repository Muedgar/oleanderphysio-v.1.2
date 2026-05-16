export const contactInfo = {
  appointmentPhone: "+220 753 8791",
  managementPhone: "+220 7003598",
  email: "oleanderphysioclinic@gmail.com",
  socialName: "Oleander Physio Clinic Gambia",
  address: {
    street: "Bertil Harding Highway",
    area: "Bakau",
    locality: "Opposite the Election House, next to Fatou Golden Plaza",
    building: "Ground floor of the Cornerstone Center",
    country: "The Gambia",
  },
  hours: {
    summary: "Contact the clinic to confirm appointment availability.",
  },
} as const;

export const contactActions = {
  appointmentHref: "tel:+2207538791",
  managementHref: "tel:+2207003598",
  emailHref: "mailto:oleanderphysioclinic@gmail.com",
  whatsappHref: "https://wa.me/2207538791",
} as const;

export const fullAddress = [
  contactInfo.address.area,
  contactInfo.address.street,
  contactInfo.address.locality,
  contactInfo.address.building,
  contactInfo.address.country,
].join(", ");
