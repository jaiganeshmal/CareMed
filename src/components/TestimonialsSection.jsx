import React, { useState } from "react";
import { FaPlay, FaQuoteLeft, FaTimes } from "react-icons/fa";

const testimonials = [
    {
        id: 1,
        type: "video",
        src: "https://www.youtube.com/embed/dCcfQaEwA9s?si=WKzQsytxcisCghDF",
        thumbnail: "https://img.youtube.com/vi/dCcfQaEwA9s/hqdefault.jpg",
        text: "We have been sourcing surgical consumables from this company for years...",
        doctor: "Dr. Ahmed Raza",
        designation: "Consultant Surgeon",
        hospital: "National Medical Centre"
    },
    {
        id: 2,
        type: "video",
        src: "https://www.youtube.com/embed/KYyuPJ1tgcE?si=wBmoX3Klfz-ZbVKa",
        thumbnail: "https://img.youtube.com/vi/KYyuPJ1tgcE/hqdefault.jpg",
        text: "The range of wound closure and airway management products is well organized...",
        doctor: "Dr. Sarah Khan",
        designation: "Senior Anesthesiologist",
        hospital: "City Care Hospital"
    },
    {
        id: 3,
        type: "video",
        src: "https://www.youtube.com/embed/rR1Eng_G08I?si=bwnOjYnQP-NQVYPg",
        thumbnail: "https://img.youtube.com/vi/rR1Eng_G08I/hqdefault.jpg",
        text: "Product availability and support is what makes them stand out.",
        doctor: "Dr. Bilal Hussain",
        designation: "Head of Surgery",
        hospital: "Al Noor Surgical Hospital"
    }
];



const TestimonialsSection = () => {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <>
            <section className="py-10 bg-[#F7FBFF]">
                <div className="max-w-7xl mx-auto px-6">

                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0a8ddf] mb-12">
                        Surgeon Testimonials
                    </h2>

                    <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
                        {testimonials.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition"
                            >
                                {/* Media */}
                                <div
                                    onClick={() => item.src && setActiveVideo(item.src)}
                                    className="relative h-52 cursor-pointer overflow-hidden group rounded-t-xl"
                                >
                                    {/* Thumbnail */}
                                    <img
                                        src={item.thumbnail}
                                        alt={item.doctor}
                                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                                    />

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

                                    {/* Play Button */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                                            <FaPlay className="text-[#3BB8FD] text-xl ml-1" />
                                        </div>
                                    </div>
                                </div>


                                {/* Content */}
                                <div className="p-5 space-y-3">
                                    <FaQuoteLeft className="text-[#3BB8FD]" />
                                    <p className="text-gray-600 text-sm italic">{item.text}</p>

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
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center px-4">
                    <div className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden">
                        <button
                            onClick={() => setActiveVideo(null)}
                            className="absolute top-3 right-3 text-white text-xl z-10"
                        >
                            X
                        </button>

                        {activeVideo.endsWith(".mp4") ? (
                            <video src={activeVideo} controls autoPlay className="w-full h-auto" />
                        ) : (
                            <iframe
                                src={activeVideo}
                                className="w-full aspect-video"
                                allow="autoplay; fullscreen"
                                allowFullScreen
                                title="Testimonial Video"
                            />
                        )}
                    </div>
                </div>
            )}

        </>
    );
};

export default TestimonialsSection;
