"use client";

import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "@/components/animated-section";
import { Code2, Palette, Terminal, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Code2,
    titleKey: "services.web.title",
    descriptionKey: "services.web.description",
    color: "primary",
    features: ["Responsive Design", "Modern UI/UX", "Performance Optimized", "SEO Friendly"],
  },
  {
    icon: Palette,
    titleKey: "services.design.title",
    descriptionKey: "services.design.description",
    color: "accent",
    features: ["Logo Design", "Brand Identity", "Social Media", "Marketing Materials"],
  },
  {
    icon: Terminal,
    titleKey: "services.python.title",
    descriptionKey: "services.python.description",
    color: "primary",
    features: ["Automation Scripts", "Data Analysis", "Backend APIs", "Custom Tools"],
  },
];

export function ServicesSection() {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-16 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider mb-2">
            {t("services.subtitle")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t("services.title")}
          </h2>
        </AnimatedSection>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isAccent = service.color === "accent";
            
            return (
              <AnimatedSection key={service.titleKey} animation="fadeUp" delay={index * 100}>
                <div className="group h-full p-5 sm:p-6 md:p-8 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
                  {/* Icon */}
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mb-4 sm:mb-6 transition-transform group-hover:scale-110 ${isAccent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground mb-2 sm:mb-3">
                    {t(service.titleKey)}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
                    {t(service.descriptionKey)}
                  </p>

                  {/* Features */}
                  <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
                        <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full shrink-0 ${isAccent ? "bg-accent" : "bg-primary"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a href="#request">
                    <Button variant="ghost" className="group/btn p-0 h-auto text-primary hover:text-primary/80 text-xs sm:text-sm">
                      {t("nav.request")}
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover/btn:translate-x-1 ms-1" />
                    </Button>
                  </a>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
