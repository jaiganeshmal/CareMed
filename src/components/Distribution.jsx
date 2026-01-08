import React from "react";
import { assets } from "../assets/global";

const Distribution = () => {
  return (
    <section className="py-8 relative overflow-hidden">

      {/* Main Container */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 px-6">
        
        {/* Left Image */}
        <div className="md:w-1/2 w-full flex justify-center shadow rounded-md">
          <img
            src={assets.image19} 
            alt="Distribution Network"
            className="rounded-2xl w-[90%] md:w-[75%] object-cover "
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 w-full space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#212121] leading-snug">
            Global <span className="text-[#0a8ddf]">Distribution Network</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We take pride in our extensive distribution network that ensures our
            surgical instruments reach healthcare professionals worldwide.
            Through our partnerships and commitment to quality, we provide
            reliable delivery and post-sales support that exceeds expectations.
          </p>
          <button className="bg-[#0a8ddf] hover:bg-[#25a9f1] text-white px-8 py-3 rounded-full font-semibold shadow-md hover:shadow-xl transition duration-300">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Distribution;
