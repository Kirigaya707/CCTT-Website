'use client';

import React, { useEffect, useState } from 'react';
import TourCard from '@/components/TourCard';
import { supabase } from '@/lib/supabase';

const fallbackTours = [
  {
    slug: 'durga-puja-parikrama',
    title: '17 Bonedi Bari Durga Puja Parikrama',
    subtitle: 'Kolkata Heritage & Rajbari Culture Experience',
    duration: '1 Day (8:00 AM Departure)',
    pickup: 'Esplanade, Kolkata',
    price: '₹600 - ₹800',
    badge: 'Heritage Special',
    highlights: [
      '17 Traditional Bonedi Bari Durga Puja Visits',
      'AC Luxury Mini Bus Travel',
      'Grand Rajbari Lunch at Shobhabazar Rajbari',
    ],
  },
  {
    slug: 'himalayan-high-pass',
    title: 'Ancient Silk Route Expedition',
    subtitle: 'Zuluk, Nathang Valley & High Altitude Passes',
    duration: '5 Days / 4 Nights',
    pickup: 'NJP Railway Station / Siliguri',
    price: '₹4,500',
    badge: 'Mountain Travel',
    highlights: [
      'Zig-Zag roads of Zuluk & Thambi View Point',
      'Kupup Elephant Lake & Old Baba Mandir',
      'Traditional Homestay Experiences',
    ],
  },
  {
    slug: 'mindful-eco-retreat',
    title: 'Mindful Heritage & Eco Retreat',
    subtitle: 'Cultural Nature Trails & Peaceful Escapes',
    duration: '3 Days / 2 Nights',
    pickup: 'Kolkata Central Pickup',
    price: '₹2,200',
    badge: 'Eco Retreat',
    highlights: [
      'Guided Nature Walk & Organic Dining',
      'Heritage Village Sightseeing',
      'Comfortable Eco-Lodge Stay',
    ],
  },
];

export default function ToursPage() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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

      {loading ? (
        <div className="text-center py-12 text-stone-500 text-sm">Loading tours...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
      )}
    </div>
  );
}