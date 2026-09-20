"use client"

import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"

const SPEC_PACKAGES = [
  {
    code: "SPEC-01",
    name: "ESSENTIAL CARE",
    suitability: "Daily Drivers & Maintenance",
    tag: "BASELINE DETAILING",
    protectionLevel: "12-Month Sealant",
    turnaround: "1 Studio Day",
    includes: [
      "Hand wash & gentle microfiber dry",
      "Full interior vacuum & steam wipe-down",
      "Paint sealant & tire dressing application",
      "Interior glass & dashboard UV defense",
    ],
  },
  {
    code: "SPEC-02",
    name: "SIGNATURE CORRECTION",
    suitability: "Exotic Cars & Daily Restoration",
    tag: "PAINT RESTORATION",
    protectionLevel: "2-Stage Machine Polish",
    turnaround: "2 Studio Days",
    includes: [
      "Multi-stage machine paint polish & correction",
      "Eliminates 90%+ of swirl marks & light scratches",
      "12-Month hydrophobic synthetic paint sealant",
      "Deep interior spa & leather conditioning",
    ],
  },
  {
    code: "SPEC-03",
    name: "GOLD CERAMIC",
    suitability: "Luxury Vehicles & Long-Term Gloss",
    tag: "9H COATING",
    protectionLevel: "5-Year 9H Nano Glass Shield",
    turnaround: "2-3 Studio Days",
    includes: [
      "9H nano ceramic body coating application",
      "Full single-stage paint correction prep",
      "Hydrophobic windshield & wheel rim protection",
      "Annual studio maintenance inspection included",
    ],
  },
  {
    code: "SPEC-04",
    name: "PLATINUM PPF ARMOR",
    suitability: "High-Value Supercars & Collector Cars",
    tag: "PHYSICAL SHIELD",
    protectionLevel: "XPEL 10-Mil Self-Healing Film",
    turnaround: "3-5 Studio Days",
    includes: [
      "XPEL 10-mil self-healing film installation",
      "Full front & high-impact zone protection",
      "Ceramic topcoat layer applied over film",
      "Studio VIN warranty against yellowing & peeling",
    ],
  },
]

export function EditorialPackages01() {
  return (
    <section id="packages" className="relative bg-white text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-2 border-slate-950 pb-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-black font-mono text-slate-400">05</span>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-950">
                TECHNICAL SPECIFICATION SHEET
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-slate-950 leading-none font-serif">
              STUDIO PACKAGE <span className="underline decoration-brand decoration-6 underline-offset-8">SPECS</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
            Review detailed package specifications structured like an official automotive technical sheet. Contact studio for tailored quote.
          </p>
        </div>

        {/* Technical Spec Sheet Table Layout */}
        <div className="border-2 border-slate-950 bg-[#FBFBFD] shadow-2xl divide-y-2 divide-slate-950">
          {SPEC_PACKAGES.map((pkg) => (
            <div key={pkg.code} className="p-8 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start hover:bg-white transition-colors">
              
              {/* Package Code & Title */}
              <div className="lg:col-span-4 space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-slate-950 text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 font-mono">
                    {pkg.code}
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {pkg.tag}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 font-serif leading-none pt-1">
                  {pkg.name}
                </h3>

                <div className="pt-2 text-xs font-bold text-slate-700">
                  <span className="text-slate-400 font-mono uppercase block text-[10px]">SUITABILITY:</span>
                  <span>{pkg.suitability}</span>
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="lg:col-span-5 space-y-3">
                <span className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 font-mono">
                  PACKAGE INCLUSIONS &amp; METRICS
                </span>

                <ul className="space-y-2">
                  {pkg.includes.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-bold text-slate-900">
                      <Check className="size-4 text-black shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Column */}
              <div className="lg:col-span-3 flex flex-col justify-between h-full pt-2 lg:pt-0 border-t lg:border-t-0 lg:border-l border-slate-300 lg:pl-8 space-y-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono block">
                    PROTECTION TIER:
                  </span>
                  <span className="text-xs font-black uppercase text-slate-950 block">
                    {pkg.protectionLevel}
                  </span>

                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 font-mono block mt-2">
                    TURNAROUND:
                  </span>
                  <span className="text-xs font-black uppercase text-slate-950 block">
                    {pkg.turnaround}
                  </span>
                </div>

                <Link
                  href="#booking"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black transition-all shadow-md"
                >
                  <span>INQUIRE SPEC</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
