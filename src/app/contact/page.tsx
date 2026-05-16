import Image from "next/image";
import {
  CalendarDays,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import {
  contactActions,
  contactInfo,
  contactPage,
  fullAddress,
  imageAltText,
  promoImages,
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
    title: "Appointments",
    value: contactInfo.appointmentPhone,
    description: "Call to book physiotherapy care.",
    href: contactActions.appointmentHref,
    icon: CalendarDays,
  },
  {
    title: "Management and inquiries",
    value: contactInfo.managementPhone,
    description: "Use this line for management questions and general inquiries.",
    href: contactActions.managementHref,
    icon: Phone,
  },
  {
    title: "Email",
    value: contactInfo.email,
    description: "Send appointment details or service questions by email.",
    href: contactActions.emailHref,
    icon: Mail,
  },
  {
    title: "WhatsApp",
    value: contactInfo.appointmentPhone,
    description: "Send a quick message to request appointment guidance.",
    href: contactActions.whatsappHref,
    icon: MessageCircle,
  },
] as const;

const messageChecklist = [
  "Your name and preferred contact number",
  "The main reason for the appointment",
  "How long the symptoms or concern has been present",
  "Preferred appointment days or times",
  "Any relevant referral, diagnosis, or insurance details",
] as const;

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={contactPage.title}
        description={contactPage.intro}
        image={promoImages.appointment}
        imageAlt={imageAltText.appointment}
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
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Visit"
                title="Find Oleander Physio Clinic in Bakau."
                description="The clinic is located on Bertil Harding Highway, opposite the Election House, next to Fatou Golden Plaza, on the ground floor of the Cornerstone Center."
              />
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="size-5 text-primary" aria-hidden="true" />
                    Clinic address
                  </CardTitle>
                  <CardDescription>{fullAddress}</CardDescription>
                </CardHeader>
              </Card>
              <div className="mt-6 flex flex-wrap gap-2">
                {siteConfig.insuranceAccepted.map((item) => (
                  <Badge key={item} variant="secondary">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-card shadow-soft">
              <Image
                src={promoImages.servicesOverview}
                alt={imageAltText.servicesOverview}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <SectionHeading
              eyebrow="Message the clinic"
              title="Prepare a clear appointment request."
              description="Use the form to assemble the details the clinic needs. It opens your email app with the message ready for you to review and send."
            />
            <StaticContactForm />
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 rounded-lg border border-border bg-card p-6 shadow-sm lg:grid-cols-[1fr_0.8fr] lg:p-8">
            <SectionHeading
              eyebrow="Before you contact us"
              title="Helpful details to include in your message."
              description="A few clear details help the clinic understand what support you need and respond with the right next step."
            />
            <Card className="bg-secondary">
              <CardHeader>
                <CardTitle>Appointment message checklist</CardTitle>
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
                      Call for an appointment
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href={contactActions.emailHref}>Email the clinic</a>
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
