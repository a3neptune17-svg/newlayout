"use client"

import Link from "next/link"
import { ArrowUpRight, Check, ShoppingBag, ShieldCheck } from "lucide-react"

const SHOWROOM_TIERS = [
  {
    id: "show-01",
    tier: "TIER 01",
    name: "ESSENTIAL DETAILING",
    subtitle: "ENTRY-LEVEL CARE DISPLAY",
    price: "$199",
    desc: "Routine maintenance and steam cabin sanitization display for daily drivers.",
    features: ["Hand Foam Wash & Drying", "Steam Interior Extraction", "Synthetic Surface Sealant", "Glass & Wheel UV Defense"],
    href: "#contact",
  },
  {
    id: "show-02",
    tier: "TIER 02",
    name: "SIGNATURE RESTORATION",
    subtitle: "SWIRL-FREE PAINT CORRECTION",
    price: "$499",
    featured: true,
    desc: "Multi-pass compounding eliminating 90%+ swirl marks to factory mirror depth.",
    features: ["Multi-Stage Machine Polish", "90%+ Swirl Eradication", "12-Month Hydrophobic Sealant", "Deep Interior Spa Care"],
    href: "#contact",
  },
  {
    id: "show-03",
    tier: "TIER 03",
    name: "GOLD CERAMIC COATING",
    subtitle: "5-YEAR 9H NANO-GLASS MATRIX",
    price: "$899",
    desc: "Permanent hydrophobic glass coating providing extreme chemical and UV fallout protection.",
    features: ["5-Year 9H Nano Glass Coating", "Single-Stage Machine Polish Prep", "Hydrophobic Windshield Armor", "Annual Studio Inspection"],
    href: "#contact",
  },
  {
    id: "show-04",
    tier: "TIER 04",
    name: "PLATINUM PPF BODY ARMOR",
    subtitle: "10-MIL SELF-HEALING FILM",
    price: "$2,499",
    desc: "Ultimate self-healing optical film defending bumper, bonnet, and full body from stone chips.",
    features: ["Full Front Impact Protection", "XPEL 10-Mil Self-Healing Film", "Ceramic Topcoat Layer Applied", "10-Year Yellowing Guarantee"],
    href: "#contact",
  },
]

export function ShowroomPackages05() {
  return (
    <section id="packages" className="relative bg-[#090B0E] py-16 lg:py-24 text-white border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-brand">
              <ShoppingBag className="size-3.5 text-brand" />
              <span>SHOWROOM DISPLAY RACK</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              SHOWROOM <span className="text-brand">TIERS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-xl font-medium">
              Explore package tiers arranged on our digital showroom display rack. Browse specifications and reserve a bay.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black text-black hover:bg-white transition-all uppercase tracking-widest shrink-0 shadow-lg shadow-brand/20"
          >
            <span>BOOK SHOWROOM BAY</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>

        {/* 4 Showroom Rack Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SHOWROOM_TIERS.map((tier) => (
            <div
              key={tier.id}
              className={`group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 ${
                tier.featured
                  ? "bg-white/10 border-brand shadow-2xl shadow-brand/10 ring-1 ring-brand"
                  : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/[0.08]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    {tier.tier}
                  </span>
                  {tier.featured && (
                    <span className="rounded-full bg-brand px-3 py-0.5 text-[9px] font-black uppercase tracking-wider text-black">
                      SHOWROOM HIGHLIGHT
                    </span>
                  )}
                </div>

                <span className="text-[10px] font-black uppercase tracking-widest text-white/50 block">
                  {tier.subtitle}
                </span>
                <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight mt-1">
                  {tier.name}
                </h3>
                <p className="mt-2 text-xs text-white/60 font-medium leading-relaxed">
                  {tier.desc}
                </p>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                    DISPLAY FEATURES
                  </span>
                  <ul className="space-y-2">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80 font-semibold">
                        <Check className="size-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-white/40">SHOWROOM PRICE</span>
                  <span className="text-2xl font-black text-brand tracking-tight">{tier.price}</span>
                </div>
                <Link
                  href={tier.href}
                  className="inline-flex items-center gap-1.5 rounded-2xl bg-brand px-4 py-2 text-xs font-black uppercase tracking-widest text-black hover:bg-white transition-all"
                >
                  <span>INSPECT</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
