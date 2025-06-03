import Image from "next/image";

export default function Hero() {
  return (
    <header className="flex flex-col items-center justify-center py-16 gap-6 bg-white text-black h-120 p-2">
      <Image
        src="/logo.png"
        alt="Rose Digital Imaging Logo"
        width={315}
        height={150}
        className="rounded-full border-4 border-[var(--foreground)] animate-fade-in-down"
      />
      <h1 className="text-4xl font-bold tracking-tight animate-fade-in-down">
        Rose Digital Imaging
      </h1>
      <p className="text-lg text-center max-w-xl animate-fade-in-up pt-2">
        Offering creative and professional graphic design and photography services. From logos and album covers to business branding and promotional materials, I help bands, businesses, and creators stand out with visuals that make an impression.
      </p>
      <a
        href="#contact"
        className="px-6 py-2 rounded-full bg-[var(--foreground)] text-[var(--background)] font-semibold hover:bg-[var(--accent)] transition  animate-fade-in-up"
      >
        Start Your Project
      </a>
    </header>
  );
}