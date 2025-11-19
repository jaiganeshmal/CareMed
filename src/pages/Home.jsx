import React, { useEffect } from "react";
import HeroSection from "../components/HeroSection";
import InfoCards from "../components/InfoCards";
import MedicalTeamSection from "../components/MedicalTeamSection";
// import MedicalDepartments from "../components/MedicalDepartments";
import FeaturedServices from "../components/FeaturedServices";
import HealthPlanBanner from "../components/HealthPlanBanner";
import FaqAndAppointment from "../components/FaqAndAppointment";

const Home = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])
  return (
    <>
      <HeroSection />
      <InfoCards />
      <MedicalTeamSection />
      {/* <MedicalDepartments /> */}
      <FeaturedServices />
      <HealthPlanBanner />
      <FaqAndAppointment />
    </>
  );
};

export default Home;
