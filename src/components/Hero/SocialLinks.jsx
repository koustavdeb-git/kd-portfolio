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
                    className="group rounded-full border border-slate-700 bg-slate-900/60 p-3 backdrop-blur transition-all duration-300 hover:border-blue-500 hover:bg-blue-500/10"
                >
                    <Icon
                        size={20}
                        className="text-slate-300 transition-colors group-hover:text-blue-400"
                    />
                </a>
            ))}
        </motion.div>
    );
};

export default SocialLinks;