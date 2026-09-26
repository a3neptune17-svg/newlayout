"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Pause, Play, Sparkles } from "lucide-react"

const HERO_SERVICES = [
  {
    num: "01",
    title: "GRAPHENE COATING",
    desc: "3-yr gloss protection",
    eyebrow: "DETAILING & PAINT PROTECTION STUDIO — 01",
    headlineLine1: "GRAPHENE COATING",
    headlineLine2: "ARMORED BRILLIANCE",
    subtitle: "Advanced 10H graphene oxide formula providing extreme hydrophobicity, heat dissipation, and scratch resilience.",
    ctaText: "BOOK GRAPHENE COATING",
    ctaLink: "#contact",
    video: "/videos/video-project-2.mp4",
  },
  {
    num: "02",
    title: "PAINT PROTECTION FILM",
    desc: "Self-healing film",
    eyebrow: "XPEL CERTIFIED INSTALLERS — 02",
    headlineLine1: "SELF-HEALING PPF",
    headlineLine2: "INVISIBLE ARMOR",
    subtitle: "Optically clear, high-impact polyurethane film engineered to absorb stone chips and self-heal swirl marks under sunlight.",
    ctaText: "BOOK PPF INSTALLATION",
    ctaLink: "#contact",
    video: "/videos/gemini_generated_video_8cab5f87.mp4",
  },
  {
    num: "03",
    title: "CERAMIC COATING",
    desc: "High-gloss finish",
    eyebrow: "PAINT PROTECTION STUDIO — 03",
    headlineLine1: "DEEP REFLECTION",
    headlineLine2: "PERMANENT SHINE",
    subtitle: "9H glass-matrix chemical bond sealing clear coat against UV oxidation, chemical etchings, and bird droppings.",
    ctaText: "BOOK CERAMIC COATING",
    ctaLink: "#contact",
    video: "/videos/video-project-2.mp4",
  },
  {
    num: "04",
    title: "PAINT CORRECTION",
    desc: "Swirl-free paint",
    eyebrow: "PRECISION FINISHING — 04",
    headlineLine1: "RAKING LIGHT PRECISION",
    headlineLine2: "ZERO DEFECTS",
    subtitle: "Microscopic pad-and-compound leveling to eradicate up to 95% of swirl marks and buffer trails.",
    ctaText: "BOOK PAINT CORRECTION",
    ctaLink: "#contact",
    video: "/videos/gemini_generated_video_8cab5f87.mp4",
  },
  {
    num: "05",
    title: "INTERIOR DETAILING",
    desc: "Deep-clean cabin",
    eyebrow: "LUXURY CABIN CARE — 05",
    headlineLine1: "BESPOKE INTERIOR",
    headlineLine2: "FACTORY FRESH",
    subtitle: "Steam extraction, organic leather conditioning, Alcantara revival, and ozone air sanitization.",
    ctaText: "BOOK INTERIOR DETAIL",
    ctaLink: "#contact",
    video: "/videos/video-project-2.mp4",
  },
]

