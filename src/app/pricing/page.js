import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import PricingPlans from "../components/pricing/PricingPlans";
import { pricingContent as defaults } from "../data/pricingContent";

async function getContent() {
  try {
    const res = await fetch("http://localhost:8080/backend/pages/pricing", {
      cache: "no-store",
    });
    const data = await res.json();
    return data.content ? { ...defaults, ...data.content } : defaults;
  } catch {
    return defaults; // backend band ho to bhi page chalega
  }
}

export default async function PricingPage() {
  const content = await getContent();
  return (
    <>
      <Navbar />
      <PricingPlans content={content} />
      <Newsletter />
      <Footer />
    </>
  );
}