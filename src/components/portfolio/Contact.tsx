import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Mail, Github, Linkedin, Send, Swords } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/LOVENISH87", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lovenish@example.com", label: "Email" },
];

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-2xl text-center">
        <SectionHeading tag="contact" title="JOIN PARTY?" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed mb-10 font-light">
            Ready to team up? Whether you have a project, a collaboration, or just want to chat about tech
            — my inbox is always open. Let's build something epic together.
          </p>

          <motion.a
            href="mailto:lovenish@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-3 px-8 py-4 font-display text-xs tracking-[0.2em] uppercase rounded border border-primary bg-primary/10 text-primary neon-box hover:bg-primary/20 transition-all duration-300"
          >
            <Swords size={18} />
            Send Message
            <Send size={14} />
          </motion.a>

          <div className="flex justify-center gap-4 mt-12">
            {socials.map((social, i) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.15, y: -3 }}
                className="w-12 h-12 rounded-lg border border-border/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:neon-box transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
