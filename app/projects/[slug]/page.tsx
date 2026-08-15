import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Clock,
  Sparkles,
  ExternalLink,
  BarChart3,
  Video as VideoIcon,
} from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
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

export default async function ProjectDetailPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="py-12 md:py-20 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <div className="mb-8">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-4" />
            <span>Tous les projets</span>
          </Link>
        </div>

        {/* Header Metadata */}
        <div className="flex flex-wrap items-center gap-2.5 mb-4">
          <Badge variant="secondary" className="font-mono text-xs py-1 px-3">
            {project.category}
          </Badge>

          {project.status === "En cours" ? (
            <Badge
              variant="outline"
              className="gap-1 border-amber-500/40 text-amber-600 dark:text-amber-400 text-xs py-1 px-3"
            >
              <Clock className="size-3.5" />
              <span>Projet en cours</span>
            </Badge>
          ) : (
            <Badge
              variant="outline"
              className="gap-1 border-emerald-500/40 text-emerald-600 dark:text-emerald-400 text-xs py-1 px-3"
            >
              <CheckCircle2 className="size-3.5" />
              <span>Projet terminé</span>
            </Badge>
          )}

          {project.featured && (
            <Badge
              variant="outline"
              className="gap-1 border-primary/30 text-primary text-xs py-1 px-3"
            >
              <Sparkles className="size-3.5" />
              <span>Featured</span>
            </Badge>
          )}
        </div>

        {/* Project Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
          {project.title}
        </h1>

        {/* Short Description */}
        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-3xl">
          {project.shortDescription}
        </p>

        {/* Video Player (if video exists) */}
        {project.video && (
          <div className="mb-12 rounded-2xl overflow-hidden border border-border/80 bg-black/90 shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border/30 bg-muted/20 text-xs font-mono text-muted-foreground">
              <VideoIcon className="size-4 text-primary" />
              <span>Démonstration vidéo — {project.title}</span>
            </div>
            <div className="relative aspect-video w-full">
              <video
                controls
                preload="metadata"
                poster={project.image}
                className="w-full h-full object-contain"
              >
                <source src={project.video} type="video/mp4" />
                Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
              </video>
            </div>
          </div>
        )}

        {/* Project Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-4">
          {/* Main Column */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description & Context */}
            <section className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                <Cpu className="size-5 text-primary" />
                <span>Contexte & Vue d&apos;ensemble</span>
              </h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                <p>{project.description}</p>
              </div>
            </section>

            {/* Technical Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Points techniques & Architecture
                </h2>
                <ul className="space-y-3">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-3 p-3.5 rounded-lg border border-border/50 bg-card/60 text-sm sm:text-base text-foreground"
                    >
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5 font-mono text-xs">
                        ✓
                      </span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Metrics & Results (if present) */}
            {project.metrics && project.metrics.length > 0 && (
              <section className="space-y-4 p-6 rounded-xl border border-primary/20 bg-primary/5">
                <h2 className="text-lg font-bold text-foreground flex items-center gap-2">
                  <BarChart3 className="size-5 text-primary" />
                  <span>Métriques d&apos;évaluation & Résultats</span>
                </h2>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.metrics.map((metric) => (
                    <Badge
                      key={metric}
                      variant="secondary"
                      className="font-mono text-xs sm:text-sm py-1.5 px-3 border border-primary/20 bg-background text-foreground"
                    >
                      {metric}
                    </Badge>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">
            {/* Technologies Box */}
            <div className="p-6 rounded-xl border border-border/60 bg-card space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                Technologies & Tools
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="font-mono text-xs py-1 px-2.5 bg-muted/40"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Links / External Actions (if any) */}
            {(project.github || project.demo) && (
              <div className="p-6 rounded-xl border border-border/60 bg-card space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground font-mono">
                  Liens utiles
                </h3>
                <div className="flex flex-col gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                        "w-full justify-start gap-2"
                      )}
                    >
                      <GithubIcon className="size-4" />
                      <span>Code source GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        buttonVariants({ variant: "default", size: "sm" }),
                        "w-full justify-start gap-2"
                      )}
                    >
                      <ExternalLink className="size-4" />
                      <span>Démo en direct</span>
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
