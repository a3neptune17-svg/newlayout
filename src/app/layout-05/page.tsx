import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero05 } from "@/components/layout-05/hero-05"
import { Services05 } from "@/components/layout-05/services-05"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { ShowroomPackages05 } from "@/components/layout-05/showroom-packages-05"
import { Process05 } from "@/components/layout-05/process-05"
import { NamexIntroSection } from "@/components/namex-intro-section"
import { BlogInsightsSection } from "@/components/blog-insights-section"
import { Ratings05 } from "@/components/layout-05/ratings-05"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 05 - Premium Digital Showroom | Mr. Detailer",
  description: "Interactive digital showroom layout categorizing services under Paint Protection, Coatings, and Auto Mods with showroom tier display racks.",
}

export default function Layout05Page() {
  return (
    <div id="top" className="min-h-screen bg-[#090B0E] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar01 />
      <Hero05 />
      <Services05 />
      <GalleryShowcase />
      <ShowroomPackages05 />
      <Process05 />
      <NamexIntroSection />
      <BlogInsightsSection />
      <Ratings05 />
      <ContactSection />
      <Footer />
    </div>
  )
}
