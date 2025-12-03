'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {roomTypes} from '@/data/hostels';
import RoomCard from './RoomCard';
import {useState} from 'react';
import {useInView} from 'react-intersection-observer';

export default function AllHostelsSection() {
  const t = useTranslations('allHostels');
  const [visibleHostels, setVisibleHostels] = useState(6);
  const [filteredHostels] = useState(roomTypes);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const loadMore = () => {
    setVisibleHostels(prev => Math.min(prev + 3, filteredHostels.length));
  };

  const containerVariants = {
    hidden: {opacity: 0},
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section ref={ref} className="py-12 px-4 max-w-5xl mx-auto">
      <motion.div
        initial={{opacity: 0, y: 30}}
        animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
        transition={{duration: 0.6}}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('title')}
        </h1>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
        <div className="mt-4 text-white/60">
          {t('showing')} {visibleHostels} {t('of')} {filteredHostels.length} {t('rooms')}
        </div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
      >
        {filteredHostels[0] && (
          <RoomCard room={filteredHostels[0]} index={0} />
        )}
      </motion.div>

      {visibleHostels < filteredHostels.length && (
        <motion.div
          initial={{opacity: 0, y: 30}}
          animate={{opacity: 1, y: 0}}
          transition={{delay: 0.3}}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale: 0.95}}
            onClick={loadMore}
            className="glass-card rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all"
          >
            {t('loadMore')} ({filteredHostels.length - visibleHostels} {t('remaining')})
          </motion.button>
        </motion.div>
      )}
    </section>
  );
}