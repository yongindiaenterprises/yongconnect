"use client";

import { useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";

export default function ImageLightbox({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🔷 Clickable Image */}
      <div
        className={`relative cursor-pointer ${className}`}
        onClick={() => setOpen(true)}
      >
        <Image src={src} alt={alt} fill className="object-cover" />
      </div>

      {/* 🔥 Popup */}
      {open &&
        typeof window !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative w-[90%] max-w-4xl h-[80vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src}
                alt="Preview"
                fill
                className="object-contain rounded-xl"
              />

              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-white text-2xl"
              >
                ✕
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}