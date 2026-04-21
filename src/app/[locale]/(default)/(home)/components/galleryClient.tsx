"use client";

import { useState } from "react";
import Image from "next/image";

export default function GalleryClient({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative h-64 w-full rounded-xl overflow-hidden group cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt="Modular Toilet"
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[90%] max-w-4xl h-[80vh] animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Preview"
              fill
              className="object-contain rounded-xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-12 h-12 flex items-center justify-center 
             rounded-full bg-black/50 backdrop-blur-lg border border-white/20
             transition-all duration-300 hover:bg-red-500 hover:scale-110"
            >
              <span className="text-white text-2xl leading-none">&times;</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}