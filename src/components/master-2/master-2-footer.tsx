"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react"
import type { SVGProps } from "react"

function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M15 8.5h2V5.2c-.35-.05-1.55-.2-2.97-.2C11.1 5 9.5 6.6 9.5 9.3v2.2H7v3.3h2.5V21H13v-6.2h2.7l.4-3.3H13V9.6c0-.72.35-1.1 1-1.1Z" />
    </svg>
  )
}

function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 2a10 10 0 0 0-8.66 15L2 22l5.12-1.34A10 10 0 1 0 12 2z" />
    </svg>
  )
}

function YoutubeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
    </svg>
  )
}

const PROMINENT_SOCIALS = [
  { icon: InstagramIcon, href: "#", label: "INSTAGRAM" },
  { icon: WhatsAppIcon, href: "https://wa.me/919876543210", label: "WHATSAPP" },
  { icon: FacebookIcon, href: "#", label: "FACEBOOK" },
  { icon: YoutubeIcon, href: "#", label: "YOUTUBE" },
]

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "Our Franchise", href: "#franchise" },
      { label: "Warranty Hub", href: "#warranty" },
      { label: "Shop Display", href: "#shop" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    heading: "Explore Services",
    links: [
      { label: "Paint Protection Film", href: "#protection" },
      { label: "Coatings & Graphene", href: "#services" },
      { label: "Detailing Packages", href: "#packages" },
      { label: "Gallery Portfolio", href: "#our-work" },
    ],
  },
]

export function Master2Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0D0A] text-white border-t border-white/10">
      
      {/* PROMINENT HIGHLIGHTED SOCIAL LINKS ROW */}
      <div className="border-b border-white/10 bg-white/5 py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs font-mono font-bold uppercase tracking-[0.25em] text-brand">
            CONNECT WITH MR. DETAILER STUDIO
          </span>

          <div className="flex flex-wrap items-center gap-3">
            {PROMINENT_SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white hover:bg-brand hover:text-black hover:border-brand transition-all shadow-lg hover:scale-105"
              >
                <Icon className="size-4" />
                <span>{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          
          {/* Brand Col */}
          <div>
            <Link href="#top" className="inline-block rounded-xl bg-white p-2.5">
              <Image
                src="/logo.png"
                alt="Mr. Detailer logo"
                width={140}
                height={36}
                className="h-8 w-auto object-contain"
              />
            </Link>
            <p className="mt-3 max-w-xs text-xs leading-relaxed text-white/60 font-normal">
              Automotive Craftsmanship &amp; Surface Science. Specialized in XPEL Paint Protection Film, Graphene Coatings, and Restorative Detailing.
            </p>
          </div>

          {/* Links Cols */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand block mb-3">
                {group.heading}
              </span>
              <ul className="flex flex-col gap-2">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-white/70 hover:text-brand transition-colors font-medium">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand block mb-3">
              Direct Contact
            </span>
            <ul className="flex flex-col gap-2 text-xs text-white/70 font-normal">
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 text-brand shrink-0" />
                <Link href="tel:+919876543210" className="hover:text-brand font-semibold text-white">
                  +91 98765 43210 (Ludhiana)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3.5 text-brand shrink-0" />
                <Link href="tel:+919876543211" className="hover:text-brand font-semibold text-white">
                  +91 98765 43211 (Jammu)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3.5 text-brand shrink-0" />
                <Link href="mailto:hello@mrdetailer.in" className="hover:text-brand">
                  hello@mrdetailer.in
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3.5 shrink-0 text-brand" />
                <span>Ludhiana Sarabha Nagar &amp; Jammu City</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar (NO VISIT OUR STUDIOS) */}
      <div className="border-t border-white/10 bg-black">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 py-4 text-xs text-white/40 font-normal">
          <span>© {new Date().getFullYear()} Mr. Detailer Studio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#top" className="hover:text-brand">Privacy Policy</Link>
            <Link href="#top" className="hover:text-brand">Terms of Service</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              aria-label="Back to Top"
              className="flex size-7 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-brand hover:text-brand transition-colors cursor-pointer"
            >
              <ArrowUp className="size-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
