"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { contactData } from "@/lib/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-24 border-t border-white/5 py-16 sm:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-60px" }}
    >
      <div className="grid gap-8 sm:grid-cols-[8rem_1fr] sm:gap-10">
        <SectionHeading index="04">Contact</SectionHeading>

        <div>
          <p className="max-w-[34rem] text-xl leading-relaxed text-gray-200 sm:text-2xl">
            {contactData.statement}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`mailto:${contactData.email}`}
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 outline-none transition hover:border-white/30 hover:text-gray-100"
            >
              <HiOutlineMail />
              {contactData.email}
            </a>

            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-gray-300 outline-none transition hover:border-white/30 hover:text-gray-100"
            >
              <BsLinkedin />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
