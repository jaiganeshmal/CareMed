import React, { useEffect } from 'react'
import ServiceHero from '../components/ServiceHero'
import FeaturedServices from '../components/FeaturedServices'
import ServiceGrid from '../components/ServiceGrid'
import ExpertTeamSection from '../components/ExpertTeamSection'
import HealthPlanBanner from '../components/HealthPlanBanner'

const Services = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <ServiceHero />
      {/* <FeaturedServices /> */}
      <ServiceGrid />
      <ExpertTeamSection />
      {/* <HealthPlanBanner /> */}
    </>
  )
}

export default Services