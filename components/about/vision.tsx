// components/about/AboutVisionMission.tsx

export default function AboutVisionMission() {
  return (
    <section className="relative overflow-hidden bg-white px-10 pb-16 pt-20 font-sans">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[180px] font-bold leading-none tracking-tighter"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "#f0f6ff",
          whiteSpace: "nowrap",
        }}
      >
        VM
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
            Our Purpose
          </span>
        </div>

        {/* Headline */}
        <h2
          className="mb-16 text-5xl font-bold leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(160deg, #1e3a5f 0%, #1d4ed8 45%, #0ea5e9 80%, #7dd3fc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Vision &amp; <br />
          <em>Mission</em>
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2">

          {/* Vision */}
          <div
            className="relative border border-blue-100 bg-white p-10"
            style={{ borderRadius: "20px 0 0 20px", borderRight: "none" }}
          >
            {/* Number */}
            <div
              className="mb-5 text-[72px] font-bold leading-none tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              01
            </div>

            {/* Tag */}
            <div className="mb-4 flex items-center gap-2">
              <div
                className="h-[1.5px] w-5"
                style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
              />
              <span
                className="text-[10px] font-medium uppercase tracking-[0.3em]"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Vision
              </span>
            </div>

            {/* Title */}
            <h3
              className="mb-4 text-2xl font-normal leading-snug"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 60%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              A Transformed World
            </h3>

            {/* Body */}
            <p
              className="text-sm font-light leading-loose"
              style={{
                background: "linear-gradient(180deg, #374151 0%, #3b82f6 120%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Transformation of the society, nation and the world through transforming
              the lives of highly intelligent and talented children from broken and
              economically marginalized families.
            </p>

            {/* Footer */}
            <div className="mt-8 flex items-center gap-2">
              <div
                className="h-0.5 w-8 rounded-full"
                style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
              />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-200" />
            </div>
          </div>

          {/* Mission */}
          <div
            className="relative border border-blue-100 bg-blue-50/30 p-10"
            style={{ borderRadius: "0 20px 20px 0" }}
          >
            {/* Number */}
            <div
              className="mb-5 text-[72px] font-bold leading-none tracking-tight"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(180deg, #dbeafe 0%, #bfdbfe 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              02
            </div>

            {/* Tag */}
            <div className="mb-4 flex items-center gap-2">
              <div
                className="h-[1.5px] w-5"
                style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
              />
              <span
                className="text-[10px] font-medium uppercase tracking-[0.3em]"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Mission
              </span>
            </div>

            {/* Title */}
            <h3
              className="mb-4 text-2xl font-normal leading-snug"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 60%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Education as Catalyst
            </h3>

            {/* Body */}
            <p
              className="text-sm font-light leading-loose"
              style={{
                background: "linear-gradient(180deg, #374151 0%, #3b82f6 120%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Impart true education to intelligent and talented children who have the
              desire and calibre to study but have no means — preparing them to enter
              administrative services and high-profile professions as catalysts of change.
            </p>

            {/* Footer */}
            <div className="mt-8 flex items-center gap-2">
              <div
                className="h-0.5 w-8 rounded-full"
                style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
              />
              <div className="h-1.5 w-1.5 rounded-full bg-blue-200" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}