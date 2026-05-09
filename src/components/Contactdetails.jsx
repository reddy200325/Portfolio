import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
    FaArrowRight,
} from "react-icons/fa";

export default function Contact() {

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#020617] py-24 px-5 sm:px-6 lg:px-20 text-white"
        >

            {/* Background Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">

                    <span className="inline-block px-5 py-2 rounded-full border border-orange-400/20 bg-orange-400/10 text-orange-400 text-sm tracking-[3px] uppercase mb-6">
                        Contact Me
                    </span>

                    <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">

                        Let&apos;s Build Something
                        <span className="block bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-300 bg-clip-text text-transparent mt-2">
                            Amazing Together
                        </span>

                    </h2>

                    <p className="max-w-3xl mx-auto mt-8 text-gray-400 text-base sm:text-lg leading-8">
                        I&apos;m available for freelance projects, full-stack web
                        development, UI/UX design, and MERN stack applications.
                        Let&apos;s connect and create something impactful.
                    </p>
                </div>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-10 items-center">

                    {/* LEFT CARD */}
                    <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 sm:p-10 overflow-hidden">

                        {/* Glow Border */}
                        <div className="absolute inset-0 rounded-[35px] border border-white/10"></div>

                        <div className="relative z-10">

                            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                                Let&apos;s Talk
                            </h3>

                            <p className="text-gray-400 leading-8 mb-10">
                                Feel free to reach out for collaborations,
                                freelance work, or just a friendly hello 👋
                            </p>

                            {/* Contact Items */}
                            <div className="space-y-6">

                                {/* Email */}
                                <div className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-orange-400 hover:translate-x-2 transition duration-300">

                                    <div className="w-16 h-16 rounded-2xl bg-orange-400/10 flex items-center justify-center text-orange-400 text-2xl">
                                        <FaEnvelope />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            Email
                                        </p>

                                        <h4 className="text-lg font-semibold break-all">
                                            rreddy2512@gmail.com
                                        </h4>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-green-400 hover:translate-x-2 transition duration-300">

                                    <div className="w-16 h-16 rounded-2xl bg-green-400/10 flex items-center justify-center text-green-400 text-2xl">
                                        <FaPhoneAlt />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            Phone
                                        </p>

                                        <h4 className="text-lg font-semibold">
                                            +91 7013713251
                                        </h4>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="group flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10 hover:border-pink-400 hover:translate-x-2 transition duration-300">

                                    <div className="w-16 h-16 rounded-2xl bg-pink-400/10 flex items-center justify-center text-pink-400 text-2xl">
                                        <FaMapMarkerAlt />
                                    </div>

                                    <div>
                                        <p className="text-gray-400 text-sm">
                                            Location
                                        </p>

                                        <h4 className="text-lg font-semibold">
                                            Bangalore, Karnataka
                                        </h4>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="flex gap-5 mt-10">

                                <a
                                    href="https://github.com/reddy200325"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-400 hover:border-orange-400 hover:scale-110 transition duration-300"
                                >
                                    <FaGithub />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/raghunadhareddy-yaramareddy-b57ba039a"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-blue-500 hover:border-blue-500 hover:scale-110 transition duration-300"
                                >
                                    <FaLinkedin />
                                </a>

                                <a
                                    href="https://wa.me/7013713251"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-green-500 hover:border-green-500 hover:scale-110 transition duration-300"
                                >
                                    <FaWhatsapp />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="relative">

                        <div className="bg-gradient-to-br from-pink-500/10 via-orange-400/10 to-yellow-300/10 border border-white/10 rounded-[35px] p-10 sm:p-14 backdrop-blur-2xl">

                            <div className="flex flex-col items-center text-center">

                                <div className="w-28 h-28 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 p-1 mb-8">

                                    <div className="w-full h-full rounded-full bg-[#020617] flex items-center justify-center text-5xl font-bold">
                                        RR
                                    </div>
                                </div>

                                <h3 className="text-3xl sm:text-4xl font-bold mb-4">
                                    Ready To Work Together
                                </h3>

                                <p className="text-gray-400 leading-8 max-w-md mb-10">
                                    I create modern websites with beautiful UI,
                                    smooth animations, and scalable backend
                                    systems using the MERN stack.
                                </p>

                                <a
                                    href="mailto:rreddy2512@gmail.com"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 text-lg font-semibold hover:scale-105 transition duration-300 shadow-xl shadow-orange-500/20"
                                >

                                    Hire Me

                                    <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}