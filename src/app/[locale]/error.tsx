'use client';

import {useEffect} from 'react';
import {useTranslations} from 'next-intl';
import {motion} from 'framer-motion';

export default function Error({
  error,
  reset,
}: {
  error: Error & {digest?: string};
  reset: () => void;
}) {
  const t = useTranslations('common');

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        className="text-center glass-card rounded-3xl p-8 max-w-md"
      >
        <h2 className="text-2xl font-bold text-white mb-4">
          {t('error')}
        </h2>
        <p className="text-white/70 mb-6">
          An unexpected error occurred. Please try again.
        </p>
        <motion.button
          whileHover={{scale: 1.05}}
          whileTap={{scale: 0.95}}
          onClick={reset}
          className="glass-accent rounded-xl px-6 py-3 text-white font-semibold"
        >
          {t('tryAgain')}
        </motion.button>
      </motion.div>
    </div>
  );
}
