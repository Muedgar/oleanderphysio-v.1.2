import { ArrowRight, CalendarDays, CheckCircle2 } from "lucide-react";

import { homePage, imageAltText, siteConfig } from "../../content";
import { BookingClose } from "@/components/layout/booking-close";
import { CareModes } from "@/components/layout/care-modes";
import { EditorialImagePanel } from "@/components/layout/editorial-image-panel";
import { ImmersiveHero } from "@/components/layout/immersive-hero";
import { RecoveryStatement } from "@/components/layout/recovery-statement";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { RecoveryField } from "@/components/motion/recovery-field";
import { RevealLayer } from "@/components/motion/reveal-layer";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata("home");

export default function Home() {
  return (
    <>
      <RevealLayer />
      <ImmersiveHero
        eyebrow={homePage.eyebrow}
        title={homePage.title}
        description={homePage.intro}
        image={homePage.heroImage}
        imageAlt={imageAltText.appointment}
        primaryAction={{
          label: "Start assessment",
          href: siteConfig.primaryCallToAction.href,
          icon: <CalendarDays aria-hidden="true" />,
        }}
        secondaryAction={{
          label: "See the pathway",
          href: "/services/",
          icon: <ArrowRight aria-hidden="true" />,
        }}
      />

      <RecoveryStatement
        kicker={homePage.recoveryStatement.kicker}
        title={homePage.recoveryStatement.title}
        description={homePage.recoveryStatement.description}
      />

      <Section tone="muted">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
            <div>
              <p className="editorial-eyebrow">Clinic focus</p>
              <h2 className="editorial-title mt-5">
                Specialist rehabilitation services.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {homePage.clinicFocus.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-md border border-border bg-background p-4"
                >
                  <CheckCircle2
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    aria-hidden="true"
                  />
                  <p className="font-bold leading-6 text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      <EditorialImagePanel
        eyebrow="Assessment first"
        title={homePage.imageMoment.title}
        description={homePage.imageMoment.description}
        image={homePage.imageMoment.image}
        imageAlt={imageAltText.hallwayOne}
        caption={homePage.imageMoment.caption}
        align="image-left"
        action={{
          label: "Meet your care team",
          href: "/about/",
        }}
      />

      <CareModes
        eyebrow="Care pathways"
        title="Three ways back into confident movement."
        description="Oleander groups care around what your body needs next: less pain, more strength, and movement that feels steady again."
        modes={homePage.careModes}
        action={{
          label: "Choose your pathway",
          href: "/services/",
        }}
      />

      <RecoveryField />

      <BookingClose
        eyebrow="Leave with a plan"
        title="Start with a clear first step."
        description="Tell the clinic what hurts, what has changed, and what you want to return to. Your first assessment helps shape the right recovery plan."
      />
    </>
  );
}
