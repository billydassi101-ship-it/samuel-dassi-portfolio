import Link from "next/link";
import { Mail, FileText, MapPin, ExternalLink } from "lucide-react";

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

const NAV_ITEMS = [
  { name: "À propos", href: "/#about" },
  { name: "Projets", href: "/#projects" },
  { name: "Compétences", href: "/#skills" },
  { name: "Services", href: "/#services" },
  { name: "Parcours", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background text-foreground transition-colors">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono font-bold text-xs">
                SD
              </span>
              <span className="font-bold text-lg text-foreground">
                Samuel Dassi
              </span>
            </div>

            <p className="text-xs font-mono text-primary font-medium">
              AI Engineer - Data Scientist - ML Engineer
            </p>

            <div className="space-y-1 text-xs text-muted-foreground pt-1">
              <p className="flex items-center gap-1.5">
                <MapPin className="size-3.5 text-primary shrink-0" />
                <span>Lille, France</span>
              </p>
              <p className="pl-5 text-muted-foreground/80">
                Mobilité : France entière et environs
              </p>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-muted-foreground">
              Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider font-mono text-muted-foreground">
              Contact & Réseaux
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:billydassi101@gmail.com"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <Mail className="size-4 text-primary" />
                  <span>billydassi101@gmail.com</span>
                </a>
              </li>
              <li>
                <Link
                  href="/cv/download"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <FileText className="size-4 text-primary" />
                  <span>Télécharger le CV (PDF)</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/billydassi101-ship-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <GithubIcon className="size-4" />
                  <span>GitHub</span>
                  <ExternalLink className="size-3 opacity-60 ml-auto" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-foreground transition-colors"
                >
                  <LinkedinIcon className="size-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="size-3 opacity-60 ml-auto" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/40 flex items-center justify-center text-xs text-muted-foreground font-mono">
          <p>© 2026 Samuel Dassi. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
