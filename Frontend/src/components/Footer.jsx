import {
    FaWhatsapp,
    FaLinkedin,
    FaGithub,
    FaArrowUp,
} from "react-icons/fa";

import { AiTwotoneMail } from "react-icons/ai";

export default function Footer() {

    return (
        <footer className="relative mt-24 bg-gradient-to-b from-[#0f172a] via-black to-black text-white overflow-hidden">

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">

                {/* Top Section */}
                <div className="flex flex-col items-center text-center">

                    {/* Custom Logo */}
                    <div className="w-24 h-24 mb-6 rounded-3xl bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center shadow-2xl shadow-orange-500/30">

                        <span className="text-4xl font-bold text-white">
                            RR
                        </span>

                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Let&apos;s Build Something Amazing
                    </h2>

                    {/* Description */}
                    <p className="max-w-2xl text-gray-400 leading-8 mb-8">
                        Passionate Full Stack Developer creating modern,
                        scalable, and visually stunning web applications with
                        exceptional user experiences.
                    </p>

                    {/* Email */}
                    <a
                        href="mailto:rreddy2512@gmail.com"
                        className="group flex items-center gap-3 px-6 py-4 rounded-full bg-white/5 border border-white/10 hover:border-orange-400 hover:bg-orange-400/10 transition duration-300"
                    >
                        <AiTwotoneMail className="text-2xl text-orange-400" />

                        <span className="text-gray-300 group-hover:text-white transition">
                            rreddy2512@gmail.com
                        </span>
                    </a>

                    {/* Social Icons */}
                    <div className="flex items-center gap-6 mt-10">

                        <a
                            href="https://github.com/reddy200325"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-400 hover:border-orange-400 hover:scale-110 transition duration-300"
                        >
                            <FaGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/raghunadhareddy-yaramareddy-b57ba039a"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300"
                        >
                            <FaLinkedin />
                        </a>

                        <a
                            href="https://wa.me/7013713251"
                            target="_blank"
                            rel="noreferrer"
                            className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-green-500 hover:border-green-500 hover:scale-110 transition duration-300"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 my-12"></div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    <p className="text-gray-400 text-center md:text-left">
                        © {new Date().getFullYear()}{" "}
                        <span className="text-white font-medium">
                            Raghunadha Reddy
                        </span>
                        . All rights reserved.
                    </p>

                    {/* Back To Top */}
                    <a
                        href="#top"
                        className="group flex items-center gap-3 px-5 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-400 hover:border-orange-400 transition duration-300"
                    >
                        Back To Top

                        <FaArrowUp className="group-hover:-translate-y-1 transition duration-300" />
                    </a>
                </div>
            </div>
        </footer>
    );
}