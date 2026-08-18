"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { earlierExperience } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Experience() {
  const { ref } = useSectionInView("Experience");

  return (
    <section id="experience" ref={ref} className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-10">
        <SectionHeading index="02" eyebrow="Earlier chapters that built the foundation.">
          Foundation
        </SectionHeading>

        <div className="flex flex-col">
          {earlierExperience.map((item, index) => (
            <motion.div
              key={item.company}
              className="grid gap-2 border-b border-white/5 py-8 first:pt-0 last:border-b-0 sm:grid-cols-[1fr_10rem] sm:gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.04 * index, ease: easing }}
            >
              <div>
                <h3 className="mb-2 font-medium text-gray-100">
                  {item.role}, {item.company}
                </h3>
                <p className="max-w-[38rem] leading-relaxed text-gray-400">{item.description}</p>
              </div>
              <span className="font-mono text-xs uppercase tracking-wide text-gray-500 sm:text-right">
                {item.date}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
