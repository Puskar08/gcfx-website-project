"use client";
import React from "react";

interface MasonryProps {
  children: React.ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export default function Masonry({
  children,
  columns = 3,
  gap = 24,
  className = "",
}: MasonryProps) {
  // Convert gap to Tailwind class
  const gapClass = `gap-${gap / 4}`;

  return (
    <div
      className={`
        grid 
        grid-cols-1 
        md:grid-cols-2 
        ${columns >= 3 ? "lg:grid-cols-3" : ""}
        ${columns >= 4 ? "xl:grid-cols-4" : ""}
        ${gapClass}
        ${className}
      `}
    >
      {React.Children.map(children, (child, index) => (
        <div key={index} className="break-inside-avoid">
          {child}
        </div>
      ))}
    </div>
  );
}
