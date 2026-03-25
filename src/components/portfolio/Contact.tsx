import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Send, User, MessageSquare, AtSign, CheckCircle2, Loader2, Phone } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/LOVENISH87", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/lovenish-thakur-225a5b297", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lovenish369@gmail.com", label: "Email" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [focused, setFocused] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    // Simulate send (replace with real API / EmailJS / Formspree)
    await new Promise((r) => setTimeout(r, 1800));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 5000);
  };

  const fields = [
    { name: "name", label: "Full Name", icon: User, type: "text", placeholder: "Lovenish Thakur" },
    { name: "email", label: "Email Address", icon: AtSign, type: "email", placeholder: "you@example.com" },
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container">
        <SectionHeading tag="contact" title="LET'S CONNECT" />

        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* ── LEFT: Info + Socials ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Have a project, opportunity, or just want to say hi?
                My inbox is always open. I'll get back to you as fast as I can.
              </p>
            </div>

            {/* Contact detail items */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: "lovenish369@gmail.com", href: "mailto:lovenish369@gmail.com" },
                { icon: Github, label: "GitHub", value: "github.com/LOVENISH87", href: "https://github.com/LOVENISH87" },
                { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/lovenish", href: "https://linkedin.com/in/lovenish-thakur-225a5b297" },
                { icon: Phone, label: "Phone", value: "+91 234343434", href: "tel:+91234343434" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 rounded-xl border border-border/40 bg-card/50 backdrop-blur hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-background/60 border border-border/50 text-primary group-hover:border-primary/50 group-hover:neon-box transition-all duration-300">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-display tracking-widest text-muted-foreground uppercase">{item.label}</p>
                    <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Available and open to opportunities
            </div>
          </motion.div>

          {/* ── RIGHT: Contact Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="glass-game rounded-2xl p-8 space-y-6 border border-border/50"
            >
              {/* Name + Email row */}
              <div className="grid sm:grid-cols-2 gap-5">
                {fields.map((field) => {
                  const Icon = field.icon;
                  const isFocused = focused === field.name;
                  const hasValue = !!form[field.name as keyof typeof form];
                  return (
                    <div key={field.name} className="space-y-2">
                      <label className="text-xs font-display tracking-widest text-muted-foreground uppercase">
                        {field.label}
                      </label>
                      <div className={`relative flex items-center rounded-xl border transition-all duration-300 ${isFocused ? "border-primary/60 shadow-[0_0_12px_-4px_hsl(160_100%_50%/0.3)]" : "border-border/50"
                        } bg-background/50`}>
                        <Icon size={16} className={`absolute left-4 transition-colors duration-200 ${isFocused || hasValue ? "text-primary" : "text-muted-foreground"}`} />
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name as keyof typeof form]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field.name)}
                          onBlur={() => setFocused(null)}
                          placeholder={field.placeholder}
                          autoComplete="off"
                          className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none font-medium"
                          required
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Message textarea */}
              <div className="space-y-2">
                <label className="text-xs font-display tracking-widest text-muted-foreground uppercase">
                  Message
                </label>
                <div className={`relative rounded-xl border transition-all duration-300 ${focused === "message" ? "border-primary/60 shadow-[0_0_12px_-4px_hsl(160_100%_50%/0.3)]" : "border-border/50"
                  } bg-background/50`}>
                  <MessageSquare size={16} className={`absolute top-4 left-4 transition-colors duration-200 ${focused === "message" || form.message ? "text-primary" : "text-muted-foreground"
                    }`} />
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your project, idea, or just say hi..."
                    rows={5}
                    className="w-full bg-transparent pl-10 pr-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none resize-none font-medium"
                    required
                  />
                  {/* char count */}
                  <span className="absolute bottom-3 right-4 text-[10px] font-mono text-muted-foreground/50">
                    {form.message.length}
                  </span>
                </div>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full flex items-center justify-center gap-3 py-4 rounded-xl font-display text-xs tracking-[0.2em] uppercase transition-all duration-300 ${status === "sent"
                  ? "bg-primary/20 text-primary border border-primary/40"
                  : "bg-primary/10 text-primary border border-primary/50 hover:bg-primary/20 neon-box"
                  }`}
              >
                {status === "idle" && <><Send size={15} /> Send Message</>}
                {status === "sending" && <><Loader2 size={15} className="animate-spin" /> Sending...</>}
                {status === "sent" && <><CheckCircle2 size={15} /> Message Sent!</>}
              </motion.button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center text-xs text-primary font-medium font-mono"
                >
                  Thanks! I'll get back to you as soon as possible.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
