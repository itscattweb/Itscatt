import { RefObject } from "react";

const CATEGORIES = ["Students", "Events", "Institutes", "Awards"];
const SPANS = [
  { label: "1×1", value: "col-span-1 row-span-1" },
  { label: "2×1", value: "col-span-2 row-span-1" },
  { label: "1×2", value: "col-span-1 row-span-2" },
  { label: "2×2", value: "col-span-2 row-span-2" },
];

type GalleryUploadFormProps = {
  title: string;
  category: string;
  span: string;
  loading: boolean;
  onTitleChange: (v: string) => void;
  onCategoryChange: (v: string) => void;
  onSpanChange: (v: string) => void;
  onFileChange: (file: File | null) => void;
  onSubmit: () => void;
  fileInputRef: RefObject<HTMLInputElement>;
};

export function GalleryUploadForm({
  title,
  category,
  span,
  loading,
  onTitleChange,
  onCategoryChange,
  onSpanChange,
  onFileChange,
  onSubmit,
  fileInputRef,
}: GalleryUploadFormProps) {
  return (
    <div className="mb-8 rounded-3xl border border-blue-100 bg-blue-50/40 p-6">
      <h2
        className="mb-5 text-sm font-semibold uppercase tracking-[0.2em]"
        style={{
          backgroundImage: "linear-gradient(90deg, #1d4ed8, #0284c7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Upload New Image
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          type="text"
          placeholder="Image title"
          value={title}
          onChange={(e) => onTitleChange(e.target.value)}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-300"
        />

        <select
          value={category}
          onChange={(e) => onCategoryChange(e.target.value)}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-300"
        >
          {CATEGORIES.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <select
          value={span}
          onChange={(e) => onSpanChange(e.target.value)}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-300"
        >
          {SPANS.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label} — {s.value}
            </option>
          ))}
        </select>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-500 outline-none"
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-5 rounded-full px-8 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:opacity-90 disabled:opacity-50"
        style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)" }}
      >
        {loading ? "Uploading..." : "Upload Image"}
      </button>
    </div>
  );
}