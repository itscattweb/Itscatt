// components/home/OurCenters.tsx
import Image from "next/image";
import Link from "next/link";

const centers = [
  {
    id: 1,
    name: "Trivandrum Center",
    subtitle: "De Sales Bhavan — Headquarters",
    address: "H.No. E49, Shaasthrinagar East, Karamana P.O, Trivandrum — 695002, Kerala",
    students: "14",
    since: "2011",
    type: "Headquarters",
    features: [
      "Residential Facility",
      "Study Halls",
      "Peaceful Environment",
      "Chapel & Prayer Room",
      "Dining Hall",
      "Learning Resources",
    ],
    phone: "0091 471 234 1498",
    image: "/images/hero.jpg",
    mapUrl: "https://maps.google.com/?q=Karamana,Trivandrum,Kerala",
    initials: "TVM",
  },
  {
    id: 2,
    name: "Malappuram Center",
    subtitle: "De Sales Bhavan — North Kerala",
    address: "Palachode P.O, Kolathoor, Perinthalmanna, Malappuram, Kerala",
    students: "6",
    since: "2013",
    type: "Branch Center",
    features: [
      "Residential Facility",
      "2 Acres of Land",
      "Study Halls",
      "Prayer & Meditation",
      "Dining Hall",
      "Nature Environment",
    ],
    phone: "0091 4933 203785",
    image: "/images/hero.jpg",
    mapUrl: "https://maps.google.com/?q=Kolathoor,Perinthalmanna,Malappuram,Kerala",
    initials: "MPM",
  },
];

export default function OurCenters() {
  return (
    <section className="relative py-24 px-6 bg-white overflow-hidden">

      {/* ── Blue fade top ── */}

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-10 h-px bg-blue-200" />
            <span className="font-[family-name:var(--font-lato)] text-blue-400 text-xs uppercase tracking-[0.3em]">
              Our Locations
            </span>
            <div className="w-10 h-px bg-blue-200" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400"> Centers</span>
          </h2>

          <p className="font-[family-name:var(--font-lato)] text-slate-400 text-base max-w-xl mx-auto leading-relaxed">
            Two homes of hope — where brilliant children from across Kerala find shelter, education and a future.
          </p>
        </div>

        {/* ── Centers Grid ── */}
        <div className="grid md:grid-cols-2 gap-8">
          {centers.map((center) => (
            <div
              key={center.id}
              className="group relative bg-white border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-50 rounded-2xl overflow-hidden transition-all duration-300"
            >

              {/* ── Image area ── */}
              <div className="relative w-full h-52 overflow-hidden bg-blue-50">
                <Image
                  src={center.image}
                  alt={center.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Fallback
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50">
                  <div className="text-blue-200 text-6xl font-[family-name:var(--font-playfair)] font-black">
                    {center.initials}
                  </div>
                  <div className="text-blue-300 text-xs font-[family-name:var(--font-lato)] uppercase tracking-widest mt-2">
                    Photo Coming Soon
                  </div>
                </div> */}

                {/* Type badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-700 text-white text-xs font-bold px-3 py-1.5 rounded-full font-[family-name:var(--font-lato)] uppercase tracking-wide shadow-lg">
                    {center.type}
                  </span>
                </div>

                {/* Since badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-700 text-xs px-3 py-1.5 rounded-full font-[family-name:var(--font-lato)] font-semibold">
                    Est. {center.since}
                  </span>
                </div>

                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
              </div>

              {/* ── Content ── */}
              <div className="p-7">

                {/* Name */}
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-black text-slate-900 mb-1">
                  {center.name}
                </h3>
                <p className="font-[family-name:var(--font-lato)] text-blue-500 text-xs uppercase tracking-wider mb-4">
                  {center.subtitle}
                </p>

                <div className="w-10 h-px bg-blue-100 mb-4" />

                {/* Stats row */}
                <div className="flex items-center gap-6 mb-5">
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-blue-400">
                      {center.students}
                    </div>
                    <div className="font-[family-name:var(--font-lato)] text-slate-400 text-xs uppercase tracking-wide">
                      Students
                    </div>
                  </div>
                  <div className="w-px h-10 bg-slate-100" />
                  <div className="text-center">
                    <div className="font-[family-name:var(--font-playfair)] text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-blue-400">
                      {center.since}
                    </div>
                    <div className="font-[family-name:var(--font-lato)] text-slate-400 text-xs uppercase tracking-wide">
                      Founded
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-2 mb-3">
                  <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="font-[family-name:var(--font-lato)] text-slate-400 text-sm leading-relaxed">
                    {center.address}
                  </p>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 mb-5">
                  <svg className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="font-[family-name:var(--font-lato)] text-slate-400 text-sm">
                    {center.phone}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {center.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1 h-1 rounded-full bg-blue-300 flex-shrink-0" />
                      <span className="font-[family-name:var(--font-lato)] text-slate-400 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="w-full h-px bg-slate-100 mb-5" />

                {/* Buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={center.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center border border-blue-200 hover:border-blue-400 text-blue-600 hover:bg-blue-50 text-sm font-bold py-3 rounded-full transition-all duration-300 font-[family-name:var(--font-lato)]"
                  >
                    View on Map
                  </a>
                  <Link
                    href="/contact"
                    className="flex-1 text-center bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-3 rounded-full transition-all duration-300 font-[family-name:var(--font-lato)] shadow-md shadow-blue-100"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}