"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Award, MapPin } from "lucide-react"

export function BrandIntroEditorial() {
  return (
    <section className="relative bg-[#F9F9FB] py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              ESTABLISHED 2019
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-tight">
              WELCOME BACK TO <br />
              <span className="text-black underline decoration-brand decoration-4 underline-offset-4">PERFECTION.</span>
            </h2>
            <p className="mt-4 text-xs font-black uppercase tracking-widest text-slate-500">
              THE BOSS OF DETAILERS · LUDHIANA &amp; JAMMU
            </p>
          </div>

          <div className="lg:col-span-6 border-l border-slate-300 pl-0 lg:pl-10 space-y-4">
            <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
              Mr. Detailer is a premier automotive restoration and surface protection studio operating in Punjab and Jammu. We specialize in high-end paint protection film application, multi-stage paint correction, and nano-ceramic surface coatings for luxury vehicles.
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-bold text-slate-700">
              <span className="flex items-center gap-1.5"><MapPin className="size-4 text-black" /> Sarabha Nagar, Ludhiana</span>
              <span className="flex items-center gap-1.5"><MapPin className="size-4 text-black" /> Jammu City, J&K</span>
              <span className="flex items-center gap-1.5"><Award className="size-4 text-black" /> 4.9 Google Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function FeaturedPPFEditorial() {
  return (
    <section className="relative bg-[#F9F9FB] py-20 text-[#0B0D0A] border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-300 bg-white p-8 sm:p-14 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
                <ShieldCheck className="size-4 text-black" />
                <span>FLAGSHIP PROTECTIVE ARMOR</span>
              </span>

              <h3 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-[#0B0D0A] leading-none">
                PAINT PROTECTION <br /> FILM (PPF)
              </h3>

              <p className="mt-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                Our flagship self-healing optical film insulates your vehicle’s factory finish from stone chips, road debris, bug acids, and harsh UV yellowing. Precision computer-cut patterns guarantee seamless coverage.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0B0D0A] px-7 py-3.5 text-xs font-black text-brand hover:bg-brand hover:text-black transition-all uppercase tracking-widest shadow-lg"
                >
                  <span>DISCOVER PPF ARMOR</span>
                  <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-200 shadow-md">
              <Image
                src="/images/IMG_20260809_180906.jpg.jpeg"
                alt="Flagship Paint Protection Film"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
