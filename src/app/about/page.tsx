'use client';

export const dynamic = 'force-dynamic';

import React from 'react';
import Link from 'next/link';
import { Compass, Heart, ShieldCheck } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-cream min-h-screen pb-16 space-y-16">
      <section className="relative bg-moss-dark text-cream py-16 px-4 sm:px-6 lg:px-8 border-b border-gold/30">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/40 uppercase tracking-widest">
            AUTHENTIC &amp; UNHURRIED
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white">
            About Chuti Chuti
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Handcrafted journeys across Bengal and beyond - rooted in warmth, culture, and thoughtful Bengali hospitality.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand shadow-sm space-y-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-terracotta block">
              OUR ORIGINS
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-moss-dark">Our Story</h2>
            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              <p>
                Chuti Chuti Tours &amp; Travels was born out of a simple realization: travel should feel like a soulful escape, not a rushed checklist. Founded by passionate travel curators based in Kolkata and Durgapur, our story began with a mission to bring back the true charm of slow, meaningful journeys.
              </p>
              <p>
                From tracing century-old Bonedi Bari Durga Puja traditions in Kolkata to navigating the winding 32 hairpin bends of the ancient Himalayan Silk Route in Zuluk, we design circuits that honor local heritage and individual comfort.
              </p>
              <p>
                For us, every guest departure is personal. We place deep emphasis on senior citizen care, verified mountain drivers, authentic regional meals, and unhurried schedules-ensuring that every trip feels like home away from home.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-sand">
            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-2">
              <div className="w-10 h-10 rounded-xl bg-terracotta/10 text-terracotta flex items-center justify-center font-bold">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">Thoughtful Care</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Elder-friendly arrangements, comfortable tempos, and patient pacing across all circuits.</p>
            </div>

            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-2">
              <div className="w-10 h-10 rounded-xl bg-moss/10 text-moss-dark flex items-center justify-center font-bold">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">Curated Routes</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Handpicked homestays, verified heritage sites, and experienced local mountain drivers.</p>
            </div>

            <div className="bg-cream p-6 rounded-2xl border border-sand space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold/20 text-gold-dark flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif font-bold text-lg text-moss-dark">Total Transparency</h3>
              <p className="text-xs text-stone-600 leading-relaxed">Clear pricing, instant WhatsApp support, and active physical desks in Kolkata and Durgapur.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-moss-dark text-cream p-8 sm:p-12 rounded-3xl border border-gold/30 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">Ready to plan your next Chuti?</h2>
          <p className="text-xs sm:text-sm text-cream/80 max-w-xl mx-auto">
            Explore our handpicked group departures or build a custom private itinerary tailored exclusively for your group.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link href="/tours" className="px-6 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xs transition shadow-sm">
              Explore Curated Trips
            </Link>
            <Link href="/custom-itinerary" className="px-6 py-3 rounded-xl bg-gold hover:bg-gold-dark text-moss-dark font-serif font-bold text-xs transition shadow-sm">
              Custom Trip Builder
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
