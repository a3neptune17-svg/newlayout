"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Menu, X, ArrowUpRight, Sparkles } from "lucide-react"

const NAV_ITEMS = [
  { href: "#top", label: "HOME" },
  { href: "#services", label: "OUR SERVICES" },
  { href: "#shop", label: "SHOP" },
  { href: "#warranty", label: "WARRANTY HUB" },
  { href: "#franchise", label: "FRANCHISE" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT" },
]

export function Master2Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      {/* FLOATING GLASSMORPHIC NAVIGATION BAR */}
      <header className="sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-3 bg-[#0B0D0A]/85 backdrop-blur-xl border-b border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          
          {/* Brand Logo inside crisp white card for maximum legibility */}
          <Link href="#top" className="flex items-center gap-3 group">
            <div className="rounded-xl bg-white px-3 py-1.5 transition-transform group-hover:scale-105 shadow-md border border-white/40 flex items-center justify-center">
              <Image
                src="/logo.png"
                alt="Mr. Detailer Studio"
                width={140}
                height={40}
                className="h-7 sm:h-8 w-auto object-contain"
                priority
              />
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand/10 border border-brand/30 px-3 py-1 text-[10px] font-mono font-bold tracking-widest text-brand uppercase">
              <Sparkles className="size-3 text-brand" /> MASTER 2
            </span>
          </Link>

          {/* Quiet High-Contrast Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative py-1 text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-white/80 hover:text-brand transition-all group"
              >
                <span>{item.label}</span>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3.5">
            <a
              href="tel:+919876543210"
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/15 px-4 py-2 text-[11px] font-mono font-bold text-white/90 hover:bg-white/10 hover:border-white/30 transition-all"
            >
              <PhoneCall className="size-3.5 text-brand" />
              <span>+91 98765 43210</span>
            </a>

            {/* Glowing Primary CTA */}
            <Link
              href="#contact"
              className="rounded-full bg-brand px-6 py-2.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white hover:text-black transition-all shadow-[0_0_20px_rgba(229,252,160,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.7)] hover:scale-105 inline-flex items-center gap-1.5"
            >
              <span>BOOK APPOINTMENT</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Navigation Menu"
              className="flex items-center justify-center size-9 rounded-full border border-white/20 bg-white/10 text-white xl:hidden hover:bg-white/20"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
          />

          <div className="relative z-10 bg-[#0B0D0A] border-b border-white/15 px-6 py-6 text-white shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="rounded-xl bg-white px-3 py-1.5">
                <Image src="/logo.png" alt="Mr. Detailer Studio" width={130} height={36} className="h-7 w-auto object-contain" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close Menu"
                className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white border border-white/20"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-white/80 hover:text-brand py-2 border-b border-white/10"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-4 text-brand" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-white/10 text-xs font-mono font-bold text-white border border-white/20 uppercase tracking-widest"
              >
                <PhoneCall className="size-3.5 text-brand" /> CALL +91 98765 43210
              </a>
              <Link
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="flex w-full justify-center items-center gap-1.5 rounded-full bg-brand py-3.5 text-xs font-black text-black uppercase tracking-widest shadow-xl"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
