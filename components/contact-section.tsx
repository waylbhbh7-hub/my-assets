"use client";

import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "@/components/animated-section";
import { Mail, MessageCircle, Send, Github, Facebook } from "lucide-react";

const contactLinks = [
  { icon: Mail, labelKey: "contact.email", href: "mailto:Waylbhbh7@gmail.com", value: "Waylbhbh7@gmail.com", color: "primary" },
  { icon: MessageCircle, labelKey: "contact.whatsapp", href: "https://wa.me/201280995213", value: "+20 128 099 5213", color: "accent" },
  { icon: Send, labelKey: "contact.telegram", href: "https://t.me/+201280995213", value: "+20 128 099 5213", color: "primary" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/eslamwayl", label: "GitHub" },
  { icon: Facebook, href: "https://www.facebook.com/eslam.wayll", label: "Facebook" },
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <AnimatedSection animation="fadeUp" className="text-center mb-8 sm:mb-10">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider mb-2">{t("contact.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">{t("contact.title")}</h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">{t("contact.description")}</p>
        </AnimatedSection>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 max-w-4xl mx-auto mb-8 sm:mb-10">
          {contactLinks.map((link, index) => {
            const Icon = link.icon;
            const isAccent = link.color === "accent";
            return (
              <AnimatedSection key={link.labelKey} animation="fadeUp" delay={index * 100}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group block p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 text-center"
                >
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4 transition-transform group-hover:scale-110 ${isAccent ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm sm:text-base mb-1 sm:mb-2">{t(link.labelKey)}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground" dir="ltr">{link.value}</p>
                </a>
              </AnimatedSection>
            );
          })}
        </div>

        {/* Social Links */}
        <AnimatedSection animation="fadeUp" delay={400} className="text-center">
          <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">Follow me on</p>
          <div className="flex items-center justify-center gap-3 sm:gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 sm:p-4 rounded-lg sm:rounded-xl bg-secondary/50 hover:bg-secondary text-muted-foreground hover:text-foreground transition-all hover:scale-110 border border-border/50 backdrop-blur-sm"
                  aria-label={link.label}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </a>
              );
            })}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}