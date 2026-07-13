import { education } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="05"
          title="Education"
          subtitle="Where I'm learning"
        />
      </Reveal>

      <div className="grid gap-6 md:grid-cols-2">
        {education.map((school, i) => (
          <Reveal key={school.school} delay={i * 120}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <h3 className="text-lg font-bold text-white">{school.school}</h3>
                {school.note && (
                  <span className="rounded-full border border-accent/30 px-2.5 py-1 text-xs text-accent">
                    {school.note}
                  </span>
                )}
              </div>

              <p className="mt-3 text-sm text-zinc-400">{school.detail}</p>

              <p className="mt-4 font-mono text-xs text-zinc-500">
                {school.period} · {school.location}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
