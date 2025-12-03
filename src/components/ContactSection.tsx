'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {MessageCircle, Clock, MapPin, Mail} from 'lucide-react';
import {useState} from 'react';

export default function ContactSection() {
  const t = useTranslations('contact');
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
      titleKey: 'whatsapp.title',
      descriptionKey: 'whatsapp.description',
      actionKey: 'whatsapp.action',
      onClick: handleWhatsAppContact
    },
    {
      icon: Clock,
      titleKey: 'hours.title',
      descriptionKey: 'hours.description'
    },
    {
      icon: MapPin,
      titleKey: 'locations.title',
      descriptionKey: 'locations.description'
    },
    {
      icon: Mail,
      titleKey: 'email.title',
      descriptionKey: 'email.description'
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
            {t('title')}
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            {t('subtitle')}
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
              {t('form.title')}
            </h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('form.name')}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                    placeholder={t('form.namePlaceholder')}
                  />
                </div>
                
                <div>
                  <label className="block text-white/80 text-sm mb-2">
                    {t('form.email')}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                    placeholder={t('form.emailPlaceholder')}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">
                  {t('form.subject')}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
                  placeholder={t('form.subjectPlaceholder')}
                />
              </div>

              <div>
                <label className="block text-white/80 text-sm mb-2">
                  {t('form.message')}
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  rows={5}
                  className="w-full glass rounded-xl px-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors resize-none"
                  placeholder={t('form.messagePlaceholder')}
                />
              </div>

              <motion.button
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all"
              >
                {t('form.submit')}
              </motion.button>
            </form>

            <div className="mt-6 p-4 glass-dark rounded-xl">
              <p className="text-white/70 text-sm text-center">
                {t('form.tip')}
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
                      {t(info.titleKey as any)}
                    </h3>
                    <p className="text-white/70 mb-4">
                      {t(info.descriptionKey as any)}
                    </p>
                    
                    {info.onClick && (
                      <motion.button
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={info.onClick}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                      >
                        {t(info.actionKey as any)}
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
                {t('instant.title')}
              </h3>
              <p className="text-white/80 mb-6">
                {t('instant.subtitle')}
              </p>
              
              <motion.button
                whileHover={{scale: 1.05}}
                whileTap={{scale: 0.95}}
                onClick={handleWhatsAppContact}
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-3"
              >
                <MessageCircle className="w-5 h-5" />
                {t('instant.button')}
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}