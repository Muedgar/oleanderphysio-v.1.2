import Image from "next/image";
import { CheckCircle2, HeartPulse, ShieldCheck, Users } from "lucide-react";

import {
  aboutPage,
  imageAltText,
  promoImages,
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
    title: "Professional assessment",
    description:
      "Treatment starts with careful listening, movement assessment, and a clear understanding of your recovery goals.",
    icon: ShieldCheck,
  },
  {
    title: "Care for all ages",
    description:
      "Services support children, adults, older people, athletes, workers, and families across different rehabilitation needs.",
    icon: Users,
  },
  {
    title: "Recovery education",
    description:
      "Clients receive practical guidance that helps them understand symptoms, movement, prevention, and progress.",
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
        image={promoImages.servicesOverview}
        imageAlt={imageAltText.servicesOverview}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted shadow-soft">
              <Image
                src={promoImages.appointment}
                alt={imageAltText.appointment}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
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
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Clinic values"
            title="Support that is practical, respectful, and focused on daily life."
            description="The goal is not only symptom relief. The goal is helping people move with more confidence at home, at work, in sport, and in the community."
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
