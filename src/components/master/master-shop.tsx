"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, ArrowUpRight, Sparkles, ShieldCheck, Wrench } from "lucide-react"

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

export function MasterShop() {
  return (
    <section id="shop" className="relative bg-[#F9F9FB] py-16 lg:py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Concise Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <ShoppingBag className="size-3 text-black" />
              <span>PRODUCT DISPLAY</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              SHOP
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-6 py-3 text-xs font-black text-white hover:bg-brand hover:text-black transition-all uppercase tracking-widest shrink-0 shadow-sm"
          >
            <span>EXPLORE PRODUCTS</span>
            <ArrowUpRight className="size-4 text-brand" />
          </Link>
        </div>

        {/* Compact Horizontal Product Display Rail */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          {SAMPLE_PRODUCTS.map((prod) => {
            const Icon = prod.icon
            return (
              <div
                key={prod.id}
                className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-white p-5 transition-all duration-300 hover:border-black hover:shadow-md"
              >
                <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4 bg-slate-100 border border-slate-200">
                  <Image
                    src={prod.image}
                    alt={prod.name}
                    fill
                    className="object-cover filter brightness-95 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 280px, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <span className="absolute top-3 left-3 rounded-full bg-brand px-3 py-0.5 text-[9px] font-black uppercase tracking-wider text-black shadow-sm">
                    {prod.category}
                  </span>

                  <span className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-lg bg-black/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-bold text-white border border-white/10">
                    <Icon className="size-3 text-brand" />
                    {prod.spec}
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                    {prod.tag}
                  </span>
                  <h3 className="text-lg font-black uppercase text-[#0B0D0A] leading-tight mt-1">
                    {prod.name}
                  </h3>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                    STUDIO DISPLAY
                  </span>
                  <Link
                    href={prod.href}
                    className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-widest text-black hover:text-black hover:bg-brand px-3.5 py-1.5 rounded-full transition-all"
                  >
                    <span>INQUIRE</span>
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
