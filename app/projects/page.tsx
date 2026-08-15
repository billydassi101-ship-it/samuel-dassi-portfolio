"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Video,
  Sparkles,
  Clock,
  Search,
  Filter,
  ArrowLeft,
  FolderGit2,
} from "lucide-react";
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

const CATEGORIES = [
  "Tous",
  "RAG",
  "Generative AI",
  "Machine Learning",
  "Data Science",
  "Data Engineering",
  "Computer Vision",
  "Deep Learning",
  "NLP",
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        selectedCategory === "Tous" || project.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.shortDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        project.technologies.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/#projects"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "gap-1.5 text-muted-foreground hover:text-foreground"
            )}
          >
            <ArrowLeft className="size-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>
        </div>

        {/* Page Header */}
        <div className="flex flex-col items-start gap-4 mb-10">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <FolderGit2 className="size-3.5" />
            <span>Portfolio complet ({projects.length} projets)</span>
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Tous les projets
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-3xl leading-relaxed">
            Explorez l&apos;ensemble des travaux réalisés par Samuel Dassi en AI Engineering, Machine Learning, Deep Learning, RAG et Data Systems.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-10 p-4 rounded-xl border border-border/60 bg-card/60 backdrop-blur-sm">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Rechercher par mot-clé ou techno (ex: FastAPI, PyTorch, RAG...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-md border border-input bg-background pl-9 pr-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            <Filter className="size-4 text-muted-foreground shrink-0 ml-1 hidden sm:block" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "rounded-md px-3 py-1.5 text-xs font-medium transition-colors whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-muted/50 text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
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
                          <Badge
                            variant="outline"
                            className="gap-1 border-primary/40 text-primary text-[11px] py-0.5"
                          >
                            <Video className="size-3" />
                            <span>Vidéo</span>
                          </Badge>
                        )}
                        {project.status === "En cours" && (
                          <Badge
                            variant="outline"
                            className="gap-1 border-amber-500/40 text-amber-600 dark:text-amber-400 text-[11px] py-0.5"
                          >
                            <Clock className="size-3" />
                            <span>En cours</span>
                          </Badge>
                        )}
                        {project.featured && !project.video && (
                          <Badge
                            variant="outline"
                            className="gap-1 border-primary/30 text-primary text-[11px] py-0.5"
                          >
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
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs font-mono text-muted-foreground border border-border/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4 border-t border-border/40 bg-muted/10 mt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "w-full justify-between gap-2 text-primary font-medium hover:bg-primary/10 hover:text-primary transition-all"
                    )}
                  >
                    <span>Détails & Case Study</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-dashed border-border rounded-xl p-8">
            <p className="text-muted-foreground text-lg mb-4">
              Aucun projet ne correspond à vos critères de recherche.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("Tous");
                setSearchQuery("");
              }}
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Réinitialiser les filtres
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
