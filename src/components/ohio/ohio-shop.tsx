"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const SHOP_PRODUCTS = [
  { id: "sealant", name: "HYDROPHOBIC CERAMIC SEALANT", category: "SURFACE CARE", image: "/images/IMG_20260809_181336.jpg.jpeg" },
  { id: "ppf-care", name: "XPEL PPF CLEANER & CARE", category: "FILM MAINTENANCE", image: "/images/IMG_20260809_182009.jpg.jpeg" },
  { id: "wheel-rim", name: "9H WHEEL RIM SHIELD", category: "WHEEL ARMOR", image: "/images/IMG_20260809_182044.jpg.jpeg" },
  { id: "microfiber", name: "EDGELESS MICROFIBER TOWEL SET", category: "BUFFING CARE", image: "/images/IMG_20260809_182113.jpg.jpeg" },
]

export function OhioShop() {
  return (
    <section id="shop" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            SHOP SHOWCASE
          </span>
          <span className="text-[10px] font-mono text-white/40">
            DISPLAY ONLY
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10 border-b border-white/10">
          {SHOP_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              className="relative min-h-[360px] bg-[#131512] p-6 flex flex-col justify-between group overflow-hidden border-b sm:border-b-0 border-white/10"
            >
              {/* Image */}
              <Image
                src={prod.image}
                alt={prod.name}
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

              {/* Top Category Tag */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[9px] font-mono font-bold text-[#E5FCA0] uppercase">
                  {prod.category}
                </span>

                <Link
                  href="#contact"
                  className="size-9 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all"
                  aria-label={`Inquire ${prod.name}`}
                >
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </Link>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-base font-black uppercase text-white leading-tight">
                  {prod.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
