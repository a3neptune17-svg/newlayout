"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, ShieldCheck, Gauge, Droplets, ArrowUpRight, Check, Clock } from "lucide-react"

const SERVICES_CATALOG = [
  {
    id: "ceramic",
    title: "9H CERAMIC COATING",
    badge: "NANO GLASS MATRIX",
    tag: "COATING",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    duration: "1-2 Studio Days",
    desc: "Permanent 9H hydrophobic nano-glass coating chemically bonding to paint, carbon fiber, and wheels to resist UV oxidation, bird acid, and swirl marks.",
    specs: ["9H HARDNESS MATRIX", "HYDROPHOBIC BEAD ANGLE", "UV YELLOWING DEFENSE", "DIGITAL VIN WARRANTY"],
  },
  {
    id: "ppf",
    title: "PAINT PROTECTION FILM",
    badge: "10-MIL SELF-HEALING ARMOR",
    tag: "PROTECTION",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    duration: "2-3 Studio Days",
    desc: "Insulate paintwork from stone chips, road debris, and key scratches with 10-mil self-healing polyurethane film cut via computer templates.",
    specs: ["SELF-HEALING CLEARCOAT", "HIGH-IMPACT CHIP ARMOR", "COMPUTER PATTERN CUT", "NON-YELLOWING GUARANTEE"],
  },
  {
    id: "correction",
    title: "PAINT CORRECTION",
    badge: "SWIRL-FREE RESTORATION",
    tag: "RESTORATION",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Gauge,
    duration: "1-2 Studio Days",
    desc: "Multi-stage machine polishing utilizing precision rotary pads and abrasive compounds to eliminate 90%+ of paint scratches and swirl marks.",
    specs: ["PAINT DEPTH GAUGE MAPPING", "SWIRL & SCRATCH REMOVAL", "FACTORY CLEAR RESTORATION", "50-POINT LED AUDIT"],
  },
  {
    id: "interior",
    title: "INTERIOR SPA",
    badge: "CABIN SANITIZATION",
    tag: "CABIN CARE",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Droplets,
    duration: "4-6 Studio Hours",
    desc: "Deep hot steam decontamination, pH-neutral leather conditioning, ozone odor elimination, and matte UV dashboard shielding.",
    specs: ["HOT STEAM SANITIZE", "LEATHER NOURISHING SPA", "OZONE ODOUR PURIFY", "MATTE UV TRIM GUARD"],
  },
]

export function Services01() {
  const [activeId, setActiveId] = useState("ceramic")
  const activeService = SERVICES_CATALOG.find((s) => s.id === activeId) || SERVICES_CATALOG[0]
  const Icon = activeService.icon

  return (
    <section id="services" className="relative bg-[#F9F9FB] text-slate-950 py-16 lg:py-24 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              STUDIO DISCIPLINED CARE
            </span>
            <h2 className="mt-3 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              OUR DETAILING <span className="underline decoration-brand decoration-4 underline-offset-4">SERVICES</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md font-medium">
            Select a service category below to reveal technical specifications, active studio photography, and key service metrics.
          </p>
        </div>

        {/* Interactive Selector Tabs (Secondary Services arranged visually) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          {SERVICES_CATALOG.map((srv) => {
            const TabIcon = srv.icon
            const isSelected = activeId === srv.id
            return (
              <button
                key={srv.id}
                onClick={() => setActiveId(srv.id)}
                className={`flex items-center gap-3 p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-950 text-white border-slate-950 shadow-xl ring-2 ring-brand"
                    : "bg-white text-slate-900 border-slate-300 hover:border-black hover:bg-slate-50"
                }`}
              >
                <span className={`flex size-10 items-center justify-center rounded-xl border shrink-0 ${
                  isSelected ? "bg-white/10 border-white/20 text-brand" : "bg-slate-100 border-slate-200 text-black"
                }`}>
                  <TabIcon className="size-5" />
                </span>
                <div>
                  <span className={`text-[10px] font-black uppercase tracking-widest block ${
                    isSelected ? "text-brand" : "text-slate-500"
                  }`}>
                    {srv.tag}
                  </span>
                  <span className="text-xs sm:text-sm font-black uppercase tracking-tight leading-tight block truncate">
                    {srv.title}
                  </span>
                </div>
              </button>
            )
          })}
        </div>

        {/* ONE LARGE FEATURED SERVICE DISPLAY */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Large Image Showcase */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-md group">
                <Image
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-md border border-black/10">
                  {activeService.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1 text-xs font-bold text-white border border-white/10">
                    <Clock className="size-3.5 text-brand" /> {activeService.duration}
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-brand bg-black/80 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
                    STUDIO CERTIFIED
                  </span>
                </div>
              </div>

              {/* Specification & Content Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                      {activeService.badge}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 leading-none">
                    {activeService.title}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {activeService.desc}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                    TECHNICAL INCLUSIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeService.specs.map((spec) => (
                      <div key={spec} className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-slate-50 p-3 rounded-xl border border-slate-200">
                        <Check className="size-3.5 text-black shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                    INQUIRE TAILORED SPECIFICATION
                  </span>
                  <Link
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black transition-all shadow-md"
                  >
                    <span>BOOK {activeService.tag}</span>
                    <ArrowUpRight className="size-4" />
                  </Link>
                </div>
              </div>

            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
