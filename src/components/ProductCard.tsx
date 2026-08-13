import { MessageCircle } from "lucide-react";
import { StarRating } from "@/components/StarRating";
import { formatNaira, type Product } from "@/data/products";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export function ProductCard({ product }: { product: Product }) {
  const orderLink = buildWhatsAppLink(
    `Hello Kellyposh Crochet! I'd like to order the ${product.name} (${formatNaira(product.price)}).`,
  );

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1">
      <img
        src={product.image}
        alt={product.name}
        width={800}
        height={800}
        loading="lazy"
        className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {product.category}
        </p>
        <h3 className="font-display text-lg leading-snug text-foreground">
          {product.name}
        </h3>
        <StarRating rating={product.rating} />
        <p className="mt-1 text-lg font-semibold text-foreground">
          {formatNaira(product.price)}
        </p>
        <a
          href={orderLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-4 w-4" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
