import Image from "next/image";
import { templateContent } from "../../data/homeContent";

export default function TemplateLayouts() {
  const c = templateContent;

  return (
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
          <p className='text-6xl font-bold font-sans text-[#6FCADD]'>
            {c.title1}
            <span className='text-[#EAA820]'>{c.highlight1}</span>
            {c.title2}
            <span className='text-[#EAA820]'>{c.highlight2}</span>
            {c.title3}
          </p>
          <p className='mt-15 text-lg'>{c.paragraph}</p>
          <div className='bg-[#071C3B] h-12 text-[#6FCADD] w-50  flex justify-center items-center rounded-3xl mt-10'>{c.buttonText}</div>
        </div>
      </div>
    </div>
  );
}