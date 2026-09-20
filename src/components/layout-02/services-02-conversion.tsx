"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Sparkles, Gauge, Droplets, ArrowUpRight, Phone, CheckCircle2 } from "lucide-react"

const CONVERSION_SERVICES = [
  {
    id: "ppf",
    title: "Paint Protection Film (PPF)",
    subtitle: "FLAGSHIP AUTOMOTIVE ARMOR",
    tag: "10-MIL SELF-HEALING",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    highlights: ["Self-healing film against chips & scratches", "Zero optical distortion & high gloss finish", "Computer-cut vehicle patterns"],
    startingFrom: "Protection Option Available",
    href: "#contact",
  },
  {
    id: "ceramic",
    title: "Ceramic & Graphene Coating",
    subtitle: "9H NANO SURFACE COATING",
    tag: "EXTREME HYDROPHOBICITY",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    highlights: ["9H Nano-glass chemical & UV defense", "Water-repellent hydrophobic bead gloss", "Preserves paint depth & shine"],
    startingFrom: "Protection Option Available",
    href: "#contact",
  },
  {
    id: "correction",
    title: "Paint Correction & Polish",
    subtitle: "MULTI-STAGE SWIRL RESTORATION",
    tag: "MIRROR FINISH",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    icon: Gauge,
    highlights: ["Multi-pass machine polish under studio lights", "Eliminates 90%+ swirl marks & haze", "Prepares surface for ceramic application"],
    startingFrom: "Restoration Option Available",
    href: "#contact",
  },
  {
    id: "detailing",
    title: "Interior Spa & Car Detailing",
    subtitle: "CABIN PURIFICATION & LEATHER CARE",
    tag: "DEEP STEAM CLEAN",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Droplets,
    highlights: ["Hot water extraction & steam sanitation", "Leather conditioning & UV matte protection", "Ozone cabin air purification"],
    startingFrom: "Detailing Option Available",
    href: "#contact",
  },
]

export function Services02Conversion() {
  const [activeTab, setActiveTab] = useState("ppf")
  const currentService = CONVERSION_SERVICES.find((s) => s.id === activeTab) ?? CONVERSION_SERVICES[0]
  const Icon = currentService.icon

  return (
    <section id="services" className="relative bg-[#0B0D0A] py-16 lg:py-24 text-white border-b border-white/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-8 mb-10">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand bg-brand/10 border border-brand/20 px-3.5 py-1 rounded-full">
              SERVICE DISCOVERY
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-white leading-none">
              SELECT YOUR <span className="text-brand">PROTECTION NEED</span>
            </h2>
            <p className="mt-3 text-sm text-white/60 max-w-xl">
              Explore Mr. Detailer’s core service ecosystem. Select a treatment below for technical details and instant studio inquiry.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/919779397773"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-xs font-black text-brand-foreground hover:bg-white hover:text-black transition-all uppercase tracking-widest shadow-lg shadow-brand/20 shrink-0"
            >
              <Phone className="size-4" />
              <span>WHATSAPP INQUIRY</span>
            </a>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {CONVERSION_SERVICES.map((s) => (
            <button
              key={s.id}
              onClick={() => setActiveTab(s.id)}
              className={`flex shrink-0 items-center gap-2.5 rounded-2xl px-5 py-3 text-xs font-black uppercase tracking-wider transition-all border ${
                activeTab === s.id
                  ? "bg-brand text-brand-foreground border-brand shadow-lg shadow-brand/20"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border-white/10"
              }`}
            >
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Active Service Showcase Card */}
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Image Column */}
            <div className="lg:col-span-6 relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <Image
                src={currentService.image}
                alt={currentService.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-brand-foreground">
                {currentService.tag}
              </span>
            </div>

            {/* Details Column */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex size-10 items-center justify-center rounded-xl bg-brand/10 border border-brand/30 text-brand">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-xs font-black uppercase tracking-widest text-brand">
                    {currentService.subtitle}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
                  {currentService.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {currentService.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-white/80">
                      <CheckCircle2 className="size-4 text-brand shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-black uppercase tracking-widest text-white/50">
                  {currentService.startingFrom}
                </span>

                <Link
                  href={currentService.href}
                  className="inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/20 px-6 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-brand hover:text-black hover:border-brand transition-all"
                >
                  <span>INQUIRE THIS SERVICE</span>
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
