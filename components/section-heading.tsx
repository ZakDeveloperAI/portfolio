import React from "react";

type SectionHeadingProps = {
  index?: string;
  eyebrow?: string;
  children: React.ReactNode;
};

export default function SectionHeading({ index, eyebrow, children }: SectionHeadingProps) {
  return (
    <div className="sm:sticky sm:top-32">
      {index && (
        <p className="mb-4 font-mono text-sm text-gray-600">{index}</p>
      )}
      <h2 className="text-xl font-medium text-gray-100">{children}</h2>
      {eyebrow && (
        <p className="mt-2 max-w-[14rem] text-sm leading-relaxed text-gray-500">{eyebrow}</p>
      )}
    </div>
  );
}
