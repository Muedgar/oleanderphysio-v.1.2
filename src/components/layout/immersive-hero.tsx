import Image from "next/image";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

type HeroAction = {
  label: string;
  href: string;
  icon?: ReactNode;
};

type ImmersiveHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  primaryAction?: HeroAction;
  secondaryAction?: HeroAction;
  priority?: boolean;
  imagePosition?: string;
  className?: string;
};

export function ImmersiveHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryAction,
  secondaryAction,
  priority = true,
  imagePosition = "center",
  className,
}: ImmersiveHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-clinic-ink text-white",
        className,
      )}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority={priority}
        className="editorial-image absolute inset-0 -z-30 h-full w-full opacity-72"
        style={{ objectPosition: imagePosition }}
        sizes="100vw"
      />
      <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,20,20,0.92),rgba(16,42,42,0.72)_48%,rgba(16,42,42,0.2))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-clinic-ink via-clinic-ink/85 to-transparent md:h-1/3 md:from-clinic-ink/70 md:via-transparent" />

      <Container className="grid min-h-[88svh] items-end pb-16 pt-32 md:pb-20 md:pt-40 lg:min-h-[92svh]">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="editorial-eyebrow" data-reveal="hero">
              {eyebrow}
            </p>
          ) : null}
          <h1
            className="editorial-hero-title mt-5 max-w-[8ch] sm:max-w-3xl"
            data-reveal="hero"
            data-reveal-delay="0.08"
          >
            {title}
          </h1>
          <p
            className="mt-6 max-w-[28ch] text-base leading-8 text-white/82 sm:max-w-2xl md:text-xl md:leading-9"
            data-reveal="hero"
            data-reveal-delay="0.16"
          >
            {description}
          </p>

          {primaryAction || secondaryAction ? (
            <div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              data-reveal="hero"
              data-reveal-delay="0.24"
            >
              {primaryAction ? (
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={primaryAction.href}>
                    {primaryAction.icon}
                    {primaryAction.label}
                  </a>
                </Button>
              ) : null}
              {secondaryAction ? (
                <Button
                  asChild
                  size="lg"
                  variant="secondary"
                  className="w-full bg-white/12 text-white ring-1 ring-white/26 backdrop-blur hover:bg-white hover:text-clinic-ink sm:w-auto"
                >
                  <a href={secondaryAction.href}>
                    {secondaryAction.icon}
                    {secondaryAction.label}
                  </a>
                </Button>
              ) : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
