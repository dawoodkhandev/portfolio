import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, profile } from "@/lib/data";
import ProjectGallery from "@/components/ProjectGallery";
import { Tag, StatusBadge, ProjectLinks } from "@/components/ProjectPieces";
import Reveal from "@/components/Reveal";

// One page per project. generateStaticParams lists the slugs up front so Next
// can prerender each page as static HTML at build time.

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) return {};

  return {
    title: `${project.name} — ${profile.name}`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);

  if (!project) notFound();

  return (
    <main className="mx-auto max-w-5xl flex-1 px-6 pb-24 pt-32">
      <Reveal>
        <a
          href="/#projects"
          className="group inline-flex items-center gap-2 text-sm text-zinc-500 transition-colors hover:text-white"
        >
          <span className="transition-transform group-hover:-translate-x-1">
            ←
          </span>
          Back to projects
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {project.name}
            <span className="text-accent">.</span>
          </h1>
          {project.status && <StatusBadge status={project.status} />}
        </div>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-400">
          {project.description}
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>

        {project.links && (
          <div className="mt-8">
            <ProjectLinks links={project.links} />
          </div>
        )}
      </Reveal>

      {project.images && (
        <Reveal delay={100}>
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              Screenshots
            </h2>
            <ProjectGallery images={project.images} />
          </div>
        </Reveal>
      )}

      {project.features && (
        <Reveal delay={100}>
          <div className="mt-16">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
              How it works
            </h2>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40"
                >
                  <h3 className="font-semibold text-white">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-500">
                    {feature.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      <div className="mt-20 border-t border-white/10 pt-8">
        <a
          href="/#projects"
          className="text-sm text-zinc-500 transition-colors hover:text-white"
        >
          ← Back to projects
        </a>
      </div>
    </main>
  );
}
