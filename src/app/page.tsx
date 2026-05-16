import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CalendarDays,
  HeartPulse,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

import {
  contactActions,
  contactInfo,
  fullAddress,
  homePage,
  imageAltText,
  promoImages,
  siteConfig,
} from "../../content";
import { createPageMetadata } from "@/lib/seo";
import { ContactStrip } from "@/components/layout/contact-strip";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = createPageMetadata("home");

const approachItems = [
  {
    title: "Assessment first",
    description:
      "Care begins with understanding your symptoms, goals, daily demands, and recovery history.",
    icon: BadgeCheck,
  },
  {
    title: "Treatment that fits",
    description:
      "Plans combine hands-on care, movement guidance, education, and exercise matched to your needs.",
    icon: HeartPulse,
  },
  {
    title: "Progress you can use",
    description:
      "The focus is better movement, safer activity, and confidence in everyday life.",
    icon: Sparkles,
  },
] as const;

export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-clinic-ink text-white">
        <Image
          src={homePage.heroImage}
          alt={imageAltText.appointment}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-58"
          sizes="100vw"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,42,42,0.96),rgba(16,42,42,0.78)_42%,rgba(43,180,167,0.36))]" />
        <Container className="grid min-h-[76svh] items-center gap-10 py-16 md:py-20 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <Badge className="bg-white/14 text-white ring-1 ring-white/22">
              {homePage.eyebrow}
            </Badge>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-normal md:text-6xl">
              {homePage.title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/82 md:text-lg">
              {homePage.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href={siteConfig.primaryCallToAction.href}>
                  <CalendarDays aria-hidden="true" />
                  {siteConfig.primaryCallToAction.label}
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-clinic-ink hover:bg-clinic-mint"
              >
                <Link href="/services/">
                  Explore services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
            <dl className="mt-10 grid gap-4 text-sm sm:grid-cols-3">
              <div>
                <dt className="font-bold text-primary">Appointments</dt>
                <dd className="mt-1 text-white/78">{contactInfo.appointmentPhone}</dd>
              </div>
              <div>
                <dt className="font-bold text-primary">Management</dt>
                <dd className="mt-1 text-white/78">{contactInfo.managementPhone}</dd>
              </div>
              <div>
                <dt className="font-bold text-primary">Location</dt>
                <dd className="mt-1 text-white/78">Bakau, The Gambia</dd>
              </div>
            </dl>
          </div>

          <div className="hidden justify-end lg:flex">
            <div className="w-full max-w-sm rounded-lg border border-white/18 bg-white/10 p-5 shadow-soft backdrop-blur">
              <p className="text-sm font-bold uppercase tracking-normal text-primary">
                Clinic focus
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-white/86">
                {homePage.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3">
                    <ShieldCheck
                      className="mt-0.5 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <Section className="py-8 md:py-10">
        <Container>
          <ContactStrip />
        </Container>
      </Section>

      <Section className="pt-10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
              <SectionHeading
                eyebrow="Our services"
                title="Specialist physiotherapy for every stage of recovery."
              description="From sports injuries and orthopedic care to neurological, paediatric, geriatric, women's health, respiratory, workplace, and wellness support."
            />
            <div className="flex justify-start lg:justify-end">
              <Button asChild variant="outline">
                <Link href="/services/">
                  View all services
                  <ArrowRight aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {homePage.featuredServices.map((service) => (
              <Card
                key={service.slug}
                id={service.slug}
                className="overflow-hidden transition-shadow hover:shadow-clinic-card"
              >
                {service.image ? (
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <Image
                      src={service.image}
                      alt={`${service.title} at ${siteConfig.name}`}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                ) : null}
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.summary}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-3">
            {approachItems.map((item) => {
              const Icon = item.icon;

              return (
                <Card key={item.title} className="border-transparent shadow-sm">
                  <CardHeader>
                    <span className="mb-2 flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
            <div>
              <SectionHeading
                eyebrow="Access"
                title="Book directly with the clinic."
                description="Call, WhatsApp, or email the team with your symptoms, preferred appointment time, and the type of physiotherapy support you need."
              />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Users className="size-5 text-primary" aria-hidden="true" />
                      Insurance accepted
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {homePage.insuranceAccepted.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <BadgeCheck
                            className="size-4 text-primary"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <MapPin className="size-5 text-primary" aria-hidden="true" />
                      Visit the clinic
                    </CardTitle>
                    <CardDescription>{fullAddress}</CardDescription>
                  </CardHeader>
                </Card>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a href={contactActions.appointmentHref}>
                    <CalendarDays aria-hidden="true" />
                    Book by phone
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={contactActions.emailHref}>Email your request</a>
                </Button>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
                <Image
                  src={promoImages.insuranceAccepted}
                  alt={imageAltText.insuranceAccepted}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
