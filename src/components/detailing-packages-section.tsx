"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Sparkles, ShieldCheck, Gauge, Droplets, ArrowUpRight, Check, Award, Star } from "lucide-react"

const PACKAGES = [
  {
    id: "essential",
    name: "Essential Care Package",
    subtitle: "INTERIOR & EXTERIOR MAINTENANCE",
    price: "ESSENTIAL",
    priceSub: "Custom Quote",
    badge: "ESSENTIAL",
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
    href: "#contact",
  },
  {
    id: "signature",
    name: "Signature Paint Correction",
    subtitle: "SWIRL-FREE MIRROR FINISH",
    price: "MOST POPULAR",
    priceSub: "Tailored Package",
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
    href: "#contact",
  },
  {
    id: "gold-ceramic",
    name: "Gold Ceramic Protection",
    subtitle: "NANO GLASS COATING",
    price: "CERAMIC 9H",
    priceSub: "VIN Warranty",
    badge: "9H SHIELD",
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
    href: "#contact",
  },
  {
    id: "platinum-ppf",
    name: "Platinum PPF Body Armor",
    subtitle: "SELF-HEALING FILM",
    price: "FULL ARMOR",
    priceSub: "XPEL Certified",
    badge: "FULL BODY",
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
    href: "#contact",
  },
]

export function DetailingPackagesSection() {
  const [selectedId, setSelectedId] = useState("signature")

  return (
    <section id="packages" className="relative bg-white py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-1/4 size-96 rounded-full bg-brand/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 bottom-1/4 size-96 rounded-full bg-brand/20 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
              <Award className="size-3.5 text-black" />
              <span>DETAILING PACKAGES</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              ALL-INCLUSIVE <span className="underline decoration-brand decoration-4 underline-offset-4">STUDIO PACKAGES</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-medium">
              Tailored automotive protection packages engineered for daily drivers, exotic cars, and collector vehicles.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-md shrink-0"
          >
            <span>INQUIRE ALL PACKAGES</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>

        {/* Package Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => {
            const Icon = pkg.icon
            const isSelected = selectedId === pkg.id

            return (
              <motion.div
                key={pkg.id}
                onMouseEnter={() => setSelectedId(pkg.id)}
                className={`relative flex flex-col justify-between rounded-3xl border transition-all duration-500 overflow-hidden cursor-pointer p-6 sm:p-7 ${
                  pkg.featured
                    ? "bg-[#0B0D0A] text-white border-black shadow-2xl shadow-black/20 ring-2 ring-brand"
                    : isSelected
                    ? "bg-slate-900 text-white border-black shadow-xl"
                    : "bg-slate-50 text-[#0B0D0A] border-slate-200 hover:border-black hover:bg-white hover:shadow-lg"
                }`}
              >
                {/* Background Image Layer with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className={`object-cover transition-all duration-700 ${
                      isSelected || pkg.featured ? "opacity-30 scale-105" : "opacity-10"
                    }`}
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  <div className={`absolute inset-0 ${
                    pkg.featured || isSelected
                      ? "bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/90 to-[#0B0D0A]/50"
                      : "bg-gradient-to-t from-white via-white/95 to-white/60"
                  }`} />
                </div>

                {/* Top Badge & Header */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className={`flex size-10 items-center justify-center rounded-2xl border ${
                      pkg.featured || isSelected
                        ? "bg-white/10 border-white/20 text-brand"
                        : "bg-white border-slate-200 text-black shadow-sm"
                    }`}>
                      <Icon className="size-5" />
                    </span>
                    {pkg.featured ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-brand px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider text-black shadow-md border border-black/10">
                        <Star className="size-3 fill-black text-black" />
                        {pkg.badge}
                      </span>
                    ) : (
                      <span className={`rounded-full px-3 py-1 text-[0.65rem] font-black uppercase tracking-wider ${
                        isSelected ? "bg-white/10 text-white" : "bg-slate-200 text-slate-700"
                      }`}>
                        {pkg.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-[10px] font-black uppercase tracking-widest text-brand">
                    {pkg.subtitle}
                  </span>
                  <h3 className={`text-2xl sm:text-3xl font-black uppercase tracking-tight leading-tight mt-1 ${
                    pkg.featured || isSelected ? "text-white" : "text-[#0B0D0A]"
                  }`}>
                    {pkg.name}
                  </h3>
                  <p className={`mt-2 text-xs line-clamp-2 leading-relaxed ${
                    pkg.featured || isSelected ? "text-white/70" : "text-slate-600"
                  }`}>
                    {pkg.description}
                  </p>
                </div>

                {/* Pricing & Features Section */}
                <div className={`relative z-10 mt-6 pt-6 border-t ${
                  pkg.featured || isSelected ? "border-white/15" : "border-slate-200"
                }`}>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl sm:text-4xl font-black text-brand tracking-tight">
                      {pkg.price}
                    </span>
                    <span className={`text-xs uppercase font-semibold ${
                      pkg.featured || isSelected ? "text-white/50" : "text-slate-500"
                    }`}>
                      / {pkg.priceSub}
                    </span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className={`flex items-start gap-2 text-xs font-semibold ${
                        pkg.featured || isSelected ? "text-white/90" : "text-slate-800"
                      }`}>
                        <Check className="size-3.5 text-brand shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Action Link Button */}
                  <Link
                    href={pkg.href}
                    className={`group/btn flex w-full items-center justify-center gap-2 rounded-2xl py-3 px-4 text-xs font-black uppercase tracking-wider transition-all ${
                      pkg.featured
                        ? "bg-brand text-black hover:bg-white hover:text-black shadow-md"
                        : isSelected
                        ? "bg-brand text-black hover:bg-white"
                        : "bg-[#0B0D0A] text-brand hover:bg-brand hover:text-black"
                    }`}
                  >
                    <span>EXPLORE PACKAGE</span>
                    <ArrowUpRight className="size-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
