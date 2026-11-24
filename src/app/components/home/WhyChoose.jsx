import { whyChooseContent, whyFeatures } from "../../data/homeContent";

// Har feature ka icon (design ka hissa hai, isliye yahan hai)
const featureIcons = {
  1: (
    <svg className="w-18 h-18 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  2: <span className="text-white font-extrabold text-4xl italic tracking-wider">HD</span>,
  3: (
    <svg className="w-14 h-14 text-white" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4h7.6l-6.2 4.5 2.4 7.4-6.2-4.5-6.2 4.5 2.4-7.4-6.2-4.5h7.6z" />
    </svg>
  ),
};

export default function WhyChoose() {
  return (
    <>
      <div className='bg-white h-35 flex justify-center items-center '>
        <p className='text-5xl w-[40%] font-bold'>
          {whyChooseContent.titleStart}
          <span className='text-orange-400'>{whyChooseContent.titleHighlight}</span>
          {whyChooseContent.titleEnd}
        </p>
      </div>
      <div className="ml-25 mx-auto p-6 bg-white h-130 ">
        <div className="grid grid-cols-1 md:grid-cols-3  pt-6 pb-12 w-7xl ">
          {whyFeatures.map((item) => (
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
                  {featureIcons[item.id]}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </>
  );
}