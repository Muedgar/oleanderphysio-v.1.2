import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { mainNavigation, siteConfig } from "../../../content";
import { Container } from "@/components/layout/container";
import { PageHero } from "@/components/layout/page-hero";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Menu",
  description: `Navigate ${siteConfig.name}.`,
  alternates: {
    canonical: "/menu/",
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function MenuPage() {
  return (
    <>
      <PageHero
        eyebrow={siteConfig.tagline}
        title="Menu"
        description="Quick links to care pathways, the clinic, community support, and contact options."
      />
      <Section>
        <Container>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mainNavigation.map((item) => (
              <Card key={item.href}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between gap-4 text-xl">
                    {item.label}
                    <Button asChild variant="ghost" size="icon">
                      <Link href={item.href} aria-label={`Open ${item.label}`}>
                        <ArrowRight aria-hidden="true" />
                      </Link>
                    </Button>
                  </CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
