import { LayoutSwitcher } from "@/components/layout-switcher"
import { Navbar01 } from "@/components/layout-01/navbar-01"
import { Hero02 } from "@/components/layout-02/hero-02"
import { DecisionMachineEngine } from "@/components/layout-02/decision-machine-engine"
import { GoalPackages02 } from "@/components/layout-02/goal-packages-02"
import { Process02 } from "@/components/layout-02/process-02"
import { BeforeAfterGallery02 } from "@/components/layout-02/before-after-gallery-02"
import { RatingsSection } from "@/components/ratings-section"
import { NamexIntroSection } from "@/components/namex-intro-section"
import { BlogInsightsSection } from "@/components/blog-insights-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Layout 02 - Customer Decision Machine | Mr. Detailer",
  description: "Guided consultation experience asking 'What does your car need?' with interactive goal recommendation packages and before/after proof slider.",
}

export default function Layout02Page() {
  return (
    <div id="top" className="min-h-screen bg-[#F9F9FB] text-[#0B0D0A] font-sans selection:bg-brand selection:text-brand-foreground">
      <LayoutSwitcher />
      <Navbar01 />
      <Hero02 />
      <DecisionMachineEngine />
      <GoalPackages02 />
      <Process02 />
      <BeforeAfterGallery02 />
      <RatingsSection />
      <NamexIntroSection />
      <BlogInsightsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
