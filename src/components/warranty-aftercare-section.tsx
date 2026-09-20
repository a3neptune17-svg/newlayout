"use client"

import { ShieldCheck, CheckCircle2, RefreshCw, Calendar, Award } from "lucide-react"

export function WarrantyAftercareSection() {
  return (
    <section id="warranty" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
              <ShieldCheck className="size-3.5 text-black" />
              <span>PROTECTION GUARANTEE</span>
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              WARRANTY &amp; <span className="underline decoration-brand decoration-4 underline-offset-4">AFTERCARE SYSTEM</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-medium">
              Every protection treatment at Mr. Detailer is backed by official digital warranty registration and comprehensive maintenance aftercare.
            </p>
          </div>
        </div>

        {/* Technical Care Diagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-3xl border border-slate-300 bg-white p-8 flex flex-col justify-between shadow-md hover:border-black transition-all">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-black text-brand mb-6 font-black shadow-md">
                <Award className="size-6 text-brand" />
              </span>
              <h3 className="text-2xl font-black uppercase text-[#0B0D0A] mb-2">DIGITAL WARRANTY</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Registered online under your vehicle VIN. Protects against film yellowing, bubbling, peeling, or coating breakdown.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-black">
              <CheckCircle2 className="size-4 text-black" />
              <span>VIN REGISTERED</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300 bg-white p-8 flex flex-col justify-between shadow-md hover:border-black transition-all">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-black text-brand mb-6 font-black shadow-md">
                <Calendar className="size-6 text-brand" />
              </span>
              <h3 className="text-2xl font-black uppercase text-[#0B0D0A] mb-2">ANNUAL INSPECTION</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Complimentary annual studio inspection checking hydrophobic bead angle, gloss retention, and film edge alignment.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-black">
              <CheckCircle2 className="size-4 text-black" />
              <span>STUDIO AUDIT INCLUDED</span>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300 bg-white p-8 flex flex-col justify-between shadow-md hover:border-black transition-all">
            <div>
              <span className="flex size-12 items-center justify-center rounded-2xl bg-black text-brand mb-6 font-black shadow-md">
                <RefreshCw className="size-6 text-brand" />
              </span>
              <h3 className="text-2xl font-black uppercase text-[#0B0D0A] mb-2">AFTERCARE WASH GUIDE</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                pH-neutral shampoo and micro-fiber drying guidelines ensuring long-term self-healing hydrophobic longevity.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2 text-xs font-bold text-black">
              <CheckCircle2 className="size-4 text-black" />
              <span>CARE GUIDE PROVIDED</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
