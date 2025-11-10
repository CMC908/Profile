import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-sm text-white"
            >
              C
            </motion.div>
            <span className="hidden sm:inline font-bold text-lg">Chisenga Mukwala</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            <motion.a
              href="#work"
              whileHover={{ y: -2 }}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              Work
            </motion.a>
            <motion.a
              href="#about"
              whileHover={{ y: -2 }}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ y: -2 }}
              className="text-foreground/70 hover:text-foreground transition-colors text-sm font-medium"
            >
              Contact
            </motion.a>
          </nav>

          <div className="flex items-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-opacity-90 transition-colors"
            >
              Get in touch
            </motion.a>

            <Link to="/education">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2 bg-secondary text-white rounded-lg font-medium text-sm hover:bg-opacity-90 transition-colors"
              >
                Education
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
