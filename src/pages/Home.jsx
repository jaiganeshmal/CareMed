import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import InfoCards from "../components/InfoCards";
// import MedicalTeamSection from "../components/MedicalTeamSection";
// import MedicalDepartments from "../components/MedicalDepartments";
import FeaturedServices from "../components/FeaturedServices";
import HealthPlanBanner from "../components/HealthPlanBanner";
import FaqAndAppointment from "../components/FaqAndAppointment";
import Distribution from "../components/Distribution";
import ClientsServed from "../components/ClientsServed";
import TestimonialsSection from "../components/TestimonialsSection";

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <>
        <HeroSection />
        <InfoCards />
        <FeaturedServices />     
        <Distribution />         
        <ClientsServed />        
        {/* <MedicalTeamSection />  //mewdjkm */}
        <TestimonialsSection />
        <HealthPlanBanner />
        <FaqAndAppointment />
      </>

    </>

  );
};

export default Home;
