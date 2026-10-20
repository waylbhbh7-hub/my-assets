"use client";

import React from "react"
import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Check, Send, Loader2 } from "lucide-react";

export function ServiceRequestForm() {
  const { t, isRTL } = useLanguage();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    service: "",
    description: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xykewpgy", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        // إعادة تعيين النموذج بعد النجاح
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", mobile: "", service: "", description: "" });
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert("فشل الإرسال، تأكد من إعدادات Formspree");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("حدث خطأ في الاتصال");
    }
  };

  return (
    <section id="request" className="py-16 sm:py-20 md:py-28 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <AnimatedSection animation="fadeUp" className="text-center mb-8 sm:mb-10">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider mb-2">
            {t("form.subtitle")}
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
            {t("form.title")}
          </h2>
        </AnimatedSection>

        {/* Form Container */}
        <AnimatedSection animation="fadeUp" delay={100}>
          <div className="max-w-2xl mx-auto">
            <div className="p-5 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl bg-card/50 backdrop-blur-xl border border-border/50 shadow-2xl shadow-primary/5">
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                    <Check className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                  </div>
                  <h3 className="text-base sm:text-xl font-semibold text-foreground mb-2">
                    {t("form.success")}
                  </h3>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground">
                      {t("form.name")}
                    </Label>
                    <Input
                      name="name"
                      id="name"
                      type="text"
                      required
                      placeholder={t("form.name.placeholder")}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="bg-secondary/30 border-border/50 focus:border-primary h-12"
                    />
                  </div>

                  {/* Mobile Field */}
                  <div className="space-y-2">
                    <Label htmlFor="mobile" className="text-foreground">
                      {t("form.mobile")}
                    </Label>
                    <Input
                      name="mobile"
                      id="mobile"
                      type="tel"
                      required
                      placeholder={t("form.mobile.placeholder")}
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      className="bg-secondary/30 border-border/50 focus:border-primary h-12"
                      dir="ltr"
                    />
                  </div>

                  {/* Service Type Field */}
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground">
                      {t("form.service")}
                    </Label>
                    <Select
                      name="service"
                      value={formData.service}
                      onValueChange={(value) =>
                        setFormData({ ...formData, service: value })
                      }
                    >
                      <SelectTrigger className="bg-secondary/30 border-border/50 focus:border-primary h-12">
                        <SelectValue placeholder={t("form.service.placeholder")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="programming">
                          {t("form.service.programming")}
                        </SelectItem>
                        <SelectItem value="design">
                          {t("form.service.design")}
                        </SelectItem>
                        <SelectItem value="other">
                          {t("form.service.other")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Description Field */}
                  <div className="space-y-2">
                    <Label htmlFor="description" className="text-foreground">
                      {t("form.description")}
                    </Label>
                    <Textarea
                      name="description"
                      id="description"
                      required
                      placeholder={t("form.description.placeholder")}
                      value={formData.description}
                      onChange={(e) =>
                        setFormData({ ...formData, description: e.target.value })
                      }
                      className="bg-secondary/30 border-border/50 focus:border-primary min-h-32 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span className={isRTL ? "mr-2" : "ml-2"}>جاري الإرسال...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span className={isRTL ? "mr-2" : "ml-2"}>{t("form.submit")}</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}