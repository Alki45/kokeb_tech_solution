'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      {/* Animated Star Background */}
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
              fill="gray-300"
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

      {/* Navbar content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-extrabold tracking-tight hover:scale-105 transition-transform duration-200 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
        >
          Kokeb Tech
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-800 dark:text-white font-medium items-center">
          {navItems.map((item) => (
            <li key={item.href} className="relative">
              <Link
                href={item.href}
                className={`transition-colors duration-300 hover:text-indigo-600 ${
                  pathname === item.href ? 'text-indigo-700 font-semibold' : ''
                }`}
              >
                {item.label}
                {pathname === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 rounded"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-indigo-700 dark:text-white focus:outline-none"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-4 pb-4 overflow-hidden"
          >
            <ul className="flex flex-col space-y-3 text-gray-800 dark:text-white font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-4 py-2 rounded-md transition-colors duration-200 hover:bg-indigo-100 dark:hover:bg-gray-800 ${
                      pathname === item.href
                        ? 'bg-indigo-100 dark:bg-gray-700 text-indigo-700 dark:text-white font-semibold'
                        : ''
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
