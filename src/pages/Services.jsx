import React from 'react'
import ServiceHero from '../components/ServiceHero'
import FeaturedServices from '../components/FeaturedServices'
import ServiceGrid from '../components/ServiceGrid'
import ExpertTeamSection from '../components/ExpertTeamSection'
import HealthPlanBanner from '../components/HealthPlanBanner'

const Services = () => {
  return (
    <>
      <ServiceHero />
      <FeaturedServices />
      <ServiceGrid />
      <ExpertTeamSection />
      <HealthPlanBanner />
    </>
  )
}

export default Services