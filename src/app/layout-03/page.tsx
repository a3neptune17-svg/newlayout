import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero03 } from "@/components/layout-03/hero-03"
import { CinematicProtectionScenes } from "@/components/layout-03/cinematic-scenes"
import { Services03 } from "@/components/layout-03/services-03"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { Process03 } from "@/components/layout-03/process-03"
import { StudioPackages03 } from "@/components/layout-03/studio-packages-03"
import { NamexIntroSection } from "@/components/namex-intro-section"
import { BlogInsightsSection } from "@/components/blog-insights-section"
import { Ratings03 } from "@/components/layout-03/ratings-03"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 03 - The Studio Experience | Mr. Detailer",
  description: "Spatial digital walkthrough of the Mr. Detailer studio zones with full-bleed visual protection scenes, studio pass reveals, and dark luxury aesthetic.",
}

export default function Layout03Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground pb-16 md:pb-0">
      <LayoutSwitcher />
      <Navbar01 />
      <Hero03 />
      <CinematicProtectionScenes />
      <Services03 />
      <GalleryShowcase />
      <Process03 />
      <StudioPackages03 />
      <NamexIntroSection />
      <BlogInsightsSection />
      <Ratings03 />
      <ContactSection />
      <Footer />
    </div>
  )
}
