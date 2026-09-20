"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, BookOpen } from "lucide-react"

const ARTICLES_INSIGHTS = [
  {
    id: 1,
    title: "HOW TO MAINTAIN CERAMIC COATINGS FOR MAXIMUM GLOSS",
    subtitle: "COMPLETE MAINTENANCE GUIDE",
    desc: "Essential pH-neutral washing protocols, topper sealant applications, and studio inspection intervals to preserve your 9H glass shield.",
    category: "MAINTENANCE GUIDE",
    tag: "9H NANO CARE",
    image: "/images/IMG_20260809_180823.jpg.jpeg",
    featured: true,
    href: "#contact",
  },
  {
    id: 2,
    title: "CAN YOU USE SNOW FOAM DAILY FOR PRE-WASHING?",
    subtitle: "PRE-WASH TECHNIQUES",
    desc: "Understanding pre-wash surfactant chemistry and touchless dirt encapsulation.",
    category: "WASH TECHNIQUES",
    tag: "FOAM CARE",
    image: "/images/IMG_20260809_180906.jpg.jpeg",
    featured: false,
    href: "#contact",
  },
  {
    id: 3,
    title: "THE ART OF MULTI-STAGE MACHINE POLISHING",
    subtitle: "PAINT RESTORATION",
    desc: "Pad-and-compound pairing to eradicate up to 95% of swirl defects under LED light.",
    category: "PAINT RESTORATION",
    tag: "SWIRL-FREE",
    image: "/images/IMG_20260809_181154.jpg.jpeg",
    featured: false,
    href: "#contact",
  },
]

export function MasterBlog() {
  return (
    <section id="insights" className="relative bg-white py-16 lg:py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-6 mb-10">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black mb-2 shadow-sm">
              <BookOpen className="size-3 text-black" />
              <span>EDITORIAL &amp; GUIDES</span>
            </span>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
              BLOGS &amp; <span className="underline decoration-slate-300 decoration-4 underline-offset-4">INSIGHTS</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#0B0D0A] hover:text-slate-600 transition-colors pb-1 border-b border-slate-300 hover:border-black shrink-0"
          >
            <span>EXPLORE ALL GUIDES</span>
            <ArrowUpRight className="size-4 text-black" />
          </Link>
        </div>

        {/* Horizontal Editorial Scroll Rail */}
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-none pb-4">
          
          {/* Featured Editorial Card */}
          <Link
            href="#contact"
            className="snap-start shrink-0 w-[320px] sm:w-[460px] lg:w-[500px] group relative flex h-[380px] sm:h-[440px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-black transition-all duration-500 hover:border-black hover:shadow-xl"
          >
            <div className="absolute inset-0 z-0">
              <Image
                src={ARTICLES_INSIGHTS[0].image}
                alt={ARTICLES_INSIGHTS[0].title}
                fill
                className="object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 320px, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="inline-flex items-center rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-black shadow-sm">
                FEATURED EDITORIAL
              </span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                {ARTICLES_INSIGHTS[0].tag}
              </span>
            </div>

            <div className="relative z-10 p-6 max-w-xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-white/70 block mb-1.5">
                {ARTICLES_INSIGHTS[0].subtitle}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-md group-hover:text-white/90 transition-colors">
                {ARTICLES_INSIGHTS[0].title}
              </h3>
              <p className="mt-2 text-xs text-white/75 line-clamp-2 leading-relaxed">
                {ARTICLES_INSIGHTS[0].desc}
              </p>

              <div className="mt-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white group-hover:text-brand">
                <span>READ ARTICLE</span>
                <ArrowUpRight className="size-4 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
            </div>
          </Link>

          {/* Supporting Editorial Cards */}
          {ARTICLES_INSIGHTS.slice(1).map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="snap-start shrink-0 w-[280px] sm:w-[320px] lg:w-[340px] group relative flex h-[380px] sm:h-[440px] flex-col justify-between overflow-hidden rounded-3xl border border-slate-300 bg-black transition-all duration-500 hover:border-black hover:shadow-lg p-6"
            >
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover filter brightness-90 transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 280px, 340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
              </div>

              <div className="relative z-10">
                <span className="inline-flex items-center rounded-full bg-black/80 backdrop-blur-md px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                  {item.category}
                </span>
              </div>

              <div className="relative z-10">
                <h3 className="text-xl font-black uppercase tracking-tight text-white leading-tight group-hover:text-white/90 transition-colors">
                  {item.title}
                </h3>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-white/80 group-hover:text-brand">
                  <span>READ ARTICLE</span>
                  <ArrowUpRight className="size-3.5 text-brand" />
                </div>
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}
