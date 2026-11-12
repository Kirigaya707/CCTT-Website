'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Compass,
  Utensils,
  Car,
  MapPin,
  Search,
  Calendar as CalendarIcon,
  ArrowUpRight,
  Star,
  CheckCircle2,
} from 'lucide-react';
import TourCard from '@/components/TourCard';
import { RangeCalendar } from '@/components/RangeCalendar';
import { supabase } from '@/lib/supabase';

export default function HomePage() {
  const [tours, setTours] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showCalendar, setShowCalendar] = useState(false);
  const [dateLabel, setDateLabel] = useState('Nov 11 - Dec 1, 2026');

  useEffect(() => {
    async function fetchTours() {
      const { data } = await supabase
        .from('tours')
        .select('*')
        .eq('is_active', true);

      if (data?.length) {
        setTours(
          data.map((item: any) => ({
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
          }))
        );
      }
    }

    fetchTours();
  }, []);

  const filteredTours = tours.filter(
    (tour) => selectedCategory === 'all' || tour.category === selectedCategory
  );

  return (
    <div className="space-y-24 bg-white pb-24 text-zinc-950">
      <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[32px] bg-zinc-950 px-6 py-16 text-white sm:px-14 sm:py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.12),_transparent_55%)]" />
          <div className="relative z-10 max-w-3xl space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium tracking-wide text-zinc-200">
              Kolkata HQ &amp; Durgapur Desk
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              Explore the beauty of Bengal &amp; beyond.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-lg">
              Slow, soulful journeys crafted with authentic Bengali hospitality, from Himalayan passes and misty tea estates to heritage trails and coastal retreats.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/tours" className="inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">
                Explore Escapes
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-zinc-950 text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </Link>
              <Link href="/custom-itinerary" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                Build Custom Trip
              </Link>
            </div>
          </div>

          <div className="relative z-20 mt-14 rounded-3xl bg-white p-4 text-zinc-950 shadow-2xl sm:p-5">
            <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-12">
              <div className="px-2 md:col-span-5">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Departure Hub
                </label>
                <select className="w-full cursor-pointer bg-transparent text-sm font-semibold text-zinc-950 focus:outline-none">
                  <option>Kolkata (CCU / Howrah)</option>
                  <option>Durgapur (DGR / City Centre)</option>
                </select>
              </div>
              <div className="mx-auto hidden h-8 w-px bg-zinc-200 md:col-span-1 md:block" />
              <div className="px-2 md:col-span-4">
                <label className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-zinc-400">
                  Travel Dates
                </label>
                <button type="button" onClick={() => setShowCalendar((previous) => !previous)} className="flex w-full items-center justify-between text-left text-sm font-semibold text-zinc-950">
                  <span>{dateLabel}</span>
                  <CalendarIcon className="h-4 w-4 text-zinc-500" />
                </button>
              </div>
              <div className="md:col-span-2">
                <Link href="/tours" className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-zinc-800">
                  <Search className="h-4 w-4" />
                  Search
                </Link>
              </div>
            </div>
            {showCalendar && (
              <div className="mt-5 flex justify-center overflow-x-auto border-t border-zinc-200 pt-5">
                <RangeCalendar
                  aria-label="Range calendar"
                  onRangeSelect={(start, end) => {
                    if (start && end) {
                      const formatDate = (date: Date) =>
                        date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
                      setDateLabel(`${formatDate(start)} - ${formatDate(end)}, ${end.getFullYear()}`);
                    }
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Top values for you</h2>
          <p className="text-sm text-zinc-500 sm:text-base">Thoughtful care, transparent pricing, and unhurried pacing on every circuit.</p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Compass, title: 'Curated Slow Routes', desc: 'Handpicked itineraries with zero rushed bus schedules or 5 AM wake-up calls.' },
            { icon: Utensils, title: '100% Bengali Cuisine', desc: 'Hot steamed rice, fresh fish, and familiar homestyle meals even in high passes.' },
            { icon: Car, title: 'Vetted Hill Drivers', desc: 'Patient, experienced drivers trained for senior citizen comfort and safety.' },
            { icon: MapPin, title: 'Local Walk-In Desks', desc: 'Direct face-to-face support at our Kolkata HQ and Durgapur City Centre desk.' },
          ].map((advantage) => {
            const Icon = advantage.icon;
            return (
              <div key={advantage.title} className="space-y-4 rounded-3xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-950">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-950">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-zinc-950">{advantage.title}</h3>
                <p className="text-xs leading-relaxed text-zinc-500 sm:text-sm">{advantage.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Choose your escape</h2>
            <p className="text-sm text-zinc-500">Filter curated journeys by landscape and cultural experience.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'All Escapes' },
              { id: 'mountain', label: 'Mountain based trips' },
              { id: 'beach', label: 'Beach based trips' },
              { id: 'forest', label: 'Forest based trips' },
              { id: 'cultural', label: 'Cultural and heritage events' },
            ].map((category) => (
              <button key={category.id} type="button" onClick={() => setSelectedCategory(category.id)} className={`rounded-full px-4 py-2 text-xs font-semibold transition ${selectedCategory === category.id ? 'bg-zinc-950 text-white' : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'}`}>
                {category.label}
              </button>
            ))}
          </div>
        </div>
        {filteredTours.length === 0 ? (
          <div className="space-y-4 rounded-3xl border border-zinc-200 bg-zinc-50 p-12 text-center">
            <p className="mx-auto max-w-md text-sm text-zinc-600">New seasonal departures are being finalized by our Kolkata &amp; Durgapur curators.</p>
            <Link href="/custom-itinerary" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-6 py-3 text-xs font-semibold text-white transition hover:bg-zinc-800">
              Request a Custom Itinerary <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredTours.map((tour) => <TourCard key={tour.slug} {...tour} />)}
          </div>
        )}
      </section>

      <section className="mx-auto max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-widest text-zinc-400">TRAVEL JOURNAL &amp; REVIEWS</span>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 sm:text-4xl">Stories from Our Beloved Customers</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            { name: 'Subhashish Ganguly', location: 'Salt Lake, Kolkata', tag: 'Himalayan Route', text: 'The Silk Route tour with my elderly parents was flawless. Our driver was extremely polite and the hot Bengali meals made us feel right at home.' },
            { name: 'Paramita Mukherjee', location: 'City Centre, Durgapur', tag: 'Custom Circuit', text: 'Chuti Chuti customized our Purulia trip with live Chhau dance arrangements. Smooth coordination through their Durgapur desk.' },
            { name: 'Sarmistha Dutta', location: 'New Town, Kolkata', tag: 'Heritage Trail', text: 'Every detail was thoughtfully managed. Comfortable AC Mini bus travel and unhurried sightseeing made it a memorable family outing.' },
          ].map((item) => (
            <article key={item.name} className="flex flex-col justify-between space-y-6 rounded-3xl border border-zinc-200 bg-white p-7">
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700">{item.tag}</span>
                  <div className="flex text-zinc-950">{[...Array(5)].map((_, index) => <Star key={index} className="h-3.5 w-3.5 fill-current" />)}</div>
                </div>
                <p className="text-sm leading-relaxed text-zinc-600">&ldquo;{item.text}&rdquo;</p>
              </div>
              <div className="border-t border-zinc-100 pt-4">
                <p className="text-sm font-bold text-zinc-950">{item.name}</p>
                <p className="text-xs text-zinc-400">{item.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 rounded-[32px] bg-zinc-950 p-8 text-white sm:p-14 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-8">
            <span className="block text-xs font-semibold uppercase tracking-widest text-zinc-400">BESPOKE PRIVATE &amp; GROUP DEPARTURES</span>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl">Craft your personal Chuti.</h2>
            <p className="max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">Traveling with family, elders, or a group of 10+? Tell our Kolkata &amp; Durgapur architects your dates and preferences for a custom itinerary within 2 hours.</p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link href="/custom-itinerary" className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-zinc-950 transition hover:bg-zinc-200">Launch Custom Builder <ArrowUpRight className="h-4 w-4" /></Link>
              <a href="https://wa.me/919830072946" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">WhatsApp Desk</a>
            </div>
          </div>
          <div className="space-y-3.5 rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-zinc-200 lg:col-span-4">
            <div className="flex items-center gap-2.5 font-medium"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-white" /> 100% Dedicated Private Vehicle</div>
            <div className="flex items-center gap-2.5 font-medium"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-white" /> Bengali Meal Plans at Stays</div>
            <div className="flex items-center gap-2.5 font-medium"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-white" /> Senior Citizen Comfort Drivers</div>
            <div className="flex items-center gap-2.5 font-medium"><CheckCircle2 className="h-4 w-4 flex-shrink-0 text-white" /> Direct WhatsApp Itinerary in 2 Hrs</div>
          </div>
        </div>
      </section>
    </div>
  );
}