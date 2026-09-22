import Link from "next/link";

export interface TourCardProps {
  slug?: string;
  title?: string;
  subtitle?: string;
  duration?: string;
  pickup?: string;
  price?: string;
  badge?: string;
  highlights?: string[];
  tour?: {
    slug: string;
    title: string;
    category?: string;
    transportType?: string;
    priceVeg?: number;
    pickupLocation?: string;
  };
}

export default function TourCard(props: TourCardProps) {
  const slug = props.slug || props.tour?.slug || "#";
  const title = props.title || props.tour?.title || "Curated Tour";
  const subtitle = props.subtitle || props.tour?.category || "Heritage Experience";
  const duration = props.duration || "1 Day Experience";
  const pickup = props.pickup || props.tour?.pickupLocation || "Kolkata Pickup";
  const price = props.price || (props.tour?.priceVeg ? `₹${props.tour.priceVeg}` : "₹600");
  const badge = props.badge || props.tour?.category || "Featured";
  const highlights = props.highlights || [
    "AC Luxury Transport Included",
    "Guided Heritage Sightseeing",
    "Traditional Regional Dining",
  ];

  return (
    <article className="bg-white rounded-2xl border border-sand shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {badge && (
            <span className="inline-block bg-terracotta/10 text-terracotta text-xs font-semibold px-3 py-1 rounded-full mb-3">
              {badge}
            </span>
          )}
          <h2 className="text-2xl font-serif font-bold text-moss-dark mb-1 line-clamp-2">
            {title}
          </h2>
          <p className="text-sm text-stone-500 mb-4">{subtitle}</p>

          <div className="space-y-2 mb-6 text-sm text-stone-600">
            <p>
              <span className="font-semibold text-moss-dark">Duration:</span> {duration}
            </p>
            <p>
              <span className="font-semibold text-moss-dark">Pickup:</span> {pickup}
            </p>
          </div>

          <div className="border-t border-sand pt-4 mb-6">
            <p className="text-xs font-semibold text-stone-400 uppercase tracking-wider mb-2">
              Key Highlights
            </p>
            <ul className="space-y-1 text-xs text-stone-600">
              {highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-terracotta">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-sand flex items-center justify-between mt-auto">
          <div>
            <span className="text-xs text-stone-400 block">Starting from</span>
            <span className="text-xl font-bold text-terracotta">{price}</span>
          </div>
          <Link
            href={`/tours/${slug}`}
            className="px-4 py-2 rounded-xl bg-moss hover:bg-moss-dark text-white text-sm font-medium transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
