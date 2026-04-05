// components/gallery/GalleryHero.tsx
"use client";

import Image from "next/image";

export default function GalleryHero() {
  return (
    <section className="relative overflow-hidden bg-white px-10 pt-20 pb-10">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[140px] font-bold leading-none tracking-tighter"
        style={{ fontFamily: "'Playfair Display', serif", color: "#f0f6ff", whiteSpace: "nowrap", zIndex: 0 }}
      >
        GALLERY
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">

          {/* ── Left: Text ── */}
          <div>

            {/* Badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #3b82f6, #0ea5e9)" }}
              />
              <span
                className="text-[11px] font-medium uppercase tracking-[0.2em]"
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Our Moments
              </span>
            </div>

            {/* Headline */}
            <h1
              className="mb-6 text-5xl font-bold leading-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 45%, #0ea5e9 80%, #7dd3fc 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Life at <br />
              <em>ITSSCAT-India</em>
            </h1>

            {/* Body */}
            <p
              className="mb-8 max-w-md text-sm font-light leading-loose"
              style={{
                background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Glimpses of our students, institutes, events and achievements —
              moments that tell the story of transformation, one child at a time.
              Every photograph is a chapter in a larger story of hope.
            </p>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { num: "23+", label: "Students" },
                { num: "2", label: "Institutes" },
                { num: "10+", label: "Years" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 text-center"
                >
                  <div
                    className="mb-1 text-3xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(160deg, #1e3a5f, #1d4ed8, #0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    className="text-[10px] font-medium uppercase tracking-[0.2em]"
                    style={{
                      background: "linear-gradient(90deg, #2563eb, #0284c7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Image collage ── */}
          <div className="relative h-[480px]">

            {/* Main large image */}
            <div
              className="absolute left-0 top-0 h-72 w-[65%] overflow-hidden rounded-3xl border border-blue-100 shadow-lg shadow-blue-50"
            >
              <Image
                src="/gallery/hero/hero1.jpg"
                alt="ITSSCAT Students"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
              >
                <span
                  className="text-6xl font-bold opacity-30"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  S
                </span>
              </div>
            </div>

            {/* Top right image */}
            <div
              className="absolute right-0 top-4 h-44 w-[33%] overflow-hidden rounded-2xl border border-blue-100 shadow-md shadow-blue-50"
            >
              <Image
                src="/gallery/hero/hero2.jpg"
                alt="ITSSCAT Events"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #bfdbfe, #dbeafe)" }}
              >
                <span
                  className="text-4xl font-bold opacity-30"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  E
                </span>
              </div>
            </div>

            {/* Bottom left image */}
            <div
              className="absolute bottom-0 left-8 h-48 w-[40%] overflow-hidden rounded-2xl border border-blue-100 shadow-md shadow-blue-50"
            >
              <Image
                src="/gallery/hero/hero3.jpg"
                alt="ITSSCAT Institutes"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)" }}
              >
                <span
                  className="text-4xl font-bold opacity-30"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  I
                </span>
              </div>
            </div>

            {/* Bottom right image */}
            <div
              className="absolute bottom-4 right-0 h-56 w-[55%] overflow-hidden rounded-3xl border border-blue-100 shadow-lg shadow-blue-50"
            >
              <Image
                src="/gallery/hero/hero4.jpg"
                alt="ITSSCAT Awards"
                fill
                className="object-cover"
              />
              <div
                className="absolute inset-0 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #dbeafe, #bfdbfe)" }}
              >
                <span
                  className="text-4xl font-bold opacity-30"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  A
                </span>
              </div>
            </div>

            {/* Floating badge */}
            <div
              className="absolute left-[60%] top-[44%] -translate-x-1/2 -translate-y-1/2 z-10 flex items-center gap-2 rounded-full px-4 py-2 shadow-md"
              style={{
                background: "rgba(255,255,255,0.92)",
                backdropFilter: "blur(8px)",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: "linear-gradient(135deg, #3b82f6, #0ea5e9)" }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.2em]"
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Since 2011
              </span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}