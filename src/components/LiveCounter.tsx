'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeElapsed {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function LiveCounter() {
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date('2022-09-25T00:00:00');

    const calculateTimeElapsed = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      // Calculate total seconds
      const totalSeconds = Math.floor(diff / 1000);
      const totalMinutes = Math.floor(totalSeconds / 60);
      const totalHours = Math.floor(totalMinutes / 60);
      const totalDays = Math.floor(totalHours / 24);

      // Calculate years
      const years = Math.floor(totalDays / 365.25);
      const remainingDaysAfterYears = totalDays - Math.floor(years * 365.25);

      // Calculate months (approximate)
      const months = Math.floor(remainingDaysAfterYears / 30.44);
      const remainingDays = remainingDaysAfterYears - Math.floor(months * 30.44);

      // Calculate hours, minutes, seconds
      const hours = totalHours % 24;
      const minutes = totalMinutes % 60;
      const seconds = totalSeconds % 60;

      setTimeElapsed({
        years,
        months,
        days: remainingDays,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTimeElapsed();
    const interval = setInterval(calculateTimeElapsed, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 sm:mx-4">
      <motion.div
        key={value}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-[#F5EBE0] rounded-lg px-3 py-2 sm:px-4 sm:py-3 min-w-[60px] sm:min-w-[80px]"
      >
        <span className="text-2xl sm:text-4xl md:text-5xl font-serif text-[#4A3F35] tabular-nums">
          {value.toString().padStart(2, '0')}
        </span>
      </motion.div>
      <span className="text-xs sm:text-sm text-[#8B7355] mt-2 uppercase tracking-wider font-sans">
        {label}
      </span>
    </div>
  );

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center items-center gap-y-4">
        <TimeUnit value={timeElapsed.years} label="Years" />
        <TimeUnit value={timeElapsed.months} label="Months" />
        <TimeUnit value={timeElapsed.days} label="Days" />
        <TimeUnit value={timeElapsed.hours} label="Hours" />
        <TimeUnit value={timeElapsed.minutes} label="Minutes" />
        <TimeUnit value={timeElapsed.seconds} label="Seconds" />
      </div>
    </div>
  );
}
