"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react"
import { motion } from "framer-motion"

const STUDIOS = [
  {
    city: "LUDHIANA STUDIO",
    address: "Ferozepur Road, Ludhiana, Punjab 141001",
    phone: "+91 98765 43210",
    timing: "Mon - Sat: 9:30 AM - 7:30 PM",
  },
  {
    city: "JAMMU STUDIO",
    address: "Channi Himmat, Jammu, J&K 180015",
    phone: "+91 98765 43211",
    timing: "Mon - Sat: 9:30 AM - 7:30 PM",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B0D0A] py-16 md:py-24 text-white border-t border-white/10">
      <div aria-hidden className="bg-grain pointer-events-none absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-14"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 px-4 py-1.5 text-xs font-black uppercase tracking-[0.25em] text-brand">
            <Calendar className="size-3.5 text-brand" />
            <span>RESERVE YOUR STUDIO SLOT</span>
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-none">
            BOOK AN <span className="text-brand">APPOINTMENT</span>
          </h2>

          <p className="text-sm sm:text-base text-white/70 max-w-xl mx-auto font-medium">
            Schedule your paint correction, XPEL PPF armor, or 9H nano-ceramic coating appointment at our Ludhiana or Jammu studio.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-10 py-4 text-xs font-black uppercase tracking-widest text-black hover:bg-white transition-transform hover:scale-105 shadow-2xl shadow-brand/20"
            >
              <span>BOOK APPOINTMENT NOW</span>
              <ArrowUpRight className="size-4 stroke-[3]" />
            </Link>
          </div>
        </motion.div>

        {/* Studio Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {STUDIOS.map((studio) => (
            <div
              key={studio.city}
              className="rounded-3xl border border-white/15 bg-white/5 p-8 flex flex-col justify-between backdrop-blur-md hover:border-brand/50 transition-all"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs font-black uppercase text-brand mb-4">
                  <MapPin className="size-3.5 text-brand" />
                  <span>{studio.city}</span>
                </div>

                <h3 className="text-2xl font-black uppercase text-white mb-3">{studio.city}</h3>
                
                <ul className="space-y-3 text-xs text-white/80 font-medium">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="size-4 text-brand shrink-0 mt-0.5" />
                    <span>{studio.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-4 text-brand shrink-0" />
                    <Link href={`tel:${studio.phone}`} className="hover:text-brand transition-colors font-bold">
                      {studio.phone} (Phone &amp; WhatsApp)
                    </Link>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Calendar className="size-4 text-brand shrink-0" />
                    <span>{studio.timing}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`tel:${studio.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand hover:underline"
                >
                  <span>CALL STUDIO</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="mailto:hello@mrdetailer.in"
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/70 hover:text-brand"
                >
                  <Mail className="size-3.5 text-brand" />
                  <span>EMAIL INQUIRY</span>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
