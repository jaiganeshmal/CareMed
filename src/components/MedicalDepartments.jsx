import React from "react";
import { assets } from "../assets/global";

const departments = [
  {
    id: 1,
    title: "PLASTIC SURGERY",
    doctor: "Dr. James Smith",
    image: assets.dept1,
  },
  {
    id: 2,
    title: "GASTROENTEROLOGY",
    doctor: "Dr. Gunther Roscoe",
    image: assets.dept2,
  },
  {
    id: 3,
    title: "DENTISTRY",
    doctor: "Dr. Maria Williams",
    image: assets.dept3,
  },
];

const MedicalDepartments = () => {
  return (
    <section className="w-full py-10 bg-[#21297f] text-white relative">
      <div className="container mx-auto px-6">
        {/* 🔹 Heading with top green bar above text */}
        <div className="mb-6 relative inline-block">
          <div className="absolute top-0 left-0 w-1/4 rounded-full h-1 bg-[#00DAF0] -translate-y-3"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-left relative z-10">
            Our Surgical Departments
          </h2>
        </div>

        {/* 🔹 Cards + Right Text Side-by-Side */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left: 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
            {departments.map((dept) => (
              <div
                key={dept.id}
                className="bg-white text-gray-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 transition-transform duration-300"
              >
                <img
                  src={dept.image}
                  alt={dept.title}
                  className="w-full h-56 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-1 text-[#21297f]">
                    {dept.title}
                  </h3>
                  <p className="text-sm text-gray-600">{dept.doctor}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Text + Button */}
          <div className="lg:w-1/3 flex flex-col justify-between text-gray-100 lg:pl-6">
            <p className="text-sm leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam
              consequat semper sollicitudin. Aliquam nec dapibus massa.
              Pellentesque in luctus ex.
            </p>
            <button className="bg-white text-[#21297f] font-semibold px-8 py-3 rounded-sm border-b-4 border-[#00DAF0] hover:bg-gray-200 transition duration-300 w-fit">
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalDepartments;
