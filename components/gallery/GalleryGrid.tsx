// components/gallery/GalleryGrid.tsx
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
const categories = ["All", "Students", "Events", "Institutes", "Awards"];

type GalleryImage = {
  id: number;
  src: string;
  title: string;
  category: string;
  span: string;
};

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      const { data, error } = await supabase
        .from("gallery_images")
        .select("id, src, title, category, span")
        .order("created_at", { ascending: true });

      if (!error && data) setImages(data);
      setLoading(false);
    };
    fetchImages();
  }, []);

  const filtered =
    active === "All" ? images : images.filter((img) => img.category === active);

  // ── Loading skeleton ──
  if (loading) {
    return (
      <section className="relative bg-white px-10 pb-24 pt-6">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 flex gap-3">
            {categories.map((c) => (
              <div
                key={c}
                className="h-8 w-20 animate-pulse rounded-full bg-blue-50"
              />
            ))}
          </div>
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className={`animate-pulse rounded-2xl bg-blue-50 ${
                  i % 3 === 0
                    ? "col-span-2 row-span-1"
                    : "col-span-1 row-span-2"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-white px-10 pb-24 pt-6">
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
            Browse by Category
          </span>
        </div>

        {/* Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className="relative overflow-hidden rounded-full border px-5 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                borderColor: active === cat ? "#93c5fd" : "#dbeafe",
                background:
                  active === cat
                    ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                    : "#ffffff",
              }}
            >
              <span
                style={{
                  backgroundImage:
                    active === cat
                      ? "linear-gradient(90deg, #1d4ed8, #0284c7)"
                      : "linear-gradient(90deg, #94a3b8, #64748b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {cat}
              </span>
              {active === cat && (
                <span
                  className="absolute bottom-0 left-1/2 h-0.5 w-8 -translate-x-1/2 rounded-full"
                  style={{
                    background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
                  }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Empty State */}
        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div
              className="mb-4 flex h-16 w-16 items-center justify-center rounded-full"
              style={{
                background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
              }}
            >
              <svg
                className="h-7 w-7 opacity-40"
                fill="none"
                stroke="#1d4ed8"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5M3.75 3.75h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6a2.25 2.25 0 012.25-2.25z"
                />
              </svg>
            </div>
            <p className="text-sm font-medium text-slate-400">
              No images in this category yet.
            </p>
          </div>
        )}

        {/* Masonry Grid */}
        {filtered.length > 0 && (
          <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
            {filtered.map((img) => (
              <div
                key={img.id}
                onClick={() => setLightbox(img)}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 ${img.span}`}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="absolute inset-0 h-full w-full object-contain" // ✅ contain not cover
                />

                {/* Fallback bg (shown while image loads) */}
                <div
                  className="absolute inset-0 -z-10 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                  }}
                >
                  <span
                    className="text-5xl font-bold opacity-20"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {img.category[0]}
                  </span>
                </div>

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(30,58,95,0.7) 0%, transparent 60%)",
                  }}
                />

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="mb-1 flex items-center gap-2">
                    <div
                      className="h-px w-3"
                      style={{ background: "rgba(147,197,253,0.8)" }}
                    />
                    <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-blue-200">
                      {img.category}
                    </span>
                  </div>
                  <p
                    className="text-sm font-semibold leading-snug text-white"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {img.title}
                  </p>
                </div>

                {/* Expand icon */}
                <div
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                  style={{
                    background: "rgba(255,255,255,0.85)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid #bfdbfe",
                  }}
                >
                  <svg
                    className="h-3 w-3"
                    fill="none"
                    stroke="#1d4ed8"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{
            background: "rgba(15,23,42,0.85)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-[420px] w-full">
              <img
                src={lightbox.src}
                alt={lightbox.title}
                className="absolute inset-0 h-full w-full object-contain" // ✅ contain not cover
              />
              <div
                className="absolute inset-0 -z-10 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #dbeafe, #eff6ff)",
                }}
              >
                <span
                  className="text-8xl font-bold opacity-20"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {lightbox.category[0]}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="flex items-start justify-between p-7">
              <div>
                <div className="mb-2 flex items-center gap-2">
                  <div
                    className="h-[1.5px] w-4 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
                    }}
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
                    {lightbox.category}
                  </span>
                </div>
                <h3
                  className="text-2xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background:
                      "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {lightbox.title}
                </h3>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-blue-50 transition-all hover:border-blue-300"
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between border-t border-blue-50 px-7 pb-6 pt-4">
              <button
                onClick={() => {
                  const idx = filtered.findIndex((i) => i.id === lightbox.id);
                  setLightbox(
                    filtered[(idx - 1 + filtered.length) % filtered.length],
                  );
                }}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all hover:border-blue-300"
              >
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Previous
                </span>
              </button>
              <span
                className="text-[11px] font-light"
                style={{
                  background: "linear-gradient(90deg, #94a3b8, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {filtered.findIndex((i) => i.id === lightbox.id) + 1} /{" "}
                {filtered.length}
              </span>
              <button
                onClick={() => {
                  const idx = filtered.findIndex((i) => i.id === lightbox.id);
                  setLightbox(filtered[(idx + 1) % filtered.length]);
                }}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all hover:border-blue-300"
              >
                <span
                  style={{
                    background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Next
                </span>
                <svg
                  className="h-3 w-3"
                  fill="none"
                  stroke="#1d4ed8"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
