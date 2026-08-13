import { Instagram, MapPin, MessageCircle } from "lucide-react";
import { buildWhatsAppLink, WHATSAPP_DISPLAY } from "@/lib/whatsapp";

const chatLink = buildWhatsAppLink("Hello Kellyposh Crochet!");

export function Footer() {
  return (
    <footer id="contact" className="scroll-mt-20 border-t border-border/60 px-5 py-14">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-display text-xl text-foreground">
              posh <span className="italic text-gold">crochet</span>
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Handmade crochet bags, tops, beanies and baby sets, crafted with love
              in Minna.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <a
              href="https://instagram.com/kellyposhcrochet"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              @kellyposhcrochet
            </a>
            <a
              href={chatLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 transition-colors hover:text-gold"
            >
              <MessageCircle className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
            <p className="flex items-center gap-2 text-foreground/80">
              <MapPin className="h-4 w-4" />
              Minna, Niger State, Nigeria
            </p>
          </div>

          <div className="text-sm text-muted-foreground md:text-right">
            <p className="font-semibold text-foreground">Opening hours</p>
            <p className="mt-2">Monday – Saturday</p>
            <p>9:00 AM – 7:00 PM</p>
          </div>
        </div>

        <p className="mt-10 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground">
          © Frontend Project 2026 — Kellyposh Crochet. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
