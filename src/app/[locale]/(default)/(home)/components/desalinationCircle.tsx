"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./DesalinationCircle.module.css";

type Project = {
  name: string;
  image: string;
  desc: string;
};

export default function DesalinationCircle({ projects }: { projects: Project[] }) {
  const radius = 150;
  const center = 180;

  const [selected, setSelected] = useState<Project | null>(null);
  const [paused, setPaused] = useState(false);
  const [rotation, setRotation] = useState(0);

  // 🔄 Track rotation angle manually
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setRotation((prev) => prev + 0.005); // speed control
    }, 16);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section className="py-24 text-white flex flex-col items-center">

      <h2 className="text-3xl mb-16 text-center">
        Desalination Lineup
      </h2>

      <div className="relative w-[360px] h-[360px]">

        {/* 🔷 CENTER */}
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 z-20 text-center">
          <div className="w-36 h-36 rounded-full border border-green-400 backdrop-blur-md flex flex-col items-center justify-center p-3 bg-black/40">
            {selected ? (
              <>
                <p className="text-sm font-semibold text-green-400">
                  {selected.name}
                </p>
                <p className="text-[11px] text-white/70 mt-1">
                  {selected.desc}
                </p>
              </>
            ) : (
              <span className="text-sm font-semibold">Projects</span>
            )}
          </div>
        </div>

        {/* 🔁 ROTATION USING JS */}
        <div
          className="absolute inset-0"
          style={{
            transform: `rotate(${rotation}rad)`,
          }}
        >
          {projects.map((item, index) => {
            const angle = (index / projects.length) * 2 * Math.PI;

            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            const isActive = selected?.name === item.name;

            return (
              <div
                key={index}
                className="absolute group cursor-pointer"
                style={{
                  transform: `translate(${x + center}px, ${y + center}px) translate(-50%, -50%)`,
                }}
                onClick={() => {
                  setSelected(item);
                  setPaused(true);
                }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {/* 🔥 FULL COUNTER ROTATION */}
                <div
                  style={{
                    transform: `rotate(${ - rotation}rad)`,
                  }}
                >
                  <div
                    className={`relative w-20 h-20 mx-auto rounded-full overflow-hidden border transition-all duration-300
                    ${
                      isActive
                        ? "border-green-400 scale-110 shadow-[0_0_20px_rgba(34,197,94,0.6)]"
                        : "border-white/20 group-hover:scale-110"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}