import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-2 px-6 font-mono text-xs text-gray-600 sm:flex-row sm:px-10">
        <p>&copy; {new Date().getFullYear()} Zakaria Belfakhir</p>
        <a href="#home" className="transition hover:text-gray-300">
          Back to top
        </a>
      </div>
    </footer>
  );
}
