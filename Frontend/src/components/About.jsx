import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
} from "react-icons/fa";

import {
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiTailwindcss,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function About() {

    const tools = [
        { name: "VS Code", icon: <VscVscode /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "React", icon: <FaReact /> },
        { name: "Node JS", icon: <FaNodeJs /> },
    ];

    const data = [
        {
            name: "Languages",
            icon: <SiJavascript />,
            description:
                "HTML, CSS, JavaScript, React JS, Next JS, Node JS",
        },
        {
            name: "Education",
            icon: <FaHtml5 />,
            description: "B.Tech in Computer Science",
        },
        {
            name: "Projects",
            icon: <SiExpress />,
            description: "Built multiple full stack web applications",
        },
    ];

    return (
        <section
            id="about"
            className="relative w-full px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white overflow-hidden"
        >

            {/* Background Blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-center mb-20 relative z-10"
            >
                <p className="text-orange-400 tracking-widest uppercase text-sm mb-3">
                    Introduction
                </p>

                <h2 className="text-4xl md:text-6xl font-bold">
                    About <span className="text-orange-400">Me</span>
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-20 relative z-10">

                {/* Left Image */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative"
                >
                    <img
                        src="./profile.JPG"
                        alt="profile"
                        className="w-72 md:w-96 rounded-3xl object-cover border border-white/10 shadow-2xl"
                    />

                    {/* Floating Card */}
                    <div className="absolute -bottom-8 -right-8 bg-white/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">
                        <h3 className="text-2xl font-bold text-orange-400">
                            3+
                        </h3>

                        <p className="text-sm text-gray-300">
                            Projects Completed
                        </p>
                    </div>
                </motion.div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1"
                >

                    {/* Description */}
                    <p className="text-gray-300 leading-8 text-lg mb-10 max-w-3xl">
                        I'm Raghu, a passionate Full Stack Developer focused on
                        building modern, scalable, and user-friendly web
                        applications. I enjoy learning new technologies,
                        solving real-world problems, and creating digital
                        experiences that are both functional and visually
                        appealing.
                    </p>

                    {/* Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                        {data.map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -10 }}
                                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-orange-400 transition duration-300 shadow-lg"
                            >
                                <div className="text-3xl text-orange-400 mb-4">
                                    {item.icon}
                                </div>

                                <h3 className="text-xl font-semibold mb-3">
                                    {item.name}
                                </h3>

                                <p className="text-gray-400 text-sm leading-6">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Tools */}
                    <div className="mt-12">

                        <h4 className="text-xl font-semibold mb-6">
                            Tools & Technologies
                        </h4>

                        <div className="flex flex-wrap gap-5">

                            {tools.map((tool, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-3xl hover:border-orange-400 transition duration-300 shadow-md"
                                >
                                    {tool.icon}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4">

                        {[
                            {
                                name: "HTML",
                                icon: <FaHtml5 />,
                            },
                            {
                                name: "CSS",
                                icon: <FaCss3Alt />,
                            },
                            {
                                name: "Tailwind",
                                icon: <SiTailwindcss />,
                            },
                            {
                                name: "MongoDB",
                                icon: <SiMongodb />,
                            },
                        ].map((skill, index) => (
                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-orange-400 transition"
                            >
                                <span className="text-2xl text-orange-400">
                                    {skill.icon}
                                </span>

                                <span className="text-sm font-medium">
                                    {skill.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}