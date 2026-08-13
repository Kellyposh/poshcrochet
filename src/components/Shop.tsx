import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export function Shop() {
  return (
    <section id="shop" className="scroll-mt-20 bg-secondary/50 px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          Our handmade collection
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Tap any piece to order instantly on WhatsApp.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
