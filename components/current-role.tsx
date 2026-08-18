"use client";

import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
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
          <div className="grid gap-4 sm:grid-cols-2">
            {currentRoleSystems.map((system, index) => (
              <motion.div
                key={system.title}
                className={clsx(
                  "rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 sm:p-7",
                  "featured" in system && system.featured && "sm:col-span-2"
                )}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: easing }}
              >
                <p className="font-mono text-4xl text-teal-300 sm:text-5xl">{system.metric}</p>
                <p className="mb-4 font-mono text-xs uppercase tracking-wide text-gray-500">
                  {system.metricLabel}
                </p>
                <h3 className="mb-2 text-lg font-medium text-gray-100">{system.title}</h3>
                <p className="max-w-[32rem] leading-relaxed text-gray-400">{system.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="mt-8 font-mono text-sm text-gray-500">{currentRoleStack}</p>
        </div>
      </div>
    </section>
  );
}
