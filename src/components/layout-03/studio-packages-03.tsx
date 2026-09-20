"use client"

import Link from "next/link"
import { ArrowUpRight, Check, Compass, ShieldCheck } from "lucide-react"

const STUDIO_PASSES = [
  {
    id: "pass-01",
    passNo: "PASS 01",
    name: "STUDIO ENTRY CARE",
    subtitle: "ROUTINE CABIN & PAINT PRESERVATION",
    price: "$199",
    bay: "BAY 01 · MAINS BAY",
    description: "Baseline studio pass for regular vehicle maintenance and interior steam sterilization.",
    specs: [
      "Hand wash & gentle microfiber dry",
      "Full interior vacuum & steam wipe-down",
      "Paint sealant & tire dressing application",
      "Interior glass & dashboard UV defense",
    ],
    href: "#contact",
  },
  {
    id: "pass-02",
    passNo: "PASS 02",
    name: "STUDIO CORRECTION PASS",
    subtitle: "90%+ SWIRL-FREE PAINT RESTORATION",
    price: "$499",
    bay: "BAY 02 · POLISHING LAB",
    featured: true,
    description: "Multi-stage machine compounding engineered to eliminate 90%+ light swirls and restore factory depth.",
    specs: [
      "Multi-stage machine paint polish",
      "Eliminates 90%+ of swirl marks",
      "12-Month hydrophobic synthetic sealant",
      "Deep interior spa & leather conditioning",
    ],
    href: "#contact",
  },
  {
    id: "pass-03",
    passNo: "PASS 03",
    name: "STUDIO CERAMIC MASTER PASS",
    subtitle: "5-YEAR 9H NANO-GLASS MATRIX",
    price: "$899",
    bay: "BAY 03 · COATING ROOM",
    description: "Professional-grade 9H glass coating providing extreme chemical resistance and insane hydrophobic gloss.",
    specs: [
      "5-Year 9H nano ceramic body coating",
      "Full single-stage paint correction prep",
      "Hydrophobic windshield & wheel rim protection",
      "Annual studio maintenance inspection included",
    ],
    href: "#contact",
  },
  {
    id: "pass-04",
    passNo: "PASS 04",
    name: "STUDIO PPF ARMOR PASS",
    subtitle: "10-MIL SELF-HEALING OPTICAL FILM",
    price: "$2,499",
    bay: "BAY 04 · PPF SUITE",
    description: "Maximum vehicle defense against rock chips, scratches, and harsh environmental contaminants.",
    specs: [
      "10-Mil self-healing film installation",
      "Full front & high-impact zone protection",
      "Ceramic topcoat layer applied over film",
      "10-Year studio warranty against yellowing",
    ],
    href: "#contact",
  },
]

export function StudioPackages03() {
  return (
    <section id="packages" className="relative bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-brand">
              <Compass className="size-3.5 text-brand" />
              <span>STUDIO PASSES</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-none">
              STUDIO TIER <span className="text-brand">PASSES</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/60 max-w-2xl leading-relaxed">
              Explore studio access tiers assigned across our physical work bays. Select a pass to reserve studio bay time.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black text-brand-foreground hover:bg-white hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-lg shadow-brand/20"
          >
            <span>RESERVE STUDIO PASS</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>

        {/* 4 Studio Pass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STUDIO_PASSES.map((pass) => (
            <div
              key={pass.id}
              className={`relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 ${
                pass.featured
                  ? "bg-gradient-to-b from-white/15 to-white/5 border-brand ring-1 ring-brand shadow-2xl shadow-brand/10"
                  : "bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    {pass.passNo}
                  </span>
                  <span className="rounded-full bg-white/10 border border-white/15 px-3 py-1 text-[10px] font-bold text-white/80">
                    {pass.bay}
                  </span>
                </div>

                <h3 className="text-2xl font-black uppercase tracking-tight text-white leading-tight">
                  {pass.name}
                </h3>
                <p className="mt-2 text-xs text-white/60 font-medium line-clamp-2">
                  {pass.description}
                </p>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                    BAY PARAMETERS
                  </span>
                  <ul className="space-y-2">
                    {pass.specs.map((spec, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-white/80 font-medium">
                        <Check className="size-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="block text-[9px] font-black uppercase tracking-widest text-white/40">STUDIO PASS</span>
                  <span className="text-2xl font-black text-brand tracking-tight">{pass.price}</span>
                </div>
                <Link
                  href={pass.href}
                  className={`inline-flex items-center gap-1.5 rounded-2xl px-4 py-2.5 text-xs font-black uppercase tracking-widest transition-all ${
                    pass.featured
                      ? "bg-brand text-black hover:bg-white"
                      : "bg-white/10 text-white hover:bg-brand hover:text-black border border-white/15"
                  }`}
                >
                  <span>RESERVE</span>
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
