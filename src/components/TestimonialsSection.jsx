import React, { useState } from "react";
import { FaPlay, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    type: "video",
    src: "https://res.cloudinary.com/dy2ddzcoq/video/upload/v1768281310/WhatsApp_Video_2026-01-13_at_9.51.00_AM_rqwskv.mp4",
    thumbnail:
      "https://res.cloudinary.com/dy2ddzcoq/video/upload/so_1/v1768281310/WhatsApp_Video_2026-01-13_at_9.51.00_AM_rqwskv.jpg",
    text: "We have been sourcing surgical consumables from this company for years...",
    doctor: "Dr. Ahmed Raza",
    designation: "Consultant Surgeon",
    hospital: "National Medical Centre",
  },
  {
    id: 2,
    type: "video",
    src: "https://res.cloudinary.com/dy2ddzcoq/video/upload/v1768281329/WhatsApp_Video_2026-01-13_at_9.51.00_AM_1_si3jip.mp4",
    thumbnail:
      "https://res.cloudinary.com/dy2ddzcoq/video/upload/so_1/v1768281329/WhatsApp_Video_2026-01-13_at_9.51.00_AM_1_si3jip.jpg",
    text: "The range of wound closure and airway management products is well organized...",
    doctor: "Dr. Sarah Khan",
    designation: "Senior Anesthesiologist",
    hospital: "City Care Hospital",
  },
  {
    id: 3,
    type: "video",
    src: "https://res.cloudinary.com/dy2ddzcoq/video/upload/v1768281349/WhatsApp_Video_2026-01-13_at_9.50.59_AM_excuo5.mp4",
    thumbnail:
      "https://res.cloudinary.com/dy2ddzcoq/video/upload/so_1/v1768281349/WhatsApp_Video_2026-01-13_at_9.50.59_AM_excuo5.jpg",
    text: "Product availability and support is what makes them stand out.",
    doctor: "Dr. Bilal Hussain",
    designation: "Head of Surgery",
    hospital: "Al Noor Surgical Hospital",
  },
];

const TestimonialsSection = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <>
      <section className="py-10 bg-[#F7FBFF]">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a8ddf] mb-10">
            Surgeon Testimonials
          </h2>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition"
              >
                {/* VIDEO CARD */}
                <div
                  className="relative h-56 rounded-t-xl overflow-hidden group cursor-pointer"
                  onClick={() => setActiveVideo(item.src)}
                >
                  {/* Thumbnail */}
                  <img
                    src={item.thumbnail}
                    alt={item.doctor}
                    className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                  />

                  {/* Hover Preview */}
                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover  opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onMouseEnter={(e) => e.currentTarget.play()}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                      e.currentTarget.currentTime = 0;
                    }}
                  />

                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:opacity-0 transition">
                    <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <FaPlay className="text-[#3BB8FD] text-xl ml-1" />
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-5 space-y-3">
                  <FaQuoteLeft className="text-[#3BB8FD]" />
                  <p className="text-gray-600 text-sm italic">
                    {item.text}
                  </p>

                  <div>
                    <h4 className="font-semibold text-[#0a8ddf] text-sm">
                      {item.doctor}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {item.designation}, {item.hospital}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0  bg-black/80 z-50 flex items-center justify-center px-4">
          <div className="relative w-1/3 h-[90vh] max-w-4xl bg-black rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-3 right-4 text-white text-2xl z-10 bg-red-600 rounded-md size-6 cursor-pointer flex justify-center items-center"
            >
              ×
            </button>

            <video
              src={activeVideo}
              controls
              autoPlay
              className="w-full h-auto object-cover "
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TestimonialsSection;
