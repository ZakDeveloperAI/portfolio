"use client";

import React from "react";
import { motion } from "framer-motion";
import { statsData } from "@/lib/data";

const easing = [0.16, 1, 0.3, 1] as const;

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-6 border-t border-white/5 py-10 sm:grid-cols-4 sm:py-14">
      {statsData.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + index * 0.06, ease: easing }}
        >
          <p className="text-3xl font-medium text-gray-100 sm:text-4xl">{stat.value}</p>
          <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
        </motion.div>
      ))}
    </div>
  );
}
