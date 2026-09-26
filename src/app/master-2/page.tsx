import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"

// 01. HERO (Source: MASTER)
import { MasterHero } from "@/components/master/master-hero"

// 02. SERVICE ECOSYSTEM (Source: CONCEPT 04)
import { ServiceMosaicAsymmetric } from "@/components/layout-04/asymmetric-features"

// 03. OUR DETAILING SERVICES (Source: LAYOUT 01)
import { Services01 } from "@/components/layout-01/services-01"

// 04. PROTECTION (Source: MASTER)
import { Master2Protection } from "@/components/master-2/master-2-protection"

// 05. NAMEX STUDIO (Source: LAYOUT 01)
import { Namex01 } from "@/components/layout-01/namex-01"

// 06. DETAILING PACKAGES (Source: EXISTING PROJECT)
import { MasterPackages } from "@/components/master/master-packages"

// 07. GALLERY / OUR WORK (Source: EXISTING PROJECT)
import { MasterGallery } from "@/components/master/master-gallery"

// 08. HOW IT WORKS (Source: CONCEPT 04)
import { Process04 } from "@/components/layout-04/process-04"

// 09. OUR PROCESS (Source: MASTER)
import { MasterProcess } from "@/components/master/master-process"

// 10. ABOUT MR. DETAILER (Source: LAYOUT 01)
import { Master2About } from "@/components/master-2/master-2-about"

// 11. WARRANTY & AFTERCARE (Source: EXISTING PROJECT)
import { MasterWarranty } from "@/components/master/master-warranty"

// 12. FRANCHISE WITH MR. DETAILER (Source: LAYOUT 01)
import { Franchise01 } from "@/components/layout-01/franchise-01"

// 13. LEARN THE BASICS (Source: LAYOUT 01)
import { Blog01 } from "@/components/layout-01/blog-01"

// 14. RATINGS (Source: EXISTING PROJECT)
import { MasterRatings } from "@/components/master/master-ratings"

// 15. SHOP / PRODUCT SHOWCASE (Source: EXISTING PROJECT)
import { MasterShop } from "@/components/master/master-shop"

// 16. BOOK AN APPOINTMENT & 17. CONTACT / LOCATIONS
import { MasterContact } from "@/components/master/master-contact"
import { Locations01 } from "@/components/layout-01/locations-01"

// 18. FOOTER
import { MasterFooter } from "@/components/master/master-footer"

export const metadata = {
  title: "Master 2 Homepage | Client Combined Layout | Mr. Detailer",
  description: "Client-selected master layout assembling selected sections from Master, Original, Layout 01, and Concept 04.",
}

export default function Master2LayoutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground">
      {/* Top Concept Switcher & Navbar */}
      <LayoutSwitcher />
      <Navbar01 />

      {/* 01. HERO (Source: MASTER) */}
      <MasterHero />

      {/* 02. SERVICE ECOSYSTEM (Source: CONCEPT 04) */}
      <ServiceMosaicAsymmetric />

      {/* 03. OUR DETAILING SERVICES (Source: LAYOUT 01) */}
      <Services01 />

      {/* 04. PROTECTION (Source: MASTER) */}
      <Master2Protection />

      {/* 05. NAMEX STUDIO (Source: LAYOUT 01) */}
      <Namex01 />

      {/* 06. DETAILING PACKAGES */}
      <MasterPackages />

      {/* 07. GALLERY / OUR WORK */}
      <MasterGallery />

      {/* 08. HOW IT WORKS (Source: CONCEPT 04) */}
      <Process04 />

      {/* 09. OUR PROCESS (Source: MASTER) */}
      <MasterProcess />

      {/* 10. ABOUT MR. DETAILER (Source: LAYOUT 01) */}
      <Master2About />

      {/* 11. WARRANTY & AFTERCARE */}
      <MasterWarranty />

      {/* 12. FRANCHISE WITH MR. DETAILER (Source: LAYOUT 01) */}
      <Franchise01 />

      {/* 13. LEARN THE BASICS (Source: LAYOUT 01) */}
      <Blog01 />

      {/* 14. RATINGS */}
      <MasterRatings />

      {/* 15. SHOP / PRODUCT SHOWCASE */}
      <MasterShop />

      {/* 16. BOOK AN APPOINTMENT */}
      <MasterContact />

      {/* 17. CONTACT / LOCATIONS */}
      <Locations01 />

      {/* 18. FOOTER */}
      <MasterFooter />
    </div>
  )
}
