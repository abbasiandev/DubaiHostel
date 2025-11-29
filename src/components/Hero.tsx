'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import HeroImageGallery from './HeroImageGallery';

export default function Hero() {
  const t = useTranslations('hero');
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { y: 0 },
    visible: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Gallery */}
      <HeroImageGallery />
      
      {/* Background Animation Elements */}
      <div className="absolute inset-0 z-10">
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="absolute top-20 left-10 w-32 h-32 glass rounded-full opacity-30"
        />
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 1 }}
          className="absolute top-40 right-20 w-20 h-20 glass-dark rounded-full opacity-40"
        />
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 2 }}
          className="absolute bottom-32 left-1/4 w-16 h-16 glass rounded-full opacity-50"
        />
        <motion.div
          variants={floatingVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          transition={{ delay: 0.5 }}
          className="absolute bottom-20 right-1/3 w-24 h-24 glass-dark rounded-full opacity-35"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              {t('title')}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-semibold text-white/90 mb-4"
          >
            {t('subtitle')}
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-blue-300" />
              </div>
              <div className="text-2xl font-bold text-white">1</div>
              <div className="text-white/70 text-sm">Prime Location</div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-yellow-300" />
              </div>
              <div className="text-2xl font-bold text-white">4.8</div>
              <div className="text-white/70 text-sm">Average Rating</div>
            </div>
            
            <div className="glass-card rounded-2xl p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-green-400 rounded-full"></div>
              </div>
              <div className="text-2xl font-bold text-white">1000+</div>
              <div className="text-white/70 text-sm">Happy Guests</div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={itemVariants}
            className="pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group glass-card rounded-2xl px-8 py-4 text-white font-semibold text-lg inline-flex items-center space-x-3 hover:bg-white/20 transition-all duration-300"
            >
              <span>{t('cta')}</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 glass rounded-full border-2 border-white/30 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}