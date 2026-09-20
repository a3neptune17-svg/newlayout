"use client"

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck, Sparkles, Layers, ArrowUpRight, CheckCircle2 } from "lucide-react"

const PRIMARY_CATEGORIES = [
  {
    id: "paint-protection",
    title: "PAINT PROTECTION",
    subtitle: "FLAGSHIP SELF-HEALING OPTICAL ARMOR",
    description: "Insulate paintwork from stone chips, scratches, and road debris with 10-mil self-healing PPF film engineered for long-term clarity.",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: ShieldCheck,
    tag: "FLAGSHIP SERVICE",
    services: ["Self-Healing Paint Protection Film (PPF)", "High-Impact Zone Defense", "Custom Pattern Computer Cutting"],
    href: "#contact",
  },
  {
    id: "coatings",
    title: "COATINGS",
    subtitle: "9H NANO CERAMIC & GRAPHENE SHIELD",
    description: "Permanent hydrophobic nano-glass coatings bonding to paint, carbon fiber, and wheels to resist UV yellowing, bird acid, and swirl marks.",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Sparkles,
    tag: "NANO SURFACE SCIENCE",
    services: ["9H Permanent Ceramic Coating", "Graphene Body Armor", "Hydrophobic Glass & Wheel Coating"],
    href: "#contact",
  },
  {
    id: "auto-mods",
    title: "AUTO MODS",
    subtitle: "CUSTOM VEHICLE WRAPS & SUNFILMS",
    description: "Transform vehicle aesthetics with premium color-change vinyl wraps, chrome deletes, and heat-rejection window sunfilms.",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: Layers,
    tag: "AESTHETIC STYLING",
    services: ["Custom Color Vinyl Wraps", "Heat Rejection Window Sunfilms", "Chrome Delete Trim Accent"],
    href: "#contact",
  },
]

export function ThreePrimaryCategoriesSection() {
  return (
    <section id="categories" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              CORE SERVICES
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              OUR THREE <span className="underline decoration-brand decoration-4 underline-offset-4">PRIMARY PILLARS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Precision automotive care organized across three core service disciplines: Paint Protection, Coatings, and Auto Mods.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-md shrink-0"
          >
            <span>DISCOVER ALL SERVICES</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* 3 Giant Vertical Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PRIMARY_CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <div
                key={cat.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-white p-7 transition-all duration-300 hover:border-black hover:shadow-2xl"
              >
                <div>
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl bg-slate-100 mb-6 border border-slate-200">
                    <Image
                      src={cat.image}
                      alt={cat.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                    <span className="absolute top-4 left-4 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-widest text-black shadow-md border border-black/10">
                      {cat.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-slate-100 text-slate-900 border border-slate-200 font-bold">
                      <Icon className="size-5" />
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                      {cat.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black uppercase text-[#0B0D0A] leading-tight">
                    {cat.title}
                  </h3>

                  <p className="mt-3 text-xs text-slate-700 leading-relaxed font-medium">
                    {cat.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <ul className="space-y-2">
                      {cat.services.map((s, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-bold text-slate-900">
                          <CheckCircle2 className="size-3.5 text-black shrink-0" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    MR. DETAILER STUDIO
                  </span>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-black hover:text-brand hover:bg-black px-4 py-2 rounded-full transition-all"
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight className="size-3.5" />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
