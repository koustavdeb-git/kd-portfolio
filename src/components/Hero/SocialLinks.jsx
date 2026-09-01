import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SocialLinks = ({ profile }) => {

    const socials = [
        {
            name: "GitHub",
            icon: FaGithub,
            href: profile.github,
        },
        {
            name: "LinkedIn",
            icon: FaLinkedin,
            href: profile.linkedin,
        },
        {
            name: "Email",
            icon: FaEnvelope,
            href: `mailto:${profile.email}`,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4"
        >
            {socials.map(({ name, icon: Icon, href }) => (
                <a
                    key={name}
                    href={href}
                    target={name !== "Email" ? "_blank" : undefined}
                    rel={name !== "Email" ? "noopener noreferrer" : undefined}
                    aria-label={name}
                    className="group rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel)] p-3 backdrop-blur transition-all duration-300 hover:border-[var(--accent)] hover:bg-[var(--bg-secondary)]"
                >
                    <Icon
                        size={20}
                        className="text-[var(--text-muted)] transition-colors group-hover:text-[var(--accent)]"
                    />
                </a>
            ))}
        </motion.div>
    );
};

export default SocialLinks;