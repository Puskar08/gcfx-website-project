"use client";

import React, { ReactNode } from "react";

interface MasonryProps {
  children: ReactNode;
  columns?: number;
  gap?: number;
  className?: string;
}

export default function Masonry({
  children,
  columns = 3,
  gap = 16,
  className = "",
}: MasonryProps) {
  const childrenArray = React.Children.toArray(children);

  // Create column arrays
  const columnArrays: ReactNode[][] = Array.from(
    { length: columns },
    () => []
  );

  // Distribute children across columns
  childrenArray.forEach((child, index) => {
    const columnIndex = index % columns;
    columnArrays[columnIndex].push(child);
  });

  return (
    <div
      className={`flex gap-${gap / 4} ${className}`}
      style={{ gap: `${gap}px` }}
    >
      {columnArrays.map((columnChildren, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col flex-1"
          style={{ gap: `${gap}px` }}
        >
          {columnChildren}
        </div>
      ))}
    </div>
  );
}
