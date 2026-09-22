import TourCard from '@/components/TourCard';

export const metadata = {
  title: 'Curated Trips | Chuti Chuti Tours & Travels',
  description: 'Explore our curated package tours including Durga Puja Parikrama and Silk Route expeditions.',
};

const tours = [
  {
    slug: 'durga-puja-parikrama',
    title: '17 Bonedi Bari Durga Puja Parikrama',
    subtitle: 'Kolkata Heritage & Rajbari Culture Experience',
    duration: '1 Day (8:00 AM Departure)',
    pickup: 'Esplanade, Kolkata',
    price: '₹600 - ₹800',
    badge: 'Heritage Special',
    highlights: [
      '17 Traditional Bonedi Bari Durga Puja Visits',
      'AC Luxury Mini Bus Travel',
      'Grand Rajbari Lunch at Shobhabazar Rajbari',
    ],
  },
  {
    slug: 'himalayan-high-pass',
    title: 'Ancient Silk Route Expedition',
    subtitle: 'Zuluk, Nathang Valley & High Altitude Passes',
    duration: '5 Days / 4 Nights',
    pickup: 'NJP Railway Station / Siliguri',
    price: '₹4,500',
    badge: 'Mountain Travel',
    highlights: [
      'Zig-Zag roads of Zuluk & Thambi View Point',
      'Kupup Elephant Lake & Old Baba Mandir',
      'Traditional Homestay Experiences',
    ],
  },
  {
    slug: 'mindful-eco-retreat',
    title: 'Mindful Heritage & Eco Retreat',
    subtitle: 'Cultural Nature Trails & Peaceful Escapes',
    duration: '3 Days / 2 Nights',
    pickup: 'Kolkata Central Pickup',
    price: '₹2,200',
    badge: 'Eco Retreat',
    highlights: [
      'Guided Nature Walk & Organic Dining',
      'Heritage Village Sightseeing',
      'Comfortable Eco-Lodge Stay',
    ],
  },
];

export default function ToursPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs font-extrabold tracking-widest text-terracotta uppercase">
          Handcrafted Journeys
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif font-bold text-moss-dark">
          Curated Travel Packages
        </h1>
        <p className="text-stone-600 text-base sm:text-lg">
          Discover handpicked cultural heritage tours and scenic travel routes across Eastern India.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tours.map((tour) => (
          <TourCard key={tour.slug} {...tour} />
        ))}
      </div>
    </div>
  );
}