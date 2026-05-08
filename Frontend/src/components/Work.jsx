import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function Work() {

    const work = [
        {
            name: "Frontend Project",
            icon: "./assets/work-1.png",
            description: "Modern Web Design",
            link: "#",
        },

        {
            name: "Geo Based App",
            icon: "./assets/work-2.png",
            description: "Mobile Application",
            link: "#",
        },

        {
            name: "Photography Website",
            icon: "./assets/work-3.png",
            description: "Creative Portfolio",
            link: "#",
        },

        {
            name: "UI/UX Designing",
            icon: "./assets/work-4.png",
            description: "User Experience Design",
            link: "#",
        },
    ];

    return (
        <section
            id="work"
            className="relative w-full px-6 md:px-16 lg:px-24 py-24 bg-gradient-to-b from-[#0f172a] via-black to-[#111827] text-white overflow-hidden"
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
                    My Portfolio
                </p>

                <h2 className="text-4xl md:text-6xl font-bold">
                    Latest <span className="text-orange-400">Projects</span>
                </h2>

                <p className="max-w-2xl mx-auto mt-6 text-gray-300 leading-8 text-lg">
                    Explore my latest projects showcasing modern web
                    development, responsive UI design, and scalable MERN stack
                    applications.
                </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 relative z-10">

                {work.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-xl"
                    >

                        {/* Image */}
                        <div className="overflow-hidden">
                            <img
                                src={item.icon}
                                alt={item.name}
                                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                            />
                        </div>

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-90"></div>

                        {/* Content */}
                        <div className="absolute bottom-0 left-0 w-full p-6">

                            <p className="text-orange-400 text-sm mb-2">
                                {item.description}
                            </p>

                            <h3 className="text-2xl font-semibold mb-4">
                                {item.name}
                            </h3>

                            <a
                                href={item.link}
                                className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white text-black font-medium hover:bg-orange-400 hover:text-white transition duration-300"
                            >
                                View Project

                                <FaArrowRight className="text-sm" />
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Show More Button */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.7 }}
                className="flex justify-center mt-20 relative z-10"
            >

                <a
                    href="#"
                    className="group px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-lg hover:bg-orange-400 hover:border-orange-400 transition-all duration-300 flex items-center gap-4 text-lg font-medium"
                >
                    Show More

                    <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                </a>
            </motion.div>
        </section>
    );
}