"use client"

import { useState } from "react"
import Link from "next/link"
import { Sparkles, ShieldCheck, Gauge, Droplets, ArrowUpRight, Check, Award, Star } from "lucide-react"

const PACKAGES = [
  {
    id: "essential",
    name: "Essential Care Package",
    subtitle: "INTERIOR & EXTERIOR MAINTENANCE",
    badge: "ESSENTIAL",
    tag: "ENTRY-LEVEL DETAIL",
    featured: false,
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    icon: Droplets,
    description: "Baseline care for routine vehicle maintenance and crisp daily preservation.",
    features: [
      "Hand wash & gentle microfiber dry",
      "Full interior vacuum & steam wipe-down",
      "Paint sealant & tire dressing application",
      "Interior glass & dashboard UV defense",
    ],
    href: "#contact",
  },
  {
    id: "signature",
    name: "Signature Paint Correction",
    subtitle: "SWIRL-FREE MIRROR FINISH",
    badge: "MOST POPULAR",
    tag: "PAINT RESTORATION",
    featured: true,
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    icon: Gauge,
    description: "Multi-pass machine polishing designed to eliminate swirl marks and restore depth.",
    features: [
      "Multi-stage machine paint polish & correction",
      "Eradicates swirl marks & light scratches",
      "Hydrophobic synthetic paint sealant",
      "Deep interior spa & leather conditioning",
    ],
    href: "#contact",
  },
  {
    id: "gold-ceramic",
    name: "Gold Ceramic Protection",
    subtitle: "NANO GLASS COATING",
    badge: "9H SHIELD",
    tag: "ULTIMATE GLOSS",
    featured: false,
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    icon: Sparkles,
    description: "Professional-grade 9H glass coating providing hydrophobic bead gloss.",
    features: [
      "9H nano ceramic body coating application",
      "Full paint correction prep included",
      "Hydrophobic windshield & wheel rim protection",
      "Annual studio maintenance inspection",
    ],
    href: "#contact",
  },
  {
    id: "platinum-ppf",
    name: "Platinum PPF Body Armor",
    subtitle: "SELF-HEALING FILM",
    badge: "FULL BODY",
    tag: "FULL BODY SHIELD",
    featured: false,
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    icon: ShieldCheck,
    description: "Maximum vehicle defense against rock chips, scratches, and road debris.",
    features: [
      "10-mil self-healing film installation",
      "Full front & high-impact zone protection",
      "Ceramic topcoat layer applied over film",
      "Studio VIN digital warranty registration",
    ],
    href: "#contact",
  },
]

export function MasterPackages() {
  const [selectedId, setSelectedId] = useState("signature")

  return (
    <section id="packages" className="relative bg-white py-16 lg:py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Concise Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Award className="size-3 text-black" />
              <span>STUDIO SELECTION</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              PACKAGES
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-6 py-3 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-sm shrink-0"
          >
            <span>INQUIRE ALL PACKAGES</span>
            <ArrowUpRight className="size-4 text-brand group-hover:text-black" />
          </Link>
        </div>

        {/* Horizontal Package Carousel */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon
            const isSelected = selectedId === pkg.id

            return (
              <div
                key={pkg.id}
                onMouseEnter={() => setSelectedId(pkg.id)}
                className={`snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] relative flex flex-col justify-between rounded-3xl border transition-all duration-300 overflow-hidden cursor-pointer p-6 ${
                  pkg.featured
                    ? "bg-[#0B0D0A] text-white border-black shadow-lg"
                    : isSelected
                    ? "bg-slate-900 text-white border-black shadow-md"
                    : "bg-slate-50 text-[#0B0D0A] border-slate-200 hover:border-black hover:bg-white"
                }`}
              >
                {/* Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`flex size-9 items-center justify-center rounded-2xl border ${
                      pkg.featured || isSelected
                        ? "bg-white/10 border-white/20 text-white"
                        : "bg-white border-slate-200 text-black shadow-sm"
                    }`}>
                      <Icon className="size-4 text-brand" />
                    </span>
                    {pkg.featured ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
                        <Star className="size-2.5 fill-black text-black" />
                        {pkg.badge}
                      </span>
                    ) : (
                      <span className={`rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                        isSelected ? "bg-white/10 text-white" : "bg-slate-200 text-slate-700"
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block mb-1">
                    {pkg.subtitle}
                  </span>
                  <h3 className={`text-xl font-black uppercase tracking-tight leading-tight ${
                    pkg.featured || isSelected ? "text-white" : "text-[#0B0D0A]"
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-2 text-xs line-clamp-2 leading-relaxed ${
                    pkg.featured || isSelected ? "text-white/70" : "text-slate-600"
                  }`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Features & CTA */}
                <div className={`relative z-10 mt-5 pt-4 border-t ${
                  pkg.featured || isSelected ? "border-white/15" : "border-slate-200"
                }`}>
                  <ul className="space-y-2 mb-5">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-medium ${
                        pkg.featured || isSelected ? "text-white/85" : "text-slate-700"
                      }`}>
                        <Check className="size-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={pkg.href}
                    className={`flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 px-4 text-xs font-black uppercase tracking-wider transition-all ${
                      pkg.featured || isSelected
                        ? "bg-brand text-black hover:bg-white hover:text-black"
                        : "bg-[#0B0D0A] text-white hover:bg-brand hover:text-black"
                    }`}
                  >
                    <span>INQUIRE PACKAGE</span>
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
