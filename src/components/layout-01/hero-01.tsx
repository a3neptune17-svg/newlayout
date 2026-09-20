"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, Award, ShieldCheck, Sparkles } from "lucide-react"

export function Hero01() {
  return (
    <section className="relative flex min-h-[82vh] sm:min-h-[88vh] w-full flex-col justify-center overflow-hidden bg-[#0B0D0A] text-white">
      {/* Background Video Layer */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover filter brightness-90 contrast-105"
      >
        <source src="/videos/video-project-2.mp4" type="video/mp4" />
      </video>

      {/* Dark Vignette Overlay Frame */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/40 to-[#0B0D0A]/70" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl space-y-6">
          
          {/* Studio Badge */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-1.5 text-xs font-black uppercase text-black tracking-widest shadow-lg shadow-brand/20">
              <Award className="size-4 text-black" />
              <span>MR. DETAILER STUDIO</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-4 py-1.5 text-xs font-black uppercase tracking-widest text-white border border-white/15">
              <span>LUDHIANA &amp; JAMMU</span>
            </span>
          </motion.div>

          {/* Big Bold Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl"
          >
            THE BOSS <br />
            <span className="text-brand">OF DETAILERS.</span>
          </motion.h1>

          {/* Short Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-xs sm:text-sm font-black uppercase tracking-[0.3em] text-white/90 max-w-2xl drop-shadow-md"
          >
            PRECISION PAINT CORRECTION · 9H CERAMIC SHIELD · XPEL SELF-HEALING PPF
          </motion.p>

          {/* Clear Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="pt-4 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#booking"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-4 text-xs font-black uppercase tracking-widest text-black hover:bg-white transition-all shadow-2xl shadow-brand/20 hover:scale-105"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowUpRight className="size-4 stroke-[3]" />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/50 backdrop-blur-md px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:border-brand hover:text-brand transition-all"
            >
              <span>EXPLORE SERVICES</span>
            </Link>
          </motion.div>

          {/* Bottom Highlights Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="pt-8 mt-8 border-t border-white/15 flex flex-wrap items-center gap-8 text-xs font-black tracking-widest text-white/80 uppercase"
          >
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" />
              <span>XPEL CERTIFIED</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="size-4 text-brand" />
              <span>9H GLASS MATRIX</span>
            </div>
            <div>
              <span className="text-brand font-black text-sm">4,800+</span> VEHICLES ARMORED
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
