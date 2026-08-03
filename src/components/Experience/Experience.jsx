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
        "Developed and maintained enterprise web applications using React and JavaScript",
        "Built reusable UI components to improve development speed and consistency.",
        "Integrated REST APIs and CRUD functionality.",
        "Optimized application performance and improved user experience.",
        "Worked with Agile teams to deliver production-ready features.",
    ];

    return (
        <section
            id="experience"
            className="bg-slate-950 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mb-16 text-center"
                >
                    <p className="uppercase tracking-[0.3em] text-blue-400">
                        Experience
                    </p>

                    <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                        Professional Experience
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-slate-400">
                        Over 4 years of experience building scalable frontend
                        applications, reusable components, and modern user interfaces.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .7 }}
                    className="rounded-3xl border border-slate-800 bg-slate-900/60 p-10 backdrop-blur"
                >

                    <div className="flex flex-col justify-between gap-8 lg:flex-row">

                        {/* Left */}

                        <div className="lg:w-1/3">

                            <p className="text-blue-400 font-medium">
                                Jul 2021 - Present
                            </p>

                            <h3 className="mt-3 text-3xl font-bold">
                                Frontend Developer
                            </h3>

                            <h4 className="mt-2 text-xl text-slate-300">
                                INADEV India
                            </h4>

                        </div>

                        {/* Right */}

                        <div className="lg:w-2/3">

                            <ul className="space-y-5">

                                {achievements.map((item) => (

                                    <li
                                        key={item}
                                        className="flex gap-4 text-slate-300"
                                    >

                                        <span className="mt-2 h-2 w-2 rounded-full bg-blue-400" />

                                        <span>{item}</span>

                                    </li>

                                ))}

                            </ul>

                            <div className="mt-12">

                                <h5 className="mb-5 text-lg font-semibold">
                                    Technologies Used
                                </h5>

                                <div className="flex flex-wrap gap-4">

                                    {techStack.map(({ name, icon: Icon }) => (

                                        <div
                                            key={name}
                                            className="flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-3 transition hover:border-blue-500"
                                        >
                                            <Icon
                                                size={22}
                                                className="text-blue-400"
                                            />

                                            <span>{name}</span>

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