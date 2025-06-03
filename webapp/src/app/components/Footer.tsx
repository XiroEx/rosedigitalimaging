export default function Footer() {
  return (
    <footer className="py-8 flex flex-col items-center gap-2 border-t border-[var(--border)] mt-auto">
      <div className="flex gap-4">
        <a
          href="https://facebook.com/rosedigitaldesign"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-[var(--accent)] transition"
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
          </svg>
        </a>
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-[var(--accent)] transition"
        >
          <svg
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11.75 20h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.25 11.268h-3v-5.604c0-1.336-.025-3.059-1.865-3.059-1.867 0-2.154 1.459-2.154 2.967v5.696h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.845-1.563 3.042 0 3.604 2.003 3.604 4.606v5.59z" />
          </svg>
        </a>
      </div>
      <span className="text-xs text-[var(--foreground)]/60">
        &copy; {new Date().getFullYear()} Rose Digital Imaging
      </span>
    </footer>
  );
}