import { useEffect, useRef, useState } from "react";

import { MdArrowOutward } from "react-icons/md";

import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

import {
    HiOutlineMenuAlt3,
    HiX,
} from "react-icons/hi";

export default function Navbar() {

    const navRef = useRef();

    const [menuOpen, setMenuOpen] = useState(false);

    // Navbar Scroll Effect
    useEffect(() => {

        const handleScroll = () => {

            if (window.scrollY > 50) {

                navRef.current.classList.add(
                    "bg-black/70",
                    "backdrop-blur-xl",
                    "shadow-lg",
                    "border-b",
                    "border-white/10"
                );

            } else {

                navRef.current.classList.remove(
                    "bg-black/70",
                    "backdrop-blur-xl",
                    "shadow-lg",
                    "border-b",
                    "border-white/10"
                );
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener("scroll", handleScroll);

    }, []);

    return (
        <>
            {/* Navbar */}
            <nav
                ref={navRef}
                className="fixed top-0 left-0 w-full z-50 transition-all duration-300"
            >

                <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-20 py-4 flex items-center justify-between">

                    {/* Logo */}
                    <a
                        href="#top"
                        className="flex items-center gap-3"
                    >

                        {/* Custom Logo */}
                        <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange-500/30">
                            R
                        </div>

                        <div className="hidden sm:block">
                            <h2 className="text-white text-xl font-bold leading-none">
                                RaghunadhaReddy
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Full Stack Developer
                            </p>
                        </div>
                    </a>

                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex items-center gap-10 text-sm font-medium">

                        {[
                            {
                                name: "Home",
                                link: "#top",
                            },
                            {
                                name: "About",
                                link: "#about",
                            },
                            {
                                name: "Services",
                                link: "#services",
                            },
                            {
                                name: "Projects",
                                link: "#work",
                            },
                            {
                                name: "Contact",
                                link: "#contact",
                            },
                        ].map((item, index) => (

                            <li key={index}>

                                <a
                                    href={item.link}
                                    className="relative text-gray-300 hover:text-white transition duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-orange-400 hover:after:w-full after:transition-all"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        {/* Contact Button */}
                        <a
                            href="#contact"
                            className="hidden md:flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition duration-300 text-white font-medium shadow-lg shadow-orange-500/20"
                        >

                            Hire Me

                            <MdArrowOutward className="text-lg" />
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() =>
                                setMenuOpen(true)
                            }
                            className="lg:hidden w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                        >

                            <HiOutlineMenuAlt3 className="text-2xl" />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-[100] transition-all duration-500 ${
                    menuOpen
                        ? "visible bg-black/60 backdrop-blur-sm"
                        : "invisible"
                }`}
            >

                {/* Sidebar */}
                <div
                    className={`absolute top-0 right-0 h-full w-80 max-w-full bg-[#0f172a] border-l border-white/10 shadow-2xl p-8 transition-transform duration-500 ${
                        menuOpen
                            ? "translate-x-0"
                            : "translate-x-full"
                    }`}
                >

                    {/* Top */}
                    <div className="flex justify-between items-center mb-14">

                        <div className="flex items-center gap-3">

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white text-2xl font-bold">
                                R
                            </div>

                            <div>
                                <h2 className="text-white font-bold">
                                    RaghunadhaReddy
                                </h2>

                                <p className="text-sm text-gray-400">
                                    Developer
                                </p>
                            </div>
                        </div>

                        {/* Close */}
                        <button
                            onClick={() =>
                                setMenuOpen(false)
                            }
                            className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white"
                        >

                            <HiX className="text-2xl" />
                        </button>
                    </div>

                    {/* Links */}
                    <ul className="flex flex-col gap-8 text-lg font-medium">

                        {[
                            {
                                name: "Home",
                                link: "#top",
                            },
                            {
                                name: "About",
                                link: "#about",
                            },
                            {
                                name: "Services",
                                link: "#services",
                            },
                            {
                                name: "Projects",
                                link: "#work",
                            },
                            {
                                name: "Contact",
                                link: "#contact",
                            },
                        ].map((item, index) => (

                            <li key={index}>

                                <a
                                    href={item.link}
                                    onClick={() =>
                                        setMenuOpen(false)
                                    }
                                    className="text-gray-300 hover:text-orange-400 transition duration-300"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-16">

                        <a
                            href="https://github.com/reddy200325"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-orange-400 transition duration-300"
                        >

                            <FaGithub className="text-xl" />
                        </a>

                        <a
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-blue-500 transition duration-300"
                        >

                            <FaLinkedin className="text-xl" />
                        </a>

                        <a
                            href="https://wa.me/7013713251"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-green-500 transition duration-300"
                        >

                            <FaWhatsapp className="text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}