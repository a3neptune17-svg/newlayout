"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, ShieldCheck, Gauge, Droplets, ArrowUpRight, Check, Star, Award } from "lucide-react"

const PACKAGES_DATA = [
  {
    id: "essential",
    name: "Essential Care Package",
    subtitle: "INTERIOR & EXTERIOR MAINTENANCE",
    badge: "ESSENTIAL CARE",
    tag: "ENTRY-LEVEL DETAIL",
    featured: false,
    image: "/images/IMG_20260809_180252.jpg.jpeg",
    icon: Droplets,
    description: "Ideal baseline care for routine vehicle maintenance and crisp daily preservation.",
    features: [
      "Hand wash & gentle microfiber dry",
      "Full interior vacuum & steam wipe-down",
      "Paint sealant & tire dressing application",
      "Interior glass & dashboard UV defense",
    ],
  },
  {
    id: "signature",
    name: "Signature Paint Correction",
    subtitle: "SWIRL-FREE MIRROR FINISH",
    badge: "MOST POPULAR",
    tag: "PAINT RESTORATION",
    featured: true,
    image: "/images/IMG_20260809_180638.jpg.jpeg",
    icon: Gauge,
    description: "Multi-pass machine polishing designed to eliminate 90%+ of light swirls and restore factory depth.",
    features: [
      "Multi-stage machine paint polish & correction",
      "Eliminates 90%+ of swirl marks & light scratches",
      "12-Month hydrophobic synthetic paint sealant",
      "Deep interior spa & leather conditioning",
    ],
  },
  {
    id: "gold-ceramic",
    name: "Gold Ceramic Protection",
    subtitle: "NANO GLASS SHIELD",
    badge: "CERAMIC 9H",
    tag: "ULTIMATE GLOSS",
    featured: false,
    image: "/images/IMG_20260809_181431.jpg.jpeg",
    icon: Sparkles,
    description: "Professional-grade 9H glass coating providing extreme chemical resistance and insane hydrophobic bead gloss.",
    features: [
      "9H nano ceramic body coating application",
      "Full single-stage paint correction prep",
      "Hydrophobic windshield & wheel rim protection",
      "Annual studio maintenance inspection included",
    ],
  },
  {
    id: "platinum-ppf",
    name: "Platinum PPF Body Armor",
    subtitle: "SELF-HEALING FILM",
    badge: "FULL ARMOR",
    tag: "FULL BODY SHIELD",
    featured: false,
    image: "/images/IMG_20260809_181856.jpg.jpeg",
    icon: ShieldCheck,
    description: "Maximum vehicle defense against rock chips, scratches, and harsh environmental contaminants.",
    features: [
      "XPEL 10-mil self-healing film installation",
      "Full front & high-impact zone protection",
      "Ceramic topcoat layer applied over film",
      "Studio VIN warranty against yellowing",
    ],
  },
]

export function Packages01() {
  const [selectedId, setSelectedId] = useState("signature")
  const activePackage = PACKAGES_DATA.find((p) => p.id === selectedId) || PACKAGES_DATA[1]
  const Icon = activePackage.icon

  return (
    <section id="packages" className="relative bg-white py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-widest text-black">
              <Award className="size-3.5 text-black" />
              <span>DETAILING PACKAGES</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              ALL-INCLUSIVE <span className="underline decoration-brand decoration-4 underline-offset-4">STUDIO PACKAGES</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Tailored automotive protection packages engineered for daily drivers, exotic supercars, and collector vehicles.
            </p>
          </div>

          <Link
            href="#booking"
            className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-md shrink-0"
          >
            <span>INQUIRE ALL PACKAGES</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* Package Selector Cards Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {PACKAGES_DATA.map((pkg) => {
            const TabIcon = pkg.icon
            const isSelected = selectedId === pkg.id
            return (
              <button
                key={pkg.id}
                onClick={() => setSelectedId(pkg.id)}
                className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                  isSelected
                    ? "bg-slate-950 text-white border-slate-950 shadow-xl ring-2 ring-brand"
                    : "bg-[#F9F9FB] text-slate-900 border-slate-300 hover:border-black hover:bg-white"
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className={`flex size-8 items-center justify-center rounded-lg border ${
                    isSelected ? "bg-white/10 border-white/20 text-brand" : "bg-white border-slate-200 text-black"
                  }`}>
                    <TabIcon className="size-4" />
                  </span>
                  <span className={`text-[10px] font-black uppercase tracking-widest rounded-full px-2.5 py-0.5 ${
                    isSelected ? "bg-brand text-black" : "bg-slate-200 text-slate-700"
                  }`}>
                    {pkg.badge}
                  </span>
                </div>
                <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight truncate">
                  {pkg.name}
                </h4>
              </button>
            )
          })}
        </div>

        {/* Large Featured Package Showcase */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-[#F9F9FB] p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image Column */}
              <div className="lg:col-span-6 relative h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 group">
                <Image
                  src={activePackage.image}
                  alt={activePackage.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-md border border-black/10">
                  {activePackage.badge}
                </span>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-black uppercase tracking-widest">
                  <span>MR. DETAILER STUDIO</span>
                  <span>{activePackage.tag}</span>
                </div>
              </div>

              {/* Package Content & Inclusions Column */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-slate-950 text-brand">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                      {activePackage.subtitle}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 leading-none">
                    {activePackage.name}
                  </h3>

                  <p className="mt-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                    {activePackage.description}
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-3">
                    WHAT THIS PACKAGE INCLUDES
                  </span>
                  <ul className="space-y-2.5">
                    {activePackage.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs font-bold text-slate-900 bg-white p-3 rounded-xl border border-slate-200 shadow-sm">
                        <Check className="size-4 text-black shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-300 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                    INQUIRE TAILORED QUOTE
                  </span>
                  <Link
                    href="#booking"
                    className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-xs font-black uppercase tracking-widest text-brand hover:bg-brand hover:text-black transition-all shadow-md"
                  >
                    <span>EXPLORE PACKAGE</span>
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
