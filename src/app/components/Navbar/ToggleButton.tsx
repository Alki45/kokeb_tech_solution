'use client';
import { Menu, X } from 'lucide-react';

export default function ToggleButton({ isOpen, toggle }: { isOpen: boolean; toggle: () => void }) {
  return (
    <button
      onClick={toggle}
      className="md:hidden text-indigo-700 dark:text-white focus:outline-none"
    >
      {isOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  );
}
