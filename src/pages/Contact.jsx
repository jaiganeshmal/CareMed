import React, { useEffect } from 'react'
import ContactHero from '../components/ContactHero'
import ContactSection from '../components/ContactSection'

const Contact = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <ContactHero />
      <ContactSection />
    </>
  )
}

export default Contact