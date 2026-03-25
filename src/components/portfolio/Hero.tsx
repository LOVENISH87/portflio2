import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal as TerminalIcon, Maximize2, Minus, X, FileDown } from "lucide-react";

// ─── TypeWriter ─────────────────────────────────────────────────────────────
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

// ─── Arch Linux Neofetch Graphic ────────────────────────────────────────────
const ARCH_FETCH = (
  <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[10px] sm:text-xs my-2 items-center md:items-start">
    <pre className="text-primary font-bold leading-[1.15] drop-shadow-[0_0_5px_rgba(0,255,136,0.5)] select-none hidden sm:block">
{`                   -\`
                  .o+\`
                 \`ooo/
                \`+oooo:
               \`+oooooo:
               -+oooooo+:
             \`/:-:++oooo+:
            \`/++++/+++++++:
           \`/++++++++++++++:
          \`/+++ooooooooooooo/\`
         ./ooosssso++osssssso+\`
        .oossssso-\`\`\`\`/ossssss+\`
       -osssssso.      :ssssssso.
      :osssssss/        osssso+++.
     /ossssssss/        +ssssooo/-
   \`/ossssso+/:-        -:/+osssso+-
  \`+sso+:-\`                 \`.-/+oso:
 \`++:.                           \`-/+/
 .\`                                 \`/`}
    </pre>
    <div className="text-gray-300 space-y-1 w-full">
      <p><span className="text-primary font-bold">lovenish</span>@<span className="text-primary font-bold">archlinux</span></p>
      <p className="text-gray-600">-------------------</p>
      <p><span className="text-primary font-bold">OS</span>: Arch Linux x86_64</p>
      <p><span className="text-primary font-bold">Host</span>: ThinkPad T14 Gen 3</p>
      <p><span className="text-primary font-bold">Kernel</span>: 6.8.9-arch1-1</p>
      <p><span className="text-primary font-bold">Uptime</span>: 1337 hours</p>
      <p><span className="text-primary font-bold">Packages</span>: 2048 (pacman)</p>
      <p><span className="text-primary font-bold">Shell</span>: zsh 5.9</p>
      <p><span className="text-primary font-bold">WM</span>: Hyprland</p>
      <p><span className="text-primary font-bold">Terminal</span>: kitty</p>
      <p><span className="text-primary font-bold">Memory</span>: <span className="text-white">3210MiB</span> / 16000MiB</p>
      
      <div className="pt-2 flex gap-1.5 opacity-90">
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#232627]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#ed1515]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#11d116]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#f67400]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#1d99f3]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#9b59b6]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#1abc9c]" />
        <span className="w-3 sm:w-4 h-3 sm:h-4 bg-[#fcfcfc]" />
      </div>
    </div>
  </div>
);

// ─── Interactive Terminal Widget ────────────────────────────────────────────
type HistoryItem = { id: number; type: "input" | "output"; content: React.ReactNode };

