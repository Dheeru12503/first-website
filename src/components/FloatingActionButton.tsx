"use client";
import React, { useState } from "react";
import { FaWhatsapp, FaFacebookMessenger, FaTimes } from "react-icons/fa";
import { RiWechatLine } from "react-icons/ri"; // Import RiWechatLine
import { motion, AnimatePresence } from "framer-motion";

const FloatingActionButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col items-center space-y-3">
      {/* Animated button options */}
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col items-center space-y-3 mb-3">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.5,
              }}
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 text-white rounded-full shadow-md hover:bg-green-600 transition"
            >
              <FaWhatsapp size={24} />
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
                duration: 0.5,
                delay: 0.1,
              }}
              href="https://m.me/your-messenger-id"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
            >
              <FaFacebookMessenger size={24} />
            </motion.a>
          </div>
        )}
      </AnimatePresence>

      {/* Main button with toggle between WeChat and cross icons */}
      <motion.button
        animate={{ rotate: isOpen ? 360 : 0 }} // 720° for 2 full rotations
        transition={{
          type: "spring",
          stiffness: 300, // Higher stiffness for quicker acceleration
          damping: 15, // Lower damping for a smoother rotation
          duration: 0.1, // Shorter duration for faster rotation
        }}
        onClick={toggleMenu}
        className="p-4 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition"
      >
        {isOpen ? <FaTimes size={24}  /> : <RiWechatLine size={24} />}{" "}
        {/* Replace FaPlus with RiWechatLine */}
      </motion.button>
    </div>
  );
};

export default FloatingActionButton;
