'use client'

import { useState } from "react";
import Image from "next/image";
import galleryImages from "../galleryImages.json";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 px-4 mx-auto w-full">
      <h2 className="text-2xl font-bold mb-6 text-center animate-fade-in-down">
        Portfolio Gallery
      </h2>
      <div
        className="grid grid-cols-1 
        sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 gap-6"
      >
        {galleryImages.map((img, i) => (
          <div
            key={i}
            className="rounded-lg overflow-hidden border border-[var(--border)] hover:scale-105 transition-transform bg-[var(--hover)] cursor-pointer animate-fade-in-up"
            onClick={() => setOpenIndex(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {/* Fullscreen Overlay with fade in/out */}
      <div
        className={`
          fixed inset-0 z-50 flex flex-col items-center justify-center
          bg-black/80 transition-opacity duration-300
          ${openIndex !== null ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
        style={{ transitionProperty: "opacity, background-color" }}
        onClick={() => setOpenIndex(null)}
        aria-hidden={openIndex === null}
      >
        {openIndex !== null && (
          <>
            {/* X Button outside the image */}
            <button
              className="absolute top-6 right-8 text-white bg-black/60 rounded-full p-2 hover:bg-[var(--accent)] transition z-50 cursor-pointer"
              onClick={e => {
                e.stopPropagation();
                setOpenIndex(null);
              }}
              aria-label="Close"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div
              className="relative max-w-4xl w-full flex justify-center"
              onClick={e => e.stopPropagation()}
            >
              <Image
                src={galleryImages[openIndex].src}
                alt={galleryImages[openIndex].alt}
                width={1200}
                height={900}
                className="rounded-lg max-h-[90vh] object-contain bg-white"
                priority
              />
            </div>
          </>
        )}
      </div>
    </section>
  );
}