const InteractiveTerminal = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Input functionality removed.

  // Boot sequence
  useEffect(() => {
    let isMounted = true;
    const bootLines = [
      "systemd[1]: Starting Arch Linux...",
      // "Loading essential drivers...",
      // "Mounting filesystems...",
      // "Starting network manager...",
      "[ OK ] Reached target Graphical Interface.",
      "Welcome to Arch Linux!"
    ];
    
    let i = 0;
    const interval = setInterval(() => {
      if (!isMounted) return;
      if (i < bootLines.length) {
        setHistory(prev => [...prev, { id: Date.now() + i, type: "output", content: bootLines[i] }]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (isMounted) handleCommand("neofetch", false);
        }, 300);
      }
    }, 120);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, []);

  // Auto scroll to bottom without jumping the main page
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string, echo = true) => {
    const c = cmd.trim().toLowerCase();
    if (echo) {
      setHistory(prev => [...prev, { id: Date.now(), type: "input", content: cmd }]);
    }
    
    let output: React.ReactNode = "";
    switch (c) {
      case "help":
        output = (
          <div className="text-gray-300">
            <p>Available commands:</p>
            <ul className="list-disc list-inside mt-1 ml-2 text-primary">
              <li><span className="text-white">whoami</span> - Learn more about me</li>
              <li><span className="text-white">skills</span> - View my tech stack</li>
              <li><span className="text-white">projects</span> - Where the magic happens</li>
              <li><span className="text-white">neofetch</span> - System specs</li>
              <li><span className="text-white">clear</span> - Clear the terminal</li>
            </ul>
          </div>
        );
        break;
      case "whoami":
        output = "lovenish - A CS student who turns caffeine into code.";
        break;
      case "skills":
        output = "React, TypeScript, Tailwind, Node.js, Python, C, Linux, Git.";
        break;
      case "projects":
        output = (
          <span>Scrolling down is too mainstream? Just click <a href="#projects" className="text-primary underline border-b border-transparent hover:border-primary">here</a>.</span>
        );
        break;
      case "sudo":
      case "su":
      case "sudo access":
        output = <span className="text-red-500 font-bold">nice try. lovenish is not in the sudoers file. This incident will be reported.</span>;
        break;
      case "neofetch":
        output = ARCH_FETCH;
        break;
      case "clear":
        setHistory([]);
        return;
      case "":
        break;
      default:
        output = <span className="text-red-400">zsh: command not found: {c}</span>;
    }
    
    if (output) {
      setHistory(prev => [...prev, { id: Date.now() + 1, type: "output", content: output }]);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
      className="relative w-full h-[400px] sm:h-[450px] bg-[#0d0d12]/90 backdrop-blur-xl rounded-xl border border-white/10 shadow-[0_0_40px_rgba(0,255,136,0.1)] flex flex-col overflow-hidden group mx-auto max-w-[600px] lg:max-w-none transform-gpu"
    >
      {/* ── Terminal Chrome (Title bar) ── */}
      <div className="flex items-center justify-between px-4 py-3 bg-black/40 border-b border-white/5 select-none">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="text-[10px] sm:text-xs font-mono text-gray-400 flex items-center gap-2">
          <TerminalIcon size={12} />
          <span>lovenish@archlinux: ~</span>
        </div>
        <div className="flex gap-2 opacity-50">
          {/* <Minus size={14} className="text-white" />
          <Maximize2 size={14} className="text-white" />
          <X size={14} className="text-white" /> */}
        </div>
      </div>

      {/* ── Terminal Body ── */}
      <div 
        ref={scrollContainerRef}
        className="flex-1 p-4 md:p-6 font-mono text-xs overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        <AnimatePresence>
          {history.map((item) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }}
              className="mb-1.5"
            >
              {item.type === "input" ? (
                <div>
                  <span className="text-primary font-bold">lovenish@archlinux</span>
                  <span className="text-white"> ~/desktop $ </span>
                  <span className="text-gray-300">{item.content}</span>
                </div>
              ) : (
                <div className="text-gray-400">{item.content}</div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Active Input Line */}
        <div className="flex items-center mt-1.5 flex-wrap">
          <span className="text-primary font-bold">lovenish@archlinux</span>
          <span className="text-white whitespace-pre"> ~/desktop $ </span>
          <div className="flex-1 flex items-center min-w-[150px] ml-1">
            {/* Blinking fake cursor */}
            <span className="w-2.5 h-3.5 bg-gray-400 animate-pulse" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Hero ───────────────────────────────────────────────────────────────
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden scanline pt-24 pb-12 sm:pt-0">
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[130px] pointer-events-none" />

      {/* Floating corner decorations */}
      <div className="absolute top-20 right-10 w-32 h-32 border border-primary/10 rounded-sm rotate-45 animate-float-slow pointer-events-none hidden lg:block" />
      <div className="absolute bottom-32 left-10 w-20 h-20 border border-neon-pink/10 rounded-sm -rotate-12 animate-float-slow pointer-events-none hidden lg:block" style={{ animationDelay: "2s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ────── LEFT: TEXT COLUMN ────── */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-xl mx-auto lg:mx-0 lg:pr-8 text-center lg:text-left"
          >
            <div className="relative mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black leading-[0.95] tracking-tight">
                <span className="text-foreground">HEY, I'M</span>
                <br />
                <span className="relative inline-block">
                  <span className="text-gradient-neon neon-glow">
                    LOVENISH
                  </span>
                  {/* Glitch layers */}
                  <span className="absolute inset-0 text-gradient-pink animate-glitch-1 opacity-60" aria-hidden="true">
                    LOVENISH
                  </span>
                  <span className="absolute inset-0 text-gradient-neon animate-glitch-2 opacity-40" aria-hidden="true">
                    LOVENISH
                  </span>
                </span>
                <br />
                <span className="text-foreground">THAKUR</span>
                <span className="text-primary animate-pulse">_</span>
              </h1>
            </div>

            <div className="font-mono text-sm md:text-base text-muted-foreground mb-8 h-8 flex justify-center lg:justify-start">
              <TypeWriter text="> I build things for the web." delay={400} />
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed font-medium"
            >
              CS student turning caffeine into code. Crafting web experiences that are clean, fast, and occasionally bug-free.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 px-7 py-3.5 font-display text-xs tracking-[0.2em] uppercase rounded border border-primary bg-primary/10 text-primary neon-box hover:bg-primary/20 transition-all duration-300"
              >
                <TerminalIcon size={16} />
                View Projects
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-display text-xs tracking-[0.2em] uppercase rounded border border-neon-pink/40 text-neon-pink neon-box-pink hover:bg-neon-pink/10 transition-all duration-300"
              >
                Let's Talk
              </a>
              <a
                href="/lovenishcvnew-12.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 font-display text-xs tracking-[0.2em] uppercase rounded border border-white/20 text-white/80 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <FileDown size={16} />
                Resume
              </a>
            </motion.div>
          </motion.div>

          {/* ────── RIGHT: INTERACTIVE TERMINAL ────── */}
          <div className="w-full relative z-50 lg:translate-x-8 xl:translate-x-12">
            <InteractiveTerminal />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
