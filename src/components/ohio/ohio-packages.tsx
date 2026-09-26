"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const TWO_PACKAGES = [
  {
    id: "signature",
    name: "SIGNATURE MACHINE POLISHING & CORRECTION",
    tag: "PAINT RESTORATION",
    subtitle: "Multi-stage clearcoat compound leveling & hydrophobic topcoat.",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    highlight: true,
  },
  {
    id: "ppf-armor",
    name: "PLATINUM PPF BODY ARMOR",
    tag: "FULL BODY ARMOR",
    subtitle: "10-mil self-healing optical polyurethane film shield.",
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    highlight: false,
  },
]

export function OhioPackages() {
  return (
    <section id="packages" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            PACKAGES
          </span>
          <span className="text-[10px] font-mono text-white/40">
            TWO BALANCED OPTIONS
          </span>
        </div>

        {/* TWO DOMINANT 50/50 PACKAGE PANELS */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {TWO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="relative min-h-[440px] lg:min-h-[480px] p-8 lg:p-10 flex flex-col justify-between group overflow-hidden bg-[#131512]"
            >
              {/* Full-Bleed Image Background */}
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/50 to-transparent" />

              {/* Top Bar */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold uppercase tracking-widest px-3 py-1 rounded-full ${
                  pkg.highlight ? "bg-[#E5FCA0] text-black" : "bg-white/10 text-white border border-white/15"
                }`}>
                  {pkg.tag}
                </span>

                <Link
                  href="#contact"
                  className="size-10 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all cursor-pointer shadow-lg"
                  aria-label={`Inquire ${pkg.name}`}
                >
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </Link>
              </div>

              {/* Bottom Label & CTA */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl sm:text-3xl font-black uppercase text-white leading-tight">
                  {pkg.name}
                </h3>
                <p className="mt-2 text-xs text-white/70 font-normal max-w-sm">
                  {pkg.subtitle}
                </p>

                <div className="mt-6 pt-4 border-t border-white/15">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
                  >
                    <span>INQUIRE PACKAGE</span>
                    <ArrowUpRight className="size-4 stroke-[2.5]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
