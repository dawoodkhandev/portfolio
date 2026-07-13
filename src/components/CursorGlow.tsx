"use client";

import { useEffect, useRef } from "react";

// Red glow that trails the cursor. Skipped on touch devices.

export default function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const orb = ref.current;
    if (!orb) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const SIZE = 180;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;
    let frame = 0;

    function handleMove(event: MouseEvent) {
      targetX = event.clientX;
      targetY = event.clientY;
      orb!.style.opacity = "1";
    }

    function animate() {
      // Ease toward the cursor instead of snapping to it.
      x += (targetX - x) * 0.12;
      y += (targetY - y) * 0.12;
      orb!.style.transform = `translate3d(${x - SIZE / 2}px, ${y - SIZE / 2}px, 0)`;
      frame = requestAnimationFrame(animate);
    }

    window.addEventListener("mousemove", handleMove);
    frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 -z-10 h-[180px] w-[180px] rounded-full opacity-0 blur-[45px] transition-opacity duration-700"
      style={{
        background:
          "radial-gradient(circle, rgba(239,68,68,0.45) 0%, rgba(239,68,68,0.15) 45%, transparent 70%)",
      }}
    />
  );
}
