import { motion } from "framer-motion";

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Flutter"] },
  { category: "Backend", items: ["Node.js", "Java", "PostgreSQL"] },
  { category: "Tools", items: ["Git", "Docker", "AWS"] },
  { category: "Design", items: ["Figma", "UI/UX", "Responsive Design", "Accessibility"] },
];

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      {/* Background element */}
      <div className="absolute -right-40 top-1/2 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex items-center gap-6"
        >
          <div>
            <h2 className="text-3xl sm:text-5xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              I'm a passionate, enthusiastic and detail-oriented Software Engineer with experience in mobile application development and an interest in Artificial Intelligence, eager to contribute to innovative solutions, enhance user experience, and collaborate with forward-thinking teams to make a meaningful impact.
            </p>
          </div>

          {/* Profile picture */}
          <a href="/ME.jpg" target="_blank" rel="noopener noreferrer">
            <img
              src="/ME.jpg"
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-primary hover:scale-105 transition-transform"
            />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              My journey in software engineering began with a passion for solving complex problems and creating elegant solutions.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed mb-6">
              I specialize in building full-stack applications with a focus on clean code, performance, and user experience. I'm constantly learning new technologies and best practices to stay at the forefront of web development.
            </p>
            <p className="text-foreground/80 text-lg leading-relaxed">
              When I'm not coding, you'll find me contributing to open-source projects, writing technical blog posts, or exploring new frameworks and technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {skills.map((skillGroup, idx) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="font-bold text-primary mb-3">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="text-sm text-foreground/70 flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
