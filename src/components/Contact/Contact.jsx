import { motion } from "framer-motion";
import { useState } from "react";
import { FaRegCopy, FaCheck, FaGithub, FaLinkedin, FaExternalLinkAlt } from "react-icons/fa";

const Contact = () => {
    const email = "koustavdeb2015@gmail.com";

    const [copied, setCopied] = useState(false);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <section
            id="contact"
            className="bg-slate-900 py-24"
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

                    {/* Email */}

                    <div className="mt-12">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500">
                            Email
                        </p>

                        <h3 className="mt-4 break-all text-2xl font-semibold text-white md:text-3xl">
                            {email}
                        </h3>
                    </div>

                    {/* Buttons */}

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <button
                            onClick={copyEmail}
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30"
                        >
                            {copied ? <FaCheck /> : <FaRegCopy />}

                            {copied ? "Copied!" : "Copy Email"}
                        </button>

                        <a
                            href="https://www.linkedin.com/in/koustav-deb-0681121b5/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition hover:border-blue-500 hover:text-white"
                        >
                            <FaLinkedin />
                            <span>LinkedIn</span>
                            <FaExternalLinkAlt className="text-xs opacity-70" />
                        </a>

                        <a
                            href="https://github.com/koustavdeb-git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 px-6 py-3 text-slate-300 transition hover:border-blue-500 hover:text-white"
                        >
                            <FaGithub />
                            <span>GitHub</span>
                            <FaExternalLinkAlt className="text-xs opacity-70" />
                        </a>

                    </div>

                </motion.div>
            </div>
        </section>
    );
};

export default Contact;