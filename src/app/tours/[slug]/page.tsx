'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPin,
  Calendar,
  Clock,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  PhoneCall,
  MessageSquare,
  Users,
  Compass,
} from 'lucide-react';

export default function TourDetailsPage({ params }: { params: { slug: string } }) {
  const [guests, setGuests] = useState(2);
  const [hub, setHub] = useState('Kolkata (CCU / Howrah)');

  const basePricePerPerson = 15999;
  const totalPrice = basePricePerPerson * guests;

  return (
    <div className="bg-cream min-h-screen pb-16">
      {/* Top Hero Banner */}
      <div className="relative bg-moss-dark text-cream py-16 px-4 sm:px-6 lg:px-8 border-b border-gold/30">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-terracotta text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              HIMALAYAN HIGH-PASS
            </span>
            <span className="bg-gold/20 text-gold text-xs font-bold px-3 py-1 rounded-full border border-gold/40">
              13,200 Ft (Kupup Lake)
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white">
            Old Silk Route & Zuluk Himalayan Loop
          </h1>
          <p className="text-cream/80 text-sm sm:text-base max-w-3xl leading-relaxed">
            Ascend the legendary 32-hairpin bends, breathe alpine serenity at Gnathang Valley (13,000 ft), and slumber beside whispering pine retreats in Reshi Khola. Curated with authentic homestays and hot Bengali meals.
          </p>

          <div className="flex flex-wrap items-center gap-6 pt-4 text-xs text-cream/70 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-gold" /> Pickup & Drop: Kolkata (Howrah / Sealdah) or Durgapur
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-4 h-4 text-gold" /> Protected Area Permits Included
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Highlight Pills Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-10">
          <div className="bg-white p-4 rounded-2xl border border-sand text-center">
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Duration</span>
            <span className="text-sm font-serif font-bold text-moss-dark">5N / 6D</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-sand text-center">
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Vehicle</span>
            <span className="text-sm font-serif font-bold text-moss-dark">Bolero / 4WD SUV</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-sand text-center">
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Stay</span>
            <span className="text-sm font-serif font-bold text-moss-dark">Wooden Homestays</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-sand text-center">
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Food</span>
            <span className="text-sm font-serif font-bold text-moss-dark">Warm Bengali Meals</span>
          </div>
          <div className="bg-white p-4 rounded-2xl border border-sand text-center col-span-2 sm:col-span-1">
            <span className="text-[10px] text-stone-400 font-bold uppercase block">Permits</span>
            <span className="text-sm font-serif font-bold text-moss-dark">Protected Area Pass</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Expedition Details */}
          <div className="lg:col-span-8 space-y-10">
            {/* Overview */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand space-y-4 shadow-sm">
              <span className="text-xs font-bold text-terracotta uppercase tracking-widest block">
                EXPEDITION OVERVIEW
              </span>
              <h2 className="text-2xl font-serif font-bold text-moss-dark">
                Where the Clouds Rest: Tracing the Ancient Tibetan Trade Track
              </h2>
              <p className="text-stone-600 text-sm sm:text-base leading-relaxed">
                Perched on the eastern edge of Sikkim adjacent to the Chinese border, Zuluk was once a transit hub on the historic Silk Route connecting Kalimpong to Lhasa. For generations of Bengal wanderers, this circuit has represented the rawest communion with high-altitude silence.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Our route experts directly from Kolkata arrange seamless transit via 4x4 SUVs or Scorpio/Boleros from Siliguri/Durgapur, moving from the canopy pine woods of Sillery Gaon through the vertiginous hairpins of Thambi Viewpoint, onwards to the wind-swept high plateau of Gnathang, and winding down to the murmuring riverbeds of Reshi.
              </p>
            </section>

            {/* Day by Day Itinerary */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand space-y-6 shadow-sm">
              <div className="border-b border-sand pb-4">
                <span className="text-xs font-bold text-terracotta uppercase tracking-widest block">
                  THE ROUTE
                </span>
                <h2 className="text-2xl font-serif font-bold text-moss-dark">
                  Curated Day-by-Day Expedition
                </h2>
              </div>

              <div className="space-y-6">
                {[
                  {
                    day: 'DAY 1',
                    title: 'NJP / Siliguri to Lingtam & Sillery Gaon',
                    desc: 'Assemble after breakfast at NJP Railway station by 09:30 AM. Scenic drive through Kalimpong pine woods. Evening leisure walk around the village grounds and ridge peaks.',
                    stay: 'Sillery Gaon Homestay',
                  },
                  {
                    day: 'DAY 2',
                    title: 'Ascent to Zuluk & The 32-Zig Zag Hairpins',
                    desc: 'Early morning driver check and permit verification at Rongli. Drive into Zuluk village, winding past the famous 32-hairpin bends. Sunset tea on the balcony overlooking snow peaks.',
                    stay: 'Zuluk Wooden Lodge',
                  },
                  {
                    day: 'DAY 3',
                    title: 'Sunrise at Thambi & Expedition to Gnathang',
                    desc: 'Drive at 05:00 AM for sunrise at Thambi Viewpoint (11,200 ft). Continue past Kupup Elephant Lake, Old Baba Mandir, and the historical battlegrounds of Gnathang.',
                    stay: 'Gnathang Valley Stay',
                  },
                  {
                    day: 'DAY 4',
                    title: 'Descent to the Crystal Waters of Reshi Khola',
                    desc: 'Winding downhill drive to the border river of Reshi Khola. Dip your feet in ice-cold crystal streams, evening riverside campfire, and stars under clear mountain skies.',
                    stay: 'Reshi Riverside Eco Camp',
                  },
                  {
                    day: 'DAY 5-6',
                    title: 'Reshi to NJP & Return Rail to Kolkata',
                    desc: 'Leisurely morning breakfast by the river before driving back to NJP/Siliguri station for overnight train journey.',
                    stay: 'Overnight Train Transit',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <span className="flex-shrink-0 bg-terracotta text-white font-bold text-xs px-2.5 py-1 rounded-md mt-1">
                      {item.day}
                    </span>
                    <div className="space-y-1">
                      <h3 className="font-serif font-bold text-moss-dark text-base">
                        {item.title}
                      </h3>
                      <p className="text-xs text-stone-600 leading-relaxed">{item.desc}</p>
                      <span className="inline-block text-[11px] font-semibold text-moss bg-moss/10 px-2 py-0.5 rounded-md mt-1">
                        Stay: {item.stay}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Included & Excluded */}
            <section className="bg-white p-6 sm:p-8 rounded-3xl border border-sand space-y-6 shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-moss-dark border-b border-sand pb-4">
                What Is Covered & What Is Not
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-moss-dark uppercase tracking-wider flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Everything Included
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-600">
                    <li>✓ <strong>Transportation:</strong> Dedicated Bolero/4WD vehicle for full circuit including all mountain transfers.</li>
                    <li>✓ <strong>Accommodations:</strong> 5 Nights local homestay/wooden lodge stays on twin/triple sharing.</li>
                    <li>✓ <strong>All Meals:</strong> Fresh cooked breakfast, warm lunch, evening tea with snacks, and dinner (Bengali options).</li>
                    <li>✓ <strong>Military Permits:</strong> Sikkim Restricted Area Inner Line permits and paperwork processed.</li>
                    <li>✓ <strong>Driver Allowance:</strong> Driver lodging, cooking expenses, toll & fuel fees included.</li>
                  </ul>
                </div>

                <div className="space-y-3">
                  <h3 className="font-bold text-sm text-stone-500 uppercase tracking-wider flex items-center gap-2">
                    <XCircle className="w-4 h-4 text-rose-500" /> Not Included
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-500">
                    <li>• Rail or air tickets from Kolkata to NJP (Can be added on request).</li>
                    <li>• Personal laundry, room heaters, or extra snacks.</li>
                    <li>• Optional entry passes to specific museum spots.</li>
                    <li>• Expenses caused by unexpected landslides or weather roadblocks beyond control.</li>
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sticky Booking Box */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand shadow-xl sticky top-24 space-y-6">
              <div className="border-b border-sand pb-4">
                <span className="text-xs text-stone-400 font-semibold uppercase block">
                  Per Person Rate
                </span>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-3xl font-serif font-bold text-terracotta">
                    ₹{basePricePerPerson.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-stone-500">/ guest</span>
                </div>
                <p className="text-[11px] text-emerald-700 font-semibold mt-1">
                  ✓ All meals, stays & permits included
                </p>
              </div>

              {/* Form Options */}
              <div className="space-y-4 text-xs">
                <div>
                  <label className="block text-stone-500 font-semibold mb-1">
                    Select Your Boarding Hub
                  </label>
                  <select
                    value={hub}
                    onChange={(e) => setHub(e.target.value)}
                    className="w-full bg-sand/40 border border-sand rounded-xl p-2.5 font-bold text-moss-dark focus:outline-none"
                  >
                    <option>Kolkata (CCU / Howrah)</option>
                    <option>Durgapur (City Centre)</option>
                    <option>Siliguri / NJP Railway Station</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-500 font-semibold mb-1">
                    Select Departure Month
                  </label>
                  <select className="w-full bg-sand/40 border border-sand rounded-xl p-2.5 font-bold text-moss-dark focus:outline-none">
                    <option>October 2026 (Autumn/Puja)</option>
                    <option>November 2026</option>
                    <option>December 2026 (Winter Snow)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-stone-500 font-semibold mb-1">
                    Number of Travelers
                  </label>
                  <div className="flex items-center justify-between bg-sand/40 border border-sand p-2 rounded-xl">
                    <span className="font-bold text-moss-dark px-2">Guests:</span>
                    <div className="flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => setGuests((g) => Math.max(1, g - 1))}
                        className="w-7 h-7 rounded-lg bg-white border font-bold text-moss-dark hover:bg-stone-100"
                      >
                        -
                      </button>
                      <span className="font-bold font-serif text-base text-moss-dark">{guests}</span>
                      <button
                        type="button"
                        onClick={() => setGuests((g) => g + 1)}
                        className="w-7 h-7 rounded-lg bg-white border font-bold text-moss-dark hover:bg-stone-100"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Price Summary */}
              <div className="pt-2 border-t border-sand">
                <div className="flex justify-between items-baseline mb-1">
                  <span className="text-xs text-stone-500">Total Calculation:</span>
                  <span className="text-2xl font-serif font-bold text-terracotta">
                    ₹{totalPrice.toLocaleString('en-IN')}
                  </span>
                </div>
                <p className="text-[10px] text-stone-400">
                  Pay 25% now to hold seats & permits, rest before departure.
                </p>
              </div>

              <div className="space-y-3">
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      const { supabase } = await import('@/lib/supabase');
                      await supabase.from('booking_requests').insert([
                        {
                          user_email: 'guest@chutichuti.in',
                          tour_slug: params.slug || 'durga-puja-parikrama',
                          tour_title: 'Old Silk Route & Zuluk Himalayan Loop',
                          guests: guests,
                          hub: hub,
                          status: 'pending',
                        },
                      ]);
                    } catch (err) {
                      console.error('Supabase booking record error:', err);
                    }

                    const message = encodeURIComponent(
                      `Hi Chuti Chuti! I want to book a tour.\nTour: Old Silk Route & Zuluk Himalayan Loop\nGuests: ${guests}\nBoarding Hub: ${hub}\nEstimated Total: ₹${totalPrice.toLocaleString('en-IN')}`
                    );
                    window.open(`https://wa.me/919830072946?text=${message}`, '_blank');
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3.5 px-4 rounded-2xl transition shadow-md text-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  Reserve Spot Now
                </button>

                <a
                  href="tel:+919830072946"
                  className="w-full flex items-center justify-center gap-2 border border-moss-dark/20 text-moss-dark hover:bg-sand font-semibold py-2.5 px-4 rounded-2xl transition text-xs"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-terracotta" />
                  Enquire on WhatsApp
                </a>
              </div>

              <div className="bg-sand/50 p-3 rounded-xl text-[11px] text-stone-600 space-y-1">
                <p><strong>Hotline:</strong> +91 98300 72946 / 81700 36430</p>
                <p><strong>Desk:</strong> Kolkata HQ & Durgapur City Centre</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}