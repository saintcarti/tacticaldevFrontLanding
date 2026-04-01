interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionTitleProps) {
  const alignmentClass =
    align === "center" ? "text-center items-center" : "text-left items-start";
  const titleClass = tone === "light" ? "text-white" : "text-ink";
  const descriptionClass = tone === "light" ? "text-white/70" : "text-ink-3";
  const descriptionAlignmentClass = align === "center" ? "mx-auto" : "";
  
  // Mejora del contraste y visibilidad del eyebrow
  const eyebrowClass = tone === "light" 
    ? "text-white/80" 
    : "text-brand dark:text-accent font-black";

  return (
    <div className={`space-y-4 ${alignmentClass}`}>
      {eyebrow ? (
        <div className="inline-block">
          <p
            className={`text-[10px] md:text-xs uppercase tracking-[0.4em] mb-1 ${eyebrowClass}`}
          >
            {eyebrow}
          </p>
          <div className="h-0.5 w-full bg-gradient-to-r from-brand to-transparent opacity-30 dark:opacity-50" />
        </div>
      ) : null}
      
      <h2 className={`text-3xl font-black md:text-5xl tracking-tighter uppercase ${titleClass}`}>
        {title}
      </h2>
      
      <div
        className={`flex h-1.5 w-32 overflow-hidden rounded-full ${align === "center" ? "mx-auto" : ""}`}
      >
        <span className="h-full w-2/3 bg-brand shadow-[0_0_10px_rgba(37,99,235,0.5)]" />
        <span className="h-full w-1/3 bg-accent" />
      </div>
      
      {description ? (
        <p
          className={`max-w-2xl text-base md:text-lg font-medium leading-relaxed ${descriptionClass} ${descriptionAlignmentClass}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
