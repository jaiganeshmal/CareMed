import React from "react";
import { assets } from "../assets/global";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  let naviagte = useNavigate()
  return (
    <section className="w-full bg-[#EAF7FF]  md:py-0 py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="bg-[#0a8ddf] text-white px-5 py-2 rounded-md font-semibold text-sm">
            Upto 50% Off On Every Product
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mt-3 leading-tight">
            Medical Personal <br /> Protective Equipment
          </h1>

          {/* Description */}
          <p className="mt-3 text-gray-600 max-w-md border-l-4 border-[#0a8ddf] pl-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Button */}
          <button onClick={() => naviagte('/products')} className="mt-6 bg-[#0a8ddf] hover:bg-[#25a9f1] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition duration-300">
            Explore Products
          </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center items-center min-h-[550px]">

          {/* Background Circle */}
          <div className="absolute w-[520px] h-[520px] bg-[#BEE8FF] rounded-full opacity-40 blur-3xl"></div>

          {/* Main Machine Image */}
          <img
            src={assets.mriMachine}
            alt="Medical Machine"
            className="relative z-10 w-[580px]"
          />

          {/* Floating Icons */}

          {/* Top Left */}
          <img
            src={assets.briefcase}
            className="absolute top-28 left-[4%] w-24 animate-float"
            alt=""
          />

          {/* Top Right */}
          <img
            src={assets.stethoscope}
            className="absolute top-12 right-[28%] w-24 animate-floatX"
            alt=""
          />

          {/* Right Middle */}
          <img
            src={assets.thermometer}
            className="absolute top-[35%] -right-[4%] w-24 animate-float"
            alt=""
          />

          {/* Bottom Left */}
          <img
            src={assets.injection}
            className="absolute bottom-[16%] -left-[6%] w-24 animate-floatX"
            alt=""
          />

          {/* Bottom Right */}
          <img
            src={assets.microscope}
            className="absolute bottom-[16%] -right-[6%] w-24 animate-float"
            alt=""
          />

        </div>


      </div>
    </section>
  );
};

export default HeroSection;



