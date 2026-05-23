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
        "border-t border-border/70 py-20 md:py-28",
        tone === "muted" && "bg-muted",
        tone === "primary" && "bg-primary text-primary-foreground",
        className,
      )}
      {...props}
    />
  );
}
