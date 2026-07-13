// The heading that starts every section: a mono index number, a rule, then a
// bold title with an accent period and a quiet subtitle.

export default function SectionHeading({
  index,
  title,
  subtitle,
  centered = false,
}: {
  /** e.g. "01" — the little monospace counter above the title. */
  index: string;
  title: string;
  subtitle: string;
  centered?: boolean;
}) {
  return (
    <div className={`mb-14 ${centered ? "flex flex-col items-center text-center" : ""}`}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-sm text-accent">{index}</span>
        <span aria-hidden className="h-px w-10 bg-accent/40" />
      </div>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
        <span className="text-accent">.</span>
      </h2>

      <p className="mt-3 text-sm text-zinc-500 sm:text-base">{subtitle}</p>
    </div>
  );
}
