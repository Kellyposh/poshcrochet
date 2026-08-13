import { Star, StarHalf } from "lucide-react";

export function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: full }).map((_, index) => (
        <Star key={index} className="h-4 w-4 fill-gold text-gold" />
      ))}
      {hasHalf && <StarHalf className="h-4 w-4 fill-gold text-gold" />}
      <span className="ml-1 text-xs text-muted-foreground">{rating.toFixed(1)}</span>
    </div>
  );
}
