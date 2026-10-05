import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import BeyondHero from '../components/BeyondLearning/beyond-hero'
import BeyondFeatures from '../components/BeyondLearning/beyond-features'
import BeyondWorkshops from '../components/BeyondLearning/beyond-workshops'
import BeyondAction from '../components/BeyondLearning/beyond-action'
import BeyondCTA from '../components/BeyondLearning/beyond-cta'
import Footer from '../components/Footer'

export default function BeyondLearning() {
  useEffect(() => {
    document.title = 'Beyond Learning | Comet AI'
  }, [])

  return (
    <>
      <Navbar />
      <BeyondHero />
      <BeyondFeatures />
      <BeyondWorkshops />
      <BeyondAction />
      <BeyondCTA />
      <Footer />
    </>
  )
}
