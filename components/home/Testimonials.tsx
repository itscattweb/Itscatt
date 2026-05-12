"use client";

import { useState, useEffect, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";

// ─── Type ─────────────────────────────────────────────────────────────────────
// Supabase table: testimonials
// Required columns:
//   id            int8        primary key
//   name          text
//   center        text
//   grade         text
//   achievement   text
//   quote         text
//   photo_url     text | null   (Cloudinary or Supabase Storage URL)
//   is_active     boolean       (only active rows are fetched)
//   display_order int4          (controls carousel order)
type Testimonial = {
  id: number;
  name: string;
  center: string;
  grade: string;
  achievement: string;
  quote: string;
  photo_url: string | null;
};

function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

// ─── Skeleton loader ──────────────────────────────────────────────────────────
function TestimonialSkeleton() {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-2xl overflow-hidden border border-slate-100 shadow-sm animate-pulse"
      style={{ minHeight: "360px" }}
    >
      <div className="bg-slate-100 w-full md:w-[280px] h-64 md:h-auto" />
      <div className="bg-white px-10 py-10 flex flex-col justify-between">
        <div className="space-y-3">
          <div className="h-10 w-10 bg-slate-100 rounded" />
          <div className="h-4 bg-slate-100 rounded w-full" />
          <div className="h-4 bg-slate-100 rounded w-5/6" />
          <div className="h-4 bg-slate-100 rounded w-4/6" />
          <div className="h-4 bg-slate-100 rounded w-3/6" />
        </div>
        <div>
          <div className="h-px bg-slate-100 mb-6" />
          <div className="h-4 bg-slate-100 rounded w-40 mb-2" />
          <div className="h-3 bg-slate-100 rounded w-32 mb-1" />
          <div className="h-3 bg-slate-100 rounded w-24" />
        </div>
      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────
export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  // ── Fetch from Supabase ──────────────────────────────────────────────────
  useEffect(() => {
    async function fetchTestimonials() {
      const { data, error } = await supabase
        .from("testimonials")
        .select("id, name, center, grade, achievement, quote, photo_url")
        .eq("is_active", true)
        .order("display_order", { ascending: true });

      if (error) {
        console.error("Supabase error:", error.message);
        setError("Failed to load testimonials.");
      } else {
        setTestimonials(data ?? []);
      }
      setLoading(false);
    }

    fetchTestimonials();
  }, []);

  // ── Carousel helpers ─────────────────────────────────────────────────────
  const go = useCallback(
    (next: number) => {
      if (animating || testimonials.length === 0) return;
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, 280);
    },
    [animating, testimonials.length]
  );

  const prev = useCallback(
    () => go((current - 1 + testimonials.length) % testimonials.length),
    [current, go, testimonials.length]
  );

  const next = useCallback(
    () => go((current + 1) % testimonials.length),
    [current, go, testimonials.length]
  );

  // Auto-advance every 6 s (only when more than one slide)
  useEffect(() => {
    if (testimonials.length < 2) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, testimonials.length]);

  const t = testimonials[current];

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">
      {/* Soft top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-blue-200" />
            <span className="font-[family-name:var(--font-lato)] text-blue-400 text-xs uppercase tracking-[0.3em]">
              Voices of Change
            </span>
            <div className="w-10 h-px bg-blue-200" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Stories That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
              {" "}Inspire
            </span>
          </h2>

          <p className="font-[family-name:var(--font-lato)] text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Hear from the students and supporters whose lives have been touched by the ITSSCAT mission.
          </p>
        </div>

        {/* ── Loading ── */}
        {loading && <TestimonialSkeleton />}

        {/* ── Error ── */}
        {!loading && error && (
          <div className="text-center py-16 font-[family-name:var(--font-lato)] text-slate-400 text-sm">
            {error}
          </div>
        )}

        {/* ── Empty ── */}
        {!loading && !error && testimonials.length === 0 && (
          <div className="text-center py-16 font-[family-name:var(--font-lato)] text-slate-400 text-sm">
            No testimonials available yet.
          </div>
        )}

        {/* ── Carousel Card ── */}
        {!loading && !error && t && (
          <div
            className="grid grid-cols-1 md:grid-cols-[280px_1fr] rounded-2xl overflow-hidden border border-slate-100 shadow-sm"
            style={{ minHeight: "360px" }}
          >
            {/* Left — Full photo (no border-radius) */}
            <div className="relative w-full md:w-[280px] h-64 md:h-auto flex-shrink-0 overflow-hidden">
              {t.photo_url && !imgError[current] ? (
                <img
                  key={t.id}
                  src={t.photo_url}
                  alt={t.name}
                  onError={() =>
                    setImgError((prev) => ({ ...prev, [current]: true }))
                  }
                  className={`w-full h-full object-cover object-top transition-opacity duration-300 ${
                    animating ? "opacity-0" : "opacity-100"
                  }`}
                />
              ) : (
                /* Fallback — initials on dark panel */
                <div
                  className={`w-full h-full flex flex-col items-center justify-center gap-3 bg-[#1a3a5c] transition-opacity duration-300 ${
                    animating ? "opacity-0" : "opacity-100"
                  }`}
                >
                  <span className="font-[family-name:var(--font-playfair)] text-5xl font-black text-blue-200">
                    {getInitials(t.name)}
                  </span>
                  <span className="font-[family-name:var(--font-lato)] text-blue-400/60 text-xs">
                    {t.name}
                  </span>
                </div>
              )}

              {/* Slide counter */}
              <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur-sm text-white text-xs font-[family-name:var(--font-lato)] px-2.5 py-1 rounded-full">
                {current + 1} / {testimonials.length}
              </div>
            </div>

            {/* Right — Quote content */}
            <div
              className={`bg-white flex flex-col justify-between px-8 py-8 md:px-10 md:py-10 transition-opacity duration-300 ${
                animating ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex-1">
                {/* Decorative quote mark */}
                <div className="font-[family-name:var(--font-playfair)] text-7xl text-blue-100 leading-none select-none mb-3">
                  "
                </div>
                <p className="font-[family-name:var(--font-lato)] text-slate-500 text-base leading-relaxed">
                  {t.quote}
                </p>
              </div>

              {/* Bottom row: person info + nav */}
              <div className="mt-8">
                <div className="w-full h-px bg-slate-100 mb-6" />

                <div className="flex items-end justify-between gap-4 flex-wrap">
                  {/* Person info */}
                  <div>
                    <p className="font-[family-name:var(--font-playfair)] text-slate-800 font-bold text-base mb-0.5">
                      {t.name}
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-blue-500 text-xs font-semibold mb-0.5">
                      {t.achievement}
                    </p>
                    <p className="font-[family-name:var(--font-lato)] text-slate-400 text-xs">
                      {t.grade} · {t.center}
                    </p>
                  </div>

                  {/* Nav — only shown when multiple slides */}
                  {testimonials.length > 1 && (
                    <div className="flex items-center gap-4">
                      {/* Dots */}
                      <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => go(i)}
                            aria-label={`Go to testimonial ${i + 1}`}
                            className={`rounded-full transition-all duration-300 ${
                              i === current
                                ? "w-5 h-2 bg-blue-600"
                                : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>

                      {/* Arrows */}
                      <div className="flex items-center gap-2">
                        <button
                          onClick={prev}
                          aria-label="Previous testimonial"
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M9 2L4 7L9 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={next}
                          aria-label="Next testimonial"
                          className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:border-blue-300 hover:text-blue-500 transition-colors"
                        >
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path
                              d="M5 2L10 7L5 12"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}