'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { key: string; href: string }[] = [];

  const toggleLanguage = () => {
    const newLocale = locale === 'en' ? 'fa' : 'en';
    const currentPath = pathname.split('/').slice(2).join('/');
    const newPath = `/${newLocale}${currentPath ? `/${currentPath}` : ''}`;
    window.location.href = newPath;
  };

  const handleBookNowClick = () => {
    const message = locale === 'fa'
      ? 'سلام! می‌خواهم اتاقی در هاستل ایرانی دبی رزرو کنم. لطفاً اطلاعات موجودی و قیمت‌ها را ارسال کنید.'
      : 'Hi! I would like to book a room at Iranian Hostel Dubai. Please send me availability and pricing information.';
    
    const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={`/${locale}`} className="flex items-center space-x-2">
              <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">I</span>
              </div>
              <span className="text-white font-semibold text-xl">
                Iranian Hostel
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {navItems.slice(0, 6).map((item) => (
              <motion.div
                key={item.key}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <Link
                  href={item.href}
                  className={`text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm ${
                    pathname === item.href ? 'text-white' : ''
                  }`}
                >
                  {t(item.key as any)}
                </Link>
              </motion.div>
            ))}
            
            {/* Book Now Button */}
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <button
                onClick={handleBookNowClick}
                className="glass-accent rounded-xl px-4 py-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
              >
                {t('book')}
              </button>
            </motion.div>
            
            {/* Language Toggle */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="glass rounded-lg p-2 text-white hover:bg-white/20 transition-colors"
            >
              <Globe className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleBookNowClick}
              className="glass-accent rounded-xl px-4 py-2 text-green-400 hover:text-green-300 transition-colors font-semibold"
            >
              {t('book')}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleLanguage}
              className="glass rounded-lg p-2 text-white"
            >
              <Globe className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

      </div>
    </motion.nav>
  );
}