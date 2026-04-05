// components/home/StatsBar.tsx

const stats = [
  {
    number: "2011",
    label: "Year Founded",
    description: "A mission born in faith",
  },
  {
    number: "2",
    label: "Centers",
    description: "Trivandrum & Malappuram",
  },
  {
    number: "23+",
    label: "Students",
    description: "Lives being transformed",
  },
  {
    number: "90%+",
    label: "Academic Results",
    description: "Every single year",
  },
  {
    number: "10",
    label: "Staff Members",
    description: "Dedicated to the mission",
  },
];

export default function StatsBar() {
  return (
    <section className="relative bg-white py-14 overflow-hidden">

      {/* ── Blue fade top ── */}

      {/* ── Blue radial glow background ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/80 via-white to-white pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      {/* ── Label ── */}
      <div className="relative z-10 text-center mb-10">
        <div className="inline-flex items-center gap-3">
          <div className="w-10 h-px bg-blue-300/60" />
          <span className="text-blue-400 text-xs font-[family-name:var(--font-lato)] uppercase tracking-[0.3em]">
            Our Impact in Numbers
          </span>
          <div className="w-10 h-px bg-blue-300/60" />
        </div>
      </div>

      {/* ── Stats Grid ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 divide-x divide-blue-100">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center px-6 py-4 hover:bg-blue-50/60 transition-colors duration-300 rounded-xl"
            >
              {/* Number */}
              <div className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-blue-400 mb-1">
                {stat.number}
              </div>

              {/* Label */}
              <div className="font-[family-name:var(--font-lato)] text-blue-900 text-xs font-bold uppercase tracking-widest mb-1">
                {stat.label}
              </div>

              {/* Description */}
              <div className="font-[family-name:var(--font-lato)] text-slate-400 text-xs">
                {stat.description}
              </div>

              {/* Hover underline */}
              <div className="mt-3 mx-auto w-0 group-hover:w-6 h-px bg-blue-400 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Blue fade bottom ── */}

    </section>
  );
}