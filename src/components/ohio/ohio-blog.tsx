"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

const ARTICLES = [
  {
    id: "graphene-vs-ceramic",
    date: "MARCH 14, 2026",
    title: "UNDERSTANDING 10H GRAPHENE OXIDE VS TRADITIONAL 9H CERAMIC COATINGS.",
    tag: "PAINT CARE",
  },
  {
    id: "ppf-maintenance",
    date: "FEBRUARY 28, 2026",
    title: "HOW SELF-HEALING XPEL FILM ABSORBS ROAD DEBRIS & STONE CHIPS.",
    tag: "FILM TECH",
  },
]

export function OhioBlog() {
  return (
    <section id="blog" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            BLOG / INSIGHTS
          </span>
          <span className="text-[10px] font-mono text-white/40">
            EDITORIAL JOURNAL
          </span>
        </div>

        {/* TOP STATEMENT BLOCK */}
        <div className="p-8 lg:p-12 bg-[#131512] border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono text-[#E5FCA0] uppercase tracking-widest block">
              ARTICLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
              RECENT NEWS AND INSIGHTS.
            </h2>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#E5FCA0] px-7 py-3 text-xs font-black uppercase tracking-wider text-black hover:bg-white transition-all shadow-md shrink-0 self-start md:self-auto"
          >
            <span>READ ALL ARTICLES</span>
            <ArrowUpRight className="size-4 stroke-[2.5]" />
          </Link>
        </div>

        {/* ARTICLES STRIP */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {ARTICLES.map((art) => (
            <div
              key={art.id}
              className="bg-[#181A17] p-8 lg:p-10 flex flex-col justify-between group min-h-[280px] hover:bg-[#1c1e1b] transition-colors"
            >
              {/* Meta */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-[10px] font-mono font-bold text-[#E5FCA0]">
                  {art.tag}
                </span>
                <span className="text-[10px] font-mono text-white/40">
                  {art.date}
                </span>
              </div>

              {/* Title as Main Visual Element */}
              <div className="my-auto">
                <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-[#E5FCA0] transition-colors leading-tight">
                  {art.title}
                </h3>
              </div>

              {/* Action */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/50">READ JOURNAL</span>
                <div className="size-8 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[#E5FCA0] group-hover:text-black group-hover:border-[#E5FCA0] transition-all">
                  <ArrowUpRight className="size-3.5 stroke-[2.5]" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
