import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Conceptual Food Review app",
    description: "A conceptual mobile app that allows you to check and review different restaurants",
    tags: ["Dart", "Firebase", "API integration"],
    gradient: "from-primary/20 to-secondary/20",
    icon: "⭐",
    demo: "/project/1",
    images: [
      "",
      "",
    ],
  },
  {
    id: 2,
    title: "Machine Learning APP",
    description: "A mobile application able to make predictions through the use of a machine learning model",
    tags: ["Flutter", "python", "Firebase", "API Integration"],
    gradient: "from-secondary/20 to-accent/20",
    icon: "📊",
    demo: "/project/2",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=800&fit=crop",
      "https://images.unsplash.com/photo-1555099962-4199f1a92f7d?w=500&h=800&fit=crop",
    ],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, file attachments, and team workspaces.",
    tags: ["Flutter", "Firebase", "Authentication", "API Integration"],
    gradient: "from-accent/20 to-primary/20",
    icon: "✓",
    demo: "/project/3",
    images: [
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=800&fit=crop",
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function Projects() {
  return (
    <section id="work" className="py-20 sm:py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">Featured Work</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of projects that showcase my expertise in building scalable, user-centric applications.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              whileHover={{ y: -5 }}
              className={`group relative p-6 sm:p-8 rounded-2xl bg-gradient-to-br ${project.gradient} border border-border/50 hover:border-primary/50 transition-all duration-300 cursor-pointer`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-secondary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-2xl transition-all duration-300" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{project.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.a
                  href={project.demo}
                  whileHover={{ x: 5 }}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  View project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}


