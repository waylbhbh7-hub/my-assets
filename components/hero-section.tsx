"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/animated-section";
import { TypingAnimation } from "@/components/typing-animation";
import { ArrowDown, Github, Mail, MessageCircle, Facebook } from "lucide-react";

export function HeroSection() {
  const { t, isRTL } = useLanguage();

  const roles = [t("hero.role1"), t("hero.role2"), t("hero.role3"), t("hero.role4")];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 start-1/4 w-72 md:w-96 h-72 md:h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 end-1/4 w-64 md:w-80 h-64 md:h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 end-1/3 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "0.5s" }} />
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Profile Image */}
          <AnimatedSection animation={isRTL ? "fadeLeft" : "fadeRight"} delay={0} className={`${isRTL ? 'lg:order-2' : ''}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                <Image
                  src="/images/eslam-wayl.jpg"
                  alt="Eslam Wayl"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <div className={`text-center lg:text-start max-w-2xl ${isRTL ? 'lg:order-1 lg:text-end' : ''}`}>
            <AnimatedSection animation="fadeUp" delay={100}>
              <p className="text-primary font-mono text-sm tracking-wider mb-3">
                {t("hero.greeting")}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={200}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-3 text-balance">
                <span className="text-foreground">{t("hero.name")}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={300}>
              <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-primary mb-4 h-8 md:h-10">
                <TypingAnimation texts={roles} typingSpeed={80} deletingSpeed={40} pauseDuration={2500} />
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fadeUp" delay={400}>
              <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
                {t("hero.description")}
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection animation="fadeUp" delay={500}>
              <div className={`flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-6 ${isRTL ? 'lg:justify-end' : ''}`}>
                <div className="text-center px-4 py-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.projects")}</div>
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">3+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.experience")}</div>
                </div>
                <div className="text-center px-4 py-3 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">40+</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{t("hero.clients")}</div>
                </div>
              </div>
            </AnimatedSection>

            {/* CTA Buttons */}
            <AnimatedSection animation="fadeUp" delay={600}>
              <div className={`flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 ${isRTL ? 'lg:justify-end' : ''}`}>
                <a href="#projects">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/25 px-6 sm:px-8 w-full sm:w-auto">
                    {t("hero.cta")}
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline" className="border-border hover:bg-secondary/50 px-6 sm:px-8 bg-transparent w-full sm:w-auto">
                    {t("hero.contact")}
                  </Button>
                </a>
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection animation="fadeUp" delay={700}>
              <div className={`flex items-center justify-center lg:justify-start gap-3 ${isRTL ? 'lg:justify-end' : ''}`}>
                <a href="https://github.com/eslamwayl" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110 border border-border/50 backdrop-blur-sm" aria-label="GitHub">
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:Waylbhbh7@gmail.com" className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110 border border-border/50 backdrop-blur-sm" aria-label="Email">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="https://wa.me/201280995213" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110 border border-border/50 backdrop-blur-sm" aria-label="WhatsApp">
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a href="https://facebook.com/eslamwayl" target="_blank" rel="noopener noreferrer" className="p-2.5 sm:p-3 rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110 border border-border/50 backdrop-blur-sm" aria-label="Facebook">
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Scroll Indicator */}
        <AnimatedSection animation="fadeUp" delay={900} className="absolute bottom-6 left-1/2 -translate-x-1/2">
          <a href="#about" className="flex flex-col items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors">
            <span className="text-xs font-medium tracking-wider uppercase hidden sm:block">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
}
