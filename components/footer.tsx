"use client";

import { useLanguage } from "@/contexts/language-context";

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="text-lg font-bold">
            <span className="text-primary">E</span>
            <span className="text-foreground">.</span>
            <span className="text-foreground">Wayl</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            &copy; {currentYear} Eslam Wayl. {t("footer.rights")}
          </p>

          {/* Built With */}
          <p className="text-sm text-muted-foreground">
            {t("footer.built")} <span className="text-accent">&#9829;</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
