import { motion } from "framer-motion";

const techStack = [
  "React",
  "JavaScript",
  "Tailwind CSS",
  "Redux Toolkit",
  "REST API",
  "Supabase",
];

const TechStack = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
      className="mt-10 flex flex-wrap gap-3"
    >
      {techStack.map((tech) => (
        <motion.span
          key={tech}
          whileHover={{
            y: -4,
            scale: 1.05,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel)] px-4 py-2 text-sm font-medium text-[var(--text-muted)] backdrop-blur-md transition-colors hover:border-[var(--accent)] hover:text-[var(--text-primary)]"
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TechStack;