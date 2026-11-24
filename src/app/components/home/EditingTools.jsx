import React from "react";
import Image from "next/image";
import { editingContent } from "../../data/homeContent";

export default function EditingTools() {
  const c = editingContent;

  return (
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
          <p className='text-2xl'>
            {c.introLines.map((line, i) => (
              <React.Fragment key={i}>
                {i > 0 && <br />}
                {line}
              </React.Fragment>
            ))}
          </p>
          <p className='text-5xl font-bold mt-10 font-sans'>
            {c.titleStart}
            <span className='text-pink-800'>{c.titleHighlight}</span>
            {c.titleEnd}
          </p>
        </div>
      </div>
    </div>
  );
}