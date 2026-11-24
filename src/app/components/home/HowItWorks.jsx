import Image from "next/image";
import { howItWorksContent, stepsData } from "../../data/homeContent";

export default function HowItWorks() {
  return (
    <div className='bg-pink-700 h-220 flex '>
      <div className='bg-pink-700 w-[50%]'>
        <div className='flex bg-pink-700 h-30 justify-center items-center mt-5'>
          <p className='text-5xl font-bold w-[50%] text-blue-400 font-sans'>
            {howItWorksContent.titleStart}
            <span className='text-orange-400 '>{howItWorksContent.titleHighlight}</span>
          </p>
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
                    {step.buttonText}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}