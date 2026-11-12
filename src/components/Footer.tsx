import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white pt-12 pb-8 text-zinc-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Chuti Chuti Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="font-serif text-2xl font-bold tracking-tight text-zinc-950">
              chuti chuti
            </span>
          </div>
          <p className="text-xs text-stone-600 leading-relaxed">
            Slow, soulful journeys across Bengal &amp; beyond - crafted with authentic regional care and unhurried peace.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-xs text-stone-600">
            <li><Link href="/" className="hover:text-stone-900 transition">Home</Link></li>
            <li><Link href="/tours" className="hover:text-stone-900 transition">Curated Trips</Link></li>
            <li><Link href="/events" className="hover:text-stone-900 transition">Events &amp; Parikramas</Link></li>
            <li><Link href="/custom-itinerary" className="hover:text-stone-900 transition">Custom Itinerary</Link></li>
            <li><Link href="/about" className="hover:text-stone-900 transition">About Us</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">Account &amp; Hub</h4>
          <ul className="space-y-2 text-xs text-stone-600">
            <li><Link href="/profile" className="hover:text-stone-900 transition">Traveler Profile</Link></li>
            <li><Link href="/admin" className="hover:text-stone-900 transition">Admin Portal</Link></li>
            <li><Link href="/login" className="hover:text-stone-900 transition">Member Login</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-xs text-stone-600">
          <h4 className="font-serif font-bold text-stone-900 text-sm uppercase tracking-wider">Contact Us</h4>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-stone-700 flex-shrink-0" />
            <span>
              <a href="tel:+919830072946" className="hover:text-stone-900 transition">+91 9830072946</a> / 8170036430 / 9073029080
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-stone-700 flex-shrink-0" />
            <a href="mailto:chutichutitours@gmail.com" className="hover:text-stone-900 transition">chutichutitours@gmail.com</a>
          </p>
          <p className="flex items-start gap-2 pt-1">
            <MapPin className="w-3.5 h-3.5 text-stone-700 flex-shrink-0 mt-0.5" />
            <span>Kolkata HQ &amp; Durgapur Desk</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-zinc-200 pt-6 text-center text-xs text-zinc-500">
        <p>© 2026 Chuti Chuti Tours &amp; Travels. All rights reserved.</p>
      </div>
    </footer>
  );
}
