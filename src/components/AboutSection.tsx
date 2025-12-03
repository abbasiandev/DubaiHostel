'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {Award, Users, MapPin, Heart, Shield, Star} from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations('about');

  const stats = [
    {icon: MapPin, value: '50+', labelKey: 'stats.locations'},
    {icon: Users, value: '10K+', labelKey: 'stats.guests'},
    {icon: Star, value: '4.8', labelKey: 'stats.rating'},
    {icon: Award, value: '5+', labelKey: 'stats.experience'}
  ];

  const values = [
    {
      icon: Heart,
      titleKey: 'values.hospitality.title',
      descriptionKey: 'values.hospitality.description'
    },
    {
      icon: Shield,
      titleKey: 'values.safety.title',
      descriptionKey: 'values.safety.description'
    },
    {
      icon: Award,
      titleKey: 'values.quality.title',
      descriptionKey: 'values.quality.description'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="glass-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-300" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/70">{t(stat.labelKey as any)}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card rounded-3xl p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              {t('ourStory')}
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>{t('storyText1')}</p>
              <p>{t('storyText2')}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-96 rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=600&fit=crop"
              alt="Dubai skyline"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            {t('ourValues')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-3xl p-8 text-center"
              >
                <div className="glass-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-purple-300" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {t(value.titleKey as any)}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {t(value.descriptionKey as any)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="glass-card rounded-3xl p-12 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            {t('ourMission')}
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            {t('missionText')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}