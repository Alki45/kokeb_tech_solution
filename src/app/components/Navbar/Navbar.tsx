'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';
import NavLinks from './NavLinks';
import ToggleButton from './ToggleButton';
import MobileMenu from './MobileMenu';
import StarBackground from './StarBackground';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-lg sticky top-0 z-50"
    >
      <StarBackground />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />
        <NavLinks />
        <ToggleButton isOpen={menuOpen} toggle={() => setMenuOpen(!menuOpen)} />
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </motion.nav>
  );
}
