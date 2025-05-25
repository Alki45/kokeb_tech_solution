'use client';

export default function StarBackground() {
  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      {Array.from({ length: 80 }).map((_, i) => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const scale = Math.random() * 0.6 + 0.4;
        const starPoints = "10,1 12,7 18,7 13,11 15,17 10,13 5,17 7,11 2,7 8,7";

        return (
          <polygon
            key={i}
            points={starPoints}
            fill="gray"
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
  );
}
