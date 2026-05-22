import { ArrowRight, CalendarDays } from "lucide-react";

import { homePage, imageAltText, siteConfig } from "../../content";
import { BookingClose } from "@/components/layout/booking-close";
import { CareModes } from "@/components/layout/care-modes";
import { EditorialImagePanel } from "@/components/layout/editorial-image-panel";
import { ImmersiveHero } from "@/components/layout/immersive-hero";
import { RecoveryStatement } from "@/components/layout/recovery-statement";
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
          label: siteConfig.primaryCallToAction.label,
          href: siteConfig.primaryCallToAction.href,
          icon: <CalendarDays aria-hidden="true" />,
        }}
        secondaryAction={{
          label: "Explore care",
          href: "/services/",
          icon: <ArrowRight aria-hidden="true" />,
        }}
      />

      <RecoveryStatement
        kicker={homePage.recoveryStatement.kicker}
        title={homePage.recoveryStatement.title}
        description={homePage.recoveryStatement.description}
      />

      <CareModes
        modes={homePage.careModes}
        action={{
          label: "Explore services",
          href: "/services/",
        }}
      />

      <RecoveryField />

      <EditorialImagePanel
        eyebrow="Assessment first"
        title={homePage.imageMoment.title}
        description={homePage.imageMoment.description}
        image={homePage.imageMoment.image}
        imageAlt={imageAltText.appointment}
        align="image-left"
        action={{
          label: "Learn about the clinic",
          href: "/about/",
        }}
      />

      <BookingClose />
    </>
  );
}
