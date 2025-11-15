import React from "react";
import { FaClock, FaCalendarCheck, FaPhoneAlt } from "react-icons/fa";

const cardsData = [
  {
    id: 1,
    title: "Working Hours",
    desc: "Mon - Fri: 8:00 AM - 8:00 PM\nSaturday: 9:00 AM - 6:00 PM\nSunday: Closed",
    icon: <FaClock className="text-4xl text-white mb-3" />,
    bgColor: "bg-[#21297F]", // ✅ Deep Blue
  },
  {
    id: 2,
    title: "Shipping Details",
    desc: "Schedule your visit easily with our online system or by calling us directly.",
    icon: <FaCalendarCheck className="text-4xl text-white mb-3" />,
    bgColor: "bg-[#21297F]", // ✅ Deep Blue
  },
  {
    id: 3,
    title: "Contact us",
    desc: "For urgent care or emergencies, contact our 24/7 helpline.",
    icon: <FaPhoneAlt className="text-4xl text-white mb-3" />,
    bgColor: "bg-[#21297F]", // ✅ Deep Blue
    // bgColor: "bg-[#1565C0]", // ✅ Deep Blue
  },
];

const InfoCards = () => {
  return (
    <section className="relative w-full -mt-10 z-20">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {cardsData.map((card) => (
          <div
            key={card.id}
            className={`${card.bgColor} text-white p-8 rounded-xl shadow-lg hover:-translate-y-2 transition-transform duration-300`}
          >
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              {card.icon}
              <h3 className="text-2xl font-semibold mb-2">{card.title}</h3>
              <p className="whitespace-pre-line text-sm text-gray-100 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
