"use client";

import React, { useState } from "react";
import clsx from "clsx";
import SectionHeading from "./section-heading";
import { roadmapData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";

export default function Roadmap() {
  const { ref } = useSectionInView("Roadmap");
  const [openId, setOpenId] = useState<string>(
    roadmapData.find((node) => node.status === "current")?.id ?? roadmapData[0].id
  );

  return (
    <section id="roadmap" ref={ref} className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-[8rem_minmax(0,1fr)] sm:gap-10">
        <SectionHeading index="02" eyebrow="Where the work has gone, and where it's headed.">
          Roadmap
        </SectionHeading>

        <div className="relative">
          <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 sm:left-[1.125rem]" />

          <div className="flex flex-col">
            {roadmapData.map((node) => {
              const isOpen = node.id === openId;

              return (
                <div key={node.id} className="border-b border-white/5 last:border-b-0">
                  <div className="relative pl-12 sm:pl-14">
                    <span
                      className={clsx(
                        "absolute left-0 top-1/2 flex h-8 w-8 shrink-0 -translate-y-1/2 items-center justify-center rounded-full border font-mono text-[0.6rem] transition sm:h-9 sm:w-9 sm:text-xs",
                        node.status === "current"
                          ? "border-teal-300 bg-teal-300/10 text-teal-300"
                          : "border-white/15 bg-gray-950 text-gray-500",
                        node.status === "future" && "border-dashed"
                      )}
                    >
                      {node.initials}
                    </span>

                    <button
                      type="button"
                      onClick={() => setOpenId(isOpen ? "" : node.id)}
                      className="group flex w-full items-center gap-4 py-5 text-left outline-none"
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                          <h3 className="text-base font-medium text-gray-100 sm:text-lg">{node.role}</h3>
                          <span className="font-mono text-xs uppercase tracking-wide text-gray-500">
                            {node.period}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">{node.org}</p>
                      </div>

                      <span
                        className={clsx(
                          "shrink-0 font-mono text-xs text-gray-600 transition-transform",
                          isOpen && "rotate-45"
                        )}
                      >
                        +
                      </span>
                    </button>
                  </div>

                  <div
                    className={clsx(
                      "grid pl-12 transition-all duration-300 ease-out sm:pl-14",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-[36rem] pb-5 pr-2 leading-relaxed text-gray-400">
                        {node.description}
                      </p>
                      {node.status === "current" && (
                        <span className="mb-5 inline-block rounded-full border border-teal-300/20 bg-teal-300/[0.06] px-3 py-1 font-mono text-xs text-teal-300">
                          Current
                        </span>
                      )}
                      {node.status === "future" && (
                        <span className="mb-5 inline-block rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-gray-500">
                          Next
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
