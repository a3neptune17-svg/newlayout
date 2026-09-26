"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp } from "lucide-react"

const SOCIAL_CHANNELS = [
  { label: "INSTAGRAM", href: "#" },
  { label: "WHATSAPP", href: "https://wa.me/919876543210" },
  { label: "FACEBOOK", href: "#" },
  { label: "YOUTUBE", href: "#" },
]

const FOOTER_NAV = [
  { label: "HOME", href: "#top" },
  { label: "OUR SERVICES", href: "#services" },
  { label: "SHOP", href: "#shop" },
  { label: "WARRANTY HUB", href: "#warranty" },
  { label: "FRANCHISE", href: "#franchise" },
  { label: "BLOG", href: "#blog" },
  { label: "CONTACT", href: "#contact" },
]

export function OhioFooter() {
  return (
    <footer className="relative bg-[#0A0B09] text-white border-t border-white/10 overflow-hidden font-sans selection:bg-[#E5FCA0] selection:text-black">
      
      {/* Top Banner */}
      <div className="px-8 lg:px-12 py-8 border-b border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-white p-2">
            <Image src="/logo.png" alt="Mr. Detailer Studio" width={130} height={36} className="h-7 w-auto object-contain" />
          </div>
          <span className="text-[10px] font-mono text-white/50">
            OHIO STUDIO
          </span>
        </div>

        <Link
          href="#contact"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5FCA0] px-8 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
        >
          <span>BOOK AN APPOINTMENT</span>
        </Link>
      </div>

      {/* Main Quiet Footer Links Columns */}
      <div className="relative px-8 lg:px-12 py-12 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Col 1: Contact */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
              CONTACT
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-mono">
              <li><a href="mailto:hello@mrdetailer.in" className="hover:text-white">hello@mrdetailer.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-white font-bold text-white">+91 98765 43210</a></li>
              <li className="pt-2 text-[11px] text-white/40">Ludhiana Sarabha Nagar</li>
              <li className="text-[11px] text-white/40">Jammu Channi Himmat</li>
            </ul>
          </div>

          {/* Col 2: GPS Coordinates */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
              GPS
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-mono">
              <li>LUDHIANA: 30° 54&apos; N, 75° 51&apos; E</li>
              <li>JAMMU: 32° 43&apos; N, 74° 51&apos; E</li>
              <li className="pt-2 text-[11px] text-white/40">XPEL CERTIFIED LABS</li>
            </ul>
          </div>

          {/* Col 3: Channels */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
              CHANNELS
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-mono">
              {SOCIAL_CHANNELS.map((ch) => (
                <li key={ch.label}>
                  <a href={ch.href} target="_blank" rel="noopener noreferrer" className="hover:text-[#E5FCA0] transition-colors">
                    {ch.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navigation */}
          <div className="space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E5FCA0] block mb-3">
              NAVIGATION
            </span>
            <ul className="space-y-2 text-xs text-white/70 font-mono">
              {FOOTER_NAV.map((nav) => (
                <li key={nav.label}>
                  <Link href={nav.href} className="hover:text-white transition-colors">
                    {nav.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="px-8 lg:px-12 py-4 bg-black border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-white/40 relative z-10">
        <span>© {new Date().getFullYear()} MR. DETAILER STUDIO. ALL RIGHTS RESERVED.</span>
        
        <div className="flex items-center gap-6">
          <Link href="#top" className="hover:text-[#E5FCA0]">PRIVACY</Link>
          <Link href="#top" className="hover:text-[#E5FCA0]">TERMS</Link>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to Top"
            className="flex size-7 items-center justify-center rounded-full border border-white/20 text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-colors cursor-pointer"
          >
            <ArrowUp className="size-3.5 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </footer>
  )
}
