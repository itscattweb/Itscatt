// app/contact/page.tsx  (or pages/contact.tsx)
"use client";

import { useState } from "react";

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};


function SectionLabel({ text }: { text: string }) {
  return (
    <div className="mb-6 flex items-center gap-3">
      <div
        className="h-px w-8"
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
        {text}
      </span>
    </div>
  );
}

function InfoCard({
  icon,
  label,
  lines,
}: {
  icon: React.ReactNode;
  label: string;
  lines: React.ReactNode[];
}) {
  return (
    <div
      className="rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100"
      style={{ background: "linear-gradient(135deg, #ffffff, #f0f7ff)" }}
    >
      <div
        className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
        style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe" }}
      >
        {icon}
      </div>
      <p
        className="mb-2 text-[10px] font-medium uppercase tracking-[0.25em]"
        style={{
          background: "linear-gradient(90deg, #2563eb, #0284c7)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {label}
      </p>
      <div className="space-y-0.5">
        {lines.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-slate-600">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function LocationCard({
  title,
  address,
  tag,
}: {
  title: string;
  address: string[];
  tag: string;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-blue-100 bg-white p-6 transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100">
      {/* Accent bar */}
      <div
        className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
        style={{ background: "linear-gradient(180deg, #3b82f6, #0ea5e9)" }}
      />
      <div className="pl-2">
        <span
          className="mb-3 inline-block rounded-full px-3 py-0.5 text-[9px] font-medium uppercase tracking-[0.2em]"
          style={{
            background: "linear-gradient(135deg, #eff6ff, #dbeafe)",
            border: "1px solid #bfdbfe",
            color: "#1d4ed8",
          }}
        >
          {tag}
        </span>
        <h4
          className="mb-3 text-base font-bold"
          style={{
            fontFamily: "'Playfair Display', serif",
            background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {title}
        </h4>
        {address.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-slate-500">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

// ── Inputs ─────────────────────────────────────────────────────────────────

const inputBase =
  "w-full rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm text-slate-700 placeholder-slate-400 outline-none transition-all duration-200 focus:border-blue-300 focus:ring-2 focus:ring-blue-100";

// ── Main Component ─────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Simulate async send
    setTimeout(() => setStatus("sent"), 1800);
  };

  return (
    <main className="min-h-screen bg-white">
      {/* ── Hero banner ── */}
      <section
        className="relative overflow-hidden px-10 py-24"
        style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0284c7 100%)" }}
      >
        {/* Decorative circles */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #93c5fd, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #38bdf8, transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px w-8" style={{ background: "rgba(147,197,253,0.6)" }} />
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-300">
              Get In Touch
            </span>
          </div>
          <h1
            className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Contact{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #93c5fd, #38bdf8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              ITSSCAT-India
            </span>
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-blue-200">
            Institute of Talent Search for Social Change and Transformation of India — reach out
            to support, collaborate, or learn more about our mission.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="px-10 py-20">
        <div className="mx-auto max-w-6xl">

          {/* ── Director card ── */}
          <div className="mb-16">
            <SectionLabel text="Project Director" />
            <div
              className="flex flex-col gap-6 overflow-hidden rounded-3xl border border-blue-100 p-8 md:flex-row md:items-start"
              style={{ background: "linear-gradient(135deg, #f0f7ff, #ffffff)" }}
            >
              {/* Avatar placeholder */}
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl text-3xl font-bold text-white"
                style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)" }}
              >
                JK
              </div>
              <div>
                <h3
                  className="mb-1 text-xl font-bold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    background: "linear-gradient(160deg, #0f172a 0%, #1d4ed8 70%, #0284c7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Fr. Dr. Jose Krekatt msfs
                </h3>
                <p
                  className="mb-4 text-[10px] font-medium uppercase tracking-[0.25em]"
                  style={{
                    background: "linear-gradient(90deg, #2563eb, #0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Founder &amp; Director, ITSSCAT-India
                </p>
                <p className="max-w-2xl text-sm leading-relaxed text-slate-500">
                  A priest with 24+ years of experience in social work, education and
                  administration — specialised in Youth Ministry with a doctorate from the
                  Salesian University, Rome. Founding visionary of ITSSCAT-India since 2011 and
                  honorary member of the International Association of Correctional and Forensic
                  Psychology, USA.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  {[
                    { label: "Email", value: "joevkar@yahoo.co.uk", href: "mailto:joevkar@yahoo.co.uk" },
                    { label: "Email", value: "itsscatindiatvm@gmail.com", href: "mailto:itsscatindiatvm@gmail.com" },
                    { label: "Email", value: "josekarekatt@gmail.com", href: "mailto:josekarekatt@gmail.com" },
                  ].map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="rounded-full border border-blue-100 bg-blue-50 px-4 py-1.5 text-[11px] font-medium text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-100"
                    >
                      {item.value}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Info cards row ── */}
          <div className="mb-16">
            <SectionLabel text="Contact Details" />
            <div className="grid gap-5 md:grid-cols-3">
              <InfoCard
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                }
                label="Phone"
                lines={[
                  "Office: +91 471 234 1498",
                  "Office: +91 4933 203785",
                  "Cell: +91 94 47 57 68 11",
                ]}
              />
              <InfoCard
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
                label="Email"
                lines={[
                  <a key="1" href="mailto:joevkar@yahoo.co.uk" className="hover:text-blue-600 transition-colors">joevkar@yahoo.co.uk</a>,
                  <a key="2" href="mailto:itsscatindiatvm@gmail.com" className="hover:text-blue-600 transition-colors">itsscatindiatvm@gmail.com</a>,
                  <a key="3" href="mailto:josekarekatt@gmail.com" className="hover:text-blue-600 transition-colors">josekarekatt@gmail.com</a>,
                ]}
              />
              <InfoCard
                icon={
                  <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                }
                label="Social"
                lines={[
                  <span key="fb">
                    <span className="font-medium text-slate-700">Facebook: </span>
                    ITSSCAT-India
                  </span>,
                  <span key="fb2">
                    <span className="font-medium text-slate-700">Facebook: </span>
                    Jose Karekatt
                  </span>,
                  <span key="reg" className="text-[11px] text-slate-400">Reg. No. K31/1973</span>,
                ]}
              />
            </div>
          </div>

          {/* ── Locations ── */}
          <div className="mb-16">
            <SectionLabel text="Our Institutes" />
            <div className="grid gap-5 md:grid-cols-2">
              <LocationCard
                tag="Main Campus"
                title="De Sales Bhavan — Trivandrum"
                address={[
                  "H. No. E 49, Shaasthrinagar East",
                  "Karamana P.O, Trivandrum – 695002",
                  "Kerala, India",
                ]}
              />
              <LocationCard
                tag="Second Campus"
                title="De Sales Bhavan — Perinthalmanna"
                address={[
                  "Palachode P.O, Kolathoor",
                  "Malappuram, Kerala",
                  "India",
                ]}
              />
            </div>
          </div>

          {/* ── Donation / Bank details ── */}
          <div className="mb-16">
            <SectionLabel text="Support the Project" />
            <div
              className="rounded-3xl border border-blue-100 p-8"
              style={{ background: "linear-gradient(135deg, #f0f7ff, #e0f2fe)" }}
            >
              <h3
                className="mb-1 text-lg font-bold"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  background: "linear-gradient(160deg, #0f172a, #1d4ed8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                FC Account Details
              </h3>
              <p className="mb-6 text-xs text-slate-500">
                Contributions can be sent directly to the registered society account.
              </p>
              <div className="grid gap-4 text-sm sm:grid-cols-2">
                {[
                  { label: "Account Title", value: "The Kerala Fransalian Educational Society" },
                  { label: "Account Number", value: "0503053000005734" },
                  { label: "Bank", value: "The South Indian Bank, Shasthamangalam, Thiruvananthapuram" },
                  { label: "IFSC Code", value: "SIBL0000503" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-blue-100 bg-white px-5 py-4"
                  >
                    <p
                      className="mb-1 text-[10px] font-medium uppercase tracking-[0.2em]"
                      style={{
                        background: "linear-gradient(90deg, #2563eb, #0284c7)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {item.label}
                    </p>
                    <p className="font-medium text-slate-700">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Contact form + map grid ── */}
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form — 3 cols */}
            <div className="lg:col-span-3">
              <SectionLabel text="Send a Message" />
              <div
                className="rounded-3xl border border-blue-100 p-8"
                style={{ background: "linear-gradient(135deg, #ffffff, #f0f7ff)" }}
              >
                {status === "sent" ? (
                  <div className="flex flex-col items-center gap-4 py-16 text-center">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe" }}
                    >
                      <svg className="h-7 w-7" fill="none" stroke="#1d4ed8" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h4
                      className="text-xl font-bold"
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        background: "linear-gradient(160deg, #0f172a, #1d4ed8)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Message Sent!
                    </h4>
                    <p className="text-sm text-slate-500">
                      Thank you for reaching out. We will get back to you soon.
                    </p>
                    <button
                      onClick={() => { setStatus("idle"); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }}
                      className="mt-2 rounded-full border border-blue-200 bg-blue-50 px-6 py-2 text-xs font-medium text-blue-700 transition-all hover:border-blue-400"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                          Full Name
                        </label>
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Your name"
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                          Email Address
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className={inputBase}
                        />
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                          Phone (optional)
                        </label>
                        <input
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 ..."
                          className={inputBase}
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                          Subject
                        </label>
                        <select
                          name="subject"
                          value={form.subject}
                          onChange={handleChange}
                          required
                          className={inputBase}
                        >
                          <option value="">Select a subject</option>
                          <option value="donation">Donation / Sponsorship</option>
                          <option value="admission">Student Admission</option>
                          <option value="volunteer">Volunteering</option>
                          <option value="partnership">Partnership / Collaboration</option>
                          <option value="media">Media / Press</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="mb-1.5 block text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="How can we help you?"
                        className={`${inputBase} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "sending"}
                      className="group relative w-full overflow-hidden rounded-xl py-3 text-sm font-semibold text-white transition-all duration-300"
                      style={{ background: "linear-gradient(135deg, #1d4ed8, #0284c7)" }}
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {status === "sending" ? (
                          <>
                            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                            </svg>
                            Sending…
                          </>
                        ) : (
                          <>
                            Send Message
                            <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                          </>
                        )}
                      </span>
                      {/* shimmer */}
                      <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-full skew-x-12" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Quick-links sidebar — 2 cols */}
            <div className="lg:col-span-2">
              <SectionLabel text="Quick Info" />
              <div className="space-y-5">
                {[
                  {
                    title: "Working Hours",
                    body: "Mon – Sat: 9:00 AM – 6:00 PM\nSunday: Closed",
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Sponsorship",
                    body: "₹1,04,500 per student per annum.\nYearly requirement: ₹25–30 lakhs.",
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                  },
                  {
                    title: "Registered Society",
                    body: "The Kerala Fransalian Educational Charitable Society\nReg. No. K31/1973",
                    icon: (
                      <svg className="h-5 w-5" fill="none" stroke="#1d4ed8" strokeWidth="1.8" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-2xl border border-blue-100 bg-white p-5 transition-all hover:border-blue-300 hover:shadow-md hover:shadow-blue-100"
                  >
                    <div
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                      style={{ background: "linear-gradient(135deg, #eff6ff, #dbeafe)", border: "1px solid #bfdbfe" }}
                    >
                      {item.icon}
                    </div>
                    <div>
                      <p
                        className="mb-1 text-xs font-semibold"
                        style={{
                          background: "linear-gradient(90deg, #0f172a, #1d4ed8)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {item.title}
                      </p>
                      {item.body.split("\n").map((line, i) => (
                        <p key={i} className="text-xs leading-relaxed text-slate-500">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}