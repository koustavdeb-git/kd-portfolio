import React from 'react'
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import heroImg from "../../assets/bg1.png";
import Background from "./Background";

const Hero = () => {

    const profile = {
        name: "Koustav Deb",
        role: "Frontend Developer",
        experience: "4+ Years",
        description:
            "Frontend Developer specializing in React, JavaScript, Tailwind CSS, REST APIs, and modern web technologies. Passionate about creating clean, accessible, and high-performance user interfaces.",

        social: {
            github: "https://github.com/yourusername",
            linkedin: "https://linkedin.com/in/yourusername",
            email: "your@email.com",
        },
    };

    return (
        <section
            id="home"
            className="relative flex min-h-screen items-center overflow-hidden"
        >
            <Background />

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-10 px-5 py-16 md:gap-12 md:px-6 md:py-20 lg:flex-row lg:gap-16 lg:py-24">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full flex-1 lg:w-auto"
                >
                    <span className="mb-4 inline-block rounded-full border border-[var(--border-soft)] bg-[var(--bg-panel)] px-4 py-2 text-xs text-[var(--accent)] sm:text-sm">
                        Clean Code • Scalable UI • Great UX
                    </span>

                    <h1
                        className="w-full max-w-[540px] text-[clamp(3rem,7vw,7rem)] font-extralight leading-[0.9] tracking-[-0.05em] text-[var(--text-primary)] md:max-w-[620px] lg:max-w-none"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Turning{" "}
                        <span className="px-1 inline-block font-medium animated-gradient">
                            ideas
                        </span>
                        <br />
                        into fast,
                        <br />
                        scalable web applications.
                    </h1>



                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                    }}
                    className="flex w-full flex-1 justify-center lg:w-auto"
                >
                    <div className="relative">
                        <div
                            className="absolute inset-0 scale-110 rounded-full blur-3xl"
                            style={{ background: "var(--glow)" }}
                        />

                        <img
                            src={heroImg}
                            alt="Tech Illustration"
                            className="relative h-auto w-full max-w-[620px] object-contain select-none pointer-events-none lg:max-w-[800px]"
                            style={{ filter: "drop-shadow(0 0 32px var(--glow))" }}
                            draggable="false"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero