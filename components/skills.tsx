import {
  Brain,
  Cpu,
  Database,
  Layers,
  Server,
  Wrench,
  Radio,
} from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const CATEGORY_ICONS: Record<string, React.ElementType> = {
  "genai-rag": Brain,
  "ml-datascience": Cpu,
  "dl-cv": Layers,
  "data-engineering": Database,
  "backend-mlops": Server,
  "embedded-iot": Radio,
  tools: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <Brain className="size-3.5" />
            <span>Compétences techniques</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Stack & Domaines d&apos;expertise
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Une vue d&apos;ensemble des technologies, frameworks et méthodologies maîtrisés pour le développement de solutions IA et d&apos;ingénierie de données.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((group) => {
            const Icon = CATEGORY_ICONS[group.id] || Brain;
            return (
              <Card
                key={group.id}
                className="border-border/60 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <CardHeader className="p-6 pb-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardTitle className="text-lg font-bold text-foreground">
                      {group.title}
                    </CardTitle>
                  </div>
                  {group.description && (
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {group.description}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="p-6 pt-2">
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <Badge
                        key={skill.name}
                        variant={skill.isNotion ? "outline" : "secondary"}
                        className={
                          skill.isNotion
                            ? "font-mono text-xs py-1 px-2.5 border-dashed border-border/80 text-muted-foreground bg-background/50 hover:border-primary/40 transition-colors"
                            : "font-mono text-xs py-1 px-2.5 bg-secondary text-secondary-foreground hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                        }
                      >
                        <span>{skill.name}</span>
                        {skill.isNotion && (
                          <span className="ml-1 text-[10px] text-muted-foreground opacity-80">
                            (notions)
                          </span>
                        )}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Legend note */}
        <div className="mt-8 flex items-center justify-start gap-4 text-xs text-muted-foreground px-2">
          <div className="flex items-center gap-1.5">
            <Badge variant="secondary" className="font-mono text-[10px] py-0.5 px-2">
              Technologie
            </Badge>
            <span>Compétence maîtrisée</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Badge variant="outline" className="font-mono text-[10px] py-0.5 px-2 border-dashed">
              Technologie <span className="opacity-70">(notions)</span>
            </Badge>
            <span>Notions fondamentales</span>
          </div>
        </div>
      </div>
    </section>
  );
}
