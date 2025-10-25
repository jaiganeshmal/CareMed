import React from "react";
import { assets } from "../assets/global";
import { Link } from "react-router-dom";

const ExpertTeamSection = () => {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-6">

        {/* 🔹 Left Image */}
        <div className="overflow-hidden rounded-2xl shadow-lg group h-3/4 ">
          <img
            src={assets.team} 
            alt="Medical Team"
            loading="lazy"
            className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* 🔹 Right Content */}
        <div className="text-left">
          {/* Border Line */}
          <div className="w-16 h-[3px] bg-[#00DAF0] mb-4 rounded-full"></div>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#21297f] mb-5 leading-snug">
            A Great Surigcal Team <br /> to Help Your Needs
          </h2>

          {/* Paragraph */}
          <p className="text-gray-600 leading-relaxed mb-8 text-[15px]">
            Our experienced Surgical productss and healthcare experts are committed to
            providing high-quality medical care with compassion and precision.
            We focus on your complete well-being using modern technology,
            personalized attention, and years of trusted experience.
          </p>

          {/* Button */}
          <Link
            to="/about"
            className="inline-block bg-[#00DAF0] text-white font-semibold px-8 py-3 rounded-md text-sm tracking-wide shadow-md hover:bg-[#1a1f6b] transition-all duration-300 relative"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeamSection;
