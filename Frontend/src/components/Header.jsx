import { FaArrowRight } from "react-icons/fa";
import { RiFileDownloadFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b] text-white px-6">

            {/* Background Blur Effects */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 w-full max-w-5xl mx-auto text-center">

                {/* Profile Image */}
                <div className="relative inline-block mb-8">
                    <img
                        src="/profile.JPG"
                        alt="profile"
                        className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover border-4 border-white/20 shadow-2xl hover:scale-105 transition duration-500"
                    />

                    <span className="absolute bottom-3 right-2 w-5 h-5 bg-green-400 border-2 border-black rounded-full"></span>
                </div>

                {/* Intro */}
                <h3 className="flex items-center justify-center gap-2 text-lg md:text-2xl font-medium text-gray-300 mb-4">
                    Hi, I&apos;m
                    <span className="text-white font-semibold">
                        Yaramareddy Raghunadha Reddy
                    </span>

                    <img
                        src="./hand-icon.png"
                        alt="wave"
                        className="w-6 animate-bounce"
                    />
                </h3>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
                    Full Stack Developer
                    <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-2">
                        Based in Bangalore
                    </span>
                </h1>

                {/* Description */}
                <p className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg leading-8">
                    I create modern, responsive, and scalable web applications
                    with beautiful user experiences using the latest web
                    technologies.
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">

                    {/* Contact Button */}
                    <Link
                        to="#contact"
                        className="group px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30 flex items-center gap-3 text-lg font-medium"
                    >
                        Contact Me
                        <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                    </Link>

                    {/* Resume Button */}
                    <a
                        href="./assets/dev-icon.png"
                        download
                        className="group px-8 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-lg hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-3 text-lg font-medium"
                    >
                        Download Resume
                        <RiFileDownloadFill className="text-xl group-hover:translate-y-1 transition duration-300" />
                    </a>
                </div>

                {/* Bottom Tags */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-14 text-sm text-gray-400">
                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                        React.js
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                        Node.js
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                        MongoDB
                    </span>

                    <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10">
                        Express.js
                    </span>
                </div>
            </div>
        </section>
    );
}