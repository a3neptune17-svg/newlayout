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

const FOOTER_LINKS = [
  {
    heading: "Company",
    links: [
      { label: "Our Franchise", href: "#franchise" },
      { label: "Blogs & Insights", href: "#insights" },
      { label: "Warranty System", href: "#warranty" },
      { label: "Shop Display", href: "#shop" },
    ],
  },
  {
    heading: "Explore",
    links: [
      { label: "Core Services", href: "#services" },
      { label: "Protection Services", href: "#protection" },
      { label: "Gallery Portfolio", href: "#gallery" },
      { label: "Detailing Packages", href: "#packages" },
    ],
  },
]

const SOCIALS = [
  { icon: InstagramIcon, href: "#", label: "Instagram" },
  { icon: FacebookIcon, href: "#", label: "Facebook" },
]

export function MasterFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#0B0D0A] text-white border-t border-white/10">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          
          {/* Brand Col */}
          <div>
            <Link href="#top" className="inline-block rounded-xl bg-white p-2">
              <Image
                src="/logo.png"
                alt="Mr. Detailer logo"
                width={140}
                height={36}
                className="h-7 w-auto object-contain"
              />
            </Link>
            <p className="mt-2.5 max-w-xs text-xs leading-relaxed text-white/60 font-normal">
              Hand-finished paint correction, ceramic protection, and XPEL PPF armor.
            </p>
            <div className="mt-3 flex items-center gap-2">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-7 items-center justify-center rounded-full border border-white/10 text-white/60 hover:border-brand hover:text-brand transition-all"
                >
                  <Icon className="size-3.5" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links Cols */}
          {FOOTER_LINKS.map((group) => (
            <div key={group.heading}>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
                {group.heading}
              </span>
              <ul className="mt-2.5 flex flex-col gap-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-xs text-white/70 hover:text-white transition-colors font-normal">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Col */}
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand">
              Studios &amp; Contact
            </span>
            <ul className="mt-2.5 flex flex-col gap-1.5 text-xs text-white/70 font-normal">
              <li className="flex items-center gap-2">
                <Phone className="size-3 text-brand shrink-0" />
                <Link href="tel:+919876543210" className="hover:text-brand font-semibold text-white">
                  +91 98765 43210 (Ludhiana)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-3 text-brand shrink-0" />
                <Link href="tel:+919876543211" className="hover:text-brand font-semibold text-white">
                  +91 98765 43211 (Jammu)
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="size-3 text-brand shrink-0" />
                <Link href="mailto:hello@mrdetailer.in" className="hover:text-brand">
                  hello@mrdetailer.in
                </Link>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-3 shrink-0 text-brand" />
                <span>Ludhiana: Ferozepur Rd \| Jammu: Channi Himmat</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 bg-black/50">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-2 px-4 sm:px-6 lg:px-8 py-3 text-[11px] text-white/40 font-normal">
          <span>© {new Date().getFullYear()} Mr. Detailer Studio. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <Link href="#top" className="hover:text-brand">Privacy Policy</Link>
            <Link href="#top" className="hover:text-brand">Terms of Service</Link>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex size-6 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white hover:border-brand hover:text-brand transition-colors"
            >
              <ArrowUp className="size-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
