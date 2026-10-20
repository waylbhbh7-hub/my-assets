"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "@/components/animated-section";
import { Code2, Palette, Wrench, Quote } from "lucide-react";

const skills = {
  programming: ["Python", "HTML5", "CSS3", "JavaScript", "React", "Next.js"],
  design: ["Photoshop", "UI/UX", "Logo Design", "Branding", "Social Media"],
  tools: ["Git", "VS Code", "Figma", "Adobe Suite", "Linux"],
};

export function AboutSection() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-10 sm:mb-14">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider mb-2">
            {t("about.subtitle")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t("about.title")}
          </h2>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Side - About Text & Image */}
          <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
            {/* Profile Image for About */}
            <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={50}>
              <div className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50">
                <div className="relative shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl overflow-hidden border-2 border-primary/30">
                    <Image
                      src="/images/eslam-wayl.jpg"
                      alt="Eslam Wayl"
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1">{t("hero.name")}</h3>
                  <p className="text-xs sm:text-sm text-primary truncate">{t("hero.role1")} & {t("hero.role2")}</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={100}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                {t("about.description1")}
              </p>
            </AnimatedSection>

            <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={150}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg leading-relaxed">
                {t("about.description2")}
              </p>
            </AnimatedSection>

            {/* Quote */}
            <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={200}>
              <div className="p-4 sm:p-5 rounded-xl bg-primary/5 border-s-4 border-primary">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-primary mb-2" />
                <p className="text-sm sm:text-base text-foreground/80 italic leading-relaxed">
                  {t("about.quote")}
                </p>
              </div>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={250}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-2">
                <div className="p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors text-center sm:text-start">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("about.projects")}</div>
                </div>
                <div className="p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-colors text-center sm:text-start">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-0.5">40+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("about.clients")}</div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side - Skills */}
          <div className={`space-y-4 sm:space-y-5 ${isRTL ? 'lg:order-1' : ''}`}>
            <AnimatedSection animation={isRTL ? "fadeRight" : "fadeLeft"} delay={100}>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-4 sm:mb-5">
                {t("about.skills")}
              </h3>
            </AnimatedSection>

            {/* Programming Skills */}
            <AnimatedSection animation={isRTL ? "fadeRight" : "fadeLeft"} delay={150}>
              <div className="p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                    <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base">{t("skills.programming")}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.programming.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Design Skills */}
            <AnimatedSection animation={isRTL ? "fadeRight" : "fadeLeft"} delay={200}>
              <div className="p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-accent/50 transition-all group hover:shadow-lg hover:shadow-accent/5">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-accent/10 text-accent">
                    <Palette className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base">{t("skills.design")}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.design.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Tools */}
            <AnimatedSection animation={isRTL ? "fadeRight" : "fadeLeft"} delay={250}>
              <div className="p-4 sm:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/5">
                <div className="flex items-center gap-3 mb-3 sm:mb-4">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-primary/10 text-primary">
                    <Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h4 className="font-medium text-foreground text-sm sm:text-base">{t("skills.tools")}</h4>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skills.tools.map((skill) => (
                    <span key={skill} className="px-2 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-medium bg-secondary/50 text-secondary-foreground rounded-lg border border-border/50">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
