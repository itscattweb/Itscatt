// components/home/AboutSnippet.tsx
import Link from "next/link";
import Image from "next/image";

export default function AboutSnippet() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* ── Blue fade top glow ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      {/* ── Subtle corner accents ── */}
      <div className="absolute top-8 left-8 w-14 h-14 border-t-2 border-l-2 border-blue-100" />
      <div className="absolute bottom-8 right-8 w-14 h-14 border-b-2 border-r-2 border-blue-100" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* ── Left: Image ── */}
        <div className="relative">

          {/* Blue border frame */}
          <div className="absolute -top-3 -left-3 w-full h-full border-2 border-blue-100 rounded-xl" />

          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-blue-50">
            <Image
              src="/images/hero3.jpg"
              alt="ITSSCAT Students"
              fill
              className="object-contain"
            />
            {/* Fallback
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
              <span className="font-[family-name:var(--font-playfair)] text-blue-300 text-lg italic">
                Photo Coming Soon
              </span>
            </div> */}
          </div>

          {/* Floating badge */}
          <div className="absolute -bottom-5 -right-5 bg-blue-700 text-white rounded-xl px-5 py-4 shadow-xl shadow-blue-200">
            <div className="font-[family-name:var(--font-playfair)] text-3xl font-black">
              13+
            </div>
            <div className="font-[family-name:var(--font-lato)] text-xs uppercase tracking-wider text-blue-200">
              Years of Mission
            </div>
          </div>
        </div>

        {/* ── Right: Text ── */}
        <div>

          {/* Section label */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-px bg-blue-500" />
            <span className="font-[family-name:var(--font-lato)] text-blue-500 text-xs uppercase tracking-[0.3em]">
              About the Mission
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-6">
            A Mission Rooted
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
              in Faith & Service
            </span>
          </h2>

          {/* Description */}
          <p className="font-[family-name:var(--font-lato)] text-slate-500 text-base leading-relaxed mb-4">
            <strong className="text-slate-800">ITSSCAT-India</strong> identifies
            highly intelligent children from economically marginalized families
            and provides full residential care — accommodation, food, education,
            and character formation — completely free of cost.
          </p>

          <p className="font-[family-name:var(--font-lato)] text-slate-500 text-base leading-relaxed mb-8">
            Our approach blends the ancient{" "}
            <strong className="text-slate-800">Gurukula tradition</strong> with
            modern education, forming not just academically excellent students,
            but value-driven leaders who will serve society.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "Faith Based",
              "Full Education",
              "Residential Care",
              "Character Formation",
              "Serving India",
            ].map((pill) => (
              <span
                key={pill}
                className="font-[family-name:var(--font-lato)] text-xs bg-blue-50 border border-blue-100 text-blue-600 px-4 py-1.5 rounded-full"
              >
                {pill}
              </span>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-600 text-white font-bold px-8 py-4 rounded-full text-sm transition-all duration-300 font-[family-name:var(--font-lato)] shadow-lg shadow-blue-100"
          >
            <span>Read Our Full Story</span>
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </Link>
        </div>
      </div>

      {/* ── Bottom accent ── */}

    </section>
  );
}