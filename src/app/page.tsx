'use client';

import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard';
import HeroSection from './components/HeroSection';
import QuoteForm from './components/QuoteForm';
import LottieAnimation from './components/LottieAnimation';
import { features } from './lib/data';

export default function HomePage() {
  return (
    <section className="relative min-h-screen bg-[url('/Circuit-PNG-Images.png')] bg-cover bg-center bg-no-repeat  overflow-hidden py-24 px-6 md:px-20 text-gray-800 dark:text-black">

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-indigo-500 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, 120, -60], y: [0, 80, -40] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-500 rounded-full opacity-30 blur-3xl"
        animate={{ x: [0, -100, 50], y: [0, -60, 90] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />

      <HeroSection />

      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 z-10 relative">
        {features.map((item, i) => (
          <FeatureCard key={i} index={i} title={item.title} desc={item.desc} />
        ))}
      </div>

      {/* Lottie Animation */}
      <motion.div
        className="max-w-5xl mx-auto mt-24 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1.2 }}
      >
        <div className="w-full h-[500px]">
          <LottieAnimation animationPath="https://lottie.host/0b56a73e-f91e-4cb1-812e-4f1e1d5d3cb4/QMOBMroN2n.json" />
        </div>
      </motion.div>

      <QuoteForm />

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-indigo-400 text-sm animate-bounce z-10"
        initial={{ opacity: 50 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll to explore ↓
      </motion.div>

      {/* SVG Divider */}


    </section>
  );
}
