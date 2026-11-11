'use client';

import React, { useEffect, useState } from 'react';
import TourCard from '@/components/TourCard';
import { supabase } from '@/lib/supabase';

const fallbackTours: any[] = [];

import { isAdmin } from '@/lib/admin';

export default function ToursPage() {
  const [tours, setTours] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    async function checkUser() {
      const { data } = await supabase.auth.getUser();
      setUserEmail(data.user?.email || null);
    }
    checkUser();
  }, []);

  const userIsAdmin = isAdmin(userEmail);

  const handleDeleteTour = async (id: string) => {
    if (!confirm('Are you sure you want to delete this tour?')) return;
    const { error } = await supabase.from('tours').delete().eq('id', id);
    if (!error) {
      setTours((prev) => prev.filter((t) => t.id !== id));
    }
  };

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

      {/* Admin Add Tour Button */}
      {userIsAdmin && (
        <div className="mb-6 text-center">
          <button
            onClick={async () => {
              const title = prompt('Enter Tour Title:');
              if (!title) return;
              const price = prompt('Enter Veg Price (₹):', '5000');
              const category = prompt('Enter Category (mountain/beach/forest/cultural):', 'mountain');
              const { data, error } = await supabase.from('tours').insert([
                {
                  title,
                  slug: title.toLowerCase().replace(/[^a-z0-0]+/g, '-'),
                  price_veg: price || '0',
                  category: category || 'mountain',
                  is_active: true,
                },
              ]).select();
              if (!error && data) {
                setTours((prev) => [...prev, data[0]]);
              }
            }}
            className="px-4 py-2 bg-terracotta text-white text-xs font-bold rounded-xl shadow hover:bg-terracotta-dark transition"
          >
            + Add New Tour (Admin Only)
          </button>
        </div>
      )}

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
              <div key={tour.slug || tour.id} className="relative group">
                <TourCard {...tour} />
                {userIsAdmin && (
                  <button
                    onClick={() => handleDeleteTour(tour.id)}
                    className="absolute top-3 right-3 bg-rose-600 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow hover:bg-rose-700 transition"
                  >
                    Delete (Admin)
                  </button>
                )}
              </div>
            ))}
        </div>
      )}
    </div>
  );
}