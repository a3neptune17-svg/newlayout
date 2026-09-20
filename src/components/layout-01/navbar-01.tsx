"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { PhoneCall, Menu, X, ArrowUpRight } from "lucide-react"

const NAV_ITEMS = [
  { href: "#services", label: "SERVICES" },
  { href: "#categories", label: "CATEGORIES" },
  { href: "#packages", label: "PACKAGES" },
  { href: "#our-work", label: "OUR WORK" },
  { href: "#about", label: "ABOUT" },
  { href: "#locations", label: "LOCATIONS" },
]

export function Navbar01() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md text-slate-950 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          
          {/* Brand Logo */}
          <Link href="#top" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Mr. Detailer Studio"
              width={160}
              height={50}
              className="h-8 sm:h-9 w-auto object-contain"
              priority
            />
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-[10px] font-black tracking-widest text-emerald-700 uppercase">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> OPEN
            </span>
          </Link>

          {/* Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-xs font-black uppercase tracking-widest text-slate-700 hover:text-black transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Action Button & Contact */}
          <div className="flex items-center gap-4">
            <a
              href="tel:+919876543210"
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-slate-800 hover:text-brand transition-colors"
            >
              <PhoneCall className="size-3.5 text-black" />
              <span>+91 98765 43210</span>
            </a>

            <Link
              href="#booking"
              className="rounded-full bg-slate-950 px-6 py-2.5 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black transition-all shadow-md inline-flex items-center gap-1"
            >
              <span>BOOK</span>
              <ArrowUpRight className="size-3.5" />
            </Link>

            {/* Mobile Menu Trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle Menu"
              className="flex items-center justify-center size-9 rounded-full border border-slate-300 bg-slate-100 text-slate-950 lg:hidden hover:bg-slate-200"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
          />

          <div className="relative z-10 bg-white border-b border-slate-300 px-6 py-6 text-slate-950 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <Image src="/logo.png" alt="Mr. Detailer Studio" width={140} height={40} className="h-8 w-auto object-contain" />
              <button
                onClick={() => setMobileOpen(false)}
                className="size-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-950 border border-slate-300"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between text-xs font-black uppercase tracking-widest text-slate-800 hover:text-black py-2 border-b border-slate-100"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-4 text-slate-400" />
                </Link>
              ))}
            </nav>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-slate-100 text-xs font-black text-slate-950 border border-slate-300 uppercase tracking-widest"
              >
                <PhoneCall className="size-3.5 text-black" /> CALL +91 98765 43210
              </a>
              <Link
                href="#booking"
                onClick={() => setMobileOpen(false)}
                className="flex w-full justify-center items-center gap-1 rounded-full bg-slate-950 py-3.5 text-xs font-black text-brand uppercase tracking-widest shadow-md"
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
