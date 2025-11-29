'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Award, Users, MapPin, Heart, Shield, Star } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  const t = useTranslations();
  const locale = useLocale();

  const stats = [
    { icon: MapPin, value: '50+', label: 'Premium Locations' },
    { icon: Users, value: '10K+', label: 'Happy Guests' },
    { icon: Star, value: '4.8', label: 'Average Rating' },
    { icon: Award, value: '5+', label: 'Years Experience' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Hospitality Excellence',
      titleAr: 'تعالی در مهمان‌نوازی',
      description: 'We believe in creating memorable experiences for every guest.',
      descriptionAr: 'ما به خلق تجربه‌های به‌یادماندنی برای هر مهمان اعتقاد داریم.'
    },
    {
      icon: Shield,
      title: 'Safety & Security',
      titleAr: 'ایمنی و امنیت',
      description: 'Your safety is our top priority with 24/7 security measures.',
      descriptionAr: 'امنیت شما اولویت اصلی ما با اقدامات امنیتی ۲۴/۷ است.'
    },
    {
      icon: Award,
      title: 'Quality Assurance',
      titleAr: 'تضمین کیفیت',
      description: 'Every hostel meets our strict quality and cleanliness standards.',
      descriptionAr: 'هر هاستل با استانداردهای سختگیرانه کیفیت و نظافت ما مطابقت دارد.'
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
            {locale === 'fa' ? 'درباره دبی هاستل‌ز' : 'About Dubai Hostels'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {locale === 'fa' 
              ? 'ما متعهد به ارائه بهترین تجربه اقامت در هاستل‌های پریمیوم دبی هستیم'
              : 'We are committed to providing the best hostel experience in Dubai\'s premium accommodations'
            }
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
                <div className="text-white/70">{stat.label}</div>
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
              {locale === 'fa' ? 'داستان ما' : 'Our Story'}
            </h2>
            <div className="space-y-4 text-white/80 leading-relaxed">
              <p>
                {locale === 'fa' 
                  ? 'دبی هاستل‌ز از ایده‌ای ساده شروع شد: ایجاد فضایی که مسافران بتوانند تجربه‌ای لوکس و مقرون‌به‌صرفه در قلب دبی داشته باشند.'
                  : 'Dubai Hostels started with a simple idea: create spaces where travelers could experience luxury and affordability in the heart of Dubai.'
                }
              </p>
              <p>
                {locale === 'fa'
                  ? 'با ترکیب طراحی مدرن، فناوری پیشرفته و خدمات استثنایی، ما شبکه‌ای از هاستل‌های پریمیوم ایجاد کرده‌ایم که استانداردهای جدیدی را در صنعت مهمان‌نوازی تعریف می‌کند.'
                  : 'By combining modern design, cutting-edge technology, and exceptional service, we\'ve created a network of premium hostels that set new standards in the hospitality industry.'
                }
              </p>
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
            {locale === 'fa' ? 'ارزش‌های ما' : 'Our Values'}
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
                  {locale === 'fa' ? value.titleAr : value.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {locale === 'fa' ? value.descriptionAr : value.description}
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
            {locale === 'fa' ? 'ماموریت ما' : 'Our Mission'}
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            {locale === 'fa'
              ? 'ما در تلاش هستیم تا بهترین تجربه اقامت را با ترکیب لوکس، راحتی و مقرون‌به‌صرفه بودن در زیباترین مکان‌های دبی ارائه دهیم. هدف ما خلق خاطراتی فراموش‌نشدنی برای هر مهمان است.'
              : 'We strive to provide the best accommodation experience by combining luxury, comfort, and affordability in Dubai\'s most beautiful locations. Our goal is to create unforgettable memories for every guest.'
            }
          </p>
        </motion.div>
      </div>
    </div>
  );
}