import Navbar from "./components/Navbar";
import Hero from "./components/home/Hero";
import WhyChoose from "./components/home/WhyChoose";
import HowItWorks from "./components/home/HowItWorks";
import TemplateLayouts from "./components/home/TemplateLayouts";
import FeatureStrip from "./components/home/FeatureStrip";
import ShareMemories from "./components/home/ShareMemories";
import Showcase from "./components/home/Showcase";
import EditingTools from "./components/home/EditingTools";
import Faq from "./components/home/Faq";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div className='min-h-screen bg-linear-to-r from-[#7F0534] to-[#E21564] '>
      <div className='bg-pink-700 h-[800]'>
        <Navbar />
        <Hero />

        {/* Neeche ke saare sections isi white wrapper ke andar hain
            (purane page mein bhi aisa hi tha, is liye design nahi badla) */}
        <div className='bg-white h-130'>
          <WhyChoose />
          <HowItWorks />
          <TemplateLayouts />
          <FeatureStrip />
          <ShareMemories />
          <Showcase />
          <EditingTools />
          <Faq />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </div>
  );
}