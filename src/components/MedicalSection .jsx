import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaClock, FaPhoneAlt, FaAmbulance } from "react-icons/fa";

const MedicalSection = () => {
  const stats = [
    { percent: 75, label: "Hard Work" },
    { percent: 95, label: "Passion" },
    { percent: 85, label: "Dedication" },
    { percent: 90, label: "Care & Support" },
  ];

  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const sectionRef = useRef(null);

  // Trigger animation when section enters view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  // Animate the circular progress and count-up when visible
  useEffect(() => {
    if (visible) {
      stats.forEach((item, i) => {
        let start = 0;
        const step = () => {
          start += 1;
          if (start <= item.percent) {
            setCounts((prev) => {
              const updated = [...prev];
              updated[i] = start;
              return updated;
            });
            requestAnimationFrame(step);
          }
        };
        requestAnimationFrame(step);
      });
    }
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="max-w-7xl mx-auto py-10 px-6 bg-white flex flex-col lg:flex-row gap-12"
    >
      {/* LEFT SIDE */}
      <div className="lg:w-2/3">
        <h2 className="text-3xl font-bold mb-3 text-gray-900 leading-tight">
          A Great Surgical Team To Help Your Needs
        </h2>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ante leo,
          finibus quis est ut, tempor tincidunt ipsum. Nam consequat semper sollicitudin.
        </p>

        <p className="text-gray-600 mb-10 leading-relaxed">
          Praesent luctus est at tortor aliquam bibendum. Nulla ut molestie augue,
          scelerisque consectetur quam. Curabitur ante leo, finibus quis est ut, tempor
          tincidunt ipsum.
        </p>

        {/* ✅ Progress Circles Inline */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mt-8">
          {stats.map((item, i) => {
            const circumference = 2 * Math.PI * 42;
            const offset = circumference * (1 - counts[i] / 100);

            return (
              <div key={i} className="text-center">
                <div className="relative w-24 h-24 mx-auto">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="48"
                      cy="48"
                      r="42"
                      stroke="#00DAF0"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      strokeLinecap="round"
                      className="transition-all duration-300"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold text-gray-900">
                    {counts[i]}%
                  </div>
                </div>
                <p className="mt-3 text-gray-700 font-medium">{item.label}</p>
              </div>
            );
          })}
        </div>

        {/* Button */}
        <Link
          to="/about"
          className="inline-block bg-[#00DAF0] text-white px-8 py-3 font-medium mt-10 rounded-md shadow-md hover:bg-[#21297f] transition-all duration-500 hover:-translate-y-1"
        >
          READ MORE
        </Link>
      </div>

      {/* RIGHT SIDE */}
      <div className="lg:w-1/3 space-y-3">
        {/* Working Hours */}
        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-3 text-lg">
            <FaClock className="mr-2 text-[#00DAF0] text-xl" />
            <h3 className="font-semibold">Working Hours</h3>
          </div>
          <ul className="text-sm text-gray-200 space-y-2">
            <li>
              Monday – Friday{" "}
              <span className="float-right text-white font-medium">8.00 – 19.00</span>
            </li>
            <li>
              Saturday{" "}
              <span className="float-right text-white font-medium">9.30 – 17.00</span>
            </li>
            <li>
              Sunday{" "}
              <span className="float-right text-white font-medium">9.30 – 15.00</span>
            </li>
          </ul>
        </div>

        {/* Appointments */}
        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-3 text-lg">
            <FaPhoneAlt className="mr-2 text-[#00DAF0] text-xl" />
            <h3 className="font-semibold">Appointments</h3>
          </div>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat semper sollicitudin.
          </p>
        </div>

        {/* Emergency Cases */}
        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-3 text-lg">
            <FaAmbulance className="mr-2 text-[#00DAF0] text-xl" />
            <h3 className="font-semibold">Emergency Cases</h3>
          </div>
          <p className="text-[#00DAF0] text-lg font-semibold mb-2">
            +92 51 5707299
          </p>
          <p className="text-sm text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MedicalSection;
