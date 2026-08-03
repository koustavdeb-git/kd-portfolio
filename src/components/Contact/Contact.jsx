import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
    return (
        <section
            id="contact"
            className="bg-slate-900 py-32"
        >
            <div className="mx-auto max-w-4xl px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="uppercase tracking-[0.35em] text-blue-400">
                        Contact
                    </p>

                    <h2 className="mt-5 text-4xl font-bold md:text-5xl">
                        Let's Build Something Together
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                        I'm currently open to Frontend Developer opportunities,
                        freelance projects, and collaborations. If you think I'd
                        be a good fit for your team, I'd love to hear from you.
                    </p>

                    {/* Email Button */}

                    <a
                        href="mailto:koustavdeb2015@gmail.com"
                        className="mt-12 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                    >
                        <FaEnvelope />
                        Email Me
                    </a>


                    <div className="mt-12 flex justify-center gap-10">

                        <a
                            href="https://github.com/koustavdeb-git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
                        >
                            <FaGithub className="text-2xl" />
                            GitHub
                        </a>

                        <a
                            href="https://linkedin.com/in/yourusername"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-slate-400 transition hover:text-blue-400"
                        >
                            <FaLinkedin className="text-2xl" />
                            LinkedIn
                        </a>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;