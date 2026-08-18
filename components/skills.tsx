"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { techStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Stack() {
  const { ref } = useSectionInView("Stack");

  return (
    <section id="stack" ref={ref} className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-10">
        <SectionHeading index="03">Technical foundation</SectionHeading>

        <div className="flex flex-col">
          {techStack.map((group, index) => (
            <motion.div
              key={group.category}
              className="grid gap-2 border-b border-white/5 py-6 first:pt-0 last:border-b-0 sm:grid-cols-[12rem_1fr] sm:gap-6"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.04 * index, ease: easing }}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">
                {group.category}
              </h3>
              <p className="leading-relaxed text-gray-300">{group.items.join(" · ")}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
