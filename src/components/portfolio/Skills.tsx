import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./SectionHeading";

const categories = {
  Frontend: [
    "HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Next.js",
    "Angular", "Tailwind CSS", "Bootstrap", "Sass", "jQuery", "Vite",
  ],
  Backend: ["Node.js", "Express.js", "Python", "C", "Java", "PHP", "REST APIs"],
  Database: ["MongoDB", "MySQL", "PostgreSQL", "Firebase", "Supabase"],
  Tools: [
    "Git", "GitHub", "VS Code", "Linux", "Figma", "Postman",
    "npm", "Docker", "Vercel", "Netlify", "Chrome DevTools", "Webpack",
  ],
};

type Category = keyof typeof categories;

const categoryColors: Record<Category, string> = {
  Frontend: "border-primary text-primary neon-box",
  Backend: "border-neon-pink text-neon-pink neon-box-pink",
  Database: "border-neon-yellow text-neon-yellow",
  Tools: "border-neon-purple text-neon-purple",
};

const inactiveColors: Record<Category, string> = {
  Frontend: "hover:border-primary/30 hover:text-primary/80",
  Backend: "hover:border-neon-pink/30 hover:text-neon-pink/80",
  Database: "hover:border-neon-yellow/30 hover:text-neon-yellow/80",
  Tools: "hover:border-neon-purple/30 hover:text-neon-purple/80",
};

const skillGlow: Record<Category, string> = {
  Frontend: "hover:border-primary/40 hover:shadow-[0_0_10px_-3px_hsl(160_100%_50%/0.3)]",
  Backend: "hover:border-neon-pink/40 hover:shadow-[0_0_10px_-3px_hsl(330_100%_60%/0.3)]",
  Database: "hover:border-neon-yellow/40 hover:shadow-[0_0_10px_-3px_hsl(50_100%_55%/0.3)]",
  Tools: "hover:border-neon-purple/40 hover:shadow-[0_0_10px_-3px_hsl(280_100%_65%/0.3)]",
};

const Skills = () => {
  const [active, setActive] = useState<Category>("Frontend");

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeading tag="skills" title="SKILL TREE" />

        <div className="flex flex-wrap gap-3 mb-12">
          {(Object.keys(categories) as Category[]).map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded border text-xs font-display tracking-[0.15em] uppercase transition-all duration-300 ${
                active === cat
                  ? `${categoryColors[cat]} bg-card/80`
                  : `border-border/50 text-muted-foreground ${inactiveColors[cat]}`
              }`}
            >
              {cat}
              <span className="ml-2 opacity-50">[{categories[cat].length}]</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3"
          >
            {categories[active].map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.08, y: -3 }}
                className={`glass-game rounded-lg p-4 text-center text-sm font-semibold text-foreground cursor-default transition-all duration-300 ${skillGlow[active]}`}
              >
                {skill}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
