import Link from "next/link";
import { ArrowRight, Video, Sparkles, Clock, FolderGit2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Projects() {
  // Filter featured projects for homepage
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-16 md:py-24 bg-muted/20 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
          <Badge variant="outline" className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium">
            <FolderGit2 className="size-3.5" />
            <span>Réalisations & Case Studies</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Projets à la une
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Une sélection de projets clés en Intelligence Artificielle, Machine Learning, Generative AI et Data Engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuredProjects.map((project) => (
            <Card
              key={project.slug}
              className="group flex flex-col justify-between border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <div>
                <CardHeader className="p-6 pb-4">
                  {/* Category & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <Badge variant="secondary" className="font-mono text-xs">
                      {project.category}
                    </Badge>

                    <div className="flex items-center gap-1.5">
                      {project.video && (
                        <Badge variant="outline" className="gap-1 border-primary/40 text-primary text-[11px] py-0.5">
                          <Video className="size-3" />
                          <span>Démo vidéo</span>
                        </Badge>
                      )}
                      {project.status === "En cours" && (
                        <Badge variant="outline" className="gap-1 border-amber-500/40 text-amber-600 dark:text-amber-400 text-[11px] py-0.5">
                          <Clock className="size-3" />
                          <span>En cours</span>
                        </Badge>
                      )}
                      {project.featured && !project.video && (
                        <Badge variant="outline" className="gap-1 border-primary/30 text-primary text-[11px] py-0.5">
                          <Sparkles className="size-3" />
                          <span>Featured</span>
                        </Badge>
                      )}
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold group-hover:text-primary transition-colors line-clamp-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 py-2">
                  <CardDescription className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-4">
                    {project.shortDescription}
                  </CardDescription>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs font-mono text-muted-foreground border border-border/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="inline-flex items-center rounded-md bg-muted/40 px-1.5 py-0.5 text-xs font-mono text-muted-foreground">
                        +{project.technologies.length - 5}
                      </span>
                    )}
                  </div>
                </CardContent>
              </div>

              <CardFooter className="p-6 pt-4 border-t border-border/40 bg-muted/10">
                <Link
                  href={`/projects/${project.slug}`}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "sm" }),
                    "w-full justify-between gap-2 text-primary font-medium hover:bg-primary/10 hover:text-primary group-hover:translate-x-0.5 transition-all"
                  )}
                >
                  <span>Voir le projet</span>
                  <ArrowRight className="size-4" />
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/projects"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2 text-base font-medium shadow-sm hover:border-primary/50"
            )}
          >
            <span>Voir tous les projets ({projects.length})</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
