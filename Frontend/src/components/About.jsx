import { motion } from "framer-motion";

import {
    FaReact,
    FaNodeJs,
    FaGithub,
    FaHtml5,
    FaCss3Alt,
    FaLaptopCode,
} from "react-icons/fa";

import {
    SiMongodb,
    SiJavascript,
    SiExpress,
    SiTailwindcss,
    SiNextdotjs,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

export default function About() {

    const tools = [
        {
            name: "VS Code",
            icon: <VscVscode />,
        },
        {
            name: "MongoDB",
            icon: <SiMongodb />,
        },
        {
            name: "GitHub",
            icon: <FaGithub />,
        },
        {
            name: "React",
            icon: <FaReact />,
        },
        {
            name: "Node JS",
            icon: <FaNodeJs />,
        },
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
            icon: <FaLaptopCode />,
            description:
                "B.Tech in Computer Science Engineering",
        },

        {
            name: "Projects",
            icon: <SiExpress />,
            description:
                "Built multiple full stack MERN applications",
        },
    ];

    return (
        <section
            id="about"
            className="relative w-full overflow-hidden bg-gradient-to-b from-[#0f172a] via-[#111827] to-black text-white px-5 sm:px-8 md:px-16 lg:px-24 py-20 sm:py-24"
        >

            {/* Background Blur */}
            <div className="absolute top-0 left-0 w-60 sm:w-72 h-60 sm:h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-0 w-60 sm:w-72 h-60 sm:h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="text-center mb-16 sm:mb-20 relative z-10"
            >

                <p className="text-orange-400 tracking-[4px] uppercase text-xs sm:text-sm mb-3">
                    Introduction
                </p>

                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold">
                    About{" "}
                    <span className="text-orange-400">
                        Me
                    </span>
                </h2>
            </motion.div>

            <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20 relative z-10">

                {/* LEFT IMAGE */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative flex justify-center"
                >

                    {/* Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-400 blur-3xl opacity-20 rounded-[40px]"></div>

                    {/* Image Card */}
                    <div className="relative bg-white/5 border border-white/10 backdrop-blur-xl p-3 sm:p-5 rounded-[35px] shadow-2xl">

                        <img
                            src="./profile.JPG"
                            alt="profile"
                            className="w-[260px] sm:w-[340px] md:w-[400px] rounded-[28px] object-cover"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-[#111827] border border-white/10 px-5 py-4 rounded-2xl shadow-xl">

                            <h3 className="text-2xl sm:text-3xl font-bold text-orange-400">
                                10+
                            </h3>

                            <p className="text-xs sm:text-sm text-gray-400">
                                Projects Completed
                            </p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="flex-1 text-center lg:text-left"
                >

                    {/* Description */}
                    <p className="text-gray-300 leading-7 sm:leading-8 text-base sm:text-lg mb-10 max-w-3xl mx-auto lg:mx-0">

                        I&apos;m Raghu, a passionate Full Stack Developer
                        focused on building modern, scalable, and
                        user-friendly web applications. I enjoy learning
                        new technologies, solving real-world problems,
                        and creating digital experiences that are both
                        functional and visually appealing.

                    </p>

                    {/* Info Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">

                        {data.map((item, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ y: -8 }}
                                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-6 hover:border-orange-400 transition duration-300 shadow-lg"
                            >

                                <div className="text-3xl text-orange-400 mb-4 flex justify-center lg:justify-start">
                                    {item.icon}
                                </div>

                                <h3 className="text-lg sm:text-xl font-semibold mb-3">
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

                        <h4 className="text-xl sm:text-2xl font-semibold mb-6">
                            Tools & Technologies
                        </h4>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5">

                            {tools.map((tool, index) => (

                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.1 }}
                                    className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl sm:text-3xl hover:border-orange-400 transition duration-300 shadow-md"
                                >

                                    {tool.icon}
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="mt-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">

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
                                name: "Next JS",
                                icon: <SiNextdotjs />,
                            },
                        ].map((skill, index) => (

                            <div
                                key={index}
                                className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-center gap-3 hover:border-orange-400 transition duration-300"
                            >

                                <span className="text-2xl text-orange-400">
                                    {skill.icon}
                                </span>

                                <span className="text-sm sm:text-base font-medium">
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