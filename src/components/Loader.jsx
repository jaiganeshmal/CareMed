import React from "react";

const Loader = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-[#f9fafc] overflow-hidden">
      {/* 🔹 Animated Gradient Orb */}
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#00DAF0] border-b-[#21297f] animate-spin-smooth"></div>
        <div className="absolute inset-4 rounded-full border-4 border-transparent border-t-[#21297f] border-b-[#00DAF0] animate-spin-reverse"></div>
        <div className="absolute inset-10 rounded-full bg-gradient-to-tr from-[#21297f] to-[#00DAF0] blur-sm opacity-90 animate-pulse-glow"></div>
      </div>

      {/* 🔹 Text */}
      <h2 className="text-2xl font-bold text-[#21297f] tracking-wide">
        Please Wait
      </h2>
      <p className="text-gray-500 mt-2 text-sm">Your page is loading...</p>

      {/* 🔹 Animations */}
      <style>
        {`
          @keyframes spin-smooth {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .animate-spin-smooth {
            animation: spin-smooth 2s linear infinite;
          }

          @keyframes spin-reverse {
            0% { transform: rotate(360deg); }
            100% { transform: rotate(0deg); }
          }
          .animate-spin-reverse {
            animation: spin-reverse 3s linear infinite;
          }

          @keyframes pulse-glow {
            0%, 100% { opacity: 0.7; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
          .animate-pulse-glow {
            animation: pulse-glow 2s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Loader;
