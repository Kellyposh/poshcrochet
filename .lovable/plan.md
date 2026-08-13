# Kellyposh Crochet — Single Page Sales Website

A one-page, mobile-first showcase site for Kellyposh Crochet (Minna, Nigeria) where every purchase path leads to WhatsApp (+234 816 419 8386).

## Look and feel

- Cream background `#FFF8F0`, warm brown text `#5C4033`, peachy pink accent `#FFDAB9`
- Soft rounded cards, gentle shadows, generous spacing — luxury Pinterest aesthetic
- Elegant serif headings paired with a clean sans body
- Fully responsive: single column on phones, 2 columns on tablets, 4 on desktop

## Sections

1. **Navbar** — "posh crochet" logo, links (Home, Shop, Custom Order, Reviews, Contact), WhatsApp cart icon that opens a general WhatsApp chat. Mobile hamburger menu.
2. **Hero** — headline, short warm intro, "Shop Now" and "Chat on WhatsApp" buttons, crochet lifestyle image.
3. **Categories** — Bags, Tops, Beanies, Baby Sets as rounded image cards that scroll to the shop.
4. **Shop** — 8 product cards: photo, name, price in Naira, star rating, and "Order on WhatsApp" button that opens wa.me with the product name and price pre-filled.
5. **Custom Order Form** — Name, Item, Color, Size, Preferred Date. On submit it builds a formatted WhatsApp message and opens the chat. Required-field validation, no backend.
6. **Reviews** — 3 customer reviews from Abuja with names, star ratings, soft cards.
7. **Footer** — Instagram, WhatsApp, Minna location, copyright "Frontend Project 2026".

## Products

Eight realistic placeholder products with Naira prices and ratings, for example: Crochet Tote Bag ₦18,000, Bucket Hat ₦7,500, Crop Top ₦15,000, Baby Set ₦22,000, Beanie ₦6,000, Shoulder Bag ₦12,500, Cardigan ₦28,000, Baby Booties ₦5,500. Images are generated crochet product photos in a consistent warm style.

## Technical notes

- `src/data/products.js` holds the product array (id, name, price, rating, image, category) so it is easy to edit on GitHub.
- Components split into `src/components/`: Navbar, Hero, Categories, ProductCard, Shop, CustomOrder, Reviews, Footer — each small and readable.
- Colors added as design tokens in `src/styles.css`; no hardcoded hex in components.
- WhatsApp links built by a shared `buildWhatsAppLink(message)` helper using number 2348164198386.
- Page lives at `/` (`src/routes/index.tsx`) with proper SEO title, description, and social tags.
- No backend needed — the form is client-side only.
