import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import ContactSection from '../components/Contact/contact-section'
import ContactFAQ from '../components/Contact/contact-faq'
import Footer from '../components/Footer'

export default function Contact() {
  useEffect(() => {
    document.title = 'Contact | Comet AI'
  }, [])

  return (
    <>
      <Navbar />
      <ContactSection />
      <ContactFAQ />
      <Footer />
    </>
  )
}
