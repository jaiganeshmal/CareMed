import React from "react";
import { assets } from "../assets/global";

const ServiceHero = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat flex items-center"
      style={{
        backgroundImage: `url(${assets.serviceHero})`,
        minHeight: "80vh",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-left px-10 md:px-20">
        <div className="inline-block mb-6 relative">
          <div className="absolute top-0 left-0 w-1/4 h-1 bg-[#00DAF0] -translate-y-4"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10">
            Our Services
          </h1>
        </div>

        <p className="text-gray-200 text-lg md:text-xl leading-relaxed max-w-2xl">
          We provide professional and innovative healthcare solutions tailored
          to meet every patient’s unique needs — ensuring quality, care, and
          commitment in every service we offer.
        </p>
      </div>
    </section>
  );
};

export default ServiceHero;
