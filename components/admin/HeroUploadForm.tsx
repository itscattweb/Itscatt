import { RefObject } from "react"; // ✅ was React.RefObject

type HeroUploadFormProps = {
  order: number;
  loading: boolean;
  onOrderChange: (v: number) => void;
  onFileChange: (file: File | null) => void;
  onSubmit: () => void;
  fileInputRef: RefObject<HTMLInputElement>; // ✅ no React. prefix
};

export function HeroUploadForm({
  order,
  loading,
  onOrderChange,
  onFileChange,
  onSubmit,
  fileInputRef,
}: HeroUploadFormProps) {
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
        Upload New Hero Slide
      </h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-500 outline-none"
        />
        <input
          type="number"
          placeholder="Order index (0, 1, 2...)"
          value={order}
          onChange={(e) => onOrderChange(Number(e.target.value))}
          className="rounded-xl border border-blue-100 bg-white px-4 py-2.5 text-sm text-slate-700 outline-none focus:border-blue-300"
        />
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-5 rounded-full px-8 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-all hover:opacity-90 disabled:opacity-50"
        style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)" }}
      >
        {loading ? "Uploading..." : "Upload Slide"}
      </button>
    </div>
  );
}