export function Master2Hero() {
  const [activeCard, setActiveCard] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const currentService = HERO_SERVICES[activeCard]

  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isPlaying, activeCard])

  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % HERO_SERVICES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, activeCard])

  return (
    <section className="relative flex min-h-[92vh] w-full flex-col justify-between overflow-hidden bg-[#0B0D0A] text-white">
      {/* Background Video Layer */}
      <AnimatePresence mode="wait">
        <motion.video
          key={currentService.video}
          ref={videoRef}
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover filter brightness-[0.45] contrast-[1.05]"
        >
          <source src={currentService.video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/50 to-[#0B0D0A]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0D0A]/40 to-[#0B0D0A]/90 pointer-events-none" />

      {/* Main Center Content Area: Brand Logo Focal Point */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex-1 flex flex-col items-center justify-center text-center">
        
        {/* PRIMARY FOCAL POINT: MR. DETAILER LOGO (Integrated into video - NO card/box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group mb-8 flex flex-col items-center"
        >
          {/* Crisp White Glass Backdrop Capsule for 100% Logo Visibility over Dark Video */}
          <div className="relative inline-flex items-center justify-center px-8 sm:px-12 py-3.5 sm:py-4.5 rounded-2xl bg-white/95 backdrop-blur-md border border-white/50 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_20px_rgba(255,255,255,0.2)] transition-all hover:scale-[1.02]">
            <Image
              src="/logo.png"
              alt="Mr. Detailer Studio"
              width={360}
              height={110}
              className="h-14 sm:h-20 lg:h-24 w-auto object-contain"
              priority
            />
          </div>

          <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 px-4 py-1.2 text-[10px] font-black uppercase tracking-[0.3em] text-brand shadow-lg">
            <Sparkles className="size-3 text-brand" /> AUTOMOTIVE CRAFTSMANSHIP & SURFACE SCIENCE
          </span>
        </motion.div>

        {/* SECONDARY ELEMENT: Dynamic Service Heading */}
        <div className="w-full max-w-3xl min-h-[160px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col items-center space-y-3"
            >
              <div className="flex items-center gap-2 text-white/60">
                <span className="h-px w-6 bg-brand" />
                <span className="text-[11px] font-mono font-extrabold uppercase tracking-[0.25em]">
                  {currentService.eyebrow}
                </span>
                <span className="h-px w-6 bg-brand" />
              </div>

              {/* Smaller, Subordinate Dynamic Heading */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white leading-tight drop-shadow-lg">
                {currentService.headlineLine1} —{" "}
                <span className="text-brand font-black">{currentService.headlineLine2}</span>
              </h2>

              <p className="text-xs sm:text-sm text-white/75 leading-relaxed max-w-xl font-normal">
                {currentService.subtitle}
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href={currentService.ctaLink}
                  className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-3 text-xs font-black uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all shadow-xl hover:scale-105"
                >
                  {currentService.ctaText}
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-3 text-xs font-black uppercase tracking-widest text-white hover:bg-white/20 transition-colors border border-white/10"
                >
                  <span>EXPLORE SERVICES</span>
                  <ArrowUpRight className="size-4 text-brand" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Horizontal Slider Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="relative z-20 w-full border-t border-white/10 bg-black/80 backdrop-blur-md"
      >
        <div className="mx-auto flex max-w-7xl items-stretch">
          <button
            type="button"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label="Toggle Auto-Slide"
            className="hidden sm:flex items-center justify-center px-6 border-r border-white/10 text-white/60 hover:text-brand transition-colors group"
          >
            {isPlaying ? <Pause className="size-4 group-hover:scale-110" /> : <Play className="size-4 group-hover:scale-110" />}
          </button>

          <div className="grid grid-cols-2 sm:grid-cols-5 flex-1 divide-x divide-white/10">
            {HERO_SERVICES.map((srv, idx) => {
              const isActive = activeCard === idx
              return (
                <button
                  key={srv.num}
                  onClick={() => setActiveCard(idx)}
                  className={`relative p-3 sm:p-4 text-left transition-all cursor-pointer group ${
                    isActive ? "bg-white/10 text-white" : "bg-transparent text-white/70 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      key={`timer-${activeCard}-${isPlaying}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: isPlaying ? 1 : 0 }}
                      transition={{ duration: isPlaying ? 5 : 0, ease: "linear" }}
                      className="absolute top-0 left-0 right-0 h-0.5 bg-brand origin-left"
                    />
                  )}
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-0.5 font-mono">
                    {srv.num}
                  </span>
                  <h4 className="text-xs font-black uppercase tracking-tight text-white group-hover:text-brand transition-colors truncate">
                    {srv.title}
                  </h4>
                  <p className="text-[10px] text-white/50 font-normal truncate mt-0.5">
                    {srv.desc}
                  </p>
                </button>
              )
            })}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
