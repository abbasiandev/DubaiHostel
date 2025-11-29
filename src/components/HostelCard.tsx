'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star, MapPin, Wifi, Coffee, Car, Shield } from 'lucide-react';
import Image from 'next/image';

interface Hostel {
  id: string;
  name: string;
  nameAr?: string;
  location: string;
  locationAr?: string;
  rating: number;
  price: number;
  image: string;
  amenities: string[];
  description: string;
  descriptionAr?: string;
}

interface HostelCardProps {
  hostel: Hostel;
  index: number;
}

const amenityIcons: { [key: string]: any } = {
  wifi: Wifi,
  coffee: Coffee,
  parking: Car,
  security: Shield,
};

export default function HostelCard({ hostel, index }: HostelCardProps) {
  const t = useTranslations('hostels');
  const locale = useLocale();

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut'
      }
    }
  };

  const handleWhatsAppBook = () => {
    const message = locale === 'fa' 
      ? `سلام! می‌خواهم ${hostel.nameAr || hostel.name} را رزرو کنم.`
      : `Hi! I would like to book ${hostel.name}.`;
    
    const whatsappUrl = `https://wa.me/971501234567?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, threshold: 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src={hostel.image}
            alt={locale === 'fa' ? hostel.nameAr || hostel.name : hostel.name}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Rating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4 glass-dark rounded-full px-3 py-1 flex items-center space-x-1"
        >
          <Star className="w-4 h-4 text-yellow-400 fill-current" />
          <span className="text-white text-sm font-semibold">{hostel.rating}</span>
        </motion.div>

        {/* Price Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-4 left-4 glass rounded-full px-3 py-1"
        >
          <span className="text-white text-sm font-bold">${hostel.price}/night</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Location */}
        <div className="mb-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-white mb-2"
          >
            {locale === 'fa' ? hostel.nameAr || hostel.name : hostel.name}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center text-white/70"
          >
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">
              {locale === 'fa' ? hostel.locationAr || hostel.location : hostel.location}
            </span>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-sm mb-4 line-clamp-2"
        >
          {locale === 'fa' ? hostel.descriptionAr || hostel.description : hostel.description}
        </motion.p>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-3 mb-6"
        >
          {hostel.amenities.slice(0, 4).map((amenity, i) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <motion.div
                key={amenity}
                whileHover={{ scale: 1.2 }}
                className="glass-dark rounded-lg p-2"
              >
                {IconComponent && <IconComponent className="w-4 h-4 text-white/70" />}
              </motion.div>
            );
          })}
          {hostel.amenities.length > 4 && (
            <div className="glass-dark rounded-lg px-2 py-1">
              <span className="text-white/70 text-xs">+{hostel.amenities.length - 4}</span>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex space-x-3">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 glass-dark rounded-xl py-3 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            {t('viewDetails')}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppBook}
            className="flex-1 bg-green-500 rounded-xl py-3 text-white text-sm font-semibold hover:bg-green-600 transition-colors"
          >
            {t('bookNow')}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}