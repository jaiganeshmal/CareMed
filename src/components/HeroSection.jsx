import React from "react";
import { assets } from "../assets/global";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#EAF7FF]  md:py-0 py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 grid md:grid-cols-2 items-center gap-12">

        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <span className="bg-[#3BB8FD] text-white px-5 py-2 rounded-md font-semibold text-sm">
            Upto 50% Off On Every Product
          </span>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mt-3 leading-tight">
            Medical Personal <br /> Protective Equipment
          </h1>

          {/* Description */}
          <p className="mt-3 text-gray-600 max-w-md border-l-4 border-[#3BB8FD] pl-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>

          {/* Button */}
          <button className="mt-6 bg-[#3BB8FD] hover:bg-[#25a9f1] text-white font-semibold px-8 py-3 rounded-md shadow-lg transition duration-300">
            Shop Now
          </button>

          {/* Social */}
          {/* <div className="flex items-center gap-4 mt-10 text-gray-700">
            <span className="font-medium">Follow :</span>
            <i className="fa-brands fa-facebook text-xl cursor-pointer"></i>
            <i className="fa-brands fa-instagram text-xl cursor-pointer"></i>
            <i className="fa-brands fa-pinterest text-xl cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-xl cursor-pointer"></i>
          </div> */}
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




// import React from "react";
// import { assets } from "../assets/global";

// const HeroSection = () => {
//   return (
//     <section
//       className="relative w-full bg-cover bg-center bg-no-repeat min-h-[80vh] flex items-center justify-start"
//       style={{
//         backgroundImage: `url(${assets.heroImg})`,
//       }}
//     >
//       {/* 🔹 Overlay */}
//       <div className="absolute inset-0 bg-black/50"></div>

//       {/* 🔹 Content */}
//       <div className="relative z-10 text-left px-6 md:px-12">
//         <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-3">
//           You Demand <br />
//           <span className="text-[#00DAF0]">We Distribute</span>
//         </h1>

//         <p className=" text-white max-w-2xl mx-auto mb-6">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tempor
//           vestibulum mauris quis aliquam. Integer accumsan sodales odio, id
//           tempus velit ullamcorper id. Quisque at erat eu.
//         </p>

//         <button className="bg-[#21297F] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0bc3d8] transition duration-300">
//           Read More
//         </button>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;