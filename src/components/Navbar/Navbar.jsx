import { useState } from "react";

const Navbar = () => {

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 px-4 sm:px-6 lg:px-8">
            <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-slate-700/80 bg-slate-950/60 px-6 py-4 shadow-[0_10px_35px_rgba(15,23,42,0.45)] backdrop-blur-xl">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-wide"
                >
                    <span className="text-white">K</span>
                    <span className="text-cyan-400">D.</span>
                </a>

                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-slate-300 transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/Koustav_Deb_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden rounded-xl bg-cyan-500 px-6 py-2.5 font-medium text-slate-950 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 md:block"
                >
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg border border-slate-700 bg-slate-900/80 px-3 py-2 text-lg text-slate-200 md:hidden"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {isOpen && (
                <div className="mx-4 mt-3 rounded-2xl border border-slate-700 bg-slate-950/95 backdrop-blur-xl md:hidden">
                    <ul className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block rounded-lg px-4 py-3 text-slate-300 hover:bg-slate-800 hover:text-white"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;