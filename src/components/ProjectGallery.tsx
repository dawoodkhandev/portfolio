"use client";

import Image from "next/image";
import { useState } from "react";

// Screenshot carousel: one image at a time, with arrows and a thumbnail strip.

export type GalleryImage = { src: string; caption: string };

export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const [index, setIndex] = useState(0);

  /** Steps through the images, wrapping around at both ends. */
  function go(step: number) {
    setIndex((current) => (current + step + images.length) % images.length);
  }

  const active = images[index];

  return (
    <div className="mt-8">
      <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-black">
        <Image
          src={active.src}
          alt={active.caption}
          width={2048}
          height={1157}
          className="w-full"
        />

        {/* Arrows fade in on hover. */}
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous screenshot"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/90 group-hover:opacity-100"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          aria-label="Next screenshot"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/70 p-2 text-white opacity-0 backdrop-blur transition-opacity hover:bg-black/90 group-hover:opacity-100"
        >
          ›
        </button>

        {/* Caption bar. */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent px-4 pb-3 pt-8">
          <p className="text-sm text-zinc-300">{active.caption}</p>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
        {images.map((image, i) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={image.caption}
            className={`shrink-0 overflow-hidden rounded-md border transition-all ${
              i === index
                ? "border-accent opacity-100"
                : "border-white/10 opacity-50 hover:opacity-90"
            }`}
          >
            <Image
              src={image.src}
              alt=""
              width={2048}
              height={1157}
              className="h-12 w-20 object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}
