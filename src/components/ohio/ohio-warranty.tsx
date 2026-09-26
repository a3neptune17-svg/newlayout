"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function OhioWarranty() {
  return (
    <section id="warranty" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            WARRANTY
          </span>
          <span className="text-[10px] font-mono text-white/40">
            DIGITAL VIN REGISTRATION
          </span>
        </div>

        {/* Compact Editorial Block */}
        <div className="bg-[#131512] p-8 lg:p-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
              VIN HUB
            </span>

            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white leading-tight">
              VERIFIED VIN DIGITAL WARRANTY PORTAL
            </h2>

            <p className="text-xs text-white/70 leading-relaxed font-normal">
              Every XPEL PPF installation and 10H Graphene coating applied at Mr. Detailer is logged into our digital warranty hub linked directly to your vehicle&apos;s VIN number.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0 pt-4 md:pt-0">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md"
            >
              <span>ACCESS WARRANTY HUB</span>
              <ArrowUpRight className="size-4 stroke-[2.5]" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
