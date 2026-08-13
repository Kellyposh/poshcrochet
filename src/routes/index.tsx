import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Shop } from "@/components/Shop";
import { CustomOrder } from "@/components/CustomOrder";
import { Reviews } from "@/components/Reviews";
import { Footer } from "@/components/Footer";

const title = "Kellyposh Crochet | Handmade Crochet in Minna, Nigeria";
const description =
  "Shop handmade crochet bags, tops, beanies and baby sets from Kellyposh Crochet in Minna. Order instantly on WhatsApp or request a custom piece.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Shop />
        <CustomOrder />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}
