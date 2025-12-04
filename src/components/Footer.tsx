'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import {MapPin, Mail, Phone, Instagram} from 'lucide-react';

export default function Footer() {
    const t = useTranslations();
    const locale = useLocale();

    const socialLinks = [
        { icon: Instagram, href: 'https://www.instagram.com/hostel.dubai.iranian?igsh=djgzcHE1d3BtYmNs', label: 'Instagram' },
    ];

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };

    return (
        <footer className="relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute top-10 left-10 w-32 h-32 glass rounded-full opacity-10"
                />
                <motion.div
                    animate={{
                        scale: [1.1, 1, 1.1],
                        rotate: [5, 0, 5],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: 'linear',
                    }}
                    className="absolute bottom-10 right-10 w-24 h-24 glass-dark rounded-full opacity-15"
                />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 glass-card mx-4 mb-8 rounded-3xl"
            >
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Brand Section */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 glass rounded-xl flex items-center justify-center">
                                    <span className="text-white font-bold text-xl">I</span>
                                </div>
                                <span className="text-white font-bold text-2xl">Iranian Hostel Dubai</span>
                            </div>

                            <p className="text-white/80 text-base mb-6 leading-relaxed max-w-md">
                                {t('footer.description')}
                            </p>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6 max-w-md">
                                <div className="glass-dark rounded-xl p-3 text-center">
                                    <div className="text-xl font-bold text-green-400">4.6★</div>
                                    <div className="text-xs text-white/70">Rating</div>
                                </div>
                                <div className="glass-dark rounded-xl p-3 text-center">
                                    <div className="text-xl font-bold text-blue-400">2025</div>
                                    <div className="text-xs text-white/70">Since</div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ scale: 1.2, y: -3 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="glass-dark rounded-xl p-3 text-white/70 hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div variants={itemVariants}>
                            <h3 className="text-white font-semibold text-lg mb-6">
                                {t('footer.contact')}
                            </h3>

                            <div className="space-y-4">

                                {/* Email */}
                                <motion.a
                                    href="mailto:info@dubaihostels.com"
                                    whileHover={{ x: locale === 'fa' ? -5 : 5 }}
                                    className="flex items-center space-x-3 space-x-reverse text-white/70 hover:text-white transition-colors group"
                                >
                                    <Mail className="w-5 h-5 flex-shrink-0" />
                                    <span className="text-sm">{t('contact.email.description')}</span>
                                </motion.a>

                                {/* WhatsApp */}
                                <motion.a
                                    href="https://wa.me/971521900874"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: locale === 'fa' ? -5 : 5 }}
                                    className="flex items-start space-x-3 space-x-reverse text-white/70 hover:text-white transition-colors group"
                                >
                                    <Phone className="w-5 h-5 mt-0.5 group-hover:text-white transition-colors flex-shrink-0" />
                                    <div>
                                        <p className="text-sm group-hover:text-white transition-colors">
                                            {t('contact.whatsapp.title')}
                                        </p>
                                        <p className="text-xs text-white/50">
                                            +971 50 123 4567
                                        </p>
                                    </div>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Bottom Section */}
                    <motion.div
                        variants={itemVariants}
                        className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
                    >
                        <p className="text-white/60 text-sm">
                            © 2025 Iranian Hostel Dubai. All rights reserved.
                        </p>
                    </motion.div>
                </div>
            </motion.div>
        </footer>
    );
}