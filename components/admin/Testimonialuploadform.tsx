type Props = {
  name: string;
  center: string;
  grade: string;
  achievement: string;
  quote: string;
  order: number;
  loading: boolean;
  fileKey: number;
  onNameChange: (v: string) => void;
  onCenterChange: (v: string) => void;
  onGradeChange: (v: string) => void;
  onAchievementChange: (v: string) => void;
  onQuoteChange: (v: string) => void;
  onOrderChange: (v: number) => void;
  onFileChange: (f: File | null) => void;
  onSubmit: () => void;
};

const inputClass =
  "w-full rounded-xl border border-blue-100 bg-blue-50/40 px-4 py-2.5 text-sm text-slate-700 placeholder-slate-400 outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all";

export function TestimonialUploadForm({
  name, center, grade, achievement, quote, order, loading, fileKey,
  onNameChange, onCenterChange, onGradeChange, onAchievementChange,
  onQuoteChange, onOrderChange, onFileChange, onSubmit,
}: Props) {
  return (
    <div className="mb-8 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50/60 to-white p-6 shadow-sm">
      <h2 className="mb-5 text-sm font-semibold uppercase tracking-widest text-blue-400">
        Add Testimonial
      </h2>

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <input
          className={inputClass}
          placeholder="Full name *"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        <input
          className={inputClass}
          placeholder="Center (e.g. Trivandrum Center) *"
          value={center}
          onChange={(e) => onCenterChange(e.target.value)}
        />
        <input
          className={inputClass}
          placeholder="Grade / Role (e.g. Class XII Alumni) *"
          value={grade}
          onChange={(e) => onGradeChange(e.target.value)}
        />
        <input
          className={inputClass}
          placeholder="Achievement (short) *"
          value={achievement}
          onChange={(e) => onAchievementChange(e.target.value)}
        />
      </div>

      <textarea
        className={`${inputClass} mt-3 min-h-[100px] resize-none`}
        placeholder="Quote / testimonial text *"
        value={quote}
        onChange={(e) => onQuoteChange(e.target.value)}
      />

      <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs text-slate-400">
            Photo (optional)
          </label>
          {/* key prop forces React to remount the input, clearing it after submit */}
          <input
            key={fileKey}
            type="file"
            accept="image/*"
            onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
            className="block w-full text-sm text-slate-500 file:mr-3 file:rounded-full file:border-0 file:bg-blue-100 file:px-4 file:py-1.5 file:text-xs file:font-medium file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>
        <div>
          <label className="mb-1 block text-xs text-slate-400">
            Display order
          </label>
          <input
            type="number"
            min={0}
            className={inputClass}
            value={order}
            onChange={(e) => onOrderChange(Number(e.target.value))}
          />
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="mt-5 rounded-full px-6 py-2.5 text-xs font-semibold uppercase tracking-widest text-white transition-all disabled:opacity-50"
        style={{
          background: loading
            ? "#93c5fd"
            : "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
        }}
      >
        {loading ? "Uploading…" : "Add Testimonial"}
      </button>
    </div>
  );
}