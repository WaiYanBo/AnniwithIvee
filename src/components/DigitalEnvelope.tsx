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
                      I still remember that September evening so clearly. I didn't just hear you say "I love you"; I felt it. For a guy who usually looks for logic in everything, that was the one moment where no algorithm was needed. Seeing you then, with that nervous smile, is still my favorite memory. Even the tears that followed were the happiest I’ve ever shed.
                    </p>

                    <p>
                      We’ve grown so much since those early days at the AIU Foundation Centre. Watching you navigate your Marketing degree while I tackled Computer Science has been such a journey. You’ve always been the one who understands people and emotions, while I’m busy trying to make things work behind the scenes. It’s funny how we’re so different, yet we fit together perfectly.
                    </p>

                    <p>
                      I think about our "Flavor & Sound" moments—sharing bowls of Malatang and debating the spice levels, or the way you look when we're wandering through night markets in Thailand or walking along Marina Bay. You have this way of making the simplest things feel like a huge adventure. 
                    </p>

                    <p>
                      Whether I'm strumming something for you on my Yamaha F310 or we're just sitting in silence, I’m constantly reminded of how lucky I am. They say I’m the one who builds the systems, but you’re the one who gives them a purpose.
                    </p>

                    <p className="italic">
                      Thank you for choosing me every single day since 2022. I can't wait to see what the next "version" of our lives looks like together.
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
