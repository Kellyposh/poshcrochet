import { useState, type FormEvent } from "react";
import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const initialForm = {
  name: "",
  item: "",
  color: "",
  size: "",
  date: "",
};

const fields = [
  { id: "name", label: "Your name", type: "text", placeholder: "Kudirat Yahaya" },
  { id: "item", label: "Item you want", type: "text", placeholder: "Crochet tote bag" },
  { id: "color", label: "Preferred colour", type: "text", placeholder: "Cream & peach" },
  { id: "size", label: "Size", type: "text", placeholder: "Medium" },
  { id: "date", label: "Date needed", type: "date", placeholder: "" },
] as const;

export function CustomOrder() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "Hello Kellyposh Crochet! I'd like a custom order.",
      `Name: ${form.name}`,
      `Item: ${form.item}`,
      `Colour: ${form.color}`,
      `Size: ${form.size}`,
      `Date needed: ${form.date}`,
    ].join("\n");

    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="custom-order" className="scroll-mt-20 bg-secondary/50 px-5 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl text-foreground md:text-4xl">
          Request a custom piece
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Tell us what you have in mind and we'll continue the chat on WhatsApp.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-5 rounded-3xl bg-card p-7 shadow-soft sm:grid-cols-2"
        >
          {fields.map((field) => (
            <div key={field.id} className={field.id === "name" ? "sm:col-span-2" : ""}>
              <label
                htmlFor={field.id}
                className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground"
              >
                {field.label}
              </label>
              <input
                id={field.id}
                name={field.id}
                type={field.type}
                required
                placeholder={field.placeholder}
                value={form[field.id]}
                onChange={(event) =>
                  setForm((prev) => ({ ...prev, [field.id]: event.target.value }))
                }
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:ring-2 focus:ring-ring"
              />
            </div>
          ))}

          <button
            type="submit"
            className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3 text-sm font-semibold text-background transition-transform hover:scale-[1.02]"
          >
            <MessageCircle className="h-4 w-4" />
            Send to WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}
