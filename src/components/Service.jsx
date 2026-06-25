import { motion } from "framer-motion";

import {
    FaCode,
    FaMobileAlt,
    FaPaintBrush,
    FaArrowRight,
    FaReact,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiMongodb,
    SiExpress,
    SiTailwindcss,
} from "react-icons/si";

import { MdDesignServices } from "react-icons/md";

export default function Services() {

    const services = [
        {
            name: "Frontend Development",
            icon: <FaReact />,
            description:
                "Modern responsive websites using React.js, Tailwind CSS, animations, and beautiful UI/UX designs.",
            skills: ["React", "Tailwind", "Responsive UI"],
        },

        {
            name: "Backend Development",
            icon: <FaNodeJs />,
            description:
                "Scalable backend APIs with Node.js, Express.js, authentication, and secure database integration.",
            skills: ["Node.js", "Express", "REST API"],
        },

        {
            name: "Database Management",
            icon: <SiMongodb />,
            description:
                "Efficient MongoDB database architecture with optimized queries and secure data handling.",
            skills: ["MongoDB", "Mongoose", "Database"],
        },

        {
            name: "Full Stack Apps",
            icon: <FaCode />,
            description:
                "Complete MERN stack web applications with frontend, backend, authentication, and deployment.",
            skills: ["MERN", "JWT", "Deployment"],
        },

        {
            name: "Mobile Friendly Design",
            icon: <FaMobileAlt />,
            description:
                "Fully responsive applications optimized for desktop, tablet, and mobile devices.",
            skills: ["Mobile UI", "Responsive", "Optimization"],
        },
    ];

    return (
        <section
            id="services"
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
                        Services
                    </p>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
                        What I <span className="text-orange-400">Do</span>
                    </h2>

                    <p className="max-w-3xl mx-auto mt-6 text-gray-400 text-base sm:text-lg leading-8">
                        I build modern, scalable, and visually stunning web
                        applications with smooth user experiences using the
                        latest MERN Stack technologies.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">

                    {services.map((service, index) => (

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
                            className="group relative bg-white/5 border border-white/10 rounded-3xl p-7 backdrop-blur-xl hover:border-orange-400 transition-all duration-300 overflow-hidden"
                        >

                            {/* Hover Gradient */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-orange-500/10 to-pink-500/10"></div>

                            <div className="relative z-10">

                                {/* Icon */}
                                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-400/20 flex items-center justify-center text-3xl text-orange-400 mb-6 group-hover:scale-110 transition duration-300">
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-semibold mb-4">
                                    {service.name}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 leading-7 text-sm mb-6">
                                    {service.description}
                                </p>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-3 mb-6">

                                    {service.skills.map((skill, i) => (

                                        <span
                                            key={i}
                                            className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-gray-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {/* Button */}
                                <button
                                    className="group/btn inline-flex items-center gap-3 text-orange-400 font-medium"
                                >

                                    Explore

                                    <FaArrowRight className="group-hover/btn:translate-x-1 transition duration-300 text-sm" />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Tech Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >

                    <h3 className="text-2xl md:text-3xl font-semibold mb-10">
                        Technologies I Use
                    </h3>

                    <div className="flex flex-wrap justify-center gap-5">

                        {[
                            {
                                icon: <FaReact />,
                                name: "React",
                            },
                            {
                                icon: <FaNodeJs />,
                                name: "Node.js",
                            },
                            {
                                icon: <SiExpress />,
                                name: "Express",
                            },
                            {
                                icon: <SiMongodb />,
                                name: "MongoDB",
                            },
                            {
                                icon: <SiTailwindcss />,
                                name: "Tailwind",
                            },
                            {
                                icon: <FaPaintBrush />,
                                name: "UI Design",
                            },
                        ].map((tech, index) => (

                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.08 }}
                                className="flex items-center gap-3 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 hover:border-orange-400 transition duration-300"
                            >

                                <span className="text-2xl text-orange-400">
                                    {tech.icon}
                                </span>

                                <span className="text-gray-300 font-medium">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}