"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Globe } from "lucide-react";

const navItems = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.services", href: "#services" },
  { key: "nav.projects", href: "#projects" },
  { key: "nav.contact", href: "#contact" },
];

export function Navigation() {
  const { t, language, setLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/50 py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tight group">
            <span className="text-primary group-hover:text-primary/80 transition-colors">E</span>
            <span className="text-foreground">.</span>
            <span className="text-foreground group-hover:text-primary transition-colors">Wayl</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-secondary/50"
              >
                {t(item.key)}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="gap-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm font-medium">
                {language === "en" ? "AR" : "EN"}
              </span>
            </Button>

            {/* CTA Button */}
            <a href="#request" className="hidden md:block">
              <Button
                size="sm"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
              >
                {t("nav.request")}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            isMobileMenuOpen ? "max-h-96 mt-4" : "max-h-0"
          )}
        >
          <div className="bg-card/90 backdrop-blur-xl rounded-2xl border border-border/50 p-4 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-colors"
              >
                {t(item.key)}
              </a>
            ))}
            <a href="#request" onClick={() => setIsMobileMenuOpen(false)} className="block mt-3">
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                {t("nav.request")}
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
