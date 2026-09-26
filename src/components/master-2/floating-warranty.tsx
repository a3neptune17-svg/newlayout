"use client"

import Link from "next/link"
import { ShieldCheck } from "lucide-react"

export function FloatingWarrantyControl() {
  return (
    <aside
      aria-label="Warranty Hub Access"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2"
    >
      <Link
        href="#warranty"
        className="flex items-center gap-2.5 rounded-full bg-black/90 backdrop-blur-md border border-brand/40 px-4 py-2.5 text-xs font-black text-white shadow-[0_0_25px_rgba(0,0,0,0.8)] hover:border-brand hover:bg-black hover:scale-105 transition-all cursor-pointer"
        title="Access Warranty Hub"
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-brand text-black font-black font-mono text-sm shadow-md">
          W
        </span>
        <span className="hidden sm:inline-block font-mono text-[11px] uppercase tracking-widest text-brand font-bold">
          WARRANTY HUB
        </span>
        <ShieldCheck className="size-4 text-brand sm:hidden" />
      </Link>
    </aside>
  )
}
