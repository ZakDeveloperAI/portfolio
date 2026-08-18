"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[999] border-b border-white/[0.06] bg-gray-950/80 backdrop-blur-md"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6 sm:px-10">
        <Link
          href="#home"
          className="font-mono text-sm text-gray-400 transition hover:text-gray-100"
          onClick={() => {
            setActiveSection("Home");
            setTimeOfLastClick(Date.now());
          }}
        >
          ZB
        </Link>

        <nav>
          <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-gray-500 sm:gap-2">
            {links.map((link) => (
              <li key={link.hash}>
                <Link
                  className={clsx(
                    "block rounded-full px-3 py-2 transition hover:text-gray-100",
                    {
                      "text-teal-300": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
