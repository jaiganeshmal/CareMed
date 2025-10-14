import React from "react";
import { FaHeartbeat, FaTooth, FaBrain, FaEye, FaBone, FaStethoscope } from "react-icons/fa";

const departments = [
  {
    id: 1,
    title: "Cardiology",
    desc: "Heart care and cardiovascular treatments by expert doctors.",
    icon: <FaHeartbeat className="text-5xl text-green-600 mb-4" />,
  },
  {
    id: 2,
    title: "Dental",
    desc: "Comprehensive dental services for all ages.",
    icon: <FaTooth className="text-5xl text-green-600 mb-4" />,
  },
  {
    id: 3,
    title: "Neurology",
    desc: "Advanced treatment and diagnosis for brain & nervous disorders.",
    icon: <FaBrain className="text-5xl text-green-600 mb-4" />,
  },
  {
    id: 4,
    title: "Eye Care",
    desc: "Expert vision care with the latest optical technologies.",
    icon: <FaEye className="text-5xl text-green-600 mb-4" />,
  },
  {
    id: 5,
    title: "Orthopedics",
    desc: "Bone and joint health treatments and surgeries.",
    icon: <FaBone className="text-5xl text-green-600 mb-4" />,
  },
  {
    id: 6,
    title: "General Medicine",
    desc: "Primary healthcare and preventive medicine for all patients.",
    icon: <FaStethoscope className="text-5xl text-green-600 mb-4" />,
  },
];

const Departments = () => {
  return (
    <section className="w-full py-20 bg-gray-50">
      <div className="container mx-auto px-6 text-center">
        {/* 🔹 Heading */}
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Our <span className="text-green-600">Departments</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We offer a wide range of specialized medical services and departments dedicated to your health and well-being.
        </p>

        {/* 🔹 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              {dept.icon}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{dept.title}</h3>
              <p className="text-gray-600 text-sm">{dept.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
