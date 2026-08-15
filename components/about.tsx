import { User, Sparkles, GraduationCap, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <User className="size-3.5" />
            <span>À propos</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Présentation & Objectifs
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Ingénieur spécialisé en Intelligence Artificielle et Ingénierie des Données, passionné par la modélisation et l&apos;industrialisation de systèmes intelligents.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <Card className="border-border/60 bg-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Sparkles className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Spécialisation IA & RAG
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Expertise orientée vers les architectures RAG d&apos;entreprise, l&apos;fine-tuning de LLM, les agents autonomes et la vision par ordinateur.
              </p>
            </div>
          </Card>

          <Card className="border-border/60 bg-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Rigueur scientifique
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Solide bagage théorique et appliqué en mathématiques, traitement du signal et génie logiciel (Université de Lille, Université Ibn Tofaïl).
              </p>
            </div>
          </Card>

          <Card className="border-border/60 bg-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Target className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Alternance & Freelance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Disponible pour une alternance à compter de Septembre 2026 (AI Engineer / Data Scientist) ainsi que pour des projets de conseil freelance.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
