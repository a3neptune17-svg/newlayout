import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero01 } from "@/components/layout-01/hero-01"
import { Services01 } from "@/components/layout-01/services-01"
import { Categories01 } from "@/components/layout-01/categories-01"
import { Namex01 } from "@/components/layout-01/namex-01"
import { Packages01 } from "@/components/layout-01/packages-01"
import { InterVideo01 } from "@/components/layout-01/inter-video-01"
import { Work01 } from "@/components/layout-01/work-01"
import { Process01 } from "@/components/layout-01/process-01"
import { About01 } from "@/components/layout-01/about-01"
import { Warranty01 } from "@/components/layout-01/warranty-01"
import { Franchise01 } from "@/components/layout-01/franchise-01"
import { Blog01 } from "@/components/layout-01/blog-01"
import { Locations01 } from "@/components/layout-01/locations-01"
import { BookingFooter01 } from "@/components/layout-01/booking-footer-01"

export const metadata = {
  title: "Layout 01 — Premium Automotive Brand | Mr. Detailer Studio",
  description: "Modern luxury automotive brand website featuring full-screen video hero, interactive featured services, 3 core pillars, package selector, car photography, and studio locations.",
}

export default function Layout01Page() {
  return (
    <div id="top" className="min-h-screen bg-[#F9F9FB] text-slate-950 font-sans selection:bg-brand selection:text-black">
      {/* Top Concept Bar */}
      <LayoutSwitcher />

      {/* Brand Navigation */}
      <Navbar01 />

      {/* Full-Screen Video Hero */}
      <Hero01 />

      {/* Interactive Featured Services */}
      <Services01 />

      {/* The Three Main Pillars (Paint Protection, Coatings, Auto Mods) */}
      <Categories01 />

      {/* NameX Studio Intro & Video */}
      <Namex01 />

      {/* Interactive Detailing Packages */}
      <Packages01 />

      {/* Full-Width Cinematic Video Moment */}
      <InterVideo01 />

      {/* Our Work - Car Photography Dominates */}
      <Work01 />

      {/* 5-Step Process */}
      <Process01 />

      {/* Image-Led About Story */}
      <About01 />

      {/* Compact Confidence Warranty & Aftercare Interface */}
      <Warranty01 />

      {/* Franchise Business Opportunity */}
      <Franchise01 />

      {/* Learn the Basics Detailing Insights */}
      <Blog01 />

      {/* Ludhiana & Jammu Studio Locations */}
      <Locations01 />

      {/* Closing Booking CTA & Brand Footer */}
      <BookingFooter01 />
    </div>
  )
}
