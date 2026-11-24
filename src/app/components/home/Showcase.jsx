"use client";
import { useState } from "react";
import Image from "next/image";
import { showcaseContent, categories } from "../../data/homeContent";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState("family");

  const activeCategory = categories.find((cat) => cat.id === activeTab) || categories[0];

  return (
    <section className="bg-white py-16 px-4 flex flex-col items-center">
      {/* Heading Section */}
      <div className="text-center max-w-2xl mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d1b3e] leading-tight">
          {showcaseContent.titleStart}
          <span className="text-[#e5a323]">{showcaseContent.titleHighlight}</span>
          <br />
          {showcaseContent.titleLine2}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 mt-3 ">
          {showcaseContent.description}
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
  );
}