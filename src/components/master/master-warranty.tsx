"use client"

import { ShieldCheck, CheckCircle2, RefreshCw, Calendar, Award } from "lucide-react"

export function MasterWarranty() {
  return (
    <section id="warranty" className="relative bg-[#0B0D0A] py-16 lg:py-20 text-white border-b border-white/10 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/15 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <ShieldCheck className="size-3 text-black" />
              <span>PROTECTION GUARANTEE</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-none">
              WARRANTY &amp; <span className="text-white/80">AFTERCARE</span>
            </h2>
          </div>
        </div>

        {/* 3 Verified Warranty Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 flex flex-col justify-between backdrop-blur-md hover:border-white/40 transition-all">
            <div>
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-black mb-5 font-black shadow-md">
                <Award className="size-5 text-black" />
              </span>
              <h3 className="text-xl font-black uppercase text-white mb-2">DIGITAL WARRANTY</h3>
              <p className="text-xs text-white/70 leading-relaxed font-normal">
                Registered online under your vehicle VIN. Protects against film yellowing, bubbling, peeling, or coating breakdown.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-white/90">
              <CheckCircle2 className="size-3.5 text-brand" />
              <span>VIN REGISTERED</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 flex flex-col justify-between backdrop-blur-md hover:border-white/40 transition-all">
            <div>
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-black mb-5 font-black shadow-md">
                <Calendar className="size-5 text-black" />
              </span>
              <h3 className="text-xl font-black uppercase text-white mb-2">ANNUAL INSPECTION</h3>
              <p className="text-xs text-white/70 leading-relaxed font-normal">
                Complimentary annual studio inspection checking hydrophobic bead angle, gloss retention, and film edge alignment.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-white/90">
              <CheckCircle2 className="size-3.5 text-brand" />
              <span>STUDIO AUDIT INCLUDED</span>
            </div>
          </div>

          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 flex flex-col justify-between backdrop-blur-md hover:border-white/40 transition-all">
            <div>
              <span className="flex size-11 items-center justify-center rounded-2xl bg-brand text-black mb-5 font-black shadow-md">
                <RefreshCw className="size-5 text-black" />
              </span>
              <h3 className="text-xl font-black uppercase text-white mb-2">AFTERCARE WASH GUIDE</h3>
              <p className="text-xs text-white/70 leading-relaxed font-normal">
                pH-neutral shampoo and micro-fiber drying guidelines ensuring long-term self-healing hydrophobic longevity.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-white/90">
              <CheckCircle2 className="size-3.5 text-brand" />
              <span>CARE GUIDE PROVIDED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
