'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, X } from 'lucide-react';

export default function DigitalEnvelope() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EBE0]">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-xs sm:text-sm text-[#A9927D] uppercase tracking-[0.3em] mb-4">
            A Special Message
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3F35]">
            My Letter to You
          </h2>
        </motion.div>

        {/* Envelope Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {!isOpen ? (
            <button
              onClick={() => setIsOpen(true)}
              className="group relative bg-white p-8 sm:p-12 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 border border-[#D5BDAF] cursor-pointer"
            >
              {/* Envelope Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#F5EBE0] to-[#D5BDAF] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform">
                <Mail className="w-10 h-10 sm:w-12 sm:h-12 text-[#4A3F35]" />
              </div>

              <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] mb-3">
                Open Your Digital Envelope
              </h3>
              
              <p className="text-sm text-[#6B5B4F] mb-4">
                Click to reveal what&apos;s in my heart
              </p>

              <div className="flex items-center justify-center gap-2 text-[#A9927D]">
                <Heart className="w-4 h-4 animate-pulse" />
                <span className="text-xs uppercase tracking-wider">Tap to open</span>
                <Heart className="w-4 h-4 animate-pulse" />
              </div>
            </button>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl border border-[#D5BDAF] overflow-hidden"
              >
                {/* Letter Header */}
                <div className="bg-gradient-to-r from-[#F5EBE0] to-[#E8DDD4] p-6 sm:p-8 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-[#A9927D]" />
                    <span className="font-serif text-[#4A3F35] text-lg">To My Ivee</span>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 flex items-center justify-center rounded-full bg-white/80 hover:bg-white transition-colors text-[#8B7355]"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Letter Content */}
                <div className="p-8 sm:p-12 text-left">
                  <p className="text-[#8B7355] text-sm mb-6 font-serif italic">
                    September 25, 2022 — The day everything changed
                  </p>

                  <div className="space-y-6 text-[#4A3F35] leading-relaxed">
                    <p className="text-base sm:text-lg">
                      My Dearest Ivee,
                    </p>

                    <p>
                      As I write this, I find myself thinking back to that September evening when you first said those three words that would reshape my entire world. I remember the way the light caught your eyes, the nervous tremor in your voice, and the overwhelming rush of joy that brought tears to my eyes — tears that I never knew could feel so sweet.
                    </p>

                    <p>
                      Since that day, we have walked an incredible journey together. From the halls of AIU&apos;s Foundation Centre to the grand stage of our graduation, you have been my constant source of inspiration. Watching you earn your BBA in Marketing while I pursued my BCS, I&apos;ve seen you transform from the girl who captured my heart into the remarkable woman who continues to amaze me every single day.
                    </p>

                    <p>
                      Our adventures — wandering through Thailand&apos;s vibrant night markets, sharing plates of Nan Gyi Thoke that remind us of home, strolling along Singapore&apos;s Marina Bay under a canopy of stars — these are the moments that have painted our love story in the most beautiful colors.
                    </p>

                    <p>
                      You see, you have this extraordinary way of making ordinary moments feel magical. Whether we&apos;re sharing a simple meal or exploring a new city, your presence turns every experience into a cherished memory. Your laughter is my favorite melody, your smile my favorite sight, and your love my greatest blessing.
                    </p>

                    <p>
                      They say computer scientists think in algorithms and logic, but when it comes to you, all my calculations fall apart. There is no formula that can explain why my heart races when you enter a room, no code that can capture the depth of what I feel for you. You are the beautiful exception to every rule I thought I knew.
                    </p>

                    <p>
                      So here&apos;s to us — to the girl who graduated in Marketing and stole this Computer Scientist&apos;s heart. To the adventures we&apos;ve had and the countless more awaiting us. To the songs I&apos;ll keep strumming on my Yamaha F310, each one carrying a piece of my love for you.
                    </p>

                    <p className="italic">
                      Thank you for saying &ldquo;I love you&rdquo; on that magical September day. Thank you for being my partner in this beautiful journey. And thank you for continuing to choose me, every single day.
                    </p>

                    <p>
                      Forever and always,
                    </p>

                    <p className="font-serif text-[#A9927D] text-lg">
                      Your loving boyfriend
                    </p>
                  </div>

                  {/* Decorative Footer */}
                  <div className="mt-12 pt-8 border-t border-[#F5EBE0] flex items-center justify-center gap-4">
                    <Heart className="w-5 h-5 text-[#D5BDAF]" />
                    <span className="text-sm text-[#8B7355] italic">25.09.2022 — Forever</span>
                    <Heart className="w-5 h-5 text-[#D5BDAF]" />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}
