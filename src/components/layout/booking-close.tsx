import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import {
  contactActions,
  contactInfo,
  fullAddress,
  siteConfig,
} from "../../../content";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

type BookingCloseProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  className?: string;
};

const contactRoutes = [
  {
    label: "Call",
    value: contactInfo.appointmentPhone,
    href: contactActions.appointmentHref,
    icon: Phone,
  },
  {
    label: "WhatsApp",
    value: contactInfo.appointmentPhone,
    href: contactActions.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: contactInfo.email,
    href: contactActions.emailHref,
    icon: Mail,
  },
  {
    label: "Visit",
    value: fullAddress,
    href: "/contact/",
    icon: MapPin,
  },
] as const;

export function BookingClose({
  eyebrow = "Next step",
  title = "Begin with one calm conversation.",
  description = "Share what you are experiencing, what you want to return to, and when you would like to be seen. The clinic team will guide you toward the right appointment.",
  className,
}: BookingCloseProps) {
  return (
    <section className={cn("editorial-section bg-clinic-ink text-white", className)}>
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
          <div className="max-w-2xl">
            <p className="editorial-eyebrow" data-reveal="fade">
              {eyebrow}
            </p>
            <h2
              className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-normal md:text-6xl"
              data-reveal="lift"
            >
              {title}
            </h2>
            <p
              className="mt-7 text-base leading-8 text-white/76 md:text-lg"
              data-reveal="fade"
            >
              {description}
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row" data-reveal="fade">
              <Button asChild size="lg">
                <a href={contactActions.appointmentHref}>
                  <CalendarDays aria-hidden="true" />
                  Book an appointment
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white/12 text-white ring-1 ring-white/24 hover:bg-white hover:text-clinic-ink"
              >
                <a href={contactActions.emailHref}>Email the clinic</a>
              </Button>
            </div>
          </div>

          <div data-reveal="lift">
            <div className="grid gap-px overflow-hidden rounded-lg border border-white/14 bg-white/14 sm:grid-cols-2">
              {contactRoutes.map((route) => {
                const Icon = route.icon;

                return (
                  <a
                    key={route.label}
                    href={route.href}
                    className="focus-ring min-w-0 bg-clinic-ink/82 p-5 transition-colors hover:bg-white/10"
                  >
                    <span className="flex size-10 items-center justify-center rounded-md bg-white/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span className="mt-5 block text-xs font-bold uppercase tracking-normal text-white/58">
                      {route.label}
                    </span>
                    <span className="mt-2 block break-words text-sm font-semibold leading-6 text-white">
                      {route.value}
                    </span>
                  </a>
                );
              })}
            </div>

            {siteConfig.insuranceAccepted.length ? (
              <p className="mt-5 text-sm leading-6 text-white/62">
                Insurance accepted: {siteConfig.insuranceAccepted.join(", ")}.
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
