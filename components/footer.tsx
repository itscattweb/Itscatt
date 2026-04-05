// components/layout/Footer.tsx
import Link from "next/link";
import Image from "next/image";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Students", href: "/students" },
  { label: "Gallery", href: "/gallery" },
  { label: "Donate", href: "/donate" },
  { label: "Contact", href: "/contact" },
];

const contacts = [
  { type: "phone", value: "0091 471 234 1498" },
  { type: "phone", value: "0091 4933 203785" },
  { type: "phone", value: "0091 94 47 57 68 11" },
  { type: "email", value: "itsscatindiatvm@gmail.com" },
  { type: "email", value: "josekarekatt@gmail.com" },
];

const bankDetails = [
  { label: "A/C Name", value: "The Kerala Fransalian Educational Society" },
  { label: "A/C No", value: "0503053000005734" },
  { label: "Bank", value: "South Indian Bank, Shasthamangalam" },
  { label: "IFSC", value: "SIBL0000503" },
];

function PhoneIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100">

      {/* ── Bible verse banner ── */}
      <div className="bg-blue-50 border-b border-blue-100 py-4 px-6 text-center">
        <p
          className="text-blue-700/70 text-sm italic"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          ✝ &nbsp;"Go and make disciples of all nations, baptizing them in the
          name of the Father, the Son and the Holy Spirit." — Matthew 28:19
        </p>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* ── Column 1: Logo & About ── */}
        <div>
          <Link href="/" className="flex items-center gap-3 mb-5 group">
            <div className="relative ">
              <Image
                src="/images/logo.jpg"
                alt="Nashaath Boutique"
                width={206}
                height={106}
                className="rounded-sm object-contain"
              />
            </div>
          </Link>

          <p
            className="text-slate-500 text-sm leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Institute of Talent Search for Social Change and Transformation of
            India. Empowering brilliant children from marginalized families
            since 2011.
          </p>

          {/* Social */}
          <div className="flex items-center gap-3 mb-6">
            <a
              href="https://facebook.com/ITSSCAT-India"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-50 hover:bg-blue-600 border border-blue-100 hover:border-blue-600 text-blue-600 hover:text-white w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300"
              aria-label="Facebook"
            >
              f
            </a>
          </div>

          {/* Reg */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-3.5">
            <p
              className="text-slate-400 text-xs"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Registered under
            </p>
            <p
              className="text-slate-700 text-xs font-semibold mt-0.5"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Kerala Fransalian Educational Charitable Society
            </p>
            <p
              className="text-blue-600 text-xs mt-0.5 font-semibold"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              Reg. No. K31/1973
            </p>
          </div>
        </div>

        {/* ── Column 2: Quick Links ── */}
        <div>
          <h4
            className="text-blue-950 font-bold text-base mb-6 pb-3 border-b border-slate-100 flex items-center gap-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="w-1 h-4 rounded-full bg-blue-600 inline-block" />
            Quick Links
          </h4>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-blue-700 text-sm transition-all duration-200 flex items-center gap-2.5 group"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                <svg
                  className="w-3 h-3 text-blue-300 group-hover:text-blue-600 transition-colors flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Column 3: Contact ── */}
        <div>
          <h4
            className="text-blue-950 font-bold text-base mb-6 pb-3 border-b border-slate-100 flex items-center gap-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="w-1 h-4 rounded-full bg-blue-600 inline-block" />
            Contact Us
          </h4>

          <div className="flex flex-col gap-2.5 mb-6">
            {contacts.map((contact, i) => (
              <div key={i} className="flex items-start gap-2.5">
                {contact.type === "phone" ? <PhoneIcon /> : <MailIcon />}
                <span
                  className="text-slate-500 text-sm"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {contact.value}
                </span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
              <p
                className="text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-1.5"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Trivandrum Center
              </p>
              <p
                className="text-slate-500 text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                De Sales Bhavan, H.No. E49, Karamana P.O, Trivandrum — 695002
              </p>
            </div>
            <div className="border border-slate-200 rounded-xl p-4 bg-slate-50/60">
              <p
                className="text-blue-700 text-[11px] font-bold uppercase tracking-wider mb-1.5"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                Malappuram Center
              </p>
              <p
                className="text-slate-500 text-xs leading-relaxed"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                De Sales Bhavan, Palachode P.O, Kolathoor, Malappuram
              </p>
            </div>
          </div>
        </div>

        {/* ── Column 4: Donate / Bank ── */}
        <div>
          <h4
            className="text-blue-950 font-bold text-base mb-6 pb-3 border-b border-slate-100 flex items-center gap-2"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            <span className="w-1 h-4 rounded-full bg-blue-600 inline-block" />
            Donate
          </h4>

          <p
            className="text-slate-500 text-sm leading-relaxed mb-5"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            Your donation directly transforms a child's life. Transfer directly
            to our bank account below.
          </p>

          <div className="border border-slate-200 rounded-xl overflow-hidden mb-5">
            {bankDetails.map((detail, i) => (
              <div
                key={i}
                className={`px-4 py-3 flex flex-col gap-0.5 ${i !== bankDetails.length - 1 ? "border-b border-slate-100" : ""} ${i % 2 === 0 ? "bg-white" : "bg-slate-50/70"}`}
              >
                <span
                  className="text-slate-400 text-[10.5px] uppercase tracking-wider font-semibold"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {detail.label}
                </span>
                <span
                  className="text-slate-700 text-xs font-semibold"
                  style={{ fontFamily: "var(--font-lato)" }}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          <Link
            href="/donate"
            className="w-full flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-full text-sm tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:shadow-blue-200"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Donate Now
          </Link>
        </div>
      </div>

      {/* ── Bottom Bar ── */}
      <div className="border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p
            className="text-slate-400 text-xs text-center md:text-left"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            © {new Date().getFullYear()} ITSSCAT-India · Kerala Fransalian
            Educational Charitable Society · All Rights Reserved
          </p>
          <p
            className="text-slate-400 text-xs italic"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            ✝ Made with faith & love for the children of India
          </p>
        </div>
        <div className="m-6 flex items-center justify-center gap-2">
          <span className="text-[10px] uppercase tracking-widest text-stone-300">Powered by</span>
          <Link href="https://kalkus.in" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
            <Image
              src="/images/kalkus.png"
              alt="Kalkus"
              width={80}
              height={20}
              className="object-contain"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
