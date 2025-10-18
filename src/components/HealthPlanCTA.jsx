import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/global";

const HealthPlanCTA = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.healthPlanBg})`,
      }}
    >
      {/* 🔹 Blue Overlay */}
      <div className="absolute inset-0 bg-[#21297f]/65"></div>

      {/* 🔹 Content */}
      <div className="relative max-w-5xl mx-auto text-left text-white py-10 px-6">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Need a Personal Surgical Products Plan?
        </h2>

        {/* Paragraph */}
        <p className="text-lg text-gray-200 mb-6 max-w-2xl leading-relaxed">
          Duis massa massa, mollis vel ullamcorper quis, finibus et urna.
          Aliquam ac eleifend metus. Ut sollicitudin risus ex. Let’s create a
          health plan that fits your needs perfectly.
        </p>

        {/* ✅ Button */}
        <Link
          to="/contact"
          className="inline-block bg-[#21297f] text-white border-2 border-[#00DAF0] px-10 py-3 rounded-md font-semibold uppercase tracking-wide transition-all duration-500 hover:bg-[#00DAF0] hover:text-[#21297f]"
        >
          Request a Plan
        </Link>
      </div>
    </section>
  );
};

export default HealthPlanCTA;
