"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Accueil", href: "/#hero" },
  { name: "À propos", href: "/#about" },
  { name: "Projets", href: "/#projects" },
  { name: "Compétences", href: "/#skills" },
  { name: "Services", href: "/#services" },
  { name: "Parcours", href: "/#experience" },
  { name: "Contact", href: "/#contact" },
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

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-colors">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
          onClick={closeMenu}
          aria-label="Samuel Dassi - Accueil"
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-mono font-bold text-sm transition-transform group-hover:scale-105">
            SD
          </span>
          <div className="flex flex-col">
            <span className="font-semibold leading-tight text-foreground text-sm sm:text-base">
              Samuel Dassi
            </span>
            <span className="text-[10px] text-muted-foreground font-mono leading-none">
              AI Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2 text-sm font-medium"
          aria-label="Navigation principale"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Right Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/billydassi101-ship-it/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Profil GitHub (ouvre dans un nouvel onglet)"
          >
            <GithubIcon className="size-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="Profil LinkedIn (ouvre dans un nouvel onglet)"
          >
            <LinkedinIcon className="size-4" />
          </a>
          <Link
            href="/cv/download"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
          >
            <FileText className="size-3.5" />
            <span>CV</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex size-9 items-center justify-center rounded-md text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-b border-border/40 bg-background/95 backdrop-blur-lg md:hidden animate-in slide-in-from-top-2 duration-200"
        >
          <nav
            className="flex flex-col gap-1 px-4 pt-2 pb-4"
            aria-label="Navigation mobile"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-md px-3 py-2.5 text-base font-medium text-muted-foreground transition-colors hover:text-foreground hover:bg-accent/50"
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-3 pt-3 border-t border-border/40 flex items-center justify-between px-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/billydassi101-ship-it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  aria-label="Profil GitHub"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/samuel-dassi-368b63276/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  aria-label="Profil LinkedIn"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </div>
              <Link
                href="/cv/download"
                onClick={closeMenu}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "gap-1.5")}
              >
                <FileText className="size-3.5" />
                <span>Mon CV</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
