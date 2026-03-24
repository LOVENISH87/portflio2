import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag: string;
  title: string;
}

const SectionHeading = ({ tag, title }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-px bg-primary/50" />
      <span className="font-mono text-xs text-primary tracking-[0.3em] uppercase">// {tag}</span>
    </div>
    <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight">{title}</h2>
  </motion.div>
);

export default SectionHeading;
