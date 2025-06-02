'use client';

import { motion } from 'framer-motion';
import Button from './ui/button';
import LottieAnimation from './LottieAnimation';

export default function HeroSection() {
  return (
    <section className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-16 max-w-7xl mx-auto px-6 py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-black rounded-3xl shadow-xl overflow-hidden">
      
      {/* Background animated gradient shine */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-indigo-700 via-purple-900 to-blue-900 opacity-30 pointer-events-none"
        animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Lottie Animation with 3D interactive hover */}
      <motion.div
        className="w-80 h-80 drop-shadow-2xl rounded-3xl overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-500 bg-black relative z-20"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        whileHover={{
          scale: 1.1,
          rotateX: 10,
          rotateY: 15,
          transition: { type: 'spring', stiffness: 150, damping: 10 },
        }}
        transition={{ duration: 1 }}
        aria-label="Tech Startup Animation"
      >
        <LottieAnimation animationPath="https://assets7.lottiefiles.com/packages/lf20_puciaact.json" />
      </motion.div>

      {/* Text Content */}
      <div className="text-center md:text-left max-w-xl text-white relative z-20">
        {/* Animated heading with neon glow */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold font-serif leading-tight tracking-wide"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: -40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                delayChildren: 0.2,
                staggerChildren: 0.08,
                duration: 1.3,
              },
            },
          }}
        >
          {['Building', 'Smarter', 'Systems', 'Securing', 'Your', 'Future'].map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-2"
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              style={{
                textShadow:
                  word.toLowerCase() === 'smarter' || word.toLowerCase() === 'securing'
                    ? '0 0 10px #7c3aed, 0 0 20px #8b5cf6'
                    : 'none',
                color:
                  word.toLowerCase() === 'smarter' || word.toLowerCase() === 'securing'
                    ? '#a78bfa'
                    : 'inherit',
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Animated paragraph with subtle fade in */}
        <motion.p
          className="text-lg md:text-xl text-indigo-300 mt-8 max-w-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1.2 }}
        >
          At Kokeb Tech Solutions PLC, we specialize in <strong>custom management systems</strong> for hotels, schools, and industries, 
          alongside expert CCTV installation and reliable IT support. 
          Let us help you <em>streamline operations</em>, <em>enhance security</em>, and <em>drive innovation</em>.
        </motion.p>

        {/* Call to action buttons with hover scale & shadow */}
        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-8 mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
        >
          <Button
            asChild
            className="shadow-lg hover:shadow-indigo-500/60 hover:scale-105 transition-transform duration-300"
          >
            <a
              href="/services"
              className="text-lg px-10 py-4 rounded-2xl bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Explore Our Services
            </a>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-indigo-600 text-indigo-400 hover:bg-indigo-700 hover:text-white hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-indigo-500/50"
          >
            <a
              href="/contact"
              className="text-lg px-10 py-4 rounded-2xl border-2 border-indigo-600"
            >
              Contact Us
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
