"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import { faqContent, faqData } from "../../data/homeContent";

export default function Faq() {
  const [openId, setOpenId] = useState(1);

  const toggleFAQ = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-pink-800 text-white py-16 px-6 sm:px-12 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">

        {/* Left Side: Heading & Image */}
        <div className="w-full md:w-5/12 flex flex-col items-start">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-[#52c5dc]">{faqContent.title1}</span>
            <br />
            <span className="text-[#e5a323]">{faqContent.title2}</span>
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
              {faqContent.helpText}
            </p>
            <button className="bg-[#60d0e6] hover:bg-[#46bd3] text-slate-900 font-bold px-8 py-3 rounded-full text-sm shadow-lg transition-transform hover:scale-105">
              {faqContent.buttonText}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}