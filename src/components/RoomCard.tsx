'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {Wifi, Snowflake, Users, Maximize, Bed, Phone, ChevronLeft, ChevronRight, X} from 'lucide-react';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {RoomType, roomTypes} from '@/data/hostels';
import {privateRoomData} from "@/data/privateRoom";

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

export default function RoomCard({room, index}: RoomCardProps) {
    const t = useTranslations('rooms');
    const locale = useLocale();
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

    // Auto-slide images every 3 seconds
    useEffect(() => {
        if (!isHovered && room.images.length > 1 && !isLightboxOpen) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === room.images.length - 1 ? 0 : prev + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isHovered, room.images.length, isLightboxOpen]);

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

    const handleWhatsAppContact = () => {
        const roomName = locale === 'fa' ? room.nameAr : room.name;
        const message = t('whatsappMessage', { roomName });
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

    const openLightbox = (index: number) => {
        setLightboxImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxImageIndex((prev) =>
            prev === room.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxImageIndex((prev) =>
            prev === 0 ? room.images.length - 1 : prev - 1
        );
    };

    return (
        <>
            <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                whileHover={{
                    y: -10,
                    scale: 1.02,
                    transition: {duration: 0.3}
                }}
                className="glass-card rounded-3xl overflow-hidden group cursor-pointer mb-8"
            >
                {/* Image Slider */}
                <div
                    className="relative h-72 overflow-hidden cursor-pointer"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    onClick={() => openLightbox(currentImageIndex)}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImageIndex}
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.5}}
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
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                onClick={prevImage}
                                className="absolute left-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                            >
                                <ChevronLeft className="w-5 h-5 text-white"/>
                            </motion.button>
                            <motion.button
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                onClick={nextImage}
                                className="absolute right-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                            >
                                <ChevronRight className="w-5 h-5 text-white"/>
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
                    <div className="absolute top-4 right-4 glass-dark rounded-2xl px-4 py-2">
                        <div className="text-center text-white">
                            <div className="text-2xl font-bold">50 AED</div>
                            <div className="text-sm">{t('perNight')}</div>
                        </div>
                    </div>

                    {/* Monthly Price */}
                    <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-2">
                        <div className="text-center text-white">
                            <div className="text-lg font-bold">900 AED</div>
                            <div className="text-xs">{t('priceMonthly')}</div>
                        </div>
                    </div>

                    {/* Availability Indicator */}
                    {room.available && (
                        <motion.div
                            initial={{opacity: 0, scale: 0}}
                            whileInView={{opacity: 1, scale: 1}}
                            transition={{delay: 0.5}}
                            className="absolute top-4 left-4 w-3 h-3 bg-green-400 rounded-full border-2 border-white z-10"
                        />
                    )}
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Title */}
                    <div className="mb-4">
                        <motion.h3
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{delay: 0.2}}
                            className="text-xl font-bold text-white mb-2"
                        >
                            {locale === 'fa' ? room.nameAr : room.name}
                        </motion.h3>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.4}}
                        className="text-white/80 text-sm mb-4 line-clamp-2"
                    >
                        {locale === 'fa' ? room.descriptionAr : room.description}
                    </motion.p>

                    {/* Amenities */}
                    <motion.div
                        initial={{opacity: 0, y: 20}}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{delay: 0.5}}
                        className="flex items-center space-x-3 rtl:space-x-reverse mb-6"
                    >
                        {room.amenities.slice(0, 4).map((amenity, i) => {
                            const IconComponent = amenityIcons[amenity];
                            return (
                                <motion.div
                                    key={amenity}
                                    whileHover={{scale: 1.2}}
                                    className="glass-dark rounded-lg p-2"
                                    title={amenity.replace('_', ' ')}
                                >
                                    {IconComponent && <IconComponent className="w-4 h-4 text-white/70"/>}
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
                        whileHover={{scale: 1.05}}
                        whileTap={{scale: 0.95}}
                        onClick={handleWhatsAppContact}
                        className="w-full bg-green-500 rounded-xl py-3 text-white text-sm font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                        <Phone className="w-4 h-4"/>
                        {t('bookNow')}
                    </motion.button>
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {isLightboxOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
                        onClick={closeLightbox}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.8}}
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white"/>
                        </motion.button>

                        {/* Image Counter */}
                        <div
                            className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                            {lightboxImageIndex + 1} / {room.images.length}
                        </div>

                        {/* Main Image */}
                        <motion.div
                            initial={{scale: 0.8, opacity: 0}}
                            animate={{scale: 1, opacity: 1}}
                            exit={{scale: 0.8, opacity: 0}}
                            className="relative w-full max-w-6xl h-[80vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={lightboxImageIndex}
                                    initial={{opacity: 0, x: 100}}
                                    animate={{opacity: 1, x: 0}}
                                    exit={{opacity: 0, x: -100}}
                                    transition={{duration: 0.3}}
                                    className="relative w-full h-full"
                                >
                                    <Image
                                        src={room.images[lightboxImageIndex]}
                                        alt={`${locale === 'fa' ? room.nameAr : room.name} - ${lightboxImageIndex + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

                        {/* Navigation Arrows */}
                        {room.images.length > 1 && (
                            <>
                                <button
                                    onClick={prevLightboxImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-colors"
                                >
                                    <ChevronLeft className="w-8 h-8 text-white"/>
                                </button>
                                <button
                                    onClick={nextLightboxImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-colors"
                                >
                                    <ChevronRight className="w-8 h-8 text-white"/>
                                </button>
                            </>
                        )}

                        {/* Thumbnail Strip */}
                        <div
                            className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-2xl">
                            {room.images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxImageIndex(i);
                                    }}
                                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                                        i === lightboxImageIndex
                                            ? 'ring-2 ring-white scale-110'
                                            : 'opacity-60 hover:opacity-100'
                                    }`}
                                >
                                    <Image
                                        src={img}
                                        alt={`Thumbnail ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}