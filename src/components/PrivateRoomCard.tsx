'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { MapPin, Train, ShoppingBag, Phone, Calendar, Star } from 'lucide-react';
import Image from 'next/image';
import { iranianHostel } from '@/data/hostels';

export default function PrivateRoomCard() {
  const t = useTranslations();
  const locale = useLocale();

  const handleWhatsAppContact = () => {
    const message = locale === 'fa' 
      ? 'سلام! من به اتاق خصوصی در نایف مقابل سوپرمارکت مالابار علاقه‌مند هستم. لطفاً جزئیات موجودی و گزینه‌های سرویس غذا را ارسال کنید.'
      : 'Hi! I\'m interested in the Private Room in Naif opposite Malabar Supermarket. Please send details about availability and food service options.';
    
    const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="glass-card rounded-3xl overflow-hidden mb-8"
    >
      {/* Special Badge */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white text-center py-2 px-4">
        <span className="font-semibold">
          {locale === 'fa' 
            ? '🏠 اتاق خصوصی نزدیک هاستل ایرانی دبی' 
            : '🏠 Private Room near Iranian Hostel Dubai'
          }
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative h-80">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ptr0Vi97I-XsM5IG4uP9WpnWhXmWK_Ml"
            alt={locale === 'fa' ? 'اتاق خصوصی نایف' : 'Private Room Naif'}
            fill
            className="object-cover"
          />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 glass-dark rounded-2xl px-4 py-2">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">50 AED</div>
              <div className="text-sm">{locale === 'fa' ? 'در روز' : 'per day'}</div>
            </div>
          </div>

          {/* Monthly Price */}
          <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-2">
            <div className="text-center text-white">
              <div className="text-lg font-bold">900 AED</div>
              <div className="text-xs">{locale === 'fa' ? 'ماهانه' : 'monthly'}</div>
            </div>
          </div>

          {/* Established Badge */}
          <div className="absolute bottom-4 left-4 glass-accent rounded-xl px-3 py-1">
            <div className="text-green-400 text-sm font-semibold">
              {locale === 'fa' ? 'فعال از ۲۰۲۵' : 'Since 2025'}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              {locale === 'fa' ? 'اتاق خصوصی - نایف' : 'Private Room - Naif'}
            </h2>
            
            <div className="flex items-center text-white/80 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>
                {locale === 'fa' 
                  ? 'مقابل سوپرمارکت مالابار، نزدیک مترو بنیاس'
                  : 'Opposite Malabar Supermarket, near Baniyas Metro'
                }
              </span>
            </div>

            <p className="text-white/90 leading-relaxed mb-6">
              {locale === 'fa'
                ? 'اتاق خصوصی مقرون‌به‌صرفه در نایف، مقابل سوپرمارکت مالابار. از آنجایی که هاستل ایرانی دبی اتاق خصوصی ندارد، این گزینه مناسب برای کسانی که به حریم خصوصی نیاز دارند. برای غذا باید با واتساپ تماس بگیرید.'
                : 'Affordable private room in Naif, opposite Malabar Supermarket. Since Iranian Hostel Dubai has no private rooms, this is perfect for those needing privacy. For meals, you must contact via WhatsApp.'
              }
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="glass-dark rounded-xl p-4 flex items-center">
              <ShoppingBag className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {locale === 'fa' ? 'مقابل سوپرمارکت' : 'Opposite Supermarket'}
                </div>
                <div className="text-white/60 text-sm">Malabar</div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Train className="w-6 h-6 text-green-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {locale === 'fa' ? 'مترو بنیاس' : 'Baniyas Metro'}
                </div>
                <div className="text-white/60 text-sm">
                  {locale === 'fa' ? '۲ دقیقه' : '2-min walk'}
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Calendar className="w-6 h-6 text-purple-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {locale === 'fa' ? 'نرخ‌های انعطاف‌پذیر' : 'Flexible Rates'}
                </div>
                <div className="text-white/60 text-sm">
                  {locale === 'fa' ? 'روزانه/ماهانه' : 'Daily/Monthly'}
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Phone className="w-6 h-6 text-orange-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {locale === 'fa' ? 'سرویس غذا' : 'Food Service'}
                </div>
                <div className="text-white/60 text-sm">
                  {locale === 'fa' ? 'واتساپ' : 'via WhatsApp'}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {locale === 'fa' ? 'تماس واتساپ' : 'WhatsApp Contact'}
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 glass-card text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all"
            >
              {locale === 'fa' ? 'جزئیات بیشتر' : 'More Details'}
            </motion.button>
          </div>

          {/* Special Note */}
          <div className="mt-4 p-3 glass-accent rounded-xl">
            <p className="text-green-300 text-sm text-center">
              {locale === 'fa'
                ? '💡 موقعیت استراتژیک در قلب دبی سنتی'
                : '💡 Strategic location in the heart of traditional Dubai'
              }
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}