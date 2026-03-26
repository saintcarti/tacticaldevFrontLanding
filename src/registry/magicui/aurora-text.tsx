"use client"

import React, { memo } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
  as?: React.ElementType
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#FF0080", "#7928CA", "#0070F3", "#38bdf8"],
    speed = 1,
    as: Component = "span",
  }: AuroraTextProps) => {
    return (
      <Component
        className={cn(
          "animate-aurora relative bg-clip-text text-transparent [background-size:200%_auto]",
          className
        )}
        style={{
          backgroundImage: `linear-gradient(135deg, ${colors.join(", ")}, ${colors[0]})`,
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animationDuration: `${10 / speed}s`,
        }}
        aria-hidden="true"
      >
        {children}
      </Component>
    )
  }
)

AuroraText.displayName = "AuroraText"