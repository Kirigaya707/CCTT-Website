'use client';

import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';
import { User, Compass, Clock } from 'lucide-react';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const email = session?.user?.email || '';
  const [bookings, setBookings] = useState<any[]>([]);
  const [customs, setCustoms] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUserData() {
      if (!email) {
        setBookings([]);
        setCustoms([]);
        setLoading(false);
        return;
      }

      setLoading(true);
      const { data: bookingData } = await supabase
        .from('booking_requests')
        .select('*')
        .eq('user_email', email)
        .order('created_at', { ascending: false });

      const { data: customData } = await supabase
        .from('custom_requests')
        .select('*')
        .eq('user_email', email)
        .order('created_at', { ascending: false });

      if (bookingData) setBookings(bookingData);
      if (customData) setCustoms(customData);
      setLoading(false);
    }

    fetchUserData();
  }, [email]);

  if (status === 'loading') {
    return <div className="max-w-7xl mx-auto px-4 py-10 text-sm text-stone-500">Loading your profile…</div>;
  }

  if (status === 'unauthenticated' || !email) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif font-bold text-moss-dark mb-3">Your profile is waiting</h1>
        <p className="text-sm text-stone-600 mb-6">Sign in to view saved tour enquiries and custom itinerary requests.</p>
        <Link href="/login" className="inline-block px-5 py-3 rounded-xl bg-terracotta text-white font-bold text-xs shadow-sm hover:bg-terracotta-dark">
          Go to Login
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 min-h-[80vh]">
      <div className="bg-moss-dark text-cream rounded-3xl p-8 border border-gold/30 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-2xl bg-gold/20 border border-gold/40 flex items-center justify-center text-gold font-bold text-2xl">
            <User className="w-8 h-8" />
          </div>
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-gold">
              TRAVELER MEMBER
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              My Travel Dashboard
            </h1>
            <p className="text-xs text-cream/70">{email}</p>
          </div>
        </div>

        <Link
          href="/custom-itinerary"
          className="px-5 py-3 rounded-xl bg-terracotta hover:bg-terracotta-dark text-white font-bold text-xs transition shadow-sm"
        >
          + Plan New Custom Trip
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-3xl border border-sand shadow-sm space-y-4">
          <h2 className="text-xl font-serif font-bold text-moss-dark border-b border-sand pb-3">
            Package Seat Enquiries
          </h2>

          {loading ? (
            <p className="text-xs text-stone-500 py-4">Fetching enquiries...</p>
          ) : bookings.length === 0 ? (
            <div className="text-center py-8 space-y-2">
              <Compass className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="text-xs text-stone-500">No package seat enquiries found.</p>
              <Link href="/tours" className="text-xs text-terracotta font-bold hover:underline inline-block">
                Explore Package Tours →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {bookings.map((b) => (
                <div key={b.id} className="p-4 rounded-2xl bg-sand/30 border border-sand space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-moss-dark text-sm">{b.tour_title}</h3>
                    <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                      {b.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-4 text-xs text-stone-600">
                    <span><strong>Guests:</strong> {b.guests}</span>
                    <span><strong>Hub:</strong> {b.hub || 'Esplanade'}</span>
                    <span className="text-stone-400">{new Date(b.created_at).toLocaleDateString()}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-3xl border border-sand shadow-sm space-y-4">
          <h2 className="text-xl font-serif font-bold text-moss-dark border-b border-sand pb-3">
            Custom Itinerary Requests
          </h2>

          {loading ? (
            <p className="text-xs text-stone-500 py-4">Fetching custom requests...</p>
          ) : customs.length === 0 ? (
            <div className="text-center py-8 space-y-2">
              <Clock className="w-8 h-8 text-stone-300 mx-auto" />
              <p className="text-xs text-stone-500">No custom itineraries submitted yet.</p>
              <Link href="/custom-itinerary" className="text-xs text-terracotta font-bold hover:underline inline-block">
                Build Custom Itinerary →
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {customs.map((c) => (
                <div key={c.id} className="p-4 rounded-2xl bg-sand/30 border border-sand space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-serif font-bold text-moss-dark text-sm">{c.landscape}</h3>
                    <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                      {c.status}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-3 text-xs text-stone-600">
                    <span><strong>Hub:</strong> {c.hub}</span>
                    <span><strong>Vehicle:</strong> {c.vehicle_type}</span>
                    <span><strong>Group:</strong> {c.guests} Guests ({c.nights}N)</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
