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
            id: item.id,
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
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">
          HANDCRAFTED JOURNEYS
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
          Curated Travel Packages
        </h1>
        <p className="text-base text-zinc-500 sm:text-lg">
          Discover handpicked cultural heritage tours and scenic travel routes across Eastern India.
        </p>
      </div>

      {/* Admin Add Tour Button */}
      {userIsAdmin && (
        <div className="mb-8 text-center">
          <button
            onClick={async () => {
              const title = prompt('Enter Tour Title:');
              if (!title) return;
              const price = prompt('Enter Veg Price (₹):', '5000');
              const category = prompt('Enter Category (mountain/beach/forest/cultural):', 'mountain');
              const { data, error } = await supabase.from('tours').insert([
                {
                  title,
                  slug: title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
                  price_veg: price || '0',
                  category: category || 'mountain',
                  is_active: true,
                },
              ]).select();
              if (!error && data) {
                setTours((prev) => [...prev, data[0]]);
              }
            }}
            className="rounded-full bg-zinc-950 px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-zinc-800"
          >
            + Add New Tour (Admin Only)
          </button>
        </div>
      )}

      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {[
          { id: 'all', label: 'All Curated Escapes' },
          { id: 'mountain', label: 'Mountain based trips' },
          { id: 'beach', label: 'Beach based trips' },
          { id: 'forest', label: 'Forest based trips' },
          { id: 'cultural', label: 'Cultural and heritage events' },
        ].map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => setSelectedCategory(category.id)}
            className={`rounded-full px-5 py-2.5 text-xs font-semibold transition ${
              selectedCategory === category.id
                ? 'bg-zinc-950 text-white'
                : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="py-12 text-center text-sm text-zinc-400">Loading tours...</div>
      ) : tours.filter((tour) => selectedCategory === 'all' || tour.category === selectedCategory).length === 0 ? (
        <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-14 text-center text-sm text-zinc-500">
          No active packages listed under this category yet. Check back soon or build a custom trip.
        </div>
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
                    className="absolute right-3 top-3 rounded-full bg-zinc-950 px-3 py-1 text-[10px] font-semibold text-white shadow transition hover:bg-rose-600"
                  >
                    Delete (Admin)
                  </button>
                )}
              </div>
            ))}
        </div>
      )}
      </div>
    </div>
  );
}