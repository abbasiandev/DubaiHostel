'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { MessageCircle, Clock, MapPin, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function ContactSection() {
  const t = useTranslations();
  const locale = useLocale();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleWhatsAppContact = () => {
    const message = locale === 'fa'
      ? 'سلام! من یک سوال در مورد هاستل‌های دبی دارم.'
      : 'Hi! I have a question about Dubai hostels.';
    
    const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      titleAr: 'پشتیبانی واتساپ',
      description: 'Instant messaging support',
      descriptionAr: 'پشتیبانی فوری پیام‌رسانی',
      action: 'Chat Now',
      actionAr: 'شروع چت',
      onClick: handleWhatsAppContact
    },
    {
      icon: Clock,
      title: 'Business Hours',
      titleAr: 'ساعات کاری',
      description: '24/7 Support Available',
      descriptionAr: 'پشتیبانی ۲۴/۷ در دسترس'
    },
    {
      icon: MapPin,
      title: 'Locations',
      titleAr: 'مکان‌ها',
      description: 'Multiple premium locations across Dubai',
      descriptionAr: 'چندین مکان پریمیوم در سراسر دبی'
    },
    {
      icon: Mail,
      title: 'Email Support',
      titleAr: 'پشتیبانی ایمیل',
      description: 'info@dubaihostels.com',
      descriptionAr: 'info@dubaihostels.com'
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {locale === 'fa' ? 'تماس با ما' : 'Contact Us'}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {locale === 'fa' 
              ? 'ما اینجا هستیم تا به شما کمک کنیم. با ما تماس بگیرید!'
              : 'We\'re here to help you. Get in touch with us!'
            }
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-3xl p-8"
          >
            <h2 className="text-2xl font-bold text-white mb-6">
              {locale === 'fa' ? 'پیام ارسال کنید' : 'Send us a Message'}
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {locale === 'fa' ? 'نام' : 'Name'}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                    placeholder={locale === 'fa' ? 'نام شما' : 'Your name'}
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {locale === 'fa' ? 'ایمیل' : 'Email'}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                    placeholder={locale === 'fa' ? 'ایمیل شما' : 'Your email'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">
                  {locale === 'fa' ? 'موضوع' : 'Subject'}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder={locale === 'fa' ? 'موضوع پیام' : 'Message subject'}
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">
                  {locale === 'fa' ? 'پیام' : 'Message'}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                  placeholder={locale === 'fa' ? 'پیام شما...' : 'Your message...'}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all"
              >
                {locale === 'fa' ? 'ارسال پیام' : 'Send Message'}
              </motion.button>
            </form>

            <div className="mt-6 p-4 glass-dark rounded-xl">
              <p className="text-white/70 text-sm text-center">
                {locale === 'fa' 
                  ? '💡 برای پاسخ سریع‌تر از واتساپ استفاده کنید'
                  : '💡 Use WhatsApp for faster response'
                }
              </p>
            </div>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass-card rounded-3xl p-6"
              >
                <div className="flex items-start space-x-4 rtl:space-x-reverse">
                  <div className="glass-dark rounded-xl p-3">
                    <info.icon className="w-6 h-6 text-blue-300" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {locale === 'fa' ? info.titleAr || info.title : info.title}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {locale === 'fa' ? info.descriptionAr || info.description : info.description}
                    </p>
                    
                    {info.onClick && (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={info.onClick}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        {locale === 'fa' ? info.actionAr || info.action : info.action}
                      </motion.button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Quick Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="glass-card rounded-3xl p-8 text-center"
            >
              <h3 className="text-2xl font-bold text-white mb-4">
                {locale === 'fa' ? 'تماس فوری' : 'Instant Contact'}
              </h3>
              <p className="text-white/80 mb-6">
                {locale === 'fa' 
                  ? 'برای رزرو فوری و پشتیبانی سریع'
                  : 'For instant booking and quick support'
                }
              </p>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleWhatsAppContact}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {locale === 'fa' ? 'واتساپ' : 'WhatsApp'}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}