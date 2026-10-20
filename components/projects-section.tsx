"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Folder } from "lucide-react";

type Category = "all" | "web" | "design" | "python";

const projects = [
  {
    id: 13,
    title: "MAQAM Café | مقام كافيه",
    description: "Modern specialty coffee website featuring dual-language support (AR/EN), editorial design, and responsive layout.",
    category: "web",
    tags: ["React", "Vite", "Tailwind CSS", "TypeScript"],
    featured: true,
    demoUrl: "https://maqam-caf.vercel.app",
    githubUrl: ""
  },
  {
    id: 14, // أو رقّمه حسب التسلسل عندك في المصفوفة
    title: "النور والفرقان | Al-Noor & Al-Furqan",
    description: "منصة وتطبيق إسلامي متكامل يشتمل على كافة الأدوات التي يحتاجها أي مسلم سواء داخل المنزل أو خارجه، لتسهيل العبادات والذكور اليومية.",
    category: "web",
    tags: ["React", "Next.js", "Tailwind CSS", "TypeScript"], // عدلها حسب التقنيات المستخدمة فعلياً في التطبيق
    featured: true,
    demoUrl: "https://al-noor-quran.vercel.app/",
    githubUrl: ""
  },
  { id: 1, title: "E-Commerce Platform", description: "Full-stack e-commerce solution with payment integration and admin dashboard", category: "web", tags: ["Python", "Django", "HTML/CSS", "JavaScript"], featured: true },
  { id: 2, title: "Brand Identity Package", description: "Complete branding solution including logo, business cards, and social media kit", category: "design", tags: ["Photoshop", "Illustrator", "Branding"], featured: true },
  { id: 3, title: "Data Analysis Tool", description: "Python-based tool for analyzing and visualizing large datasets", category: "python", tags: ["Python", "Pandas", "Matplotlib"], featured: true },
  { id: 4, title: "Portfolio Website", description: "Modern responsive portfolio website with smooth animations", category: "web", tags: ["HTML5", "CSS3", "JavaScript"], featured: false },
  { id: 5, title: "Social Media Campaign", description: "Creative designs for multi-platform marketing campaign", category: "design", tags: ["Photoshop", "Social Media"], featured: false },
  { id: 6, title: "Automation Script", description: "Custom automation solution for workflow optimization", category: "python", tags: ["Python", "Automation"], featured: false },
  { id: 7, title: "Restaurant Website", description: "Elegant website for a restaurant with online menu and reservations", category: "web", tags: ["HTML5", "CSS3", "JavaScript"], featured: false },
  { id: 8, title: "Logo Collection", description: "Various logo designs for startups and businesses", category: "design", tags: ["Photoshop", "Logo Design"], featured: false },
  { id: 9, title: "Web Scraper", description: "Python scraper for data extraction and analysis", category: "python", tags: ["Python", "BeautifulSoup"], featured: false },
  { id: 10, title: "Landing Page Design", description: "High-converting landing page for SaaS product", category: "web", tags: ["HTML5", "CSS3", "UI/UX"], featured: false },
  { id: 11, title: "Marketing Materials", description: "Print and digital marketing collateral design", category: "design", tags: ["Photoshop", "Print Design"], featured: false },
  { id: 12, title: "API Integration", description: "Backend service with multiple API integrations", category: "python", tags: ["Python", "Flask", "APIs"], featured: false },
];

const categories: { key: Category; labelKey: string }[] = [
  { key: "all", labelKey: "projects.category.all" },
  { key: "web", labelKey: "projects.category.web" },
  { key: "design", labelKey: "projects.category.design" },
  { key: "python", labelKey: "projects.category.python" },
];

export function ProjectsSection() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = activeCategory === "all" ? projects : projects.filter((p) => p.category === activeCategory);
  const displayedProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/30 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-8 sm:mb-10">
          <p className="text-primary font-mono text-xs sm:text-sm tracking-wider mb-2">{t("projects.subtitle")}</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">{t("projects.title")}</h2>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-8 sm:mb-10 overflow-x-auto pb-2">
          <div className="inline-flex p-1 sm:p-1.5 rounded-lg sm:rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => { setActiveCategory(cat.key); setShowAll(false); }}
                className={`px-3 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-md sm:rounded-lg transition-all whitespace-nowrap ${activeCategory === cat.key ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {t(cat.labelKey)}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedProjects.map((project) => (
            <div key={project.id} className="group h-full p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col">
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="p-2 sm:p-3 rounded-lg sm:rounded-xl bg-primary/10 text-primary">
                  <Folder className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="flex items-center gap-1 sm:gap-2">
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="p-1.5 sm:p-2 rounded-lg hover:bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors" title="View Live Demo">
                      <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-foreground mb-1.5 sm:mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">{project.description}</p>
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-[10px] sm:text-xs font-mono text-muted-foreground">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length > 6 && (
          <div className="text-center mt-8 sm:mt-10">
            <Button variant="outline" size="default" onClick={() => setShowAll(!showAll)} className="border-border hover:bg-secondary/50 bg-transparent text-sm">
              {showAll ? "Show Less" : t("projects.viewAll")}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}