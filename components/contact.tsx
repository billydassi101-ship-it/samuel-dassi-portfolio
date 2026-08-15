"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Globe,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function GithubIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className = "size-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "billydassi101@gmail.com";
  const phone = "07 45 65 86 81";
  const phoneRaw = "0745658681";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="py-16 md:py-24 bg-muted/20 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <MessageSquare className="size-3.5" />
            <span>Contact & Opportunités</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Discutons de votre projet
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Disponible pour échanger sur des opportunités d&apos;alternance (AI Engineer / Data Scientist / ML Engineer) débutant en Septembre ou Octobre 2026.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Email Card */}
          <Card className="border-border/60 bg-card hover:border-primary/40 transition-colors flex flex-col justify-between">
            <CardHeader className="p-6 pb-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Mail className="size-6" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                Email
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <p className="font-mono text-sm text-foreground break-all">
                {email}
              </p>
              <div className="flex items-center gap-2 pt-1">
                <a
                  href={`mailto:${email}`}
                  className={cn(
                    buttonVariants({ variant: "default", size: "sm" }),
                    "gap-1.5 flex-1"
                  )}
                >
                  <Mail className="size-3.5" />
                  <span>Envoyer un mail</span>
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "px-2.5"
                  )}
                  aria-label="Copier l'adresse email"
                  title="Copier l'adresse email"
                >
                  {copied ? (
                    <Check className="size-4 text-emerald-500" />
                  ) : (
                    <Copy className="size-4" />
                  )}
                </button>
              </div>
            </CardContent>
          </Card>

          {/* Phone Card */}
          <Card className="border-border/60 bg-card hover:border-primary/40 transition-colors flex flex-col justify-between">
            <CardHeader className="p-6 pb-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <Phone className="size-6" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                Téléphone
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-4">
              <p className="font-mono text-sm text-foreground">{phone}</p>
              <div className="pt-1">
                <a
                  href={`tel:${phoneRaw}`}
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "w-full gap-1.5"
                  )}
                >
                  <Phone className="size-3.5" />
                  <span>Appeler directement</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Location & Mobility Card */}
          <Card className="border-border/60 bg-card hover:border-primary/40 transition-colors flex flex-col justify-between">
            <CardHeader className="p-6 pb-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3">
                <MapPin className="size-6" />
              </div>
              <CardTitle className="text-lg font-bold text-foreground">
                Localisation & Mobilité
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-6 space-y-2">
              <div className="flex items-center gap-2 text-sm text-foreground font-medium">
                <MapPin className="size-4 text-primary shrink-0" />
                <span>Lille, France</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Globe className="size-3.5 text-muted-foreground/80 shrink-0" />
                <span>Mobilité : France entière et environs</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Networks Banner */}
        <div className="mt-8 p-6 rounded-xl border border-border/60 bg-card flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="font-semibold text-foreground text-sm sm:text-base">
              Retrouvez Samuel Dassi sur les réseaux professionnels :
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href="https://github.com/billydassi101-ship-it/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-2 flex-1 sm:flex-none"
              )}
            >
              <GithubIcon className="size-4" />
              <span>GitHub</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>

            <a
              href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "sm" }),
                "gap-2 flex-1 sm:flex-none"
              )}
            >
              <LinkedinIcon className="size-4" />
              <span>LinkedIn</span>
              <ExternalLink className="size-3 opacity-60" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
