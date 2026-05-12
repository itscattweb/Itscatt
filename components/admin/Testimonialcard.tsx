type Testimonial = {
  id: number;
  name: string;
  center: string;
  grade: string;
  achievement: string;
  quote: string;
  photo_url: string | null;
  is_active: boolean;
  display_order: number;
};

type Props = {
  testimonial: Testimonial;
  onToggle: (id: number, current: boolean) => void;
  onDelete: (id: number, photoUrl: string | null) => void;
};

function getInitials(name: string) {
  return name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
}

export function TestimonialCard({ testimonial: t, onToggle, onDelete }: Props) {
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border transition-all duration-300 ${
        t.is_active
          ? "border-blue-100 shadow-sm hover:shadow-md hover:shadow-blue-50"
          : "border-slate-100 opacity-60"
      }`}
    >
      {/* Photo / Initials */}
      <div className="relative h-36 w-full overflow-hidden bg-[#1a3a5c] flex-shrink-0">
        {t.photo_url ? (
          <img
            src={t.photo_url}
            alt={t.name}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-black text-blue-200" style={{ fontFamily: "'Playfair Display', serif" }}>
              {getInitials(t.name)}
            </span>
          </div>
        )}

        {/* Active badge */}
        <div
          className={`absolute right-2 top-2 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
            t.is_active
              ? "bg-green-100 text-green-700"
              : "bg-slate-200 text-slate-500"
          }`}
        >
          {t.is_active ? "Active" : "Hidden"}
        </div>

        {/* Order badge */}
        <div className="absolute left-2 top-2 rounded-full bg-black/40 px-2 py-0.5 text-[10px] text-white">
          #{t.display_order}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col bg-white p-4">
        <p className="text-sm font-bold text-slate-800 leading-tight mb-0.5" style={{ fontFamily: "'Playfair Display', serif" }}>
          {t.name}
        </p>
        <p className="text-[11px] font-semibold text-blue-500 mb-0.5">{t.achievement}</p>
        <p className="text-[11px] text-slate-400 mb-3">{t.grade} · {t.center}</p>
        <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 flex-1">
          "{t.quote}"
        </p>

        {/* Actions */}
        <div className="mt-4 flex gap-2">
          <button
            onClick={() => onToggle(t.id, t.is_active)}
            className="flex-1 rounded-full border py-1.5 text-[11px] font-medium transition-all hover:bg-blue-50"
            style={{ borderColor: "#bfdbfe", color: "#1d4ed8" }}
          >
            {t.is_active ? "Hide" : "Show"}
          </button>
          <button
            onClick={() => {
              if (confirm(`Delete testimonial by "${t.name}"?`)) {
                onDelete(t.id, t.photo_url);
              }
            }}
            className="flex-1 rounded-full border border-red-100 py-1.5 text-[11px] font-medium text-red-400 transition-all hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}