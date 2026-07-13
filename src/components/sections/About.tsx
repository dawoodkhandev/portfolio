import Image from "next/image";
import { about, profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading
          index="01"
          title="About Me"
          subtitle="A bit about who I am and what I care about"
        />
      </Reveal>

      <div className="grid items-center gap-12 md:grid-cols-[280px_1fr]">
        {/* Portrait; swap by replacing the file in /public. */}
        <Reveal>
          <div className="group relative mx-auto w-64 md:w-full">
            {/* Glow behind the portrait, brightens on hover. */}
            <div
              aria-hidden
              className="absolute -inset-2 -z-10 rounded-3xl bg-accent/20 opacity-60 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
            />
            <Image
              src="/dawood.png"
              alt={profile.name}
              width={894}
              height={1238}
              priority
              className="aspect-[4/5] w-full rounded-2xl border border-white/10 object-cover object-top"
            />
          </div>
        </Reveal>

        <div>
          <Reveal delay={100}>
            <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
              {about.paragraph}
            </p>
          </Reveal>

          {/* Stat cards. */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {about.stats.map((stat, i) => (
              <Reveal key={stat.label} delay={150 + i * 80}>
                <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition-colors hover:border-accent/40">
                  <p className="text-2xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-zinc-500">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
