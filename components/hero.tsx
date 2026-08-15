import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  FileText,
  Mail,
  GraduationCap,
  Briefcase,
  Sparkles,
  Cpu,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const TECH_TAGS = [
  "AI",
  "Machine Learning",
  "Generative AI",
  "RAG",
  "LLM",
  "Computer Vision",
];

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

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
    >
      {/* Background ambient mesh grid */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-start lg:items-center justify-between gap-12">
          {/* Main Hero Info */}
          <div className="flex flex-col items-start gap-8 max-w-3xl flex-1">
            {/* Status & University Badges */}
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge
                variant="outline"
                className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs sm:text-sm font-medium"
              >
                <Briefcase className="size-3.5" />
                <span>Alternance · Septembre 2026</span>
              </Badge>

              <Badge
                variant="secondary"
                className="gap-1.5 py-1 px-3 text-xs sm:text-sm font-medium"
              >
                <GraduationCap className="size-3.5" />
                <span>Master IA - Université de Lille</span>
              </Badge>
            </div>

            {/* Name & Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
                Samuel Dassi
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-medium text-primary flex items-center gap-2 flex-wrap">
                <Cpu className="size-6 shrink-0 text-primary" />
                <span>AI Engineer · Data Scientist · Generative AI</span>
              </p>
            </div>

            {/* Value Proposition / Hook */}
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Je conçois des solutions intelligentes combinant Machine Learning,
              LLM, RAG et Computer Vision pour transformer des données complexes
              en applications concrètes.
            </p>

            {/* Key Domain Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-mono text-muted-foreground mr-1 flex items-center gap-1">
                <Sparkles className="size-3.5 text-primary" /> Core Focus:
              </span>
              {TECH_TAGS.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="font-mono text-xs py-1 px-2.5 bg-background/50 hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            {/* CTAs & Social Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 w-full sm:w-auto">
              <Link
                href="#projects"
                className={cn(
                  buttonVariants({ variant: "default", size: "lg" }),
                  "gap-2 text-base shadow-sm"
                )}
              >
                <span>Voir mes projets</span>
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/cv/download"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "gap-2 text-base"
                )}
              >
                <FileText className="size-4" />
                <span>Télécharger mon CV</span>
              </Link>

              <Link
                href="#contact"
                className={cn(
                  buttonVariants({ variant: "ghost", size: "lg" }),
                  "gap-2 text-base text-muted-foreground hover:text-foreground"
                )}
              >
                <Mail className="size-4" />
                <span>Me contacter</span>
              </Link>

              {/* Social Icons separator & links */}
              <div className="hidden sm:flex items-center gap-2 border-l border-border pl-4 ml-2">
                <a
                  href="https://github.com/billydassi101-ship-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 text-muted-foreground hover:text-foreground"
                  )}
                  aria-label="GitHub de Samuel Dassi (nouvel onglet)"
                >
                  <GithubIcon className="size-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-10 text-muted-foreground hover:text-foreground"
                  )}
                  aria-label="LinkedIn de Samuel Dassi (nouvel onglet)"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>

              {/* Mobile Social Links */}
              <div className="flex sm:hidden items-center justify-center gap-4 pt-2 border-t border-border/40 mt-2">
                <a
                  href="https://github.com/billydassi101-ship-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2"
                  aria-label="GitHub"
                >
                  <GithubIcon className="size-5" />
                  <span>GitHub</span>
                </a>
                <span className="text-border">•</span>
                <a
                  href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground py-2"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="size-5" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="relative shrink-0 self-center lg:self-auto">
            <div className="relative size-48 sm:size-60 md:size-72 lg:size-80 rounded-2xl overflow-hidden border border-border/60 bg-muted/30 shadow-xl ring-1 ring-border/50">
              <Image
                src="/profile/samuel-dassi.webp"
                alt="Samuel Dassi"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 768px) 240px, (max-width: 1024px) 288px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
