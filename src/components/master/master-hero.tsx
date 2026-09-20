"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Pause, Play } from "lucide-react"

const HERO_SERVICES = [
  {
    num: "01",
    title: "GRAPHENE COATING",
    desc: "3-yr gloss protection",
    eyebrow: "DETAILING & PAINT PROTECTION STUDIO — 01",
    headlineLine1: "GRAPHENE COATING,",
    headlineLine2: "ARMORED BRILLIANCE.",
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
    headlineLine1: "SELF-HEALING PPF,",
    headlineLine2: "INVISIBLE ARMOR.",
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
    headlineLine1: "DEEP REFLECTION,",
    headlineLine2: "PERMANENT SHINE.",
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
    headlineLine1: "RAKING LIGHT PRECISION,",
    headlineLine2: "ZERO DEFECTS.",
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
    headlineLine1: "BESPOKE INTERIOR,",
    headlineLine2: "FACTORY FRESH.",
    subtitle: "Steam extraction, organic leather conditioning, Alcantara revival, and ozone air sanitization.",
    ctaText: "BOOK INTERIOR DETAIL",
    ctaLink: "#contact",
    video: "/videos/video-project-2.mp4",
  },
]

export function MasterHero() {
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
    <section className="relative flex min-h-[90vh] w-full flex-col justify-between overflow-hidden bg-[#0B0D0A] text-white">
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
          className="absolute inset-0 h-full w-full object-cover filter brightness-[0.55] contrast-105"
        >
          <source src={currentService.video} type="video/mp4" />
        </motion.video>
      </AnimatePresence>

      {/* Ambient Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0A] via-[#0B0D0A]/40 to-[#0B0D0A]/70 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D0A]/90 via-[#0B0D0A]/50 to-transparent pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCard}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="max-w-4xl space-y-6"
          >
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-brand" />
              <span className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                {currentService.eyebrow}
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.92] drop-shadow-2xl">
              {currentService.headlineLine1} <br />
              <span className="text-white/90">{currentService.headlineLine2}</span>
            </h1>

            <p className="text-sm sm:text-base text-white/75 leading-relaxed max-w-2xl font-normal">
              {currentService.subtitle}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-6">
              <Link
                href={currentService.ctaLink}
                className="inline-flex items-center justify-center rounded-full bg-brand px-9 py-3.5 text-xs font-black uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all shadow-lg hover:scale-105"
              >
                {currentService.ctaText}
              </Link>

              <Link
                href="#process"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/90 hover:text-brand transition-colors group"
              >
                <span>OUR WORKFLOW</span>
                <ArrowUpRight className="size-4 text-brand transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
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
                  className={`relative p-4 sm:p-5 text-left transition-all cursor-pointer group ${
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
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-1 font-mono">
                    {srv.num}
                  </span>
                  <h4 className="text-xs sm:text-sm font-black uppercase tracking-tight text-white group-hover:text-brand transition-colors truncate">
                    {srv.title}
                  </h4>
                  <p className="text-[11px] text-white/50 font-normal truncate mt-0.5">
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
