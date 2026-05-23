import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";

import {
  brandAssets,
  contactActions,
  contactInfo,
  footerNavigation,
  fullAddress,
  imageAltText,
  siteConfig,
} from "../../../content";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="bg-clinic-ink text-white">
      <div className="container py-14">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <Link
              href="/"
              className="inline-flex rounded-md bg-white p-3"
              aria-label={`${siteConfig.name} home`}
            >
              <Image
                src={brandAssets.logo}
                alt={imageAltText.logo}
                width={258}
                height={90}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/78">
              {siteConfig.description}
            </p>
            <p className="mt-4 max-w-md text-sm font-semibold leading-6 text-white">
              First we understand. Then we rebuild.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <a href={siteConfig.primaryCallToAction.href}>
                  <CalendarDays aria-hidden="true" />
                  {siteConfig.primaryCallToAction.label}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={contactActions.emailHref}>Tell us what hurts</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerNavigation.map((group) => (
              <div key={group.title}>
                <h2 className="text-sm font-bold uppercase tracking-normal text-primary">
                  {group.title}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={`${group.title}-${link.href}-${link.label}`}>
                      {link.href.startsWith("/") ? (
                        <Link
                          href={link.href}
                          className="text-sm leading-6 text-white/76 transition-colors hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-sm leading-6 text-white/76 transition-colors hover:text-white"
                        >
                          {link.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <Separator className="my-10 bg-white/14" />

        <div className="grid gap-5 text-sm text-white/78 lg:grid-cols-3">
          <a
            href={contactActions.appointmentHref}
            className="flex items-start gap-3 transition-colors hover:text-white"
          >
            <Phone className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-white">Start by phone</span>
              {contactInfo.appointmentPhone}
            </span>
          </a>
          <a
            href={contactActions.emailHref}
            className="flex items-start gap-3 transition-colors hover:text-white"
          >
            <Mail className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-white">Send details</span>
              {contactInfo.email}
            </span>
          </a>
          <Link
            href="/contact/"
            className="flex items-start gap-3 transition-colors hover:text-white"
          >
            <MapPin className="mt-1 size-4 shrink-0 text-primary" aria-hidden="true" />
            <span>
              <span className="block font-semibold text-white">Address</span>
              {fullAddress}
            </span>
          </Link>
        </div>

        <Separator className="my-8 bg-white/14" />

        <div className="flex flex-col gap-3 text-xs text-white/62 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights
            reserved.
          </p>
          <p>{siteConfig.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
