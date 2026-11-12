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
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white transition-colors hover:border-zinc-400">
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {badge && (
            <span className="mb-3 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
              {badge}
            </span>
          )}
          <h2 className="mb-1 line-clamp-2 text-2xl font-bold text-zinc-950">
            {title}
          </h2>
          <p className="mb-4 text-sm text-zinc-500">{subtitle}</p>

          <div className="mb-6 space-y-2 text-sm text-zinc-600">
            <p>
              <span className="font-semibold text-zinc-950">Duration:</span> {duration}
            </p>
            <p>
              <span className="font-semibold text-zinc-950">Pickup:</span> {pickup}
            </p>
          </div>

          <div className="mb-6 border-t border-zinc-200 pt-4">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-zinc-400">
              Key Highlights
            </p>
            <ul className="space-y-1 text-xs text-zinc-600">
              {highlights.slice(0, 3).map((item, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-zinc-400">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between border-t border-zinc-200 pt-4">
          <div>
            <span className="block text-xs text-zinc-400">Starting from</span>
            <span className="text-xl font-bold text-zinc-950">{price}</span>
          </div>
          <Link
            href={`/tours/${slug}`}
            className="rounded-full bg-zinc-950 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </article>
  );
}
