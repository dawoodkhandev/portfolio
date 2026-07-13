import { profile } from "@/lib/data";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";

const links = [
  { label: "Email", href: `mailto:${profile.email}` },
  { label: "LinkedIn", href: profile.socials.linkedin },
  { label: "GitHub", href: profile.socials.github },
  { label: "Resume", href: profile.resumeUrl },
];

export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      {/* Glow mirroring the hero. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]"
      />

      <Reveal>
        <SectionHeading
          centered
          index="06"
          title="Let's Connect"
          subtitle="Open to co-op roles, internships, and interesting problems"
        />
      </Reveal>

      <Reveal delay={100}>
        <div className="text-center">
          <a
            href={`mailto:${profile.email}`}
            className="inline-block font-mono text-lg text-white transition-colors hover:text-accent sm:text-xl"
          >
            {profile.email}
          </a>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 px-5 py-2.5 text-sm text-zinc-300 transition-colors hover:border-accent/50 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>

      <footer className="mt-24 border-t border-white/10 pt-8 text-center">
        <p className="text-xs text-zinc-600">
          Built with Next.js & Tailwind CSS · © {new Date().getFullYear()}{" "}
          {profile.name}
        </p>
      </footer>
    </section>
  );
}
