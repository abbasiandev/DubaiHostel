'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { 
  Wifi, Coffee, Car, Shield, Utensils, Dumbbell, 
  Snowflake, Tv, Sofa, Users, MapPin, Clock
} from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export default function AmenitiesPreview() {
  const t = useTranslations('amenities');
  const locale = useLocale();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const amenityCategories = [
    {
      category: 'essential',
      icon: Shield,
      amenities: [
        { icon: Wifi, name: 'Free WiFi', nameAr: 'وای‌فای رایگان' },
        { icon: Snowflake, name: 'Air Conditioning', nameAr: 'تهویه مطبوع' },
        { icon: Clock, name: '24/7 Reception', nameAr: 'پذیرش ۲۴ ساعته' },
        { icon: Shield, name: 'Security', nameAr: 'امنیت' },
      ]
    },
    {
      category: 'comfort',
      icon: Sofa,
      amenities: [
        { icon: Utensils, name: 'Shared Kitchen', nameAr: 'آشپزخانه مشترک' },
        { icon: Tv, name: 'Common TV Area', nameAr: 'منطقه تلویزیون مشترک' },
        { icon: Coffee, name: 'Free Coffee', nameAr: 'قهوه رایگان' },
        { icon: Sofa, name: 'Lounge Area', nameAr: 'منطقه نشیمن' },
      ]
    },
    {
      category: 'connectivity',
      icon: Wifi,
      amenities: [
        { icon: Wifi, name: 'High Speed Internet', nameAr: 'اینترنت پرسرعت' },
        { icon: Users, name: 'Co-working Space', nameAr: 'فضای کار مشترک' },
        { icon: Tv, name: 'Smart TV', nameAr: 'تلویزیون هوشمند' },
      ]
    },
    {
      category: 'safety',
      icon: Shield,
      amenities: [
        { icon: Shield, name: 'CCTV Security', nameAr: 'امنیت دوربین مدار بسته' },
        { icon: Users, name: 'Secure Lockers', nameAr: 'کمدهای امن' },
        { icon: MapPin, name: 'Safe Location', nameAr: 'مکان امن' },
      ]
    }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
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
          {t('subtitle')}
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {amenityCategories.map((category, index) => (
          <motion.div
            key={category.category}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            className="glass-card rounded-3xl p-6"
          >
            <div className="text-center mb-6">
              <div className="glass-dark rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <category.icon className="w-8 h-8 text-blue-300" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {t(`categories.${category.category}`)}
              </h3>
            </div>

            <div className="space-y-3">
              {category.amenities.map((amenity, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center space-x-3 rtl:space-x-reverse text-white/80"
                >
                  <amenity.icon className="w-4 h-4 text-green-400" />
                  <span className="text-sm">
                    {locale === 'fa' ? amenity.nameAr : amenity.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* View All Amenities Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="text-center mt-12"
      >
        <Link href={`/${locale}/amenities`}>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all"
          >
            {locale === 'fa' ? 'مشاهده تمام امکانات' : 'View All Amenities'}
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}