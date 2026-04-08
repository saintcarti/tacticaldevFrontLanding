"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
  duration?: number;
}

export default function AnimatedShinyText({
  children,
  className,
  shimmerWidth = 100,
  duration = 2,
}: AnimatedShinyTextProps) {
  return (
    <motion.span
      initial={{ backgroundPosition: `-${shimmerWidth}px 0` }}
      animate={{ backgroundPosition: `${shimmerWidth * 2}px 0` }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
      }}
      style={{
        backgroundImage: `linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)`,
        backgroundSize: `${shimmerWidth}px 100%`,
        backgroundRepeat: "no-repeat",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
      }}
      className={cn(
        "mx-auto max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        className
      )}
    >
      {children}
    </motion.span>
  );
}
