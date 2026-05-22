import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "./container";

type EditorialImagePanelProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  align?: "image-left" | "image-right";
  action?: {
    label: string;
    href: string;
  };
  className?: string;
};

export function EditorialImagePanel({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  align = "image-right",
  action,
  className,
}: EditorialImagePanelProps) {
  const imageFirst = align === "image-left";

  return (
    <section className={cn("editorial-section bg-background", className)}>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div
            className={cn(
              "editorial-image-frame aspect-[4/5] md:aspect-[16/11] lg:aspect-[4/5]",
              imageFirst ? "lg:order-first" : "lg:order-last",
            )}
            data-reveal="image"
          >
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="editorial-image"
              sizes="(min-width: 1024px) 48vw, 100vw"
            />
          </div>

          <div className="max-w-2xl">
            {eyebrow ? (
              <p className="editorial-eyebrow" data-reveal="fade">
                {eyebrow}
              </p>
            ) : null}
            <h2 className="editorial-title mt-5" data-reveal="lift">
              {title}
            </h2>
            <p className="editorial-copy mt-7" data-reveal="fade">
              {description}
            </p>
            {action ? (
              <Button asChild variant="outline" className="mt-8" data-reveal="fade">
                <a href={action.href}>
                  {action.label}
                  <ArrowRight aria-hidden="true" />
                </a>
              </Button>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}
