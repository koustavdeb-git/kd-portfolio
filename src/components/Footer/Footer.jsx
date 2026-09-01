import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: .8 }}
            className="border-t border-[var(--border-soft)] bg-[var(--bg-primary)] transition-colors duration-300"
        >
            <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

                <div>
                    <p className="text-[var(--text-muted)]">
                        © {year} Koustav Deb. All rights reserved.
                    </p>

                    <p className="mt-2 text-sm text-[var(--text-muted)]">
                        Built with React, Tailwind CSS & Framer Motion
                    </p>
                </div>

                <a
                    href="#home"
                    className="group flex items-center gap-2 text-[var(--text-muted)] transition hover:text-[var(--accent)]"
                >
                    Back to Top

                    <FaArrowUp className="transition group-hover:-translate-y-1" />
                </a>

            </div>
        </motion.footer>
    );
};

export default Footer;