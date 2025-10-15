import React from "react";
import { assets } from "../assets/global";

const services = [
  {
    id: 1,
    title: "We help you",
    desc: "Our dedicated staff ensures personalized attention, guiding you through every step of recovery with care and compassion.",
    img: assets.service1,
  },
  {
    id: 2,
    title: "Medicine for you",
    desc: "We provide reliable prescriptions and medical guidance tailored to your health needs, ensuring quality and trust.",
    img: assets.service2,
  },
  {
    id: 3,
    title: "Amazing technology",
    desc: "Equipped with state-of-the-art diagnostic tools and modern equipment to ensure accurate, fast, and safe treatments.",
    img: assets.service3,
  },
];

const ServiceGrid = () => {
  return (
    <section className="bg-[#21297f] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500"
            >
              {/* 🔹 Image with Hover Scale */}
              <div className="overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* 🔹 Text Section */}
              <div className="p-6 text-left">
                <div className="w-12 h-1 bg-[#00DAF0] mb-5 rounded-full"></div>
                <h3 className="text-2xl font-semibold text-[#1a237e] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
