import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Trophy, Rocket, Coffee, Bug } from "lucide-react";

const stats = [
  { icon: Trophy, value: "6", label: "Achievements Unlocked", color: "text-neon-yellow" },
  { icon: Rocket, value: "3+", label: "Projects Deployed", color: "text-primary" },
  { icon: Coffee, value: "∞", label: "Coffee Consumed", color: "text-neon-pink" },
  { icon: Bug, value: "999+", label: "Bugs Squashed", color: "text-neon-purple" },
];

const About = () => {
  return (
    <section id="about" className="section-padding relative">
      <div className="container relative z-10">
        <SectionHeading tag="about" title="PLAYER INFO" />

        <div className="grid md:grid-cols-2 gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-primary">
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Hey! I'm <span className="text-primary font-medium">Lovenish</span> — a Computer Science warrior at Lovely Professional University. What started as curiosity about HTML evolved into a full-blown quest to master the web.
              </p>
            </div>
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-neon-pink">
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                I've leveled up through <span className="text-neon-pink">Computer Networking</span>, <span className="text-neon-pink">Data Structures</span>, and <span className="text-neon-pink">Full Stack Dev</span> — always chasing that dopamine hit when a project finally compiles.
              </p>
            </div>
            <div className="glass-game rounded-lg p-6 border-l-2 border-l-neon-purple">
              <p className="text-muted-foreground leading-relaxed text-lg font-light">
                Side quests include binge-watching tech YouTube, experimenting with new frameworks, and heroically debugging things I definitely shouldn't have broken.
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
