'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';
import { PlusCircle, List, Send, RefreshCw, CheckCircle2 } from 'lucide-react';

export default function AdminDashboardPage() {
  const [activeTab, setActiveTab] = useState<'create' | 'bookings' | 'custom'>('create');
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState('');

  // Form State for New Tour Listing
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [duration, setDuration] = useState('');
  const [pickup, setPickup] = useState('');
  const [priceVeg, setPriceVeg] = useState('');
  const [priceNonVeg, setPriceNonVeg] = useState('');
  const [badge, setBadge] = useState('Heritage Special');
  const [highlights, setHighlights] = useState('');
  const [totalSeats, setTotalSeats] = useState('30');

  // Fetched Records
  const [bookings, setBookings] = useState<any[]>([]);
  const [customRequests, setCustomRequests] = useState<any[]>([]);

  useEffect(() => {
    if (activeTab === 'bookings') fetchBookings();
    if (activeTab === 'custom') fetchCustomRequests();
  }, [activeTab]);

  const fetchBookings = async () => {
    setLoading(true);
    const { data } = await supabase.from('booking_requests').select('*').order('created_at', { ascending: false });
    if (data) setBookings(data);
    setLoading(false);
  };

  const fetchCustomRequests = async () => {
    setLoading(true);
    const { data } = await supabase.from('custom_requests').select('*').order('created_at', { ascending: false });
    if (data) setCustomRequests(data);
    setLoading(false);
  };

  const handleCreateTour = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg('');

    const highlightsArray = highlights.split('\n').filter((item) => item.trim() !== '');

    const { error } = await supabase.from('tours').insert([
      {
        slug: slug || title.toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        title,
        subtitle,
        duration,
        pickup,
        price_veg: Number(priceVeg) || 0,
        price_nonveg: Number(priceNonVeg) || 0,
        badge,
        highlights: highlightsArray,
        total_seats: Number(totalSeats) || 30,
        available_seats: Number(totalSeats) || 30,
        is_active: true,
      },
    ]);

    setLoading(false);
    if (!error) {
      setSuccessMsg('Tour package created successfully and is now live on the site!');
      setTitle('');
      setSlug('');
      setSubtitle('');
      setDuration('');
      setPickup('');
      setPriceVeg('');
      setPriceNonVeg('');
      setHighlights('');
    } else {
      alert('Error creating tour: ' + error.message);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 space-y-8 min-h-[85vh]">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-sand pb-6">
        <div>
          <span className="text-xs font-extrabold text-terracotta uppercase tracking-widest block">
            ADMIN PORTAL
          </span>
          <h1 className="text-3xl font-serif font-bold text-moss-dark">
            Chuti Chuti Operations Control
          </h1>
        </div>

        <div className="flex gap-2 bg-sand/50 p-1.5 rounded-2xl border border-sand text-xs font-bold">
          <button
            onClick={() => setActiveTab('create')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'create' ? 'bg-moss-dark text-gold shadow-sm' : 'text-stone-600 hover:text-moss-dark'
            }`}
          >
            + Add New Tour
          </button>
          <button
            onClick={() => setActiveTab('bookings')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'bookings' ? 'bg-moss-dark text-gold shadow-sm' : 'text-stone-600 hover:text-moss-dark'
            }`}
          >
            Seat Enquiries
          </button>
          <button
            onClick={() => setActiveTab('custom')}
            className={`px-4 py-2 rounded-xl transition ${
              activeTab === 'custom' ? 'bg-moss-dark text-gold shadow-sm' : 'text-stone-600 hover:text-moss-dark'
            }`}
          >
            Custom Itineraries
          </button>
        </div>
      </div>

      {activeTab === 'create' && (
        <div className="bg-white p-8 rounded-3xl border border-sand shadow-sm max-w-3xl space-y-6">
          <h2 className="text-xl font-serif font-bold text-moss-dark">
            Create Frontend Package Listing
          </h2>

          {successMsg && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-2xl text-xs flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> {successMsg}
            </div>
          )}

          <form onSubmit={handleCreateTour} className="space-y-4 text-xs">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Tour Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 17 Bonedi Bari Durga Puja Parikrama"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">URL Slug (Auto-generated if empty)</label>
                <input
                  type="text"
                  placeholder="e.g. bonedi-bari-durga-puja"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Subtitle / Tagline</label>
              <input
                type="text"
                placeholder="e.g. Kolkata Heritage & Rajbari Culture Experience"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Duration *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1 Day (8:00 AM Departure)"
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Pickup Spot *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Esplanade, Kolkata"
                  value={pickup}
                  onChange={(e) => setPickup(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Badge Tag</label>
                <select
                  value={badge}
                  onChange={(e) => setBadge(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta font-bold"
                >
                  <option>Heritage Special</option>
                  <option>Mountain Travel</option>
                  <option>Wildlife & Tea</option>
                  <option>Eco Retreat</option>
                  <option>Flagship Circuit</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block font-bold text-stone-700 mb-1">Veg Price (₹) *</label>
                <input
                  type="number"
                  required
                  placeholder="600"
                  value={priceVeg}
                  onChange={(e) => setPriceVeg(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Non-Veg Price (₹)</label>
                <input
                  type="number"
                  placeholder="800"
                  value={priceNonVeg}
                  onChange={(e) => setPriceNonVeg(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
              <div>
                <label className="block font-bold text-stone-700 mb-1">Total Seats *</label>
                <input
                  type="number"
                  required
                  value={totalSeats}
                  onChange={(e) => setTotalSeats(e.target.value)}
                  className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
                />
              </div>
            </div>

            <div>
              <label className="block font-bold text-stone-700 mb-1">Key Highlights (One line per bullet point)</label>
              <textarea
                rows={4}
                placeholder={'17 Traditional Bonedi Bari Visits\nAC Luxury Mini Bus Travel\nGrand Rajbari Lunch included'}
                value={highlights}
                onChange={(e) => setHighlights(e.target.value)}
                className="w-full bg-sand/30 border border-sand rounded-xl p-3 focus:outline-none focus:border-terracotta"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-terracotta hover:bg-terracotta-dark text-white font-bold py-3.5 rounded-xl transition shadow-sm text-sm"
            >
              {loading ? 'Publishing Package...' : 'Publish Tour Listing'}
            </button>
          </form>
        </div>
      )}

      {activeTab === 'bookings' && (
        <div className="bg-white p-6 rounded-3xl border border-sand shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-sand pb-4">
            <h2 className="text-xl font-serif font-bold text-moss-dark">Seat Booking Enquiries</h2>
            <button onClick={fetchBookings} className="text-xs text-terracotta font-bold flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-xs text-stone-500 py-4">Loading enquiries...</p>
          ) : bookings.length === 0 ? (
            <p className="text-xs text-stone-400 py-4">No package seat enquiries submitted yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-sand/50 text-moss-dark uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Tour</th>
                    <th className="p-3">Hub</th>
                    <th className="p-3">Guests</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand">
                  {bookings.map((b) => (
                    <tr key={b.id} className="hover:bg-sand/20">
                      <td className="p-3 font-medium text-stone-500">{new Date(b.created_at).toLocaleDateString()}</td>
                      <td className="p-3 font-bold text-moss-dark">{b.tour_title}</td>
                      <td className="p-3">{b.hub || 'Esplanade'}</td>
                      <td className="p-3 font-bold text-terracotta">{b.guests}</td>
                      <td className="p-3">
                        <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2 py-0.5 rounded-md uppercase">
                          {b.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {activeTab === 'custom' && (
        <div className="bg-white p-6 rounded-3xl border border-sand shadow-sm space-y-4">
          <div className="flex justify-between items-center border-b border-sand pb-4">
            <h2 className="text-xl font-serif font-bold text-moss-dark">Custom Itinerary Submissions</h2>
            <button onClick={fetchCustomRequests} className="text-xs text-terracotta font-bold flex items-center gap-1">
              <RefreshCw className="w-3.5 h-3.5" /> Refresh
            </button>
          </div>

          {loading ? (
            <p className="text-xs text-stone-500 py-4">Loading custom itineraries...</p>
          ) : customRequests.length === 0 ? (
            <p className="text-xs text-stone-400 py-4">No custom itineraries submitted yet.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-stone-700">
                <thead className="bg-sand/50 text-moss-dark uppercase text-[10px] font-bold">
                  <tr>
                    <th className="p-3">Date</th>
                    <th className="p-3">Hub</th>
                    <th className="p-3">Landscape</th>
                    <th className="p-3">Vehicle</th>
                    <th className="p-3">Guests / Nights</th>
                    <th className="p-3">Budget Target</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sand">
                  {customRequests.map((req) => (
                    <tr key={req.id} className="hover:bg-sand/20">
                      <td className="p-3 font-medium text-stone-500">{new Date(req.created_at).toLocaleDateString()}</td>
                      <td className="p-3 font-bold text-moss-dark capitalize">{req.hub}</td>
                      <td className="p-3">{req.landscape}</td>
                      <td className="p-3">{req.vehicle_type}</td>
                      <td className="p-3 font-bold text-stone-800">{req.guests} Guests / {req.nights}N</td>
                      <td className="p-3 font-bold text-terracotta">₹{req.estimated_budget}/guest</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
