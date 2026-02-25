'use client';

import { motion } from 'framer-motion';
import { Utensils, Music, Heart } from 'lucide-react';

interface FoodItem {
  name: string;
  description: string;
  category: string;
}

const favoriteFoods: FoodItem[] = [
  {
    name: 'Nan Gyi Thoke',
    description: 'Thick rice noodles with chicken and coconut milk broth, a taste of home in every bite',
    category: 'Burmese Classic',
  },
  {
    name: 'Kyay Oh',
    description: 'Vermicelli noodles in rich, savory pork broth with meatballs and greens',
    category: 'Noodle Soup',
  },
  {
    name: 'Steak',
    description: 'Perfectly seared, shared over candlelight and laughter',
    category: 'Western',
  },
];

export default function FlavorsAndSound() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm text-[#A9927D] uppercase tracking-[0.3em] mb-4">
            Our Favorites
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3F35]">
            Flavors & Sound
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B4F] mt-4 max-w-xl mx-auto">
            The tastes that bring us comfort and the melodies that fill our quiet moments
          </p>
        </motion.div>

        {/* Food Menu Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {favoriteFoods.map((food, index) => (
            <motion.div
              key={food.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="bg-white p-6 sm:p-8 rounded-xl border border-[#D5BDAF] hover:shadow-md transition-all duration-300 group"
            >
              <div className="flex items-center gap-2 mb-4">
                <Utensils className="w-4 h-4 text-[#A9927D] group-hover:text-[#8B7355] transition-colors" />
                <span className="text-xs text-[#8B7355] uppercase tracking-wider">
                  {food.category}
                </span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] mb-3">
                {food.name}
              </h3>
              
              <p className="text-sm text-[#6B5B4F] leading-relaxed italic">
                {food.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-[#F5EBE0]">
                <Heart className="w-4 h-4 text-[#D5BDAF] mx-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Music Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-r from-[#F5EBE0] to-[#E8DDD4] rounded-2xl p-8 sm:p-12 border border-[#D5BDAF]"
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Music Icon */}
            <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white rounded-full flex items-center justify-center shadow-sm">
              <Music className="w-10 h-10 sm:w-12 sm:h-12 text-[#A9927D]" />
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                <Music className="w-4 h-4 text-[#8B7355]" />
                <span className="text-xs text-[#8B7355] uppercase tracking-[0.2em]">
                  Soundtrack of Us
                </span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-serif text-[#4A3F35] mb-4">
                Yamaha F310 Melodies
              </h3>
              
              <p className="text-sm sm:text-base text-[#6B5B4F] leading-relaxed mb-6">
                Strumming chords on my trusty Yamaha F310, each note carrying thoughts of you. 
                These recordings are my way of expressing what words sometimes cannot.
              </p>
              
              {/* Music Placeholder */}
              <div className="bg-white rounded-xl p-6 border border-[#D5BDAF]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#F5EBE0] rounded-full flex items-center justify-center">
                      <Music className="w-5 h-5 text-[#A9927D]" />
                    </div>
                    <div>
                      <p className="text-sm font-serif text-[#4A3F35]">Songs for Ivee</p>
                      <p className="text-xs text-[#8B7355]">Coming soon...</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 h-4 bg-[#D5BDAF] rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-6 bg-[#D5BDAF] rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
                    <div className="w-1 h-3 bg-[#D5BDAF] rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
