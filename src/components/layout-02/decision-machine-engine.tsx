"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Gauge, Droplets, Layers, ArrowUpRight, CheckCircle2, Phone } from "lucide-react"

const DECISION_PILLARS = [
  {
    id: "protect",
    name: "PROTECT IT",
    category: "PROTECTION",
    tag: "PPF · CERAMIC · GRAPHENE",
    icon: ShieldCheck,
    title: "FLAGSHIP AUTOMOTIVE ARMOR",
    description: "Insulate paintwork from stone chips, scratches, UV degradation, and chemical etching with 10-mil self-healing PPF and 9H nano ceramic glass.",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    servicesIncluded: ["Paint Protection Film (PPF)", "9H Nano Ceramic Coating", "Graphene Body Armor"],
    benefits: ["Self-healing film against rock chips", "Extreme hydrophobic water bead gloss", "Preserves factory resale value"],
  },
  {
    id: "restore",
    name: "RESTORE IT",
    category: "RESTORATION",
    tag: "PAINT CORRECTION · INTERIOR SPA",
    icon: Gauge,
    description: "Erase 90%+ swirl marks, light scratches, and oxidation while deep-extracting cabin upholstery and conditioning fine leathers.",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    title: "SUB-SURFACE PAINT & CABIN RESTORATION",
    servicesIncluded: ["Multi-Stage Paint Correction", "Hot Water Interior Extraction", "Leather Nourishing & Ozone Purification"],
    benefits: ["Sub-surface level compounding", "Removes 90%+ micro-swirls & haze", "Refreshes interior to showroom state"],
  },
  {
    id: "detail",
    name: "DETAIL IT",
    category: "DETAILING",
    tag: "CAR DETAILING",
    icon: Droplets,
    description: "Comprehensive multi-step studio detail covering engine bay, wheel arches, foam bath, and cabin refresh.",
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    title: "FULL STUDIO CAR DETAILING",
    servicesIncluded: ["Hand Foam Bath & Decontamination", "Wheel Arch & Engine Bay Spa", "Crisp Interior & Dashboard UV Care"],
    benefits: ["Meticulous hand washing & drying", "Restores deep shine & cleanliness", "Ideal routine maintenance care"],
  },
  {
    id: "style",
    name: "STYLE IT",
    category: "STYLING",
    tag: "VEHICLE WRAPS · SUNFILMS",
    icon: Layers,
    description: "Custom color vinyl wraps, chrome deletes, and high-performance heat-rejection window sunfilms.",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    title: "CUSTOM VEHICLE WRAPS & SUNFILMS",
    servicesIncluded: ["Custom Color Vinyl Wraps", "Chrome Delete Trim Accent", "Heat Rejection Window Sunfilms"],
    benefits: ["Personalized aesthetic transformation", "Blocks harmful UV rays & interior heat", "Completely removable without paint damage"],
  },
]

export function DecisionMachineEngine() {
  const [selectedPillarId, setSelectedPillarId] = useState("protect")
  const activePillar = DECISION_PILLARS.find((p) => p.id === selectedPillarId) ?? DECISION_PILLARS[0]
  const Icon = activePillar.icon

  return (
    <section id="decision-engine" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Step 1: Clear Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
            STEP 01 // CHOOSE YOUR NEED
          </span>
          <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
            WHAT DOES YOUR <span className="underline decoration-brand decoration-4 underline-offset-4">CAR NEED?</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 font-medium">
            Select a service pillar below to reveal targeted treatments, benefits, and instant consultation options.
          </p>
        </div>

        {/* 4 Large Choice Buttons (One Decision At A Time) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {DECISION_PILLARS.map((pillar) => {
            const PillarIcon = pillar.icon
            const isSelected = selectedPillarId === pillar.id
            return (
              <button
                key={pillar.id}
                onClick={() => setSelectedPillarId(pillar.id)}
                className={`flex flex-col items-center justify-center p-6 rounded-3xl border text-center transition-all duration-300 ${
                  isSelected
                    ? "bg-[#0B0D0A] text-white border-[#0B0D0A] shadow-xl scale-[1.03]"
                    : "bg-white text-slate-900 border-slate-200 hover:border-slate-400 hover:bg-slate-50"
                }`}
              >
                <span className={`flex size-12 items-center justify-center rounded-2xl mb-3 transition-colors ${
                  isSelected ? "bg-brand text-black" : "bg-slate-100 text-slate-900"
                }`}>
                  <PillarIcon className="size-6" />
                </span>
                <span className="text-sm sm:text-base font-black uppercase tracking-wider">{pillar.name}</span>
                <span className={`text-[10px] font-bold uppercase tracking-widest mt-1 ${
                  isSelected ? "text-brand" : "text-slate-500"
                }`}>
                  {pillar.category}
                </span>
              </button>
            )
          })}
        </div>

        {/* Reveal Targeted Decision Panel */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src={activePillar.image}
                alt={activePillar.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black border border-black/10">
                {activePillar.tag}
              </span>
            </div>

            {/* Right Details & Action Panel */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 font-bold">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-black bg-brand px-3 py-1 rounded-full border border-black/10">
                    {activePillar.category} SELECTION
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#0B0D0A] leading-tight">
                  {activePillar.title}
                </h3>

                <p className="mt-3 text-sm text-slate-700 leading-relaxed font-medium">
                  {activePillar.description}
                </p>

                <div className="mt-6 pt-6 border-t border-slate-200">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-3">
                    SERVICES INCLUDED
                  </span>
                  <ul className="space-y-2">
                    {activePillar.servicesIncluded.map((s, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-900">
                        <CheckCircle2 className="size-4 text-black shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="https://wa.me/919779397773"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-brand px-6 py-3.5 text-xs font-black text-black hover:bg-black hover:text-white transition-all uppercase tracking-widest shadow-md"
                >
                  <Phone className="size-4" />
                  <span>CONSULT VIA WHATSAPP</span>
                </a>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#0B0D0A] px-6 py-3.5 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest"
                >
                  <span>BOOK CONSULTATION</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
