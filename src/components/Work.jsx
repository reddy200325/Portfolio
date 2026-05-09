import { motion } from "framer-motion";

import {
    FaArrowRight,
    FaGithub,
    FaExternalLinkAlt,
} from "react-icons/fa";

export default function Work() {

    const work = [
        {
            name: "E-Commerce Website",
            image: "./src/assets/work-1.png",
            category: "MERN Stack",
            description:
                "Modern full stack e-commerce application with authentication, cart, Stripe payments, and admin dashboard.",
            github: "https://github.com/reddy200325",
            live: "https://stylewave360.vercel.app",
            tech: ["React", "Node.js", "MongoDB"],
        },

        {
            name: "Portfolio Website",
            image: "./src/assets/work-2.png",
            category: "Frontend Development",
            description:
                "Creative portfolio website with responsive UI, animations, dark theme, and smooth user experience.",
            github: "https://github.com/reddy200325",
            live: "#",
            tech: ["React", "Tailwind", "Framer Motion"],
        },

        {
            name: "Chat Application",
            image: "./src/assets/work-3.png",
            category: "Realtime App",
            description:
                "Realtime messaging application with authentication, online status, and responsive modern UI.",
            github: "https://github.com/reddy200325",
            live: "#",
            tech: ["Socket.io", "React", "Express"],
        },

        {
            name: "Admin Dashboard",
            image: "./src/assets/work-4.png",
            category: "Dashboard UI",
            description:
                "Professional admin dashboard with analytics, charts, authentication, and responsive layout.",
            github: "https://github.com/reddy200325",
            live: "https://stylewave-admin.vercel.app",
            tech: ["React", "Tailwind", "Charts"],
        },
    ];

    return (
        <section
            id="work"
            className="relative w-full overflow-hidden bg-[#020617] py-20 px-5 sm:px-8 md:px-16 lg:px-24 text-white"
        >

            {/* Background Glow */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >

                    <p className="text-orange-400 uppercase tracking-[4px] text-sm mb-4">
                        Portfolio
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        My Latest <span className="text-orange-400">Projects</span>
                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-8">
                        Explore my recent projects showcasing modern UI,
                        scalable backend systems, and full stack MERN
                        applications with responsive design.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

                    {work.map((item, index) => (

                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                            }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl hover:border-orange-400 transition duration-300"
                        >

                            {/* Image */}
                            <div className="relative overflow-hidden">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                                {/* Category */}
                                <span className="absolute top-4 left-4 px-4 py-1 rounded-full bg-orange-500 text-xs font-semibold">
                                    {item.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-6">

                                <h3 className="text-2xl font-semibold mb-4">
                                    {item.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-7 mb-6">
                                    {item.description}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-3 mb-6">

                                    {item.tech.map((tech, i) => (

                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Buttons */}
                                <div className="flex items-center gap-4">

                                    <a
                                        href={item.live}
                                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-[1.02] transition duration-300 font-medium"
                                    >

                                        Live Demo

                                        <FaExternalLinkAlt className="text-sm" />
                                    </a>

                                    <a
                                        href={item.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl hover:bg-orange-500 hover:border-orange-500 transition duration-300"
                                    >

                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-16"
                >

                    <a
                        href="https://github.com/reddy200325"
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center gap-4 px-8 py-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-orange-500 hover:border-orange-500 transition duration-300 text-lg font-medium"
                    >

                        View More Projects

                        <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}