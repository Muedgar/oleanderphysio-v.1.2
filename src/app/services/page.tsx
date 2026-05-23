import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import {
  clinicImages,
  contactActions,
  imageAltText,
  servicesPage,
} from "../../../content";
import { createPageMetadata } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
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
import type { Service } from "../../../content";

export const metadata = createPageMetadata("services");

const serviceBySlug = new Map(
  servicesPage.services.map((service) => [service.slug, service]),
);

function getGroupService(slug: string): Service | undefined {
  return serviceBySlug.get(slug);
}

function isService(service: Service | undefined): service is Service {
  return Boolean(service);
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Choose the right first step"
        title={servicesPage.title}
        description={servicesPage.intro}
        image={clinicImages.hallwayOne}
        imageAlt={imageAltText.hallwayOne}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Find your pathway</CardTitle>
                  <CardDescription>
                    Start with what has changed. The exact service can be
                    confirmed after assessment.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {servicesPage.groups.map((group) => (
                      <a
                        key={group.id}
                        href={`#${group.id}`}
                        className="focus-ring rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {group.title}
                      </a>
                    ))}
                  </div>
                  <Button asChild className="mt-6 w-full">
                    <a href={contactActions.appointmentHref}>
                      Start with assessment
                      <ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div className="grid gap-16">
              {servicesPage.groups.map((group) => {
                const groupServices = group.serviceSlugs
                  .map(getGroupService)
                  .filter(isService);

                return (
                  <section
                    key={group.id}
                    id={group.id}
                    className="scroll-mt-32"
                    aria-labelledby={`${group.id}-title`}
                  >
                    <div className="grid gap-6 border-b border-border pb-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
                      <div>
                        <p className="editorial-eyebrow">
                          {group.eyebrow}
                        </p>
                        <h2
                          id={`${group.id}-title`}
                          className="mt-5 font-display text-4xl font-semibold leading-[1.04] tracking-normal text-foreground md:text-5xl"
                        >
                          {group.title}
                        </h2>
                      </div>
                      <p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
                        {group.description}
                      </p>
                    </div>

                    <div className="mt-8 grid gap-5">
                      {groupServices.map((service) => (
                        <Card
                          key={service.slug}
                          id={service.slug}
                          className="scroll-mt-32"
                        >
                          <CardHeader>
                            <Badge variant="secondary" className="w-fit">
                              {service.shortTitle}
                            </Badge>
                            <CardTitle className="text-2xl">
                              {service.title}
                            </CardTitle>
                            <CardDescription>{service.summary}</CardDescription>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {service.description.map((paragraph) => (
                              <p
                                key={paragraph}
                                className="leading-7 text-muted-foreground"
                              >
                                {paragraph}
                              </p>
                            ))}
                            {service.examples?.length ? (
                              <div>
                                <h3 className="text-sm font-extrabold uppercase tracking-normal text-foreground">
                                  Often supports
                                </h3>
                                <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                                  {service.examples.map((example) => (
                                    <li
                                      key={example}
                                      className="flex items-start gap-2 text-sm text-muted-foreground"
                                    >
                                      <CheckCircle2
                                        className="mt-0.5 size-4 shrink-0 text-primary"
                                        aria-hidden="true"
                                      />
                                      {example}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ) : null}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 rounded-lg bg-card p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <SectionHeading
              eyebrow="Leave with a plan"
              title="Not sure where to start?"
              description="Tell us what has changed. We will help you choose the most useful first assessment."
            />
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild>
                <a href={contactActions.appointmentHref}>Talk it through</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact/">Send the details</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
