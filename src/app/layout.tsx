import "./globals.css";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Chuti Chuti Tours & Travels | Heritage & Curated Experiences",
  description: "Explore heritage tours, Bonedi Bari Durga Puja Parikrama, and custom itineraries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-cream text-stone-900 antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <footer className="bg-moss-dark text-sand py-10 border-t border-moss">
          <div className="max-w-7xl mx-auto px-4 text-center space-y-3">
            <p className="font-serif text-xl text-gold-light">
              Chuti Chuti Tours & Travels
            </p>
            <p className="text-sm text-stone-300">
              Esplanade Pickup Point (8:00 AM Departure) | Call: +91 9830072946, 8170036430, 9073029080
            </p>
            <p className="text-xs text-stone-400">
              © {new Date().getFullYear()} Chuti Chuti Tours & Travels. All rights reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
