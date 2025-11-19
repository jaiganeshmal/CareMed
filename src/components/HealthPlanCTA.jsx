import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { assets } from "../assets/global";

const HealthPlanCTA = () => {
  let navigate = useNavigate()
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.healthPlanBg})`,
      }}
    >
      {/* 🔹 Blue Overlay */}
      <div className="absolute inset-0 bg-[#3BB8FD]/25"></div>

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
        <button
          onClick={() => navigate('/contact')}
          className="relative overflow-hidden px-10 py-3 font-semibold rounded-md bg-[#3BB8FD] text-white group transition-all duration-500">
          <span className="relative z-10 group-hover:text-[#3BB8FD] transition-colors duration-300">
            Request a Plan
          </span>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>
    </section>
  );
};

export default HealthPlanCTA;
