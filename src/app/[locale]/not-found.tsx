'use client';

import {useTranslations} from 'next-intl';
import Link from 'next/link';
import {motion} from 'framer-motion';
import {useParams} from 'next/navigation';

export default function NotFound() {
  const t = useTranslations('common');
  const params = useParams();
  const locale = params?.locale || 'en';

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-center"
      >
        <motion.div
          initial={{scale: 0}}
          animate={{scale: 1}}
          transition={{delay: 0.2, type: 'spring', stiffness: 200}}
          className="mb-8"
        >
          <h1 className="text-9xl font-bold text-white/20">404</h1>
        </motion.div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {locale === 'fa' ? 'صفحه یافت نشد' : 'Page Not Found'}
        </h2>
        
        <p className="text-white/70 text-lg mb-8 max-w-md mx-auto">
          {locale === 'fa' 
            ? 'متأسفانه صفحه‌ای که به دنبال آن هستید وجود ندارد.'
            : 'Sorry, the page you are looking for does not exist.'}
        </p>
        
        <Link href={`/${locale}`}>
          <motion.button
            whileHover={{scale: 1.05, y: -2}}
            whileTap={{scale: 0.95}}
            className="glass-card rounded-2xl px-8 py-4 text-white font-semibold hover:bg-white/20 transition-all"
          >
            {locale === 'fa' ? 'بازگشت به صفحه اصلی' : 'Back to Home'}
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
