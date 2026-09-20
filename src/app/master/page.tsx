import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { MasterHero } from "@/components/master/master-hero"
import { MasterPrimaryCategories } from "@/components/master/master-primary-categories"
import { Services02 } from "@/components/layout-02/services-02"
import { MasterNamex } from "@/components/master/master-namex"
import { MasterPackages } from "@/components/master/master-packages"
import { MasterShop } from "@/components/master/master-shop"
import { MasterGallery } from "@/components/master/master-gallery"
import { MasterProcess } from "@/components/master/master-process"
import { MasterWarranty } from "@/components/master/master-warranty"
import { MasterAbout } from "@/components/master/master-about"
import { MasterBlog } from "@/components/master/master-blog"
import { MasterRatings } from "@/components/master/master-ratings"
import { MasterFranchise } from "@/components/master/master-franchise"
import { MasterContact } from "@/components/master/master-contact"
import { MasterFooter } from "@/components/master/master-footer"

export const metadata = {
  title: "Master Homepage | Mr. Detailer Studio",
  description: "Refined Master Homepage featuring 68% Light / 32% Dark visual balance, 3 Primary Categories (Paint Protection, Coatings, Auto Mods), locked approved Protection Services, NAMEX STUDIO, Detailing Packages, Shop Display, Gallery, Our Process, Warranty & Aftercare, About Us, Blogs & Insights, Ratings, Franchise, and Booking Contact.",
}

export default function MasterLayoutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F9F9FB] text-slate-950 font-sans selection:bg-brand selection:text-brand-foreground">
      {/* Top Concept Bar & Navbar */}
      <LayoutSwitcher />
      <Navbar01 />

      {/* 1. Hero Section (DARK bg-[#0B0D0A]) */}
      <MasterHero />

      {/* 2. Services Categories: Paint Protection, Coatings, Auto Mods (Horizontal Rail) (LIGHT bg-[#F9F9FB]) */}
      <MasterPrimaryCategories />

      {/* 3. Client-Approved Protection Services Section - Services02 (LOCKED) (LIGHT bg-white) */}
      <div id="protection">
        <Services02 />
      </div>

      {/* 4. NameX Studio & Video (Dominant NAMEX STUDIO Title) (DARK bg-[#0B0D0A]) */}
      <MasterNamex />

      {/* 5. Detailing Packages (Horizontal Carousel) (LIGHT bg-white) */}
      <MasterPackages />

      {/* 6. Shop Showcase - Display Only (Horizontal Product Rail) (LIGHT bg-[#F9F9FB]) */}
      <MasterShop />

      {/* 7. Single Unified Gallery Visual Teaser + Integrated Video Showcase (DARK bg-[#0B0D0A]) */}
      <MasterGallery />

      {/* 8. Our Process (Compact 5-Step Horizontal Rail) (LIGHT bg-[#F9F9FB]) */}
      <MasterProcess />

      {/* 9. Warranty & Aftercare (DARK bg-[#0B0D0A]) */}
      <MasterWarranty />

      {/* 10. About Us (LIGHT bg-[#F9F9FB]) */}
      <MasterAbout />

      {/* 11. Blogs & Insights (Horizontal Editorial Rail) (LIGHT bg-white) */}
      <MasterBlog />

      {/* 12. Client Ratings & Reviews (LIGHT bg-slate-50) */}
      <MasterRatings />

      {/* 13. Franchise With Us (LIGHT bg-white) */}
      <MasterFranchise />

      {/* 14. Book Appointment & Contact Us (Ludhiana & Jammu Studios) (DARK bg-[#0B0D0A]) */}
      <MasterContact />

      {/* 15. Comprehensive Moderately Reduced Footer (DARK bg-[#0B0D0A]) */}
      <MasterFooter />
    </div>
  )
}
