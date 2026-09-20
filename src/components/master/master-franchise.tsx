"use client"

import Link from "next/link"
import { ArrowUpRight, Building2 } from "lucide-react"

export function MasterFranchise() {
  return (
    <section id="franchise" className="relative bg-white py-14 lg:py-16 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-800 bg-[#0B0D0A] p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute -right-20 -bottom-20 size-80 rounded-full bg-brand/10 blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm">
                <Building2 className="size-3 text-black" />
                <span>EXPANSION OPPORTUNITY</span>
              </span>

              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
                FRANCHISE <span className="text-white/85">WITH US</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/75 font-normal leading-relaxed">
                Partner with Mr. Detailer Studio to bring precision paint protection, XPEL film installations, and 9H ceramic coating care to your market.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-xs font-black uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all shadow-md hover:scale-105"
              >
                <span>INQUIRE FOR FRANCHISE</span>
                <ArrowUpRight className="size-4 stroke-[3]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
