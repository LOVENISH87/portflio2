import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks: { label: string; href: string; external?: boolean }[] = [
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EDUCATION", href: "#education" },
  { label: "PROJECTS", href: "#projects" },
  { label: "CERTIFICATES", href: "#certificates" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-game border-b border-primary/10 shadow-[0_2px_20px_-5px_hsl(160_100%_50%/0.15)]"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="font-display text-xl font-bold tracking-widest text-primary neon-glow">
          {/* &lt;LOVENISH&gt; */}
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.href}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08 }}
              className="px-4 py-2 text-base font-display tracking-[0.2em] text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
            >
              {link.label}
            </motion.a>
          ))}
          <motion.a
            href="/lovenishcvnew-12.pdf"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + navLinks.length * 0.08 }}
            className="px-4 py-2 text-base font-display tracking-[0.2em] text-muted-foreground hover:text-primary hover:neon-glow transition-all duration-300"
          >
            RESUME
          </motion.a>
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="ml-3 px-5 py-2 text-xs font-display tracking-[0.2em] rounded border border-primary/50 text-primary neon-box hover:bg-primary/10 transition-all duration-300"
          >
            CONTACT
          </motion.a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-game border-t border-primary/10 overflow-hidden"
          >
            <div className="container py-4 flex flex-col gap-1">
              {[...navLinks, { label: "RESUME", href: "/lovenishcvnew-12.pdf", external: true }, { label: "CONTACT", href: "#contact" }].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-xs font-display tracking-[0.2em] text-muted-foreground hover:text-primary hover:bg-primary/5 rounded transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
