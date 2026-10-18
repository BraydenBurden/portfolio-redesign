"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectImageCarousel({
  title,
  image,
  gallery = [],
  sizes = "(max-width: 768px) 100vw, 50vw",
  aspectRatio = "aspect-[16/10]",
  rounded = "",
  priority = false,
}) {
  const images = [image, ...gallery].filter(Boolean);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (images.length === 0) return null;

  function showPrevious() {
    setCurrentIndex((index) => (index - 1 + images.length) % images.length);
  }

  function showNext() {
    setCurrentIndex((index) => (index + 1) % images.length);
  }

  return (
    <div
      className={`group/carousel relative ${aspectRatio} overflow-hidden bg-surface ${rounded}`}
    >
      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover object-top transition-opacity duration-300"
      />

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={showPrevious}
            aria-label={`Previous ${title} screenshot`}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/85 text-foreground shadow-md backdrop-blur transition hover:border-primary hover:bg-primary hover:text-background"
          >
            <ArrowLeft size={18} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label={`Next ${title} screenshot`}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-background/85 text-foreground shadow-md backdrop-blur transition hover:border-primary hover:bg-primary hover:text-background"
          >
            <ArrowRight size={18} />
          </button>

          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-background/85 px-3 py-2 backdrop-blur">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Show screenshot ${index + 1} of ${title}`}
                aria-current={currentIndex === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all ${
                  currentIndex === index
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-foreground/40 hover:bg-foreground/80"
                }`}
              />
            ))}
          </div>

          <span className="absolute right-3 top-3 z-10 rounded-md bg-background/85 px-2 py-1 text-xs text-foreground backdrop-blur">
            {currentIndex + 1} / {images.length}
          </span>
        </>
      )}
    </div>
  );
}
