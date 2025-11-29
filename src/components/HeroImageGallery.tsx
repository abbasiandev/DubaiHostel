'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const heroImages = [
  "https://drive.google.com/uc?export=view&id=1QS5UTT97-YhSVEnbGTXHcSTzEmRC8BoK",
  "https://drive.google.com/uc?export=view&id=11D5uUh4unq7W4zuJR7PWCYbTPwZHtZDv",
  "https://drive.google.com/uc?export=view&id=1bZ6zpCD7BQ-wUqETiHKjsLvPd3Na_PWU",
  "https://drive.google.com/uc?export=view&id=1rilfpKK2jtEFg4pwIO49AdDzVe_84U2G",
  "https://drive.google.com/uc?export=view&id=1Oe48fLESxe3LxMWSoPyb1J7wAvn9qOjs",
];

export default function HeroImageGallery() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Images */}
      {heroImages.map((image, index) => (
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: currentImage === index ? 0.15 : 0,
            scale: currentImage === index ? 1 : 1.1
          }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <Image
            src={image}
            alt={`Iranian Hostel ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
      
      {/* Bottom navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImage === index
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}