'use client';

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function Navbar() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUserEmail(session?.user?.email ?? null);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUserEmail(session?.user?.email ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const isLoggedIn = !!userEmail;
  const userName = userEmail ? userEmail.split("@")[0] : "Traveler";

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setUserEmail(null);
    router.push("/");
    router.refresh();
  };

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
            :global(.group:hover) .brand-text-pan {
              animation: panRightHover 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
            @keyframes panRightHover {
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
          <Link href="/events" className="hover:text-terracotta transition-colors">Events &amp; Parikramas</Link>
          <Link href="/custom-itinerary" className="hover:text-terracotta transition-colors">Custom Itinerary</Link>
          <Link href="/about" className="hover:text-terracotta transition-colors">About Us</Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-2.5">
          {isLoggedIn ? (
            <>
              <Link
                href="/profile"
                className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 font-bold text-xs hover:border-moss-dark hover:text-moss-dark hover:bg-sand/40 transition-all"
              >
                {userName.split(" ")[0]}
              </Link>
              <button
                type="button"
                onClick={handleSignOut}
                className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 font-bold text-xs hover:border-moss-dark hover:text-moss-dark hover:bg-sand/40 transition-all"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 font-bold text-xs hover:border-moss-dark hover:text-moss-dark hover:bg-sand/40 transition-all"
              >
                Login
              </Link>
              <Link
                href="/login?mode=signup"
                className="px-4 py-2 rounded-full border border-stone-300 text-stone-700 font-bold text-xs hover:border-moss-dark hover:text-moss-dark hover:bg-sand/40 transition-all"
              >
                Sign Up
              </Link>
            </>
          )}

          <Link
            href="/tours"
            className="px-4 py-2 rounded-full bg-moss-dark border border-moss-dark text-white font-bold text-xs hover:bg-moss-dark/90 transition-all shadow-sm"
          >
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}
