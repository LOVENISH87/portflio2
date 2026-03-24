import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server } from "lucide-react";
import { 
  SiHtml5, SiJavascript, SiTypescript, SiReact, SiNextdotjs, 
  SiAngular, SiTailwindcss, SiBootstrap, SiSass, SiJquery, SiVite,
  SiNodedotjs, SiExpress, SiPython, SiC, SiPhp, 
  SiMongodb, SiMysql, SiPostgresql, SiFirebase, SiSupabase,
  SiGit, SiGithub, SiLinux, SiFigma, SiPostman,
  SiNpm, SiDocker, SiVercel, SiNetlify, SiGooglechrome, SiWebpack
} from "react-icons/si";
import { FaCss3, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
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

const skillIcons: Record<string, React.ElementType> = {
  "HTML5": SiHtml5, "CSS3": FaCss3, "JavaScript": SiJavascript,
  "TypeScript": SiTypescript, "React": SiReact, "Next.js": SiNextdotjs,
  "Angular": SiAngular, "Tailwind CSS": SiTailwindcss, "Bootstrap": SiBootstrap,
  "Sass": SiSass, "jQuery": SiJquery, "Vite": SiVite,
  "Node.js": SiNodedotjs, "Express.js": SiExpress, "Python": SiPython,
  "C": SiC, "Java": FaJava, "PHP": SiPhp, "REST APIs": Server,
  "MongoDB": SiMongodb, "MySQL": SiMysql, "PostgreSQL": SiPostgresql,
  "Firebase": SiFirebase, "Supabase": SiSupabase,
  "Git": SiGit, "GitHub": SiGithub, "VS Code": VscVscode,
  "Linux": SiLinux, "Figma": SiFigma, "Postman": SiPostman,
  "npm": SiNpm, "Docker": SiDocker, "Vercel": SiVercel,
  "Netlify": SiNetlify, "Chrome DevTools": SiGooglechrome, "Webpack": SiWebpack,
};

const skillBrandColors: Record<string, string> = {
  "HTML5": "group-hover:text-[#E34F26]", "CSS3": "group-hover:text-[#1572B6]", "JavaScript": "group-hover:text-[#F7DF1E]",
  "TypeScript": "group-hover:text-[#3178C6]", "React": "group-hover:text-[#61DAFB]", "Next.js": "group-hover:text-white",
  "Angular": "group-hover:text-[#DD0031]", "Tailwind CSS": "group-hover:text-[#06B6D4]", "Bootstrap": "group-hover:text-[#7952B3]",
  "Sass": "group-hover:text-[#CC6699]", "jQuery": "group-hover:text-[#0769AD]", "Vite": "group-hover:text-[#646CFF]",
  "Node.js": "group-hover:text-[#339933]", "Express.js": "group-hover:text-white", "Python": "group-hover:text-[#3776AB]",
  "C": "group-hover:text-[#A8B9CC]", "Java": "group-hover:text-[#007396]", "PHP": "group-hover:text-[#777BB4]",
  "REST APIs": "group-hover:text-[#009688]",
  "MongoDB": "group-hover:text-[#47A248]", "MySQL": "group-hover:text-[#4479A1]", "PostgreSQL": "group-hover:text-[#4169E1]",
  "Firebase": "group-hover:text-[#FFCA28]", "Supabase": "group-hover:text-[#3ECF8E]",
  "Git": "group-hover:text-[#F05032]", "GitHub": "group-hover:text-white", "VS Code": "group-hover:text-[#007ACC]",
  "Linux": "group-hover:text-[#FCC624]", "Figma": "group-hover:text-[#F24E1E]", "Postman": "group-hover:text-[#FF6C37]",
  "npm": "group-hover:text-[#CB3837]", "Docker": "group-hover:text-[#2496ED]", "Vercel": "group-hover:text-white",
  "Netlify": "group-hover:text-[#00C7B7]", "Chrome DevTools": "group-hover:text-[#4285F4]", "Webpack": "group-hover:text-[#8DD6F9]",
};

const Skills = () => {
  const [active, setActive] = useState<Category>("Frontend");

  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <SectionHeading tag="skills" title="TECH STACK" />

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
            {categories[active].map((skill, i) => {
              const Icon = skillIcons[skill] || Server;
              const iconColor = categoryColors[active].split(" ")[1];
              const brandHover = skillBrandColors[skill] || "";
              return (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05, type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`group glass-game flex flex-col items-center justify-center gap-3 rounded-xl p-5 text-center cursor-default transition-all duration-400  ${skillGlow[active]}`}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-background/40 border border-border/40 group-hover:bg-background/80 transition-all duration-300">
                  <Icon size={30} className={`${iconColor} ${brandHover} opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`} />
                </div>
                <span className="text-xs font-display tracking-wider text-muted-foreground group-hover:text-foreground transition-colors">{skill}</span>
              </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Skills;
