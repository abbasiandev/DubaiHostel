'use client';

import {motion} from 'framer-motion';
import {useTranslations} from 'next-intl';
import {MapPin, Train, ShoppingBag, Phone, Calendar} from 'lucide-react';
import Image from 'next/image';

export default function PrivateRoomCard() {
  const t = useTranslations('privateRoom');

  const handleWhatsAppContact = () => {
    const message = t('whatsappMessage');
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
          {t('topBadge')}
        </span>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Image Section */}
        <div className="lg:w-1/2 relative h-80">
          <Image
            src="https://drive.google.com/uc?export=view&id=1ptr0Vi97I-XsM5IG4uP9WpnWhXmWK_Ml"
            alt={t('altText')}
            fill
            className="object-cover"
          />
          
          {/* Price Badge */}
          <div className="absolute top-4 right-4 glass-dark rounded-2xl px-4 py-2">
            <div className="text-center text-white">
              <div className="text-2xl font-bold">50 AED</div>
              <div className="text-sm">{t('priceDaily')}</div>
            </div>
          </div>

          {/* Monthly Price */}
          <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-2">
            <div className="text-center text-white">
              <div className="text-lg font-bold">900 AED</div>
              <div className="text-xs">{t('priceMonthly')}</div>
            </div>
          </div>

          {/* Established Badge */}
          <div className="absolute bottom-4 left-4 glass-accent rounded-xl px-3 py-1">
            <div className="text-green-400 text-sm font-semibold">
              {t('since')}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="lg:w-1/2 p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-white mb-3">
              {t('title')}
            </h2>
            
            <div className="flex items-center text-white/80 mb-4">
              <MapPin className="w-5 h-5 mr-2" />
              <span>
                {t('location')}
              </span>
            </div>

            <p className="text-white/90 leading-relaxed mb-6">
              {t('description')}
            </p>
          </div>

          {/* Key Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="glass-dark rounded-xl p-4 flex items-center">
              <ShoppingBag className="w-6 h-6 text-blue-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {t('features.supermarket')}
                </div>
                <div className="text-white/60 text-sm">Malabar</div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Train className="w-6 h-6 text-green-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {t('features.metro')}
                </div>
                <div className="text-white/60 text-sm">
                  {t('features.metroDistance')}
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Calendar className="w-6 h-6 text-purple-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {t('features.rates')}
                </div>
                <div className="text-white/60 text-sm">
                  {t('features.ratesType')}
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-4 flex items-center">
              <Phone className="w-6 h-6 text-orange-400 mr-3" />
              <div>
                <div className="text-white font-medium">
                  {t('features.foodService')}
                </div>
                <div className="text-white/60 text-sm">
                  {t('features.foodServiceType')}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              onClick={handleWhatsAppContact}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {t('buttons.whatsapp')}
            </motion.button>
            
            <motion.button
              whileHover={{scale: 1.05}}
              whileTap={{scale: 0.95}}
              className="flex-1 glass-card text-white font-semibold py-4 px-6 rounded-xl hover:bg-white/20 transition-all"
            >
              {t('buttons.moreDetails')}
            </motion.button>
          </div>

          {/* Special Note */}
          <div className="mt-4 p-3 glass-accent rounded-xl">
            <p className="text-green-300 text-sm text-center">
              {t('note')}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}