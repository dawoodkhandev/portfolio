import { skillGroups } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import SkillIcon from "@/components/SkillIcon";
import Reveal from "@/components/Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="03"
          title="Skills & Expertise"
          subtitle="The tools I reach for"
        />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, i) => (
          <Reveal key={group.title} delay={i * 100}>
            <div className="h-full rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-colors hover:border-accent/40">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-1.5 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white"
                  >
                    <SkillIcon
                      slug={item.slug}
                      glyph={item.glyph}
                      color={item.color}
                    />
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
