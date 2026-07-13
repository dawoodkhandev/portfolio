import * as simpleIcons from "simple-icons";

// Logo for a skill pill. Brands resolve to their official simple-icons path and
// colour; concepts without a logo (SQL, RAG, ...) fall back to a generic glyph.

/** Line-art glyphs for the non-brand skills. */
const GLYPHS = {
  database: (
    <>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14a9 3 0 0 0 18 0V5" />
      <path d="M3 12a9 3 0 0 0 18 0" />
    </>
  ),
  cloud: <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />,
  spark: (
    <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z" />
  ),
  braces: (
    <>
      <path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" />
      <path d="M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" />
    </>
  ),
} as const;

export type GlyphName = keyof typeof GLYPHS;

export default function SkillIcon({
  slug,
  glyph,
  color,
}: {
  /** simple-icons brand slug, e.g. "react", "python". */
  slug?: string;
  /** Used when the skill has no brand logo. */
  glyph?: GlyphName;
  /** Overrides the brand colour — needed for logos that are black. */
  color?: string;
}) {
  if (slug) {
    const key = `si${slug.charAt(0).toUpperCase()}${slug.slice(1)}`;
    const icon = (simpleIcons as unknown as Record<string, { path: string; hex: string }>)[key];

    if (icon) {
      return (
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill={color ?? `#${icon.hex}`}
          aria-hidden
          className="shrink-0"
        >
          <path d={icon.path} />
        </svg>
      );
    }
  }

  return (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className="shrink-0"
    >
      {GLYPHS[glyph ?? "spark"]}
    </svg>
  );
}
