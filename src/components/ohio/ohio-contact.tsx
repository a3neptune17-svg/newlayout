"use client"

import Link from "next/link"
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react"

export function OhioContact() {
  return (
    <section id="contact" className="relative w-full bg-[#0E0E0E] text-white border-b border-white/10 overflow-hidden font-sans">
      <div className="mx-auto w-full">
        
        {/* Uniform Section Header Strip */}
        <div className="px-8 lg:px-12 py-3.5 bg-[#111310] border-b border-white/10 flex items-center justify-between">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.25em] text-[#E5FCA0]">
            CONTACT
          </span>
          <span className="text-[10px] font-mono text-white/40">
            BOOKING
          </span>
        </div>

        {/* COMPACT CONVERSION BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          
          {/* Left Panel (7 cols): Main CTA Statement */}
          <div className="lg:col-span-7 bg-[#E5FCA0] text-black p-8 lg:p-14 flex flex-col justify-between min-h-[360px]">
            <div className="space-y-3">
              <span className="text-[10px] font-mono font-bold text-black/60 uppercase tracking-widest block">
                APPOINTMENTS
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-tight">
                READY TO TRANSFORM &amp; SHIELD YOUR MOTORCAR?
              </h2>
            </div>

            <div className="pt-8">
              <Link
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 rounded-full bg-black px-8 py-4 text-xs font-black uppercase tracking-widest text-white hover:bg-white hover:text-black transition-all shadow-md"
              >
                <span>BOOK AN APPOINTMENT</span>
                <ArrowUpRight className="size-4 stroke-[2.5]" />
              </Link>
            </div>
          </div>

          {/* Right Panel (5 cols): Direct Studio Details */}
          <div className="lg:col-span-5 bg-[#131512] p-8 lg:p-12 flex flex-col justify-between">
            <div className="space-y-6">
              <span className="text-[10px] font-mono font-bold text-[#E5FCA0] uppercase tracking-widest block">
                DIRECT CONTACT
              </span>

              <div className="space-y-4 text-xs font-mono text-white/80">
                <div className="space-y-1">
                  <span className="text-[#E5FCA0] font-bold block">LUDHIANA STUDIO</span>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Phone className="size-3.5 text-[#E5FCA0]" />
                    <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-[11px]">
                    <MapPin className="size-3.5 text-white/40" />
                    <span>Ferozepur Rd, Sarabha Nagar</span>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <span className="text-[#E5FCA0] font-bold block">JAMMU STUDIO</span>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <Phone className="size-3.5 text-[#E5FCA0]" />
                    <a href="tel:+919876543211" className="hover:underline">+91 98765 43211</a>
                  </div>
                  <div className="flex items-center gap-2 text-white/60 text-[11px]">
                    <MapPin className="size-3.5 text-white/40" />
                    <span>Channi Himmat, Jammu City</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-white/70 pt-2">
                  <Mail className="size-3.5 text-[#E5FCA0]" />
                  <a href="mailto:hello@mrdetailer.in" className="hover:text-[#E5FCA0]">hello@mrdetailer.in</a>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 text-[10px] font-mono text-white/40">
              MONDAY — SATURDAY: 9:30 AM — 7:30 PM
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
