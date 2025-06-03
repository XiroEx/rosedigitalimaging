"use client";

import { useState } from "react";
import Image from "next/image";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you can integrate with an email service or API
  };

  return (
    <section id="contact" className="py-12 px-4 max-w-xl md:max-w-3xl mx-auto w-full">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact</h2>
      <div className="flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <Image
            src="/square-logo.png"
            alt="Rose Digital Imaging Square Logo"
            width={320}
            height={320}
            className="rounded-lg border-2 border-[var(--border)] bg-white"
            priority
          />
        </div>
        {/* Form */}
        <div className="flex-1 w-full">
          {submitted ? (
            <div className="bg-[var(--hover)] p-6 rounded-lg border border-[var(--border)] text-center text-lg">
              Thank you for reaching out!<br />Your message has been sent.
            </div>
          ) : (
            <form
              className="flex flex-col gap-4 bg-[var(--hover)] p-6 rounded-lg border border-[var(--border)] shadow"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="p-3 rounded border border-[var(--border)] bg-white text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="p-3 rounded border border-[var(--border)] bg-white text-black"
              />
              <textarea
                name="message"
                placeholder="Tell us about your project..."
                required
                rows={4}
                className="p-3 rounded border border-[var(--border)] bg-white text-black"
              />
              <button
                type="submit"
                className="bg-[var(--foreground)] text-[var(--background)] font-semibold py-2 rounded hover:bg-[var(--accent)] transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}