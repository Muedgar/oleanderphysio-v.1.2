import {
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import {
  clinicImages,
  contactActions,
  contactInfo,
  contactPage,
  imageAltText,
  siteConfig,
} from "../../../content";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { StaticContactForm } from "@/components/contact/static-contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = createPageMetadata("contact");

const contactMethods = [
  {
    title: "Start by phone",
    value: contactInfo.appointmentPhone,
    description: "Talk through what has changed and choose a first step.",
    href: contactActions.appointmentHref,
    icon: CalendarDays,
  },
  {
    title: "Clinic inquiries",
    value: contactInfo.managementPhone,
    description: "For management questions, partnerships, and general clinic needs.",
    href: contactActions.managementHref,
    icon: Phone,
  },
  {
    title: "Email",
    value: contactInfo.email,
    description: "Send the details you want the clinic to understand before care.",
    href: contactActions.emailHref,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: contactInfo.appointmentPhone,
    description: "Send a quick note when calling is not convenient.",
    href: contactActions.whatsappHref,
    icon: MessageCircle,
  },
] as const;

const messageChecklist = [
  "Your name and preferred contact number",
  "What hurts, changed, or feels limited",
  "How long the symptoms or concern has been present",
  "What you want to return to",
  "Preferred assessment days or times",
  "Any relevant referral, diagnosis, or insurance details",
] as const;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactPage.title}
        description={contactPage.intro}
        image={clinicImages.hallwayTwo}
        imageAlt={imageAltText.hallwayTwo}
      />

      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method) => {
              const Icon = method.icon;

              return (
                <Card key={method.title}>
                  <CardHeader>
                    <span className="mb-2 flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a href={method.href}>{method.value}</a>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            eyebrow="Clinic locations"
            title="Oleander Physio Clinic Gambia and Rwanda."
            description="The Gambia clinic is serving patients in Bakau. Rwanda details will be added soon as the expansion continues."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {siteConfig.locations.map((location) => (
              <Card key={location.name}>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                    {location.name}
                  </CardTitle>
                  <CardDescription>
                    <span className="block font-semibold text-foreground">
                      {location.status}
                    </span>
                    <span className="mt-2 block">{location.address}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-sm font-extrabold uppercase tracking-normal text-foreground">
                    Insurance accepted
                  </h3>
                  {location.insuranceAccepted.length ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {location.insuranceAccepted.map((item) => (
                        <Badge key={`${location.name}-${item}`} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-sm leading-6 text-muted-foreground">
                      Insurance information coming soon.
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Tell us what hurts"
              title="Prepare a clear assessment request."
              description="Use the form to shape the details into a clear message. Review it, send it, and arrive with the important context already shared."
            />
            <StaticContactForm />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 rounded-lg border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-8">
            <SectionHeading
              eyebrow="Leave with a plan"
              title="Helpful details to include."
              description="A few clear details help the clinic understand your body, your goal, and the right first step."
            />
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Assessment message checklist</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-secondary-foreground">
                  {messageChecklist.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-col gap-3">
                  <Button asChild>
                    <a href={contactActions.appointmentHref}>
                      Talk it through
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={contactActions.emailHref}>Send the details</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
