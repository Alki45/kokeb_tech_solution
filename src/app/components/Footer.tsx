"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-[#0d1b2a] via-[#1b263b] to-[#0d1b2a] text-white pt-24 pb-12 overflow-hidden z-10">
     {/* Stars */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        {Array.from({ length: 80 }).map((_, i) => {
          const x = Math.random() * 100;
          const y = Math.random() * 100;
          const scale = Math.random() * 0.6 + 0.4;

          // Simple 5-point star path as a polygon
          const starPoints = "10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7";

          return (
            <polygon
              key={i}
              points={starPoints}
              fill="white"
              className="animate-twinkle opacity-80"
              style={{
                transform: `translate(${x}%, ${y}%) scale(${scale})`,
                transformOrigin: "center",
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          );
        })}
      </svg>


      {/* Snowflakes */}
      <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-visible">
        {Array.from({ length: 30 }).map((_, i) => (
          <circle
            key={i}
            cx={`${Math.random() * 100}%`}
            cy={`${-Math.random() * 100}%`}
            r={Math.random() * 1.5 + 0.5}
            fill="white"
            className="snowflake"
            style={{
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </svg>

      {/* Floating Moon */}
      <div className="absolute top-10 right-10 w-16 h-16 bg-yellow-300 rounded-full shadow-2xl opacity-90 animate-float z-10" />

      {/* Wave Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-28 fill-[#1e3a8a]"
        >
          <path d="M0,0V46.29c47.29,22,99.29,29.88,148,16S291,2,360,0s135,25.71,210,36
                    153-2.58,210-13.29S1052,4,1200,0V120H0Z" />
        </svg>
      </div>

      {/* Footer Content */}
      <div className="relative z-20 container mx-auto text-center px-6">
        <h2 className="text-xl font-bold tracking-widest text-sky-100">ኮከብ - Kokeb Tech Solution PLC</h2>
        <p className="mt-2 text-indigo-200 text-sm">
          Empowering your future through smart IT solutions under the stars.
        </p>
        <p className="mt-4 text-xs text-indigo-400">
          &copy; {new Date().getFullYear()} Kokeb Tech Solution PLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
