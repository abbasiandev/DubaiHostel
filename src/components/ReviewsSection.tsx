'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star, Heart, MessageCircle, ThumbsUp, Verified, Camera } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';
import { iranianHostel } from '@/data/hostels';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

interface Review {
  id: string;
  guestName: string;
  guestNameAr?: string;
  nationality: string;
  nationalityAr?: string;
  avatar: string;
  rating: number;
  comment: string;
  commentAr?: string;
  date: string;
  dateAr?: string;
  roomType: string;
  roomTypeAr?: string;
  verified: boolean;
  likes: number;
  photos?: string[];
}

const sampleReviews: Review[] = [
  {
    id: '1',
    guestName: 'Ahmad Hosseini',
    guestNameAr: 'احمد حسینی',
    nationality: 'Iran',
    nationalityAr: 'ایران',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    comment: 'Excellent hospitality! The staff made me feel at home. The location in Naif is perfect for exploring Dubai\'s traditional markets.',
    commentAr: 'مهمان‌نوازی عالی! کارکنان احساس راحتی به من دادند. موقعیت در نایف برای کاوش بازارهای سنتی دبی عالی است.',
    date: '3 days ago',
    dateAr: '۳ روز پیش',
    roomType: 'Private Single Room',
    roomTypeAr: 'اتاق خصوصی یک نفره',
    verified: true,
    likes: 28,
    photos: ['https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop']
  },
  {
    id: '2',
    guestName: 'Sarah Johnson',
    guestNameAr: 'سارا جانسون',
    nationality: 'UK',
    nationalityAr: 'انگلستان',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612d4c3?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    comment: 'Amazing value for money! Clean, safe, and the Persian breakfast was incredible. Perfect location to explore old Dubai.',
    commentAr: 'ارزش فوق‌العاده در برابر پول! تمیز، امن و صبحانه ایرانی فوق‌العاده بود. موقعیت عالی برای کاوش دبی قدیم.',
    date: '1 week ago',
    dateAr: '۱ هفته پیش',
    roomType: '4-Bed Female Dormitory',
    roomTypeAr: 'خوابگاه ۴ تخته بانوان',
    verified: true,
    likes: 45,
  },
  {
    id: '3',
    guestName: 'Ravi Patel',
    guestNameAr: 'راوی پاتل',
    nationality: 'India',
    nationalityAr: 'هند',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 4,
    comment: 'Great hostel with authentic atmosphere. The family running it are very welcoming. Walking distance to metro and souqs.',
    commentAr: 'هاستل عالی با فضای اصیل. خانواده‌ای که آن را اداره می‌کنند بسیار مهربان هستند. مسافت پیاده‌روی تا مترو و بازارها.',
    date: '2 weeks ago',
    dateAr: '۲ هفته پیش',
    roomType: '6-Bed Mixed Dormitory',
    roomTypeAr: 'خوابگاه مختلط ۶ تخته',
    verified: true,
    likes: 32,
  }
];

export default function ReviewsSection() {
  const t = useTranslations('reviews');
  const locale = useLocale();
  const [likedReviews, setLikedReviews] = useState<Set<string>>(new Set());
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleLike = (reviewId: string) => {
    setLikedReviews(prev => {
      const newSet = new Set(prev);
      if (newSet.has(reviewId)) {
        newSet.delete(reviewId);
      } else {
        newSet.add(reviewId);
      }
      return newSet;
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const reviewVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      {/* Header with Rating */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t('title')}
        </h2>
        
        {/* Overall Rating Card */}
        <div className="glass-card rounded-3xl p-8 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="text-4xl font-bold text-white mr-4">
              {iranianHostel.rating}
            </div>
            <div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(iranianHostel.rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-white/20'
                    }`}
                  />
                ))}
              </div>
              <div className="text-white/70 text-sm">
                {iranianHostel.totalReviews} {t('reviewsCount')}
              </div>
            </div>
          </div>
          
          <div className="text-white/80">
            <span className="text-2xl font-semibold text-green-400">94%</span>{' '}
            {t('recommended')}
          </div>
        </div>

        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          {t('subtitle')}
        </p>
      </motion.div>

      {/* Reviews Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="space-y-6 mb-12"
      >
        {sampleReviews.map((review, index) => (
          <motion.div
            key={review.id}
            variants={reviewVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* User Info */}
              <div className="flex items-start gap-4 md:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <Image
                    src={review.avatar}
                    alt={locale === 'fa' ? review.guestNameAr || review.guestName : review.guestName}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white/20"
                  />
                  {review.verified && (
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                      <Verified className="w-3 h-3 text-white" />
                    </div>
                  )}
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-white font-semibold">
                      {locale === 'fa' ? review.guestNameAr || review.guestName : review.guestName}
                    </h4>
                    {review.verified && (
                      <Verified className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                  <p className="text-white/60 text-sm mb-2">
                    {locale === 'fa' ? review.nationalityAr || review.nationality : review.nationality}
                  </p>
                  <p className="text-white/60 text-sm mb-2">
                    {locale === 'fa' ? review.dateAr || review.date : review.date}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-white/70 text-xs">
                    {locale === 'fa' ? review.roomTypeAr || review.roomType : review.roomType}
                  </p>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1">
                <p className="text-white/90 text-base leading-relaxed mb-4">
                  "{locale === 'fa' ? review.commentAr || review.comment : review.comment}"
                </p>

                {/* Review Photos */}
                {review.photos && (
                  <div className="flex gap-2 mb-4">
                    {review.photos.map((photo, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="relative w-16 h-16 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={photo}
                          alt={`Review photo ${i + 1}`}
                          fill
                          className="object-cover"
                        />
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Interaction Buttons */}
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(review.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      likedReviews.has(review.id)
                        ? 'bg-red-500/20 text-red-400'
                        : 'glass-dark text-white/70 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedReviews.has(review.id) ? 'fill-current' : ''
                      }`}
                    />
                    <span className="text-sm">
                      {review.likes + (likedReviews.has(review.id) ? 1 : 0)}
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-white/70 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">
                      {t('reply')}
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-white/70 hover:text-white transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">
                      {t('helpful')}
                    </span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link href={`/${locale}/reviews`}>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all"
          >
            {t('viewAll')}
          </motion.button>
        </Link>
        
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="glass-accent rounded-2xl px-8 py-4 text-green-400 font-semibold hover:text-green-300 transition-all flex items-center gap-3"
        >
          <MessageCircle className="w-5 h-5" />
          {t('writeReview')}
        </motion.button>
      </motion.div>
    </section>
  );
}