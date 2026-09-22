import React from "react";
import { Award, Compass, HeartHandshake, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "About Us | Chuti Chuti Tours & Travels",
  description: "Learn about our travel philosophy: Slow down. Breathe. Reset.",
};

const values = [
  { icon: Compass, title: "Curated Routes", text: "Every path is handpicked for authentic scenery and cultural depth." },
  { icon: ShieldCheck, title: "Comfort First", text: "Thoughtful transport, trusted stays, and clear coordination." },
  { icon: HeartHandshake, title: "Local Connection", text: "Passionate guides help each place feel personal and alive." },
  { icon: Award, title: "Meaningful Memories", text: "We design trips that stay with you long after you return home." },
];

export default function AboutPage() {
  return <div className="max-w-5xl mx-auto px-6 py-16 space-y-16"><div className="text-center space-y-4 max-w-3xl mx-auto"><span className="text-xs font-bold uppercase tracking-widest text-[#D49A3D]">Our Philosophy</span><h1 className="text-4xl font-serif font-bold text-[#0D223A]">Slow down. Breathe. Reset.</h1><p className="text-sm text-[#0D223A]/80 leading-relaxed">In Bengali, <em>Chuti</em> means a break: a pause from routine to recharge, explore, and create lifelong memories. We turn ordinary vacations into handcrafted getaways.</p></div><div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-8 sm:p-12 rounded-3xl border border-[#0D223A]/10 shadow-sm"><div className="space-y-4"><h2 className="text-2xl font-serif font-bold text-[#0D223A]">Handcrafted Travel, Not Generic Tours</h2><p className="text-xs text-[#0D223A]/80 leading-relaxed">Based in Kolkata, <strong>Chuti Chuti Tours &amp; Travels</strong> specializes in Himalayan high-pass expeditions, heritage walks across Bengal, and serene retreats. We focus on safety, comfortable transport, and passionate local tour curators.</p></div><div className="bg-[#F9F5EC] p-6 rounded-2xl border border-[#0D223A]/10 space-y-3 text-xs font-medium text-[#0D223A]"><p>📍 <strong>Base:</strong> Esplanade / Kolkata, West Bengal</p><p>🚌 <strong>Fleet:</strong> AC Luxury Mini Buses &amp; 4x4 Offroad Vehicles</p><p>⭐ <strong>Specialties:</strong> Cultural Heritage Trails &amp; Mountain Expeditions</p></div></div><div className="grid grid-cols-1 sm:grid-cols-2 gap-5">{values.map(({ icon: Icon, title, text }) => <div key={title} className="bg-[#0D223A] text-[#F9F5EC] p-6 rounded-2xl"><Icon className="w-8 h-8 text-[#D49A3D] mb-4" /><h2 className="font-serif font-bold text-lg mb-2">{title}</h2><p className="text-xs text-[#F9F5EC]/70 leading-relaxed">{text}</p></div>)}</div></div>;
}
