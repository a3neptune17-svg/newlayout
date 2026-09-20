"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowUpRight, Sparkles, Layers, ShieldCheck, Wrench } from "lucide-react"

const FEATURED_RANGE_LINKS = [
  { name: "POLISHES & COMPOUNDS", href: "/shop" },
  { name: "MACHINE POLISHERS", href: "/shop" },
  { name: "CERAMIC APPLICATORS", href: "/shop" },
  { name: "MICROFIBER & PADS", href: "/shop" },
]

const SAMPLE_PRODUCTS = [
  {
    id: "prod-1",
    name: "PRO CUTTING COMPOUND",
    category: "PAINT CORRECTION",
    tag: "STUDIO GRADE",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    icon: Wrench,
    spec: "500ML · HEAVY CUT",
    href: "#contact",
  },
  {
    id: "prod-2",
    name: "NANO CERAMIC TOPCOAT",
    category: "SURFACE COATING",
    tag: "9H GLOSS SHIELD",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    icon: Sparkles,
    spec: "50ML · HYDROPHOBIC",
    href: "#contact",
  },
  {
    id: "prod-3",
    name: "INTERIOR LEATHER CARE SPA",
    category: "CABIN DETAILING",
    tag: "MATTE UV DEFENSE",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
    icon: ShieldCheck,
    spec: "500ML · NOURISHING",
    href: "#contact",
  },
]

export function ShopShowcaseSection() {
  return (
    <section id="shop" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      {/* Background Ambient Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-1/3 size-96 rounded-full bg-brand/20 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-brand px-3.5 py-1 text-xs font-black uppercase tracking-[0.25em] text-black">
              <ShoppingBag className="size-3.5 text-black" />
              <span>STUDIO SUPPLIES</span>
            </div>
            <h2 className="mt-4 text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              PRODUCT <span className="underline decoration-brand decoration-4 underline-offset-4">SHOWCASE</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-medium">
              Explore our curated selection of professional automotive detailing compounds, polishers, and maintenance supplies. (Display Only)
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-md"
          >
            <span>VIEW ALL PRODUCTS</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>

        {/* HERO BANNER CARD — Dark High-Contrast Statement Card */}
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-[#0B0D0A] p-8 sm:p-12 mb-12 shadow-2xl text-white">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/IMG_20260809_181154.jpg.jpeg"
              alt="Machine Polishing Range"
              fill
              className="object-cover opacity-40 filter brightness-90 contrast-110"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0A] via-[#0B0D0A]/90 to-transparent" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-brand flex items-center gap-2">
              <Layers className="size-4 text-brand" />
              <span>PAINT CORRECTION RANGE</span>
            </span>

            <h3 className="mt-3 text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-none">
              MACHINE <br /> POLISHING
            </h3>

            <p className="mt-4 text-sm sm:text-base text-white/70 leading-relaxed max-w-xl font-medium">
              Precision polishing compounds, pads, and dual-action machinery engineered for professional paint restoration and swirl-free clarity.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-xs font-black text-black hover:bg-white hover:text-black transition-all uppercase tracking-widest shadow-lg shadow-brand/20"
              >
                <span>EXPLORE RANGE</span>
                <ArrowUpRight className="size-4 stroke-[3]" />
              </Link>
            </div>

            {/* Quick Links List */}
            <div className="mt-10 pt-6 border-t border-white/15">
              <span className="block text-[10px] font-black uppercase tracking-widest text-white/40 mb-3">
                EXPLORE THIS RANGE
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {FEATURED_RANGE_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-white/80 hover:text-brand transition-colors bg-white/10 border border-white/10 px-3.5 py-2 rounded-xl"
                  >
                    <span className="truncate">{link.name}</span>
                    <ArrowUpRight className="size-3.5 text-brand shrink-0 ml-1" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3-COLUMN PRODUCT DISPLAY GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_PRODUCTS.map((prod) => {
            const Icon = prod.icon
            return (
              <div
                key={prod.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-white p-6 transition-all duration-300 hover:border-black hover:shadow-xl"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-6 bg-slate-100 border border-slate-200">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-md border border-black/10">
                    {prod.category}
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10">
                    <Icon className="size-3 text-brand" />
                    {prod.spec}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {prod.tag}
                  </span>
                  <h4 className="text-xl font-black uppercase text-[#0B0D0A] group-hover:text-black transition-colors leading-tight mt-1">
                    {prod.name}
                  </h4>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    STUDIO DISPLAY ONLY
                  </span>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-black hover:text-brand hover:bg-black px-4 py-1.5 rounded-full transition-all"
                  >
                    <span>EXPLORE</span>
                    <ArrowUpRight className="size-4" />
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
