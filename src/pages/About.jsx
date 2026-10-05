import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import AboutHero from '../components/About/about-hero'
import AboutValues from '../components/About/about-values'
import AboutGallery from '../components/About/about-gallery'
import AboutBand from '../components/About/about-band'
import AboutInfrastructure from '../components/About/about-infrastructure'
import AboutInteractive from '../components/About/about-interactive'
import AboutFAQ from '../components/About/about-faq'
import Footer from '../components/Footer'

export default function About() {
  useEffect(() => {
    document.title = 'About | Comet AI'
  }, [])

  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutValues />
      <AboutGallery />
      <AboutBand />
      <AboutInfrastructure />
      <AboutInteractive />
      <AboutFAQ />
      <Footer />
    </>
  )
}
