'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star, MapPin, Wifi, Coffee, Car, Shield, Phone, Calendar, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { RoomType } from '@/data/hostels';

const amenityIcons: { [key: string]: any } = {
  wifi: Wifi,
  coffee: Coffee,
  parking: Car,
  security: Shield,
};

interface HostelDetailsProps {
  hostel: RoomType;
}

export default function HostelDetails({ hostel }: HostelDetailsProps) {
  const t = useTranslations();
  const locale = useLocale();
  const [selectedImage, setSelectedImage] = useState(0);

  const handleWhatsAppBook = () => {
    const message = locale === 'fa' 
      ? `سلام! می‌خواهم ${hostel.nameAr || hostel.name} را رزرو کنم. لطفاً اطلاعات بیشتری ارسال کنید.`
      : `Hi! I would like to book ${hostel.name}. Please send me more information.`;
    
    const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Sample gallery images (in real app, this would come from hostel data)
  const galleryImages = [
    hostel.image,
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1595515106969-1ce29566604a?w=800&h=600&fit=crop",
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 mb-8"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Image Gallery */}
            <div className="lg:w-2/3">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-4">
                <motion.div
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={galleryImages[selectedImage]}
                    alt={locale === 'fa' ? hostel.nameAr : hostel.name}
                    fill
                    className="object-cover"
                  />
                </motion.div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 glass-dark rounded-full px-4 py-2 flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-white font-semibold">{hostel.rating}</span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex gap-2 overflow-x-auto">
                {galleryImages.map((img, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedImage(index)}
                    className={`relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 ${
                      selectedImage === index ? 'ring-2 ring-white' : ''
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Gallery ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Booking Card */}
            <div className="lg:w-1/3">
              <div className="glass-dark rounded-2xl p-6 sticky top-24">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-white mb-2">
                    ${hostel.price}
                    <span className="text-lg font-normal text-white/70">/night</span>
                  </div>
                  <div className="text-white/60 text-sm">Best rates guaranteed</div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center text-white/70 mb-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">Check availability</span>
                    </div>
                    <div className="text-white">Available year-round</div>
                  </div>

                  <div className="glass rounded-xl p-4">
                    <div className="flex items-center text-white/70 mb-2">
                      <Users className="w-4 h-4 mr-2" />
                      <span className="text-sm">Capacity</span>
                    </div>
                    <div className="text-white">2-6 guests per room</div>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleWhatsAppBook}
                  className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <Phone className="w-5 h-5" />
                  Book via WhatsApp
                </motion.button>

                <div className="text-center text-white/60 text-sm">
                  No booking fees • Instant confirmation
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card rounded-3xl p-8"
            >
              <h1 className="text-3xl font-bold text-white mb-4">
                {locale === 'fa' ? hostel.nameAr : hostel.name}
              </h1>
              
              <div className="flex items-center text-white/70 mb-6">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{locale === 'fa' ? hostel.locationAr : hostel.location}</span>
              </div>

              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {locale === 'fa' ? hostel.descriptionAr : hostel.description}
              </p>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Features & Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {(locale === 'fa' ? hostel.featuresAr : hostel.features).map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="flex items-center text-white/80"
                    >
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Amenities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Amenities</h3>
              <div className="space-y-3">
                {hostel.amenities.map((amenity, index) => {
                  const IconComponent = amenityIcons[amenity];
                  return (
                    <div key={amenity} className="flex items-center text-white/80">
                      {IconComponent && <IconComponent className="w-5 h-5 mr-3 text-blue-300" />}
                      <span className="capitalize">{amenity.replace('_', ' ')}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Quick Info</h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Check-in:</span>
                  <span>2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Check-out:</span>
                  <span>11:00 AM</span>
                </div>
                <div className="flex justify-between">
                  <span>Languages:</span>
                  <span>EN, AR, FA</span>
                </div>
                <div className="flex justify-between">
                  <span>Currency:</span>
                  <span>AED, USD</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}