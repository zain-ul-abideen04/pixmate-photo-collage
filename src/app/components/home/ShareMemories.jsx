import Image from "next/image";
import { shareContent } from "../../data/homeContent";

export default function ShareMemories() {
  const c = shareContent;

  return (
    <div className='bg-pink-700 h-200 flex justify-center items-center gap-5'>
      <div className='w-[50%] ml-30 mb-60'>
        <p className='text-6xl font-bold text-[#6FCADD] '>
          <span className='text-[#EAA820] font-sans'>{c.highlight1}</span>
          {c.middle}
          <span className='text-[#EAA820]'>{c.highlight2}</span>
          {c.end}
        </p>
      </div>
      <div className="w-[50%] min-h-screen bg-red-750 flex items-center justify-center p-6 font-sans">

        {/* Main Wrapper Container */}
        <div className="relative w-125  h-125 flex items-center justify-center mr-50">

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

          {/* Ring Overlap Clip */}
          <div
            className="absolute -right-16 -bottom-28 w-56 h-56 rotate-25 rounded-full border-18 border-cyan-400 pointer-events-none z-0"
          />

          {/* 3. HORIZONTAL SQUARE BORDER (Sabse Aage - z-30) */}
          <div
            className="absolute w-170 h-80 border-3 border-sky-500 rounded-3xl pointer-events-none z-30 shadow-xl flex items-center justify-center rotate-165"
          >
          </div>

        </div>

      </div>
    </div>
  );
}