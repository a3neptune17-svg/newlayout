"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Building2, CheckCircle2 } from "lucide-react"

export function Franchise01() {
  return (
    <section id="franchise" className="relative bg-[#F9F9FB] py-16 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-xs font-black uppercase text-black border border-black/10">
                <Building2 className="size-3.5 text-black" />
                <span>BUSINESS OPPORTUNITY</span>
              </div>

              <h3 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-slate-950 leading-tight">
                FRANCHISE WITH <span className="underline decoration-brand decoration-4 underline-offset-4">MR. DETAILER</span>
              </h3>

              <p className="mt-3 text-sm text-slate-700 leading-relaxed font-medium max-w-xl">
                Expand the premier detailing and surface protection brand into your city. Benefit from turnkey studio architecture, certified technician training modules, and direct manufacturer vendor access.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-bold text-slate-900">
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-black" /> Studio Design Blueprint</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-black" /> Technician Certification</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="size-4 text-black" /> Marketing Engine</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                href="#booking"
                className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-8 py-4 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-xl"
              >
                <span>FRANCHISE WITH US</span>
                <ArrowUpRight className="size-4" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
