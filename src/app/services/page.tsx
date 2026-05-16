import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";

import {
  contactActions,
  promoImages,
  servicesPage,
  siteConfig,
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

export const metadata = createPageMetadata("services");

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title={servicesPage.title}
        description={servicesPage.intro}
        image={promoImages.servicesOverview}
        imageAlt={`${siteConfig.name} services overview poster`}
      />

      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <aside className="lg:sticky lg:top-32 lg:self-start">
              <Card className="bg-secondary">
                <CardHeader>
                  <CardTitle>Find a service</CardTitle>
                  <CardDescription>
                    Choose a care area and contact the clinic if you are unsure
                    which service fits your needs.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {servicesPage.services.map((service) => (
                      <a
                        key={service.slug}
                        href={`#${service.slug}`}
                        className="focus-ring rounded-md bg-background px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {service.shortTitle}
                      </a>
                    ))}
                  </div>
                  <Button asChild className="mt-6 w-full">
                    <a href={contactActions.appointmentHref}>
                      Book an appointment
                      <ArrowRight aria-hidden="true" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </aside>

            <div className="grid gap-6">
              {servicesPage.services.map((service) => (
                <Card
                  key={service.slug}
                  id={service.slug}
                  className="scroll-mt-32 overflow-hidden"
                >
                  <div className="grid gap-0 md:grid-cols-[0.9fr_1.1fr]">
                    {service.image ? (
                      <div className="relative min-h-72 bg-muted md:min-h-full">
                        <Image
                          src={service.image}
                          alt={`${service.title} at ${siteConfig.name}`}
                          fill
                          className="object-cover"
                          sizes="(min-width: 1024px) 34vw, 100vw"
                        />
                      </div>
                    ) : (
                      <div className="flex min-h-72 items-center justify-center bg-clinic-hero p-8">
                        <HeartPulse
                          className="size-16 text-primary"
                          aria-hidden="true"
                        />
                      </div>
                    )}
                    <div>
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
                            <h2 className="text-sm font-bold uppercase tracking-normal text-foreground">
                              Common examples
                            </h2>
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
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="muted">
        <Container>
          <div className="grid gap-8 rounded-lg bg-card p-6 shadow-sm md:grid-cols-[1fr_auto] md:items-center md:p-8">
            <SectionHeading
              eyebrow="Next step"
              title="Not sure where to start?"
              description="Share what you are experiencing and the clinic team can guide you toward the most suitable appointment."
            />
            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <Button asChild>
                <a href={contactActions.appointmentHref}>Call the clinic</a>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact/">Contact options</Link>
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
