import { useEffect, useState } from "react";

import {
    FaPaperPlane,
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {

    const [result, setResult] = useState("");

    // Submit Form
    const onSubmit = async (event) => {

        event.preventDefault();

        const hCaptcha = event.target.querySelector(
            'textarea[name="h-captcha-response"]'
        )?.value;

        if (!hCaptcha) {
            setResult("Please complete captcha verification.");
            return;
        }

        setResult("Sending Message...");

        const formData = new FormData(event.target);

        // Web3Forms Access Key
        formData.append(
            "access_key",
            "ENTER_YOUR_WEB3FORMS_ACCESS_KEY"
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {

            setResult("Message Sent Successfully ✅");

            event.target.reset();

        } else {

            console.log(data);

            setResult("Something went wrong ❌");
        }
    };

    // Load hCaptcha
    useEffect(() => {

        const script = document.createElement("script");

        script.src =
            "https://js.hcaptcha.com/1/api.js";

        script.async = true;

        script.defer = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };

    }, []);

    return (
        <section
            id="contact"
            className="relative py-24 px-6 bg-[#020617] text-white overflow-hidden"
        >

            {/* Background Blur */}
            <div className="absolute top-10 left-0 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl"></div>

            <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-20">

                    <p className="text-orange-400 uppercase tracking-[5px] text-sm mb-4">
                        Contact Me
                    </p>

                    <h2 className="text-4xl md:text-6xl font-bold">
                        Let&apos;s Work Together
                    </h2>

                    <p className="max-w-2xl mx-auto text-gray-400 mt-6 leading-8 text-lg">
                        Have a project idea, freelance work, or collaboration?
                        Feel free to reach out anytime.
                    </p>
                </div>

                {/* Content */}
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* LEFT SIDE */}
                    <div>

                        <h3 className="text-3xl font-bold mb-8">
                            Get In Touch
                        </h3>

                        <p className="text-gray-400 leading-8 mb-10">
                            I’m available for MERN Stack projects,
                            frontend development, backend systems,
                            UI/UX improvements, and freelance work.
                        </p>

                        {/* Contact Cards */}
                        <div className="space-y-6">

                            {/* Email */}
                            <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                                <div className="w-14 h-14 rounded-2xl bg-orange-400/10 border border-orange-400/20 flex items-center justify-center text-orange-400 text-xl">
                                    <FaEnvelope />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">
                                        Email
                                    </p>

                                    <h4 className="text-lg font-medium">
                                        rreddy2512@gmail.com
                                    </h4>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                                <div className="w-14 h-14 rounded-2xl bg-green-400/10 border border-green-400/20 flex items-center justify-center text-green-400 text-xl">
                                    <FaPhoneAlt />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">
                                        Phone
                                    </p>

                                    <h4 className="text-lg font-medium">
                                        +91 7013713251
                                    </h4>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-5 p-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

                                <div className="w-14 h-14 rounded-2xl bg-pink-400/10 border border-pink-400/20 flex items-center justify-center text-pink-400 text-xl">
                                    <FaMapMarkerAlt />
                                </div>

                                <div>
                                    <p className="text-sm text-gray-400">
                                        Location
                                    </p>

                                    <h4 className="text-lg font-medium">
                                        Bangalore, Karnataka
                                    </h4>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-5 mt-10">

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

                    {/* RIGHT SIDE FORM */}
                    <form
                        onSubmit={onSubmit}
                        className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 md:p-10 shadow-2xl"
                    >

                        <input
                            type="hidden"
                            name="subject"
                            value="New Portfolio Contact Message"
                        />

                        {/* Name */}
                        <div className="mb-6">

                            <label className="block text-sm text-gray-300 mb-3">
                                Your Name
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Enter your name"
                                className="w-full px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 focus:border-orange-400 outline-none transition duration-300"
                            />
                        </div>

                        {/* Email */}
                        <div className="mb-6">

                            <label className="block text-sm text-gray-300 mb-3">
                                Your Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="Enter your email"
                                className="w-full px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 focus:border-orange-400 outline-none transition duration-300"
                            />
                        </div>

                        {/* Message */}
                        <div className="mb-6">

                            <label className="block text-sm text-gray-300 mb-3">
                                Your Message
                            </label>

                            <textarea
                                rows="6"
                                name="message"
                                required
                                placeholder="Write your message..."
                                className="w-full px-5 py-4 rounded-2xl bg-[#111827] border border-white/10 focus:border-orange-400 outline-none transition duration-300 resize-none"
                            ></textarea>
                        </div>

                        {/* hCaptcha */}
                        <div
                            className="h-captcha mb-6"
                            data-sitekey="10000000-ffff-ffff-ffff-000000000001"
                        ></div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="group w-full py-4 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-400 hover:scale-[1.02] transition-all duration-300 text-lg font-semibold flex items-center justify-center gap-3 shadow-lg shadow-orange-500/20"
                        >

                            Send Message

                            <FaPaperPlane className="group-hover:translate-x-1 transition duration-300" />
                        </button>

                        {/* Result */}
                        {result && (
                            <p className="text-center mt-5 text-gray-300">
                                {result}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
}