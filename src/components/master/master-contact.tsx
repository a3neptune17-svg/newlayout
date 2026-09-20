"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Calendar, ArrowUpRight } from "lucide-react"

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

export function MasterContact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[#0B0D0A] py-16 lg:py-20 text-white border-t border-white/10">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 size-96 -translate-x-1/2 rounded-full bg-brand/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Combined Booking & Contact Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-black shadow-sm">
            <Calendar className="size-3 text-black" />
            <span>STUDIO RESERVATIONS</span>
          </span>

          <h2 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-none">
            BOOK <span className="text-white/85">&amp; CONTACT</span>
          </h2>

          <p className="text-xs sm:text-sm text-white/75 max-w-lg mx-auto font-normal leading-relaxed">
            Schedule your paint correction, XPEL PPF armor, or 9H ceramic coating appointment at our Ludhiana or Jammu studio.
          </p>

          <div className="pt-3 flex items-center justify-center">
            <Link
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 rounded-full bg-brand px-9 py-3.5 text-xs font-black uppercase tracking-widest text-black hover:bg-white hover:text-black transition-all shadow-xl hover:scale-105"
            >
              <span>BOOK APPOINTMENT NOW</span>
              <ArrowUpRight className="size-4 stroke-[3]" />
            </Link>
          </div>
        </div>

        {/* 2 Studio Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {STUDIOS.map((studio) => (
            <div
              key={studio.city}
              className="rounded-3xl border border-white/15 bg-white/5 p-7 flex flex-col justify-between backdrop-blur-md hover:border-brand/60 transition-all"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/20 border border-brand/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand mb-3">
                  <MapPin className="size-3 text-brand" />
                  <span>{studio.city}</span>
                </div>

                <h3 className="text-xl font-black uppercase text-white mb-3">{studio.city}</h3>
                
                <ul className="space-y-2.5 text-xs text-white/80 font-normal">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="size-3.5 text-brand shrink-0 mt-0.5" />
                    <span>{studio.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-3.5 text-brand shrink-0" />
                    <Link href={`tel:${studio.phone}`} className="hover:text-brand transition-colors font-bold text-white">
                      {studio.phone} (Phone &amp; WhatsApp)
                    </Link>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Calendar className="size-3.5 text-brand shrink-0" />
                    <span>{studio.timing}</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <Link
                  href={`tel:${studio.phone}`}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-brand hover:underline"
                >
                  <span>CALL STUDIO</span>
                  <ArrowUpRight className="size-3.5" />
                </Link>
                <Link
                  href="mailto:hello@mrdetailer.in"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-brand"
                >
                  <Mail className="size-3 text-brand" />
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
