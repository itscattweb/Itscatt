

const phases = [
  {
    number: "01",
    phase: "Phase One",
    years: "2011 — 2016",
    title: "The Experimental Stage",
    status: "Completed",
    body:
      "Successfully launched with 6 students in a rented house. Gradually built a reputation for academic excellence and integral formation. All students passed final exams with 90%+ marks. Two students selected for a US Government sponsored study exchange program.",
  },
  {
    number: "02",
    phase: "Phase Two",
    years: "2016 — 2021",
    title: "Infrastructure & Deepening",
    status: "In Progress",
    body:
      "Concentration on realizing the required infrastructure at both Trivandrum and Perinthalmanna institutes. Further deepening of educational, formation and training programs with a goal to grow to 50 residential students simultaneously.",
  },
  {
    number: "03",
    phase: "Phase Three",
    years: "2021 — 2026",
    title: "World-Class Institution",
    status: "Upcoming",
    body:
      "Develop both institutes into world-class residential centres — well-furnished, fully equipped — strengthening students' self-esteem, creative minds and forming impressive physical, spiritual, social and emotional personalities ready to lead.",
  },
];

const visions = [
  {
    title: "50 Students at a Time",
    body: "Expand capacity to support a minimum of 50 residential students across both institutes simultaneously every year.",
  },
  {
    title: "Self-Sustaining Model",
    body:
      "Alumni in administrative and professional positions contribute a fixed percentage of their monthly income, making the project self-sustaining beyond 15 years.",
  },
  {
    title: "Catalysts of Change",
    body:
      "Every graduate enters civil services, public administration or high-profile professions — becoming leaven in society for lasting transformation.",
  },
  {
    title: "Beneficiaries Become Benefactors",
    body:
      "Students who received formation today are envisioned to become the donors, supporters and ambassadors of ITSSCAT-India tomorrow.",
  },
];

export default function AboutFuture() {
  return (
    <section className="relative overflow-hidden bg-white px-10 pb-24 pt-20">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[130px] font-bold leading-none tracking-tighter"
        style={{ fontFamily: "'Playfair Display', serif", color: "#f0f6ff", whiteSpace: "nowrap" }}
      >
        FUTURE
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">

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
            The Road Ahead
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mb-4 text-5xl font-bold leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 45%, #0ea5e9 80%, #7dd3fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Our Vision for <br />
          <em>The Future</em>
        </h2>

        {/* Subheading */}
        <p
          className="mb-16 max-w-xl text-sm font-light leading-loose"
          style={{
            background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          A 15-year roadmap to transform marginalized children into world-class
          leaders, scientists and administrators — and build a self-sustaining
          engine of social change.
        </p>

        {/* ── 15-Year Timeline ── */}
        <div className="mb-16 grid grid-cols-1 gap-0 md:grid-cols-3">
          {phases.map((phase, i) => (
            <div
              key={i}
              className="group relative border border-blue-100 bg-white p-8 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/20"
              style={{
                borderRadius:
                  i === 0
                    ? "20px 0 0 20px"
                    : i === phases.length - 1
                    ? "0 20px 20px 0"
                    : "0",
                borderRight: i !== phases.length - 1 ? "none" : undefined,
              }}
            >
              {/* Big number */}
              <div
                className="mb-4 text-[64px] font-bold leading-none tracking-tight"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {phase.number}
              </div>

              {/* Status pill */}
              <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border px-3 py-1"
                style={{
                  borderColor:
                    phase.status === "Completed"
                      ? "#86efac"
                      : phase.status === "In Progress"
                      ? "#93c5fd"
                      : "#e9d5ff",
                  background:
                    phase.status === "Completed"
                      ? "#f0fdf4"
                      : phase.status === "In Progress"
                      ? "#eff6ff"
                      : "#faf5ff",
                }}
              >
                <div
                  className="h-1.5 w-1.5 rounded-full"
                  style={{
                    background:
                      phase.status === "Completed"
                        ? "#22c55e"
                        : phase.status === "In Progress"
                        ? "#3b82f6"
                        : "#a855f7",
                  }}
                />
                <span
                  className="text-[9px] font-semibold uppercase tracking-[0.2em]"
                  style={{
                    color:
                      phase.status === "Completed"
                        ? "#15803d"
                        : phase.status === "In Progress"
                        ? "#1d4ed8"
                        : "#7e22ce",
                  }}
                >
                  {phase.status}
                </span>
              </div>

              {/* Phase label */}
              <div className="mb-1 flex items-center gap-2">
                <div
                  className="h-[1.5px] w-4 rounded-full"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
                />
                <span
                  className="text-[9px] font-medium uppercase tracking-[0.3em]"
                  style={{
                    background: "linear-gradient(90deg, #2563eb, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {phase.phase} · {phase.years}
                </span>
              </div>

              {/* Title */}
              <h3
                className="mb-4 text-xl font-semibold leading-snug"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {phase.title}
              </h3>

              {/* Body */}
              <p
                className="text-[13px] font-light leading-relaxed"
                style={{
                  background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {phase.body}
              </p>

              {/* Hover bar */}
              <div className="mt-6 flex items-center gap-2">
                <div
                  className="h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-8"
                  style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
                />
                <div className="h-1.5 w-1.5 rounded-full bg-blue-200 opacity-0 transition-all duration-500 group-hover:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* ── Vision Pillars ── */}
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5"
        >
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
            What We Envision
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {visions.map((v, i) => (
            <div
              key={i}
              className="group flex gap-5 rounded-2xl border border-blue-100 bg-white p-7 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/20"
            >
              {/* Index */}
              <div
                className="shrink-0 text-[40px] font-bold leading-none"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>

              <div>
                {/* Title */}
                <h4
                  className="mb-2 text-base font-semibold leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {v.title}
                </h4>
                {/* Body */}
                <p
                  className="text-[13px] font-light leading-relaxed"
                  style={{
                    background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {v.body}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}