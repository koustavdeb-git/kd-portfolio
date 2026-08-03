const Navbar = () => {

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-2xl font-bold tracking-wide text-white"
                >
                    KD
                </a>

                <ul className="hidden items-center gap-8 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="text-slate-300 transition hover:text-white"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Resume Button */}
                <a
                    href="/resume.pdf"
                    className="hidden rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-500 md:block"
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