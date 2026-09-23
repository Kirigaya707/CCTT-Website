'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Compass,
  Shield,
  Award,
  HeartHandshake,
  Search,
  MapPin,
  Calendar,
  Users,
  ChevronRight,
  Star,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import TourCard from '@/components/TourCard';

const curatedTours = [
  {
    slug: 'durga-puja-parikrama',
    title: 'Old Silk Route & Zuluk Himalayan Loop',
    subtitle: 'High Altitude Passes, Zig-Zag Roads & Nathang Valley',
    duration: '5 Nights / 6 Days',
    pickup: 'Kolkata (CCU) / NJP / Siliguri',
    price: '₹15,999',
    badge: 'FLAGSHIP CIRCUIT',
    highlights: [
      '32 Hairpin Bends of Zuluk & Thambi View Point',
      'Elephant Lake (Kupup) & Old Baba Mandir',
      'Warm Sikkimese Homestays with Bengali Cuisine',
    ],
  },
  {
    slug: 'mystic-dooars',
    title: 'Mystic Dooars & Jaldapara Wilderness',
    subtitle: 'Tea Garden Bungalows & Elephant Safaris',
    duration: '4 Nights / 5 Days',
    pickup: 'Howrah / NJP Railway Station',
    price: '₹11,499',
    badge: 'WILDLIFE & TEA',
    highlights: [
      'Jaldapara Elephant Safari & Rhino Sighting',
      'Jayanti Riverbed & Buxa Fort Trek',
      'Serene Tea Garden Stay near Chilapata',
    ],
  },
  {
    slug: 'purulia-palash',
    title: 'Purulia Palash & Chhau Mask Trail',
    subtitle: 'Red Soil, Ayodhya Hills & Folk Culture',
    duration: '2 Nights / 3 Days',
    pickup: 'Durgapur / Purulia Station',
    price: '₹6,499',
    badge: 'HERITAGE & HILLS',
    highlights: [
      'Ayodhya Pahar, Bamni Falls & Marble Lake',
      'Live Chhau Dance Performance in Charida',
      'Authentic Rural Bengal Homestays',
    ],
  },
  {
    slug: 'north-sikkim',
    title: 'North Sikkim Gurudongmar & Yumthang',
    subtitle: 'Sacred Alpine Lake at 17,800 Ft',
    duration: '5 Nights / 6 Days',
    pickup: 'Kolkata / Bagdogra Airport',
    price: '₹16,850',
    badge: 'HIGH ALTITUDE',
    highlights: [
      'Gurudongmar Lake & Valley of Flowers',
      'Lachen & Lachung Wooden Eco Lodges',
      'Permits & 4x4 Mountain SUV Included',
    ],
  },
  {
    slug: 'sundarbans-cruise',
    title: 'Sundarbans Mangrove Silence & Creek Cruise',
    subtitle: 'Estuarine Wilderness & Tiger Reserve',
    duration: '2 Nights / 3 Days',
    pickup: 'Kolkata Science City / Canning',
    price: '₹5,999',
    badge: 'ESTUARY CRUISE',
    highlights: [
      'Exclusive Launch Boat Cruise through Creeks',
      'Dobanki Canopy Walk & Sajnekhali Tower',
      'Fresh Estuarine Crab & Fish Meals',
    ],
  },
  {
    slug: 'tinchuley-heritage',
    title: 'Tinchuley Heritage Bungalows & Takdah',
    subtitle: 'Pine Forests & British Colonial Bungalows',
    duration: '3 Nights / 4 Days',
    pickup: 'NJP / Siliguri Junction',
    price: '₹12,200',
    badge: 'OFFBEAT RETREAT',
    highlights: [
      'Quiet Colonial Tea Manager Bungalow Stays',
      'Panoramas of Mt. Kanchenjunga',
      'Takdah Orchid Centre & Orange Orchards',
    ],
  },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-cream pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-sand">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-block bg-terracotta/10 text-terracotta text-xs font-bold px-3.5 py-1 rounded-full uppercase tracking-wider">
              BESPOKE BENGALI TRAVEL STUDIO
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif font-bold text-moss-dark leading-tight">
              Holidaying made <span className="italic text-terracotta">soulful</span>,{' '}
              <span className="italic text-moss">scenic</span>, & simple.
            </h1>
            <p className="text-stone-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Slow, soulful journeys across Bengal & beyond — from heritage Rajbari Pujas and high Himalayan passes to misty tea estates and mangrove creeks. Unhurried itineraries crafted by locals in Kolkata & Durgapur.
            </p>

            {/* Quick Search Widget */}
            <div className="bg-white p-4 sm:p-6 rounded-3xl border border-sand shadow-lg space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block text-stone-400 font-semibold mb-1 uppercase">
                    Departure Hub
                  </label>
                  <select className="w-full bg-sand/40 border border-sand rounded-xl p-2.5 font-bold text-moss-dark">
                    <option>Kolkata (CCU / Howrah)</option>
                    <option>Durgapur (DGR / City Centre)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-400 font-semibold mb-1 uppercase">
                    Travel Month
                  </label>
                  <select className="w-full bg-sand/40 border border-sand rounded-xl p-2.5 font-bold text-moss-dark">
                    <option>October 2026 (Autumn/Puja)</option>
                    <option>November 2026</option>
                    <option>December 2026 (Winter)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-stone-400 font-semibold mb-1 uppercase">
                    Experience Vibe
                  </label>
                  <select className="w-full bg-sand/40 border border-sand rounded-xl p-2.5 font-bold text-moss-dark">
                    <option>All Curated Escapes</option>
                    <option>Heritage & Culture</option>
                    <option>Himalayan High Passes</option>
                  </select>
                </div>
              </div>
              <Link
                href="/tours"
                className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3 rounded-xl transition text-sm shadow-sm"
              >
                <Search className="w-4 h-4" />
                Find Expeditions
              </Link>
            </div>
          </div>

          {/* Right Hero Feature Card */}
          <div className="lg:col-span-5">
            <div className="bg-moss-dark text-cream p-8 rounded-3xl border border-gold/30 shadow-2xl relative overflow-hidden space-y-6">
              <span className="bg-gold text-moss-dark text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest">
                WINTER DEPARTURES ACTIVE
              </span>
              <h3 className="text-3xl font-serif font-bold text-white leading-snug">
                Zuluk Silk Route Lodge & Pass
              </h3>
              <p className="text-cream/80 text-xs sm:text-sm leading-relaxed">
                Experience high altitude snowlines, ancient trade paths, and warm Sikkimese wooden homestays with fresh Bengali meals prepared daily.
              </p>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs text-stone-300 block">5 Days / 4 Nights</span>
                  <span className="text-2xl font-serif font-bold text-gold">₹14,999</span>
                </div>
                <Link
                  href="/tours/durga-puja-parikrama"
                  className="px-5 py-2.5 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xs transition"
                >
                  Explore Circuit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Host Group Departure Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-moss-dark text-cream rounded-3xl p-8 sm:p-10 border border-gold/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-gold text-xs font-bold uppercase tracking-widest block">
              FOR ORGANIZERS & FAMILY GROUPS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Host Your Upcoming Group Departure with Chuti Chuti
            </h2>
            <p className="text-cream/80 text-xs sm:text-sm">
              Are you an association or family lead planning a trip for 10+ travelers? We arrange dedicated AC Mini Buses, verified hotels, and custom meal menus.
            </p>
          </div>
          <Link
            href="/custom-itinerary"
            className="flex-shrink-0 px-6 py-3.5 bg-gold hover:bg-gold-dark text-moss-dark font-serif font-bold text-sm rounded-xl transition shadow-md"
          >
            Post Your Requirement
          </Link>
        </div>
      </section>

      {/* Curated Escapes Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-sand pb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-1">
              HANDPICKED EXPEDITIONS
            </span>
            <h2 className="text-3xl font-serif font-bold text-moss-dark">
              Upcoming Curated Escapes
            </h2>
          </div>
          <Link
            href="/tours"
            className="text-xs font-bold text-terracotta hover:underline flex items-center gap-1"
          >
            View All Escapes <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {curatedTours.map((tour) => (
            <TourCard key={tour.slug} {...tour} />
          ))}
        </div>
      </section>

      {/* Craft Personal Chuti Teaser Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-sand/60 rounded-3xl p-8 sm:p-12 border border-sand grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-bold text-terracotta uppercase tracking-widest block">
              NO FIXED TIMETABLES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-moss-dark">
              Prefer traveling solely with your own family or friends?{' '}
              <span className="italic font-serif text-terracotta">Craft your personal Chuti.</span>
            </h2>
            <p className="text-stone-600 text-sm leading-relaxed max-w-xl">
              No shared bus schedules or mandatory wakeups. Tell our Kolkata & Durgapur curators your dates, elder care preferences, and culinary wishes. We build a personalized itinerary tailored to your group.
            </p>
            <div className="pt-2">
              <Link
                href="/custom-itinerary"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-terracotta hover:bg-terracotta-dark text-white font-bold text-sm rounded-xl transition shadow-sm"
              >
                Launch Custom Trip Builder <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-sand space-y-3 text-xs">
            <div className="flex items-center gap-2 text-moss-dark font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Custom Private Vehicle
            </div>
            <div className="flex items-center gap-2 text-moss-dark font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Bengali Food Option at Stays
            </div>
            <div className="flex items-center gap-2 text-moss-dark font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Senior Citizen Comfort Drivers
            </div>
            <div className="flex items-center gap-2 text-moss-dark font-bold">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Instant WhatsApp Itinerary Sketch
            </div>
          </div>
        </div>
      </section>

      {/* The Bengali Traveler's Peace of Mind */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-sand">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
              OUR UNCOMPROMISING STANDARDS
            </span>
            <h2 className="text-3xl font-serif font-bold text-moss-dark">
              The Bengali Traveler's Peace of Mind
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm">
              We design itineraries with deep respect for authentic food, elder comfort, and regional warmth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-3">
              <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta font-bold flex items-center justify-center">
                🍚
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">
                100% Bengali Cuisine On Demand
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Hot steamed Gobindobhog rice, fresh fish, and familiar comforts prepared by homestays on mountain routes.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-3">
              <div className="w-10 h-10 rounded-xl bg-moss/10 text-moss font-bold flex items-center justify-center">
                🚙
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">
                Vetted Mountain Drivers & Soft Route
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Polite drivers with proven hill experience who understand elder needs and stop whenever required.
              </p>
            </div>

            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-3">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold-dark font-bold flex items-center justify-center">
                🏛️
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">
                Physical Walk-in Desks in WB
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Visit our active desks at Lansdowne Crossing in Kolkata or City Centre in Durgapur for face-to-face planning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-terracotta block mb-1">
            GUEST REVIEWS
          </span>
          <h2 className="text-3xl font-serif font-bold text-moss-dark">
            Stories from Salt Lake to Durgapur
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'Subhashish Ganguly',
              location: 'Salt Lake, Kolkata',
              text: 'The Silk Route tour with my elderly parents was flawless. Driver Raju was extremely polite and the hot Bengali meals at Zuluk made us feel right at home!',
            },
            {
              name: 'Paramita Mukherjee',
              location: 'City Centre, Durgapur',
              text: 'Chuti Chuti customized our Purulia trip with live Chhau dance arrangements. Flawless communication through their Durgapur desk.',
            },
            {
              name: 'Sarmistha Dutta',
              location: 'New Town, Kolkata',
              text: 'The Durga Puja Parikrama was smoothly managed. AC Mini bus was comfortable and the Shobhabazar Rajbari lunch was unforgettable.',
            },
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-sand shadow-sm space-y-4">
              <div className="flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-xs text-stone-600 leading-relaxed italic">"{item.text}"</p>
              <div className="border-t border-sand pt-3">
                <p className="font-serif font-bold text-moss-dark text-sm">{item.name}</p>
                <p className="text-[11px] text-stone-400">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}