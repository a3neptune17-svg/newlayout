"use client"

import { CheckCircle2, Workflow } from "lucide-react"

const PROCESS_STEPS = [
  { step: "01", title: "INSPECT", desc: "Digital paint gauge reading & LED inspection." },
  { step: "02", title: "PREPARE", desc: "pH-neutral foam wash & clay surface prep." },
  { step: "03", title: "WORK", desc: "PPF installation or machine paint correction." },
  { step: "04", title: "CHECK", desc: "Hydrophobic cure audit & 50-point quality check." },
  { step: "05", title: "DELIVER", desc: "VIN warranty registration & client handover." },
]

export function MasterProcess() {
  return (
    <section id="process" className="relative bg-[#F9F9FB] py-14 lg:py-16 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-300 pb-5 mb-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <Workflow className="size-3 text-black" />
              <span>QUALITY WORKFLOW</span>
            </span>
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              OUR PROCESS
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-800 bg-white border border-slate-300 px-3.5 py-1.5 rounded-full shadow-sm shrink-0">
            <CheckCircle2 className="size-3.5 text-black" />
            <span>5-STEP AUDIT WORKFLOW</span>
          </div>
        </div>

        {/* Compact 5-Step Horizontal Process Rail */}
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-2">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="snap-start shrink-0 w-[200px] sm:w-[230px] rounded-2xl border border-slate-300 bg-white p-4 flex flex-col justify-between shadow-sm hover:border-black transition-all"
            >
              <div>
                <span className="text-sm font-black text-black bg-brand px-2.5 py-0.5 rounded-md inline-block mb-3 font-mono border border-black/10">
                  {s.step}
                </span>
                <h3 className="text-base font-black uppercase text-[#0B0D0A] mb-1.5 tracking-tight">
                  {s.title}
                </h3>
                <p className="text-[11px] text-slate-600 leading-relaxed font-normal">
                  {s.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-widest text-slate-400">
                <CheckCircle2 className="size-3 text-black" />
                <span>STEP {s.step}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
