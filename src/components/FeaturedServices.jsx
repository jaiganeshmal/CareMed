import React from "react";
import {
  FaUserMd,
  FaHeartbeat,
  FaXRay,
  FaBriefcaseMedical,
  FaStethoscope,
  FaHospitalUser,
} from "react-icons/fa";

const services = [
  {
    id: 1,
    icon: <FaUserMd size={40} />,
    title: "Qualified Doctors",
    desc: "Experienced specialists providing top-tier medical care.",
  },
  {
    id: 2,
    icon: <FaHeartbeat size={40} />,
    title: "Heart Care",
    desc: "Comprehensive cardiology services with advanced equipment.",
  },
  {
    id: 3,
    icon: <FaXRay size={40} />,
    title: "Modern Diagnostics",
    desc: "Accurate and fast results with the latest diagnostic tools.",
  },
  {
    id: 4,
    icon: <FaBriefcaseMedical size={40} />,
    title: "Emergency Support",
    desc: "24/7 emergency response for critical medical needs.",
  },
  {
    id: 5,
    icon: <FaStethoscope size={40} />,
    title: "General Checkups",
    desc: "Routine health assessments and preventive consultations.",
  },
  {
    id: 6,
    icon: <FaHospitalUser size={40} />,
    title: "Patient Care",
    desc: "Compassionate nursing and continuous post-treatment support.",
  },
];

const FeaturedServices = () => {
  return (
    <section className="w-full py-20 bg-white text-gray-800">
      <div className="container mx-auto px-6">
        {/* 🔹 Heading Section */}
        <div className="mb-12 relative inline-block">
          <div className="absolute top-0 left-0 w-1/4 h-1 rounded-full bg-[#20D34A] -translate-y-3"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#21297f] text-left relative z-10">
            Our Featured Services
          </h2>
        </div>

        {/* 🔹 Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-[#f9f9f9] rounded-xl shadow-md p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-[#283290] flex flex-col items-center border-b-4 border-transparent hover:border-[#20D34A]"
            >
              <div className="text-[#20D34A] mb-4 transition-colors duration-300 group-hover:text-[#20D34A]">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-[#21297f] transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-200 text-center">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
