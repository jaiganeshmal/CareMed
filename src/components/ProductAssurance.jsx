import React from "react";
import {
  FaCheckCircle,
  FaWarehouse,
  FaTruckMoving,
  FaFileAlt,
} from "react-icons/fa";

const assuranceData = [
  {
    icon: <FaCheckCircle />,
    title: "Certified Medical Products",
    desc: "All products comply with international quality standards and certifications.",
  },
  {
    icon: <FaWarehouse />,
    title: "Ready Stock Availability",
    desc: "Consistent inventory maintained to ensure uninterrupted supply.",
  },
  {
    icon: <FaTruckMoving />,
    title: "Nationwide Distribution",
    desc: "Reliable logistics network delivering products across the country.",
  },
  {
    icon: <FaFileAlt />,
    title: "Technical Documentation",
    desc: "Complete datasheets, catalogs, and specifications available on request.",
  },
];

const ProductAssurance = () => {
  return (
    <section className="py-10 bg-[#F7FBFF]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 🔹 Heading */}
        <div className="mb-12 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a8ddf] mb-3">
            Product Assurance & Reliability
          </h2>
          <p className="text-gray-600 text-lg">
            Our product supply is built on quality assurance, availability,
            and a dependable distribution network.
          </p>
        </div>

        {/* 🔹 Assurance Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {assuranceData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-[#E6F9FC] mb-5 group-hover:scale-110 transition-transform duration-300">
                <span className="text-[#00DAF0] text-2xl">
                  {item.icon}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-[#0a8ddf] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductAssurance;
