import { categories } from "@/data/products";

export function Categories() {
  return (
    <section id="categories" className="scroll-mt-20 px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          Shop by category
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Find the perfect handmade piece for you or someone you love.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#shop"
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-transform hover:-translate-y-1"
            >
              <img
                src={category.image}
                alt={`${category.name} crochet category`}
                width={800}
                height={800}
                loading="lazy"
                className="aspect-square w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <p className="py-4 text-center font-display text-lg text-foreground">
                {category.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
