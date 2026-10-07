"use client";
import Image from 'next/image'
import { Edit3, LayoutGrid, Download } from 'lucide-react';
import React from 'react'
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import { ChevronUp, ChevronDown } from "lucide-react";
import Link from 'next/link';

const features = [
  {
    id: 1,
    title: "Easy to Use",
    description: "No editing skills needed. With an intuitive, drag-and-drop interface, you can easily add photos to create a collage.",
    icon: (
      <svg className="w-18 h-18 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "High Quality",
    description: "Save photo collages in high-resolution JPEG, PNG, and PDF. Perfect for printing as a poster or wall art.",
    icon: <span className="text-white font-extrabold text-4xl italic tracking-wider">HD</span>,
  },
  {
    id: 3,
    title: "Versatile Collage Templates",
    description: "Create photo collage from a diverse library of templates and layouts for easy customization.",
    icon: (
      <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
      </svg>
    ),
  },
];

const stepsData = [
  {
    id: "1",
    title: "Open the Pixmate photo editor",
    description: "Open the Pixmate photo editor and browse the collage grids to find your ideal one.",
    hasButton: true,
  },
  {
    id: "2",
    title: "Upload your photos",
    description: "Once you've found the right grid, select each individual box and upload your image into it.",
    hasButton: false,
  },
  {
    id: "3",
    title: "Customize your collage",
    description: "Put your personal touches on your collage by adding photo effects, stickers, text, and anything else you want.",
    hasButton: false,
  },
  {
    id: "4",
    title: "Download your design",
    description: "When you're finished editing, name your file and download your collage.",
    hasButton: false,
  },
];

const featuresData = [
  {
    id: 1,
    text: "Easy to create and customize",
    icon: <Edit3 className="w-5 h-5 text-sky-200" />,
  },
  {
    id: 2,
    text: "Beautifully designed templates",
    icon: <LayoutGrid className="w-5 h-5 text-sky-200" />,
  },
  {
    id: 3,
    text: "Millions of stock photos and illustrations",
    icon: <LayoutGrid className="w-5 h-5 text-sky-200" />,
  },
  {
    id: 4,
    text: "Easily download or share",
    icon: <Download className="w-5 h-5 text-sky-200" />,
  },
];

interface Category {
  id: string;
  name: string;
  images: string[];
}

const categories: Category[] = [
  {
    id: "family",
    name: "Family",
    images: [
      "/pic10.png",
      "/pic11.png",
      "/pic12.png",
      "/pic13.png",
      "/pic14.png",
      "/pic15.png",
      "/pic16.png",
      "/pic17.png",
      "/pic18.png"
    ],
  },
  {
    id: "birthday",
    name: "Birthday",
    images: [
      "/pic19.png",
      "/pic20.png",
      "/pic21.png",
      "/pic22.png",
      "/pic23.png",
      "/pic24.png",
      "/pic25.png",
      "/pic26.png",
      "/pic28.png"
    ],
  },
  {
    id: "wedding",
    name: "Wedding",
    images: [
      "/pic29.png",
      "/pic30.png",
      "/pic31.png",
      "/pic32.png",
      "/pic33.png",
      "/pic34.png",
      "/pic35.png",
      "/pic36.png",
      "/pic37.png"
    ],
  },
  {
    id: "love",
    name: "Love",
    images: [
      "/pic19.png",
      "/pic21.png",
      "/pic32.png",
      "/pic36.png",
      "/pic24.png",
      "/pic15.png",
      "/pic13.png",
      "/pic23.png",
      "/pic34.png"
    ],
  },
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Can I edit any photo collage template?",
    answer:
      "Absolutely - customize any of our pre-made photo collage layouts, any way you see fit. Pixmate offers several professionally designed, time-saving templates.",
  },
  {
    id: 2,
    question: "Can I edit the images in my photo collage?",
    answer:
      "Yes, you can easily adjust, crop, apply filters, and reposition any image within your collage frames.",
  },
  {
    id: 3,
    question: "Is the Pixmate collage maker free?",
    answer:
      "Yes! Pixmate offers a free version with access to hundreds of collage layouts, stock photos, and basic editing tools.",
  },
  {
    id: 4,
    question: "What types of collages can I create with Pixmate?",
    answer:
      "You can create grid collages, photo series, aesthetic social media posts, posters, birthday collages, and wall art.",
  },
  {
    id: 5,
    question: "How do I make a good photo collage?",
    answer:
      "Choose a consistent theme or color palette, select high-quality photos, use grid layouts to balance the image spacing, and add subtle text or stickers.",
  },
  {
    id: 6,
    question: "How long will it take to create a collage?",
    answer:
      "With our easy drag-and-drop templates, you can create and download a professional photo collage in less than 2 minutes!",
  },
];


