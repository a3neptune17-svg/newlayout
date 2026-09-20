"use client"

import { Star, ShieldCheck, Quote } from "lucide-react"

const REVIEWS = [
  {
    name: "ALEX R.",
    car: "PORSCHE 911",
    rating: 5,
    tag: "CERAMIC",
    highlight: "FLAWLESS GLOSS",
  },
  {
    name: "PRIYA K.",
    car: "BMW M3",
    rating: 5,
    tag: "PPF",
    highlight: "UNMATCHED QUALITY",
  },
  {
    name: "MARCUS D.",
    car: "AUDI RS6",
    rating: 5,
    tag: "POLISH",
    highlight: "METICULOUS WORK",
  },
  {
    name: "ELENA V.",
    car: "AMG GT",
    rating: 5,
    tag: "INTERIOR",
    highlight: "FACTORY RESTORED",
  },
]

export function MasterRatings() {
  return (
    <section id="ratings" className="relative w-full bg-slate-50 py-16 lg:py-20 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex items-center gap-1 rounded-full bg-brand text-black px-3.5 py-1 text-xs font-black shadow-sm">
                <Star className="size-3.5 fill-black text-black" /> 4.98 ★
              </span>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                STUDIO REVIEWS
              </span>
            </div>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-slate-950 uppercase leading-none">
              RATINGS
            </h2>
          </div>
        </div>

        {/* 4 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {REVIEWS.map((review, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-950 shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-black bg-brand px-2.5 py-0.5 rounded-full shadow-sm">
                    {review.tag}
                  </span>
                </div>

                <Quote className="size-5 text-slate-300 mb-2" />

                <h3 className="text-base font-black uppercase text-slate-950 tracking-tight">
                  {review.highlight}
                </h3>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black uppercase text-slate-950">{review.name}</div>
                  <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">{review.car}</div>
                </div>
                <span className="flex size-7 items-center justify-center rounded-full bg-slate-100 text-slate-900 border border-slate-200">
                  <ShieldCheck className="size-3.5 text-black" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
