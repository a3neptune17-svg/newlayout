import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { HeroSection } from "@/components/hero-section"
import { Services02 } from "@/components/layout-02/services-02"
import { ThreePrimaryCategoriesSection } from "@/components/three-primary-categories-section"
import { NamexIntroSection } from "@/components/namex-intro-section"
import { DetailingPackagesSection } from "@/components/detailing-packages-section"
import { ShopShowcaseSection } from "@/components/shop-showcase-section"
import { ProcessAndTeamSection } from "@/components/process-and-team-section"
import { InterSectionVideoInsert } from "@/components/inter-section-video-insert"
import { AboutSection } from "@/components/about-section"
import { FranchiseSection } from "@/components/franchise-section"
import { WarrantyAftercareSection } from "@/components/warranty-aftercare-section"
import { BlogInsightsSection } from "@/components/blog-insights-section"
import { RatingsSection } from "@/components/ratings-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Master Layout | Mr. Detailer Studio",
  description: "Official Master Layout featuring 68% Light / 32% Dark visual balance, locked client-approved Protection Services (Services02), 3 Primary Categories (PPF, Coatings, Auto Mods), NameX Studio, Detailing Packages, Shop Display, Inter-section Video, Process & Team, About Us, Franchise, Warranty, Insights, Ratings, and Footer.",
}

export default function MasterLayoutPage() {
  return (
    <div id="top" className="min-h-screen bg-[#F9F9FB] text-slate-950 font-sans selection:bg-brand selection:text-brand-foreground">
      {/* Top Concept Bar & Navbar */}
      <LayoutSwitcher />
      <Navbar01 />

      {/* 1. Hero Section (DARK) */}
      <HeroSection />

      {/* 2. Client-Approved Protection Services Section - Services02 (LOCKED) (LIGHT bg-white) */}
      <Services02 />

      {/* 3. Three Primary Categories: Paint Protection, Coatings, Auto Mods (LIGHT bg-[#F9F9FB]) */}
      <ThreePrimaryCategoriesSection />

      {/* 4. NameX Introduction & Video (DARK bg-[#0B0D0A]) */}
      <NamexIntroSection />

      {/* 5. Detailing Packages (LIGHT bg-white) */}
      <DetailingPackagesSection />

      {/* 6. Shop Showcase - Display Only (LIGHT bg-[#F9F9FB]) */}
      <ShopShowcaseSection />

      {/* 7. Our Process & Team (LIGHT bg-white) */}
      <ProcessAndTeamSection />

      {/* 8. Inter-Section Completed Work Video Insert (DARK bg-[#0B0D0A]) */}
      <InterSectionVideoInsert />

      {/* 9. About Us (LIGHT bg-[#F9F9FB]) */}
      <AboutSection />

      {/* 10. Franchise With Us (LIGHT bg-white) */}
      <FranchiseSection />

      {/* 11. Warranty & Aftercare (DARK bg-[#0B0D0A]) */}
      <WarrantyAftercareSection />

      {/* 12. Blogs & Insights (LIGHT bg-[#F9F9FB]) */}
      <BlogInsightsSection />

      {/* 13. Client Ratings & Reviews (LIGHT bg-white) */}
      <RatingsSection />

      {/* 14. Book Appointment & Contact Us (DARK bg-[#0B0D0A]) */}
      <ContactSection />

      {/* 15. Comprehensive Footer (DARK bg-[#0B0D0A]) */}
      <Footer />
    </div>
  )
}


