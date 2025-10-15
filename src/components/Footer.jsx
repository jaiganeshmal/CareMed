import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { assets } from "../assets/global";

const Footer = () => {
  return (
    <footer className="bg-[#060B3A] text-white pt-10 pb-8 relative">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* 🔹 Column 1 - Logo & About */}
        <div>
          <img
            src={assets.logo}
            alt="Company Logo"
            className="w-36 mb-4"
            loading="lazy"
          />
          <p className="text-sm text-gray-300 mb-6">
            Dedicated to providing top-quality healthcare with compassion and expertise.
          </p>

          {/* Social Media */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00DAF0] transition-all duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00DAF0] transition-all duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00DAF0] transition-all duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/10 hover:bg-[#00DAF0] transition-all duration-300"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* 🔹 Column 2 - Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Quick Links</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#00DAF0] -translate-y-3"></div>
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#00DAF0] transition">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-[#00DAF0] transition">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-[#00DAF0] transition">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#00DAF0] transition">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 3 - Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Our Services</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#00DAF0] -translate-y-3"></div>
          </h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Wound Closure
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Air Managment
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Hemostasis
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Energy Products
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Hernia Repair
              </Link>
            </li>
          </ul>
        </div>

        {/* 🔹 Column 4 - Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 relative inline-block">
            <span>Contact Us</span>
            <div className="absolute top-0 left-0 w-1/2 h-1 bg-[#00DAF0] -translate-y-3"></div>
          </h3>
          <ul className="space-y-3 text-gray-300">
            <li>📍 Apartment 10, Safari Villas 2 Commercial Complex, Bahria Town Phase 7, Rawalpindi</li>
            <li>📞 +92 51 5707299</li>
            <li>✉️ support@medicare.com</li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AnwarSons — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
