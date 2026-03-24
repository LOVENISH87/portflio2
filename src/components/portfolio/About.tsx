import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Rocket, Coffee, Bug } from "lucide-react";

const stats = [
  { icon: Trophy, value: "6", label: "Certifications", color: "text-neon-yellow" },
  { icon: Rocket, value: "3+", label: "Projects Deployed", color: "text-primary" },
  { icon: Coffee, value: "∞", label: "Coffee Consumed", color: "text-neon-pink" },
  { icon: Bug, value: "999+", label: "Problems Solved", color: "text-neon-purple" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container relative z-10">
        <SectionHeading tag="about" title="ABOUT ME" />

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-primary">
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                Hey! I'm <span className="text-primary font-bold">Lovenish</span> — a Computer Science student at Lovely Professional University. What began as a simple curiosity about HTML has grown into a deep passion for web engineering.
              </p>
            </div>
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-neon-pink">
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                I've built a strong foundation in <span className="text-neon-pink font-semibold">Computer Networking</span>, <span className="text-neon-pink font-semibold">Data Structures</span>, and <span className="text-neon-pink font-semibold">Full Stack Development</span> — I love the process of turning complex problems into elegant solutions.
              </p>
            </div>
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-neon-purple">
              <p className="text-muted-foreground leading-relaxed text-lg font-medium">
                Outside of coursework, I enjoy learning from the tech community, experimenting with modern JavaScript frameworks, and tracking down elusive bugs in my code.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-game rounded-lg p-6 text-center group hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <stat.icon className={`mx-auto mb-3 ${stat.color}`} size={24} />
                <div className={`text-3xl font-display font-bold ${stat.color} mb-1`}>{stat.value}</div>
                <div className="text-xs font-display tracking-wider text-muted-foreground uppercase">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
