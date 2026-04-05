"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled
          ? "bg-white shadow-[0_2px_24px_rgba(30,80,180,0.08)] border-b border-blue-100"
          : "bg-white border-b border-blue-50"
        }`}
    >

      {/* ── Top accent line ── */}

      {/* ── Main Nav ── */}
      <nav className="max-w-7xl mx-auto p-10 px-6 lg:px-10 flex items-center justify-between h-[70px]">

        {/* ── Logo ── */}
        <Link href="/" className="flex items-center gap-3.5 group flex-shrink-0">
          <div className="relative  ">
            <Image
              src="/images/logo.jpg"
              alt="Nashaath Boutique"
              width={106}
              height={106}
              className="rounded-sm object-contain"
            />
          </div>
          {/* <div className="leading-tight">
            <div
              className="text-blue-950 font-black text-[17px] tracking-tight leading-none"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              ITSSCAT
            </div>
            <div
              className="text-blue-500 text-[10px] tracking-[0.25em] uppercase leading-none mt-1 font-semibold"
              style={{ fontFamily: "var(--font-lato)" }}
            >
              India
            </div>
          </div> */}
        </Link>

        {/* ── Desktop Nav Links ── */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-[0.1em] rounded-lg transition-all duration-200
                ${pathname === link.href
                  ? "text-blue-700 bg-blue-50"
                  : "text-slate-500 hover:text-blue-900 hover:bg-blue-50/60"
                }`}
              style={{ fontFamily: "var(--font-lato)" }}
            >
              {link.label}
              {pathname === link.href && (
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500" />
              )}
            </Link>
          ))}
        </div>

        {/* ── Right Side ── */}
        <div className="flex items-center gap-3 flex-shrink-0">

          {/* Phone — xl only */}
          <a
            href="tel:+919447576811"
            className="hidden xl:flex items-center gap-2 text-slate-400 hover:text-blue-700 text-[13px] transition-colors duration-200 group"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <svg
              className="w-3.5 h-3.5 text-blue-400 group-hover:text-blue-600 transition-colors"
              fill="currentColor" viewBox="0 0 20 20"
            >
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+91 94475 76811</span>
          </a>

          <div className="hidden xl:block w-px h-5 bg-blue-100" />

          {/* Donate Button */}
          <Link
            href="/donate"
            className="hidden md:inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white font-bold px-5 py-2.5 rounded-full text-[13px] tracking-wide transition-all duration-200 shadow-sm hover:shadow-blue-200 hover:shadow-md"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>Donate</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 rounded-lg hover:bg-blue-50 transition-colors duration-200 gap-[5px]"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-[22px] h-[1.5px] bg-slate-600 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-slate-600 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-[22px] h-[1.5px] bg-slate-600 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </nav>

      {/* ── Mobile Menu ── */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? "max-h-[460px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="bg-white border-t border-blue-50 px-5 pt-3 pb-6 shadow-xl shadow-blue-900/5">

          <div className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-[12px] font-bold uppercase tracking-[0.1em] transition-all duration-200
                  ${pathname === link.href
                    ? "text-blue-700 bg-blue-50"
                    : "text-slate-500 hover:text-blue-900 hover:bg-blue-50/60"
                  }`}
                style={{ fontFamily: "var(--font-lato)" }}
              >
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${pathname === link.href ? "bg-blue-500" : "bg-slate-200"}`} />
                {link.label}
              </Link>
            ))}
          </div>

          <div className="w-full h-px bg-blue-50 mb-4" />

          <a
            href="tel:+919447576811"
            className="flex items-center gap-2.5 text-slate-400 text-[13px] mb-4 hover:text-blue-700 transition-colors"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>+91 94475 76811</span>
          </a>

          <Link
            href="/donate"
            onClick={() => setMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-bold px-6 py-3.5 rounded-full text-[13px] tracking-wide transition-all duration-200 w-full shadow-sm"
            style={{ fontFamily: "var(--font-lato)" }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>Donate Now</span>
          </Link>
        </div>
      </div>

    </header>
  );
}