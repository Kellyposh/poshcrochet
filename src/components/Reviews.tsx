import { StarRating } from "@/components/StarRating";

const reviews = [
  {
    name: "Aisha Bello",
    city: "Abuja",
    rating: 5,
    text: "My tote bag is even prettier in person. The stitching is so neat and it arrived beautifully packaged.",
  },
  {
    name: "Zainab Musa",
    city: "Minna",
    rating: 5,
    text: "I ordered a custom cardigan and Kelly got the colour exactly right. I get compliments every single time.",
  },
  {
    name: "Halima Yusuf",
    city: "Minna",
    rating: 4.5,
    text: "The baby set I bought for my niece is so soft and warm. Ordering on WhatsApp was quick and easy.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="scroll-mt-20 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          Loved by our customers
        </h2>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="rounded-3xl bg-card p-7 shadow-soft"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-5 font-display text-base text-foreground">
                {review.name}
                <span className="block text-xs font-sans text-muted-foreground">
                  {review.city}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
