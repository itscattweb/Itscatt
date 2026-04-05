"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

const slides = [
  { src: "/images/hero.jpg" },
  { src: "/images/hero1.jpg" },
  { src: "/images/hero2.jpg" },
  { src: "/images/hero3.jpg" },
];

export default function HeroSection() {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      {/* ── Full-screen Carousel Images ── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-800 ease-in-out"
          style={{ opacity: i === current ? (fading ? 0 : 1) : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('${slide.src}')`,
              animation: i === current ? "slowZoom 10s ease-in-out infinite alternate" : "none",
            }}
          />
        </div>
      ))}

      {/* ── Dark overlay ── */}
      <div className="absolute inset-0 bg-blue-950/60" />

      {/* ── Centered Content ── */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-sm text-white/80 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8 font-[family-name:var(--font-lato)]">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-300 animate-pulse" />
          MSFS · Kerala · Est. 2011
        </div>

        {/* Heading */}
        <h1 className="font-[family-name:var(--font-playfair)] text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
          Transforming Lives
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-200">
            Through Education
          </span>
        </h1>

        {/* Subtext */}
        <p className="font-[family-name:var(--font-lato)] text-base md:text-lg text-white/65 max-w-xl mx-auto mb-10 leading-relaxed">
          Empowering children from marginalized families with a home, quality education, and a brighter future.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/donate"
            className="group bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-full text-sm transition-all duration-300 shadow-xl shadow-blue-900/50 font-[family-name:var(--font-lato)] flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            Donate Now
          </Link>
          <Link
            href="/about"
            className="border-2 border-white/30 hover:border-white/70 text-white/80 hover:text-white px-9 py-4 rounded-full text-sm transition-all duration-300 font-[family-name:var(--font-lato)]"
          >
            Our Mission
          </Link>
        </div>
      </div>

      {/* ── Dot Indicators ── */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFading(true);
              setTimeout(() => { setCurrent(i); setFading(false); }, 800);
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

      {/* ── Bottom fade to page ── */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

      {/* ── Scroll hint ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5">
        <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>

      <style>{`
        @keyframes slowZoom {
          from { transform: scale(1.0); }
          to   { transform: scale(1.08); }
        }
      `}</style>
    </section>
  );
}