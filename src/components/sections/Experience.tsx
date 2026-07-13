import { experience } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="04"
          title="Experience"
          subtitle="Where I've worked and what I shipped"
        />
      </Reveal>

      {/* Timeline: a vertical rule with a node per role. */}
      <div className="relative border-l border-accent/30 pl-8 sm:pl-12">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 120}>
            <div className="relative pb-12 last:pb-0">
              {/* Node on the timeline. */}
              <span
                aria-hidden
                className="absolute -left-[41px] top-2 h-3 w-3 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(239,68,68,0.5)] sm:-left-[57px]"
              />

              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.role}</h3>
                    <p className="mt-1 text-accent">
                      {job.company}
                      <span className="text-zinc-600"> · {job.location}</span>
                    </p>
                  </div>
                  <span className="font-mono text-xs text-zinc-500">
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-3">
                  {job.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-400"
                    >
                      <span aria-hidden className="mt-1.5 text-accent">
                        ▸
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-accent/30 px-2.5 py-1 font-mono text-xs text-accent/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
