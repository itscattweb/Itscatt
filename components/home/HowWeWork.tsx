// components/home/HowWeWork.tsx

const steps = [
  {
    step: "01",
    title: "Identify Talented Children",
    description:
      "We seek out highly intelligent children aged 13–18 from economically marginalized families — children with big dreams but no means to achieve them.",
  },
  {
    step: "02",
    title: "Selection & Entrance Test",
    description:
      "Children with a minimum of 90% in their previous class are invited for an entrance test. Selection is purely merit-based — irrespective of caste, religion or background.",
  },
  {
    step: "03",
    title: "Full Residential Care",
    description:
      "Selected students receive free accommodation, nutritious food, study materials and all facilities at our centers in Trivandrum and Malappuram.",
  },
  {
    step: "04",
    title: "Holistic Education & Formation",
    description:
      "We blend the ancient Gurukula system with modern education — academic excellence, personality development, spiritual formation and skill building.",
  },
  {
    step: "05",
    title: "Leaders Sent Into Society",
    description:
      "Our students go on to enter civil services, administrative roles and high-profile professions — becoming catalysts of change in society.",
  },
  {
    step: "06",
    title: "They Give Back",
    description:
      "Alumni contribute a fixed percentage of their monthly income back to the project — ensuring the mission continues for future generations.",
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* ── Blue fade top ── */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-blue-200" />
            <span className="font-[family-name:var(--font-lato)] text-blue-400 text-xs uppercase tracking-[0.3em]">
              Our Process
            </span>
            <div className="w-10 h-px bg-blue-200" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            How We
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400"> Work</span>
          </h2>

          <p className="font-[family-name:var(--font-lato)] text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            From identifying a child in need to sending them out as a leader — our step-by-step mission journey.
          </p>
        </div>

        {/* ── Steps Grid ── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 rounded-2xl p-7 transition-all duration-300"
            >
              {/* Step number watermark */}
              <div className="absolute top-5 right-6 font-[family-name:var(--font-playfair)] text-6xl font-black text-blue-50 group-hover:text-blue-100 transition-colors duration-300 leading-none select-none">
                {step.step}
              </div>

              {/* Step pill */}
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 text-blue-500 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 font-[family-name:var(--font-lato)]">
                Step {step.step}
              </div>

              {/* Title */}
              <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-slate-800 mb-3 leading-snug">
                {step.title}
              </h3>

              {/* Description */}
              <p className="font-[family-name:var(--font-lato)] text-slate-400 text-sm leading-relaxed">
                {step.description}
              </p>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}