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
  const eyebrowClass = tone === "light" ? "text-white/60" : "text-brand";

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
      {description ? (
        <p className={`max-w-2xl text-base ${descriptionClass}`}>{description}</p>
      ) : null}
    </div>
  );
}
