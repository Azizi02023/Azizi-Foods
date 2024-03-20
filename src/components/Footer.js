import React from 'react';
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer className="bg-slate-500 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row justify-between items-center">
        {/* Left side */}
        <div className="flex justify-center lg:justify-start mb-4 lg:mb-0">
          <h1 className="text-lg font-bold mr-2">Azizi Foods</h1>
          <span className="text-sm">© 2024 Azizi Foods. All rights reserved.</span>
        </div>
        {/* Right side */}
        <div className="flex items-center">
          <ul className="flex space-x-4">
            <li><a href="/" className="hover:text-gray-300">About Us</a></li>
            <li><a href="/" className="hover:text-gray-300">Contact Us</a></li>
            <li><a href="/" className="hover:text-gray-300">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-gray-300">Terms of Service</a></li>
          </ul>
          <div className="flex ml-6 space-x-4">
            <a href="/" className="text-xl hover:text-gray-300"><AiOutlineFacebook /></a>
            <a href="/" className="text-xl hover:text-gray-300"><AiOutlineTwitter /></a>
            <a href="/" className="text-xl hover:text-gray-300"><AiOutlineInstagram /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
