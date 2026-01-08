import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
    return (
        <section className="w-full py-10 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                {/* 🔹 LEFT: Contact Info */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0a8ddf] mb-6 relative inline-block">
                        Get in touch
                        {/* <span className="absolute top-0 left-0 w-1/4 h-1 bg-[#25a9f1] -translate-y-3"></span> */}
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
                        ante leo, finibus quis est ut, tempor tincidunt ipsum. Nam consequat
                        semper sollicitudin. Aliquam nec dapibus massa.
                    </p>

                    {/* Contact Details */}
                    <ul className="space-y-5">
                        <li className="flex items-center">
                            <div className="bg-[#0a8ddf] p-3 rounded-md text-white mr-4">
                                <FaPhoneAlt size={18} />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">
                                +92 51 5707299
                            </span>
                        </li>

                        <li className="flex items-center">
                            <div className="bg-[#0a8ddf] p-3 rounded-md text-white mr-4">
                                <FaEnvelope size={18} />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">
                                support@medicare.com
                            </span>
                        </li>

                        <li className="flex items-center">
                            <div className="bg-[#0a8ddf] p-3 rounded-md text-white mr-4">
                                <FaMapMarkerAlt size={18} />
                            </div>
                            <span className="text-gray-700 text-sm md:text-base">
                                Apartment 10, Safari Villas 2 Commercial Complex, Bahria Town Phase 7, Rawalpindi
                            </span>
                        </li>
                    </ul>
                </div>

                {/* 🔹 RIGHT: Contact Form */}
                <form className="space-y-4 bg-white shadow-md rounded-lg p-6 border border-gray-100">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <input
                            type="text"
                            placeholder="Name"
                            className="bg-gray-100 w-full p-3 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#25a9f1]"
                        />
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="bg-gray-100 w-full p-3 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#25a9f1]"
                        />
                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="bg-gray-100 w-full p-3 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#25a9f1]"
                    />

                    <textarea
                        placeholder="Message"
                        rows="5"
                        className="bg-gray-100 w-full p-3 rounded-md border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#25a9f1] resize-none"
                    ></textarea>

                    <button
                        type="submit"
                        className="relative overflow-hidden bg-[#0a8ddf] hover:bg-[#25a9f1] text-white font-bold px-8 py-3 rounded-md transition-all duration-300 uppercase tracking-wide"
                    >
                        SEND
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
