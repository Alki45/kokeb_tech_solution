import { motion } from 'framer-motion';

export default function QuoteForm() {
  return (
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
  );
}
