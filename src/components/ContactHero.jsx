import React from "react";
import { assets } from "../assets/global";

const ContactHero = () => {
    return (
        <section
            className="relative w-full bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${assets.testimonialBg})`,
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

                <button className="relative w-max overflow-hidden bg-[#0a8ddf] text-white font-semibold px-10 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition-all duration-500 group">
                    <span className="relative z-10 group-hover:text-[#3BB8FD] transition-all duration-500">
                        Contact us
                    </span>
                    <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></span>
                </button>
            </div>
        </section>
    );
};

export default ContactHero;
