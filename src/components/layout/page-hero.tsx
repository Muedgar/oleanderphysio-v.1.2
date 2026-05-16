import Image from "next/image";

import { cn } from "@/lib/utils";
import { Container } from "./container";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  image?: string;
  imageAlt?: string;
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  image,
  imageAlt = "",
  className,
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative isolate overflow-hidden bg-clinic-ink text-white",
        className,
      )}
    >
      {image ? (
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-38"
          sizes="100vw"
        />
      ) : null}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,42,42,0.96),rgba(16,42,42,0.82)_54%,rgba(43,180,167,0.45))]" />
      <Container className="py-16 md:py-24">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-bold uppercase tracking-normal text-primary">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="font-display text-4xl font-bold leading-tight md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 text-base leading-8 text-white/82 md:text-lg">
            {description}
          </p>
        </div>
      </Container>
    </section>
  );
}
