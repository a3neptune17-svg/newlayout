"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, ShieldCheck, Sparkles, Flame } from "lucide-react"

export function CinematicProtectionScenes() {
  return (
    <div className="space-y-0">
      {/* SCENE 1: PPF ARMOR (Full-Bleed Visual Scene) */}
      <section className="relative h-[80vh] min-h-[550px] w-full bg-black text-white flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_20260809_180906.jpg.jpeg"
            alt="PPF Armor Scene"
            fill
            className="object-cover filter brightness-75 contrast-110"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-brand">
            <ShieldCheck className="size-4 text-brand" />
            <span>SCENE 01 · PPF ARMOR</span>
          </div>

          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
            UNCOMPROMISED <br />
            <span className="text-brand">SELF-HEALING DEFENSE</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
            Experience 10-mil optically clear paint protection film engineered to insulate supercar panels from stone chips, debris, and environmental wear.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-xs font-black text-brand-foreground hover:bg-white hover:text-black transition-all uppercase tracking-widest shadow-2xl shadow-brand/30"
          >
            <span>EXPLORE PPF SCENE</span>
            <ArrowUpRight className="size-4 stroke-[3]" />
          </Link>
        </div>
      </section>

      {/* SCENE 2: CERAMIC & GRAPHENE (Full-Bleed Visual Scene) */}
      <section className="relative h-[80vh] min-h-[550px] w-full bg-black text-white flex items-center justify-center overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/IMG_20260809_180823.jpg.jpeg"
            alt="Ceramic & Graphene Scene"
            fill
            className="object-cover filter brightness-75 contrast-110"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-[0.3em] text-brand">
            <Sparkles className="size-4 text-brand" />
            <span>SCENE 02 · NANO COATINGS</span>
          </div>

          <h2 className="text-4xl sm:text-7xl font-black uppercase tracking-tight text-white leading-none">
            9H NANO GLASS &amp; <br />
            <span className="text-brand">GRAPHENE SHIELD</span>
          </h2>

          <p className="text-white/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed drop-shadow">
            Ultra-hydrophobic ceramic and graphene liquid matrices creating an impervious mirror barrier over paintwork, carbon trim, and alloy wheels.
          </p>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-xs font-black text-white hover:bg-brand hover:text-black hover:border-brand transition-all uppercase tracking-widest backdrop-blur-md"
          >
            <span>INQUIRE NANO COATING</span>
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  )
}
