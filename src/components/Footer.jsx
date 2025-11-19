import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/global";

const Footer = () => {
  return (
    <footer className="bg-[#25a9f1] text-white pt-10 pb-8 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 🔹 Column 1 - Logo & About */}
        <div>
          <img
            src={assets.logo}
            alt="Company Logo"
            className="w-36 mb-4"
            loading="lazy"
          />
          <p className="text-sm text-white mb-6">
            Dedicated to providing top-quality healthcare with compassion and expertise.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#3BB8FD] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#3BB8FD] transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#3BB8FD] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#3BB8FD] transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 🔹 Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Quick Links</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#25a9f1] -translate-y-3"></div>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-600 transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-600 transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-gray-600 transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-600 transition">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 3 - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Our Services</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#25a9f1] -translate-y-3"></div>
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Wound Closure
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Air Managment
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Hemostasis
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Energy Products
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-gray-600 transition">
                Hernia Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Contact Us</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#25a9f1] -translate-y-3"></div>
          </h3>
          <ul className="space-y-3">
            <li>📍 Apartment 10, Safari Villas 2 Commercial Complex, Bahria Town Phase 7, Rawalpindi</li>
            <li>📞 +92 51 5707299</li>
            <li>✉️ info@anwarsons.com</li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-6 border-t border-gray-600 pt-6 text-center text-sm">
        © {new Date().getFullYear()} AnwarSons — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
