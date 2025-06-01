import { motion } from 'framer-motion';
import Button from './ui/button';

export default function HeroSection() {
  return (
    <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
      <motion.img
        src="/pngtree-back-view-of-male-character-thinking-about-business-education-png-image_5622569.png"
        alt="Tech Expert"
        className="w-48 md:w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />

      <div className="text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-white-800 dark:text-white font-serif leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Empowering Digital Futures<br className="hidden md:block" />
          Through Innovation
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-white-700 dark:text-white-300 max-w-2xl mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Kokeb Tech Solutions PLC delivers smart infrastructure, secure AI deployments, and scalable enterprise applications.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-6 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Button asChild>
            <a href="/services" className="text-lg px-8 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300">
              Explore Services
            </a>
          </Button>
          <Button variant="outline" asChild>
            <a href="/contact" className="text-lg px-8 py-3 rounded-xl border border-indigo-600 text-white-700 dark:text-black hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300">
              Get In Touch
            </a>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
