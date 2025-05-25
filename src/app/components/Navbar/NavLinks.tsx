'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Contact', href: '/contact' },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
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
  );
}
