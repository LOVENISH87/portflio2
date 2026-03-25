import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Github, Terminal, Zap, ShieldAlert, GraduationCap, ExternalLink, Mail } from "lucide-react";

const projects = [
  {
    title: "SalesScribe AI",
    description:
      "AI-powered cold email generator. Scrapes job listings and generates personalized outreach emails using LLMs and vector embeddings to match portfolio projects with job requirements.",
    tags: ["Python", "Groq", "LangChain", "Streamlit"],
    github: "https://github.com/LOVENISH87/salesscribe-AI",
    icon: Mail,
    color: "hover:border-blue-500/40 hover:shadow-[0_0_20px_-5px_hsl(217_91%_60%/0.2)]",
    tagColor: "bg-blue-500/10 text-blue-500",
    accentColor: "text-blue-500",
  },
  {
    title: "SwiftSend",
    description:
      "Lightning-fast, private & encrypted file sharing. Peer-to-peer transfers that never touch a server, saturating up to 4Gbps connections with zero accounts required.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    github: "https://github.com/LOVENISH87/SwiftSend",
    live: "https://swiftsend-omega.vercel.app/",
    icon: Zap,
    color: "hover:border-primary/40 hover:shadow-[0_0_20px_-5px_hsl(160_100%_50%/0.2)]",
    tagColor: "bg-primary/10 text-primary",
    accentColor: "text-primary",
  },
  {
    title: "Linux Doctor",
    description:
      "System diagnostics and forensic analysis tool. Real-time monitoring of CPU, RAM, and disk, with CLI-based auto-fix engines for systemd services and Docker containers.",
    tags: ["Go", "Linux", "CLI", "Forensics"],
    github: "https://github.com/LOVENISH87/Linux-Doctor",
    icon: ShieldAlert,
    color: "hover:border-neon-pink/40 hover:shadow-[0_0_20px_-5px_hsl(330_100%_60%/0.2)]",
    tagColor: "bg-neon-pink/10 text-neon-pink",
    accentColor: "text-neon-pink",
  },
  {
    title: "HelpMeMake",
    description:
      "An AI-powered mentorship & project learning platform. Connecting students with expert guides through real-time communication and gamified milestone tracking.",
    tags: ["Next.js", "AI", "TypeScript", "Education"],
    github: "https://github.com/LOVENISH87/HelpMeMake",
    live: "https://help-me-make.vercel.app/",
    icon: GraduationCap,
    color: "hover:border-neon-purple/40 hover:shadow-[0_0_20px_-5px_hsl(280_100%_65%/0.2)]",
    tagColor: "bg-neon-purple/10 text-neon-purple",
    accentColor: "text-neon-purple",
  },
  {
    title: "Vigilix",
    description:
      "High-performance TUI for systemd service management. Built with Bubble Tea for a responsive terminal experience, allowing efficient unit monitoring and control.",
    tags: ["Go", "TUI", "Systemd", "System"],
    github: "https://github.com/LOVENISH87/vigilix",
    icon: Terminal,
    color: "hover:border-blue-400/40 hover:shadow-[0_0_20px_-5px_hsl(210_100%_50%/0.2)]",
    tagColor: "bg-blue-400/10 text-blue-400",
    accentColor: "text-blue-400",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <SectionHeading tag="projects" title="BUILDS" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: "spring", stiffness: 120 }}
              whileHover={{ y: -8 }}
              className={`relative shimmer-card glass-game rounded-lg p-6 group transition-all duration-500 flex flex-col ${project.color}`}
            >
              {/* Pulsing corner accent */}
              <span className={`absolute top-3 right-3 w-2 h-2 rounded-full ${project.accentColor} opacity-60 animate-corner-ping`} />
              <div className="flex items-start justify-between mb-5">
                <div className={`w-11 h-11 flex items-center justify-center rounded-xl bg-background/60 border border-border/50 ${project.accentColor} group-hover:border-current transition-colors`}>
                  <project.icon size={22} />
                </div>
                <div className="flex gap-3">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-1"
                    title="GitHub Repo"
                  >
                    <Github size={18} />
                  </a>
                </div>
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

