'use client';

import {motion} from 'framer-motion';
import {useTranslations, useLocale} from 'next-intl';
import {MapPin, Clock, Train, ShoppingBag, Camera} from 'lucide-react';
import {useInView} from 'react-intersection-observer';
import {iranianHostel} from '@/data/hostels';

export default function LocationPreview() {
    const t = useTranslations('location');
    const locale = useLocale();
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    const nearbyAttractions = [
        {
            icon: ShoppingBag,
            name: 'Malabar Supermarket',
            nameAr: 'سوپرمارکت ملبار',
            distance: '0 min (opposite)',
            distanceAr: '۰ دقیقه (روبرو)',
            description: 'Major supermarket opposite hostel',
            descriptionAr: 'سوپرمارکت بزرگ روبروی هاستل'
        },
        {
            icon: Train,
            name: 'Baniyas Metro',
            nameAr: 'مترو بنی یاس',
            distance: '3 min walk',
            distanceAr: '۳ دقیقه پیاده‌روی',
            description: 'Green Line metro station',
            descriptionAr: 'ایستگاه مترو خط سبز'
        },
        {
            icon: ShoppingBag,
            name: 'Naif Souq',
            nameAr: 'بازار نایف',
            distance: '3 min walk',
            distanceAr: '۳ دقیقه پیاده‌روی',
            description: 'Traditional clothing market',
            descriptionAr: 'بازار سنتی لباس'
        },
        {
            icon: ShoppingBag,
            name: 'Electronics & Mobile Market',
            nameAr: 'بازار لپتاپ و موبایل',
            distance: '3 min walk',
            distanceAr: '۳ دقیقه پیاده‌روی',
            description: 'Mobile phones and electronics shops',
            descriptionAr: 'فروشگاه‌های موبایل و لوازم الکترونیکی'
        },
        {
            icon: ShoppingBag,
            name: 'Gold Souq',
            nameAr: 'بازار طلا',
            distance: '8 min walk',
            distanceAr: '۸ دقیقه پیاده‌روی',
            description: 'World famous gold market',
            descriptionAr: 'بازار طلای مشهور جهان'
        },
        {
            icon: Camera,
            name: 'Dubai Creek',
            nameAr: 'خور دبی',
            distance: '12 min walk',
            distanceAr: '۱۲ دقیقه پیاده‌روی',
            description: 'Historic waterway with abra boats',
            descriptionAr: 'آبراه تاریخی با قایق‌های ابرا'
        }
    ];

    const containerVariants = {
        hidden: {opacity: 0},
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: {opacity: 0, x: -30},
        visible: {
            opacity: 1,
            x: 0,
            transition: {duration: 0.5, ease: 'easeOut'},
        },
    };

    return (
        <section ref={ref} className="py-20 px-4 max-w-7xl mx-auto">
            <motion.div
                initial={{opacity: 0, y: 30}}
                animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 30}}
                transition={{duration: 0.6}}
                className="text-center mb-16"
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {t('title')}
                </h2>
                <p className="text-white/70 text-lg max-w-2xl mx-auto">
                    {t('subtitle')}
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Location Info */}
                <motion.div
                    initial={{opacity: 0, x: -50}}
                    animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -50}}
                    transition={{duration: 0.6}}
                    className="glass-card rounded-3xl p-8"
                >
                    <div className="flex items-center mb-6 gap-2">
                        <div className="glass-dark rounded-full w-12 h-12 flex items-center justify-center">
                            <MapPin className="w-6 h-6 text-red-400"/>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white">
                                {locale === 'fa' ? iranianHostel.location.districtAr : iranianHostel.location.district}
                            </h3>
                            <p className="text-white/70">
                                {locale === 'fa' ? iranianHostel.location.addressAr : iranianHostel.location.address}
                            </p>
                        </div>
                    </div>

                    <div className="space-y-4 mb-8">
                        <div className="flex items-center text-white/80 gap-2">
                            <Clock className="w-5 h-5 text-green-400"/>
                            <span>
                                {locale === 'fa'
                                    ? 'دسترسی آسان به مترو و جاذبه‌های اصلی'
                                    : 'Easy access to metro and main attractions'}
                            </span>
                        </div>

                        <div className="flex items-center text-white/80 gap-2">
                            <Train className="w-5 h-5 text-blue-400"/>
                            <span>
                                {locale === 'fa'
                                    ? '۳ دقیقه تا ایستگاه مترو بنی یاس'
                                    : '3 minutes to Baniyas Metro Station'}
                            </span>
                        </div>
                    </div>

                    <p className="text-white/80 leading-relaxed mb-6">
                        {locale === 'fa'
                            ? 'منطقه نایف یکی از محله‌های تاریخی و پر جنب و جوش دبی است که در قلب دیره قرار دارد. این منطقه به خاطر بازارهای سنتی، فرهنگ غنی و دسترسی آسان به نقاط مختلف شهر شناخته می‌شود.'
                            : 'Naif district is one of Dubai\'s most historic and vibrant neighborhoods, located in the heart of Deira. Known for its traditional souqs, rich culture, and easy access to various parts of the city.'
                        }
                    </p>

                    {/* Google Map */}
                    <div className="w-full h-64 rounded-2xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.9825788260771!2d55.30942626955656!3d25.27292949860391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434bf37caf47%3A0x65492d81735aaedf!2s22%2012B%20St%20-%20Naif%20-%20Deira%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1764847420269!5m2!1sen!2s"
                            width="100%"
                            height="100%"
                            style={{border: 0}}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Nearby Attractions */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="space-y-4"
                >
                    <h3 className="text-2xl font-bold text-white mb-6">
                        {t('nearby')}
                    </h3>

                    {nearbyAttractions.map((attraction, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{x: 5, scale: 1.02}}
                            className="glass-card rounded-2xl p-4 flex items-center space-x-4 rtl:space-x-reverse"
                        >
                            <div
                                className="glass-dark rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0">
                                <attraction.icon className="w-5 h-5 text-purple-400"/>
                            </div>

                            <div className="flex-1">
                                <div className="flex items-center justify-between mb-1">
                                    <h4 className="font-semibold text-white">
                                        {locale === 'fa' ? attraction.nameAr : attraction.name}
                                    </h4>
                                    <span className="text-sm text-green-400 font-medium">
                    {locale === 'fa' ? attraction.distanceAr : attraction.distance}
                  </span>
                                </div>
                                <p className="text-white/70 text-sm">
                                    {locale === 'fa' ? attraction.descriptionAr : attraction.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}