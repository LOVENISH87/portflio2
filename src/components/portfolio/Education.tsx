import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, School, Flag } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    badge: "⚔️ CURRENT QUEST",
    title: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    location: "Punjab, India · 2023 — Present",
    description:
      "Main quest: mastering Data Structures, Algorithms, Networks, OS, and Full Stack Dev. Side missions include hackathons, certifications, and late-night coding sessions.",
    color: "border-l-primary",
    dotColor: "bg-primary",
    badgeColor: "text-primary bg-primary/10",
  },
  {
    icon: School,
    badge: "📜 CLASS XII",
    title: "Senior Secondary — Science (PCM + CS)",
    institution: "Aryan Public School",
    location: "Hamirpur, Himachal Pradesh",
    description:
      "Completed the Science stream arc. Unlocked strong foundations in mathematics and programming that opened the gateway to the CS universe.",
    color: "border-l-neon-pink",
    dotColor: "bg-neon-pink",
    badgeColor: "text-neon-pink bg-neon-pink/10",
  },
  {
    icon: Flag,
    badge: "🎮 CLASS X",
    title: "Secondary School — Origin Story",
    institution: "Oasis Public School",
    location: "Hamirpur, Himachal Pradesh",
    description:
      "Where it all began. Strong academics + early curiosity for tech = the spark that ignited a lifelong passion for building software.",
    color: "border-l-neon-purple",
    dotColor: "bg-neon-purple",
    badgeColor: "text-neon-purple bg-neon-purple/10",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionHeading tag="education" title="QUEST LOG" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className={`glass-game rounded-lg p-6 ${item.color} border-l-2 hover:border-l-4 transition-all duration-300 group`}
            >
              <span className={`inline-block px-3 py-1 text-xs font-display tracking-wider rounded ${item.badgeColor} mb-3`}>
                {item.badge}
              </span>
              <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-sm font-semibold text-muted-foreground">{item.institution}</p>
              <p className="text-xs text-muted-foreground mb-3">{item.location}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
