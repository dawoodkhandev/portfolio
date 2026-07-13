import Link from "next/link";
import type { Project } from "@/lib/data";

// Shared building blocks for the project cards and the project pages.

/** Red call-to-action linking to a project's own page. */
export function ViewProjectButton({ slug }: { slug: string }) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-medium text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-strong hover:shadow-accent/50"
    >
      View project
      <span className="transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}

/** Monospace pill for a tech tag. */
export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-md border border-accent/30 px-2.5 py-1 font-mono text-xs text-accent/90">
      {children}
    </span>
  );
}

/** Badge in a card's top-right corner. */
export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-400">
      {status}
    </span>
  );
}

/** Outbound links, e.g. to the repo. */
export function ProjectLinks({
  links,
}: {
  links: NonNullable<Project["links"]>;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3.5 py-2 text-sm text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
        >
          {link.label}
          <span aria-hidden>↗</span>
        </a>
      ))}
    </div>
  );
}
