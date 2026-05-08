import { motion } from "framer-motion";

import {
    FaCode,
    FaMobileAlt,
    FaPaintBrush,
    FaArrowRight,
} from "react-icons/fa";

import { MdDesignServices } from "react-icons/md";

export default function Services() {

    const services = [
        {
            name: "Web Development",
            icon: <FaCode />,
            description:
                "Modern and responsive websites using React, Node.js, MongoDB, and the latest web technologies.",
            link: "#",
        },

        {
            name: "Mobile Apps",
            icon: <FaMobileAlt />,
            description:
                "Cross-platform mobile applications with smooth UI, fast performance, and scalable architecture.",
            link: "#",
        },

        {
            name: "UI / UX Design",
            icon: <MdDesignServices />,
            description:
                "Creative and user-friendly interface designs focused on improving user experience and engagement.",
            link: "#",
        },

        {
            name: "Graphic Design",
            icon: <FaPaintBrush />,
            description:
                "Professional graphics, branding, banners, and social media designs with modern aesthetics.",
            link: "#",
        },
    ];

    return (
        <section
            id="services"
            className="relative w-full px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-black via-[#111827] to-[#0f172a] text-white overflow-hidden"
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
                <p className="text-orange-400 uppercase tracking-widest text-sm mb-3">
                    What I Offer
                </p>

                <h2 className="text-4xl md:text-6xl font-bold">
                    My <span className="text-orange-400">Services</span>
                </h2>

                <p className="max-w-2xl mx-auto mt-6 text-gray-300 leading-8 text-lg">
                    I am a MERN Stack Developer from Bangalore, Karnataka,
                    building scalable and modern web applications with clean
                    UI and excellent user experience.
                </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">

                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group bg-white/5 border border-white/10 backdrop-blur-lg rounded-3xl p-8 hover:border-orange-400 transition-all duration-300 shadow-xl"
                    >

                        {/* Icon */}
                        <div className="w-16 h-16 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-3xl text-orange-400 mb-6 group-hover:scale-110 transition duration-300">
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

                        {/* Button */}
                        <a
                            href={service.link}
                            className="inline-flex items-center gap-3 text-orange-400 font-medium hover:gap-5 transition-all duration-300"
                        >
                            Read More

                            <FaArrowRight className="text-sm" />
                        </a>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}