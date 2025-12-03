'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Wifi, Snowflake, Users, Maximize, Bed, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { RoomType } from '@/data/hostels';

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
    const tCard = useTranslations('roomCard');
    const locale = useLocale();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [selectedBedOption, setSelectedBedOption] = useState(0);

    // Auto-slide images every 3 seconds
    useEffect(() => {
        if (!isHovered && room.images.length > 1) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === room.images.length - 1 ? 0 : prev + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isHovered, room.images.length]);

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
        const bedInfo = room.bedOptions
            ? ` (${room.bedOptions[selectedBedOption].beds}-bed)`
            : '';
        
        const roomName = locale === 'fa' ? room.nameAr : room.name;
        const message = tCard('whatsappMessage').replace('{roomName}', `${roomName}${bedInfo}`);

        const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === room.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    };

    return (
        <motion.div
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
            }}
            className="glass-card rounded-3xl overflow-hidden group cursor-pointer mb-8"
        >
            {/* Image Slider */}
            <div
                className="relative h-64 overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative w-full h-full"
                    >
                        <Image
                            src={room.images[currentImageIndex]}
                            alt={`${locale === 'fa' ? room.nameAr : room.name} - ${currentImageIndex + 1}`}
                            fill
                            className="object-cover"
                        />
                    </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows - Show on hover */}
                {room.images.length > 1 && isHovered && (
                    <>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                        >
                            <ChevronLeft className="w-5 h-5 text-white" />
                        </motion.button>
                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                        >
                            <ChevronRight className="w-5 h-5 text-white" />
                        </motion.button>
                    </>
                )}

                {/* Image Indicators */}
                {room.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {room.images.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(i);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${
                                    i === currentImageIndex
                                        ? 'bg-white w-6'
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                )}

                {/* Price Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute top-4 right-4 glass-dark rounded-full px-4 py-2 z-10"
                >
                    <div className="text-center">
                        <div className="text-lg font-bold text-white">
                            {room.price} AED
                        </div>
                        <div className="text-xs text-white/70">{t('perNight')}</div>
                    </div>
                </motion.div>

                {/* Availability Indicator */}
                {room.available && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 }}
                        className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white z-10"
                    />
                )}
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Title */}
                <div className="mb-4">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl font-bold text-white mb-2"
                    >
                        {locale === 'fa' ? room.nameAr : room.name}
                    </motion.h3>
                </div>

                {/* Bed Options Selector */}
                {room.bedOptions && room.bedOptions.length > 1 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex gap-2 mb-4"
                    >
                        {room.bedOptions.map((option, i) => (
                            <button
                                key={i}
                                onClick={() => setSelectedBedOption(i)}
                                className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-all ${
                                    selectedBedOption === i
                                        ? 'bg-blue-500 text-white'
                                        : 'glass-dark text-white/70 hover:text-white hover:bg-white/10'
                                }`}
                            >
                                {locale === 'fa' ? option.labelAr : option.label}
                            </button>
                        ))}
                    </motion.div>
                )}

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

                {/* Action Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleWhatsAppBook}
                    className="w-full bg-green-500 rounded-xl py-3 text-white text-sm font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                >
                    <Phone className="w-4 h-4" />
                    {tCard('bookNow')}
                </motion.button>
            </div>
        </motion.div>
    );
}