import React from "react";
import { assets } from "../assets/global"; // ✅ images from global.js

const doctors = [
  {
    name: "Dr. Melissa Smith",
    role: "Cardiologist",
    img: assets.doctor1,
  },
  {
    name: "Dr. Josh Henderson",
    role: "Plastic Surgeon",
    img: assets.doctor2,
  },
  {
    name: "Dr. Christine Jones",
    role: "Pediatrician",
    img: assets.doctor3,
  },
  {
    name: "Dr. William Stan",
    role: "General Practitioner",
    img: assets.doctor4,
  },
];

const MedicalTeam = () => {
  return (
    <section className="py-10 px-6 bg-[#f9fafc]">
      <div className="max-w-6xl mx-auto">
        {/* 🔹 Section Heading (Left border style) */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#212121] mb-8 relative">
          <span className="border-l-4 border-[#00DAF0] pl-4">
            Meet Our Medical Team
          </span>
        </h2>

        {/* 🔹 Doctors Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 group hover:-translate-y-2"
            >
              {/* Doctor Image */}
              <div className="relative overflow-hidden">
                <img
                  src={doctor.img}
                  alt={doctor.name}
                  loading="lazy"
                  className="w-full h-64 object-contain group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#21297f]/0 group-hover:bg-[#21297f]/25 transition-colors duration-500"></div>
              </div>

              {/* Doctor Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#212121] mb-1 group-hover:text-[#00DAF0] transition-colors duration-300">
                  {doctor.name}
                </h3>
                <p className="text-gray-500 mb-3">{doctor.role}</p>
                <div className="w-10 h-[3px] bg-[#00DAF0] mx-auto rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalTeam;
