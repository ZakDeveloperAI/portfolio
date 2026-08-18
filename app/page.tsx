import Hero from "@/components/hero";
import WhatIDo from "@/components/what-i-do";
import CurrentRole from "@/components/current-role";
import Experience from "@/components/experience";
import Stack from "@/components/skills";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col px-6 sm:px-10">
      <Hero />
      <WhatIDo />
      <CurrentRole />
      <Experience />
      <Stack />
      <Education />
      <Contact />
    </main>
  );
}
