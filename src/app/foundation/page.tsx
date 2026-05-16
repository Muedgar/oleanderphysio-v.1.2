import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BriefcaseMedical,
  HandHeart,
  HelpingHand,
} from "lucide-react";

import {
  contactActions,
  foundationPage,
  services,
  siteConfig,
} from "../../../content";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/layout/section-heading";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata = createPageMetadata("foundation");

const communityServices = services.filter((service) =>
  [
    "community-physiotherapy",
    "health-promotion-wellness",
    "assistive-devices-aids",
    "occupational-health-ergonomics",
  ].includes(service.slug),
);

const supportAreas = [
  {
    title: "Education and prevention",
    description:
      "Helping clients and families understand movement, recovery, injury prevention, and safer daily routines.",
    icon: HandHeart,
  },
  {
    title: "Workplace wellbeing",
    description:
      "Supporting healthier work environments through ergonomic guidance and practical advice.",
    icon: BriefcaseMedical,
  },
  {
    title: "Accessible recovery",
    description:
      "Guidance for exercises, assistive aids, mobility, and support that fits real daily environments.",
    icon: HelpingHand,
  },
] as const;

export default function Foundation() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.tagline}
        title={foundationPage.title}
        description={foundationPage.intro}
      />

      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-2">
            {foundationPage.sections.map((section) => (
              <Card key={section.title}>
                <CardHeader>
                  <CardTitle>{section.title}</CardTitle>
                  <CardDescription>{section.body}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <SectionHeading
            align="center"
            eyebrow="Community support"
            title="Care that reaches beyond a single appointment."
            description="Community-focused physiotherapy connects treatment with education, confidence, prevention, and practical day-to-day support."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <Card key={area.title}>
                  <CardHeader>
                    <span className="mb-2 flex size-11 items-center justify-center rounded-md bg-secondary text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{area.title}</CardTitle>
                    <CardDescription>{area.description}</CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Related services"
              title="Support for homes, workplaces, and everyday movement."
              description="These services are especially relevant for prevention, education, accessibility, community recovery, and wellness."
            />
            <div className="grid gap-5 sm:grid-cols-2">
              {communityServices.map((service) => (
                <Card key={service.slug}>
                  <CardHeader>
                    <Activity
                      className="mb-2 size-6 text-primary"
                      aria-hidden="true"
                    />
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.summary}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button asChild>
              <a href={contactActions.appointmentHref}>Book an appointment</a>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services/">
                View services
                <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
