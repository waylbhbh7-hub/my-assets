import React from "react";
import type { Metadata, Viewport } from "next";
import { Inter, Cairo } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { LanguageProvider } from "@/contexts/language-context";
import "./globals.css";

const _inter = Inter({ subsets: ["latin"] });
const _cairo = Cairo({ subsets: ["arabic", "latin"] });

export const metadata: Metadata = {
  title: "Eslam Wayl | Full Stack Developer & Graphic Designer",
  description:
    "Computer Science student, Full-stack developer (Python, HTML, CSS), and Graphic Designer (Photoshop) with over 50 successful projects.",
  generator: "v0.app",
  keywords: [
    "Eslam Wayl",
    "Full Stack Developer",
    "Graphic Designer",
    "Python Developer",
    "Web Developer",
    "Photoshop",
  ],
  authors: [{ name: "Eslam Wayl" }],
  icons: {
    icon: [
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        <LanguageProvider>{children}</LanguageProvider>
        <Analytics />
      </body>
    </html>
  );
}
