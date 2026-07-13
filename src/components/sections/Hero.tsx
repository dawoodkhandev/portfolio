import { profile } from "@/lib/data";
import CopyEmail from "@/components/CopyEmail";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Blurred glow behind the name. */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/20 blur-[140px]"
      />

      <div className="flex flex-col items-center text-center">
        {/* Availability pill; the dot pulses via a second, animated circle. */}
        <span className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-zinc-400">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to co-op &amp; internships
        </span>

        <h1 className="text-5xl font-extrabold uppercase tracking-tight text-white sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <span className="mt-6 rounded-full bg-accent px-4 py-1.5 text-sm font-medium text-white shadow-lg shadow-accent/30">
          {profile.role}
        </span>

        <p className="mt-8 max-w-2xl text-xl text-zinc-300 sm:text-2xl">
          {profile.tagline.lead}
          <span className="text-accent italic">{profile.tagline.accent}</span>
        </p>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 font-medium text-white shadow-lg shadow-accent/30 transition-all hover:bg-accent-strong hover:shadow-accent/50"
          >
            Let&apos;s Connect
            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>

          <CopyEmail email={profile.email} />
        </div>
      </div>
    </section>
  );
}
