import React from 'react'
import AboutHero from '../components/AboutHero'
import MedicalSection from '../components/MedicalSection '
import PatientTestimonials from '../components/PatientTestimonials'
import MedicalTeam from '../components/MedicalTeam'
import HealthPlanCTA from '../components/HealthPlanCTA'

const About = () => {
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