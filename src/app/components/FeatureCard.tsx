import { motion } from 'framer-motion';

export default function FeatureCard({ title, desc, index }: { title: string; desc: string; index: number }) {
  return (
    <motion.div
      className="bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 dark:border-gray-600 rounded-2xl p-6 shadow-xl hover:scale-[1.03] transition-transform hover:bg-white/50 dark:hover:bg-white/20"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 + index * 0.2, duration: 0.8 }}
    >
      <h3 className="text-xl font-semibold text-indigo-900 dark:text-black mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-black-300 text-base">{desc}</p>
    </motion.div>
  );
}
