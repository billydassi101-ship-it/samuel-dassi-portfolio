import { GraduationCap, MapPin, Calendar, Building2 } from "lucide-react";
import { experiences } from "@/data/experience";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-16 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <GraduationCap className="size-3.5" />
            <span>Formation & Diplômes</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Parcours académique
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Formation supérieure axée sur l&apos;Intelligence Artificielle, le traitement de données, le signal et l&apos;ingénierie mathématique.
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-border/60 space-y-12">
          {experiences.map((item) => (
            <div key={item.id} className="relative group">
              {/* Timeline Dot Node */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 flex size-8 sm:size-10 items-center justify-center rounded-full border border-border/80 bg-background text-primary shadow-sm group-hover:border-primary group-hover:bg-primary/10 transition-colors">
                <GraduationCap className="size-4 sm:size-5" />
              </div>

              {/* Content Card */}
              <Card className="border-border/60 bg-card hover:border-primary/40 hover:shadow-md transition-all duration-300">
                <CardHeader className="p-6 pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <Badge
                      variant="secondary"
                      className="font-mono text-xs gap-1.5 py-1 px-2.5"
                    >
                      <Calendar className="size-3" />
                      <span>{item.period}</span>
                    </Badge>

                    <div className="flex items-center gap-1 text-xs text-muted-foreground font-mono">
                      <MapPin className="size-3.5 text-primary/70" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                    {item.degree}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 pt-1 space-y-3">
                  {item.specialization && (
                    <Badge
                      variant="outline"
                      className="font-mono text-xs border-primary/20 bg-primary/5 text-primary"
                    >
                      {item.specialization}
                    </Badge>
                  )}

                  <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium pt-1">
                    <Building2 className="size-4 text-muted-foreground/80 shrink-0" />
                    <span>{item.institution}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
