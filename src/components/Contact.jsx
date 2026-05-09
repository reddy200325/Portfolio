import { useState } from "react";

import {
    FaPaperPlane,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaWhatsapp,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

export default function Contact() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {

        event.preventDefault();

        setResult("Sending Message...");

        const formData = new FormData(event.target);

        // Replace with your Web3Forms Access Key
        formData.append(
            "access_key",
            "YOUR_WEB3FORMS_ACCESS_KEY"
        );

        try {

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const data = await response.json();

            if (data.success) {

                setResult("Message Sent Successfully!");

                event.target.reset();

            } else {

                setResult("Something went wrong!");
            }

        } catch (error) {

            console.log(error);

            setResult("Network Error!");
        }
    };

    return (
        <section
            id="contact"
            className="relative py-24 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-[#020617] via-black to-[#111827] text-white overflow-hidden"
        >

            {/* Background Blur */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-pink-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-10 right-10 w-72 h-72 bg-orange-500/20 blur-3xl rounded-full"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">

                    <p className="text-orange-400 uppercase tracking-[4px] text-sm mb-3">
                        Contact Me
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Get In
                        <span className="text-orange-400">
                            {" "}Touch
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto mt-6 text-gray-400 leading-8 text-lg">
                        Feel free to contact me for web development,
                        freelance projects, collaborations, or MERN stack
                        applications.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-14 items-start">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        {/* Email */}
                        <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-orange-400 transition duration-300">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 text-2xl">
                                    <FaEnvelope />
                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm mb-1">
                                        Email
                                    </p>

                                    <h3 className="text-lg font-semibold break-all">
                                        rreddy2512@gmail.com
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-green-400 transition duration-300">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-2xl">
                                    <FaPhoneAlt />
                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm mb-1">
                                        Phone
                                    </p>

                                    <h3 className="text-lg font-semibold">
                                        +91 7013713251
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="group bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-6 hover:border-pink-400 transition duration-300">

                            <div className="flex items-center gap-5">

                                <div className="w-16 h-16 rounded-2xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center text-pink-400 text-2xl">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>

                                    <p className="text-gray-400 text-sm mb-1">
                                        Location
                                    </p>

                                    <h3 className="text-lg font-semibold">
                                        Bangalore, Karnataka
                                    </h3>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-5 pt-4">

                            <a
                                href="https://github.com/reddy200325"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-orange-400 hover:border-orange-400 transition duration-300"
                            >
                                <FaGithub />
                            </a>

                            <a
                                href="https://www.linkedin.com/in/raghunadhareddy-yaramareddy-b57ba039a"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-blue-500 hover:border-blue-500 transition duration-300"
                            >
                                <FaLinkedin />
                            </a>

                            <a
                                href="https://wa.me/7013713251"
                                target="_blank"
                                rel="noreferrer"
                                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-green-500 hover:border-green-500 transition duration-300"
                            >
                                <FaWhatsapp />
                            </a>
                        </div>
                    </div>

                    {/* RIGHT SIDE FORM */}
                    <form
                        onSubmit={onSubmit}
                        className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 md:p-10 shadow-2xl"
                    >

                        {/* Name + Email */}
                        <div className="grid md:grid-cols-2 gap-6">

                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                required
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-400 text-white placeholder-gray-500 transition"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                required
                                className="w-full px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-400 text-white placeholder-gray-500 transition"
                            />
                        </div>

                        {/* Subject */}
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            required
                            className="w-full mt-6 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-400 text-white placeholder-gray-500 transition"
                        />

                        {/* Message */}
                        <textarea
                            rows="7"
                            name="message"
                            placeholder="Write Your Message..."
                            required
                            className="w-full mt-6 px-5 py-4 rounded-2xl bg-white/5 border border-white/10 outline-none focus:border-orange-400 text-white placeholder-gray-500 transition resize-none"
                        ></textarea>

                        {/* Button */}
                        <button
                            type="submit"
                            className="group mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-[1.02] transition duration-300 flex items-center justify-center gap-3 text-lg font-semibold shadow-xl shadow-orange-500/20"
                        >

                            Send Message

                            <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                        </button>

                        {/* Result */}
                        <p className="mt-5 text-center text-orange-400 font-medium">
                            {result}
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}