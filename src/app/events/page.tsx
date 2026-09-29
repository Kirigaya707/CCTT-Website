'use client';

import React from 'react';
import { Calendar, MapPin, Clock, Bus, Utensils, MessageSquare, PhoneCall, CheckCircle2 } from 'lucide-react';

const specialEvents: any[] = [];

export default function EventsPage() {
  return (
    <div className="bg-cream min-h-screen pb-16">
      <div className="bg-moss-dark text-cream py-14 px-4 sm:px-6 lg:px-8 border-b border-gold/30">
        <div className="max-w-7xl mx-auto space-y-3 text-center">
          <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/40 uppercase tracking-widest">
            DAY EXPERIENCES & FESTIVAL TOURS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Heritage Events & Parikramas
          </h1>
          <p className="text-cream/80 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Single-day cultural walks, traditional festival parikramas, and grand Rajbari feasts curated with authentic Bengali hospitality.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
        {specialEvents.length === 0 ? (
          <div className="text-center py-16 text-stone-500 text-sm bg-white rounded-3xl border border-sand">
            No active events or parikramas scheduled at the moment. Please check back soon or contact us directly.
          </div>
        ) : (
          specialEvents.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-3xl border border-sand shadow-md overflow-hidden grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-8 p-6 sm:p-10 space-y-6">
              <div className="space-y-2">
                {event.badge && (
                  <span className="inline-block bg-terracotta text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {event.badge}
                  </span>
                )}
                <h2 className="text-2xl sm:text-4xl font-serif font-bold text-moss-dark">
                  {event.title}
                </h2>
                <p className="text-stone-600 text-xs sm:text-sm font-medium">
                  {event.subtitle}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-sand/30 p-4 rounded-2xl border border-sand text-xs text-stone-700">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span><strong>Date:</strong> {event.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span><strong>Time:</strong> {event.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span><strong>Pickup:</strong> {event.pickup}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bus className="w-4 h-4 text-terracotta flex-shrink-0" />
                  <span><strong>Travel:</strong> {event.transport}</span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-serif font-bold text-moss-dark text-base border-b border-sand pb-2">
                  Key Event Highlights
                </h3>
                <ul className="space-y-2 text-xs text-stone-600">
                  {event.highlights.map((h: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {event.bonediList.length > 0 && (
                <div className="space-y-3 bg-cream/60 p-5 rounded-2xl border border-sand">
                  <h4 className="font-serif font-bold text-moss-dark text-xs uppercase tracking-wider">
                    17 Covered Bonedi Bari Destinations:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-stone-700">
                    {event.bonediList.map((item: string, idx: number) => (
                      <div key={idx} className="flex items-center gap-1.5">
                        <span className="w-4 h-4 rounded-full bg-terracotta/10 text-terracotta font-bold text-[9px] flex items-center justify-center flex-shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-4 bg-sand/20 border-t lg:border-t-0 lg:border-l border-sand p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-terracotta block">
                  PASS PRICE / PER HEAD
                </span>
                <div className="space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-serif font-bold text-terracotta">
                      {event.priceVeg}
                    </span>
                    <span className="text-xs text-stone-600 font-bold">(Veg Pass)</span>
                  </div>
                  {event.priceNonVeg !== event.priceVeg && (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-serif font-bold text-moss-dark">
                        {event.priceNonVeg}
                      </span>
                      <span className="text-xs text-stone-600 font-bold">(Non-Veg Pass)</span>
                    </div>
                  )}
                </div>

                <div className="bg-white p-4 rounded-2xl border border-sand space-y-2 text-xs text-stone-600">
                  <p className="font-bold text-moss-dark flex items-center gap-1.5">
                    <Utensils className="w-3.5 h-3.5 text-terracotta" /> Inclusive Food Menu
                  </p>
                  <p className="text-[11px] leading-relaxed">{event.food}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-sand">
                <button
                  type="button"
                  onClick={() => {
                    const msg = encodeURIComponent(
                      `Hi Chuti Chuti! I want to book passes for "${event.title}". Please share details and seat availability.`
                    );
                    window.open(`https://wa.me/919830072946?text=${msg}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3.5 px-4 rounded-2xl transition shadow-md text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Reserve Passes on WhatsApp
                </button>

                <a
                  href="tel:+919830072946"
                  className="w-full flex items-center justify-center gap-2 border border-moss-dark/20 text-moss-dark hover:bg-sand font-semibold py-2.5 px-4 rounded-2xl transition text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-terracotta" />
                  Call Desk: +91 98300 72946
                </a>
              </div>
            </div>
          </div>
          ))
        )}
      </div>
    </div>
  );
}
