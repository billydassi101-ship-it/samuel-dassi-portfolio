import Link from "next/link";
import {
  Bot,
  Zap,
  BrainCircuit,
  Eye,
  Workflow,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { services } from "@/data/services";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Bot,
  Zap,
  BrainCircuit,
  Eye,
  Workflow,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-muted/20 border-t border-border/40"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start gap-4 mb-12 max-w-3xl">
          <Badge
            variant="outline"
            className="gap-1.5 py-1 px-3 border-primary/30 bg-primary/5 text-primary text-xs font-medium"
          >
            <Sparkles className="size-3.5" />
            <span>Offre Freelance</span>
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground">
            Services & Offre de conseil
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
            Accompagnement technique sur-mesure pour concevoir, intégrer et déployer des solutions performantes basées sur l&apos;IA et les données.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => {
            const Icon = SERVICE_ICONS[service.iconName] || Bot;
            return (
              <Card
                key={service.id}
                className="border-border/60 bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <CardHeader className="p-6 pb-4">
                    <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:scale-105 transition-transform mb-4">
                      <Icon className="size-6" />
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 py-2">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-1.5">
                      {service.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="font-mono text-xs py-0.5 px-2 bg-background/60"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>

                <CardFooter className="p-6 pt-4 border-t border-border/40 bg-muted/10 mt-6">
                  <Link
                    href="#contact"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "w-full justify-between gap-2 text-primary font-medium hover:bg-primary/10 hover:text-primary transition-all"
                    )}
                  >
                    <span>Discuter d&apos;un projet</span>
                    <ArrowRight className="size-4" />
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
