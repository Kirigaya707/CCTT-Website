'use client';

import React, { useState } from 'react';
import { CheckCircle, Star } from 'lucide-react';

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(5);

  if (submitted) {
    return <div className="max-w-2xl mx-auto px-6 py-16"><div className="bg-white p-8 rounded-3xl border border-emerald-200 text-center space-y-4 shadow-sm"><CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" /><h1 className="text-2xl font-serif font-bold text-[#0D223A]">Thank You!</h1><p className="text-xs text-[#0D223A]/80">Your feedback helps us refine our trips and experiences.</p></div></div>;
  }

  return <div className="max-w-2xl mx-auto px-6 py-16"><form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="bg-white p-8 rounded-3xl border border-[#0D223A]/10 shadow-sm space-y-6 text-xs"><div><h1 className="text-2xl font-serif font-bold text-[#0D223A]">Share Your Experience</h1><p className="text-[#0D223A]/70 mt-1">Tell us about your recent trip with Chuti Chuti Tours &amp; Travels.</p></div><div><span className="block font-bold text-[#0D223A] mb-2">Rating</span><div className="flex gap-2">{[1, 2, 3, 4, 5].map((star) => <button key={star} type="button" onClick={() => setRating(star)} aria-label={`Rate ${star} stars`} className="p-1 focus:outline-none"><Star className={`w-6 h-6 ${star <= rating ? 'fill-[#D49A3D] text-[#D49A3D]' : 'text-gray-300'}`} /></button>)}</div></div><div><label className="block font-bold text-[#0D223A] mb-1" htmlFor="review-name">Your Name</label><input id="review-name" required type="text" placeholder="e.g., Aritra Sen" className="w-full p-3 rounded-xl border border-[#0D223A]/20" /></div><div><label className="block font-bold text-[#0D223A] mb-1" htmlFor="review-text">Your Feedback</label><textarea id="review-text" required rows={4} placeholder="Describe the tour transport, guides, food, and overall arrangements..." className="w-full p-3 rounded-xl border border-[#0D223A]/20" /></div><button type="submit" className="w-full bg-[#0D223A] text-[#D49A3D] font-bold py-3.5 rounded-xl hover:bg-[#163558] transition-colors">Submit Verified Review</button></form></div>;
}
