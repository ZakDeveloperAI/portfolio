"use client";

import React from "react";
import { motion } from "framer-motion";
import { whatIDo } from "@/lib/data";

export default function WhatIDo() {
  return (
    <section className="border-t border-white/5 py-16 sm:py-20">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Focus</p>
        <motion.p
          className="max-w-[42rem] text-xl leading-relaxed text-gray-200 sm:text-2xl"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {whatIDo}
        </motion.p>
      </div>
    </section>
  );
}
