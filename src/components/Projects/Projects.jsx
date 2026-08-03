import { motion } from "framer-motion";

import ProjectCard from "./ProjectCard";

import {
    professionalProjects,
    personalProjects,
} from "./projectsData";

const Projects = () => {
    return (
        <section
            id="projects"
            className="bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Section Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <p className="uppercase tracking-[0.3em] text-blue-400">
                        Portfolio
                    </p>

                    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                        Featured Projects
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-slate-400">
                        A collection of enterprise applications and personal
                        projects showcasing my experience in building modern,
                        scalable, and user-focused web applications.
                    </p>
                </motion.div>

                {/* Professional */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10"
                >
                    <h3 className="text-3xl font-bold">
                        Professional Projects
                    </h3>

                    <p className="mt-3 text-slate-400">
                        Enterprise applications developed for clients during my
                        professional experience.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">

                    {professionalProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

                {/* Personal */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-10 mt-24"
                >
                    <h3 className="text-3xl font-bold">
                        Personal Projects
                    </h3>

                    <p className="mt-3 text-slate-400">
                        Independent projects built to learn, experiment, and
                        strengthen my frontend development skills.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2">

                    {personalProjects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Projects;