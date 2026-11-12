'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Users,
  MapPin,
  Check,
  ShieldCheck,
  Sparkles,
  ChevronRight,
  PhoneCall,
  Calendar,
  Clock,
  Car,
  MessageSquare,
} from 'lucide-react';

export default function CustomItineraryPage() {
  const [hub, setHub] = useState<'kolkata' | 'durgapur'>('kolkata');
  const [companions, setCompanions] = useState<string[]>(['Family Vacation with Elders']);
  const [landscape, setLandscape] = useState<string>('Mountain Pines & Snow Line');
  const [comforts, setComforts] = useState<string[]>([
    'Authentic Homestay / Bengali Meal Plan (Thali)',
    'Polite & Senior-Friendly Ground Drivers',
  ]);
  const [vehicle, setVehicle] = useState({
    name: 'Maruti Ertiga XL6',
    type: 'MUV',
    pricePerDay: 4200,
  });
  const [adults, setAdults] = useState(4);
  const [kids, setKids] = useState(0);
  const guests = adults + kids;
  const [nights, setNights] = useState(4);
  const [perGuestBudget, setPerGuestBudget] = useState(16500);

  const totalEstimate = perGuestBudget * guests;

  const toggleCompanion = (tag: string) => {
    setCompanions((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const toggleComfort = (item: string) => {
    setComforts((prev) =>
      prev.includes(item) ? prev.filter((c) => c !== item) : [...prev, item]
    );
  };

  return (
    <div className="min-h-screen bg-white px-4 py-12 text-zinc-950 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="mx-auto mb-10 flex max-w-4xl flex-col justify-between gap-4 border-b border-zinc-200 pb-8 md:flex-row md:items-end">
          <div>
            <span className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-400">
              BESPOKE CURATION STUDIO
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-zinc-950 sm:text-5xl">
              Craft Your Custom Chuti
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-500 sm:text-base">
              No rigid group departures or hurried bus tours. Tell our Kolkata &amp; Durgapur trip architects your pace, palate, and companions — we sketch an unhurried route in under 2 hours.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-zinc-50 px-4 py-3 text-xs text-zinc-700">
            <div className="h-2.5 w-2.5 flex-shrink-0 animate-pulse rounded-full bg-zinc-950" />
            <div>
              <p className="font-semibold text-zinc-950">Concierge Active</p>
              <p className="text-zinc-500">Kolkata &amp; Durgapur Desk</p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto space-y-10">
            {/* STEP 1: Departure Hub */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    1
                  </span>
                  <h2 className="text-xl font-serif font-bold text-moss-dark">
                    Choose Your Departure Hub
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  STARTING POINT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => setHub('kolkata')}
                  className={`p-5 rounded-2xl text-left border transition-all ${
                    hub === 'kolkata'
                      ? 'border-terracotta bg-terracotta/5 shadow-sm'
                      : 'border-sand hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold font-serif text-moss-dark text-lg">
                      Kolkata Hub
                    </span>
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    Explore East, Howrah/Sealdah pickup, North Kolkata, Salt Lake, New Town & Airport pick-ups.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-terracotta bg-terracotta/10 px-2.5 py-0.5 rounded-full">
                    Ideal for Kolkata & Suburbs
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setHub('durgapur')}
                  className={`p-5 rounded-2xl text-left border transition-all ${
                    hub === 'durgapur'
                      ? 'border-terracotta bg-terracotta/5 shadow-sm'
                      : 'border-sand hover:border-stone-300 bg-white'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold font-serif text-moss-dark text-lg">
                      Durgapur & Bardhaman
                    </span>
                    <MapPin className="w-5 h-5 text-terracotta" />
                  </div>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    City Centre & Rly Station pick-ups. Direct routes to Purulia, Dooars & Bankura hills.
                  </p>
                  <span className="inline-block mt-3 text-[11px] font-semibold text-moss bg-moss/10 px-2.5 py-0.5 rounded-full">
                    Direct High-Speed Corridor
                  </span>
                </button>
              </div>
            </section>

            {/* STEP 2: Travelers Breakdown */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    2
                  </span>
                  <h2 className="text-xl font-serif font-bold text-moss-dark">
                    Who is Traveling with You?
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  GUEST COUNT
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {/* Adults Counter */}
                <div className="bg-sand/40 p-4 rounded-2xl border border-sand text-center">
                  <span className="text-xs font-bold text-stone-600 uppercase block mb-2">
                    Adults (12+ yrs)
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setAdults((a) => Math.max(1, a - 1))}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      -
                    </button>
                    <span className="text-2xl font-serif font-bold text-moss-dark">
                      {adults}
                    </span>
                    <button
                      type="button"
                      onClick={() => setAdults((a) => a + 1)}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Kids Counter */}
                <div className="bg-sand/40 p-4 rounded-2xl border border-sand text-center">
                  <span className="text-xs font-bold text-stone-600 uppercase block mb-2">
                    Kids (Below 12 yrs)
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setKids((k) => Math.max(0, k - 1))}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      -
                    </button>
                    <span className="text-2xl font-serif font-bold text-moss-dark">
                      {kids}
                    </span>
                    <button
                      type="button"
                      onClick={() => setKids((k) => k + 1)}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Total Head Counter */}
                <div className="bg-terracotta/10 p-4 rounded-2xl border border-terracotta/30 text-center flex flex-col justify-center items-center">
                  <span className="text-xs font-extrabold text-terracotta uppercase block mb-1">
                    Total Head Count
                  </span>
                  <span className="text-3xl font-serif font-bold text-moss-dark">
                    {adults + kids}
                  </span>
                  <span className="text-[10px] text-stone-500 font-bold mt-0.5 uppercase tracking-wider">
                    {adults + kids === 1 ? 'Guest' : 'Guests'} Total
                  </span>
                </div>
              </div>
            </section>

            {/* STEP 3: Landscape & Vibe */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    3
                  </span>
                  <h2 className="text-xl font-serif font-bold text-moss-dark">
                    Desired Landscape & Vibe
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  SELECT LANDSCAPE
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    title: 'Mountain Pines & Snow Line',
                    region: 'North Bengal & Sikkim',
                    desc: 'Unwinding amidst high Himalayan passes & pine trails',
                  },
                  {
                    title: 'Sal Canopies & Tea Greens',
                    region: 'Dooars & Dooars Hills',
                    desc: 'Wildlife safaris, quiet tea estates & rippling streams',
                  },
                  {
                    title: 'Red Soil, Palash & Hills',
                    region: 'Purulia & Bankura',
                    desc: 'Ayodhya hills, Chhau folk culture & terracotta heritage',
                  },
                  {
                    title: 'Sundarbans & Coast',
                    region: 'Estuary & Coastline',
                    desc: 'Peaceful estuarine cruises, mangroves & coastal breezes',
                  },
                ].map((item) => {
                  const isSelected = landscape === item.title;
                  return (
                    <div
                      key={item.title}
                      onClick={() => setLandscape(item.title)}
                      className={`cursor-pointer relative overflow-hidden rounded-2xl p-5 border transition-all ${
                        isSelected
                          ? 'border-terracotta bg-moss-dark text-white ring-2 ring-terracotta'
                          : 'border-sand bg-white text-stone-800 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-gold text-moss-dark'
                              : 'bg-sand text-stone-600'
                          }`}
                        >
                          {item.region}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-gold" />}
                      </div>
                      <h3
                        className={`font-serif font-bold text-base mb-1 ${
                          isSelected ? 'text-white' : 'text-moss-dark'
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-xs ${
                          isSelected ? 'text-cream/80' : 'text-stone-500'
                        }`}
                      >
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* STEP 4: Bengali Comforts */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    4
                  </span>
                  <h2 className="text-1xl sm:text-xl font-serif font-bold text-moss-dark">
                    Bengali Comforts & Care
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  THE CHUTI TOUCH
                </span>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  {
                    label: 'Authentic Homestay / Bengali Meal Plan (Thali)',
                    sub: 'Hot steamed Gobindobhog rice, Fish Curry, and fresh homestyle Bengali meals prepared by locals.',
                  },
                  {
                    label: 'Polite & Senior-Friendly Ground Drivers',
                    sub: 'Patient drivers with local mountain/regional experience, who understand elder needs and stop whenever required.',
                  },
                  {
                    label: 'Slow-Paced Authentic Sightseeing (No 5 AM Wakes)',
                    sub: 'Relaxed itineraries tailored for genuine unwind time — for afternoon reads, tea, and warm conversations.',
                  },
                ].map((item) => {
                  const isChecked = comforts.includes(item.label);
                  return (
                    <label
                      key={item.label}
                      className={`flex items-start gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                        isChecked
                          ? 'border-terracotta bg-terracotta/5'
                          : 'border-sand bg-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleComfort(item.label)}
                        className="mt-1 h-4 w-4 rounded border-stone-300 text-terracotta focus:ring-terracotta"
                      />
                      <div>
                        <p className="text-xs sm:text-sm font-bold text-moss-dark">
                          {item.label}
                        </p>
                        <p className="text-xs text-stone-500 mt-0.5">{item.sub}</p>
                      </div>
                    </label>
                  );
                })}
              </div>
            </section>

            {/* STEP 5: Select Dedicated Vehicle */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    5
                  </span>
                  <h2 className="text-xl font-serif font-bold text-moss-dark">
                    Select Dedicated Vehicle
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  EXPERIENCED DRIVERS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  {
                    name: 'Swift Dzire / Etios',
                    type: 'Sedan Class',
                    desc: 'Great for couples & small families up to 3 guests with light luggage.',
                    pricePerDay: 3200,
                    tag: 'NO EXTRA TOLL',
                  },
                  {
                    name: 'Maruti Ertiga XL6',
                    type: 'MUV Class',
                    desc: 'Best for 4-5 adults or families with grandparents. Smooth AC travel.',
                    pricePerDay: 4200,
                    tag: 'MOST POPULAR',
                  },
                  {
                    name: 'Bolero / Scorpio 4x4',
                    type: 'High Ground Clearance',
                    desc: 'Recommended for Silk Route / Zuluk steep hairpin ridges & offbeat terrains.',
                    pricePerDay: 4800,
                    tag: 'HILL EXPERT PILOT',
                  },
                  {
                    name: 'Tempo / Force Traveller',
                    type: 'Group Coach',
                    desc: 'Pushback seats for larger families and joint groups (8-14 guests).',
                    pricePerDay: 6800,
                    tag: 'EXTRA LUGGAGE BOOT',
                  },
                ].map((v) => {
                  const isSelected = vehicle.name === v.name;
                  return (
                    <div
                      key={v.name}
                      onClick={() =>
                        setVehicle({
                          name: v.name,
                          type: v.type,
                          pricePerDay: v.pricePerDay,
                        })
                      }
                      className={`cursor-pointer p-5 rounded-2xl border transition-all ${
                        isSelected
                          ? 'border-terracotta bg-terracotta/5 ring-1 ring-terracotta'
                          : 'border-sand bg-white hover:border-stone-300'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-stone-500">{v.type}</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-terracotta/10 text-terracotta px-2 py-0.5 rounded-md">
                          {v.tag}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-moss-dark text-base">
                        {v.name}
                      </h3>
                      <p className="text-xs text-stone-500 mt-1 mb-3">{v.desc}</p>
                      <div className="text-xs font-bold text-terracotta border-t border-sand pt-2">
                        Avg ₹{v.pricePerDay.toLocaleString('en-IN')}/day
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* STEP 6: Travelers, Duration & Dates */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-terracotta text-white font-bold text-xs flex items-center justify-center">
                    6
                  </span>
                  <h2 className="text-xl font-serif font-bold text-moss-dark">
                    Travelers, Duration & Dates
                  </h2>
                </div>
                <span className="text-xs font-semibold uppercase text-stone-400 tracking-wider">
                  LOGISTICS
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-sand/40 p-4 rounded-2xl border border-sand text-center flex flex-col justify-center items-center">
                  <span className="text-xs font-semibold text-stone-500 uppercase block mb-1">
                    Total Guests
                  </span>
                  <span className="text-2xl font-serif font-bold text-moss-dark">
                    {guests}
                  </span>
                  <span className="text-[10px] text-stone-400 mt-1 block">
                    {adults} {adults === 1 ? 'Adult' : 'Adults'} • {kids} {kids === 1 ? 'Kid' : 'Kids'}
                  </span>
                </div>

                <div className="bg-sand/40 p-4 rounded-2xl border border-sand text-center">
                  <span className="text-xs font-semibold text-stone-500 uppercase block mb-2">
                    Trip Duration
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => setNights((n) => Math.max(2, n - 1))}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      -
                    </button>
                    <span className="text-2xl font-serif font-bold text-moss-dark">
                      {nights}
                    </span>
                    <button
                      type="button"
                      onClick={() => setNights((n) => n + 1)}
                      className="w-8 h-8 rounded-full bg-white border border-stone-300 font-bold text-moss-dark hover:bg-stone-100"
                    >
                      +
                    </button>
                  </div>
                  <span className="text-[10px] text-stone-400 mt-1 block">{nights + 1} Days Tour</span>
                </div>

                <div className="bg-sand/40 p-4 rounded-2xl border border-sand text-center flex flex-col justify-center">
                  <span className="text-xs font-semibold text-stone-500 uppercase block mb-1">
                    Tentative Month
                  </span>
                  <select className="bg-white border border-stone-300 rounded-xl px-3 py-2 text-xs font-semibold text-moss-dark focus:outline-none">
                    <option>Winter Vacation (Dec - Jan)</option>
                    <option>Durga Puja / Autumn (Oct)</option>
                    <option>Spring / Blooming (Feb - Mar)</option>
                    <option>Summer Retreat (Apr - Jun)</option>
                  </select>
                </div>
              </div>

              {/* Budget Slider */}
              <div className="bg-sand/30 p-6 rounded-2xl border border-sand space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-600">
                    Estimated Budget Target
                  </span>
                  <span className="text-xl font-bold text-terracotta font-serif">
                    ₹{perGuestBudget.toLocaleString('en-IN')}{' '}
                    <span className="text-xs text-stone-500 font-sans font-normal">/ per guest</span>
                  </span>
                </div>
                <input
                  type="range"
                  min={8000}
                  max={35000}
                  step={500}
                  value={perGuestBudget}
                  onChange={(e) => setPerGuestBudget(Number(e.target.value))}
                  className="w-full accent-terracotta cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-semibold text-stone-400">
                  <span>₹8,000 (Basic Eco Homestays)</span>
                  <span>₹18,000 (Comfort Heritage & Driver)</span>
                  <span>₹35,000+ (Bespoke Luxury Stays)</span>
                </div>
              </div>
            </section>

            {/* Bottom Actions Section */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-sand shadow-sm space-y-4 text-center">
              <button
                type="button"
                onClick={async () => {
                  try {
                    const { supabase } = await import('@/lib/supabase');
                    await supabase.from('custom_requests').insert([
                      {
                        user_email: 'guest@chutichuti.in',
                        hub,
                        companions,
                        landscape,
                        comforts,
                        vehicle_type: vehicle.name,
                        guests,
                        nights,
                        estimated_budget: perGuestBudget,
                      },
                    ]);
                  } catch (err) {
                    console.error('Supabase logging error:', err);
                  }

                  const message = encodeURIComponent(
                    `Hi Chuti Chuti! I want to plan a custom trip.\nHub: ${hub}\nGuests: ${guests}\nNights: ${nights}\nLandscape: ${landscape}\nVehicle: ${vehicle.name}\nBudget: ₹${perGuestBudget}/guest`
                  );
                  window.open(`https://wa.me/919830072946?text=${message}`, '_blank');
                }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-zinc-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-zinc-800 sm:text-base"
              >
                <MessageSquare className="w-5 h-5" />
                Get WhatsApp Itinerary in 2 Hours
              </button>

              <a
                href="tel:+919830072946"
                className="flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 px-4 py-3 text-xs font-semibold text-zinc-900 transition hover:border-zinc-950 sm:text-sm"
              >
                <PhoneCall className="w-4 h-4 text-zinc-950" />
                Speak to Senior Curator at +91 98300 72946
              </a>
            </div>
          </div>
      </div>
    </div>
  );
}