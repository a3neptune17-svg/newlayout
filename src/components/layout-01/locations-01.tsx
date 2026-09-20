"use client"

import Link from "next/link"
import { MapPin, Phone, ArrowUpRight, Calendar, Mail } from "lucide-react"

const LOCATIONS_DATA = [
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

export function Locations01() {
  return (
    <section id="locations" className="relative bg-[#F9F9FB] py-16 lg:py-24 text-slate-950 border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-300 pb-8 mb-12">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.25em] text-black bg-brand px-3.5 py-1 rounded-full border border-black/10">
              STUDIO LOCATIONS
            </span>
            <h2 className="mt-4 text-4xl sm:text-6xl font-black uppercase tracking-tight text-slate-950 leading-none">
              VISIT OUR <span className="underline decoration-brand decoration-4 underline-offset-4">STUDIOS</span>
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl font-medium">
              Operated in climate-controlled detailing bays in Ludhiana and Jammu.
            </p>
          </div>
        </div>

        {/* Dual City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {LOCATIONS_DATA.map((loc) => (
            <div
              key={loc.city}
              className="rounded-3xl border border-slate-300 bg-white p-8 sm:p-10 shadow-xl flex flex-col justify-between space-y-6 hover:border-black transition-all"
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-brand/10 border border-brand/20 px-3.5 py-1 text-xs font-black uppercase text-slate-950 mb-4">
                  <MapPin className="size-3.5 text-black" />
                  <span>{loc.city}</span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-slate-950 mb-3">
                  {loc.city}
                </h3>

                <ul className="space-y-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <li className="flex items-start gap-2.5">
                    <MapPin className="size-4 text-black shrink-0 mt-0.5" />
                    <span>{loc.address}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Phone className="size-4 text-black shrink-0" />
                    <Link href={`tel:${loc.phone}`} className="hover:text-brand font-bold text-slate-950">
                      {loc.phone} (Phone &amp; WhatsApp)
                    </Link>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Calendar className="size-4 text-black shrink-0" />
                    <span>{loc.timing}</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
                <Link
                  href={`tel:${loc.phone}`}
                  className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-950 hover:underline"
                >
                  <span>CALL STUDIO</span>
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="mailto:hello@mrdetailer.in"
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-slate-600 hover:text-black"
                >
                  <Mail className="size-3.5 text-black" />
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