function Page() {
  const [activeTab, setActiveTab] = useState<string>("family");

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

const [isOpen, setIsOpen] = useState(false);
const [selectedLanguage, setSelectedLanguage] = useState('English');
const [isMoreOpen, setIsMoreOpen] = useState(false);

  return (
    <div className='min-h-screen bg-linear-to-r from-[#7F0534] to-[#E21564] '>
      <div className='bg-pink-700 h-[800]'>
        <div className='bg-blue-300 h-[90] flex'>
          <div className='bg-pink-700 w-[20%] flex justify-center items-center'>
            <p className='text-4xl font-bold text-white'>Pixmate</p>
          </div>
          <div className='bg-pink-700 flex w-[70%] gap-6 justify-center items-center text-white overflow-visible'>
  
          {/* Create aur Dropdown Div ka Wrapper */}
          <div className="relative inline-block overflow-visible">
            <p
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer text-white hover:underline select-none text-xl"
            >
              Create
            </p>

            {isOpen && (
              <div className="absolute top-full left-0 mt-3 w-180 bg-white rounded-2xl shadow-2xl p-8 z-50 border border-gray-100 font-poppins text-slate-800 animate-in fade-in zoom-in-95 duration-150">
      <div className="grid grid-cols-3 gap-10 text-left">
        
        {/* Column 1: Marketing */}
        <div>
          <h3 className="font-bold text-xl text-[#0F172A] mb-4">Marketing</h3>
          <ul className="space-y-3 text-slate-600 text-sm font-medium">
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Logo Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Flyer Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Poster Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Business Card Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Resume Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Card Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer font-semibold pt-1">See All</li>
          </ul>
        </div>

        {/* Column 2: Social Media */}
        <div>
          <h3 className="font-bold text-xl text-[#0F172A] mb-4">Social Media</h3>
          <ul className="space-y-3 text-slate-600 text-sm font-medium">
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">YouTube Thumbnail Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">YouTube Cover Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Instagram Post Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Facebook Cover Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Twitch Cover Maker</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Twitter Cover Maker</li>
          </ul>
        </div>

        {/* Column 3: Events */}
        <div>
          <h3 className="font-bold text-xl text-[#0F172A] mb-4">Events</h3>
          <ul className="space-y-3 text-slate-600 text-sm font-medium">
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Valentine Day</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Thanksgiving</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Christmas</li>
            <li className="hover:text-[#E21564] cursor-pointer transition-colors">Halloween</li>
          </ul>
        </div>

      </div>
    </div>
            )}
          </div>

          <p className="cursor-pointer text-xl">Editing Tools</p>
          <p className="cursor-pointer text-xl">Templates</p>
          <p className="cursor-pointer text-xl">Design Library</p>
          <p className="cursor-pointer text-xl">Enterprise</p>
          <p className="cursor-pointer text-xl">Learning & Support</p>
          <p className="cursor-pointer text-xl">Pricing</p>
        </div>
          <div className='flex bg-pink-700 w-[25%]'>
            <Link href={"/login"}
            className='bg-white h-13 w-28 flex justify-center items-center mt-5 ml-10 rounded-4xl'>
            Login
            </Link>
            <Link
            href={"/signup"}
            className='bg-pink-700 text-blue-300 h-1 w-28 flex justify-center items-center mt-5 ml-5 border-2 rounded-3xl'
            >Signup
            </Link>
          </div>
        </div>
        <div className='flex'>
        <div className='bg-pink-700 w-[50%] h-[700] flex justify-center items-center'>
          <div className='w-[70%] ml-10'>
            <p className='text-8xl font-bold text-[#6FCADD] font-sans'>Photo</p>
            <p className='text-8xl font-bold text-[#EAA820] font-sans'>Collage</p>
            <p className='text-8xl font-bold text-[#6FCADD] font-sans'>Maker</p>
            <p className='text-white text-2xl mt-3'>A picture says a thousand words, but collages tell an entire story. Get creative with Picsart free collage maker to design motivational vision boards, social media posts, and more.</p>
            <div className=''>
              <p className='bg-[#D9D9D9] font-sans size-6 h-14 w-75 rounded-3xl flex justify-center items-center mt-5'>Create youe collage now</p>
            </div>
          </div>
        </div>
      <div className="relative w-180 h-150 mt-10 bg-linear-to-b bg-pink-700 flex items-center justify-center overflow-hidden rounded-2xl">
          <div className="absolute w-45 h-45 border-16 border-[#52c5dc] rounded-full top-85 left-40 opacity-90 pointer-events-none" />
          <div className="absolute w-40 h-40 border-16 border-[#4180be] rounded-full top-30 right-50 opacity-80 pointer-events-none" />
          <div className="absolute w-45 h-45 border-16 border-[#52c5dc] rounded-full top-50 right-55 opacity-90 pointer-events-none" />
          <div className="absolute top-20 left-19 w-13 h-13 bg-white rounded-full shadow-md" />
          <div className="absolute bottom-28 right-35 w-6 h-6 bg-white rounded-full shadow-md" />
          <div className="absolute top-9 right-0 w-35 h-0.5 bg-[#93e0ee] rotate-135" />
          <div className="absolute bottom-8 left-2 w-36 h-0.5 bg-[#93e0ee] rotate-135" />
        <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute top-10 left-60 z-20 w-50 h-50 rounded-3xl border-8 border-[#52c5dc] overflow-hidden shadow-xl transform rotate-12">
              <Image
                src="/pic1.png"
                alt="Top collage photo"
                className="w-full h-full object-cover"
                width={60}
                height={60}
              />
            </div>
            <div className="absolute top-45 left-40 z-10 w-50 h-50 rounded-3xl border-6 border-[#52c5dc] overflow-hidden shadow-xl transform -rotate-6">
              <Image
                src="/pic2.png"
                alt="Middle collage photo"
                className="w-full h-full object-cover"
                width={40}
                height={40}
              />
            </div>
            <div className="absolute top-73 right-60 z-30 w-50 h-50 rounded-3xl border-6 border-[#52c5dc] overflow-hidden shadow-2xl transform rotate-340">
              <Image
                src="/pic3.png"
                alt="Bottom collage photo"
                className="w-full h-full object-cover"
                width={60}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white h-130'>
        <div className='bg-white h-35 flex justify-center items-center '>
          <p className='text-5xl w-[40%] font-bold'>Why Choose <span className='text-orange-400'>Pixmate</span>. to Make a Photo Collage</p>
        </div>
      <div className="ml-25 mx-auto p-6 bg-white h-130 ">
      <div className="grid grid-cols-1 md:grid-cols-3  pt-6 pb-12 w-7xl ">
        {features.map((item) => (
          <div key={item.id} className="relative">
            <div 
              className="absolute -bottom-20  left-50 -translate-x-1/2 w-45 h-45 rounded-full bg-[#52C5DC] " 
              style={{ zIndex: 1 }}
            />
            <div 
              className="relative bg-[#E5A323] text-white p-6 pb-14 rounded-2xl text-center min-h-80 w-100 flex flex-col justify-start items-center shadow-sm hover:bg-amber-400"
              style={{ zIndex: 2 }}
            >
              <h3 className="text-3xl font-bold mb-4 text-black  ">{item.title}</h3>
              <p className=" w-[50%]  leading-relaxed opacity-95 ">
                {item.description}
              </p>
              <div 
                className="absolute -bottom-15 left-1/2 -translate-x-1/2 w-35 h-35 rounded-full bg-[#E5A323] flex items-center justify-center shadow-md hover:bg-amber-400"
                style={{ zIndex: 3 }}
              >
                {item.icon}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
    <div className='bg-pink-700 h-220 flex '>
      <div className='bg-pink-700 w-[50%]'>
        <div className='flex bg-pink-700 h-30 justify-center items-center mt-5'>
          <p className='text-5xl font-bold w-[50%] text-blue-400 font-sans'>Let Make a <span className='text-orange-400 '>Collage</span></p>
        </div>
        <div className="min-h-screen bg-pink-700 flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Main Wrapper */}
      <div className="relative w-full max-w-4xl h-137 flex items-center justify-center">

        {/* 1. YELLOW CIRCLE (Top Left - Background Ring) */}
        <div 
          className="absolute -left-8 md:-left-2 top-1 w-56 h-56 md:w-50 md:h-50 rounded-full border-16 md:border-18p border-[#E8AF15] opacity-90 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* 2. CYAN CIRCLE (Bottom Right - Foreground Ring) */}
        <div 
          className="absolute -right-1 -bottom-4  md:-bottom-6 w-60 h-60 md:w-50 md:h-50 rounded-full border-15 md:border-18 border-[#42D2EC] pointer-events-none"
          style={{ zIndex: 5 }}
        />

        {/* 3. LEFT OVERLAY CARD */}
        <div 
          className="absolute left-[8%] md:left-[10%] top-[10%] w-64 md:w-72 h-105 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:z-30 hover:shadow-2xl hover:shadow-[#E21564]/40"
          style={{ zIndex: 10 }}
        >
          <Image 
            src="/pic4.png" 
            alt="Left Collage Photo" 
            fill
            sizes="(max-width: 768px) 256px, 288px"
            className="object-cover opacity-60 mix-blend-multiply transition-opacity duration-300 hover:opacity-100" 
          />
          <div className="absolute inset-0 bg-[#A10052]/40 mix-blend-color" />
        </div>

        {/* 4. RIGHT OVERLAY CARD */}
        <div 
          className="absolute right-[8%] md:right-[10%] top-[10%] w-64 md:w-72 h-105 rounded-3xl overflow-hidden shadow-2xl cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:z-30 hover:shadow-2xl hover:shadow-[#E21564]/40"
          style={{ zIndex: 10 }}
        >
          <Image 
          src="/pic4.png" 
          alt="Right Collage Photo" 
          fill
          sizes="(max-width: 768px) 256px, 288px"
          className="object-cover opacity-60 mix-blend-multiply transition-opacity duration-300hover:opacity-100" 
          />
        <div className="absolute inset-0 bg-[#A10052]/40 mix-blend-color" />
        </div>

        {/* 5. BLUE SELECTION FRAME */}
        <div 
          className="absolute left-[12%] md:left-[10%] top-[12%] w-64 md:w-72 h-100 border-2 border-[#3B82F6] pointer-events-none"
          style={{ zIndex: 25 }}
        >
          {/* Dimension Badge */}
          <div className="absolute -bottom-4 left-4 bg-[#00A3FF] text-white text-xs font-bold px-2.5 py-1 rounded shadow">
            264.79 × 438
          </div>
        </div>

        {/* 6. CENTER MAIN HERO CARD */}
        <div 
          className="relative w-[320px] h-130 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 ease-out hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-[#E21564]/40"
          style={{ zIndex: 30 }}
        >
          <Image 
            src="/pic4.png" 
            alt="Center Main Photo" 
            fill
            priority
            sizes="(max-width: 768px) 288px, 320px"
            className="object-cover" 
          />
          
          <div className="absolute inset-2 rounded-2xl border border-pink-300/30 pointer-events-none" />
        </div>

        {/* 7. DASHED GUIDELINES */}
        <div 
          className="absolute inset-0 pointer-events-none flex items-center justify-center"
          style={{ zIndex: 35 }}
        >
          <div className="absolute top-0 bottom-0 w-px border-r border-dashed border-pink-300/30" />
          <div className="absolute left-0 right-0 h-px border-b border-dashed border-pink-300/30" />
        </div>

      </div>
    </div>
      </div>
      <div className="bg-pink-700 min-h-screen p-8 flex flex-col justify-center items-center font-sans text-white">
      <div className="max-w-xl w-full space-y-10">
        {stepsData.map((step) => (
          <div key={step.id} className="flex items-start gap-6">
            <div className="relative text-7xl font-extrabold select-none min-w-15 text-center">
              <span className="absolute top-0 left-5 text-[#5dbedb]">
                {step.id}
              </span>
              <span className="relative text-white">
                {step.id}
              </span>
            </div>
            <div className="pt-2 flex-1">
              <h3 className="text-xl font-bold text-[#5dbedb] mb-1">
                {step.title}
              </h3>
              <p className="text-lg text-gray-200 leading-relaxed max-w-md">
                {step.description}
              </p>
              {step.hasButton && (
                <button className="mt-4 px-6 py-2.5 bg-gray-200 text-gray-800 text-sm font-semibold rounded-full shadow-md hover:bg-white transition-all">
                  Create your collage
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    <div className='bg-white h-200 flex '>
      <div className="flex items-center justify-center min-h-screen bg-white p-6 w-[50%]">
      
      {/* 1. Main Parent Container (Relative Position) */}
      <div className="relative w-120 h-170 flex items-center justify-center overflow-visible">
  
         {/* 2. Vertical Image */}
         <Image
           src="/pic5.png" // Apni vertical image ka path yahan dein
           alt="Vertical Preview"
           className="w-full h-full object-cover rounded-xl shadow-lg ml-20 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-4 hover:scale-105 hover:shadow-2xl hover:shadow-[#E21564]/40"
           width={700}
           height={500}
         />

        {/* 3. Horizontal Square Border Overlay (Absolute Position) */}
        {/* 'w-80 h-80' isko horizontal square shape deta hai jo vertical image se bahar overlap karega */}
        <div className="absolute w-160 h-90 ml-20 border-3 border-orange-400 rounded-2xl pointer-events-none shadow-2xl z-10 flex items-center justify-center">
          
          {/* Optional: Figma style dimension badge or label */}
          <div className="absolute -bottom-3 bg-cyan-400 text-slate-900 font-bold text-xs px-2.5 py-0.5 rounded-full shadow">
            Square Border
          </div>

        </div>

      </div>

    </div>
      <div className='bg-white w-[50%] flex justify-center items-center'>
        <div className='w-[70%]'>
          <p className='text-6xl font-bold font-sans text-[#6FCADD]'>Photo Collage <span className='text-[#EAA820]'>Template</span> and <span className='text-[#EAA820]'>Layouts</span> Tailored to Your Needs</p>
          <p className='mt-15 text-lg'>With our collage maker online, the possibilities for creating unique and visually appealing collages are truly endless. There are 2,000+ preset collage templates and layouts at your fingertips. To suit your demands, customize photo collage layout from our layout library. Even choose from our expertly designed collage templates for social media posts, mood boards, and more. Gather your pictures and tell your story in a creative and unique way with Pixmate picture collage maker..</p>
          <div className='bg-[#071C3B] h-12 text-[#6FCADD] w-50  flex justify-center items-center rounded-3xl mt-10'>Start Editing Photos</div>
        </div>   
      </div>
    </div>
      <div className="w-full bg-[#6FCADD] py-8 px-4 h-[200]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-10">
        {featuresData.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Darker blue circle container for icon */}
            <div className="w-12 h-12 rounded-full bg-[#527eaf] flex items-center justify-center shrink-0">
              {item.icon}
            </div>

            {/* Feature Text */}
            <p className="text-[#1a3852] font-semibold text-sm sm:text-base leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
    <div className='bg-pink-700 h-200 flex justify-center items-center gap-5'>
      <div className='w-[50%] ml-30 mb-60'>
        <p className='text-6xl font-bold text-[#6FCADD] '><span className='text-[#EAA820] font-sans'>Create</span> and <span className='text-[#EAA820]'>share</span> memories with a collage</p>
      </div>
      <div className="w-[50%] min-h-screen bg-red-750 flex items-center justify-center p-6 font-sans">
      
      {/* Main Wrapper Container */}
      <div className="relative w-125  h-125 flex items-center justify-center mr-50">

        {/* 1. RING CIRCLE BORDER (Bottom Right - Adha Piche / Layered) */}
        {/* Base Ring Image ke Peeche (z-0) */}
        {/* <div 
          className="absolute -right-16 -bottom-12 w-56 h-56 md:w-64 md:h-64 rounded-full border-18 border-cyan-400 pointer-events-none z-0"
        /> */}

        {/* 2. VERTICAL IMAGE CONTAINER (Center Layer - z-10) */}
        <div className="relative w-[700] h-[600] rounded-2xl overflow-hidden shadow-2xl z-10 bg-black/40">
          <Image
            src="/pic6.png" // Apni image ka path yahan dein
            alt="Vertical Card"
            className="w-full h-full object-cover"
            width={500}
            height={500}
          />
        </div>

        {/* Ring Overlap Clip (Adha Aage - z-20) */}
        {/* Is semi-circle overlay se ring ka right-bottom part image ke aage visual effect deta hai */}
       <div 
          className="absolute -right-16 -bottom-28 w-56 h-56 rotate-25 rounded-full border-18 border-cyan-400 pointer-events-none z-0"
        />

        {/* 3. HORIZONTAL SQUARE BORDER (Sabse Aage - z-30) */}
        {/* Image vertical (w-64 h-[420px]) hai aur ye border horizontal square (w-80 h-80) hai */}
        <div 
          className="absolute w-170 h-80 border-3 border-sky-500 rounded-3xl pointer-events-none z-30 shadow-xl flex items-center justify-center rotate-165"
        >
          {/* Optional Dimension Tag */}
          {/* <div className="absolute -bottom-3 bg-sky-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full shadow-md">
            Horizontal Square
          </div> */}
        </div>

      </div>

    </div>
    </div>
    <section className="bg-white py-16 px-4 flex flex-col items-center">
        {/* Heading Section */}
        <div className="text-center max-w-2xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b3e] leading-tight">
            Get a peek at what’s{" "}
            <span className="text-[#e5a323]">possible</span>
            <br />
            with collage maker
          </h2>
          <p className="text-sm sm:text-base text-slate-500 mt-3 ">
            Explore a hand-picked collection of collages to get an idea of what you can create with Picsart. 
          </p>
        </div>

        {/* Main Container Card */}
        <div className="w-full max-w-5xl bg-[#0b1b3d] rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row">
          {/* Left Sidebar / Tabs */}
          <div className="w-full md:w-1/4 bg-[#4a77ab] flex flex-col justify-between py-0">
            {categories.map((cat, index) => {
              const isActive = activeTab === cat.id;

              return (
                <div key={cat.id} className="relative w-full flex-1 flex flex-col justify-center">
                  <button
                    onClick={() => setActiveTab(cat.id)}
                    className={`w-full h-full py-6 text-center rounded-l-2xl font-bold text-lg transition-all flex items-center justify-center ${
                      isActive
                        ? "bg-[#2b486d] text-white shadow-inner"
                        : "text-slate-200 hover:text-white hover:bg-[#3d6493]"
                    }`}
                  >
                    {cat.name}
                  </button>

                  {/* Arrow Pointer for Active Tab */}
                  {isActive && (
                    <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-full w-0 h-0 border-y-10 border-y-transparent border-l-12 border-l-[#2b486d] z-20 " />
                  )}

                  {/* Divider Line */}
                  {index < categories.length - 1 && !isActive && (
                    <div className="mx-auto w-3/4 border-b border-sky-200/20" />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Side Image Grid */}
          <div className="w-full md:w-3/4 p-6 sm:p-10 flex items-center justify-center bg-[#0d1f42]">
            <div className="grid grid-cols-3 gap-5 w-full max-w-3xl">
              {activeCategory.images.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-square w-full rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-200 bg-slate-800"
                >
                  <Image
                    src={imgSrc}
                    alt={`${activeCategory.name} collage ${idx + 1}`}
                    fill
                    sizes="(max-width: 768px) 33vw, 25vw"
                    className="object-cover rounded-2xl"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    <div className='bg-[#EAA820] h-200 flex'>
    <div className=' w-[50%] flex justify-center items-center'>
    <div className="w-full min-h-screen bg-[#EAA820] flex items-center justify-center p-4 md:p-8 overflow-hidden font-sans">
      {/* Main Container Wrapper */}
      <div className="w-full min-h-screen bg-[#EAA820] flex items-center justify-center p-4 md:p-12 overflow-hidden">
      {/* Main Wrapper Container */}
      <div className="relative w-full max-w-5xl h-130 flex items-center justify-center">

              {/* ---------------- 1. LEFT BACKGROUND IMAGE (Low Opacity) ---------------- */}
      <div 
        className="absolute left-[4%] md:left-[1%] w-60 md:w-72 h-110 rounded-3xl overflow-hidden shadow-xl bg-black/20"
        style={{ zIndex: 5 }}
      >
        <Image
          src={"/pic7.png"} 
          alt="Left Background" 
          className="w-full h-full object-cover opacity-35 blur-[1px] transition-all duration-500 ease-out hover:scale-110 hover:opacity-100 hover:blur-none" 
          width={700}
          height={700}
        />
      </div>
      
      {/* ---------------- 2. RIGHT BACKGROUND IMAGE (Low Opacity) ---------------- */}
      <div 
        className="absolute right-[4%] md:right-[4%] w-60 md:w-72 h-110 rounded-3xl overflow-hidden shadow-xl bg-black/20"
        style={{ zIndex: 5 }}
      >
        <Image
          src={"/pic7.png"} 
          alt="Right Background" 
          className="w-full h-full object-cover opacity-35 blur-[1px] transition-all duration-500 ease-out hover:scale-110 hover:opacity-100 hover:blur-none" 
          width={700}
          height={700}
        />
      </div>

        {/* ---------------- 3. TOP-RIGHT BLACK RING (Full Circle + 3D Overlap) ---------------- */}
        {/* Full Ring - Base Layer (Peeche) */}
        <div 
          className="absolute right-[12%] md:right-[10%] -top-20 w-48 h-48 md:w-60 md:h-60 rounded-full border-18 border-blue-400 pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* ---------------- 4. BOTTOM-LEFT BLUE RING (Full Circle + 3D Overlap) ---------------- */}
        {/* Full Ring - Base Layer (Peeche) */}
        <div 
          className="absolute left-[12%] md:left-[10%] -bottom-20 w-48 h-48 md:w-60 md:h-60 rounded-full border-18 border-black pointer-events-none"
          style={{ zIndex: 1 }}
        />

        {/* ---------------- 5. CENTER MAIN HERO IMAGE ---------------- */}
        <div 
          className="absolute w-68 md:w-80 h-115 md:h-135 rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 cursor-pointer"
          style={{ zIndex: 20 }}
        >
          <Image 
            src={"/pic7.png"} 
            alt="Center Hero Main" 
            className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105" 
            width={700}
            height={700}
          />
          {/* Subtle Frame Highlight */}
          <div className="absolute inset-2 rounded-2xl border border-white/20 pointer-events-none" />
        </div>

      </div>
    </div>
      </div>
      </div>
      <div className='bg-[#EAA820] w-[50%] flex justify-center items-center'>
        <div className='w-[80%]'>
          <p className='text-2xl'>Enhance your digital collage by <br></br>turning ordinary photos into<br></br>exceptional ones.</p>
          <p className='text-5xl font-bold mt-10 font-sans'>Discover <span className='text-pink-800'>time-saving</span> photo editing tools</p>
        </div>
      </div>
    </div>
    <section className="bg-pink-800 text-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
        
        {/* Left Side: Heading & Image */}
        <div className="w-full md:w-5/12 flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-[#52c5dc]">Collage maker</span>
            <br />
            <span className="text-[#e5a323]">FAQs</span>
          </h2>

          {/* Glassmorphism/Angled Frame FAQ Image */}
          <div className="mt-10 relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden border-2 border-slate-400/40 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 bg-slate-900">
            <Image
              src="/pic8.png" // Apni image ka path ya photo yahan dein
              alt="FAQ illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Accordions */}
        <div className="w-full md:w-7/12 flex flex-col space-y-4">
          {faqData.map((item) => {
            const isOpen = openId === item.id;

            return (
              <div key={item.id} className="border-b border-pink-900/60 pb-4">
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full flex justify-between items-center text-left py-2 font-semibold text-base sm:text-lg hover:text-sky-200 transition-colors gap-4"
                >
                  <span>{item.question}</span>
                  <div className="w-7 h-7 rounded-full bg-[#5d8dbd] flex items-center justify-center shrink-0">
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-white" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-white" />
                    )}
                  </div>
                </button>

                {/* Answer Content */}
                {isOpen && (
                  <p className="text-xs sm:text-sm text-pink-100/80 mt-2 leading-relaxed max-w-xl">
                    {item.answer}
                  </p>
                )}
              </div>
            );
          })}

          {/* Bottom Help Text & Button */}
          <div className="pt-6 flex flex-col items-start gap-4">
            <p className="text-xs text-pink-200/60">
              Did not find what you were looking for?
            </p>
            <button className="bg-[#60d0e6] hover:bg-[#46bd3] text-slate-900 font-bold px-8 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105">
              Contact Help & Support
            </button>
          </div>
        </div>

      </div>
    </section>
    <div className='bg-white h-50 flex justify-center items-center gap-10'>
      <p className='text-4xl font-bold font-sans'>Subscribe to Newsletter</p>

      {/* Input aur Button ka Relative Wrapper Container */}
      <div className='relative flex items-center w-150 h-15'>
        <input
          type='email'
          required
          placeholder='Enter your email here'
          className='border-2 h-full w-full rounded-4xl pl-10 pr-44 outline-none border-orange-400'
        />
        <button className='absolute right-1 bg-[#071C3B] h-13 w-40 rounded-4xl text-[#6FCADD] font-bold cursor-pointer hover:bg-blue-600 transition-colors'>
          Submit
        </button>
      </div>
    </div>
    <div className='bg-pink-800 h-100 flex'>
      <div className='bg-pink-800 w-[40%]'>
        <div className="bg-pink-800 min-h-10 mt-5 ml-5 w-full flex flex-col justify-center px-8 md:px-16 py-10 font-sans text-white">
      
      {/* 1. TOP ROW: Logo & Language Dropdown */}
      <div className="flex items-center gap-6 mb-8">
        {/* Logo Text */}
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          Pixmate
        </h1>

        {/* Custom Language Selector Button */}
        <div className="relative">
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="appearance-none bg-[#65D3E7] hover:bg-[#52c5d9] text-[#0d2a45] font-semibold text-sm md:text-base px-6 py-2.5 pr-10 rounded-full cursor-pointer outline-none shadow-md transition-all duration-200"
          >
            <option value="English">English</option>
            <option value="Urdu">Urdu</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
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
          Download from
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
          <div className='bg-pink-800 w-[15%]'>
            <p className='text-white text-2xl font-bold mt-20 ml-5'>Company</p>
            <p className='text-white ml-5 mt-3'>About Us</p>
            <p className='text-white ml-5 mt-3'>Privacy Policy</p>
            <p className='text-white ml-5 mt-3'>Terms of Condition</p>
            <p className='text-white ml-5 mt-3'>Contact Us</p>
            <p className='text-white ml-5 mt-3'>Press</p>
            <p className='text-white ml-5 mt-3'>New</p>
            <p className='text-white ml-5 mt-3'>Partenar</p>
          </div>
          <div className='bg-pink-800 w-[15%]'>
            <p className='text-white text-2xl font-bold mt-20 ml-5'>Support</p>
            <p className='text-white ml-5 mt-3'>About Us</p>
            <p className='text-white ml-5 mt-3'>Privacy Policy</p>
            <p className='text-white ml-5 mt-3'>Terms of Condition</p>
            <p className='text-white ml-5 mt-3'>Contact Us</p>
            <p className='text-white ml-5 mt-3'>Press</p>
            <p className='text-white ml-5 mt-3'>New</p>
            <p className='text-white ml-5 mt-3'>Partenar</p>
          </div>
          <div className='bg-pink-800 w-[15%]'>
            <p className='text-2xl text-white font-bold mt-20 ml-5'>About </p>
            <p className='text-white ml-5 mt-3'>About Us</p>
            <p className='text-white ml-5 mt-3'>Privacy Policy</p>
            <p className='text-white ml-5 mt-3'>Terms of Condition</p>
            <p className='text-white ml-5 mt-3'>Contact Us</p>
            <p className='text-white ml-5 mt-3'>Press</p>
            <p className='text-white ml-5 mt-3'>New</p>
            <p className='text-white ml-5 mt-3'>Partenar</p>
          </div>
          <div className='bg-pink-800 w-[15%]'>
            <p className='text-white text-2xl font-bold mt-20 ml-5'>Resource</p>
            <p className='text-white ml-5 mt-3'>About Us</p>
            <p className='text-white ml-5 mt-3'>Privacy Policy</p>
            <p className='text-white ml-5 mt-3'>Terms of Condition</p>
            <p className='text-white ml-5 mt-3'>Contact Us</p>
            <p className='text-white ml-5 mt-3'>Press</p>
            <p className='text-white ml-5 mt-3'>New</p>
            <p className='text-white ml-5 mt-3'>Partenar</p>
          </div>
        </div>
        <footer className="w-full bg-[#111827] text-slate-400 py-6 px-8 font-poppins border-t border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Section: Navigation Links */}
        <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
          <a href="#" className="hover:text-white transition-colors">
            Terms of Use
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Do Not Sell
          </a>

          {/* More Dropdown */}
          <div className="relative inline-block">
            <button
              onClick={() => setIsMoreOpen(!isMoreOpen)}
              className="flex items-center gap-1 hover:text-white transition-colors focus:outline-none"
            >
              <span>More</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isMoreOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMoreOpen && (
              <div className="absolute left-0 bottom-full mb-2 w-40 bg-slate-800 text-slate-200 rounded-xl shadow-xl py-2 border border-slate-700 z-50 text-xs">
                <a href="#" className="block px-4 py-2 hover:bg-slate-700 transition-colors">Cookie Policy</a>
                <a href="#" className="block px-4 py-2 hover:bg-slate-700 transition-colors">Accessibility</a>
                <a href="#" className="block px-4 py-2 hover:bg-slate-700 transition-colors">Sitemap</a>
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
          © 2024 Pixmate, Inc.
        </div>

      </div>
    </footer>
      </div>
      </div>
    </div>
  )
}

export default Page