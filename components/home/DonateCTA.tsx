// components/home/DonateCTA.tsx
import Link from "next/link";

const impactItems = [
  {
    amount: "₹500",
    label: "Books & Stationery",
    description: "Provides study materials for a week",
  },
  {
    amount: "₹2,000",
    label: "Food & Nutrition",
    description: "Feeds a child for a full month",
  },
  {
    amount: "₹10,000",
    label: "Full Monthly Support",
    description: "Covers all needs for one month",
  },
  {
    amount: "₹1,04,500",
    label: "Full Year Sponsorship",
    description: "Transforms one child's entire year",
  },
];

const bankDetails = [
  { label: "Account Name", value: "The Kerala Fransalian Educational Society" },
  { label: "Account Number", value: "0503053000005734" },
  { label: "Bank", value: "South Indian Bank, Shasthamangalam, Trivandrum" },
  { label: "IFSC Code", value: "SIBL0000503" },
];

export default function DonateCTA() {
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
              Support The Mission
            </span>
            <div className="w-10 h-px bg-blue-200" />
          </div>

          <h2 className="font-[family-name:var(--font-playfair)] text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
            Be The Reason
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-400">
              A Child Succeeds
            </span>
          </h2>

          <p className="font-[family-name:var(--font-lato)] text-slate-400 text-base max-w-2xl mx-auto leading-relaxed">
            Your contribution directly funds a brilliant child's education, shelter and future. Every rupee makes a real difference.
          </p>
        </div>

        {/* ── Impact Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {impactItems.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white border border-slate-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50 rounded-2xl p-6 text-center transition-all duration-300 cursor-pointer"
            >
              {/* Amount */}
              <div className="font-[family-name:var(--font-playfair)] text-2xl font-black text-transparent bg-clip-text bg-gradient-to-b from-blue-700 to-blue-400 mb-1">
                {item.amount}
              </div>

              {/* Label */}
              <div className="font-[family-name:var(--font-lato)] text-slate-700 text-sm font-bold mb-1">
                {item.label}
              </div>

              {/* Description */}
              <div className="font-[family-name:var(--font-lato)] text-slate-400 text-xs leading-relaxed">
                {item.description}
              </div>

              {/* Bottom hover line */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-b-2xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </div>
          ))}
        </div>

        {/* ── Main CTA Banner ── */}
        <div className="relative bg-blue-950 rounded-3xl overflow-hidden mb-12">

          {/* Subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-800/30 via-transparent to-blue-900/20" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />

          <div className="relative z-10 grid md:grid-cols-2 gap-10 p-10 md:p-14 items-center">

            {/* Left: Message */}
            <div>
              <h3 className="font-[family-name:var(--font-playfair)] text-3xl md:text-4xl font-black text-white leading-tight mb-4">
                ₹1,04,500 gives one child
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-sky-300"> a full year</span> of
                education & care
              </h3>

              <p className="font-[family-name:var(--font-lato)] text-white/55 text-sm leading-relaxed mb-8">
                We need ₹25–30 lakhs annually to run both our centers. Your
                donation — big or small — makes a real difference in the life
                of a brilliant child who deserves a chance.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/donate"
                  className="group bg-blue-500 hover:bg-blue-400 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 shadow-xl shadow-blue-900/50 font-[family-name:var(--font-lato)] flex items-center justify-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <span>Donate Now</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white/20 hover:border-blue-400/60 text-white/70 hover:text-white px-8 py-4 rounded-full text-base transition-all duration-300 font-[family-name:var(--font-lato)] text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Right: Bank Details */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-7">
              <h4 className="font-[family-name:var(--font-playfair)] text-white font-bold text-lg mb-5">
                Bank Transfer Details
              </h4>

              <div className="space-y-4">
                {bankDetails.map((detail, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <div className="font-[family-name:var(--font-lato)] text-white/35 text-xs uppercase tracking-wider mb-1">
                      {detail.label}
                    </div>
                    <div className="font-[family-name:var(--font-lato)] text-white text-sm font-semibold">
                      {detail.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Note */}
              <div className="mt-5 bg-blue-500/10 border border-blue-400/20 rounded-xl px-4 py-3">
                <p className="font-[family-name:var(--font-lato)] text-blue-300 text-xs leading-relaxed">
                  After donating please visit our{" "}
                  <Link href="/donate" className="underline font-bold text-blue-200">
                    Donate page
                  </Link>{" "}
                  to record your contribution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}