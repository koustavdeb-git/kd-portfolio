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
            className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 transition-all duration-300 hover:border-blue-500"
        >

            {/* Content */}
            <div className="p-6">

                {/* Badge */}
                <span
                    className={`inline-block rounded-full px-3 py-1 text-xs font-medium ${project.type === "Professional"
                            ? "bg-blue-500/10 text-blue-400"
                            : "bg-emerald-500/10 text-emerald-400"
                        }`}
                >
                    {project.type}
                </span>

                {/* Title */}
                <h3 className="mt-4 text-2xl font-bold">
                    {project.title}
                </h3>

                {/* Description */}
                <p className="mt-4 leading-7 text-slate-400">
                    {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-300"
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
                            className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 transition hover:bg-blue-500"
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
                            className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 transition hover:border-blue-500"
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
                            className="flex items-center gap-2 rounded-lg border border-slate-700 px-5 py-3 transition hover:border-blue-500"
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