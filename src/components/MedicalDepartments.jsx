import React from "react";
import { assets } from "../assets/global";

const departments = [
  {
    id: 1,
    title: "Air Management",
    des: "Airway management devices including airway devices, accessories, patient connections, breathing filters, HMEs and HMEFs and atomisation devices.",
    image: assets.dept1,
  },
  {
    id: 2,
    title: "Anaesthesia",
    des: "Anaesthesia, recovery and emergency care products including face masks, breathing and resuscitation systems and carbon dioxide absorbents.",
    image: assets.dept2,
  },
  {
    id: 3,
    title: "Cirtical Care",
    des: "Respiratory products for ventilatory support including patient interfaces, breathing systems, CPAP devices, oral care and closed suction systems.",
    image: assets.dept3,
  },
  {
    id: 4,
    title: "Oxygen And Aerosol Therapy",
    des: "Products for fixed and variable concentration oxygen therapy, aerosol therapy, humidification and nebulisation.",
    image: assets.dept4,
  },
];

const MedicalDepartments = () => {
  return (
    <section className="w-full py-10 bg-[#21297f] text-white relative">
      <div className="container mx-auto px-6">
        {/* 🔹 Heading */}
        <div className="mb-6 relative inline-block">
          <div className="absolute top-0 left-0 w-1/4 rounded-full h-1 bg-[#00DAF0] -translate-y-3"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-left relative z-10">
            Our  Product Range
          </h2>
        </div>

        {/* 🔹 Cards + Right Text Side-by-Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 flex-grow w-full">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  loading="lazy"
                  className="w-full h-56 object-cover border border-b-2 border-gray-100"
                />
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold mb-1 text-[#21297f]">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-left text-gray-600">{dept.des}</p>
                </div>
              </div>
            ))}
          </div>
      </div>
    </section>
  );
};

export default MedicalDepartments;
