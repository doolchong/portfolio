"use client";

import { useState } from "react";

export default function ImageZoom({ src, alt }: { src: string; alt?: string }) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className="rounded-xl border border-zinc-800 cursor-zoom-in transition duration-200 hover:scale-[1.01]"
        onClick={() => setZoomed(true)}
      />
      {zoomed && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
          onClick={() => setZoomed(false)}
        >
          <img
            src={src}
            alt={alt}
            className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl border border-white"
          />
        </div>
      )}
    </>
  );
}
