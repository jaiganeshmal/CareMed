import React from "react";
import {
  FaLayerGroup,
  FaLungs,
  FaTint,
  FaBolt,
  FaThLarge,
  FaBoxOpen,
} from "react-icons/fa";

const productCategories = [
  {
    id: 1,
    icon: <FaLayerGroup size={36} />,
    title: "Wound Closure",
    desc: "Sutures, staplers, and closure systems engineered for consistent performance."
  },
  {
    id: 2,
    icon: <FaLungs size={36} />,
    title: "Airway Management",
    desc: "Reliable airway products supporting safe and efficient ventilation."
  },
  {
    id: 3,
    icon: <FaTint size={36} />,
    title: "Hemostasis",
    desc: "Effective bleeding control solutions for surgical environments."
  },
  {
    id: 4,
    icon: <FaBolt size={36} />,
    title: "Energy Products",
    desc: "Precision energy devices designed for controlled surgical applications."
  },
  {
    id: 5,
    icon: <FaThLarge size={36} />,
    title: "Hernia Repair",
    desc: "Mesh and repair solutions built for strength, safety, and availability."
  },
  {
    id: 6,
    icon: <FaBoxOpen size={36} />,
    title: "Other Products",
    desc: "A comprehensive range supporting hospitals and surgical distributors."
  }
];

const FeaturedServices = () => {
  return (
    <section className="w-full py-10 bg-[#F7FBFF]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="mb-6 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a8ddf]">
            Our Product Portfolio
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Structured categories ensuring availability, quality assurance,
            and dependable supply for healthcare institutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-8 border border-gray-100 shadow-sm
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl 
                              bg-[#EAF8FF] text-[#3BB8FD]
                              group-hover:bg-[#3BB8FD] group-hover:text-white
                              transition-all duration-300 mb-6">
                {item.icon}
              </div>

              {/* Text */}
              <h3 className="text-xl font-bold text-[#3BB8FD] mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* CTA */}
              <div className="mt-6 text-sm font-semibold text-[#3BB8FD] group-hover:text-[#25a9f1]">
                View Products →
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
