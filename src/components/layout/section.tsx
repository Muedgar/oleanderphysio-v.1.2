import * as React from "react";

import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  tone?: "default" | "muted" | "primary";
};

export function Section({
  className,
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        tone === "muted" && "bg-muted",
        tone === "primary" && "bg-primary text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}
