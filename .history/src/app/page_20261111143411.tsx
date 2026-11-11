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
  ChevronLeft,
  ChevronRight,
  Star,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import TourCard from '@/components/TourCard';

const curatedTours: any[] = [];

const monthsList = [
  { month: 'October', year: '2026', label: 'October 2026' },
  { month: 'November', year: '2026', label: 'November 2026' },
  { month: 'December', year: '2026', label: 'December 2026' },
  { month: 'January', year: '2027', label: 'January 2027' },
  { month: 'February', year: '2027', label: 'February 2027' },
  { month: 'March', year: '2027', label: 'March 2027' },
  { month: 'April', year: '2027', label: 'April 2027' },
  { month: 'May', year: '2027', label: 'May 2027' },
  { month: 'June', year: '2027', label: 'June 2027' },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedMonthIdx, setSelectedMonthIdx] = useState(1);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <section className="relative bg-cream pt-8 pb-12 px-4 sm:px-6 lg:px-8 border-b border-sand">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-moss-dark leading-tight">
            Holidaying made <span className="italic text-terracotta">soulful</span>,{' '}
            <span className="italic text-moss">scenic</span>, & simple.
          </h1>
          <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Slow, soulful journeys across Bengal & beyond — from heritage Rajbari Pujas and high Himalayan passes to misty tea estates and mangrove creeks. Unhurried itineraries crafted by locals in Kolkata & Durgapur.
          </p>

          {/* Quick Search Widget */}
          <div className="bg-white p-4 sm:p-6 rounded-3xl border border-sand shadow-lg space-y-4 text-left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs items-center">
              <div>
                <label className="block text-stone-400 font-semibold mb-1 uppercase">
                  Departure Hub
                </label>
                <select className="w-full bg-sand/40 border border-sand rounded-xl p-3 font-bold text-moss-dark focus:outline-none focus:border-terracotta cursor-pointer">
                  <option>Kolkata (CCU / Howrah)</option>
                  <option>Durgapur (DGR / City Centre)</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-stone-400 font-semibold uppercase">
                    Travel Month
                  </label>
                  <span className="flex items-center gap-1.5 bg-sand/60 px-3 py-1 rounded-xl text-moss-dark font-bold font-serif text-xs border border-sand">
                    <Calendar className="w-3.5 h-3.5 text-terracotta" />
                    {monthsList[selectedMonthIdx]}
                  </span>
                </div>
                <div className="pt-2">
                  <input
                    type="range"
                    min="0"
                    max={monthsList.length - 1}
                    value={selectedMonthIdx}
                    onChange={(e) => setSelectedMonthIdx(Number(e.target.value))}
                    className="w-full accent-terracotta cursor-pointer h-2 bg-sand/60 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-stone-400 mt-1 font-bold">
                    <span>{monthsList[0]}</span>
                    <span>{monthsList[monthsList.length - 1]}</span>
                  </div>
                </div>
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