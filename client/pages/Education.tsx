import { motion } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const educationData = [
  {
    id: 1,
    school: "ZCAS University",
    degree: "Bachelor of Science in Computer Science",
    year: "2022 -Present ",
    description: "Comprehensive study of software development, algorithms, and system design with focus on modern programming paradigms and web technologies.",
    icon: "🎓",
  },
  {
    id: 2,
    school: "Konkola Seconday Trust School",
    degree: "Grade 12 ECZ certificate ",
    year: "2022",
    description: "Advanced mobile development course covering Flutter, cross-platform development, and app architecture best practices.",
    icon: "📃",
  },
  {
    id: 3,
    school: "Cissco Networking Academy",
    degree: "AI Development Certification",
    year: "2025-present",
    description: "Intensive program focusing on machine learning, neural networks, and AI applications in real-world projects.",
    icon: "🤖",
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

export default function Education() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Education</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              My academic journey and continuous learning experiences that have shaped my career in software development.
            </p>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="space-y-6"
          >
            {educationData.map((edu) => (
              <motion.div
                key={edu.id}
                variants={item}
                whileHover={{ x: 10 }}
                className="p-6 sm:p-8 rounded-2xl bg-card border border-border/50 hover:border-primary/50 transition-all"
              >
                <div className="flex gap-6">
                  <div className="text-4xl flex-shrink-0">{edu.icon}</div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-2xl font-bold mb-1">{edu.school}</h3>
                        <p className="text-primary font-semibold">{edu.degree}</p>
                      </div>
                      <span className="text-muted-foreground font-medium">{edu.year}</span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
