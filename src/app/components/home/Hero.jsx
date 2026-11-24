import Image from "next/image";
import { heroContent } from "../../data/homeContent";

export default function Hero() {
  return (
    <div className='flex'>
      <div className='bg-pink-700 w-[50%] h-[700] flex justify-center items-center'>
        <div className='w-[70%] ml-10'>
          <p className='text-8xl font-bold text-[#6FCADD] font-sans'>{heroContent.line1}</p>
          <p className='text-8xl font-bold text-[#EAA820] font-sans'>{heroContent.line2}</p>
          <p className='text-8xl font-bold text-[#6FCADD] font-sans'>{heroContent.line3}</p>
          <p className='text-white text-2xl mt-3'>{heroContent.description}</p>
          <div className=''>
            <p className='bg-[#D9D9D9] font-sans size-6 h-14 w-75 rounded-3xl flex justify-center items-center mt-5'>{heroContent.buttonText}</p>
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
  );
}