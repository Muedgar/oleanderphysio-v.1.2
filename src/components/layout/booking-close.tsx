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
    label: "Start by phone",
    value: contactInfo.appointmentPhone,
    href: contactActions.appointmentHref,
    icon: Phone,
  },
  {
    label: "Quick message",
    value: contactInfo.appointmentPhone,
    href: contactActions.whatsappHref,
    icon: MessageCircle,
  },
  {
    label: "Send details",
    value: contactInfo.email,
    href: contactActions.emailHref,
    icon: Mail,
  },
  {
    label: "Find the clinic",
    value: fullAddress,
    href: "/contact/",
    icon: MapPin,
  },
] as const;

export function BookingClose({
  eyebrow = "Leave with a plan",
  title = "Start with a clear first step.",
  description = "Tell the clinic what hurts, what has changed, and what you want to return to. Your first assessment helps shape the right recovery plan.",
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
              className="editorial-title-inverse mt-5"
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
                  Start your assessment
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white/12 text-white ring-1 ring-white/24 hover:bg-white hover:text-clinic-ink"
              >
                <a href={contactActions.emailHref}>Tell us what hurts</a>
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

            <div className="mt-5 space-y-2 text-sm leading-6 text-white/62">
              {siteConfig.locations.map((location) => (
                <p key={location.name}>
                  <span className="font-semibold text-white/82">
                    {location.name}:
                  </span>{" "}
                  {location.insuranceAccepted.length
                    ? `Insurance accepted: ${location.insuranceAccepted.join(", ")}.`
                    : "Insurance information coming soon."}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
