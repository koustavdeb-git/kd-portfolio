import { motion } from "framer-motion";
import {
    FaReact,
    FaJsSquare,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiTailwindcss,
    SiSupabase,
} from "react-icons/si";

const Experience = () => {
    const techStack = [
        { name: "React", icon: FaReact },
        { name: "JavaScript", icon: FaJsSquare },
        { name: "Tailwind CSS", icon: SiTailwindcss },
        { name: "Supabase", icon: SiSupabase },
        { name: "Git", icon: FaGitAlt },
    ];

    const achievements = [
        "Developed responsive and reusable React components for enterprise applications.",
        "Optimized application performance and enhanced user experience.",
        "Integrated REST APIs and implemented CRUD operations.",
        "Debugged and resolved production issues to improve application stability.",
        "Collaborated with designers, backend developers, and QA in an Agile environment.",
        "Participated in code reviews and maintained clean, scalable code.",
    ];

    return (
        <section
            id="experience"
            className="bg-[var(--bg-primary)] pt-24 transition-colors duration-300"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mb-16 text-center"
                >
                    <p className="uppercase tracking-[0.3em] text-[var(--accent)]">
                        Experience
                    </p>

                    <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
                        Professional Experience
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-[var(--text-muted)]">
                        Over 4 years of experience building scalable frontend
                        applications, reusable components, and modern user interfaces.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="rounded-3xl border border-[var(--border-soft)] bg-[var(--bg-panel)] p-10 backdrop-blur transition-colors duration-300"
                >

                    <div className="flex flex-col justify-between gap-8 lg:flex-row">

                        {/* Left */}

                        <div className="lg:w-1/3">

                            <p className="font-medium text-[var(--accent)]">
                                Jul 2021 - Present
                            </p>

                            <h3 className="mt-3 text-3xl font-bold text-[var(--text-primary)]">
                                Software Engineer
                            </h3>

                            <h4 className="mt-2 text-xl text-[var(--text-muted)]">
                                INADEV India
                            </h4>

                        </div>

                        {/* Right */}

                        <div className="lg:w-2/3">

                            <ul className="space-y-5">

                                {achievements.map((item) => (

                                    <li
                                        key={item}
                                        className="flex gap-4 text-[var(--text-primary)]"
                                    >

                                        <span className="mt-2 h-2 w-2 rounded-full bg-[var(--accent)]" />

                                        <span>{item}</span>

                                    </li>

                                ))}

                            </ul>

                            <div className="mt-12">

                                <h5 className="mb-5 text-lg font-semibold text-[var(--text-primary)]">
                                    Technologies Used
                                </h5>

                                <div className="flex flex-wrap gap-4">

                                    {techStack.map(({ name, icon: Icon }) => (

                                        <div
                                            key={name}
                                            className="flex items-center gap-3 rounded-xl border border-[var(--border-soft)] bg-[var(--bg-secondary)] px-5 py-3 transition hover:border-[var(--accent)]"
                                        >
                                            <Icon
                                                size={22}
                                                className="text-[var(--accent)]"
                                            />

                                            <span className="text-[var(--text-primary)]">{name}</span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default Experience;