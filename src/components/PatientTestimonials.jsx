import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { assets } from "../assets/global";

const testimonials = [
  {
    text: "Mr. Tahir Khan started his career as Sales Officer with distribution company of healthcare products. In 1986, he decided to establish his own business and formed Anwar& sons. He utilized his skills and knowledge for the growth of the company. He always looks for the best products available in the international market at most cost-effective price.",
    name: "M. Tahir Khan",
    role: "Managing Director",
    // img: "https://randomuser.me/api/portraits/women/68.jpg",
    img: "https://res.cloudinary.com/dy2ddzcoq/image/upload/v1760771058/Picture-1_niewbx.png",
  },
  {
    text: "Mr. Tariq Zaidi assumed his current responsibilities in 2014 as Head of Sales & Marketing. He carries with him 40 years of experience in field of sales & marketing of pharmaceuticals and medical devices. He started his career with Merck Sharp & Dohme as Medical Representative than he moved to Johnson & Johnson. He worked there for Ethicon Division and served the company in various positions for 30, years and finally retired from the position of business unit head.",
    name: "Tariq Zaidi",
    role: "Head of Sales & Marketing",
    // img: "https://randomuser.me/api/portraits/men/34.jpg",
    img: "https://res.cloudinary.com/dy2ddzcoq/image/upload/v1760771058/Picture-3_iy6xmj.png",
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
            Meet Our Team
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
                  className="w-14 h-14 object-cover rounded-full border-2 border-[#00DAF0] shadow-md"
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
