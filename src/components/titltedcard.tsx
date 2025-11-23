"use client";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltedCardProps {
  imageSrc: string;
  altText: string;
  captionText?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function TiltedCard({
  imageSrc,
  altText,
  captionText,
  children,
  className = "",
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 25;
    const rotateY = (centerX - x) / 25;

    setRotate({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`group relative cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
    >
      <div
        className="relative overflow-hidden rounded-2xl shadow-2xl transition-all duration-300 group-hover:shadow-2xl"
        style={{
          transform: "translateZ(50px)",
        }}
      >
        {/* Background Image */}
        <div
          className="w-full h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
          style={{ backgroundImage: `url(${imageSrc})` }}
        />

        {/* Content Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          {children}
        </div>

        {/* Caption */}
        {captionText && (
          <div className="absolute bottom-4 left-4 text-white font-semibold text-lg">
            {captionText}
          </div>
        )}
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 -z-10" />
    </motion.div>
  );
}
