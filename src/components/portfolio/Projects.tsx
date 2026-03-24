import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    emoji: "🌐",
    title: "Portfolio Website",
    description:
      "A personal dev portfolio with neon gaming aesthetics, smooth animations, and responsive design. Built to showcase the journey so far.",
    tags: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/LOVENISH87",
    color: "hover:border-primary/40 hover:shadow-[0_0_20px_-5px_hsl(160_100%_50%/0.2)]",
    tagColor: "bg-primary/10 text-primary",
  },
  {
    emoji: "⚙️",
    title: "CLI Task Manager",
    description:
      "A command-line productivity tool for managing daily quests. Add, complete, and filter tasks with persistent local storage.",
    tags: ["Python", "Git", "CLI"],
    github: "https://github.com/LOVENISH87",
    color: "hover:border-neon-pink/40 hover:shadow-[0_0_20px_-5px_hsl(330_100%_60%/0.2)]",
    tagColor: "bg-neon-pink/10 text-neon-pink",
  },
  {
    emoji: "🚀",
    title: "System Monitor Dashboard",
    description:
      "A real-time system resource monitor. Built to understand OS internals and Linux process management at the hardware level.",
    tags: ["C", "Linux", "Shell"],
    github: "https://github.com/LOVENISH87",
    color: "hover:border-neon-purple/40 hover:shadow-[0_0_20px_-5px_hsl(280_100%_65%/0.2)]",
    tagColor: "bg-neon-purple/10 text-neon-purple",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading tag="projects" title="BUILDS" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8 }}
              className={`glass-game rounded-lg p-6 group transition-all duration-500 flex flex-col ${project.color}`}
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-4xl">{project.emoji}</span>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors p-1"
                >
                  <Github size={18} />
                </a>
              </div>

              <h3 className="text-lg font-display font-bold mb-2 group-hover:text-primary transition-colors tracking-wide">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 text-xs font-mono rounded ${project.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
