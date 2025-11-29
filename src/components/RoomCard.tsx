'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Wifi, Snowflake, Users, Maximize, Bed, Phone } from 'lucide-react';
import Image from 'next/image';
import { RoomType, iranianHostel } from '@/data/hostels';

interface RoomCardProps {
  room: RoomType;
  index: number;
}

const amenityIcons: { [key: string]: any } = {
  wifi: Wifi,
  ac: Snowflake,
  locker: Users,
  reading_light: Bed,
  power_outlet: Wifi,
  private_bathroom: Bed,
  tv: Maximize,
  mini_fridge: Snowflake,
  work_desk: Users,
  balcony: Maximize,
  kitchenette: Bed,
  sofa_bed: Bed,
  hair_dryer: Wifi,
  shared_bathroom: Bed,
  food_service: Wifi,
  metro_access: Wifi,
  supermarket_opposite: Wifi,
};

export default function RoomCard({ room, index }: RoomCardProps) {
  const t = useTranslations('rooms');
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
      ? `سلام! می‌خواهم ${room.nameAr} را در هاستل ایرانی رزرو کنم. لطفاً اطلاعات بیشتری ارسال کنید.`
      : `Hi! I would like to book ${room.name} at Iranian Hostel. Please send me more information.`;
    
    const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getRoomTypeColor = (type: string) => {
    switch (type) {
      case 'dormitory': return 'text-blue-400 bg-blue-400/10';
      case 'private': return 'text-purple-400 bg-purple-400/10';
      case 'family': return 'text-orange-400 bg-orange-400/10';
      default: return 'text-gray-400 bg-gray-400/10';
    }
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
            src={room.image}
            alt={locale === 'fa' ? room.nameAr : room.name}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Price Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="absolute top-4 right-4 glass-dark rounded-full px-4 py-2"
        >
          <div className="text-center">
            <div className="text-lg font-bold text-white">
              ${room.price}
              {room.originalPrice && (
                <span className="text-sm text-white/60 line-through ml-2">
                  ${room.originalPrice}
                </span>
              )}
            </div>
            <div className="text-xs text-white/70">{t('perNight')}</div>
          </div>
        </motion.div>

        {/* Room Type Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="absolute top-4 left-4 glass rounded-full px-3 py-1"
        >
          <span className={`text-sm font-semibold ${getRoomTypeColor(room.type)}`}>
            {room.type.charAt(0).toUpperCase() + room.type.slice(1)}
          </span>
        </motion.div>

        {/* Availability Indicator */}
        {room.available && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-4 right-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white"
          />
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Capacity */}
        <div className="mb-4">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl font-bold text-white mb-2"
          >
            {locale === 'fa' ? room.nameAr : room.name}
          </motion.h3>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-between text-white/70"
          >
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2" />
              <span className="text-sm">
                {room.capacity} {locale === 'fa' ? 'نفر' : 'guests'}
              </span>
            </div>
            <div className="flex items-center">
              <Maximize className="w-4 h-4 mr-2" />
              <span className="text-sm">{room.size}m²</span>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-sm mb-4 line-clamp-2"
        >
          {locale === 'fa' ? room.descriptionAr : room.description}
        </motion.p>

        {/* Amenities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
        >
          {room.amenities.slice(0, 4).map((amenity, i) => {
            const IconComponent = amenityIcons[amenity];
            return (
              <motion.div
                key={amenity}
                whileHover={{ scale: 1.2 }}
                className="glass-dark rounded-lg p-2"
                title={amenity.replace('_', ' ')}
              >
                {IconComponent && <IconComponent className="w-4 h-4 text-white/70" />}
              </motion.div>
            );
          })}
          {room.amenities.length > 4 && (
            <div className="glass-dark rounded-lg px-2 py-1">
              <span className="text-white/70 text-xs">+{room.amenities.length - 4}</span>
            </div>
          )}
        </motion.div>

        {/* Action Buttons */}
        <div className="flex space-x-3 rtl:space-x-reverse">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-1 glass-dark rounded-xl py-3 text-white/80 text-sm font-medium hover:bg-white/10 transition-colors"
          >
            See details
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleWhatsAppBook}
            className="flex-1 bg-green-500 rounded-xl py-3 text-white text-sm font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Book this room
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}