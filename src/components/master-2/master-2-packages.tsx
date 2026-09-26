"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Award, Star } from "lucide-react"

const TWO_PACKAGES = [
  {
    id: "signature",
    name: "SIGNATURE PAINT CORRECTION & CERAMIC",
    subtitle: "MULTI-PASS POLISH & 9H NANO COATING",
    badge: "MOST POPULAR",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    href: "#contact",
  },
  {
    id: "platinum-ppf",
    name: "PLATINUM PPF BODY ARMOR",
    subtitle: "FULL BODY SELF-HEALING OPTICAL FILM",
    badge: "FLAGSHIP DEFENSE",
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    href: "#contact",
  },
]

export function Master2Packages() {
  return (
    <section id="packages" className="relative bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Concise Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Award className="size-3 text-black" />
              <span>BESPOKE SELECTION</span>
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              DETAILING <span className="text-brand">PACKAGES</span>
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 px-6 py-3.5 text-xs font-black text-white hover:bg-brand hover:text-black hover:border-brand transition-all uppercase tracking-widest shadow-sm shrink-0"
          >
            <span>INQUIRE ALL PACKAGES</span>
            <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* TWO LARGE VISUAL PANELS (50% / 50% Desktop, Stacked Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TWO_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="relative min-h-[440px] sm:min-h-[500px] rounded-3xl overflow-hidden border border-white/15 bg-black p-8 sm:p-10 flex flex-col justify-between group cursor-pointer shadow-2xl transition-all duration-500 hover:border-brand/60"
            >
              {/* Full-Bleed Image Background */}
              <Image
                src={pkg.image}
                alt={pkg.name}
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

              {/* Top Badge */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-md">
                  <Star className="size-3 fill-black text-black" />
                  {pkg.badge}
                </span>
                <span className="text-[10px] font-mono font-bold text-white/50 bg-black/60 px-3 py-1 rounded-full border border-white/10">
                  STUDIO PANEL
                </span>
              </div>

              {/* Bottom Visual Content: Full-Bleed Image + Package Name + Short Label + CTA */}
              <div className="relative z-10 mt-auto pt-8">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand block mb-2">
                  {pkg.subtitle}
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white leading-tight">
                  {pkg.name}
                </h3>

                <div className="mt-6 pt-6 border-t border-white/15 flex items-center justify-between">
                  <Link
                    href={pkg.href}
                    className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-xs font-black uppercase tracking-widest text-black hover:bg-white transition-all shadow-xl hover:scale-105"
                  >
                    <span>BOOK PACKAGE</span>
                    <ArrowUpRight className="size-4" />
                  </Link>

                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white/60">
                    EXPERT INSTALLATION
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
