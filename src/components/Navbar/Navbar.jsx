const Navbar = () => {

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-slate-800 bg-slate-950/60 px-8 py-4 backdrop-blur-xl transition-all duration-300">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-wide"
                >
                    <span className="text-white">K</span>
                    <span className="text-blue-400">D.</span>
                </a>

                <ul className="hidden items-center gap-10 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-slate-300 transition duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    className="hidden rounded-xl bg-blue-600 px-6 py-2.5 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/30 md:block"
                >
                    Resume
                </a>

                {/* Mobile Menu Button */}
                <button className="md:hidden">
                    ☰
                </button>
            </nav>
        </header>
    );
};

export default Navbar;