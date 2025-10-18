import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "../assets/global";

const testimonials = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex. Praesent luctus erat sit amet tortor.",
    name: "Claire Smith",
    role: "Patient",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    text: "Slor sit amet, consectetur adipiscing elit. Curabitur ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin. Aliquam nec dapibus massa. Pellentesque in luctus ex. Praesent luctus erat sit amet tortor aliquam bibendum.",
    name: "Mick Williams",
    role: "Patient",
    img: "https://randomuser.me/api/portraits/men/34.jpg",
  },
];

const PatientTestimonials = () => {
  return (
    <section
      className="relative text-white py-10 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${assets.testimonialBg})`, 
      }}
    >

      <div className="relative max-w-6xl mx-auto">
        {/* 🔹 Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block text-white">
          <span className="border-l-4 border-[#00DAF0] pl-4">
            Doctor Testimonials
          </span>
        </h2>

        {/* 🔹 Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="bg-[#00DAF0] inline-block p-3 rounded-md mb-4">
                <FaQuoteLeft size={22} className="text-[#21297f]" />
              </div>

              {/* Text */}
              <p className="text-gray-100 italic leading-relaxed mb-6">
                “{item.text}”
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3">
                <img
                  src={item.img}
                  alt={item.name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full border-2 border-[#00DAF0] shadow-md"
                />
                <div>
                  <h4 className="font-semibold text-white text-lg">
                    {item.name}
                  </h4>
                  <p className="text-[#00DAF0] italic text-sm">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatientTestimonials;
