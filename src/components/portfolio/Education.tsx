import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { GraduationCap, School, Flag } from "lucide-react";

const timeline = [
  {
    icon: GraduationCap,
    badge: "ONGOING",
    title: "B.Tech — Computer Science & Engineering",
    institution: "Lovely Professional University (LPU)",
    location: "Punjab, India · 2023 — Present",
    description:
      "Core focus: mastering Data Structures, Algorithms, Networks, OS, and Full Stack Dev. Secondary activities include hackathons, certifications, and late-night coding sessions.",
    color: "border-l-primary",
    dotColor: "bg-primary",
    badgeColor: "text-primary bg-primary/10",
  },
  {
    icon: School,
    badge: "CLASS XII",
    title: "Senior Secondary — Science",
    institution: "Aryan Public School",
    location: "Hamirpur, Himachal Pradesh",
    description:
      "Completed the Science stream. Built strong foundations in mathematics and programming that opened the gateway to the CS universe.",
    color: "border-l-neon-pink",
    dotColor: "bg-neon-pink",
    badgeColor: "text-neon-pink bg-neon-pink/10",
  },
  {
    icon: Flag,
    badge: "CLASS X",
    title: "Secondary School",
    institution: "Oasis Public School",
    location: "Hamirpur, Himachal Pradesh",
    description:
      "Where it all began. Strong academics and early curiosity for tech sparked a lifelong passion for building software.",
    color: "border-l-neon-purple",
    dotColor: "bg-neon-purple",
    badgeColor: "text-neon-purple bg-neon-purple/10",
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="container">
        <SectionHeading tag="education" title="EDUCATION" />

        <div className="relative border-l border-border/50 ml-3 md:ml-6 space-y-10 py-6">
          {timeline.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="relative pl-8 md:pl-10 group"
            >
              {/* Timeline Dot */}
              <div className={`absolute -left-[6px] top-1 h-3 w-3 rounded-full ${item.dotColor} neon-box shadow-md ring-4 ring-background z-10`} />

              {/* Content Box */}
              <div className={`glass-game rounded-lg p-6 ${item.color} border border-l-2 hover:border-l-4 transition-all duration-300`}>
                <div className="flex flex-wrap items-center justify-between mb-3 gap-3">
                  <span className={`inline-block px-3 py-1 text-xs font-display tracking-wider rounded ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <div className={`opacity-80`}>
                    <item.icon size={20} className={item.badgeColor.split(" ")[0]} />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xl font-semibold text-muted-foreground">{item.institution}</p>
                <p className="text-lg text-muted-foreground mb-3">{item.location}</p>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
