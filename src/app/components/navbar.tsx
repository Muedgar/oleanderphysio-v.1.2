"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CalendarDays, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState } from "react";

import {
  brandAssets,
  contactActions,
  contactInfo,
  fullAddress,
  imageAltText,
  mainNavigation,
  siteConfig,
} from "../../../content";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  const normalizedPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  return normalizedPath.startsWith(href);
}

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="hidden border-b border-border bg-clinic-ink text-white lg:block">
        <div className="container flex h-10 items-center justify-between gap-6 text-sm">
          <a
            href={contactActions.appointmentHref}
            className="inline-flex items-center gap-2 font-semibold"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            Appointments: {contactInfo.appointmentPhone}
          </a>
          <div className="flex min-w-0 items-center gap-6">
            <a
              href={contactActions.emailHref}
              className="inline-flex min-w-0 items-center gap-2"
            >
              <Mail className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate">{contactInfo.email}</span>
            </a>
            <span className="inline-flex max-w-xl items-center gap-2 truncate">
              <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
              <span className="truncate">{fullAddress}</span>
            </span>
          </div>
        </div>
      </div>

      <nav className="container flex min-h-20 items-center justify-between gap-4 py-3">
        <Link
          href="/"
          className="focus-ring flex shrink-0 items-center rounded-md"
          aria-label={`${siteConfig.name} home`}
          onClick={() => setIsOpen(false)}
        >
          <Image
            src={brandAssets.logo}
            alt={imageAltText.logo}
            width={258}
            height={90}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {mainNavigation.map((item) => {
            const active = isActivePath(pathname, item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "focus-ring rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                  active && "bg-secondary text-primary",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="outline">
            <a href={contactActions.whatsappHref}>WhatsApp</a>
          </Button>
          <Button asChild>
            <a href={siteConfig.primaryCallToAction.href}>
              <CalendarDays aria-hidden="true" />
              {siteConfig.primaryCallToAction.label}
            </a>
          </Button>
        </div>

        <button
          type="button"
          className="focus-ring inline-flex size-11 items-center justify-center rounded-md border border-border bg-background text-foreground lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container grid gap-3 py-4">
            {mainNavigation.map((item) => {
              const active = isActivePath(pathname, item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-ring rounded-md px-3 py-3 text-base font-semibold text-muted-foreground",
                    active && "bg-secondary text-primary",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="grid gap-2 border-t border-border pt-3">
              <Button asChild>
                <a href={siteConfig.primaryCallToAction.href}>
                  <CalendarDays aria-hidden="true" />
                  {siteConfig.primaryCallToAction.label}
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={contactActions.whatsappHref}>WhatsApp</a>
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
