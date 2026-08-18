"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { currentRoleSystems, currentRoleStack } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const easing = [0.16, 1, 0.3, 1] as const;

export default function CurrentRole() {
  const { ref } = useSectionInView("Work");

  return (
    <section id="work" ref={ref} className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24">
      <div className="grid gap-10 sm:grid-cols-[8rem_1fr] sm:gap-10">
        <SectionHeading index="01" eyebrow="Founding AI Engineer, LIV4.AI. Jul 2025 to present.">
          Systems I own
        </SectionHeading>

        <div>
          <div className="flex flex-col">
            {currentRoleSystems.map((system, index) => (
              <motion.div
                key={system.title}
                className="grid gap-2 border-b border-white/5 py-8 first:pt-0 last:border-b-0 sm:grid-cols-[3rem_1fr_10rem] sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.04 * index, ease: easing }}
              >
                <span className="font-mono text-sm text-gray-600">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-medium text-gray-100">{system.title}</h3>
                  <p className="max-w-[38rem] leading-relaxed text-gray-400">
                    {system.description}
                  </p>
                </div>
                <div className="sm:text-right">
                  <span className="inline-block rounded-full border border-teal-300/20 bg-teal-300/[0.06] px-3 py-1 font-mono text-xs text-teal-300">
                    {system.metric}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 font-mono text-sm text-gray-500">{currentRoleStack}</p>
        </div>
      </div>
    </section>
  );
}
