interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionIntroProps) {
  const alignClasses = align === "center" ? "mx-auto max-w-3xl text-center items-center" : "";

  return (
    <div className={`${alignClasses} ${className}`.trim()}>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="display-title mt-5 text-4xl text-foreground sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-2xl text-lg leading-8 muted-copy">
          {description}
        </p>
      ) : null}
    </div>
  );
}
