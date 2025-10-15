import React, { useEffect } from 'react'
import AboutHero from '../components/AboutHero'
import MedicalSection from '../components/MedicalSection '
import PatientTestimonials from '../components/PatientTestimonials'
import MedicalTeam from '../components/MedicalTeam'
import HealthPlanCTA from '../components/HealthPlanCTA'

const About = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <AboutHero />
      <MedicalSection />
      <PatientTestimonials />
      <MedicalTeam />
      <HealthPlanCTA />
    </>
  )
}

export default About