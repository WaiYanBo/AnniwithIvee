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
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-px h-full bg-gradient-to-b from-[#D5BDAF] via-[#A9927D] to-[#D5BDAF]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.date}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card - Width mathematically calculated to never overflow */}
                <div className="w-[calc(100%-3.5rem)] ml-14 md:w-5/12 md:ml-0">
                  <div className={`p-5 sm:p-6 rounded-xl bg-white shadow-sm border border-[#D5BDAF] transition-all duration-300 hover:shadow-md ${
                    milestone.isHighlighted ? 'bg-gradient-to-br from-white to-[#F5EBE0] border-[#A9927D]' : ''
                  }`}>
                    <div className="flex items-center gap-2 mb-2 text-[#8B7355]">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs sm:text-sm font-sans">{milestone.date}</span>
                    </div>
                    
                    <h3 className="text-lg sm:text-xl font-serif text-[#4A3F35] mb-2 leading-tight">
                      {milestone.title}
                    </h3>
                    
                    <div className="flex items-start gap-2 mb-1 text-[#6B5B4F]">
                      <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{milestone.location}</span>
                    </div>
                    
                    {milestone.degree && (
                      <div className="flex items-start gap-2 text-[#6B5B4F] italic">
                        <GraduationCap className="w-4 h-4 mt-1 flex-shrink-0" />
                        <span className="text-xs sm:text-sm">{milestone.degree}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#A9927D] border-4 border-[#F5EBE0] z-10" />

                {/* Empty space block for desktop to keep the layout balanced */}
                <div className="hidden md:block md:w-5/12" />
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