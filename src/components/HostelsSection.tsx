'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { getFeaturedHostels } from '@/data/hostels';
import RoomCard from './RoomCard';
import { useInView } from 'react-intersection-observer';

export default function HostelsSection() {
  const t = useTranslations('hostels');
  const featuredHostels = getFeaturedHostels();
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
          {t('title')}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Discover our handpicked selection of premium hostels across Dubai's most sought-after locations
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-xl mx-auto"
      >
          <RoomCard room={featuredHostels[0]} index={0} />
      </motion.div>
    </section>
  );
}