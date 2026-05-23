import Image from "next/image";
import { CheckCircle2, HeartPulse, MapPin, ShieldCheck, Users } from "lucide-react";

import {
  aboutPage,
  clinicImages,
  imageAltText,
  siteConfig,
} from "../../../content";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = createPageMetadata("about");

const carePoints = [
  {
    title: "Professional excellence",
    description:
      "Care is guided by professional standards, clinical reasoning, and respectful patient support.",
    icon: ShieldCheck,
  },
  {
    title: "Movement restoration",
    description:
      "Physiotherapy focuses on recovery, pain management, strength, and confident movement.",
    icon: Users,
  },
  {
    title: "Long-term wellbeing",
    description:
      "Clients receive education and support that helps them move better and live healthier.",
    icon: HeartPulse,
  },
] as const;

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.tagline}
        title={aboutPage.title}
        description={aboutPage.intro}
        image={clinicImages.hallwayTwo}
        imageAlt={imageAltText.hallwayTwo}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
              <Image
                src={clinicImages.doctorEric}
                alt={imageAltText.doctorEric}
                fill
                priority
                className="object-cover object-top"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
            <p className="text-sm font-semibold leading-6 text-muted-foreground lg:hidden">
              Oleander Physio Clinic. Practical assessment, treatment, and
              recovery education in Bakau.
            </p>
            <div>
              <SectionHeading
                eyebrow="How we help"
                title="Physiotherapy that gives recovery a clear direction."
                description="Oleander Physio Clinic combines assessment, treatment, education, and practical exercise guidance so clients know what to do next and why it matters."
              />
              <div className="mt-8 space-y-5">
                {aboutPage.sections.map((section) => (
                  <div key={section.title} className="flex gap-4">
                    <CheckCircle2
                      className="mt-1 size-5 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <div>
                      <h2 className="text-lg font-bold">{section.title}</h2>
                      <p className="mt-2 leading-7 text-muted-foreground">
                        {section.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-8 hidden max-w-md text-sm font-semibold leading-6 text-muted-foreground lg:block">
                Oleander Physio Clinic. Practical assessment, treatment, and
                recovery education in Bakau.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Locations"
            title="Oleander Physio Clinic operates in two locations."
            description="The Gambia is serving patients in Bakau. Rwanda is expanding rehabilitation and physiotherapy services, with more location information coming soon."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {aboutPage.locations.map((location) => (
              <Card key={location.name}>
                <CardHeader>
                  <MapPin className="mb-2 size-6 text-primary" aria-hidden="true" />
                  <CardTitle>{location.name}</CardTitle>
                  <CardDescription>
                    <span className="block font-semibold text-foreground">
                      {location.country}
                    </span>
                    <span className="mt-2 block">{location.status}</span>
                    <span className="mt-2 block">{location.address}</span>
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Clinic values"
            title="Move better, recover stronger, live healthier."
            description="Oleander Physio Clinic is committed to professional excellence, evidence-based care, and long-term wellbeing."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {carePoints.map((point) => {
              const Icon = point.icon;

              return (
                <Card key={point.title}>
                  <CardHeader>
                    <span className="mb-2 flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{point.title}</CardTitle>
                    <CardDescription>{point.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
