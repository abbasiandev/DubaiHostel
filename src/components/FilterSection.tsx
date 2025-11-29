'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Search, SlidersHorizontal, MapPin, DollarSign, Star } from 'lucide-react';

export default function FilterSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [minRating, setMinRating] = useState(0);

  const locations = [
    'Dubai Marina', 'Downtown Dubai', 'Jumeirah Beach', 
    'Business Bay', 'Bur Dubai', 'Silicon Oasis'
  ];

  return (
    <section className="py-8 px-4 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card rounded-3xl p-6"
      >
        <div className="flex flex-wrap gap-6">
          {/* Search */}
          <div className="flex-1 min-w-[250px]">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search hostels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Location Filter */}
          <div className="min-w-[200px]">
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-white bg-transparent border border-white/20 focus:border-white/40 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location} className="bg-gray-800">
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Price Range */}
          <div className="min-w-[200px]">
            <div className="relative">
              <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <select
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-white bg-transparent border border-white/20 focus:border-white/40 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="" className="bg-gray-800">Any Price</option>
                <option value="0-50" className="bg-gray-800">$0 - $50</option>
                <option value="50-100" className="bg-gray-800">$50 - $100</option>
                <option value="100-150" className="bg-gray-800">$100 - $150</option>
                <option value="150+" className="bg-gray-800">$150+</option>
              </select>
            </div>
          </div>

          {/* Rating Filter */}
          <div className="min-w-[180px]">
            <div className="relative">
              <Star className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <select
                className="w-full glass rounded-xl pl-10 pr-4 py-3 text-white bg-transparent border border-white/20 focus:border-white/40 focus:outline-none transition-colors appearance-none cursor-pointer"
              >
                <option value="0" className="bg-gray-800">Any Rating</option>
                <option value="4" className="bg-gray-800">4+ Stars</option>
                <option value="4.5" className="bg-gray-800">4.5+ Stars</option>
                <option value="4.8" className="bg-gray-800">4.8+ Stars</option>
              </select>
            </div>
          </div>

          {/* Advanced Filters Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-dark rounded-xl px-6 py-3 text-white/80 hover:text-white transition-colors flex items-center gap-2"
          >
            <SlidersHorizontal className="w-5 h-5" />
            <span className="hidden sm:inline">Filters</span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}