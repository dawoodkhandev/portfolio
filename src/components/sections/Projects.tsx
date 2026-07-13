import { projects } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import {
  Tag,
  StatusBadge,
  ViewProjectButton,
} from "@/components/ProjectPieces";
import Reveal from "@/components/Reveal";

// Each project renders as the same card: title, badge, description, tags, and —
// where there's more to show — a button through to /projects/<slug>.

export default function Projects() {
  const featured = projects.find((project) => project.featured);
  const rest = projects.filter((project) => !project.featured);

  /** Only link through when the project page has more than the card already shows. */
  function hasDetailPage(project: (typeof projects)[number]) {
    return Boolean(project.images || project.features);
  }

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="02"
          title="Projects"
          subtitle="Things I've designed, built, and shipped"
        />
      </Reveal>

      {/* Featured project, full width. */}
      {featured && (
        <Reveal>
          <article className="rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-colors hover:border-accent/40">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h3 className="text-2xl font-bold text-white">{featured.name}</h3>
              <StatusBadge status={featured.status ?? "Featured"} />
            </div>

            <p className="mt-4 max-w-3xl leading-relaxed text-zinc-400">
              {featured.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>

            <div className="mt-8">
              <ViewProjectButton slug={featured.slug} />
            </div>
          </article>
        </Reveal>
      )}

      {/* Remaining projects. */}
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.slug} delay={i * 120}>
            <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-accent/40">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-bold text-white">{project.name}</h3>
                {project.status && <StatusBadge status={project.status} />}
              </div>

              <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-400">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              {hasDetailPage(project) && (
                <div className="mt-6">
                  <ViewProjectButton slug={project.slug} />
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
