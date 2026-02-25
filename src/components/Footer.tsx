'use client';

import { motion } from 'framer-motion';
import { Heart, Code, TrendingUp } from 'lucide-react';

// Hardcoded to prevent ANY React crashes or blank screens
const CATS = [
  { id: 1, left: "5%", delay: 0, duration: 15 },
  { id: 2, left: "15%", delay: 2, duration: 18 },
  { id: 3, left: "25%", delay: 5, duration: 12 },
  { id: 4, left: "35%", delay: 1, duration: 20 },
  { id: 5, left: "45%", delay: 3, duration: 16 },
  { id: 6, left: "55%", delay: 0, duration: 22 },
  { id: 7, left: "65%", delay: 4, duration: 14 },
  { id: 8, left: "75%", delay: 2, duration: 19 },
  { id: 9, left: "85%", delay: 6, duration: 17 },
  { id: 10, left: "95%", delay: 1, duration: 21 },
];

export default function Footer() {
  return (
    <footer className="bg-[#4A3F35] text-white py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* 🐈 BACKGROUND CATS - Safely animated behind the text 🐈 */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        {CATS.map((cat) => (
          <motion.div
            key={cat.id}
            className="absolute text-3xl"
            style={{ left: cat.left, top: "100%" }}
            animate={{ 
              y: -1000, 
              rotate: 360 
            }}
            transition={{
              duration: cat.duration,
              delay: cat.delay,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            🐈
          </motion.div>
        ))}
      </div>

      {/* MAIN TEXT CONTENT - Kept exactly as you wrote it */}
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Heart decoration */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-5 h-5 text-[#D5BDAF]" />
            <div className="w-8 h-px bg-gradient-to-r from-transparent via-[#D5BDAF] to-transparent" />
            <Heart className="w-5 h-5 text-[#A9927D]" />
          </div>

          {/* Main message */}
          <p className="text-lg sm:text-xl font-serif text-[#F5EBE0] mb-4">
            Made with all my love for Ivee
          </p>

          {/* Marketing vs CS joke */}
          <div className="bg-[#3A3028] rounded-xl p-6 mb-8 border border-[#6B5B4F]">
            <div className="flex items-center justify-center gap-4 mb-3">
              <Code className="w-5 h-5 text-[#A9927D]" />
              <span className="text-sm text-[#D5BDAF] uppercase tracking-wider">
                The Perfect Team
              </span>
              <TrendingUp className="w-5 h-5 text-[#A9927D]" />
            </div>
            <p className="text-[#F5EBE0] italic">
              Optimized by a Computer Scientist, approved by a Marketer
            </p>
            <p className="text-xs text-[#8B7355] mt-2">
              She handles the emotions, I handle the algorithms. Together, we handle forever.
            </p>
          </div>

          {/* Date and signature */}
          <div className="space-y-2">
            <p className="text-sm text-[#D5BDAF]">
              September 25, 2022 — The beginning of everything
            </p>
            <p className="text-xs text-[#8B7355]">
              © 2022-2026 Our Love Story. All rights reserved, especially the right to love you forever.
            </p>
          </div>

          {/* Bottom decorative line */}
          <div className="mt-8 flex items-center justify-center">
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#A9927D] to-transparent" />
          </div>
        </motion.div>
      </div>
    </footer>
  );
}