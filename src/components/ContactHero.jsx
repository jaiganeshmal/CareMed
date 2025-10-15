import React from "react";
import { assets } from "../assets/global"; // ✅ background image from global.js

const ContactHero = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${assets.testimonialBg})`, // ✅ your global image key
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-[#0b1437]/50"></div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col justify-center text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                    Get in Touch With Us
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-2xl mb-6">
                    Have questions or need medical assistance? Our team is here to help
                    you 24/7. Contact us and we’ll get back to you as soon as possible.
                </p>

                <button className="bg-[#00DAF0] hover:bg-white text-white hover:text-black font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300 w-fit">
                    Contact Now
                </button>
            </div>
        </section>
    );
};

export default ContactHero;
