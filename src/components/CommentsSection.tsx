'use client';

import { motion } from 'framer-motion';
import { useTranslations, useLocale } from 'next-intl';
import { Star, Heart, MessageCircle, ThumbsUp } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

interface Comment {
  id: string;
  author: string;
  authorAr?: string;
  avatar: string;
  rating: number;
  comment: string;
  commentAr?: string;
  date: string;
  likes: number;
  hostelName: string;
  hostelNameAr?: string;
}

const sampleComments: Comment[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    authorAr: 'سارا جانسون',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612d4c3?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    comment: 'Absolutely amazing experience! The glassmorphism design of the place is stunning and the location is perfect.',
    commentAr: 'تجربه‌ای کاملاً شگفت‌انگیز! طراحی گلاسمورفیسم مکان خیره‌کننده و موقعیت آن عالی است.',
    date: '2 days ago',
    likes: 24,
    hostelName: 'Dubai Marina Luxury Hostel',
    hostelNameAr: 'هاستل لوکس دبی مارینا'
  },
  {
    id: '2',
    author: 'Ahmed Al-Rashid',
    authorAr: 'احمد الراشد',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    comment: 'The staff was incredibly helpful and the modern amenities exceeded my expectations. Highly recommended!',
    commentAr: 'کارکنان فوق‌العاده مفید بودند و امکانات مدرن از انتظاراتم فراتر رفت. بشدت توصیه می‌شود!',
    date: '5 days ago',
    likes: 18,
    hostelName: 'Downtown Dubai Premium Stay',
    hostelNameAr: 'اقامت پریمیوم مرکز دبی'
  },
  {
    id: '3',
    author: 'Maria Rodriguez',
    authorAr: 'ماریا رودریگز',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 4,
    comment: 'Great location near the beach. The sunset views from the rooftop were incredible!',
    commentAr: 'موقعیت عالی نزدیک ساحل. مناظر غروب از پشت‌بام باورنکردنی بود!',
    date: '1 week ago',
    likes: 31,
    hostelName: 'Jumeirah Beach Retreat',
    hostelNameAr: 'پناهگاه ساحل جمیرا'
  },
  {
    id: '4',
    author: 'David Chen',
    authorAr: 'دیوید چن',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    comment: 'Perfect for business travelers. The co-working space and high-speed internet made my work trip seamless.',
    commentAr: 'عالی برای مسافران تجاری. فضای کار مشترک و اینترنت پرسرعت سفر کاری من را روان ساخت.',
    date: '1 week ago',
    likes: 15,
    hostelName: 'Business Bay Modern Hub',
    hostelNameAr: 'هاب مدرن خلیج تجاری'
  }
];

export default function CommentsSection() {
  const t = useTranslations('comments');
  const locale = useLocale();
  const [likedComments, setLikedComments] = useState<Set<string>>(new Set());

  const handleLike = (commentId: string) => {
    setLikedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
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

  const commentVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {t('title')}
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto">
          Real experiences from our guests around the world
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-6"
      >
        {sampleComments.map((comment, index) => (
          <motion.div
            key={comment.id}
            variants={commentVariants}
            whileHover={{ scale: 1.02, y: -5 }}
            className="glass-card rounded-3xl p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row gap-6">
              {/* Avatar and User Info */}
              <div className="flex items-start gap-4 md:w-1/3">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="relative"
                >
                  <Image
                    src={comment.avatar}
                    alt={locale === 'fa' ? comment.authorAr || comment.author : comment.author}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-white/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                </motion.div>
                
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-lg">
                    {locale === 'fa' ? comment.authorAr || comment.author : comment.author}
                  </h4>
                  <p className="text-white/60 text-sm mb-2">{comment.date}</p>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < comment.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Comment Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <p className="text-white/90 text-base leading-relaxed mb-2">
                    "{locale === 'fa' ? comment.commentAr || comment.comment : comment.comment}"
                  </p>
                  <p className="text-white/60 text-sm">
                    Stayed at: {locale === 'fa' ? comment.hostelNameAr || comment.hostelName : comment.hostelName}
                  </p>
                </div>

                {/* Interaction Buttons */}
                <div className="flex items-center gap-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => handleLike(comment.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                      likedComments.has(comment.id)
                        ? 'bg-red-500/20 text-red-400'
                        : 'glass-dark text-white/70 hover:text-white'
                    }`}
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        likedComments.has(comment.id) ? 'fill-current' : ''
                      }`}
                    />
                    <span className="text-sm">
                      {comment.likes + (likedComments.has(comment.id) ? 1 : 0)}
                    </span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-white/70 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">Reply</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full text-white/70 hover:text-white transition-colors"
                  >
                    <ThumbsUp className="w-4 h-4" />
                    <span className="text-sm">Helpful</span>
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Write Review Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="glass-card rounded-2xl px-8 py-4 text-white font-semibold inline-flex items-center gap-3 hover:bg-white/20 transition-all"
        >
          <MessageCircle className="w-5 h-5" />
          {t('writeReview')}
        </motion.button>
      </motion.div>
    </section>
  );
}