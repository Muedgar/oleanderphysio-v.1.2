import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

type CareMode = {
  title: string;
  description: string;
  services: readonly string[];
};

type CareModesProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  modes: readonly CareMode[];
  action?: {
    label: string;
    href: string;
  };
  className?: string;
};

export function CareModes({
  eyebrow = "Care modes",
  title = "Three ways back into confident movement.",
  description = "Oleander groups care around what your body needs next: less pain, more strength, and movement that feels steady again.",
  modes,
  action,
  className,
}: CareModesProps) {
  return (
    <section className={cn("editorial-section bg-muted", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="editorial-eyebrow" data-reveal="fade">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="editorial-title mt-5" data-reveal="lift">
              {title}
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            {description ? (
              <p className="editorial-copy" data-reveal="fade">
                {description}
              </p>
            ) : null}
            {action ? (
              <Button asChild variant="outline" className="mt-7" data-reveal="fade">
                <a href={action.href}>
                  {action.label}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>

        <div className="editorial-grid-lines mt-16 grid gap-px md:grid-cols-3">
          {modes.map((mode, index) => (
            <article
              key={mode.title}
              className="bg-background p-7 md:p-8 lg:p-10"
              data-reveal="lift"
              data-reveal-delay={String(index * 0.08)}
            >
              <p className="text-sm font-bold text-primary">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-8 font-display text-3xl font-semibold leading-none tracking-normal text-foreground md:text-4xl">
                {mode.title}
              </h3>
              <p className="mt-5 min-h-24 text-base leading-7 text-muted-foreground">
                {mode.description}
              </p>
              <ul className="mt-8 space-y-3 border-t border-border pt-6">
                {mode.services.map((service) => (
                  <li
                    key={service}
                    className="text-sm font-semibold leading-6 text-foreground/82"
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
