import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center bg-[#f9fafc] px-6 text-center overflow-hidden">
      {/* 🔹 SVG Illustration */}
      <div className="w-[260px] sm:w-[300px] flex justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 500 500"
          className="w-full h-auto animate-float drop-shadow-lg"
        >
          <path
            d="M250 40c-116 0-210 94-210 210s94 210 210 210 210-94 210-210S366 40 250 40zm0 380c-94 0-170-76-170-170S156 80 250 80s170 76 170 170-76 170-170 170z"
            fill="#E8F0FE"
          />
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            fontSize="100"
            fontWeight="800"
            fill="#3BB8FD"
          >
            404
          </text>
          <circle cx="250" cy="340" r="8" fill="#25a9f1" />
          <path
            d="M190 300h120a15 15 0 010 30H190a15 15 0 010-30z"
            fill="#25a9f1"
          />
        </svg>
      </div>

      {/* 🔹 Text Section */}
      <div className="max-w-md mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3BB8FD] mb-3">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
          The page you’re looking for doesn’t exist or has been moved.
          Try returning to the homepage.
        </p>

        {/* 🔹 Button */}
        <Link
          to="/"
          className="relative inline-block bg-[#3BB8FD] text-white font-semibold px-8 py-3 rounded-md overflow-hidden group transition-all duration-500 shadow-md"
        >
          <span className="relative z-10">Back To Home</span>
          <span className="absolute inset-0 bg-[#25a9f1] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
        </Link>
      </div>

      {/* 🔹 Floating Animation */}
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-float {
            animation: float 4s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default PageNotFound;
