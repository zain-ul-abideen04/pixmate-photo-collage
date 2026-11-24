import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import SimplePage from "../components/pages/SimplePage";
import { pagesContent } from "../data/pagesContent";

async function getContent(slug) {
  const defaults = pagesContent[slug];
  if (!defaults) return null;
  try {
    const res = await fetch(`http://localhost:8080/backend/pages/${slug}`, { cache: "no-store" });
    const data = await res.json();
    return data.content ? { ...defaults, ...data.content } : defaults;
  } catch {
    return defaults; // backend band ho to bhi page chalega
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const content = await getContent(slug);
  if (!content) notFound();

  return (
    <>
      <Navbar />
      <SimplePage content={content} />
      <Newsletter />
      <Footer />
    </>
  );
}