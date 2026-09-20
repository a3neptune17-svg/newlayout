"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Check, Award } from "lucide-react"

const CAMPAIGN_PACKAGES = [
  {
    id: "camp-01",
    code: "CAMPAIGN // 01",
    title: "ESSENTIAL CARE",
    price: "$199",
    tagline: "ROUTINE PRESERVATION & GLOSS",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    specs: ["Hand Wash & Gentle Dry", "Cabin Steam Sanitization", "Synthetic Surface Sealant", "Tire & UV Glass Shield"],
    href: "#contact",
  },
  {
    id: "camp-02",
    code: "CAMPAIGN // 02",
    title: "SIGNATURE CORRECTION",
    price: "$499",
    tagline: "90%+ SWIRL ERADICATION",
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    featured: true,
    specs: ["Multi-Pass Compound Polish", "90%+ Swirl Eradication", "12-Month Hydrophobic Sealant", "Leather Care Conditioning"],
    href: "#contact",
  },
  {
    id: "camp-03",
    code: "CAMPAIGN // 03",
    title: "GOLD CERAMIC",
    price: "$899",
    tagline: "5-YEAR 9H NANO-GLASS MATRIX",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    specs: ["5-Year 9H Nano Glass Shield", "Single-Stage Machine Polish", "Glass & Wheel Hydrophobic Armor", "Annual Inspection"],
    href: "#contact",
  },
  {
    id: "camp-04",
    code: "CAMPAIGN // 04",
    title: "PLATINUM PPF",
    price: "$2,499",
    tagline: "10-MIL SELF-HEALING OPTICAL FILM",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    specs: ["Full Front Impact PPF", "10-Mil Self-Healing Film", "Ceramic Topcoat Layer", "10-Year Yellowing Guarantee"],
    href: "#contact",
  },
]

export function CampaignPackages04() {
  return (
    <section id="packages" className="relative bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-brand">
              <Award className="size-3.5 text-brand" />
              <span>CAMPAIGN REVEALS</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              PRODUCT <span className="text-brand">REVEALS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-medium">
              High-end automotive product reveals. Tailored protection packages presented as luxury vehicle configurator specs.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black text-black hover:bg-white transition-all uppercase tracking-widest shrink-0 shadow-lg shadow-brand/20"
          >
            <span>DISCOVER ALL</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>

        {/* 4 Campaign Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CAMPAIGN_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`group relative flex flex-col justify-between rounded-3xl border overflow-hidden transition-all duration-500 ${
                pkg.featured
                  ? "bg-gradient-to-b from-white/15 to-white/5 border-brand shadow-2xl shadow-brand/10 ring-1 ring-brand"
                  : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              {/* Image Header with Gradient */}
              <div className="relative h-48 w-full overflow-hidden bg-black">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-md">
                  {pkg.code}
                </span>
              </div>

              {/* Body */}
              <div className="p-6 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    {pkg.tagline}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight mt-1">
                    {pkg.title}
                  </h3>

                  <div className="mt-6 pt-4 border-t border-white/10">
                    <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                      CAMPAIGN SPECS
                    </span>
                    <ul className="space-y-2">
                      {pkg.specs.map((spec, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/80 font-semibold">
                          <Check className="size-3.5 text-brand shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <span className="block text-[9px] font-black uppercase tracking-widest text-white/40">CONFIGURATOR</span>
                    <span className="text-2xl font-black text-brand tracking-tight">{pkg.price}</span>
                  </div>
                  <Link
                    href={pkg.href}
                    className="inline-flex items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-xs font-black uppercase tracking-widest text-black hover:bg-white transition-all"
                  >
                    <span>CONFIG</span>
                    <ArrowUpRight className="size-3.5" />
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
