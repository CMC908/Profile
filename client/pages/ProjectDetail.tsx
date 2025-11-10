import { motion } from "framer-motion";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const projects = [
  {
    id: 1,
    title: "Conceptual Food Review app",
    description: "A conceptual mobile app that allows you to check and review different restaurants",
    longDescription: "This innovative mobile application provides users with a comprehensive platform to discover, review, and rate restaurants. Features include real-time restaurant information, user reviews, photo galleries, and a seamless rating system.",
    tags: ["Dart", "Firebase", "API integration"],
    icon: "🛍️",
    images: [
      "/food2.png",
      "/food1.png",
    ],
  },
  {
    id: 2,
    title: "Machine Learning APP",
    description: "A mobile application able to make predictions through the use of a machine learning model",
    longDescription: "This cutting-edge application leverages machine learning to provide intelligent predictions and insights. Built with a scalable backend and intuitive mobile interface, it demonstrates real-world AI implementation.",
    tags: ["Flutter", "python", "Firebase", "API Integration"],
    icon: "📊",
    images: [
      "/MLT1.png",
      "/MLT2.jpg",
    ],
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task manager with real-time updates, file attachments, and team workspaces.",
    longDescription: "A powerful task management solution enabling teams to collaborate effectively with real-time synchronization, advanced filtering, and comprehensive project tracking capabilities.",
    tags: ["Flutter", "Firebase", "Authentication", "API Integration"],
    icon: "✓",
    images: [
      "/fms1.jpg",
      "/fms2.jpg",
    ],
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id || "1"));

  if (!project) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium"
          >
            Back to home
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.button
            onClick={() => navigate("/#work")}
            whileHover={{ x: -5 }}
            className="mb-8 flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to projects
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">{project.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{project.longDescription}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-full font-medium text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all"
              >
                <img
                  src={image}
                  alt={`${project.title} - Screenshot ${index + 1}`}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}


