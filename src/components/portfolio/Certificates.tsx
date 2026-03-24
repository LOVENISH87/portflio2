import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Maximize2, X } from "lucide-react";

const certs = [
  {
    title: "Computer Communications",
    issuer: "Coursera · Univ. of Colorado Boulder",
    date: "Dec 2024",
    image: "https://drive.google.com/thumbnail?id=1pcglYvR2QMwrtbIW29mIsyxFWplCM4Ii&sz=w800",
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    image: "https://drive.google.com/thumbnail?id=1C7_PFO0rBc_inGu8po0TYoeIxpPVeynm&sz=w800",
  },
  {
    title: "Full Stack Development (MEAN)",
    issuer: "Nasscom Foundation · thingQbator",
    date: "2025",
    image: "https://drive.google.com/thumbnail?id=1PjLhq5TTJ7QJx3_dcTn0ecfWnKRWWKaC&sz=w800",
  },
  {
    title: "Computational Theory & Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    image: "https://drive.google.com/thumbnail?id=1euZiaDcGX0IY_rdh3JdtmLPqVR6uHuk2&sz=w800",
  },
  {
    title: "Hardware & Operating Systems",
    issuer: "IBM · Coursera",
    date: "Sep 2024",
    image: "https://drive.google.com/thumbnail?id=1H8JDs72eQvtD1bxW5q7_ERdpKUq8ZhTd&sz=w800",
  },
  {
    title: "BinaryBlitz Web Hackathon",
    issuer: "CodingNinjas LPU",
    date: "Mar 2024",
    image: "https://drive.google.com/thumbnail?id=1jlWuZmCkAKIAGisiVJXT3WdpiB0igqJu&sz=w800",
  },
];

type Cert = typeof certs[0];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<Cert | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="certificates" className="section-padding">
      <div className="container relative">
        <SectionHeading tag="achievements" title="CERTIFICATES" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-game rounded-lg overflow-hidden group hover:border-primary/30 transition-all duration-500 cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="aspect-video overflow-hidden bg-secondary relative">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2 text-primary">
                    <Maximize2 size={32} />
                    <span className="text-sm font-display tracking-widest uppercase">View</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display font-bold text-sm mb-1 group-hover:text-primary transition-colors tracking-wide">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                  <span className="text-xs font-mono text-primary whitespace-nowrap">{cert.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-size Image Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCert(null)}
              className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 backdrop-blur-md p-4 cursor-zoom-out"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-card/50 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300 z-50"
              >
                <X size={24} />
              </button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden border border-primary/20 shadow-[0_0_50px_-12px_hsl(160_100%_50%/0.25)] neon-box cursor-default flex items-center justify-center bg-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-background/90 to-transparent z-10 pointers-events-none">
                  <h3 className="font-display font-bold text-xl text-foreground drop-shadow-md">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-primary drop-shadow-md">{selectedCert.issuer}</p>
                </div>
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Certificates;
