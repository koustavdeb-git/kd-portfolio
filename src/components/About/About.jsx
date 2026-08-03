import React from 'react'
import { motion } from "framer-motion";
import heroImg from "../../assets/my_dp2.jpg";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import SocialLinks from "../Hero/SocialLinks";
import TechStack from "../Hero/TechStack";
import Background from "../Hero/Background";

const About = () => {
    const highlights = [
        {
            title: "4+",
            subtitle: "Years Experience",
        },
        {
            title: "React",
            subtitle: "Frontend Development",
        },
        {
            title: "REST",
            subtitle: "API Integration",
        },
        {
            title: "UI",
            subtitle: "Responsive Design",
        },
    ];

    return (
        <section
            id="about"
            className="relative overflow-hidden bg-slate-950 py-28"
        >
            <Background />

            <div className="absolute inset-0 bg-slate-950/70" />

            <div className="absolute bottom-0 left-0 h-72 w-full bg-gradient-to-b from-transparent via-slate-950/80 to-slate-950" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">



                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center text-4xl font-bold md:text-5xl"
                >
                    About <span className="text-blue-400">Me</span>
                </motion.h2>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                        className="flex justify-center"
                    >
                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-3xl" />

                            <img
                                src={heroImg}
                                alt="Koustav Deb"
                                className="relative h-80 w-80 rounded-full border-4 border-slate-800 object-cover shadow-2xl md:h-[420px] md:w-[420px]"
                            />

                        </div>
                    </motion.div>

                    {/* Right */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: .7 }}
                    >

                        <p className="font-semibold uppercase tracking-widest text-blue-400">
                            Frontend Developer
                        </p>

                        <h3 className="mt-4 text-4xl font-bold leading-tight">
                            Building modern web applications with React.
                        </h3>

                        <p className="mt-8 leading-8 text-slate-400">
                            I'm a Frontend Developer with 4+ years of professional
                            experience building responsive, scalable, and
                            user-friendly web applications.

                            I specialize in React, JavaScript, Tailwind CSS,
                            REST API integration, and modern frontend
                            development practices. I enjoy transforming
                            business requirements into clean, reusable,
                            and maintainable user interfaces.
                        </p>

                        {/* Cards */}

                        <div className="mt-12 grid grid-cols-2 gap-5">

                            {highlights.map((item) => (

                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 backdrop-blur"
                                >
                                    <h4 className="text-3xl font-bold text-blue-400">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-slate-400">
                                        {item.subtitle}
                                    </p>
                                </div>

                            ))}

                        </div>

                        <a
                            href="/resume.pdf"
                            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium transition hover:bg-blue-500"
                        >
                            <FaDownload />
                            Download Resume
                        </a>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default About;