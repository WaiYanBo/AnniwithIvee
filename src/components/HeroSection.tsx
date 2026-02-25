'use client';

import { motion } from 'framer-motion';
import LiveCounter from './LiveCounter';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-64 h-64 bg-[#D5BDAF] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#A9927D] rounded-full blur-3xl opacity-50" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative z-10 text-center max-w-4xl mx-auto"
      >
        {/* Tears Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-xs sm:text-sm text-[#8B7355] italic mb-8 tracking-wide"
        >
          25.09.2022 — The day I heard the words I never expected, and the day my tears of joy became my favorite memory.
        </motion.p>

        {/* Main Quote */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-[#4A3F35] leading-relaxed mb-12"
        >
          The moment you said{' '}
          <span className="italic text-[#A9927D]">'I love you'</span> and changed my world.
        </motion.h1>

        {/* Live Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-xs sm:text-sm text-[#6B5B4F] uppercase tracking-[0.3em] mb-6">
            Time since that magical moment
          </p>
          <LiveCounter />
        </motion.div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12"
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#A9927D] to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
