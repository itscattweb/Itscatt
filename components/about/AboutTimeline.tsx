// components/about/AboutTimeline.tsx

const timeline = [
  {
    year: "2009",
    title: "The Seed Is Planted",
    body:
      "Fr. Dr. Jose Karekatt concludes 6 years as State Director of Ministry to the Imprisoned under KCBC (2003–2009) and begins reflection, studies and preparation for a new mission serving marginalized children.",
    side: "left",
  },
  {
    year: "May 2011",
    title: "ITSSCAT-India Is Born",
    body:
      "On 23rd May 2011, ITSSCAT-India officially launched from nothing — 6 students, 2 staff, in a rented house generously offered by a faithful aged lady at a small rent. A dream becomes reality.",
    side: "right",
  },
  {
    year: "2011–12",
    title: "First Land Donation",
    body:
      "A retired Inspector General, moved by the mission, donated 2 acres of land to start a second branch of the project — the future home of the Perinthalmanna institute.",
    side: "left",
  },
  {
    year: "2013",
    title: "House Donated",
    body:
      "The owner of the very rented house where ITSSCAT-India started, deeply moved by the formation and growth of the children, donated her house and property to the project for a small sum.",
    side: "right",
  },
  {
    year: "2013–14",
    title: "Academic Excellence Begins",
    body:
      "Every student passes final year board exams with 90% and above. ITSSCAT-India students become consistent top performers in their schools — first in class, leaders in character.",
    side: "left",
  },
  {
    year: "2016",
    title: "First US Exchange Student",
    body:
      "An ITSSCAT-India student is selected for the American Government Sponsored Study Exchange Program and recognised as one of the best exchange students of the year.",
    side: "right",
  },
  {
    year: "August 2016",
    title: "Own Property Acquired",
    body:
      "After six years of operating in a rented house, ITSSCAT-India finally purchases the Trivandrum property with the support of the religious society — a major milestone of stability.",
    side: "left",
  },
  {
    year: "2016–17",
    title: "Second US Exchange Student",
    body:
      "A second ITSSCAT-India student is selected for the US Government Exchange Program. Students also excel in NSS, science exhibitions, debates and inter-school quiz competitions.",
    side: "right",
  },
  {
    year: "Today",
    title: "Two Institutes, 23 Students",
    body:
      "ITSSCAT-India now runs two institutes — Trivandrum (14 students) and Perinthalmanna (6 students) — plus 3 students in graduation outside. 10 staff, growing reputation, world-class ambition.",
    side: "left",
  },
];

export default function AboutTimeline() {
  return (
    <section className="relative overflow-hidden bg-white px-10 pb-24 pt-20">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[120px] font-bold leading-none tracking-tighter"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#f0f6ff",
          whiteSpace: "nowrap",
        }}
      >
        HISTORY
      </div>

      <div className="relative z-10 mx-auto max-w-4xl">

        {/* Badge */}
        <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5">
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
            Our Journey
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mb-4 text-5xl font-bold leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            background:
              "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 45%, #0ea5e9 80%, #7dd3fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          From a Rented Room <br />
          <em>to a Movement</em>
        </h2>

        {/* Subtext */}
        <p
          className="mb-20 max-w-lg text-sm font-light leading-loose"
          style={{
            background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Since 23rd May 2011, ITSSCAT-India has grown from 6 students in a
          borrowed house to two institutes, 23 students and a reputation for
          excellence — built entirely on faith, generosity and hard work.
        </p>

        {/* Timeline */}
        <div className="relative">

          {/* Center vertical line */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, #bfdbfe 10%, #93c5fd 50%, #bfdbfe 90%, transparent 100%)",
            }}
          />

          <div className="flex flex-col gap-12">
            {timeline.map((item, i) => (
              <div
                key={i}
                className={`group relative flex flex-col gap-4 md:flex-row md:gap-0 ${
                  item.side === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content card */}
                <div className="w-full md:w-[calc(50%-2rem)]">
                  <div
                    className={`rounded-2xl border border-blue-100 bg-white p-7 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/20 ${
                      item.side === "right" ? "md:ml-8" : "md:mr-8"
                    }`}
                  >
                    {/* Year badge */}
                    <div
                      className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1"
                      style={{
                        background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
                        border: "1px solid #bfdbfe",
                      }}
                    >
                      <span
                        className="text-[10px] font-bold uppercase tracking-[0.25em]"
                        style={{
                          background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.year}
                      </span>
                    </div>

                    {/* Title */}
                    <h3
                      className="mb-3 text-lg font-semibold leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        background:
                          "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.title}
                    </h3>

                    {/* Body */}
                    <p
                      className="text-[13px] font-light leading-relaxed"
                      style={{
                        background:
                          "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.body}
                    </p>

                    {/* Hover bar */}
                    <div className="mt-5 flex items-center gap-2">
                      <div
                        className="h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-8"
                        style={{
                          background: "linear-gradient(90deg, #3b82f6, #0ea5e9)",
                        }}
                      />
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-200 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                    </div>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 top-8 hidden -translate-x-1/2 md:flex">
                  <div
                    className="h-4 w-4 rounded-full border-2 border-white"
                    style={{
                      background: "linear-gradient(135deg, #3b82f6, #0ea5e9)",
                      boxShadow: "0 0 0 4px #dbeafe",
                    }}
                  />
                </div>

                {/* Empty opposite side spacer */}
                <div className="hidden w-[calc(50%-2rem)] md:block" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}