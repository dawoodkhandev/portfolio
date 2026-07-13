"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  // Section currently in view, used to highlight the active link.
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      // The active section is the last one whose top sits above the navbar.
      const marker = window.scrollY + 140;
      let current = navLinks[0].id;

      for (const link of navLinks) {
        const section = document.getElementById(link.id);
        if (section && section.offsetTop <= marker) {
          current = link.id;
        }
      }
      setActive(current);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      {/* The pill sizes to its contents. */}
      <nav className="rounded-2xl border border-white/10 bg-black/70 px-3 py-2 shadow-lg shadow-black/50 backdrop-blur-md">
        <div className="flex items-center gap-2">
          {/* Logo */}
          <a
            href="/"
            className="shrink-0 px-2 text-lg font-bold tracking-tight text-white"
          >
            {profile.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </a>

          {/* Leading "/" so these also resolve from a project page. */}
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  className={`rounded-lg px-3 py-1.5 text-sm transition-colors ${
                    active === link.id
                      ? "bg-accent/10 text-white ring-1 ring-accent/40"
                      : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg px-3 py-1.5 text-sm font-medium text-accent transition-colors hover:text-accent/80"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="ml-2 rounded-lg p-2 text-zinc-300 hover:text-white md:hidden"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="mt-3 grid min-w-52 gap-1 border-t border-white/10 pt-3 md:hidden">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`/#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-sm ${
                    active === link.id
                      ? "bg-accent/10 text-white"
                      : "text-zinc-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-accent"
              >
                Resume
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
