"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  className?: string;
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
}

export default function Reveal({
  className,
  children,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return (
    <div ref={ref} className={`${className ?? ""} ${isVisible ? "is-visible" : ""}`}>
      {children}
    </div>
  );
}
