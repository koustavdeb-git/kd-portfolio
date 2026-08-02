import React from 'react'
import heroImg from "../../assets/my_dp2.jpg";
import { motion } from "framer-motion";
import { FaArrowRight, FaDownload } from "react-icons/fa";

import Background from "./Background";
import SocialLinks from "./SocialLinks";
import TechStack from "./TechStack";

const Hero = () => {

    const profile = {
        name: "Koustav Deb",
        role: "Frontend Developer",
        experience: "4+ Years",
        tagline: "Building fast, responsive & scalable web experiences.",
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
                        {profile.experience} Experience
                    </span>

                    <h1 className="mt-4 text-5xl font-extrabold leading-tight md:text-7xl">
                        {profile.tagline}
                    </h1>

                    <h2 className="mt-6 text-2xl font-semibold text-white md:text-3xl">
                        Hi, I'm{" "}
                        <span className="text-blue-400">{profile.name}</span>
                    </h2>

                    <p className="mt-3 text-lg text-slate-300">
                        {profile.role}
                    </p>

                    <p className="mt-8 max-w-xl leading-8 text-slate-400">
                        {profile.description}
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                        >
                            View Projects
                            <FaArrowRight className="text-sm" />
                        </a>

                        <a
                            href="/resume.pdf"
                            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-6 py-3 font-medium backdrop-blur transition hover:border-blue-500"
                        >
                            <FaDownload className="text-sm" />
                            Resume
                        </a>
                    </div>

                    <div className="mt-10">
                        <SocialLinks profile={profile.social}/>
                    </div>

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
                        <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                        <img
                            src={heroImg}
                            alt={profile.name}
                            className="relative h-72 w-72 rounded-full border-4 border-slate-800 object-cover shadow-2xl md:h-96 md:w-96"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero