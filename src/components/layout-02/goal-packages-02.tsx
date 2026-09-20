"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Check, Target, ShieldCheck, Sparkles, Layers } from "lucide-react"

const GOALS = [
  { id: "protect", label: "PROTECT MY PAINTWORK", icon: ShieldCheck },
  { id: "refresh", label: "REFRESH & REMOVE SWIRLS", icon: Sparkles },
  { id: "style", label: "CHANGE CAR AESTHETIC", icon: Layers },
]

const GOAL_PACKAGES = {
  protect: [
    {
      name: "GOLD CERAMIC PROTECTION",
      tier: "5-YEAR 9H NANO-GLASS MATRIX",
      desc: "Permanent hydrophobic glass coating preventing UV yellowing, chemical acid etching, and fallout.",
      specs: ["5-Year 9H Nano Glass Coating", "Single-Stage Machine Polish Prep", "Hydrophobic Windshield Armor", "Annual Studio Inspection"],
      href: "#contact",
    },
    {
      name: "PLATINUM PPF BODY ARMOR",
      tier: "10-MIL SELF-HEALING FILM",
      desc: "Ultimate optical barrier defending bumper, bonnet, and full body from stone chips and scratches.",
      specs: ["10-Mil Self-Healing Polyurethane", "Full Frontal Impact Protection", "Ceramic Topcoat Layer Applied", "10-Year Yellowing Guarantee"],
      href: "#contact",
    },
  ],
  refresh: [
    {
      name: "ESSENTIAL CARE SPA",
      tier: "ROUTINE CABIN & PAINT MAINTENANCE",
      desc: "Baseline maintenance treatment restoring crisp daily driver clarity inside and out.",
      specs: ["Hand Wash & Gentle Dry", "Full Interior Steam Extraction", "Synthetic Surface Sealant", "Tire & Glass UV Defense"],
      href: "#contact",
    },
    {
      name: "SIGNATURE PAINT CORRECTION",
      tier: "90%+ SWIRL & MARRING REMOVAL",
      desc: "Multi-pass compounding eliminating swirl marks, oxidation, and buffer trails to factory depth.",
      specs: ["Multi-Stage Machine Polish", "90%+ Swirl Eradication", "12-Month Paint Sealant Layer", "Deep Interior Leather Care"],
      href: "#contact",
    },
  ],
  style: [
    {
      name: "CUSTOM COLOR VINYL WRAP",
      tier: "FULL VEHICLE COLOR CHANGE",
      desc: "Transform vehicle identity with premium matte, satin, or gloss color-change wraps.",
      specs: ["3M / Avery Dennison Premium Vinyl", "Edge Wrapped Seamless Finish", "Original Paint Preserved", "Custom Color Selection"],
      href: "#contact",
    },
    {
      name: "HEAT REJECTION SUNFILMS",
      tier: "CERAMIC WINDOW TINTING",
      desc: "High-performance window sunfilms rejecting 99% UV rays and 90%+ infrared cabin heat.",
      specs: ["99% UV Ray Block", "High Infrared Heat Rejection", "Glare Reduction Optics", "Lifetime Bubble-Free Warranty"],
      href: "#contact",
    },
  ],
}

export function GoalPackages02() {
  const [selectedGoal, setSelectedGoal] = useState<"protect" | "refresh" | "style">("protect")

  const currentPackages = GOAL_PACKAGES[selectedGoal]

  return (
    <section id="packages" className="relative bg-white py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-8 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-slate-100 px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-slate-800">
              <Target className="size-3.5 text-black" />
              <span>STEP 2 · CHOOSE YOUR GOAL</span>
            </div>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              RECOMMENDED <span className="underline decoration-brand decoration-4 underline-offset-4">PACKAGES</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Select what you want to achieve for your car to instantly view matched studio options.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-md"
          >
            <span>DISCOVER ALL</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Goal Selector Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-10">
          {GOALS.map((goal) => {
            const Icon = goal.icon
            const isSelected = selectedGoal === goal.id
            return (
              <button
                key={goal.id}
                type="button"
                onClick={() => setSelectedGoal(goal.id as any)}
                className={`flex items-center justify-between p-5 rounded-2xl transition-all border text-left ${
                  isSelected
                    ? "bg-[#0B0D0A] text-white border-black shadow-xl ring-2 ring-brand"
                    : "bg-slate-50 text-slate-900 border-slate-200 hover:bg-slate-100 hover:border-slate-400"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={`flex size-10 items-center justify-center rounded-xl border ${
                    isSelected ? "bg-white/10 border-white/20 text-brand" : "bg-white border-slate-300 text-black"
                  }`}>
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-wider">{goal.label}</span>
                </div>
                {isSelected && <Check className="size-5 text-brand shrink-0 ml-2" />}
              </button>
            )
          })}
        </div>

        {/* Matched Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentPackages.map((pkg, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-slate-50 p-8 transition-all duration-300 hover:border-black hover:bg-white hover:shadow-2xl"
            >
              <div>
                <span className="inline-block rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black mb-3 border border-black/10">
                  {pkg.tier}
                </span>

                <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#0B0D0A] leading-tight">
                  {pkg.name}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                  {pkg.desc}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <span className="block text-[10px] font-black uppercase tracking-widest text-slate-400 mb-3">
                    WHAT IS INCLUDED
                  </span>
                  <ul className="space-y-2.5">
                    {pkg.specs.map((spec, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs font-bold text-slate-900">
                        <Check className="size-4 text-black shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  MATCHED DECISION OPTION
                </span>
                <Link
                  href={pkg.href}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-black bg-brand hover:bg-black hover:text-white px-5 py-2.5 rounded-full transition-all border border-black/10"
                >
                  <span>SELECT</span>
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
