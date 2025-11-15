import React from "react";
import { assets } from "../assets/global";

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-start"
      style={{
        backgroundImage: `url(${assets.heroImg})`,
      }}
    >
      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 text-left px-6 md:px-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
          You Demand <br />
          <span className="text-[#00DAF0]">We Distribute</span>
        </h1>

        <p className=" text-white max-w-2xl mx-auto mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor
          vestibulum mauris quis aliquam. Integer accumsan sodales odio, id
          tempus velit ullamcorper id. Quisque at erat eu.
        </p>

        <button className="bg-[#21297F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0bc3d8] transition duration-300">
          Read More
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
