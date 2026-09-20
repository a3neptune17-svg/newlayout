import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero04 } from "@/components/layout-04/hero-04"
import { BrandStatementAsymmetric, ServiceMosaicAsymmetric } from "@/components/layout-04/asymmetric-features"
import { GalleryShowcase } from "@/components/gallery-showcase"
import { CampaignPackages04 } from "@/components/layout-04/campaign-packages-04"
import { NamexIntroSection } from "@/components/namex-intro-section"
import { Process04 } from "@/components/layout-04/process-04"
import { BlogInsightsSection } from "@/components/blog-insights-section"
import { Ratings04 } from "@/components/layout-04/ratings-04"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 04 - The Art-Directed Car | Mr. Detailer",
  description: "High-contrast art-directed automotive campaign layout featuring 60/40 section splits, luxury product reveals, offset text blocks, and staggered service mosaics.",
}

export default function Layout04Page() {
  return (
    <div id="top" className="min-h-screen bg-[#0B0D0A] text-white font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar01 />
      <Hero04 />
      <BrandStatementAsymmetric />
      <ServiceMosaicAsymmetric />
      <GalleryShowcase />
      <CampaignPackages04 />
      <NamexIntroSection />
      <Process04 />
      <BlogInsightsSection />
      <Ratings04 />
      <ContactSection />
      <Footer />
    </div>
  )
}
