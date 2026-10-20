"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
    "nav.request": "Request Service",

    // Hero
    "hero.greeting": "Hello, I'm",
    "hero.name": "Eslam Wayl",
    "hero.title": "Freelancer | Graphic Designer | Web Developer | Programmer",
    "hero.description":
      "I transform your ideas into digital reality. With creativity and precision, I craft unique experiences that make your brand shine and achieve your goals.",
    "hero.tagline": "Turning Vision Into Digital Reality",
    "hero.cta": "View My Work",
    "hero.contact": "Get In Touch",
    "hero.projects": "Projects",
    "hero.experience": "Years Experience",
    "hero.clients": "Happy Clients",
    "hero.role1": "Freelancer",
    "hero.role2": "Graphic Designer",
    "hero.role3": "Web Developer",
    "hero.role4": "Programmer",

    // About
    "about.title": "About Me",
    "about.subtitle": "Who I Am",
    "about.description1":
      "I'm Eslam Wayl, a Computer Science student with a burning passion for technology and creativity. I work as a freelancer specializing in full-stack web development, graphic design, and Python programming.",
    "about.description2":
      "With over 50 successful projects under my belt, I bring ideas to life through clean code and stunning visuals. Every project is a new opportunity to create something extraordinary.",
    "about.quote": "Every pixel tells a story, every line of code builds a dream. I don't just create websites, I create experiences.",
    "about.projects": "Successful Projects",
    "about.clients": "Happy Clients",
    "about.skills": "Technical Skills",

    // Skills
    "skills.programming": "Programming",
    "skills.design": "Design",
    "skills.tools": "Tools",

    // Services
    "services.title": "My Services",
    "services.subtitle": "What I Offer",
    "services.web.title": "Web Development",
    "services.web.description":
      "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
    "services.design.title": "Graphic Design",
    "services.design.description":
      "Professional visual designs including logos, branding, social media graphics, and marketing materials.",
    "services.python.title": "Python Development",
    "services.python.description":
      "Custom Python applications, automation scripts, data analysis tools, and backend development.",

    // Projects
    "projects.title": "My Projects",
    "projects.subtitle": "Featured Work",
    "projects.viewAll": "View All Projects",
    "projects.viewProject": "View Project",
    "projects.category.all": "All",
    "projects.category.web": "Web Development",
    "projects.category.design": "Design",
    "projects.category.python": "Python",

    // Contact
    "contact.title": "Get In Touch",
    "contact.subtitle": "Let's Work Together",
    "contact.description":
      "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.",
    "contact.email": "Email Me",
    "contact.whatsapp": "WhatsApp",
    "contact.telegram": "Telegram",

    // Service Request Form
    "form.title": "Request a Service",
    "form.subtitle": "Tell me about your project",
    "form.name": "Your Name",
    "form.name.placeholder": "Enter your full name",
    "form.mobile": "Mobile Number",
    "form.mobile.placeholder": "+20 xxx xxx xxxx",
    "form.service": "Service Type",
    "form.service.placeholder": "Select a service",
    "form.service.programming": "Programming",
    "form.service.design": "Design",
    "form.service.other": "Other",
    "form.description": "Service Description",
    "form.description.placeholder":
      "Describe your project requirements in detail...",
    "form.submit": "Send Request",
    "form.success": "Request sent successfully!",

    // Footer
    "footer.rights": "All rights reserved",
    "footer.built": "Built with passion",
  },
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عني",
    "nav.services": "الخدمات",
    "nav.projects": "المشاريع",
    "nav.contact": "تواصل",
    "nav.request": "طلب خدمة",

    // Hero
    "hero.greeting": "مرحباً، أنا",
    "hero.name": "إسلام وائل",
    "hero.title": "فريلانسر | مصمم جرافيك | مصمم مواقع ويب | مبرمج",
    "hero.description":
      "أحوّل أفكارك إلى واقع رقمي. بالإبداع والدقة، أصنع تجارب فريدة تجعل علامتك التجارية تتألق وتحقق أهدافك.",
    "hero.tagline": "أحوّل الرؤية إلى واقع رقمي",
    "hero.cta": "شاهد أعمالي",
    "hero.contact": "تواصل معي",
    "hero.projects": "مشروع",
    "hero.experience": "سنوات خبرة",
    "hero.clients": "عميل سعيد",
    "hero.role1": "فريلانسر",
    "hero.role2": "مصمم جرافيك",
    "hero.role3": "مصمم مواقع ويب",
    "hero.role4": "مبرمج",

    // About
    "about.title": "عني",
    "about.subtitle": "من أنا",
    "about.description1":
      "أنا إسلام وائل، طالب علوم حاسوب لدي شغف كبير بالتكنولوجيا والإبداع. أعمل كفريلانسر متخصص في تطوير الويب الكامل والتصميم الجرافيكي وبرمجة Python.",
    "about.description2":
      "مع أكثر من 50 مشروعاً ناجحاً، أحوّل الأفكار إلى واقع من خلال كود نظيف وتصاميم مذهلة. كل مشروع هو فرصة جديدة لصنع شيء استثنائي.",
    "about.quote": "التصميم الرائع ليس فقط ما يبدو عليه، بل كيف يعمل.",
    "about.projects": "مشروع ناجح",
    "about.clients": "عميل سعيد",
    "about.skills": "المهارات التقنية",

    // Skills
    "skills.programming": "البرمجة",
    "skills.design": "التصميم",
    "skills.tools": "الأدوات",

    // Services
    "services.title": "خدماتي",
    "services.subtitle": "ما أقدمه",
    "services.web.title": "تطوير الويب",
    "services.web.description":
      "مواقع وتطبيقات ويب مخصصة مبنية بأحدث التقنيات لأداء أمثل وتجربة مستخدم ممتازة.",
    "services.design.title": "التصميم الجرافيكي",
    "services.design.description":
      "تصاميم بصرية احترافية تشمل الشعارات والهوية البصرية ورسومات السوشيال ميديا والمواد التسويقية.",
    "services.python.title": "تطوير Python",
    "services.python.description":
      "تطبيقات Python مخصصة، سكربتات أتمتة، أدوات تحليل البيانات، وتطوير الخوادم.",

    // Projects
    "projects.title": "مشاريعي",
    "projects.subtitle": "أعمال مميزة",
    "projects.viewAll": "عرض جميع المشاريع",
    "projects.viewProject": "عرض المشروع",
    "projects.category.all": "الكل",
    "projects.category.web": "تطوير الويب",
    "projects.category.design": "التصميم",
    "projects.category.python": "Python",

    // Contact
    "contact.title": "تواصل معي",
    "contact.subtitle": "لنعمل معاً",
    "contact.description":
      "لديك مشروع في ذهنك؟ يسعدني سماع تفاصيله. أرسل لي رسالة ولنصنع شيئاً مذهلاً معاً.",
    "contact.email": "راسلني",
    "contact.whatsapp": "واتساب",
    "contact.telegram": "تيليجرام",

    // Service Request Form
    "form.title": "طلب خدمة",
    "form.subtitle": "أخبرني عن مشروعك",
    "form.name": "الاسم الكامل",
    "form.name.placeholder": "أدخل اسمك الكامل",
    "form.mobile": "رقم الهاتف",
    "form.mobile.placeholder": "+20 xxx xxx xxxx",
    "form.service": "نوع الخدمة",
    "form.service.placeholder": "اختر نوع الخدمة",
    "form.service.programming": "برمجة",
    "form.service.design": "تصميم",
    "form.service.other": "أخرى",
    "form.description": "وصف الخدمة",
    "form.description.placeholder": "اشرح متطلبات مشروعك بالتفصيل...",
    "form.submit": "إرسال الطلب",
    "form.success": "تم إرسال الطلب بنجاح!",

    // Footer
    "footer.rights": "جميع الحقوق محفوظة",
    "footer.built": "صُنع بشغف",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = localStorage.getItem("language") as Language;
    if (saved && (saved === "en" || saved === "ar")) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)["en"]] || key
    );
  };

  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
