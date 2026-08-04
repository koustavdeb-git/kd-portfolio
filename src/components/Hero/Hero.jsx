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

            <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col-reverse items-center gap-16 px-6 py-24 lg:flex-row">
                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >
                    <span className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                        Clean Code • Scalable UI • Great UX
                    </span>

                    <h1
                        className="text-6xl md:text-8xl font-extralight leading-[1.05]"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                        Turning{" "}
                        <span className="font-medium text-400 animated-gradient">
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
                    className="flex flex-1 justify-center"
                >
                    <div className="relative">
                        {/* Blue glow */}
                        <div className="absolute inset-0 bg-blue-500/10 blur-3xl scale-110" />

                        <img
                            src={heroImg}
                            alt="Tech Illustration"
                            className="relative w-[620px] md:w-[620px] lg:w-[800px] h-auto object-contain drop-shadow-[0_0_30px_rgba(59,130,246,0.35)] select-none pointer-events-none"
                            draggable="false"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero