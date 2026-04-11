"use client";

import { useEffect, useState } from "react";
import { useToast } from "@/hooks/useToast";
import { useGallery } from "@/hooks/useGallery";
import { useHero } from "@/hooks/useHero";
import { Toast } from "@/components/admin/Toast";
import { GalleryUploadForm } from "@/components/admin/GalleryUploadForm";
import { GalleryCard } from "@/components/admin/GalleryCard";
import { HeroUploadForm } from "@/components/admin/HeroUploadForm";
import { HeroCard } from "@/components/admin/HeroCard";

type Tab = "gallery" | "hero";

export default function AdminPage() {
  const [tab, setTab] = useState<Tab>("gallery");

  const { toast, showToast } = useToast();

  const {
    galleryImages,
    gTitle, setGTitle,
    gCategory, setGCategory,
    gSpan, setGSpan,
    setGFile,
    gLoading,
    gFileRef,
    fetchGallery,
    uploadGallery,
    deleteGallery,
  } = useGallery(showToast);

  const {
    heroSlides,
    hOrder, setHOrder,
    setHFile,
    hLoading,
    hFileRef,
    fetchHero,
    uploadHero,
    deleteHero,
  } = useHero(showToast);

  useEffect(() => {
    fetchGallery();
    fetchHero();
  }, []);

  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-10">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
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
              Admin Panel
            </span>
          </div>
          <h1
            className="text-4xl font-bold"
            style={{
              fontFamily: "'Playfair Display', serif",
              background: "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 50%, #0ea5e9 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Manage Gallery
          </h1>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-3">
          {(["gallery", "hero"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className="rounded-full border px-6 py-2 text-[11px] font-medium uppercase tracking-[0.2em] transition-all duration-300"
              style={{
                borderColor: tab === t ? "#93c5fd" : "#dbeafe",
                background:
                  tab === t
                    ? "linear-gradient(135deg, #eff6ff, #dbeafe)"
                    : "#fff",
              }}
            >
              <span
                style={{
                  backgroundImage:
                    tab === t
                      ? "linear-gradient(90deg, #1d4ed8, #0284c7)"
                      : "linear-gradient(90deg, #94a3b8, #64748b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t === "gallery" ? "Gallery Images" : "Hero Slides"}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Tab */}
        {tab === "gallery" && (
          <div>
            <GalleryUploadForm
              title={gTitle}
              category={gCategory}
              span={gSpan}
              loading={gLoading}
              onTitleChange={setGTitle}
              onCategoryChange={setGCategory}
              onSpanChange={setGSpan}
              onFileChange={setGFile}
              onSubmit={uploadGallery}
              fileInputRef={gFileRef}
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {galleryImages.map((img) => (
                <GalleryCard
                  key={img.id}
                  image={img}
                  onDelete={deleteGallery}
                />
              ))}
            </div>
          </div>
        )}

        {/* Hero Tab */}
        {tab === "hero" && (
          <div>
            <HeroUploadForm
              order={hOrder}
              loading={hLoading}
              onOrderChange={setHOrder}
              onFileChange={setHFile}
              onSubmit={uploadHero}
              fileInputRef={hFileRef}
            />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
              {heroSlides.map((slide) => (
                <HeroCard
                  key={slide.id}
                  slide={slide}
                  onDelete={deleteHero}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {toast && <Toast msg={toast.msg} ok={toast.ok} />}
    </div>
  );
}