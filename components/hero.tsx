"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { heroData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import Stats from "./stats";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="scroll-mt-24 pt-24 pb-20 sm:pt-36 sm:pb-28">
      <motion.p
        className="mb-6 font-mono text-xs uppercase tracking-[0.2em] text-gray-500"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: easing }}
      >
        {heroData.location} · Founding AI Engineer
      </motion.p>

      <motion.h1
        className="max-w-[22ch] text-4xl font-medium !leading-[1.1] text-gray-100 sm:text-6xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.05, ease: easing }}
      >
        {heroData.name}
      </motion.h1>

      <motion.div
        className="mt-8 h-px w-16 origin-left bg-teal-300/60"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: easing }}
      />

      <motion.p
        className="mt-8 max-w-[38rem] text-lg leading-relaxed text-gray-300 sm:text-xl"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15, ease: easing }}
      >
        {heroData.statement}
      </motion.p>

      <motion.p
        className="mt-4 max-w-[36rem] text-base text-gray-500"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: easing }}
      >
        {heroData.trajectory}
      </motion.p>

      <motion.div
        className="mt-10 flex flex-col items-start gap-3 sm:flex-row sm:items-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.28, ease: easing }}
      >
        <Link
          href="#contact"
          className="group flex items-center gap-2 rounded-full bg-gray-100 px-6 py-3 text-sm font-medium text-gray-950 outline-none transition hover:bg-white"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Get in touch
          <BsArrowRight className="opacity-70 transition group-hover:translate-x-1" />
        </Link>

        <a
          className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 outline-none transition hover:border-white/30 hover:text-gray-100"
          href="/CV.pdf"
          download
        >
          <HiDownload />
          Download CV
        </a>
      </motion.div>

      <Stats />
    </section>
  );
}
