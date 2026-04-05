"use client";

import { useState, useEffect } from "react";

const slides = [
  { src: "/images/hero.jpg" },
  { src: "/images/hero1.jpg" },
  { src: "/images/hero2.jpg" },
  { src: "/images/hero3.jpg" },
];

export default function AboutHero() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
        setFading(false);
      }, 800);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-28 px-6 min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* ── Carousel Images ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-700 ease-in-out"
          style={{ opacity: i === current ? (fading ? 0 : 1) : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.src}')`,
              animation:
                i === current
                  ? "slowZoom 10s ease-in-out infinite alternate"
                  : "none",
            }}
          />
        </div>
      ))}

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-blue-950/70" />

      {/* ── Subtle dot grid ── */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Corner accents ── */}
      <div className="absolute top-8 left-8 w-12 h-12 border-t border-l border-blue-400/20" />
      <div className="absolute top-8 right-8 w-12 h-12 border-t border-r border-blue-400/20" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-b border-l border-blue-400/20" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-b border-r border-blue-400/20" />

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/15 bg-white/5 backdrop-blur-sm text-blue-300 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8 font-[family-name:var(--font-lato)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
          MSFS · Kerala Fransalian Educational Charitable Society
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          About
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">
            ITSSCAT-India
          </span>
        </h1>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-12 h-px bg-blue-400/40" />
          <span className="text-blue-400/60 text-xs">✦</span>
          <div className="w-12 h-px bg-blue-400/40" />
        </div>

        {/* Subtext */}
        <p className="font-[family-name:var(--font-lato)] text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
          Institute of Talent Search for Social Change and Transformation of
          India — empowering brilliant children from marginalized families since
          2011.
        </p>

        {/* Meta tags */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-white/25 text-xs font-[family-name:var(--font-lato)] uppercase tracking-widest">
          <span>Est. May 2011</span>
          <span>·</span>
          <span>Reg. No. K31/1973</span>
          <span>·</span>
          <span>Trivandrum & Malappuram</span>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-10">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setFading(true);
                setTimeout(() => {
                  setCurrent(i);
                  setFading(false);
                }, 800);
              }}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-7 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ── Bottom fade to white ── */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}
