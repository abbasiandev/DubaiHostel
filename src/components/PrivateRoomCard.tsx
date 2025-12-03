'use client';

import {motion, AnimatePresence} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {MapPin, Train, ShoppingBag, Phone, Calendar, ChevronLeft, ChevronRight, X} from 'lucide-react';
import Image from 'next/image';
import {useState, useEffect} from 'react';
import {privateRoomData} from '@/data/privateRoom';

export default function PrivateRoomCard() {
    const t = useTranslations('privateRoom');
    const locale = useLocale();
    const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

    const currentRoom = privateRoomData.rooms[selectedRoomIndex];
    const images = currentRoom.images;

    // Reset image index when room type changes
    useEffect(() => {
        setCurrentImageIndex(0);
    }, [selectedRoomIndex]);

    useEffect(() => {
        if (!isHovered && !isLightboxOpen) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prev) =>
                    prev === images.length - 1 ? 0 : prev + 1
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [isHovered, isLightboxOpen, images.length]);

    const handleWhatsAppContact = () => {
        const roomName = locale === 'fa' ? currentRoom.nameAr : currentRoom.name;
        const message = `Hi! I'm interested in ${roomName}. Please send details about availability.`;
        const whatsappUrl = `https://wa.me/971521900874?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
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
            prev === images.length - 1 ? 0 : prev + 1
        );
    };

    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxImageIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    return (
        <>
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6}}
                className="glass-card rounded-3xl overflow-hidden mb-8"
            >
                {/* Room Type Selector Tabs */}
                <div className="bg-gradient-to-r from-green-600 to-blue-600 p-4">
                    <div className="flex gap-2 max-w-2xl mx-auto">
                        {privateRoomData.rooms.map((room, index) => (
                            <motion.button
                                key={room.id}
                                onClick={() => setSelectedRoomIndex(index)}
                                whileHover={{scale: 1.02}}
                                whileTap={{scale: 0.98}}
                                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all ${
                                    selectedRoomIndex === index
                                        ? 'bg-white text-blue-600 shadow-lg'
                                        : 'bg-white/20 text-white hover:bg-white/30'
                                }`}
                            >
                                <div className="text-sm md:text-base">
                                    {locale === 'fa' ? room.nameAr : room.name}
                                </div>
                            </motion.button>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row">
                    {/* Image Slider Section */}
                    <div
                        className="lg:w-1/2 relative h-100 cursor-pointer"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        onClick={() => openLightbox(currentImageIndex)}
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={`${selectedRoomIndex}-${currentImageIndex}`}
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.5}}
                                className="relative w-full h-full"
                            >
                                <Image
                                    src={images[currentImageIndex]}
                                    alt={`${locale === 'fa' ? currentRoom.nameAr : currentRoom.name} - ${currentImageIndex + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        {isHovered && images.length > 1 && (
                            <>
                                <motion.button
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    onClick={prevImage}
                                    className="absolute left-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                                >
                                    <ChevronLeft className="w-5 h-5 text-white"/>
                                </motion.button>
                                <motion.button
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    onClick={nextImage}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 glass-dark rounded-full p-2 hover:bg-white/30 transition-colors z-10"
                                >
                                    <ChevronRight className="w-5 h-5 text-white"/>
                                </motion.button>
                            </>
                        )}

                        {/* Image Indicators */}
                        {images.length > 1 && (
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                                {images.map((_, i) => (
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
                                <div className="text-2xl font-bold">{currentRoom.pricing.daily} {currentRoom.pricing.currency}</div>
                                <div className="text-sm">per night</div>
                            </div>
                        </div>

                        {/* Monthly Price */}
                        <div className="absolute top-4 left-4 glass rounded-2xl px-4 py-2">
                            <div className="text-center text-white">
                                <div className="text-lg font-bold">{currentRoom.pricing.monthly} {currentRoom.pricing.currency}</div>
                                <div className="text-xs">per month</div>
                            </div>
                        </div>

                        {/* Established Badge */}
                        <div className="absolute bottom-16 left-4 glass-accent rounded-xl px-3 py-1">
                            <div className="text-green-400 text-sm font-semibold">
                                Since {privateRoomData.established}
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedRoomIndex}
                                initial={{opacity: 0, x: 20}}
                                animate={{opacity: 1, x: 0}}
                                exit={{opacity: 0, x: -20}}
                                transition={{duration: 0.3}}
                            >
                                <div className="mb-6">
                                    <h2 className="text-3xl font-bold text-white mb-3">
                                        {locale === 'fa' ? currentRoom.nameAr : currentRoom.name}
                                    </h2>

                                    <div className="flex items-center text-white/80 mb-4">
                                        <MapPin className="w-5 h-5 mr-2"/>
                                        <span>
                                            {locale === 'fa' ? privateRoomData.location.addressAr : privateRoomData.location.address}
                                        </span>
                                    </div>

                                    <p className="text-white/90 leading-relaxed mb-6">
                                        {locale === 'fa' ? currentRoom.descriptionAr : currentRoom.description}
                                    </p>
                                </div>

                                {/* Key Features */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                                    <div className="glass-dark rounded-xl p-4 flex items-center">
                                        <ShoppingBag className="w-6 h-6 text-blue-400 mr-3"/>
                                        <div>
                                            <div className="text-white font-medium">Supermarket</div>
                                            <div className="text-white/60 text-sm">Opposite</div>
                                        </div>
                                    </div>

                                    <div className="glass-dark rounded-xl p-4 flex items-center">
                                        <Train className="w-6 h-6 text-green-400 mr-3"/>
                                        <div>
                                            <div className="text-white font-medium">Metro</div>
                                            <div className="text-white/60 text-sm">2-min walk</div>
                                        </div>
                                    </div>

                                    <div className="glass-dark rounded-xl p-4 flex items-center">
                                        <Calendar className="w-6 h-6 text-purple-400 mr-3"/>
                                        <div>
                                            <div className="text-white font-medium">Monthly Rate</div>
                                            <div className="text-white/60 text-sm">{currentRoom.pricing.monthly} AED</div>
                                        </div>
                                    </div>

                                    <div className="glass-dark rounded-xl p-4 flex items-center">
                                        <Phone className="w-6 h-6 text-orange-400 mr-3"/>
                                        <div>
                                            <div className="text-white font-medium">Food Service</div>
                                            <div className="text-white/60 text-sm">Available</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Button */}
                                <motion.button
                                    whileHover={{scale: 1.05}}
                                    whileTap={{scale: 0.95}}
                                    onClick={handleWhatsAppContact}
                                    className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-colors flex items-center justify-center gap-3"
                                >
                                    <Phone className="w-5 h-5"/>
                                    Contact on WhatsApp
                                </motion.button>

                                {/* Special Note */}
                                <div className="mt-4 p-3 glass-accent rounded-xl">
                                    <p className="text-green-300 text-sm text-center">
                                        Food service available via WhatsApp
                                    </p>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
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
                        <motion.button
                            initial={{opacity: 0, scale: 0.8}}
                            animate={{opacity: 1, scale: 1}}
                            exit={{opacity: 0, scale: 0.8}}
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-white/20 transition-colors z-10"
                        >
                            <X className="w-6 h-6 text-white"/>
                        </motion.button>

                        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                            {lightboxImageIndex + 1} / {images.length}
                        </div>

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
                                        src={images[lightboxImageIndex]}
                                        alt={`${locale === 'fa' ? currentRoom.nameAr : currentRoom.name} - ${lightboxImageIndex + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </motion.div>

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

                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 backdrop-blur-sm rounded-2xl max-w-full overflow-x-auto">
                            {images.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setLightboxImageIndex(i);
                                    }}
                                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all flex-shrink-0 ${
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