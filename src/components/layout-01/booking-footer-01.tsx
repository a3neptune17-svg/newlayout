"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Phone, Mail, MapPin, Calendar } from "lucide-react"

const FOOTER_NAV = [
  {
    heading: "EXPLORE",
    links: [
      { label: "SERVICES", href: "#services" },
      { label: "CATEGORIES", href: "#categories" },
      { label: "PACKAGES", href: "#packages" },
      { label: "OUR WORK", href: "#our-work" },
    ],
  },
  {
    heading: "COMPANY",
    links: [
      { label: "ABOUT US", href: "#about" },
      { label: "PROCESS", href: "#process" },
      { label: "INSIGHTS", href: "#blog" },
      { label: "FRANCHISE", href: "#franchise" },
    ],
  },
  {
    heading: "STUDIOS",
    links: [
      { label: "LUDHIANA STUDIO", href: "#locations" },
      { label: "JAMMU STUDIO", href: "#locations" },
      { label: "WARRANTY HUB", href: "#warranty" },
    ],
  },
]

export function BookingFooter01() {
  return (
    <>
      {/* SECTION 14 — HIGH-IMPACT CLOSING CTA */}
      <section id="booking" className="relative bg-[#0B0D0A] text-white py-20 lg:py-32 overflow-hidden">
        <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-brand mx-auto">
            <Calendar className="size-3.5 text-brand" />
            <span>RESERVE YOUR STUDIO SLOT</span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-none">
            READY FOR <br />
            <span className="text-brand">YOUR CAR?</span>
          </h2>

          <p className="text-sm sm:text-lg text-white/70 max-w-xl mx-auto font-medium">
            Schedule your paint correction, XPEL PPF armor, or 9H nano-ceramic coating appointment at our Ludhiana or Jammu studio.
          </p>

          <div className="pt-4 flex justify-center">
            <Link
              href="tel:+919876543210"
              className="inline-flex items-center gap-3 rounded-full bg-brand px-10 py-5 text-xs sm:text-sm font-black uppercase tracking-widest text-black hover:bg-white transition-transform hover:scale-105 shadow-2xl shadow-brand/20"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="size-5 stroke-[3]" />
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND FOOTER */}
      <footer className="relative bg-slate-950 text-white border-t border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            
            {/* Masthead */}
            <div className="lg:col-span-4 space-y-4">
              <Link href="#top" className="inline-block">
                <Image src="/logo.png" alt="Mr. Detailer Studio" width={160} height={50} className="h-9 w-auto object-contain" />
              </Link>
              <p className="text-xs text-white/60 font-medium leading-relaxed max-w-xs">
                Hand-finished paint correction, 9H nano-ceramic protection, and XPEL self-healing polyurethane body armor.
              </p>
            </div>

            {/* Nav Columns */}
            {FOOTER_NAV.map((col) => (
              <div key={col.heading} className="lg:col-span-2 space-y-3">
                <span className="text-xs font-black uppercase tracking-widest text-brand block">
                  {col.heading}
                </span>
                <ul className="space-y-2 text-xs font-bold text-white/70">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="hover:text-brand transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact Details */}
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-black uppercase tracking-widest text-brand block">
                STUDIO CONTACT
              </span>
              <ul className="space-y-2 text-xs font-bold text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="size-3.5 text-brand shrink-0" />
                  <Link href="tel:+919876543210" className="hover:text-brand font-bold text-white">
                    +91 98765 43210
                  </Link>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="size-3.5 text-brand shrink-0" />
                  <Link href="mailto:hello@mrdetailer.in" className="hover:text-brand">
                    hello@mrdetailer.in
                  </Link>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="size-3.5 text-brand shrink-0 mt-0.5" />
                  <span>Ludhiana &amp; Jammu</span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright & Links */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold text-white/50">
            <span>© {new Date().getFullYear()} MR. DETAILER STUDIO. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-4">
              <Link href="#" className="hover:text-brand">PRIVACY POLICY</Link>
              <Link href="#" className="hover:text-brand">TERMS OF SERVICE</Link>
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
