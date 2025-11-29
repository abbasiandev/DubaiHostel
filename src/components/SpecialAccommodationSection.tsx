'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { useInView } from 'react-intersection-observer';
import PrivateRoomCard from './PrivateRoomCard';

export default function SpecialAccommodationSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {locale === 'fa' ? 'اقامت ویژه در نایف' : 'Special Accommodation in Naif'}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {locale === 'fa' 
            ? 'از آنجا که هاستل ایرانی دبی اتاق خصوصی ندارد، این اتاق خصوصی نزدیک در مقابل سوپرمارکت مالابار'
            : 'Since Iranian Hostel Dubai has no private rooms, this nearby private room opposite Malabar Supermarket'
          }
        </p>
        
        {/* Special Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="inline-block mt-4"
        >
          <div className="glass-accent rounded-2xl px-6 py-2">
            <span className="text-green-400 font-semibold">
              {locale === 'fa' 
                ? '🌟 پیشنهاد ویژه - موقعیت عالی'
                : '🌟 Special Offer - Prime Location'
              }
            </span>
          </div>
        </motion.div>
      </motion.div>

      <PrivateRoomCard />
    </section>
  );
}