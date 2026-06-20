'use client';
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-slate-100 mt-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8 py-12 space-y-10">
        
        {/* ================= UPPER ROW ================= */}
        <div className="flex flex-col md:flex-row items-center gap-20">
          
          {/* Brand Logo & Title Alignment */}
          <div className="flex items-center gap-3">
            <div className="relative  w-14.5 h-15 flex-shrink-0">
              <Image
                src="/wesley-logo.svg"
                alt="Wesley College Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col text-[#1E2B38] leading-tight">
              <span className="text-[10px] font-black tracking-wider uppercase">
                Wesley College of
              </span>
              <span className="text-[10px] font-black tracking-wider uppercase">
                Science Old Students
              </span>
              <span className="text-[9px] font-bold text-slate-400 tracking-wide uppercase">
                Association
              </span>
            </div>
          </div>

          {/* Footer Informational Navigation Links */}
          <nav aria-label="Footer Informational Links" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-slate-500">
            <Link href="/about" className="hover:text-[#2C3E50] transition-colors">About</Link>
            <Link href="/services" className="hover:text-[#2C3E50] transition-colors">Services</Link>
            <Link href="/join" className="hover:text-[#2C3E50] transition-colors">Join Us</Link>
            <Link href="/contact" className="hover:text-[#2C3E50] transition-colors">Contact</Link>
            <Link href="/help" className="hover:text-[#2C3E50] transition-colors">Help</Link>
            <Link href="/privacy" className="hover:text-[#2C3E50] transition-colors">Privacy</Link>
          </nav>

        </div>

        {/* Separator Divider Line */}
        {/* <div className="h-px w-full bg-slate-100" /> */}

        {/* ================= LOWER ROW ================= */}
        <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6 text-sm text-slate-400 font-medium">
          
          {/* Social Media SVG/Icon Row */}
          <div className="flex items-center gap-5 text-lg">
            <a href="#" aria-label="Twitter Profile" className="hover:text-slate-600 transition-colors">
              <Image src="/twitter.svg" alt="Twitter" width={18} height={18} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" aria-label="Facebook Page" className="hover:text-slate-600 transition-colors">
              <Image src="/facebook.svg" alt="Facebook" width={18} height={18} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" aria-label="YouTube Channel" className="hover:text-slate-600 transition-colors">
              <Image src="/youtube.svg" alt="YouTube" width={20} height={20} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" aria-label="Instagram Feed" className="hover:text-slate-600 transition-colors">
              <Image src="/instagram.svg" alt="Instagram" width={18} height={18} className="opacity-60 hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Copyright Notice */}
          <p>© Paddle Technology. All rights reserved.</p>

        </div>

      </div>
    </footer>
  );
}