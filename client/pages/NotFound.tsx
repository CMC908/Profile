import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-md"
      >
        <motion.div
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary mb-6"
        >
          404
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-bold mb-4">Page not found</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Oops! It looks like you've stumbled upon a page that doesn't exist. Let me help you find your way back.
        </p>

        <div className="space-y-4">
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Return home
          </Link>

          <p className="text-sm text-muted-foreground">
            or explore my <a href="/#work" className="text-primary hover:underline">work</a>
          </p>
        </div>
      </motion.div>
    </main>
  );
}
