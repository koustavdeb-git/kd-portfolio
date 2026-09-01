import { motion } from "framer-motion";
import {
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -8 }}
            className="group overflow-hidden rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel)] transition-all duration-300 hover:border-[var(--accent)]"
        >

            {/* Content */}
            <div className="p-6">

                {/* Badge */}
                <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${project.type === "Professional"
                            ? "bg-[var(--accent)]/15 text-[var(--accent)]"
                            : "bg-emerald-500/10 text-emerald-600"
                        }`}
                >
                    {project.type}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold text-[var(--text-primary)]">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-[var(--text-muted)]">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-lg border border-[var(--border-soft)] px-3 py-1 text-sm text-[var(--text-muted)]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex gap-3">

                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg bg-[var(--accent)] px-5 py-3 text-white transition hover:opacity-90"
                        >
                            Visit Website
                            <FaExternalLinkAlt size={14} />
                        </a>
                    )}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-[var(--border-soft)] px-5 py-3 text-[var(--text-primary)] transition hover:border-[var(--accent)]"
                        >
                            <FaGithub />
                            GitHub
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-lg border border-[var(--border-soft)] px-5 py-3 text-[var(--text-primary)] transition hover:border-[var(--accent)]"
                        >
                            Live Demo
                            <FaExternalLinkAlt size={14} />
                        </a>
                    )}

                </div>

            </div>
        </motion.article>
    );
};

export default ProjectCard;