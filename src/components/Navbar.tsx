import { useState } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const links = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "Custom Order", href: "#custom-order" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const cartLink = buildWhatsAppLink(
  "Hello Kellyposh Crochet! I'd like to place an order.",
);

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#home" className="font-display text-xl tracking-tight text-foreground">
          posh <span className="italic text-gold">crochet</span>
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={cartLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Order on WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft transition-transform hover:scale-105"
          >
            <ShoppingBag className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="space-y-1 border-t border-border/60 px-5 pb-4 pt-2 md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-3 py-2 text-sm font-medium text-foreground/80 hover:bg-secondary"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
