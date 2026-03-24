import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";

const TypeWriter = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayed.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed(text.slice(0, displayed.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [displayed, text, started]);

  return (
    <span>
      {displayed}
      <span className="animate-pulse-neon text-primary">|</span>
    </span>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scanline">
      {/* Radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[130px] pointer-events-none" />

      {/* Corner decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-sm rotate-45 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-32 left-10 w-20 h-20 border border-neon-pink/10 rounded-sm -rotate-12 animate-float-slow pointer-events-none" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl"
        >
          {/* Status badge */}
          {/* <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded border border-primary/20 bg-primary/5 mb-10"
          >
            {/* <span className="relative flex h-2 w-2"> */}
              {/* <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span> */}
            {/* <span className="text-xs font-display tracking-[0.3em] text-primary uppercase">
              Status: Online — Open to Opportunities
            </span> */}
          {/* </motion.div>  */}

          {/* Glitch title */}
          <div className="relative mb-6">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-display font-black leading-[0.95] tracking-tight">
              <span className="text-foreground">HEY, I'M</span>
              <br />
              <span className="relative inline-block">
                <span className="text-gradient-neon neon-glow">LOVENISH</span>
                {/* Glitch layers */}
                <span
                  className="absolute inset-0 text-gradient-pink animate-glitch-1 opacity-60"
                  aria-hidden="true"
                >
                  LOVENISH
                </span>
                <span
                  className="absolute inset-0 text-gradient-neon animate-glitch-2 opacity-40"
                  aria-hidden="true"
                >
                  LOVENISH
                </span>
              </span>
              <br />
              <span className="text-foreground">THAKUR</span>
              <span className="text-primary">.</span>
            </h1>
          </div>

          {/* Typewriter subtitle */}
          <div className="font-mono text-base md:text-lg text-muted-foreground mb-10 h-8">
            <TypeWriter text="> I build things for the web." delay={1500} />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.6 }}
            className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed font-medium"
          >
            CS student turning caffeine into code. Crafting web experiences that are clean, fast, and occasionally bug-free.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 font-display text-xs tracking-[0.2em] uppercase rounded border border-primary bg-primary/10 text-primary neon-box hover:bg-primary/20 transition-all duration-300"
            >
              <Terminal size={16} />
              View Projects
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 font-display text-xs tracking-[0.2em] uppercase rounded border border-neon-pink/40 text-neon-pink neon-box-pink hover:bg-neon-pink/10 transition-all duration-300"
            >
              Let's Talk
            </a>
          </motion.div>


        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
