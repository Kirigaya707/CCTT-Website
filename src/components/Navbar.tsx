'use client';

import Link from "next/link";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session, status } = useSession();
  const isLoggedIn = status === "authenticated" && !!session?.user?.email;
  const userName = session?.user?.name || session?.user?.email || "Traveler";

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3.5 group select-none">
          <Image
            src="/logo.jpg"
            alt="Chuti Chuti Icon"
            width={48}
            height={48}
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />
          <div className="flex flex-col justify-center brand-text-pan">
            <span className="font-serif text-2xl font-bold tracking-tight text-moss-dark leading-none">
              chuti chuti
            </span>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="h-[1px] w-3 bg-gold inline-block" />
              <span className="text-[9px] tracking-[0.2em] uppercase font-bold text-stone-600 leading-none">
                Tours &amp; Travels
              </span>
              <span className="h-[1px] w-3 bg-gold inline-block" />
            </div>
          </div>
          <style jsx>{`
            .brand-text-pan {
              animation: panRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            :global(.group:hover) .brand-text-pan,
            :global(.group:active) .brand-text-pan {
              animation: none;
              animation: panRight 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            }
            @keyframes panRight {
              0% {
                clip-path: inset(0 100% 0 0);
                opacity: 0;
                transform: translateX(-10px);
              }
              100% {
                clip-path: inset(0 0 0 0);
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-medium text-stone-700">
          <Link href="/" className="hover:text-terracotta transition-colors">Home</Link>
          <Link href="/tours" className="hover:text-terracotta transition-colors">Curated Trips</Link>
          <Link href="/custom-itinerary" className="hover:text-terracotta transition-colors">Custom Itinerary</Link>
        </nav>

        <div className="flex items-center gap-3">
          <a href="tel:+919830072946" className="hidden lg:inline-flex items-center justify-center px-4 py-2 rounded-full border border-terracotta text-terracotta hover:bg-terracotta hover:text-white transition-all text-xs font-semibold">Call: +91 98300 72946</a>

          {isLoggedIn ? (
            <>
              <Link href="/profile" className="px-3.5 py-2 rounded-full border border-moss-dark/20 text-moss-dark hover:bg-sand transition-all text-xs font-bold">
                {userName.split(" ")[0]}
              </Link>
              <button
                type="button"
                onClick={() => signOut({ callbackUrl: '/' })}
                className="px-3.5 py-2 rounded-full border border-moss-dark/20 text-moss-dark hover:bg-sand transition-all text-xs font-bold"
              >
                Sign Out
              </button>
            </>
          ) : (
            <Link href="/login" className="px-3.5 py-2 rounded-full border border-moss-dark/20 text-moss-dark hover:bg-sand transition-all text-xs font-bold">
              Login
            </Link>
          )}

          <Link href="/admin" className="px-3.5 py-2 rounded-full border border-terracotta text-terracotta hover:bg-terracotta/10 transition-all text-xs font-bold">
            Admin
          </Link>
          <Link href="/tours" className="px-4 py-2 rounded-full bg-terracotta hover:bg-terracotta-dark text-white font-medium text-xs transition-all shadow-sm">Book Now</Link>
        </div>
      </div>
    </header>
  );
}
