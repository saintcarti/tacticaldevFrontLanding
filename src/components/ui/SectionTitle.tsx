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
  const eyebrowClass = tone === "light" ? "text-white/60" : "text-accent";

  return (
    <div className={`space-y-3 ${alignmentClass}`}>
      {eyebrow ? (
        <p
          className={`text-xs font-semibold uppercase tracking-[0.3em] ${eyebrowClass}`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-3xl font-semibold md:text-4xl ${titleClass}`}>
        {title}
      </h2>
      <div
        className={`flex h-1 w-28 overflow-hidden rounded-full ${align === "center" ? "mx-auto" : ""}`}
      >
        <span className="h-full w-2/3 bg-brand" />
        <span className="h-full w-1/3 bg-accent" />
      </div>
      {description ? (
        <p
          className={`max-w-2xl text-base ${descriptionClass} ${descriptionAlignmentClass}`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
