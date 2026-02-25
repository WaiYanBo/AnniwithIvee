'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

interface Milestone {
  date: string;
  title: string;
  location: string;
  degree?: string;
  isHighlighted?: boolean;
}

const milestones: Milestone[] = [
  {
    date: 'Dec 23, 2022',
    title: 'Foundation Graduation',
    location: 'Centre for Foundation Studies, AIU',
    isHighlighted: false,
  },
  {
    date: 'Dec 13, 2025',
    title: 'Degree Graduation',
    location: 'Albukhary International University',
    degree: 'BBA (Marketing) & BCS (Computer Science)',
    isHighlighted: true,
  },
];

export default function AcademicMilestone() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs sm:text-sm text-[#A9927D] uppercase tracking-[0.3em] mb-4">
            Our Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#4A3F35]">
            Academic Milestones
          </h2>
          <p className="text-sm sm:text-base text-[#6B5B4F] mt-4 max-w-xl mx-auto">
            Growing together at AIU, from foundation studies to our degrees
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[#D5BDAF] via-[#A9927D] to-[#D5BDAF]" />

          {/* Milestones */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div
                    className={`p-6 rounded-xl bg-white shadow-sm border transition-all duration-300 hover:shadow-md ${
                      milestone.isHighlighted
                        ? 'border-[#A9927D] bg-gradient-to-br from-white to-[#F5EBE0]'
                        : 'border-[#D5BDAF]'
                    }`}
                  >
                    <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <Calendar className="w-4 h-4 text-[#A9927D]" />
                      <span className="text-sm text-[#8B7355] font-sans">{milestone.date}</span>
                    </div>
                    
                    <h3 className="text-xl sm:text-2xl font-serif text-[#4A3F35] mb-2">
                      {milestone.title}
                    </h3>
                    
                    <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                      <MapPin className="w-4 h-4 text-[#D5BDAF]" />
                      <span className="text-sm text-[#6B5B4F]">{milestone.location}</span>
                    </div>
                    
                    {milestone.degree && (
                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <GraduationCap className="w-4 h-4 text-[#A9927D]" />
                        <span className="text-sm text-[#6B5B4F] italic">{milestone.degree}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#A9927D] border-4 border-[#F5EBE0] z-10" />

                {/* Empty space for other side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Marketing vs CS Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-xs sm:text-sm text-[#8B7355] italic">
            She mastered the art of persuasion (Marketing), while I mastered the art of computation (CS).
          </p>
        </motion.div>
      </div>
    </section>
  );
}
