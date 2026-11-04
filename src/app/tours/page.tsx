'use client';

import React, { useEffect, useState } from 'react';
import TourCard from '@/components/TourCard';
import { supabase } from '@/lib/supabase';

const fallbackTours: any[] = [];

export default function ToursPage() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    async function fetchTours() {
      try {
        const { data, error } = await supabase
          .from('tours')
          .select('*')
          .eq('is_active', true);

        if (error || !data || data.length === 0) {
          setTours(fallbackTours);
        } else {
          const formattedData = data.map((item: any) => ({
            slug: item.slug,
            title: item.title,
            subtitle: item.subtitle,
            duration: item.duration,
            pickup: item.pickup,
            price: `₹${item.price_veg}`,
            badge: item.badge,
            category: item.category || 'all',
            highlights: item.highlights || [],
          }));
          setTours(formattedData);
        }
      } catch (err) {
        setTours(fallbackTours);
      } finally {
        setLoading(false);
      }
    }

    fetchTours();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-terracotta uppercase">
          Handcrafted Journeys
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-moss-dark">
          Curated Travel Packages
        </h1>
        <p className="text-stone-600 text-base sm:text-lg">
          Discover handpicked cultural heritage tours and scenic travel routes across Eastern India.
        </p>
      </div>

      {/* Experience Vibe Filter */}
      <div className="max-w-xs mx-auto mb-10 text-left">
        <label className="block text-[10px] font-extrabold uppercase tracking-widest text-stone-500 mb-1.5">
          EXPERIENCE VIBE
        </label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full bg-sand/30 border border-sand rounded-2xl px-4 py-2.5 text-xs font-serif font-bold text-stone-800 focus:outline-none focus:border-terracotta cursor-pointer"
        >
          <option value="all">All Curated Escapes</option>
          <option value="mountain">Mountain based trips</option>
          <option value="beach">Beach based trips</option>
          <option value="forest">Forest based trips</option>
          <option value="cultural">Cultural and heritage events</option>
        </select>
      </div>

      {loading ? (
        <div className="text-center py-12 text-stone-500 text-sm">Loading tours...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours
            .filter((tour) => selectedCategory === 'all' || tour.category === selectedCategory)
            .map((tour) => (
              <TourCard key={tour.slug} {...tour} />
            ))}
        </div>
      )}
    </div>
  );
}