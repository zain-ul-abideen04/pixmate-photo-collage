"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from "react-icons/fa";
import { siteName, footerContent } from "../data/homeContent";

export default function Footer() {
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <>
      <div className='bg-pink-800 h-100 flex'>
        <div className='bg-pink-800 w-[40%]'>
          <div className="bg-pink-800 min-h-10 mt-5 ml-5 w-full flex flex-col justify-center px-8 md:px-16 py-10 font-sans text-white">

            {/* 1. TOP ROW: Logo & Language Dropdown */}
            <div className="flex items-center gap-6 mb-8">
              {/* Logo Text */}
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
                {siteName}
              </h1>

              {/* Custom Language Selector Button */}
              <div className="relative">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="appearance-none bg-[#65D3E7] hover:bg-[#52c5d9] text-[#0d2a45] font-semibold text-sm md:text-base px-6 py-2.5 pr-10 rounded-full cursor-pointer outline-none shadow-md transition-all duration-200"
                >
                  {footerContent.languages.map((language) => (
                    <option key={language} value={language}>{language}</option>
                  ))}
                </select>

                {/* Custom Dropdown Down Arrow Icon */}
                <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#0d2a45]">
                  <svg
                    className="w-4 h-4 fill-current"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 2. BOTTOM ROW: Download From Section */}
            <div className="flex flex-col gap-3">
              {/* "Download from" Heading */}
              <h2 className="text-2xl md:text-3xl font-bold text-[#387CA3]">
                {footerContent.downloadTitle}
              </h2>

              {/* App Store & Google Play Store Badges */}
              <div className="flex flex-wrap items-center gap-4 mt-1">

                {/* App Store Button */}
                <a
                  href="#app-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg border border-gray-400 hover:border-white transition-all shadow-md group"
                >
                  {/* Apple Logo SVG */}
                  <svg className="w-6 h-6 fill-current text-white" viewBox="0 0 384 512">
                    <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 52.3-14.8 69.5-34.3z"/>
                  </svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase font-medium text-gray-300 w-30">Download on the</span>
                    <span className="text-base font-semibold text-white tracking-wide ">App Store</span>
                  </div>
                </a>

                {/* Google Play Button */}
                <a
                  href="#google-play"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-black text-white px-4 py-2 rounded-lg border border-gray-400 hover:border-white transition-all shadow-md group"
                >
                  {/* Google Play Logo SVG */}
                  <svg className="w-6 h-6" viewBox="0 0 512 512">
                    <path fill="#410593" d="M72.2 480.2c-11.8 0-21.7-4.1-29.3-12.2L253 258l56.5 56.5L84.8 472.1c-3.8 5.4-8 8.1-12.6 8.1z"/>
                    <path fill="#00e676" d="M42.9 468c-8.1-7.6-12.2-17.5-12.2-29.3V73.3c0-11.8 4.1-21.7 12.2-29.3l210.3 214L42.9 468z"/>
                    <path fill="#ffd600" d="M468 238.8l-72.2-41.6-86.3 60.8 86.3 60.8 72.2-41.6c11.8-6.8 17.7-13.8 17.7-20.8s-5.9-14-17.7-20.8z"/>
                    <path fill="#ff3d00" d="M72.2 31.8c4.6 0 8.8 2.7 12.6 8.1l224.7 157.6-56.5 56.5L42.9 44c7.6-8.1 17.5-12.2 29.3-12.2z"/>
                  </svg>
                  <div className="flex flex-col text-left leading-tight">
                    <span className="text-[10px] uppercase font-medium text-gray-300">GET IT ON</span>
                    <span className="text-base font-semibold text-white tracking-wide">Google Play</span>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </div>

        {footerContent.columns.map((column) => (
          <div key={column.title} className='bg-pink-800 w-[15%]'>
            <p className='text-white text-2xl font-bold mt-20 ml-5'>{column.title}</p>
            {column.links.map((link) => (
              <p key={link} className='text-white ml-5 mt-3'>{link}</p>
            ))}
          </div>
        ))}
      </div>

      <footer className="w-full bg-[#111827] text-slate-400 py-6 px-8 font-poppins border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Left Section: Navigation Links */}
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            {footerContent.bottomLinks.map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors">
                {link}
              </a>
            ))}

            {/* More Dropdown */}
            <div className="relative inline-block">
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
              >
                <span>{footerContent.moreLabel}</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>

              {isMoreOpen && (
                <div className="absolute left-0 bottom-full mb-2 w-40 bg-slate-800 text-slate-200 rounded-xl shadow-xl py-2 border border-slate-700 z-50 text-xs">
                  {footerContent.moreLinks.map((link) => (
                    <a key={link} href="#" className="block px-4 py-2 hover:bg-slate-700 transition-colors">{link}</a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Center Section: Social Media Icons */}
          <div className="flex items-center gap-5 text-lg">
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#E21564] hover:text-white transition-all text-slate-300">
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#E21564] hover:text-white transition-all text-slate-300">
              <FaTwitter className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#E21564] hover:text-white transition-all text-slate-300">
              <FaInstagram className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#E21564] hover:text-white transition-all text-slate-300">
              <FaYoutube className="w-4 h-4" />
            </a>
            <a href="#" className="w-9 h-9 rounded-full bg-slate-800/80 flex items-center justify-center hover:bg-[#E21564] hover:text-white transition-all text-slate-300">
              <FaPinterestP className="w-4 h-4" />
            </a>
          </div>

          {/* Right Section: Copyright Text */}
          <div className="text-sm font-normal text-slate-400">
            {footerContent.copyright}
          </div>

        </div>
      </footer>
    </>
  );
}