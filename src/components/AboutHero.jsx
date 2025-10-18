import React from "react";
import { assets } from "../assets/global";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[80vh] flex items-center bg-center bg-cover"
      style={{
        backgroundImage: `url(${assets.aboutHero})`,
      }}
    >
      {/* 🔵 Overlay */}
      <div className="absolute inset-0 bg-[#21297f]/80 mix-blend-multiply"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12">
        <div className="max-w-2xl">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3">
            About <span className="text-[#00DAF0]">Our Clinic</span>
          </h1>

          {/* Subtext */}
          <p className="text-gray-100 text-base md:text-lg leading-relaxed mb-8">
            Our mission is to deliver exceptional healthcare with a personal touch. 
            Backed by years of experience, advanced technology, and compassionate professionals, 
            we ensure every patient receives the care they deserve.  
          </p>

          {/* CTA Button */}
          <button className="relative overflow-hidden px-10 py-3 font-semibold rounded-md bg-[#00DAF0] text-white group transition-all duration-500">
            <span className="relative z-10 group-hover:text-[#21297f] transition-colors duration-300">
              Learn More
            </span>
            <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
          </button>
        </div>
      </div>

    </section>
  );
};

export default AboutHero;
