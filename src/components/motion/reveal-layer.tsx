"use client";

import { useEffect } from "react";

const revealPresets = {
  fade: { y: 18, opacity: 1 },
  lift: { y: 36, opacity: 1 },
  image: { scale: 1.06, opacity: 1 },
  hero: { y: 28, opacity: 1 },
} as const;

type RevealPreset = keyof typeof revealPresets;

function getRevealPreset(value: string | undefined): RevealPreset {
  if (value === "image" || value === "hero" || value === "lift") {
    return value;
  }

  return "fade";
}

function getRevealDelay(value: string | undefined) {
  if (!value) {
    return 0;
  }

  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

export function RevealLayer() {
  useEffect(() => {
    let isCancelled = false;
    let observer: IntersectionObserver | undefined;
    let fallbackTimer: number | undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      return;
    }

    async function setupReveals() {
      const gsapModule = await import("gsap");
      const gsap = gsapModule.gsap;

      if (isCancelled) {
        return;
      }

      const elements = gsap.utils.toArray<HTMLElement>("[data-reveal]");
      const heroElements = elements.filter(
        (element) => getRevealPreset(element.dataset.reveal) === "hero",
      );
      const scrollElements = elements.filter(
        (element) => getRevealPreset(element.dataset.reveal) !== "hero",
      );

      heroElements.forEach((element) => {
        const delay = getRevealDelay(element.dataset.revealDelay);

        gsap.fromTo(
          element,
          revealPresets.hero,
          {
            y: 0,
            opacity: 1,
            delay,
            duration: 1,
            ease: "power3.out",
            clearProps: "transform,opacity,willChange",
          },
        );
      });

      scrollElements.forEach((element) => {
        const preset = getRevealPreset(element.dataset.reveal);

        gsap.set(element, revealPresets[preset]);
      });

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            const element = entry.target as HTMLElement;
            const preset = getRevealPreset(element.dataset.reveal);
            const delay = getRevealDelay(element.dataset.revealDelay);

            gsap.to(element, {
              y: 0,
              scale: 1,
              opacity: 1,
              delay,
              duration: preset === "image" ? 1.05 : 0.9,
              ease: "power3.out",
              clearProps: "transform,opacity,willChange",
            });
            observer?.unobserve(element);
          });
        },
        { rootMargin: "0px 0px -16% 0px", threshold: 0.12 },
      );

      scrollElements.forEach((element) => observer?.observe(element));

      fallbackTimer = window.setTimeout(() => {
        gsap.set(elements, {
          y: 0,
          scale: 1,
          opacity: 1,
          clearProps: "transform,opacity,willChange",
        });
      }, 2400);
    }

    setupReveals();

    return () => {
      isCancelled = true;
      observer?.disconnect();
      if (fallbackTimer) {
        window.clearTimeout(fallbackTimer);
      }
    };
  }, []);

  return null;
}
