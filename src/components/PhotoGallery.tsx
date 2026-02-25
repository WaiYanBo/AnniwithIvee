'use client';

import { motion } from 'framer-motion';

const photos = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  url: `/images/${i + 1}.webp`, // Ensure your photos are in public/images/
  alt: `Our Memory #${i + 1}`
}));

export default function PhotoGallery() {
  return (
    <section className="py-20 px-4 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs text-[#A9927D] uppercase tracking-[0.3em] mb-4">Captured Moments</p>
          <h2 className="text-3xl sm:text-5xl font-serif text-[#4A3F35]">Our Gallery</h2>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-xl border border-[#D5BDAF] group"
            >
              <img
                src={photo.url}
                alt={photo.alt}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-xs font-serif italic">Memory #{photo.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}