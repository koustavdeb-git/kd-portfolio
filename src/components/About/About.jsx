import React from 'react'
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
            className="relative overflow-hidden bg-[var(--bg-primary)] pb-20 pt-28 transition-colors duration-300"
        >
            <Background />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-28 bg-gradient-to-b from-transparent via-[var(--bg-primary)]/80 to-[var(--bg-primary)]" />

            <div className="relative z-10 mx-auto max-w-7xl px-6">



                <h2 className="mb-16 text-center text-4xl font-bold text-[var(--text-primary)] md:text-5xl transition-colors duration-300">
                    About <span className="accent-text">Me</span>
                </h2>

                <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* Left */}
                    <div className="flex justify-center">
                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-[var(--accent)]/20 blur-3xl" />

                            <img
                                src={heroImg}
                                alt="Koustav Deb"
                                className="relative h-80 w-80 rounded-full border-4 border-[var(--border-soft)] object-cover shadow-2xl md:h-[420px] md:w-[420px]"
                            />

                        </div>
                    </div>

                    {/* Right */}
                    <div>

                        <p className="font-semibold uppercase tracking-widest accent-text transition-colors duration-300">
                            Software Engineer
                        </p>

                        <h2 className="mt-4 text-4xl font-bold text-[var(--text-primary)] transition-colors duration-300 md:text-5xl">
                            Hi, I'm{" "}
                            <span className="accent-text">
                                Koustav Deb
                            </span>
                        </h2>

                        <p className="mt-8 leading-8 text-[var(--text-muted)] transition-colors duration-300">
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
                                    className="rounded-2xl border transition-colors duration-300 border-[var(--border-soft)] bg-[var(--bg-panel)] p-5 backdrop-blur"
                                >
                                    <h4 className="text-3xl font-bold accent-text transition-colors duration-300">
                                        {item.title}
                                    </h4>

                                    <p className="mt-2 text-[var(--text-muted)] transition-colors duration-300">
                                        {item.subtitle}
                                    </p>
                                </div>

                            ))}

                        </div>

                        <a
                            href="/Koustav_Deb_Resume.pdf"
                            download
                            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-[var(--accent)] px-6 py-3 font-medium text-white transition-all duration-300 hover:opacity-90"
                        >
                            <FaDownload />
                            Download Resume
                        </a>

                    </div>

                </div>

            </div>
        </section>
    );
};

export default About;