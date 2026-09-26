import { LayoutSwitcher } from "@/components/layout-switcher"
import { OhioLeftRail } from "@/components/ohio/ohio-left-rail"

// 01. HERO
import { OhioHero } from "@/components/ohio/ohio-hero"

// 02. SERVICE ECOSYSTEM
import { OhioEcosystem } from "@/components/ohio/ohio-ecosystem"

// 03. DETAILED SERVICES / PROTECTION
import { OhioProtection } from "@/components/ohio/ohio-protection"

// 04. NAMEX STUDIO
import { OhioNamex } from "@/components/ohio/ohio-namex"

// 05. DETAILING PACKAGES
import { OhioPackages } from "@/components/ohio/ohio-packages"

// 06. SHOP SHOWCASE
import { OhioShop } from "@/components/ohio/ohio-shop"

// 07. GALLERY / OUR WORK
import { OhioGallery } from "@/components/ohio/ohio-gallery"

// 08. VIDEOS / HOW IT WORKS
import { OhioVideos } from "@/components/ohio/ohio-videos"

// 09. ABOUT MR. DETAILER
import { OhioAbout } from "@/components/ohio/ohio-about"

// 10. WARRANTY
import { OhioWarranty } from "@/components/ohio/ohio-warranty"

// 11. FRANCHISE
import { OhioFranchise } from "@/components/ohio/ohio-franchise"

// 12. BLOG / INSIGHTS
import { OhioBlog } from "@/components/ohio/ohio-blog"

// 13. BOOK AN APPOINTMENT & CONTACT
import { OhioContact } from "@/components/ohio/ohio-contact"

// 14. FOOTER
import { OhioFooter } from "@/components/ohio/ohio-footer"

export const metadata = {
  title: "Ohio Layout | Digital Studio Concept | Mr. Detailer Studio",
  description: "Refined Ohio digital studio layout for Mr. Detailer Studio featuring persistent left rail navigation, compact asymmetric grids, acid lime accents, and visual storytelling.",
}

export default function OhioPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0E0E0E] text-white font-sans selection:bg-[#E5FCA0] selection:text-black overflow-x-hidden">
      {/* Top Concept Switcher Bar */}
      <LayoutSwitcher />

      {/* Persistent Left Rail Navigation (Desktop Sidebar, Mobile Topbar) */}
      <OhioLeftRail />

      {/* Main Content Canvas (Shifted right on desktop by left rail width w-72) */}
      <main className="lg:pl-72 w-full min-h-screen flex flex-col justify-between overflow-x-hidden">
        {/* 01. HERO */}
        <OhioHero />

        {/* 02. SERVICE ECOSYSTEM */}
        <OhioEcosystem />

        {/* 03. DETAILED SERVICES */}
        <OhioProtection />

        {/* 04. NAMEX STUDIO */}
        <OhioNamex />

        {/* 05. DETAILING PACKAGES */}
        <OhioPackages />

        {/* 06. SHOP SHOWCASE */}
        <OhioShop />

        {/* 07. GALLERY / OUR WORK */}
        <OhioGallery />

        {/* 08. VIDEOS / HOW IT WORKS */}
        <OhioVideos />

        {/* 09. ABOUT MR. DETAILER */}
        <OhioAbout />

        {/* 10. WARRANTY */}
        <OhioWarranty />

        {/* 11. FRANCHISE */}
        <OhioFranchise />

        {/* 12. BLOG / INSIGHTS */}
        <OhioBlog />

        {/* 13. BOOK AN APPOINTMENT & CONTACT */}
        <OhioContact />

        {/* 14. FOOTER */}
        <OhioFooter />
      </main>
    </div>
  )
}
