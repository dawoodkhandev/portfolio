// Static starfield background.
//
// Positions come from a seeded PRNG rather than Math.random() so the server and
// client render identical markup — otherwise React reports a hydration mismatch.

function seededRandom(seed: number) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const random = seededRandom(20260713);

const STARS = Array.from({ length: 110 }, () => ({
  top: (random() * 100).toFixed(3),
  left: (random() * 100).toFixed(3),
  size: (random() * 1.6 + 0.6).toFixed(2),
  duration: (random() * 4 + 3).toFixed(2),
  delay: (random() * 5).toFixed(2),
}));

export default function Starfield() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {STARS.map((star, i) => (
        <span
          key={i}
          className="star"
          style={
            {
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              "--dur": `${star.duration}s`,
              "--delay": `${star.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}
