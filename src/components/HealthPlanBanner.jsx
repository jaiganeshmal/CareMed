import React from "react";
import { assets } from "../assets/global"; // 🖼️ Your banner image here

const HealthPlanBanner = () => {
  return (
    <section
      className="relative w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${assets.bannerBg})` }}
    >
      {/* 🔹 Blue Overlay */}
      <div className="absolute inset-0 bg-[#21297f]/30"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white py-24 px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Need a personal Surgical Products plan?
        </h2>

        {/* Paragraph */}
        <p className="max-w-2xl text-sm md:text-base mb-8">
          Duis massa massa, mollis vel ullamcorper quis, finibus et urna.
          Aliquam ac eleifend metus. Ut sollicitudin risus ex.
        </p>

        {/* Button */}
        <button className="relative overflow-hidden px-10 py-4 font-semibold text-white bg-[#21297f] rounded-md transition-all duration-300 group">
          <span className="relative z-10">REQUEST A PLAN</span>
          {/* Green fill effect on hover */}
          <span className="absolute inset-0 bg-[#20D34A] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>
    </section>
  );
};

export default HealthPlanBanner;
