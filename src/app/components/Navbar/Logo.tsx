'use client';

import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="group flex items-center gap-3 select-none">
      {/* Glowing Star Icon */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 blur-md opacity-60 animate-pulse" />
        <div className="z-10 text-white text-2xl font-bold drop-shadow-md">★</div>
      </div>

      {/* Textual Logo */}
      <div className="flex flex-col leading-tight">
        <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 animate-gradient-x group-hover:tracking-wider transition-all duration-500 ease-in-out">
          Kokeb Tech
        </span>
        <span className="text-sm text-gray-600 dark:text-gray-300 tracking-tight group-hover:opacity-100 opacity-80 transition-opacity duration-300">
          ኮከብ ቴክ | ERP & CCTV Solutions
        </span>
      </div>
    </Link>
  );
}
