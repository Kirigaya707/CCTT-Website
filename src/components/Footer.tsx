import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-moss-dark text-cream border-t border-gold/30 pt-12 pb-8">
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
            <span className="font-serif text-2xl font-bold text-white tracking-tight">
              chuti chuti
            </span>
          </div>
          <p className="text-xs text-cream/70 leading-relaxed">
            Slow, soulful journeys across Bengal &amp; beyond - crafted with authentic regional care and unhurried peace.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif font-bold text-gold text-sm uppercase tracking-wider">Explore</h4>
          <ul className="space-y-2 text-xs text-cream/80">
            <li><Link href="/" className="hover:text-gold transition">Home</Link></li>
            <li><Link href="/tours" className="hover:text-gold transition">Curated Trips</Link></li>
            <li><Link href="/custom-itinerary" className="hover:text-gold transition">Custom Itinerary</Link></li>
            <li><Link href="/about" className="hover:text-gold transition">About Us</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="font-serif font-bold text-gold text-sm uppercase tracking-wider">Account &amp; Hub</h4>
          <ul className="space-y-2 text-xs text-cream/80">
            <li><Link href="/profile" className="hover:text-gold transition">Traveler Profile</Link></li>
            <li><Link href="/admin" className="hover:text-gold transition">Admin Portal</Link></li>
            <li><Link href="/login" className="hover:text-gold transition">Member Login</Link></li>
          </ul>
        </div>

        <div className="space-y-3 text-xs text-cream/80">
          <h4 className="font-serif font-bold text-gold text-sm uppercase tracking-wider">Contact Us</h4>
          <p className="flex items-center gap-2">
            <Phone className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <span>
              <a href="tel:+919830072946" className="hover:text-gold transition">+91 9830072946</a> / 8170036430 / 9073029080
            </span>
          </p>
          <p className="flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-gold flex-shrink-0" />
            <a href="mailto:chutichutitours@gmail.com" className="hover:text-gold transition">chutichutitours@gmail.com</a>
          </p>
          <p className="flex items-start gap-2 pt-1">
            <MapPin className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
            <span>Kolkata HQ &amp; Durgapur Desk</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-white/10 pt-6 text-center text-xs text-cream/60">
        <p>© 2026 Chuti Chuti Tours &amp; Travels. All rights reserved.</p>
      </div>
    </footer>
  );
}
