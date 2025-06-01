'use client';

import { motion } from 'framer-motion';
import FeatureCard from './components/FeatureCard';
import HeroSection from './components/HeroSection';
import QuoteForm from './components/QuoteForm';
import LottieAnimation from './components/LottieAnimation';
import { features } from './lib/data';

export default function HomePage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] overflow-hidden py-28 px-6 md:px-24 text-white">

      {/* Animated Background Blobs */}
      <motion.div
        className="absolute top-[-100px] left-[-80px] w-[300px] h-[300px] bg-cyan-400 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 120, -60], y: [0, 80, -40] }}
        transition={{ repeat: Infinity, duration: 15, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-100px] right-[-80px] w-[400px] h-[400px] bg-purple-600 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -100, 50], y: [0, -60, 90] }}
        transition={{ repeat: Infinity, duration: 18, ease: 'easeInOut' }}
      />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10 relative"
      >
        <HeroSection />
      </motion.div>

      {/* Feature Cards */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-32 z-10 relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.2 }}
      >
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <FeatureCard index={i} title={item.title} desc={item.desc} />
          </motion.div>
        ))}
      </motion.div>

      {/* Lottie Animation */}
      <motion.div
        className="max-w-6xl mx-auto mt-28 z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1.2 }}
      >
        <div className="w-full h-[520px] bg-white/5 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-6">
          <LottieAnimation animationPath="https://lottie.host/0b56a73e-f91e-4cb1-812e-4f1e1d5d3cb4/QMOBMroN2n.json" />
        </div>
      </motion.div>

      {/* Quote Form */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-28 z-10 relative"
      >
        <QuoteForm />
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-cyan-300 text-sm animate-bounce z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll to explore ↓
      </motion.div>

      {/* SVG Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full h-24">
          <path
            fill="#1f2937"
            fillOpacity="1"
            d="M0,64L60,90.7C120,117,240,171,360,186.7C480,203,600,181,720,160C840,139,960,117,1080,117.3C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
