import { cn } from "@/lib/utils";
import { Container } from "./container";

type RecoveryStatementProps = {
  kicker?: string;
  title: string;
  description?: string;
  className?: string;
};

export function RecoveryStatement({
  kicker,
  title,
  description,
  className,
}: RecoveryStatementProps) {
  return (
    <section className={cn("editorial-section-large bg-background", className)}>
      <Container>
        <div className="max-w-5xl">
          {kicker ? (
            <p className="editorial-eyebrow" data-reveal="fade">
              {kicker}
            </p>
          ) : null}
          <h2 className="editorial-title-large mt-6 max-w-4xl" data-reveal="lift">
            {title}
          </h2>
          {description ? (
            <p className="editorial-copy-large mt-8 max-w-2xl" data-reveal="fade">
              {description}
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
