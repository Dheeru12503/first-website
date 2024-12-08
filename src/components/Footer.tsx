// components/Footer.tsx
import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-700 py-10 px-5 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap justify-between items-start space-y-10 md:space-y-0">
        {/* Logo and Description */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <img
            src="https://unitedestates.com/wp-content/uploads/2022/12/Untitled-design-6-1.png"
            alt="United Estates Logo"
            className="mx-auto md:mx-0 max-w-[150px] mb-4"
          />
          
          <p className="text-sm text-gray-600">
            Real Estate Brokerage & Property Management Solution
          </p>
          <p className="text-sm text-gray-600 mt-4">
            We specialize in Real Estate Consultancy and Services in Dubai,
            including Buying/Selling, Leasing/Rental, and Property Management.
          </p>
        </div>

        {/* Quick Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/our-agents">Our Agents</Link>
            </li>
            <li>
              <Link href="/buy">Buy</Link>
            </li>
            <li>
              <Link href="/sell">Sell</Link>
            </li>
            <li>
              <Link href="/rent">Rent</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/client-reviews">Client Reviews</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500">Contact Us</h3>
          <p className="text-gray-600">
            Office No 204, Al Masaood Tower 2,
            <br />
            Airport Road, Deira, Dubai.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-sm">
              <strong>For Sales Enquiries:</strong> +971 42500089
            </p>
            <p className="text-sm">
              <strong>For Leasing Enquiries:</strong> +971 42500089
            </p>
            <p className="text-sm">
              <strong>For Maintenance Enquiries:</strong> +971 529911010
            </p>
            <p className="text-sm">
              <strong>Email:</strong>{" "}
              <a href="mailto:info@unitedestates.com" className="text-blue-700">
                info@unitedestates.com
              </a>
            </p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="w-full md:w-1/4 text-center md:text-left">
          <h3 className="text-lg font-semibold text-orange-500">Follow Us</h3>
          <div className="flex justify-center md:justify-start space-x-3 text-gray-600 mt-2">
            {/* Responsive Icon Sizes */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaYoutube />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg sm:text-xl md:text-2xl"
            >
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-10 pt-4 text-sm text-gray-500 text-center">
        <p>
          © 2024. All Rights Reserved. /{" "}
          <Link href="/privacy-terms" className="text-gray-600">
            Privacy & Terms
          </Link>
          .
        </p>
        <p>Designed by Digital Marketing</p>
      </div>
    </footer>
  );
};

export default Footer;
