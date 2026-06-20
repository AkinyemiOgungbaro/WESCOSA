"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  // State to manage the open/close behavior of the mobile menu panel
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#2E4049] sticky top-0 z-50" >
      <div className="mx-auto max-w-6xl h-[100px] flex items-center justify-between px-4 py-10 md:px-8 relative">
        {/* ================= LEFT ZONE: BRAND LOGO & TITLE ================= */}
        <Link href="/" className="flex items-center gap-3 group z-50">
          <div className="relative w-[250px] h-[82px] flex-shrink-0">
            <Image
              src="/wesley-logo-white.svg"
              alt="Wesley College Logo"
              fill
              className="object-contain"
            />
          </div>
         {/* <div className="flex flex-col text-[#1E2B38] leading-tight">
            <span className="text-[11px] font-black tracking-wider uppercase">
              Wesley College of Science
            </span>
            <span className="text-[11px] font-black tracking-wider uppercase">
              Old Students’ Association
            </span>
             <span className="text-[10px] font-bold text-slate-500 tracking-wide uppercase">
              Association
            </span>
          </div> */}
        </Link>

        {/* ================= CENTER ZONE: DESKTOP NAVIGATION LINKS ================= */}
        <nav
          aria-label="Main Site Navigation"
          className="hidden lg:flex items-center gap-8"
        >
          <Link
            href="/"
            className="text-[16px] font-semibold text-[#ffffff] hover:text-[#92CD00] transition-colors"
          >
            Home
          </Link>
          <button className="flex items-center justify-center gap-1 text-[16px] font-semibold text-[#ffffff] hover:text-[#92CD00] transition-colors group">
            My Alumni
            <span className="text-[10px] text-slate-400 group-hover:translate-y-0.5 transition-transform">
              <Image src="/arrow-down.svg" alt="Arrow down" width={10} height={10} />
            </span>
          </button>
          <button className="flex items-center gap-1 text-[16px] font-semibold text-[#ffffff] hover:text-[#92CD00] transition-colors group">
            Join us
            <span className="text-[10px] text-slate-400 group-hover:translate-y-0.5 transition-transform">
              <Image src="/arrow-down.svg" alt="Arrow down" width={10} height={10} />
            </span>
          </button>
          <Link
            href="/"
            className="text-[16px] font-semibold text-[#ffffff] hover:text-[#92CD00] transition-colors"
          >
            Annual Due
          </Link>
          <Link
            href="/contact"
            className="text-[16px] font-semibold text-[#ffffff] hover:text-[#92CD00] transition-colors"
          >
            Contact us
          </Link>
        </nav>

        {/* ================= RIGHT ZONE: DESKTOP ACTIONS & HAMBURGER ================= */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Hide these explicit buttons on small screens to let the hamburger rule */}
          {/* <Link
            href="/login"
            className="hidden sm:inline-block text-sm font-bold text-slate-600 hover:text-[#2C3E50] transition-colors"
          >
            Log in
          </Link> */}

          <Link
            href="/donate"
            className="hidden sm:inline-flex items-center justify-center rounded-full bg-[#92CD00] px-6 py-2.5 text-sm font-bold text-[#2E4049] transition-all hover:bg-[#1E2B38]"
          >
            Donate
          </Link>

          {/* THE HAMBURGER BUTTON (Visible only on screens below 'lg') */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close mobile menu" : "Open mobile menu"}
            aria-expanded={isMenuOpen}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-slate-50 border border-slate-100 transition-all gap-1.5 z-50"
          >
            {/* Animated SVG lines that shift to form an 'X' shape when active */}
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-600 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-600 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`h-0.5 w-5 rounded-full bg-slate-600 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>

        {/* ================= MOBILE EXPANDABLE DROPDOWN PANEL ================= */}
        <div
          className={`absolute top-20 left-0 right-0 bg-white border-b border-slate-200 shadow-xl lg:hidden transition-all duration-300 ease-in-out origin-top overflow-hidden z-40 ${
            isMenuOpen
              ? "opacity-100 max-h-[400px] py-6 px-6"
              : "opacity-0 max-h-0 pointer-events-none"
          }`}
        >
          <nav
            aria-label="Mobile Navigation Drawer"
            className="flex flex-col gap-4 font-semibold text-slate-700"
          >
            <Link
              href="/"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#92CD00] py-1 text-base border-b border-slate-50"
            >
              Home
            </Link>
            <Link
              href="/alumni"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#92CD00] py-1 text-base border-b border-slate-50"
            >
              My Alumni
            </Link>
            <Link
              href="/join"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#92CD00] py-1 text-base border-b border-slate-50"
            >
              Join Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-[#92CD00] py-1 text-base border-b border-slate-50"
            >
              Contact Us
            </Link>

            {/* Direct access actions grouped at the bottom of the drawer view for mobile convenience */}
            <div className="flex items-center gap-4 pt-4 mt-2">
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-full border border-slate-200 text-sm font-bold text-slate-700 bg-slate-50"
              >
                Log In
              </Link>
              <Link
                href="/donate"
                onClick={() => setIsMenuOpen(false)}
                className="flex-1 text-center py-2.5 rounded-full bg-[#2C3E50] text-sm font-bold text-white shadow-md"
              >
                Donate 💚
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
