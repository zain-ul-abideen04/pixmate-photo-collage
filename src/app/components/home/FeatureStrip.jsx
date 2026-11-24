import { Edit3, LayoutGrid, Download } from "lucide-react";
import { featureStripData } from "../../data/homeContent";

// Har item ka icon (design ka hissa hai, isliye yahan hai)
const stripIcons = {
  1: <Edit3 className="w-5 h-5 text-sky-200" />,
  2: <LayoutGrid className="w-5 h-5 text-sky-200" />,
  3: <LayoutGrid className="w-5 h-5 text-sky-200" />,
  4: <Download className="w-5 h-5 text-sky-200" />,
};

export default function FeatureStrip() {
  return (
    <div className="w-full bg-[#6FCADD] py-8 px-4 h-[200]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center mt-10">
        {featureStripData.map((item) => (
          <div key={item.id} className="flex items-center gap-3">
            {/* Darker blue circle container for icon */}
            <div className="w-12 h-12 rounded-full bg-[#527eaf] flex items-center justify-center shrink-0">
              {stripIcons[item.id]}
            </div>

            {/* Feature Text */}
            <p className="text-[#1a3852] font-semibold text-sm sm:text-base leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}