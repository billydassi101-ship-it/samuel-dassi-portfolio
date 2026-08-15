import {
  User,
  GraduationCap,
  Target,
  Brain,
  Code2,
  CheckCircle2,
  HeartHandshake,
  Lightbulb,
  LineChart,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SOFT_SKILLS = [
  {
    title: "Rigueur analytique & Esprit mathématique",
    description:
      "Approche méthodique fondée sur une compréhension profonde des modèles mathématiques et de la théorie sous-jacente.",
    icon: LineChart,
  },
  {
    title: "Autonomie & Veille technologique",
    description:
      "Capacité d'assimilation rapide de nouveaux frameworks et d'architectures récentes (LightRAG, MCP, ViT, RAGAS).",
    icon: Lightbulb,
  },
  {
    title: "Orientation résultats & Évaluation",
    description:
      "Culture de la mesure précise de performance (métriques RAGAS, F1-score, Recall, Precision-Recall, Dice Score).",
    icon: CheckCircle2,
  },
  {
    title: "Communication & Esprit d'équipe",
    description:
      "Vulgarisation technique, partage de connaissances et collaboration efficace au sein d'équipes Data & Tech.",
    icon: HeartHandshake,
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header & Math Story */}
        <div className="flex flex-col items-start gap-4 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <User className="size-3.5" />
            <span>À propos</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Profil & Philosophie
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Passionné par les mathématiques depuis le début de mon parcours académique, cet amour des sciences formelles constitue le fil conducteur naturel de ma spécialisation en Intelligence Artificielle et Data Science.
          </p>
        </div>

        {/* 3 Main Highlight Cards (Recherche d'alternance FIRST) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: Recherche d'Alternance (FIRST) */}
          <Card className="border-primary/40 bg-primary/5 p-6 flex flex-col justify-between space-y-4 shadow-sm">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <Target className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Recherche d&apos;Alternance
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Recherche active d&apos;un contrat d&apos;alternance (12 à 24 mois) en AI Engineering, Machine Learning ou Data Science, disponible dès Septembre ou Octobre 2026.
              </p>
            </div>
            <Badge variant="outline" className="w-fit border-primary/30 text-primary text-xs font-mono">
              Septembre / Octobre 2026
            </Badge>
          </Card>

          {/* Card 2: Mathématiques & Data Science */}
          <Card className="border-border/60 bg-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Socle Mathématique & Data Science
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Formation universitaire approfondie en mathématiques appliquées, statistiques et traitement du signal, constituant le fondement rigoureux de mes modèles.
              </p>
            </div>
          </Card>

          {/* Card 3: Savoir-faire Technique */}
          <Card className="border-border/60 bg-card p-6 flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Brain className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-foreground">
                Systèmes IA & RAG Avancés
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Conception de systèmes RAG hybrides, orchestration LLM, modélisation prédictive et vision par ordinateur appliqués à des cas d&apos;usage concrets.
              </p>
            </div>
          </Card>
        </div>

        {/* Concrete Capabilities Block */}
        <div className="p-8 rounded-2xl border border-border/60 bg-card/60 space-y-6">
          <div className="flex items-center gap-3">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Code2 className="size-5" />
            </div>
            <h3 className="text-xl font-bold text-foreground">
              Ce que je sais faire concrètement (Projets & Code)
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-muted-foreground">
            <div className="space-y-2 p-4 rounded-xl border border-border/40 bg-background/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                Architectures RAG & Generative AI
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">
                Ingestion et vectorisation dans Supabase/pgvector, retrieval hybride (cosinus + recherche lexicale), pénalités de diversité, orchestration LLM (Groq, Ollama, LangChain, LightRAG) et évaluation automatisée RAGAS.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl border border-border/40 bg-background/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                Data Science & Machine Learning
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">
                Préparation de pipelines prédictifs, traitement de données déséquilibrées (SMOTE, class_weight), modèles de gradient boosting (XGBoost, Scikit-learn) et explicabilité des prédictions via SHAP values.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl border border-border/40 bg-background/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                Deep Learning & Computer Vision
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">
                Segmentation sémantique IRM avec U-Net et Dice Loss, classification par Vision Transformers (ViT), détection d&apos;objets temps réel (YOLO) et architectures hybrides spatio-temporelles ResNet-LSTM.
              </p>
            </div>

            <div className="space-y-2 p-4 rounded-xl border border-border/40 bg-background/50">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <span className="size-2 rounded-full bg-primary" />
                Data Engineering & Deployment
              </h4>
              <p className="leading-relaxed text-xs sm:text-sm">
                Construction de pipelines ETL documentaires (FastAPI, Tesseract OCR, Supabase), structuration de bases de données relationnelles et containerisation Docker.
              </p>
            </div>
          </div>
        </div>

        {/* Soft Skills / Compétences Transversales */}
        <div className="space-y-6">
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-2xl font-bold tracking-tight text-foreground">
              Compétences transversales (Soft Skills)
            </h3>
            <p className="text-sm text-muted-foreground">
              Des qualités comportementales et méthodologiques indispensables à l&apos;intégration réussie dans une équipe Data & IA.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SOFT_SKILLS.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-border/60 bg-card p-5 space-y-3 hover:border-primary/40 transition-colors"
                >
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="size-4" />
                  </div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-base font-bold text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
