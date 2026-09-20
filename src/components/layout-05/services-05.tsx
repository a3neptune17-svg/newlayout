"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Sparkles, ShieldCheck, Layers, ArrowUpRight, Check } from "lucide-react"

const SHOWROOM_CATEGORIES = ["All", "PAINT PROTECTION", "COATINGS", "AUTO MODS"]

const SHOWROOM_SERVICES = [
  {
    id: "ppf-1",
    category: "PAINT PROTECTION",
    title: "Self-Healing PPF Film",
    subtitle: "10-MIL OPTICAL BODY ARMOR",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    desc: "10-Mil self-healing polyurethane film insulating bumpers, bonnet, and full body panels against rock chips and road debris.",
    features: ["Self-Healing Polyurethane", "Impact Zone Armor", "10-Year Studio Warranty"],
  },
  {
    id: "coatings-1",
    category: "COATINGS",
    title: "9H Ceramic & Graphene Shield",
    subtitle: "PERMANENT NANO-GLASS MATRIX",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    desc: "Permanent hydrophobic nano-glass coating protecting paintwork, carbon fiber, and wheels from UV etching and fallout.",
    features: ["9H Hardness Defense", "Extreme Hydrophobic Gloss", "Chemical Etching Resistance"],
  },
  {
    id: "mods-1",
    category: "AUTO MODS",
    title: "Color Wraps & Window Sunfilms",
    subtitle: "CUSTOM VINYL & HEAT REJECTION",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Layers,
    desc: "Full vehicle color-change vinyl wraps, chrome deletes, and high-performance heat-rejection window sunfilms.",
    features: ["Custom Vinyl Colors", "High Heat Rejection", "Chrome Delete Styling"],
  },
  {
    id: "coatings-2",
    category: "COATINGS",
    title: "Multi-Stage Paint Restoration",
    subtitle: "90%+ SWIRL & OXIDATION ERADICATION",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Sparkles,
    desc: "Dual-action machine paint polish eliminating swirl marks, holograms, and surface defects prior to coating.",
    features: ["Multi-Pass Compound", "Swirl Removal", "Factory Mirror Depth"],
  },
  {
    id: "ppf-2",
    category: "PAINT PROTECTION",
    title: "Track Pack PPF Shield",
    subtitle: "HIGH-IMPACT FRONTAL DEFENSE",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    icon: ShieldCheck,
    desc: "Targeted optical film coverage for front bumper, headlights, side mirrors, and bonnet edge.",
    features: ["Front Bumper & Bonnet", "Mirror & Pillar Shield", "Computer Cut Patterns"],
  },
  {
    id: "mods-2",
    category: "AUTO MODS",
    title: "Architectural Sunfilm Tinting",
    subtitle: "CABIN HEAT & UV DEFENSE",
    image: "/images/IMG_20260809_180739.jpg.jpeg",
    icon: Layers,
    desc: "Ceramic window sunfilms reducing interior heat buildup while shielding cabin leather from UV degradation.",
    features: ["99% UV Rejection", "Infrared Heat Block", "Privacy Tint Options"],
  },
]

export function Services05() {
  const [activeCategory, setActiveCategory] = React.useState("All")

  const filtered = activeCategory === "All"
    ? SHOWROOM_SERVICES
    : SHOWROOM_SERVICES.filter((s) => s.category === activeCategory)

  return (
    <section id="services" className="relative w-full bg-[#090B0E] py-16 lg:py-24 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-8">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-brand/20 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-brand border border-brand/30">
              <Sparkles className="size-3.5 text-brand" /> DIGITAL SHOWROOM CATALOG
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              SHOWROOM <span className="text-brand">CATALOG</span>
            </h2>
            <p className="mt-2 text-sm text-white/70 max-w-xl font-medium">
              Explore our primary disciplines: Paint Protection, Coatings, and Auto Mods.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black text-brand-foreground hover:bg-white hover:text-black transition-all uppercase tracking-widest shadow-lg shadow-brand/20 shrink-0"
          >
            <span>BOOK SHOWROOM BAY</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>

        {/* Primary Category Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {SHOWROOM_CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 rounded-2xl px-6 py-3 text-xs font-black uppercase tracking-widest transition-all border ${
                  isSelected
                    ? "bg-brand text-brand-foreground border-brand shadow-lg shadow-brand/20 scale-[1.02]"
                    : "bg-white/5 text-white/75 hover:bg-white/10 hover:text-white border-white/10"
                }`}
              >
                {cat}
              </button>
            )
          })}
        </div>

        {/* Showroom Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.id}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-brand hover:bg-white/[0.08] shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-52 w-full overflow-hidden rounded-2xl bg-black mb-6 border border-white/10">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-brand-foreground shadow-md">
                      {item.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex size-9 items-center justify-center rounded-xl bg-brand/20 text-brand font-bold border border-brand/30">
                      <Icon className="size-4" />
                    </span>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-brand block">
                        {item.subtitle}
                      </span>
                      <h3 className="text-xl font-black uppercase text-white leading-tight">{item.title}</h3>
                    </div>
                  </div>

                  <p className="text-xs text-white/70 leading-relaxed my-3">{item.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {item.features.map((f) => (
                      <span
                        key={f}
                        className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 text-[11px] font-semibold text-white/80 border border-white/10"
                      >
                        <Check className="size-3 text-brand stroke-[3]" /> {f}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">SHOWROOM CATALOG</span>
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand hover:underline"
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight className="size-3.5" />
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
