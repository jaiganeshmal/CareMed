import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaPhoneAlt } from "react-icons/fa";
import { assets } from "../assets/global"; // ✅ Import assets

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  
  return (
    <header className="w-full shadow-md">
      {/* 🔹 Main Navbar */}
      <nav className="bg-white">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          {/* ✅ Logo from assets */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={assets.logo}
              alt="CareMed Logo"
              loading="lazy"
              className="h-16 w-auto object-contain"
            />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-gray-700 font-medium md:pr-6">
            <li>
              <Link to="/" className="hover:text-[#00DAF0] transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#00DAF0] transition">
                About us
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
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-gray-700 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* 🔹 Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden bg-gray-100 py-4 px-6 flex flex-col gap-4 font-medium text-gray-700">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#00DAF0]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#00DAF0]">
                About us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)} className="hover:text-[#00DAF0]">
                Services
              </Link>
            </li>
            <li>
              <Link to="/products" onClick={() => setMenuOpen(false)} className="hover:text-[#00DAF0]">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="hover:text-[#00DAF0] ">
                Contact
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
