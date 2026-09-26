import { LayoutSwitcher } from "@/components/layout-switcher"
import { Master2Navbar } from "@/components/master-2/master-2-navbar"

// 01. HERO (Centered logo primary focal point, secondary dynamic text)
import { Master2Hero } from "@/components/master-2/master-2-hero"

// 02. SERVICE ECOSYSTEM (Updated labels: PPF, COATINGS, AUTO MODS, WRAPS & SUNFILMS)
import { Master2Ecosystem } from "@/components/master-2/master-2-ecosystem"

// 03. OUR DETAILING SERVICES (Source: LAYOUT 01 - UNCHANGED)
import { Services01 } from "@/components/layout-01/services-01"

// 04. PROTECTION (Visual horizontal interactive flashcards)
import { Master2Protection } from "@/components/master-2/master-2-protection"

// 05. NAMEX STUDIO (Source: LAYOUT 01 - UNCHANGED)
import { Namex01 } from "@/components/layout-01/namex-01"

// 06. SHOP / PRODUCT SHOWCASE (Moved higher: immediately after NameX Studio)
import { MasterShop } from "@/components/master/master-shop"

// 07. DETAILING PACKAGES (Two 50/50 visual package cards, minimal text)
import { Master2Packages } from "@/components/master-2/master-2-packages"

// 08. GALLERY / OUR WORK (Source: EXISTING PROJECT - UNCHANGED)
import { MasterGallery } from "@/components/master/master-gallery"

// 09. HOW IT WORKS (4-video workflow reel, connector arrows removed)
import { Master2Process04 } from "@/components/master-2/master-2-process-04"

// 10. ABOUT MR. DETAILER (Source: MASTER-2)
import { Master2About } from "@/components/master-2/master-2-about"

// 11. WARRANTY & AFTERCARE (Source: EXISTING PROJECT)
import { MasterWarranty } from "@/components/master/master-warranty"

// 12. FRANCHISE (Two 50/50 video panels, minimal text)
import { Master2Franchise } from "@/components/master-2/master-2-franchise"

// 13. BOOK AN APPOINTMENT
import { MasterContact } from "@/components/master/master-contact"

// 14. CONTACT / LOCATIONS
import { Locations01 } from "@/components/layout-01/locations-01"

// 15. FOOTER (Without Visit Our Studios block, with prominent highlighted socials)
import { Master2Footer } from "@/components/master-2/master-2-footer"

// 18. FLOATING WARRANTY CONTROL
import { FloatingWarrantyControl } from "@/components/master-2/floating-warranty"

export const metadata = {
  title: "Master 2 Homepage | Refined Specification | Mr. Detailer Studio",
  description: "Refined Master 2 homepage composition featuring logo focal point hero, flashcard protection, shop showcase, two-card detailing packages, two-video franchise section, and floating warranty control.",
}

export default function Master2LayoutPage() {
  return (
    <div id="top" className="relative min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground">
      {/* Top Concept Switcher & Navbar */}
      <LayoutSwitcher />
      <Master2Navbar />

      {/* 01. HERO */}
      <Master2Hero />

      {/* 02. SERVICE ECOSYSTEM */}
      <Master2Ecosystem />

      {/* 03. OUR DETAILING SERVICES */}
      <Services01 />

      {/* 04. PROTECTION */}
      <Master2Protection />

      {/* 05. NAMEX STUDIO */}
      <Namex01 />

      {/* 06. SHOP */}
      <MasterShop />

      {/* 07. DETAILING PACKAGES */}
      <Master2Packages />

      {/* 08. GALLERY / OUR WORK */}
      <MasterGallery />

      {/* 09. HOW IT WORKS */}
      <Master2Process04 />

      {/* 10. ABOUT MR. DETAILER */}
      <Master2About />

      {/* 11. WARRANTY */}
      <MasterWarranty />

      {/* 12. FRANCHISE */}
      <Master2Franchise />

      {/* 13. BOOK AN APPOINTMENT */}
      <MasterContact />

      {/* 14. CONTACT */}
      <Locations01 />

      {/* 15. FOOTER */}
      <Master2Footer />

      {/* FLOATING WARRANTY HUB CONTROL */}
      <FloatingWarrantyControl />
    </div>
  )
}
