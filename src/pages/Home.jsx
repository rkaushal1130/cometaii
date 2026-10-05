import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import HomeHero from '../components/Home/home-hero'
import HomeTicker from '../components/Home/home-ticker'
import HomeFounders from '../components/Home/home-founders'
import HomeMission from '../components/Home/home-mission'

import HomeStudents from '../components/Home/home-students'
import HomeFAQ from '../components/Home/home-faq'
import Footer from '../components/Footer'

export default function Home() {
  useEffect(() => {
    document.title = 'Home | Comet AI'
  }, [])

  return (
    <>
      <Navbar />
      <HomeHero />
      <HomeTicker />
      <HomeFounders />
      <HomeMission />

      <HomeStudents />
      <HomeFAQ />
      <Footer />
    </>
  )
}
