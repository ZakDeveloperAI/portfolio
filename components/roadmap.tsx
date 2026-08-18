"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import SectionHeading from "./section-heading";
import { roadmapData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Roadmap() {
  const { ref } = useSectionInView("Roadmap");
  const [activeId, setActiveId] = useState(
    roadmapData.find((node) => node.status === "current")?.id ?? roadmapData[0].id
  );
  const active = roadmapData.find((node) => node.id === activeId) ?? roadmapData[0];

  return (
    <section id="roadmap" ref={ref} className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10">
        <SectionHeading index="02" eyebrow="Where the work has gone, and where it's headed.">
          Roadmap
        </SectionHeading>

        <div>
          <div className="flex items-center pb-9 sm:pb-10">
            {roadmapData.map((node, index) => (
              <div key={node.id} className="flex flex-1 items-center last:flex-none">
                <button
                  type="button"
                  onClick={() => setActiveId(node.id)}
                  className="group relative flex h-8 w-8 shrink-0 items-center justify-center outline-none sm:h-9 sm:w-9"
                >
                  <span
                    className={clsx(
                      "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border font-mono text-[0.6rem] transition sm:h-9 sm:w-9 sm:text-xs",
                      node.id === activeId
                        ? "border-teal-300 bg-teal-300/10 text-teal-300"
                        : "border-white/15 bg-gray-950 text-gray-500 group-hover:border-white/30 group-hover:text-gray-300",
                      node.status === "future" && "border-dashed"
                    )}
                  >
                    {node.initials}
                  </span>
                  <span
                    className={clsx(
                      "absolute top-full mt-2 whitespace-nowrap font-mono text-[0.6rem] uppercase tracking-wide transition sm:text-xs",
                      index === 0 && "left-0",
                      index === roadmapData.length - 1 && "right-0",
                      index > 0 && index < roadmapData.length - 1 && "left-1/2 -translate-x-1/2",
                      node.id === activeId
                        ? "block text-gray-100"
                        : "hidden text-gray-500 group-hover:text-gray-300 sm:block"
                    )}
                  >
                    {node.label}
                  </span>
                </button>

                {index < roadmapData.length - 1 && (
                  <span className="mx-1.5 h-px min-w-[0.75rem] flex-1 bg-white/10 sm:mx-3 sm:min-w-[2rem]" />
                )}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="mt-10 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: easing }}
            >
              <div className="mb-3 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border font-mono text-xs",
                      active.status === "current"
                        ? "border-teal-300 bg-teal-300/10 text-teal-300"
                        : "border-white/15 text-gray-400",
                      active.status === "future" && "border-dashed"
                    )}
                  >
                    {active.initials}
                  </span>
                  <h3 className="text-lg font-medium text-gray-100">
                    {active.role}, {active.org}
                  </h3>
                </div>
                <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
                  {active.period}
                </span>
              </div>
              <p className="max-w-[38rem] leading-relaxed text-gray-400">{active.description}</p>
              {active.status === "current" && (
                <span className="mt-4 inline-block rounded-full border border-teal-300/20 bg-teal-300/[0.06] px-3 py-1 font-mono text-xs text-teal-300">
                  Current
                </span>
              )}
              {active.status === "future" && (
                <span className="mt-4 inline-block rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-500">
                  Trajectory
                </span>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
