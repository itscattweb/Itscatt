// components/gallery/GalleryCarousel.tsx
"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const slides = [
  { src: "/gallery/carousel/c1.jpg", title: "Annual Day 2023", subtitle: "Students celebrating excellence" },
  { src: "/gallery/carousel/c2.jpg", title: "US Exchange Programme", subtitle: "Our student in Washington D.C." },
  { src: "/gallery/carousel/c3.jpg", title: "De Sales Bhavan, Trivandrum", subtitle: "Our flagship institute" },
  { src: "/gallery/carousel/c4.jpg", title: "Board Exam Toppers", subtitle: "90%+ every single year" },
  { src: "/gallery/carousel/c5.jpg", title: "NSS Camp 2022", subtitle: "Serving the community" },
];

export default function GalleryCarousel() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const go = (idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  };

  useEffect(() => {
    timerRef.current = setTimeout(() => go(current + 1), 4500);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  return (
    <section className="relative bg-white px-10 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Section label */}
        <div className="mb-6 flex items-center gap-3">
          <div
            className="h-px w-8"
            style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
          />
          <span
            className="text-[10px] font-medium uppercase tracking-[0.3em]"
            style={{
              background: "linear-gradient(90deg, #2563eb, #0284c7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Featured Moments
          </span>
        </div>

        {/* Carousel */}
        <div className="relative h-[420px] overflow-hidden rounded-3xl border border-blue-100">

          {slides.map((slide, i) => (
            <div
              key={i}
              className="absolute inset-0 transition-opacity duration-700"
              style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Fallback */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
              >
                <span
                  className="text-9xl font-bold opacity-20"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              {/* Gradient overlay */}
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(15,23,42,0.65) 0%, transparent 55%)" }}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-2 flex items-center gap-2">
                  <div className="h-px w-5" style={{ background: "rgba(147,197,253,0.8)" }} />
                  <span className="text-[9px] font-medium uppercase tracking-[0.3em] text-blue-200">
                    ITSSCAT-India
                  </span>
                </div>
                <h3
                  className="mb-1 text-2xl font-bold text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {slide.title}
                </h3>
                <p className="text-sm font-light text-blue-200">{slide.subtitle}</p>
              </div>
            </div>
          ))}

          {/* Prev / Next */}
          <button
            onClick={() => go(current - 1)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", border: "1px solid #bfdbfe" }}
          >
            <svg className="h-4 w-4" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => go(current + 1)}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full transition-all hover:scale-105"
            style={{ background: "rgba(255,255,255,0.88)", backdropFilter: "blur(6px)", border: "1px solid #bfdbfe" }}
          >
            <svg className="h-4 w-4" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 right-8 z-10 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === current ? 24 : 8,
                  height: 8,
                  background: i === current
                    ? "linear-gradient(90deg, #3b82f6, #0ea5e9)"
                    : "rgba(255,255,255,0.4)",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}