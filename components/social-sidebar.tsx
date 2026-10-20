"use client";

import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Github },
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Instagram", href: "https://instagram.com", icon: Instagram },
];

export function SocialSidebar() {
  return (
    <>
      {/* Left Sidebar - Social Links */}
      <div className="hidden md:flex fixed left-8 lg:left-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
            aria-label={link.name}
          >
            <link.icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      {/* Right Sidebar - Email */}
      <div className="hidden md:flex fixed right-8 lg:right-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground/30">
        <a
          href="mailto:hello@example.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300 text-xs tracking-widest"
          style={{ writingMode: "vertical-rl" }}
        >
          hello@example.com
        </a>
      </div>
    </>
  );
}
