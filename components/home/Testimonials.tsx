// components/home/Testimonials.tsx

const testimonials = [
  {
    name: "Arun Krishnan",
    center: "Trivandrum Center",
    grade: "Class XII Alumni",
    achievement: "Selected for US Government Exchange Program",
    quote:
      "ITSSCAT gave me not just education, but a home, a family and a purpose. Coming from a broken family with no means, I never imagined I would one day represent India in the United States.",
    initials: "AK",
  },
  {
    name: "Fathima Nazar",
    center: "Malappuram Center",
    grade: "Class X Student",
    achievement: "First Rank in District — Science Exhibition",
    quote:
      "Before ITSSCAT I had no place to study at home. Today I stand first in my class and won the district science exhibition. Fr. Jose and the staff believed in me when nobody else did.",
    initials: "FN",
  },
  {
    name: "Vishnu Raj",
    center: "Trivandrum Center",
    grade: "Class XI Student",
    achievement: "NSS Best Volunteer Award",
    quote:
      "We are not just taught subjects — we are taught how to live, how to serve, how to lead. I am preparing for civil services and ITSSCAT has given me the foundation to get there.",
    initials: "VR",
  },
  {
    name: "Sr. Mary Thomas",
    center: "Well Wisher",
    grade: "Retired Teacher — Trivandrum",
    achievement: "Donor & Supporter since 2013",
    quote:
      "I have visited both centers and seen the transformation with my own eyes. These children come in lost and leave as confident, value-driven young people. Every rupee donated here is a seed of change.",
    initials: "MT",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[200px] bg-blue-50/80 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-blue-200" />
            <span className="font-[family-name:var(--font-lato)] text-blue-400 text-xs uppercase tracking-[0.3em]">
              Voices of Change
            </span>
            <div className="w-10 h-px bg-blue-200" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Stories That
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400"> Inspire</span>
          </h2>

          <p className="font-[family-name:var(--font-lato)] text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Hear from the students and supporters whose lives have been touched by the ITSSCAT mission.
          </p>
        </div>

        {/* ── Testimonials Grid ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 rounded-2xl p-8 transition-all duration-300"
            >
              {/* Large quote mark */}
              <div className="absolute top-5 right-7 font-[family-name:var(--font-playfair)] text-8xl text-blue-50 leading-none select-none pointer-events-none">
                "
              </div>

              {/* Quote */}
              <p className="font-[family-name:var(--font-lato)] text-slate-500 text-base leading-relaxed mb-8 relative z-10">
                "{t.quote}"
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-slate-100 mb-6" />

              {/* Person info */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-100">
                  <span className="font-[family-name:var(--font-playfair)] text-white font-black text-sm">
                    {t.initials}
                  </span>
                </div>

                {/* Name & details */}
                <div className="flex-1">
                  <div className="font-[family-name:var(--font-playfair)] text-slate-800 font-bold text-base">
                    {t.name}
                  </div>
                  <div className="font-[family-name:var(--font-lato)] text-blue-500 text-xs font-semibold">
                    {t.achievement}
                  </div>
                  <div className="font-[family-name:var(--font-lato)] text-slate-400 text-xs mt-0.5">
                    {t.grade} · {t.center}
                  </div>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom accent ── */}
    </section>
  );
}