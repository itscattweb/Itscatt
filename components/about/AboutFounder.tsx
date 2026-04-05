// components/about/AboutTeam.tsx
import Image from "next/image";

const founder = {
  name: "Fr. Dr. Jose Karekatt msfs",
  role: "Founder & Director",
  photo: "/team/fr-jose-karekatt.jpg",
  initials: "JK",
  bio: "Mastermind, founder and director of ITSSCAT-India. A priest of 24+ years with a Doctorate from the Salesian University, Rome, specialising in Youth Ministry and Criminal Justice. Served as State Director of Ministry to the Imprisoned under KCBC for 6 years, and spent the majority of his priestly life in education, social work and rehabilitation of youth.",
  highlights: [
    "Doctorate — Salesian University, Rome",
    "Honorary Member — International Association of Correctional & Forensic Psychology, USA",
    "3 Meritorious Service Awards",
    "Founded ITSSCAT-India, 23rd May 2011",
  ],
};

const team = [
  {
    name: "MSFS Congregation",
    role: "Governing Body",
    initials: "MS",
    photo: "/team/msfs.jpg",
    bio: "The Missionaries of St. Francis de Sales, South West India Province, under whose educational program ITSSCAT-India operates as part of The Kerala Fransalian Educational Charitable Society.",
  },
  {
    name: "Trivandrum Institute",
    role: "De Sales Bhavan, Karamana",
    initials: "TI",
    photo: "/team/trivandrum.jpg",
    bio: "The first and flagship institute located at Shaasthrinagar East, Karamana P.O, Trivandrum — 695002. Home to 14 residential students undergoing holistic education and formation.",
  },
  {
    name: "Perinthalmanna Institute",
    role: "De Sales Bhavan, Kolathoor",
    initials: "PI",
    photo: "/team/perinthalmanna.jpg",
    bio: "The second institute in Malappuram district, northern Kerala. Situated on 2 acres of donated land at Palachode P.O, Kolathoor — serving 6 residential students.",
  },
];

export default function AboutTeam() {
  return (
    <section className="relative overflow-hidden bg-white px-10 pb-20 pt-20">

      {/* Watermark */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[140px] font-bold leading-none tracking-tighter"
        style={{ fontFamily: "'Playfair Display', serif", color: "#f0f6ff", whiteSpace: "nowrap" }}
      >
        TEAM
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
            The People Behind It
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
          Meet Our <br />
          <em>Leadership</em>
        </h2>

        {/* ── Founder Card (Full Width) ── */}
        <div
          className="group mb-10 grid grid-cols-1 overflow-hidden border border-blue-100 bg-white transition-all duration-300 hover:border-blue-300 md:grid-cols-[320px_1fr]"
          style={{ borderRadius: "24px" }}
        >
          {/* Photo */}
          <div className="relative h-72 overflow-hidden md:h-auto">
            <Image
              src={founder.photo}
              alt={founder.name}
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            {/* Fallback initials shown if no photo */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
            >
              <span
                className="text-6xl font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {founder.initials}
              </span>
            </div>
            {/* Fade right into content */}
            <div
              className="absolute inset-y-0 right-0 w-16 hidden md:block"
              style={{ background: "linear-gradient(to right, transparent, #ffffff)" }}
            />
            {/* Founder badge */}
            <div
              className="absolute left-4 top-4 flex items-center gap-2 rounded-full px-3 py-1"
              style={{
                background: "rgba(255,255,255,0.88)",
                backdropFilter: "blur(8px)",
                border: "1px solid #bfdbfe",
              }}
            >
              <div
                className="h-1.5 w-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #3b82f6, #0ea5e9)" }}
              />
              <span
                className="text-[10px] font-semibold uppercase tracking-[0.25em]"
                style={{
                  background: "linear-gradient(90deg, #1d4ed8, #0284c7)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Founder
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-10">

            {/* Name */}
            <h3
              className="mb-1 text-3xl font-bold leading-snug"
              style={{
                fontFamily: "'Playfair Display', serif",
                background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 60%, #0284c7 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {founder.name}
            </h3>

            {/* Role */}
            <div className="mb-5 flex items-center gap-2">
              <div
                className="h-[1.5px] w-5 rounded-full"
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
                {founder.role}
              </span>
            </div>

            {/* Bio */}
            <p
              className="mb-6 text-sm font-light leading-relaxed"
              style={{
                background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {founder.bio}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {founder.highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div
                    className="mt-1.5 h-1 w-1 shrink-0 rounded-full"
                    style={{ background: "linear-gradient(135deg, #3b82f6, #0ea5e9)" }}
                  />
                  <span
                    className="text-[12px] font-light leading-snug"
                    style={{
                      background: "linear-gradient(90deg, #1e40af, #0284c7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact */}
            <div className="mt-6 flex flex-wrap gap-4 border-t border-blue-50 pt-6">
              
                <a href="mailto:joevkar@yahoo.co.uk"
                className="text-[11px] font-light"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                joevkar@yahoo.co.uk
              </a>
              
                <a href="mailto:itsscatindiatvm@gmail.com"
                className="text-[11px] font-light"
                style={{
                  background: "linear-gradient(90deg, #2563eb, #0ea5e9)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                itsscatindiatvm@gmail.com
              </a>
              <span
                className="text-[11px] font-light"
                style={{
                  background: "linear-gradient(90deg, #374151, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                +91 94 47 57 68 11
              </span>
            </div>

          </div>
        </div>

        {/* ── Supporting Cards ── */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {team.map((member, i) => (
            <div
              key={i}
              className="group relative overflow-hidden border border-blue-100 bg-white transition-all duration-300 hover:border-blue-300"
              style={{ borderRadius: "20px" }}
            >
              {/* Photo */}
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Fallback */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, #dbeafe, #eff6ff)" }}
                >
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(135deg, #1d4ed8, #0284c7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {member.initials}
                  </span>
                </div>
                {/* Fade bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-16"
                  style={{ background: "linear-gradient(to top, #ffffff, transparent)" }}
                />
                {/* Number */}
                <div
                  className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.88)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid #bfdbfe",
                  }}
                >
                  <span
                    className="text-[10px] font-bold"
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      background: "linear-gradient(135deg, #1d4ed8, #0ea5e9)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="mb-1 text-base font-semibold leading-snug"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {member.name}
                </h3>
                <div className="mb-3 flex items-center gap-2">
                  <div
                    className="h-[1.5px] w-3 rounded-full"
                    style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
                  />
                  <span
                    className="text-[9px] font-medium uppercase tracking-[0.25em]"
                    style={{
                      background: "linear-gradient(90deg, #2563eb, #0284c7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {member.role}
                  </span>
                </div>
                <p
                  className="text-[12px] font-light leading-relaxed"
                  style={{
                    background: "linear-gradient(180deg, #374151 0%, #3b82f6 160%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {member.bio}
                </p>
                <div className="mt-5 flex items-center gap-2">
                  <div
                    className="h-0.5 w-0 rounded-full transition-all duration-500 group-hover:w-6"
                    style={{ background: "linear-gradient(90deg, #3b82f6, #0ea5e9)" }}
                  />
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-200 opacity-0 transition-all duration-500 group-hover:opacity-100" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}