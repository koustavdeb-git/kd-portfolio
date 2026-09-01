import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {

    const { theme, toggleTheme } = useTheme();
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
            <nav className="mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel)] px-4 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-colors duration-300 sm:px-5 md:px-6">
                {/* Logo */}
                <a
                    href="#home"
                    className="text-xl font-bold tracking-wide sm:text-2xl"
                >
                    <span className="text-[var(--text-primary)]">K</span>
                    <span className="text-[var(--accent)]">D.</span>
                </a>

                <ul className="hidden items-center gap-4 text-sm md:flex lg:gap-8 lg:text-base">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="relative text-[var(--text-muted)] transition duration-300 hover:text-[var(--text-primary)] after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-[var(--accent)] after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="hidden items-center gap-2 md:flex lg:gap-3">
                    {/* Theme Toggle Button */}
                    <button
                        onClick={toggleTheme}
                        className="cursor-pointer rounded-lg bg-[var(--bg-secondary)] p-2.5 text-base text-[var(--accent)] transition-all duration-300 hover:opacity-90 lg:p-3 lg:text-lg"
                        aria-label="Toggle theme"
                        title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
                    >
                        {theme === 'dark' ? <FaSun /> : <FaMoon />}
                    </button>

                    {/* Resume Button */}
                    <a
                        href="/Koustav_Deb_Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 md:block lg:px-6 lg:py-2.5 lg:text-base"
                    >
                        Resume
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-lg border border-[var(--border-soft)] bg-[var(--bg-secondary)] px-3 py-2 text-lg text-[var(--text-primary)] md:hidden"
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
            </nav>

            {isOpen && (
                <div className="mx-4 mt-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--bg-panel-strong)] backdrop-blur-xl md:hidden">
                    <ul className="flex flex-col p-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block rounded-lg px-4 py-3 text-[var(--text-muted)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                        <li className="border-t border-[var(--border-soft)] pt-3">
                            <button
                                onClick={toggleTheme}
                                className="flex w-full items-center gap-2 rounded-lg px-4 py-3 text-[var(--text-muted)] hover:bg-[var(--bg-secondary)] hover:text-[var(--accent)]"
                                aria-label="Toggle theme"
                            >
                                {theme === 'dark' ? <FaSun /> : <FaMoon />}
                                <span>{theme === 'dark' ? 'Light Theme' : 'Dark Theme'}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;