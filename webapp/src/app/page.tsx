import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--background)] text-[var(--foreground)]">
      {/* Hero Section */}
      <Hero />

      {/* Gallery Section */}
      <Gallery />

      {/* Contact Section */}
      <Contact />
    </div>
  );
}
