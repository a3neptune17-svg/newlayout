"use client"

import { CheckCircle2, Users } from "lucide-react"

const PROCESS_STEPS = [
  { step: "01", title: "INSPECT", desc: "Digital paint depth gauge reading & panel-by-panel studio LED inspection." },
  { step: "02", title: "PREPARE", desc: "pH-neutral snow foam wash, iron fallout removal & clay bar surface decontamination." },
  { step: "03", title: "WORK", desc: "XPEL PPF installation or multi-stage machine paint correction execution." },
  { step: "04", title: "CHECK", desc: "Hydrophobic cure audit, gloss meter reading & 50-point quality assurance check." },
  { step: "05", title: "DELIVER", desc: "Digital VIN warranty registration, aftercare guide handover & client delivery." },
]

export function Process01() {
  return (
    <section id="process" className="relative bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              STUDIO STANDARDS
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              OUR PROCESS &amp; <span className="underline decoration-brand decoration-4 underline-offset-4">TEAM ETHOS</span>
            </h2>
            <p className="mt-3 text-sm text-slate-600 max-w-xl font-medium">
              Every vehicle entering Mr. Detailer undergoes a structured 5-step quality assurance workflow managed by certified technicians.
            </p>
          </div>

          <div className="flex items-center gap-3 text-xs font-bold text-slate-900 bg-slate-100 border border-slate-300 px-4 py-2.5 rounded-2xl shadow-sm shrink-0">
            <Users className="size-4 text-black" />
            <span>XPEL &amp; CERAMIC CERTIFIED TEAM</span>
          </div>
        </div>

        {/* 5 Process Steps Horizontal / Grid Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {PROCESS_STEPS.map((s) => (
            <div
              key={s.step}
              className="rounded-3xl border border-slate-300 bg-[#F9F9FB] p-6 flex flex-col justify-between shadow-md hover:border-black hover:bg-white transition-all"
            >
              <div>
                <span className="text-3xl font-black text-black bg-brand px-3 py-1 rounded-xl inline-block mb-4">
                  {s.step}
                </span>
                <h3 className="text-lg font-black uppercase text-slate-950 mb-2 tracking-tight">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed font-medium">{s.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-slate-500">
                <CheckCircle2 className="size-3.5 text-black" />
                <span>VERIFIED</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
