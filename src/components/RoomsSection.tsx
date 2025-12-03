'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { roomTypes } from '@/data/hostels';
import RoomCard from './RoomCard';
import { useInView } from 'react-intersection-observer';

export default function RoomsSection() {
  const t = useTranslations('rooms');
  const locale = useLocale();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {locale === 'fa' ? 'اتاق های ما' : 'Our Rooms'}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {locale === 'fa' ? 'از بین انواع اتاق‌های ما، متناسب با هر بودجه‌ای، انتخاب کنید' : 'Choose from our variety of comfortable rooms for every budget'}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-xl mx-auto"
      >
          <RoomCard room={roomTypes[0]} index={0} />
      </motion.div>

      {/* Special Offers Banner */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-16"
      >
        <div className="glass-card rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            {locale === 'fa' ? 'پیشنهادات ویژه' : 'Special Offers'}
          </h3>
          <p className="text-white/80 mb-6">
            {locale === 'fa' 
              ? 'برای اقامت بیش از ۳ شب، ۱۵٪ تخفیف ویژه دریافت کنید'
              : 'Get 15% off for stays longer than 3 nights'
            }
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-accent rounded-xl px-8 py-3 text-green-400 font-semibold hover:text-green-300 transition-colors"
          >
            {locale === 'fa' ? 'اعمال تخفیف' : 'Apply Discount'}
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}