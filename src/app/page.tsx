'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from './components/ui/button';
import LottieAnimation from './components/LottieAnimation';

export default function HomePage() {
  const features = [
    {
      title: 'AI & Data Intelligence',
      desc: 'Predictive systems, data analytics, and ML-powered platforms.',
    },
    {
      title: 'Cloud & DevOps Solutions',
      desc: 'Enterprise-grade CI/CD, Kubernetes, and cloud-native scalability.',
    },
    {
      title: 'Secure IoT Integration',
      desc: 'Real-time device communication with end-to-end encryption.',
    },
  ];

  return (
    <section className="relative min-h-screen bg-[url('/Circuit-PNG-Images.png')] bg-cover bg-center bg-no-repeat dark:bg-gray-900 overflow-hidden text-center py-24 px-6 md:px-20 text-gray-800 dark:text-white">
      
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

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center md:items-start gap-10 max-w-6xl mx-auto">
  {/* Left or Right Column: Character Image */}
  <motion.img
    src="/pngtree-back-view-of-male-character-thinking-about-business-education-png-image_5622569.png"
    alt="Tech Expert"
    className="w-48 md:w-64 drop-shadow-2xl hover:scale-105 transition-transform duration-500"
    initial={{ opacity: 0, x: -40 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1 }}
  />

  {/* Right or Left Column: Quote Text */}
  <div className="text-center md:text-left">
    <motion.h1
      className="text-4xl md:text-6xl font-extrabold text-indigo-800 dark:text-white font-serif leading-tight"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
    >
      Empowering Digital Futures<br className="hidden md:block" />
      Through Innovation
    </motion.h1>
    <motion.p
      className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mt-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4, duration: 1 }}
    >
      Kokeb Tech Solutions PLC delivers smart infrastructure, secure AI deployments, and scalable enterprise applications.
    </motion.p>

    {/* CTA Buttons */}
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
        <a href="/contact" className="text-lg px-8 py-3 rounded-xl border border-indigo-600 text-indigo-700 dark:text-white hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300">
          Get In Touch
        </a>
      </Button>
    </motion.div>
  </div>
</div>
      {/* Feature Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24 z-10 relative">
        {features.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-gray-600 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform hover:bg-white/50 dark:hover:bg-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.2, duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold text-indigo-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-gray-700 dark:text-gray-300 text-base">{item.desc}</p>
          </motion.div>
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

      {/* Quote Form */}
      <motion.div
        className="max-w-3xl mx-auto mt-24 bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl p-8 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <h3 className="text-2xl font-bold text-indigo-800 dark:text-white mb-6">Request a Quote</h3>
        <form className="grid grid-cols-1 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <textarea
            placeholder="Tell us about your project"
            className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white h-32 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
          />
          <button type="submit" className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-all shadow-lg">
            Submit Request
          </button>
        </form>
      </motion.div>

      {/* Scroll Cue */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-indigo-400 text-sm animate-bounce z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Scroll to explore ↓
      </motion.div>

      {/* SVG Divider */}
      <div className="absolute w-full bottom-0 overflow-hidden leading-none rotate-180 z-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-24 fill-indigo-100 dark:fill-gray-800">
          <path d="M0,0V46.29c47.29,22,99.29,29.88,148,16S291,2,360,0s135,25.71,210,36,153-2.58,210-13.29S1052,4,1200,0V120H0Z" />
        </svg>
      </div>
    </section>
  );
}
