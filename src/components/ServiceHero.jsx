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
          <h1 className="text-4xl md:text-5xl font-bold text-white relative z-10 mb-6">
            Our Services
          </h1>

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
