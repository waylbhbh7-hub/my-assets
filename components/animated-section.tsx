"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type AnimationVariant = "fadeUp" | "fadeIn" | "fadeLeft" | "fadeRight" | "scale" | "blur";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  variant?: string; // إضافة هذه الخاصية
  delay?: number;   // إضافة هذه الخاصية أيضاً
}

const variantClasses: Record<AnimationVariant, { initial: string; animate: string }> = {
  fadeUp: {
    initial: "opacity-0 translate-y-10",
    animate: "opacity-100 translate-y-0",
  },
  fadeIn: {
    initial: "opacity-0",
    animate: "opacity-100",
  },
  fadeLeft: {
    initial: "opacity-0 -translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  fadeRight: {
    initial: "opacity-0 translate-x-10",
    animate: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    animate: "opacity-100 scale-100",
  },
  blur: {
    initial: "opacity-0 blur-sm",
    animate: "opacity-100 blur-0",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fadeUp",
  delay = 0,
  threshold = 0.1,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>({ threshold });
  const { initial, animate } = variantClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? animate : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
