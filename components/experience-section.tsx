"use client";

import { AnimatedSection } from "./animated-section";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    company: "Tech Corp",
    title: "Senior Frontend Engineer",
    url: "https://example.com",
    range: "2023 — Present",
    duties: [
      "Build and maintain critical components used to construct frontend features",
      "Work closely with cross-functional teams to implement and advocate for best practices",
      "Lead code reviews and mentor junior developers on modern frontend patterns",
      "Architect scalable solutions using React, TypeScript, and Next.js",
    ],
  },
  {
    company: "Digital Agency",
    title: "Full Stack Developer",
    url: "https://example.com",
    range: "2021 — 2023",
    duties: [
      "Developed and maintained code for in-house and client websites",
      "Manually tested sites in various browsers and mobile devices",
      "Collaborated with designers to create pixel-perfect implementations",
      "Implemented RESTful APIs and database architectures",
    ],
  },
  {
    company: "StartupXYZ",
    title: "Junior Developer",
    url: "https://example.com",
    range: "2019 — 2021",
    duties: [
      "Built and maintained features for the company main product",
      "Participated in agile development processes and sprint planning",
      "Fixed bugs and improved application performance",
      "Contributed to documentation and code standards",
    ],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Experience
            </h2>
            <div className="h-px bg-border flex-1 max-w-xs" />
          </div>
        </AnimatedSection>

        <AnimatedSection variant="fadeUp" delay={100}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={cn(
                    "px-5 py-3 text-sm font-medium whitespace-nowrap transition-all duration-300 text-left",
                    activeTab === index
                      ? "text-primary bg-primary/10 md:border-l-2 md:-ml-px border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="md:pl-8 py-4 md:py-0 min-h-[300px]">
              <h3 className="text-xl font-medium text-foreground mb-1">
                {experiences[activeTab].title}{" "}
                <a
                  href={experiences[activeTab].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  @ {experiences[activeTab].company}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </h3>
              <p className="text-muted-foreground text-sm mb-6">
                {experiences[activeTab].range}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].duties.map((duty) => (
                  <li
                    key={duty}
                    className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-primary mt-1">▹</span>
                    {duty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
