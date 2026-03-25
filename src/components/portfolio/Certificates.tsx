import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Award, ChevronLeft, ChevronRight, X, ExternalLink } from "lucide-react";

const certs = [
  {
    title: "Computer Communications",
    issuer: "Coursera · University of Colorado Boulder",
    date: "Dec 2024",
    tag: "Networking",
    accentClass: "text-primary border-primary/50 bg-primary/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(160_100%_50%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1pcglYvR2QMwrtbIW29mIsyxFWplCM4Ii&sz=w800",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    tag: "Frontend",
    accentClass: "text-neon-pink border-neon-pink/50 bg-neon-pink/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(330_100%_60%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1C7_PFO0rBc_inGu8po0TYoeIxpPVeynm&sz=w800",
  },
  {
    title: "Full Stack Development (MEAN)",
    issuer: "Nasscom Foundation · thingQbator",
    date: "2025",
    tag: "Full Stack",
    accentClass: "text-neon-purple border-neon-purple/50 bg-neon-purple/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(280_100%_65%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1PjLhq5TTJ7QJx3_dcTn0ecfWnKRWWKaC&sz=w800",
  },
  {
    title: "Computational Theory & Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    tag: "CS Theory",
    accentClass: "text-neon-yellow border-neon-yellow/50 bg-neon-yellow/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(50_100%_55%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1euZiaDcGX0IY_rdh3JdtmLPqVR6uHuk2&sz=w800",
  },
  {
    title: "Hardware & Operating Systems",
    issuer: "IBM · Coursera",
    date: "Sep 2024",
    tag: "Systems",
    accentClass: "text-primary border-primary/50 bg-primary/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(160_100%_50%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1H8JDs72eQvtD1bxW5q7_ERdpKUq8ZhTd&sz=w800",
  },
  {
    title: "BinaryBlitz Web Hackathon",
    issuer: "CodingNinjas LPU",
    date: "Mar 2024",
    tag: "Hackathon",
    accentClass: "text-neon-pink border-neon-pink/50 bg-neon-pink/5",
    glowClass: "shadow-[0_0_40px_-10px_hsl(330_100%_60%/0.4)]",
    image: "https://drive.google.com/thumbnail?id=1jlWuZmCkAKIAGisiVJXT3WdpiB0igqJu&sz=w800",
  },
];

const Certificates = () => {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  const cert = certs[active];

  const go = (dir: number) => {
    setActive((p) => (p + dir + certs.length) % certs.length);
  };

  // Scroll thumbnail rail to keep active visible
  useEffect(() => {
    const el = railRef.current?.children[active] as HTMLElement;
    el?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  useEffect(() => {
    const h = (e: KeyboardEvent) => {
      if (!lightbox) return;          // ← only active inside lightbox
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setLightbox(false);
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [lightbox]);

  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <SectionHeading tag="achievements" title="CERTIFICATES" />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1.3fr_1fr] xl:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-start">
          {/* ── LEFT: Featured large cert viewer ── */}
          <div className="w-full min-w-0">
            <div className="relative">
              {/* Counter */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Award size={16} className={cert.accentClass.split(" ")[0]} />
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(active + 1).padStart(2, "0")} / {String(certs.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => go(1)}
                    className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Main image card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, x: 30, scale: 0.97 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -30, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                  className={`relative w-full rounded-2xl overflow-hidden border border-border/40 cursor-zoom-in ${cert.glowClass}`}
                  onClick={() => setLightbox(true)}
                >
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-auto block"
                  />
                  {/* Top-left scan line badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 text-xs font-display tracking-widest rounded border ${cert.accentClass}`}>
                      {cert.tag}
                    </span>
                  </div>
                  {/* Zoom hint */}
                  <div className="absolute bottom-4 right-4 opacity-0 hover:opacity-100 transition-opacity duration-200">
                    <ExternalLink size={18} className="text-white drop-shadow-md" />
                  </div>
                  {/* gradient bottom wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                </motion.div>
              </AnimatePresence>

              {/* Meta info row */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`meta-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="mt-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
                >
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">{cert.title}</h3>
                    <p className="text-sm text-muted-foreground font-medium mt-0.5">{cert.issuer}</p>
                  </div>
                  <span className={`self-start sm:self-auto text-xs font-mono px-3 py-1.5 rounded-lg border ${cert.accentClass} whitespace-nowrap`}>
                    {cert.date}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Dot progress */}
              <div className="flex gap-1.5 mt-5">
                {certs.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-1.5 rounded-full transition-all duration-400 ${
                      i === active ? "w-8 bg-primary" : "w-4 bg-border/50 hover:bg-border"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Scrollable thumbnail rail ── */}
          <div className="w-full min-w-0">
            <p className="text-xs font-display tracking-[0.2em] text-muted-foreground uppercase mb-4">
              All Certificates
            </p>
            <div
              ref={railRef}
              className="flex lg:flex-col gap-3 overflow-x-auto lg:overflow-x-visible lg:overflow-y-auto lg:max-h-[520px] pb-2 pr-1 scroll-smooth"
            >
              {certs.map((c, i) => (
                <motion.button
                  key={c.title}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className={`group flex-shrink-0 w-52 lg:w-full flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 text-left ${
                    i === active
                      ? `border-primary/50 bg-primary/5 ${cert.glowClass}`
                      : "border-border/40 bg-card/50 hover:border-border hover:bg-card/80"
                  }`}
                >
                  {/* thumb */}
                  <div className="w-16 h-12 lg:w-20 lg:h-14 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
                    <img
                      src={c.image}
                      alt={c.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  {/* text */}
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-display font-bold leading-snug truncate transition-colors ${
                      i === active ? "text-primary" : "text-foreground group-hover:text-primary"
                    }`}>
                      {c.title}
                    </p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 truncate">{c.issuer}</p>
                    <span className={`inline-block mt-1 text-[10px] font-mono px-1.5 py-0.5 rounded border ${c.accentClass}`}>
                      {c.date}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Lightbox fullscreen ── */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(false)}
              className="fixed inset-0 z-[200] flex items-center justify-center bg-background/92 backdrop-blur-2xl p-4 cursor-zoom-out"
            >
              <button
                onClick={() => setLightbox(false)}
                className="absolute top-5 right-5 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-card/70 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
              >
                <X size={18} />
              </button>

              <button onClick={(e) => { e.stopPropagation(); go(-1); }}
                className="absolute left-4 md:left-10 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-card/70 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <ChevronLeft size={20} />
              </button>
              <button onClick={(e) => { e.stopPropagation(); go(1); }}
                className="absolute right-4 md:right-10 z-50 w-10 h-10 flex items-center justify-center rounded-full bg-card/70 border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-all">
                <ChevronRight size={20} />
              </button>

              <motion.div
                key={`lb-${active}`}
                initial={{ scale: 0.92, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.92, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 26 }}
                className={`relative max-w-5xl w-full rounded-2xl overflow-hidden border border-primary/25 ${cert.glowClass}`}
                onClick={(e) => e.stopPropagation()}
              >
                <img src={cert.image} alt={cert.title} className="w-full h-auto block" />
                <div className={`flex items-center justify-between gap-4 px-6 py-4 bg-card/90 backdrop-blur-md border-t border-border/40`}>
                  <div>
                    <p className="font-display font-bold text-base text-foreground">{cert.title}</p>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className={`text-xs font-mono px-3 py-1.5 rounded-lg border ${cert.accentClass}`}>{cert.date}</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;