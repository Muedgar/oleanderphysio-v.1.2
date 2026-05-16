"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Copy, Mail } from "lucide-react";

import { contactInfo, contactPage, services } from "../../../content";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredTime: string;
  message: string;
};

const initialFormState: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  preferredTime: "",
  message: "",
};

function buildEmailBody(form: FormState) {
  return [
    `Name: ${form.name}`,
    `Phone: ${form.phone}`,
    `Email: ${form.email || "Not provided"}`,
    `Service interest: ${form.service || "Not sure yet"}`,
    `Preferred appointment time: ${form.preferredTime || "Flexible"}`,
    "",
    "Message:",
    form.message,
  ].join("\n");
}

export function StaticContactForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [preparedMessage, setPreparedMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "ready" | "copied">("idle");
  const [error, setError] = useState("");

  const mailtoHref = useMemo(() => {
    const body = preparedMessage || buildEmailBody(form);
    const params = new URLSearchParams({
      subject: contactPage.formSubject,
      body,
    });

    return `mailto:${contactInfo.email}?${params.toString()}`;
  }, [form, preparedMessage]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    setStatus("idle");
    setError("");
  }

  function prepareMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please add your name, phone number, and a short message.");
      return;
    }

    setPreparedMessage(buildEmailBody(form));
    setStatus("ready");
    setError("");
  }

  async function copyMessage() {
    const message = preparedMessage || buildEmailBody(form);

    try {
      await navigator.clipboard.writeText(message);
      setPreparedMessage(message);
      setStatus("copied");
      setError("");
    } catch {
      setError("Copy was not available. Select the prepared message and copy it manually.");
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Prepare an appointment request</CardTitle>
        <CardDescription>
          This form prepares your message for email. Review the message, then
          send it from your email app or copy it into WhatsApp.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form className="grid gap-5" onSubmit={prepareMessage}>
          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Name
              <Input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Your full name"
                autoComplete="name"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Phone
              <Input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder="+220"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold">
              Email
              <Input
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder="you@example.com"
                autoComplete="email"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Service
              <select
                value={form.service}
                onChange={(event) => updateField("service", event.target.value)}
                className="focus-ring h-11 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm"
              >
                <option value="">Not sure yet</option>
                {services.map((service) => (
                  <option key={service.slug} value={service.title}>
                    {service.title}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold">
            Preferred appointment time
            <Input
              value={form.preferredTime}
              onChange={(event) =>
                updateField("preferredTime", event.target.value)
              }
              placeholder="Example: weekday morning, Saturday afternoon"
            />
          </label>

          <label className="grid gap-2 text-sm font-semibold">
            Message
            <Textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Briefly describe the pain, injury, condition, or support you need."
            />
          </label>

          {error ? (
            <p className="rounded-md border border-destructive/30 bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
              {error}
            </p>
          ) : null}

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button type="submit">Prepare message</Button>
          </div>
        </form>

        {preparedMessage ? (
          <div className="mt-6 rounded-lg border border-border bg-muted p-4">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className={cn(
                  "mt-0.5 size-5 shrink-0",
                  status === "copied" ? "text-primary" : "text-muted-foreground",
                )}
                aria-hidden="true"
              />
              <div>
                <h3 className="font-bold">
                  {status === "copied"
                    ? "Message copied"
                    : "Message ready to send"}
                </h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  Send this message to {contactInfo.email}, or paste it into
                  WhatsApp. The clinic will only receive it after you send it
                  from your email or messaging app.
                </p>
              </div>
            </div>
            <pre className="mt-4 max-h-72 overflow-auto whitespace-pre-wrap rounded-md bg-background p-4 text-sm leading-6 text-foreground">
              {preparedMessage}
            </pre>
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href={mailtoHref}>
                  <Mail aria-hidden="true" />
                  Open email
                </a>
              </Button>
              <Button type="button" variant="outline" onClick={copyMessage}>
                <Copy aria-hidden="true" />
                Copy message
              </Button>
            </div>
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
