"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import DesalinationTable from "./DesalinationTable";

type Props = {
  columns: string[];
  rows: Record<string, number[]>;
};

export default function DesalinationTableModal({ columns, rows }: Props) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Fix SSR issue
  useEffect(() => {
    setMounted(true);
  }, []);

  const modal = open ? (
    <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center">

      {/* ❌ CLOSE */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl hover:text-red-400"
      >
        ✕
      </button>

      {/* 📊 FULL SCREEN */}
      <div className="w-screen h-screen overflow-y-auto px-6 py-20">

        <div className="max-w-7xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6">

          <h2 className="text-2xl text-white mb-6 text-center">
            Technical Data Table
          </h2>

          <DesalinationTable columns={columns} rows={rows} />

        </div>

      </div>
    </div>
  ) : null;

  return (
    <>
      {/* 🔘 BUTTON */}
      <div className="text-center mt-10">
        <button
          onClick={() => setOpen(true)}
          className="px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition"
        >
          View Table Data
        </button>
      </div>

      {/* 🔥 PORTAL RENDER */}
      {mounted && createPortal(modal, document.body)}
    </>
  );
}