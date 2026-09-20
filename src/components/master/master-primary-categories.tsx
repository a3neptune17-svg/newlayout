"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react"

const PRIMARY_CATEGORIES = [
  {
    id: "paint-protection",
    title: "PAINT PROTECTION",
    subtitle: "SELF-HEALING OPTICAL FILM",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    tag: "PPF ARMOR",
    services: [
      "Self-Healing Polyurethane Film",
      "High-Impact Zone Defense",
      "Computer Pattern Cutting"
    ],
    href: "#contact",
  },
  {
    id: "coatings",
    title: "COATINGS",
    subtitle: "9H NANO CERAMIC & GRAPHENE",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    tag: "NANO SHIELD",
    services: [
      "9H Permanent Ceramic Coating",
      "Graphene Body Matrix",
      "Hydrophobic Glass & Wheels"
    ],
    href: "#contact",
  },
  {
    id: "auto-mods",
    title: "AUTO MODS",
    subtitle: "CUSTOM WRAPS & SUNFILMS",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Layers,
    tag: "STYLING STUDIO",
    services: [
      "Color Change Vinyl Wraps",
      "Heat Rejection Sunfilms",
      "Chrome Delete Trim Accents"
    ],
    href: "#contact",
  },
]

export function MasterPrimaryCategories() {
  return (
    <section id="services" className="relative bg-[#F9F9FB] py-16 lg:py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Restrained One-Word Recognition Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              CORE DISCIPLINES
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              SERVICES
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-6 py-3 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-sm"
          >
            <span>INQUIRE ALL SERVICES</span>
            <ArrowUpRight className="size-4 text-brand group-hover:text-black" />
          </Link>
        </div>

        {/* Premium Horizontal Scroll Rail */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          {PRIMARY_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className="snap-start shrink-0 w-[300px] sm:w-[380px] lg:w-[400px] group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-white p-6 sm:p-7 transition-all duration-300 hover:border-black hover:shadow-xl"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-black mb-5 border border-slate-200">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover filter brightness-95 transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 300px, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-3.5 left-3.5 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                      {cat.tag}
                    </span>

                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-white/80">
                        {cat.subtitle}
                      </span>
                      <Icon className="size-4 text-brand" />
                    </div>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0D0A] leading-tight mb-3">
                    {cat.title}
                  </h3>

                  <ul className="space-y-2 pt-2 border-t border-slate-200">
                    {cat.services.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="size-3.5 text-black shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    MR. DETAILER
                  </span>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-black hover:text-black hover:bg-brand px-4 py-2 rounded-full transition-all"
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight className="size-3.5 text-black" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
