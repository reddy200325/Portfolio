import { FaArrowRight } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import {
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

import resumePDF from "../assets/resume.pdf";

export default function Header() {

    return (
        <section
            id="top"
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] text-white px-5 sm:px-6 pt-28"
        >

            {/* Background Effects */}
            <div className="absolute top-20 left-0 w-52 sm:w-72 h-52 sm:h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-60 sm:w-80 h-60 sm:h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left order-2 lg:order-1">

                    {/* Small Intro */}
                    <div className="inline-flex items-center gap-3 px-4 sm:px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl mb-8">

                        <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></span>

                        <p className="text-xs sm:text-sm text-gray-300">
                            Available For Work
                        </p>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">

                        {/* Mobile + Tablet */}
                        <span className="block lg:hidden">
                            Hi, I&apos;m{" "}

                            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                                RaghunadhaReddy
                            </span>
                        </span>

                        {/* Desktop */}
                        <span className="hidden lg:block">
                            Hi, I&apos;m
                            <br />

                            <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                                RaghunadhaReddy
                            </span>
                        </span>

                        <span className="block text-white mt-2">
                            Full Stack Developer
                        </span>

                    </h1>

                    {/* Description */}
                    <p className="mt-6 sm:mt-8 text-gray-400 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto lg:mx-0">

                        I build modern, scalable and high-performance web
                        applications using MERN Stack with beautiful UI/UX
                        experiences for users.

                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-5 mt-10">

                        {/* Contact */}
                        <a
                            href="#contact"
                            className="w-full sm:w-auto justify-center group px-7 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition-all duration-300 shadow-xl shadow-orange-500/20 flex items-center gap-3 text-base sm:text-lg font-medium"
                        >

                            Contact Me

                            <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                        </a>

                        {/* Resume */}
                        <a
                            href={resumePDF}
                            download="Raghunadha_Reddy_Resume.pdf"
                            className="w-full sm:w-auto justify-center group px-7 py-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 text-base sm:text-lg font-medium"
                        >

                            Download CV

                            <RiFileDownloadFill className="text-xl group-hover:translate-y-1 transition duration-300" />
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center justify-center lg:justify-start gap-4 sm:gap-5 mt-10 sm:mt-12">

                        <a
                            href="https://github.com/reddy200325"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl hover:bg-orange-400 hover:border-orange-400 hover:scale-110 transition duration-300"
                        >

                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raghunadhareddy-yaramareddy-b57ba039a"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300"
                        >

                            <FaLinkedin />
                        </a>

                        <a
                            href="https://wa.me/7013713251"
                            target="_blank"
                            rel="noreferrer"
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl sm:text-2xl hover:bg-green-500 hover:border-green-500 hover:scale-110 transition duration-300"
                        >

                            <FaWhatsapp />
                        </a>
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3 sm:gap-4 mt-10 sm:mt-12 justify-center lg:justify-start">

                        {[
                            "React.js",
                            "Node.js",
                            "Express.js",
                            "MongoDB",
                            "Tailwind CSS",
                        ].map((tech, index) => (

                            <span
                                key={index}
                                className="px-4 sm:px-5 py-2 rounded-full bg-white/5 border border-white/10 text-sm sm:text-base text-gray-300 hover:bg-orange-400 hover:text-white transition duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center order-1 lg:order-2">

                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 rounded-[40px] blur-3xl opacity-30"></div>

                        {/* Card */}
                        <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-3 sm:p-5 rounded-[35px] sm:rounded-[40px] shadow-2xl">

                            <img
                                src="/profile.JPG"
                                alt="profile"
                                className="w-[260px] sm:w-[340px] md:w-[400px] rounded-[25px] sm:rounded-[30px] object-cover"
                            />

                            {/* Experience Card */}
                            <div className="absolute -bottom-4 sm:-bottom-6 -left-2 sm:-left-6 bg-[#111827] border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl">

                                <h2 className="text-2xl sm:text-3xl font-bold text-orange-400">
                                    1+
                                </h2>

                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Years Experience
                                </p>
                            </div>

                            {/* Projects Card */}
                            <div className="absolute -top-4 sm:-top-6 -right-2 sm:-right-6 bg-[#111827] border border-white/10 rounded-2xl px-4 sm:px-6 py-3 sm:py-4 shadow-xl">

                                <h2 className="text-2xl sm:text-3xl font-bold text-pink-400">
                                    5+
                                </h2>

                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Projects Completed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}