import React from "react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section className="border-t border-white/5 py-10 sm:py-14">
      <div className="grid gap-2 sm:grid-cols-[8rem_1fr] sm:gap-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-gray-500">Education</p>
        <div className="flex flex-col gap-1 text-sm text-gray-500">
          {education.map((item) => (
            <p key={item.degree}>
              {item.degree}, {item.school}
              {item.date ? ` (${item.date})` : ""}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
