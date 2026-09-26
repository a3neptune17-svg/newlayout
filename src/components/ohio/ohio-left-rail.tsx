"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, ArrowUpRight } from "lucide-react"

const NAV_ITEMS = [
  { href: "#top", label: "HOME" },
  { href: "#services", label: "OUR SERVICES" },
  { href: "#protection", label: "PROTECTION" },
  { href: "#namex", label: "NAMEX STUDIO" },
  { href: "#packages", label: "PACKAGES" },
  { href: "#shop", label: "SHOP" },
  { href: "#our-work", label: "OUR WORK" },
  { href: "#process", label: "WORKFLOW" },
  { href: "#about", label: "ABOUT" },
  { href: "#warranty", label: "WARRANTY HUB" },
  { href: "#franchise", label: "OUR FRANCHISE" },
  { href: "#blog", label: "BLOG" },
  { href: "#contact", label: "CONTACT US" },
]

export function OhioLeftRail() {
  const [mobileOpen, setMobileOpen] = React.useState(false)

  return (
    <>
      {/* DESKTOP PERSISTENT LEFT RAIL (1024px and up) */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 z-40 w-72 flex-col justify-between bg-[#111310] border-r border-white/10 p-8 overflow-y-auto font-sans selection:bg-[#E5FCA0] selection:text-black">
        
        {/* Top Header & Brand Logo */}
        <div className="space-y-8">
          <Link href="#top" className="block">
            <div className="rounded-xl bg-white p-2.5 inline-block border border-white/20 shadow-sm hover:scale-105 transition-transform">
              <Image
                src="/logo.png"
                alt="Mr. Detailer Studio"
                width={130}
                height={36}
                className="h-7 w-auto object-contain"
                priority
              />
            </div>
          </Link>

          {/* Quiet Navigation Links */}
          <nav className="flex flex-col gap-1.5">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-1 text-[11px] font-bold uppercase tracking-widest text-white/60 hover:text-[#E5FCA0] transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom Primary CTA */}
        <div className="pt-6 border-t border-white/10 space-y-3">
          <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block">
            LUDHIANA &amp; JAMMU STUDIOS
          </span>
          <Link
            href="#contact"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E5FCA0] py-3.5 px-6 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
          >
            <span>BOOK APPOINTMENT</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>
      </aside>

      {/* MOBILE STICKY TOP BAR (<1024px) */}
      <header className="sticky top-0 z-50 w-full bg-[#111310] border-b border-white/10 px-4 py-3 text-white lg:hidden flex items-center justify-between backdrop-blur-md">
        <Link href="#top" className="flex items-center gap-2">
          <div className="rounded-lg bg-white p-1.5">
            <Image src="/logo.png" alt="Mr. Detailer Studio" width={110} height={30} className="h-6 w-auto object-contain" />
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="rounded-full bg-[#E5FCA0] px-4 py-2 text-[10px] font-black uppercase tracking-widest text-black"
          >
            BOOK
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation Menu"
            className="flex size-9 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden flex flex-col justify-start">
          <div
            onClick={() => setMobileOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />
          <div className="relative z-10 bg-[#111310] border-b border-white/15 px-6 py-6 text-white space-y-4 shadow-2xl">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="rounded-lg bg-white p-1.5">
                <Image src="/logo.png" alt="Mr. Detailer Studio" width={110} height={30} className="h-6 w-auto object-contain" />
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="size-8 rounded-full bg-white/10 flex items-center justify-center text-white"
              >
                <X className="size-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-2 text-xs font-black uppercase tracking-widest text-white/80 hover:text-[#E5FCA0] border-b border-white/5"
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className="size-3.5 text-[#E5FCA0]" />
                </Link>
              ))}
            </nav>

            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#E5FCA0] py-3.5 text-xs font-black text-black uppercase tracking-widest shadow-xl mt-4"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
