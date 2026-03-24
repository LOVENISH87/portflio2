import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const certs = [
  {
    emoji: "🌐",
    title: "Computer Communications",
    issuer: "Coursera · Univ. of Colorado Boulder",
    date: "Dec 2024",
    image: "https://drive.google.com/thumbnail?id=1pcglYvR2QMwrtbIW29mIsyxFWplCM4Ii&sz=w800",
  },
  {
    emoji: "💻",
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "Nov 2023",
    image: "https://drive.google.com/thumbnail?id=1C7_PFO0rBc_inGu8po0TYoeIxpPVeynm&sz=w800",
  },
  {
    emoji: "🚀",
    title: "Full Stack Development (MEAN)",
    issuer: "Nasscom Foundation · thingQbator",
    date: "2025",
    image: "https://drive.google.com/thumbnail?id=1PjLhq5TTJ7QJx3_dcTn0ecfWnKRWWKaC&sz=w800",
  },
  {
    emoji: "🧮",
    title: "Computational Theory & Automata",
    issuer: "Infosys Springboard",
    date: "Aug 2025",
    image: "https://drive.google.com/thumbnail?id=1euZiaDcGX0IY_rdh3JdtmLPqVR6uHuk2&sz=w800",
  },
  {
    emoji: "🖥️",
    title: "Hardware & Operating Systems",
    issuer: "IBM · Coursera",
    date: "Sep 2024",
    image: "https://drive.google.com/thumbnail?id=1H8JDs72eQvtD1bxW5q7_ERdpKUq8ZhTd&sz=w800",
  },
  {
    emoji: "⚡",
    title: "BinaryBlitz Web Hackathon",
    issuer: "CodingNinjas LPU",
    date: "Mar 2024",
    image: "https://drive.google.com/thumbnail?id=1jlWuZmCkAKIAGisiVJXT3WdpiB0igqJu&sz=w800",
  },
];

const Certificates = () => {
  return (
    <section id="certificates" className="section-padding">
      <div className="container">
        <SectionHeading tag="achievements" title="ACHIEVEMENTS" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 120 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-game rounded-lg overflow-hidden group hover:border-primary/30 transition-all duration-500"
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
                  <span className="text-4xl">{cert.emoji}</span>
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
      </div>
    </section>
  );
};

export default Certificates;
