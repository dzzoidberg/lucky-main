import { SiteHeader } from '@/components/lucky/site-header'
import { Hero } from '@/components/lucky/hero'
import { About } from '@/components/lucky/about'
import { ContentCards } from '@/components/lucky/content-cards'
import { ScheduleSocials } from '@/components/lucky/schedule-socials'
import { SiteFooter, ThanksCta } from '@/components/lucky/thanks-footer'
export default function Page() {
  return (
    <div className="grunge-bg min-h-screen overflow-x-hidden">
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <ContentCards />
        <ScheduleSocials />
        <ThanksCta />
      </main>
      <SiteFooter />
    </div>
  )
}
