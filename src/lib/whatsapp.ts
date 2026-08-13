export const WHATSAPP_NUMBER = "2348164198386";
export const WHATSAPP_DISPLAY = "+234 816 419 8386";

/** Builds a wa.me link with a pre-filled message. */
export function buildWhatsAppLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
