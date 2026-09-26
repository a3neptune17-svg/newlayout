"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const DETAILED_SERVICES = [
  {
    id: "ppf",
    num: "01",
    title: "PAINT PROTECTION FILM",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
  },
  {
    id: "graphene",
    num: "02",
    title: "10H GRAPHENE COATING",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
  },
  {
    id: "ceramic",
    num: "03",
    title: "9H NANO CERAMIC",
    image: "/images/IMG_20260809_181431.jpg.jpeg",
  },
  {
    id: "correction",
    num: "04",
    title: "PAINT CORRECTION",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
  },
  {
    id: "interior",
    num: "05",
    title: "LUXURY CABIN SPA",
    image: "/images/IMG_20260809_181254.jpg.jpeg",
  },
]

export function OhioProtection() {
  return (
    <section id="protection" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            PROTECTION
          </span>
          <span className="text-[10px] font-mono text-white/40">
            DISCIPLINARY DISCIPLINES
          </span>
        </div>

        {/* 3-COLUMN IMAGE DOMINANT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-b border-white/10">
          {DETAILED_SERVICES.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="relative min-h-[400px] bg-[#131512] p-8 flex flex-col justify-between group overflow-hidden"
            >
              {/* Image Dominance */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

              {/* Top Item Number */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#E5FCA0]">
                  {item.num}
                </span>
                <Link
                  href="#contact"
                  className="size-9 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all"
                  aria-label={`Inquire ${item.title}`}
                >
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </Link>
              </div>

              {/* Bottom Label Only */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-black uppercase text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom 2-Column Split Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {DETAILED_SERVICES.slice(3, 5).map((item) => (
            <div
              key={item.id}
              className="relative min-h-[340px] bg-[#181A17] p-8 flex flex-col justify-between group overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover opacity-45 group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-[#E5FCA0]">
                  {item.num}
                </span>
                <Link
                  href="#contact"
                  className="size-9 rounded-full border border-white/20 bg-black/50 backdrop-blur-md flex items-center justify-center text-white hover:bg-[#E5FCA0] hover:text-black hover:border-[#E5FCA0] transition-all"
                  aria-label={`Inquire ${item.title}`}
                >
                  <ArrowUpRight className="size-4 stroke-[2.5]" />
                </Link>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-2xl font-black uppercase text-white">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
