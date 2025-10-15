import React from "react";
import { assets } from "../assets/global";

const MedicalTeamSection = () => {
  return (
    <section className="w-full py-10 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* 🔹 Left Content */}
        <div className="md:w-1/2">
          {/* Green line */}
          <div className="w-16 h-[3px] bg-[#00DAF0] mb-4"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A great Surgical team to help your needs
          </h2>

          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat
            semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in
            luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum.
            Nulla ut molestie augue, scelerisque consectetur quam. Dolor sit
            amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis
            est ut, tempor tincidunt ipsum.
          </p>

          <button className="bg-[#21297f] text-white px-8 py-3 rounded-sm font-semibold border-b-4 border-[#00DAF0] hover:bg-[#1b216a] transition duration-300">
            READ MORE
          </button>
        </div>

        {/* 🔹 Right Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={assets.doctorTeam}
            alt="Medical Team"
            loading="lazy"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalTeamSection;
