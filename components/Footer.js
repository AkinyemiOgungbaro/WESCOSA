"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full max-w-6xl mx-auto bg-white border-t border-[#000000] mt-20">
      <div className="mx-auto px-4 md:px-8 py-12 space-y-10">
        {/* ================= UPPER ROW ================= */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-20">
          {/* Brand Logo & Title Alignment */}
          <div className="flex md:-ml-4 w-full md:w-auto">
            <div className="relative flex-shrink-0">
              <Image
                src="/wesley-colored-logo.svg"
                alt="Wesley College Logo"
                width={377}
                height={60}
                className="w-auto h-10 sm:h-12 md:h-14 object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Footer Informational Navigation Links */}
          <nav
            aria-label="Footer Informational Links"
            className="flex flex-wrap gap-x-6 sm:gap-x-8 gap-y-3 text-sm font-semibold text-slate-500 w-full md:w-auto"
          >
            <Link
              href="/about"
              className="hover:text-[#2C3E50] transition-colors"
            >
              About
            </Link>
            <Link
              href="/services"
              className="hover:text-[#2C3E50] transition-colors"
            >
              Services
            </Link>
            <Link
              href="/join"
              className="hover:text-[#2C3E50] transition-colors"
            >
              Join Us
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#2C3E50] transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/help"
              className="hover:text-[#2C3E50] transition-colors"
            >
              Help
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#2C3E50] transition-colors"
            >
              Privacy
            </Link>
          </nav>
        </div>

        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-slate-400 font-medium pt-4 border-t border-slate-50">
          {/* Social Media SVG/Icon Row */}
          {/* Loads first natively on mobile devices, snaps right on desktop via sm:order-last */}
          <div className="flex items-center gap-5 text-lg sm:order-last">
            <a
              href="#"
              aria-label="Twitter Profile"
              className="hover:text-slate-600 transition-colors"
            >
              <Image
                src="/twitter.svg"
                alt="Twitter"
                width={18}
                height={18}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#"
              aria-label="Facebook Page"
              className="hover:text-slate-600 transition-colors"
            >
              <Image
                src="/facebook.svg"
                alt="Facebook"
                width={18}
                height={18}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#"
              aria-label="YouTube Channel"
              className="hover:text-slate-600 transition-colors"
            >
              <Image
                src="/youtube.svg"
                alt="YouTube"
                width={20}
                height={20}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="#"
              aria-label="Instagram Feed"
              className="hover:text-slate-600 transition-colors"
            >
              <Image
                src="/instagram.svg"
                alt="Instagram"
                width={18}
                height={18}
                className="opacity-60 hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Unified Copyright Line */}
          {/* Renders underneath the icons on mobile viewports, stays on the left edge on desktop screens */}
          <p className="text-left mt-2 sm:mt-0">
            © Paddle Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
