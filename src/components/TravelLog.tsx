'use client';

import { motion } from 'framer-motion';
import { MapPin, Utensils, Sparkles } from 'lucide-react';

interface TravelCard {
  country: string;
  theme: string;
  description: string;
  highlights: string[];
  imageGradient: string;
}

const travels: TravelCard[] = [
  {
    country: 'Thailand',
    theme: 'Night Markets & Sisterly Laughter',
    description: 'The joy of street food and night walks, where every corner held a new flavor and every moment was filled with her beautiful laughter.',
    highlights: ['Street food adventures', 'Night market strolls', 'Sisterly bonding moments'],
    imageGradient: 'from-orange-100 to-amber-50',
  },
  {
    country: 'Singapore',
    theme: 'Marina Bay Whispers',
    description: 'The simple magic of walking and talking together at the Bay, where the city lights reflected in her eyes and time seemed to stand still.',
    highlights: ['Marina Bay evening walks', 'Deep conversations', 'City lights romance'],
    imageGradient: 'from-blue-50 to-indigo-100',
  },
];

export default function TravelLog() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#F5EBE0]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm text-[#A9927D] uppercase tracking-[0.3em] mb-4">
            Adventures Together
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3F35]">
            Travel Log
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B4F] mt-4 max-w-xl mx-auto">
            Collecting moments from around the world, one journey at a time
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {travels.map((travel, index) => (
            <motion.div
              key={travel.country}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500 border border-[#D5BDAF]">
                {/* Image Placeholder with gradient */}
                <div className={`h-48 bg-gradient-to-br ${travel.imageGradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <MapPin className="w-12 h-12 text-white/50" />
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-sm font-serif text-[#4A3F35]">{travel.country}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-4 h-4 text-[#A9927D]" />
                    <span className="text-xs text-[#8B7355] uppercase tracking-wider">
                      Theme
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] mb-4 italic">
                    &ldquo;{travel.theme}&rdquo;
                  </h3>
                  
                  <p className="text-sm sm:text-base text-[#6B5B4F] leading-relaxed mb-6">
                    {travel.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 mb-3">
                      <Utensils className="w-4 h-4 text-[#D5BDAF]" />
                      <span className="text-xs text-[#8B7355] uppercase tracking-wider">
                        Highlights
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {travel.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="text-xs px-3 py-1 bg-[#F5EBE0] text-[#6B5B4F] rounded-full"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
