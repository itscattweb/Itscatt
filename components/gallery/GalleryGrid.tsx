// components/gallery/GalleryGrid.tsx
"use client";

import Image from "next/image";
import { useState } from "react";

const categories = ["All", "Students", "Events", "Institutes", "Awards"];

const images = [
  { id: 1,  src: "/gallery/students/s1.jpg",    title: "Classroom Session",         category: "Students",   span: "col-span-1 row-span-1" },
  { id: 2,  src: "/gallery/students/s2.jpg",    title: "Study Time",                category: "Students",   span: "col-span-1 row-span-2" },
  { id: 3,  src: "/gallery/students/s3.jpg",    title: "Group Discussion",          category: "Students",   span: "col-span-2 row-span-1" },
  { id: 4,  src: "/gallery/students/s4.jpg",    title: "Morning Assembly",          category: "Students",   span: "col-span-1 row-span-1" },
  { id: 5,  src: "/gallery/students/s5.jpg",    title: "Science Exhibition",        category: "Students",   span: "col-span-1 row-span-1" },
  { id: 6,  src: "/gallery/students/s6.jpg",    title: "Reading Hour",              category: "Students",   span: "col-span-1 row-span-2" },
  { id: 7,  src: "/gallery/events/e1.jpg",      title: "Annual Day Celebration",    category: "Events",     span: "col-span-2 row-span-1" },
  { id: 8,  src: "/gallery/events/e2.jpg",      title: "Independence Day",          category: "Events",     span: "col-span-1 row-span-1" },
  { id: 9,  src: "/gallery/events/e3.jpg",      title: "Cultural Programme",        category: "Events",     span: "col-span-1 row-span-2" },
  { id: 10, src: "/gallery/events/e4.jpg",      title: "Debate Competition",        category: "Events",     span: "col-span-1 row-span-1" },
  { id: 11, src: "/gallery/events/e5.jpg",      title: "NSS Camp",                  category: "Events",     span: "col-span-2 row-span-1" },
  { id: 12, src: "/gallery/institutes/i1.jpg",  title: "De Sales Bhavan Trivandrum",category: "Institutes", span: "col-span-2 row-span-1" },
  { id: 13, src: "/gallery/institutes/i2.jpg",  title: "Perinthalmanna Campus",     category: "Institutes", span: "col-span-1 row-span-2" },
  { id: 14, src: "/gallery/institutes/i3.jpg",  title: "Study Hall",                category: "Institutes", span: "col-span-1 row-span-1" },
  { id: 15, src: "/gallery/institutes/i4.jpg",  title: "Dormitory",                 category: "Institutes", span: "col-span-1 row-span-1" },
  { id: 16, src: "/gallery/awards/a1.jpg",      title: "US Exchange Programme",     category: "Awards",     span: "col-span-1 row-span-2" },
  { id: 17, src: "/gallery/awards/a2.jpg",      title: "Board Exam Toppers",        category: "Awards",     span: "col-span-2 row-span-1" },
  { id: 18, src: "/gallery/awards/a3.jpg",      title: "Meritorious Service Award", category: "Awards",     span: "col-span-1 row-span-1" },
  { id: 19, src: "/gallery/awards/a4.jpg",      title: "Quiz Championship",         category: "Awards",     span: "col-span-1 row-span-1" },
];

export default function GalleryGrid() {
  const [active, setActive] = useState("All");
  const [lightbox, setLightbox] = useState<null | (typeof images)[0]>(null);

  const filtered = active === "All" ? images : images.filter((img) => img.category === active);

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
                background: active === cat ? "linear-gradient(135deg, #eff6ff, #dbeafe)" : "#ffffff",
              }}
            >
              <span
                style={{
                  background: active === cat
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
                  style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {filtered.map((img) => (
            <div
              key={img.id}
              onClick={() => setLightbox(img)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-blue-100 bg-blue-50 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100 ${img.span}`}
            >
              <Image src={img.src} alt={img.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />

              {/* Fallback */}
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
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
                style={{ background: "linear-gradient(to top, rgba(30,58,95,0.7) 0%, transparent 60%)" }}
              />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 translate-y-2 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="mb-1 flex items-center gap-2">
                  <div className="h-px w-3" style={{ background: "rgba(147,197,253,0.8)" }} />
                  <span className="text-[9px] font-medium uppercase tracking-[0.25em] text-blue-200">{img.category}</span>
                </div>
                <p className="text-sm font-semibold leading-snug text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {img.title}
                </p>
              </div>

              {/* Expand icon */}
              <div
                className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100"
                style={{ background: "rgba(255,255,255,0.85)", backdropFilter: "blur(6px)", border: "1px solid #bfdbfe" }}
              >
                <svg className="h-3 w-3" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(15,23,42,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative h-[420px] w-full bg-blue-50">
              <Image src={lightbox.src} alt={lightbox.title} fill className="object-cover" />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
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
                  <div className="h-[1.5px] w-4 rounded-full" style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }} />
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
                    background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
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
                <svg className="h-4 w-4" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Prev / Next */}
            <div className="flex items-center justify-between border-t border-blue-50 px-7 pb-6 pt-4">
              <button
                onClick={() => {
                  const idx = filtered.findIndex((i) => i.id === lightbox.id);
                  setLightbox(filtered[(idx - 1 + filtered.length) % filtered.length]);
                }}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all hover:border-blue-300"
              >
                <svg className="h-3 w-3" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
                <span style={{ background: "linear-gradient(90deg, #1d4ed8, #0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Previous
                </span>
              </button>
              <span
                className="text-[11px] font-light"
                style={{ background: "linear-gradient(90deg, #94a3b8, #3b82f6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
              >
                {filtered.findIndex((i) => i.id === lightbox.id) + 1} / {filtered.length}
              </span>
              <button
                onClick={() => {
                  const idx = filtered.findIndex((i) => i.id === lightbox.id);
                  setLightbox(filtered[(idx + 1) % filtered.length]);
                }}
                className="flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all hover:border-blue-300"
              >
                <span style={{ background: "linear-gradient(90deg, #1d4ed8, #0284c7)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Next
                </span>
                <svg className="h-3 w-3" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}