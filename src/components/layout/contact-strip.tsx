import { Mail, MapPin, Phone } from "lucide-react";

import { contactActions, contactInfo, fullAddress } from "../../../content";

const items = [
  {
    label: "Appointments",
    value: contactInfo.appointmentPhone,
    href: contactActions.appointmentHref,
    icon: Phone,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: contactActions.emailHref,
    icon: Mail,
  },
  {
    label: "Location",
    value: fullAddress,
    href: "/contact/",
    icon: MapPin,
  },
] as const;

export function ContactStrip() {
  return (
    <div className="grid gap-3 rounded-lg border border-border bg-card p-3 shadow-sm md:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <a
            key={item.label}
            href={item.href}
            className="focus-ring flex min-w-0 items-start gap-3 rounded-md p-3 text-left transition-colors hover:bg-muted"
          >
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-md bg-secondary text-primary">
              <Icon className="size-4" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-normal text-muted-foreground">
                {item.label}
              </span>
              <span className="mt-1 block break-words text-sm font-semibold leading-5 text-foreground">
                {item.value}
              </span>
            </span>
          </a>
        );
      })}
    </div>
  );
}
