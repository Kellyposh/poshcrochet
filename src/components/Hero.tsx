import { MessageCircle } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const chatLink = buildWhatsAppLink(
  "Hello Kellyposh Crochet! I saw your website and I'd love to know more.",
);

export function Hero() {
  return (
    <section id="home" className="scroll-mt-20 px-5 pb-16 pt-12 md:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <div>
          <span className="inline-block rounded-full bg-accent px-4 py-1 text-xs font-semibold uppercase tracking-widest text-accent-foreground">
            Handmade in Minna, Nigeria
          </span>
          <h1 className="mt-5 font-display text-4xl leading-tight text-foreground md:text-6xl">
            Soft, luxury crochet made stitch by stitch
          </h1>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            Kellyposh Crochet creates warm, timeless bags, tops, beanies and baby
            sets — each one crocheted by hand with love and delivered nationwide.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#shop"
              className="rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              Shop Now
            </a>
            <a
              href={chatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground shadow-soft transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-accent/50 blur-2xl" />
          <img
            src={heroImage}
            alt="Handmade crochet tote bag with yarn balls and crochet hooks"
            width={1400}
            height={1000}
            className="w-full rounded-[2rem] object-cover shadow-lift"
          />
        </div>
      </div>
    </section>
  );
}
