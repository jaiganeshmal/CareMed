import React from "react";
import { assets } from "../assets/global";

const ProductsHero = () => {
  return (
    <section
      className="relative w-full min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${assets.aboutHero})`, // ✅ from global.js
      }}
    >
      {/* 🔵 Overlay */}
      <div className="absolute inset-0 bg-[#21297f]/80 mix-blend-multiply"></div>

      {/* 🔹 Content */}
      <div className="relative z-10 max-w-6xl px-6 md:px-12 lg:px-20 text-left">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-2 animate-fadeIn">
          Discover Our{" "}
          <span className="text-[#00DAF0]">Products</span>
        </h1>

        <div className="w-28 h-1 bg-[#00DAF0] mb-8 rounded-full animate-expand"></div>

        <p className="text-gray-200 text-lg md:text-xl max-w-2xl mb-6 animate-fadeIn delay-200">
          Innovative Surgical solutions designed to improve patient care and
          streamline healthcare efficiency with advanced technology.
        </p>

        <button className="relative overflow-hidden bg-[#00DAF0] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-500 group">
          <span className="relative z-10 group-hover:text-[#21297f] transition-all duration-500">
            Explore Products
          </span>
          <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
        </button>
      </div>

      {/* 🔹 Decorative Floating Lights */}
      <div className="absolute top-28 left-12 w-32 h-32 bg-[#00DAF0]/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-24 right-20 w-24 h-24 bg-[#00DAF0]/30 rounded-full blur-xl animate-pulse-slow delay-300"></div>

      {/* 🔹 Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 1.2s ease forwards;
          }
          .delay-200 {
            animation-delay: 0.2s;
          }

          @keyframes expand {
            from { width: 0; opacity: 0; }
            to { width: 7rem; opacity: 1; }
          }
          .animate-expand {
            animation: expand 1s ease forwards;
          }

          @keyframes pulse-slow {
            0%, 100% { transform: scale(1); opacity: 0.6; }
            50% { transform: scale(1.2); opacity: 0.9; }
          }
          .animate-pulse-slow {
            animation: pulse-slow 6s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default ProductsHero;
