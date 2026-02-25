import { useState } from "react";
import { MdCall, MdPinDrop, MdSend } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import Swal from "sweetalert2";

export default function Contact() {

    const API_URL = "http://localhost:8081/api/contact";

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        marketingConsent: false,
        dataConsent: false,
    });

    const [loading, setLoading] = useState(false);
    const [successMsg, setSuccessMsg] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    const showThemedAlert = (options) =>
        Swal.fire({
            background: "rgba(10, 15, 9, 0.96)",
            color: "#f3f4f6",
            iconColor: "#3cf91a",
            backdrop: "rgba(5, 10, 5, 0.78)",
            timerProgressBar: true,
            customClass: {
                popup: "site-swal-popup",
                title: "site-swal-title",
                htmlContainer: "site-swal-text",
                timerProgressBar: "site-swal-progress",
            },
            ...options,
        });

    const validate = () => {
        const errors = {};

        if (!form.firstName.trim()) errors.firstName = "First name is required.";
        if (!form.lastName.trim()) errors.lastName = "Last name is required.";

        if (form.email.trim()) {
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
            if (!emailOk) errors.email = "Enter a valid email address.";
        } else {
            errors.email = "Email is required.";
        }

        if (!form.message.trim()) errors.message = "Message is required.";

        if (!form.dataConsent) errors.dataConsent = "You must consent to data storage to submit.";

        return errors;
    };


    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
        // Clear field-specific error when user starts typing
        if (fieldErrors[name]) {
            setFieldErrors((prev) => {
                const copy = { ...prev };
                delete copy[name];
                return copy;
            });
        }

        //clear global messages while typing
        if (successMsg) setSuccessMsg("");
        if (errorMsg) setErrorMsg("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // 1) Frontend validation
        const errors = validate();
        setFieldErrors(errors);

        if (Object.keys(errors).length > 0) {
            // SweetAlert error summary (optional)
            showThemedAlert({
                icon: "error",
                title: "Fix the highlighted fields",
                text: "Please fill all required fields to submit.",
                timer: 3000,
                showConfirmButton: false,
            });
            return;
        }

        setLoading(true);

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            const data = await res.json().catch(() => null);

            if (!res.ok) {
                // Backend validation errors -> map to field errors
                if (data?.fields) {
                    setFieldErrors(data.fields);

                    showThemedAlert({
                        icon: "error",
                        title: "Validation failed",
                        text: "Please correct the highlighted fields.",
                        timer: 3500,
                        showConfirmButton: false,
                    });
                } else {
                    showThemedAlert({
                        icon: "error",
                        title: "Submission failed",
                        text: data?.error || data?.message || "Request failed.",
                        timer: 3500,
                        showConfirmButton: false,
                    });
                }
                return;
            }

            // ✅ Success message (auto disappears)
            showThemedAlert({
                icon: "success",
                title: "Sent!",
                text: "Your message was submitted successfully.",
                timer: 5000,
                showConfirmButton: false,
            });

            setForm({
                firstName: "",
                lastName: "",
                email: "",
                message: "",
                marketingConsent: false,
                dataConsent: false,
            });

            setFieldErrors({});
        } catch (err) {
            console.error("Submission error:", err);
            showThemedAlert({
                icon: "error",
                title: "Network error",
                text: "Server is unreachable. Check if services is running.",
                timer: 4000,
                showConfirmButton: false,
            });
            throw err;
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="scroll-reveal-section relative bg-background-dark py-12 px-6 lg:py-24 overflow-hidden">
            {/* Background Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
            </div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto ">
                <div className="grid grid-cols-1 gap-10">
                    {/* Hero/Contact Banner */}
                    <div className="relative w-full rounded-3xl overflow-hidden mb-16 p-12 lg:p-20 flex flex-col items-center justify-center text-center bg-gradient-to-br from-primary/20 via-surface-dark to-black border border-primary/20 group">
                        <div className="absolute inset-0 opacity-20 pointer-events-none overflow-hidden">
                            <div className="absolute -right-20 -top-20 w-96 h-96 border border-primary/30 rounded-full"></div>
                            <div className="absolute -right-10 -top-10 w-96 h-96 border border-primary/20 rounded-full"></div>
                            <div className="absolute -right-0 -top-0 w-96 h-96 border border-primary/10 rounded-full"></div>
                            <div className="absolute -left-20 -bottom-20 w-80 h-80 border border-primary/30 rounded-full"></div>
                            <div className="absolute -left-10 -bottom-10 w-80 h-80 border border-primary/20 rounded-full"></div>
                        </div>

                        <div className="relative z-10">
                            <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-white/10 rounded-full backdrop-blur-sm border border-primary/30">
                                Write to us
                            </span>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
                                Get In Touch
                            </h1>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        {/* Left: Form */}
                        <div className="lg:col-span-7">
                            <h2 className="text-4xl font-bold text-white mb-4">Let’s Talk!</h2>
                            <p className="text-gray-400 text-lg mb-10 max-w-xl">
                                Get in touch with us using the enquiry form or contact details below.
                            </p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">First Name</label>
                                        <input
                                            className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                            name="firstName"
                                            value={form.firstName}
                                            onChange={handleChange}
                                            placeholder="First name"
                                            type="text"
                                        />
                                        {fieldErrors.firstName && (
                                            <p className="text-red-500 text-sm mt-1">{fieldErrors.firstName}</p>)}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">Last Name</label>
                                        <input
                                            className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                            name="lastName"
                                            value={form.lastName}
                                            onChange={handleChange}
                                            placeholder="Last name"
                                            type="text"
                                        />
                                        {fieldErrors.lastName && (
                                            <p className="text-red-500 text-sm mt-1">{fieldErrors.lastName}</p>)}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Email</label>
                                    <input
                                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="you@company.com"
                                        type="email"
                                    />
                                    {fieldErrors.email && (
                                        <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>)}
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Message</label>
                                    <textarea
                                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md resize-none"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                    />
                                    {fieldErrors.message && (
                                        <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>)}
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            className="mt-1 bg-white/5 border-primary/30 rounded text-primary focus:ring-primary"
                                            name="marketingConsent"
                                            checked={form.marketingConsent}
                                            onChange={handleChange}
                                            type="checkbox"
                                        />
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            I agree to receive marketing and other communication messages.
                                            <span className="text-primary ml-1">*</span>
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            className="mt-1 bg-white/5 border-primary/30 rounded text-primary focus:ring-primary"
                                            name="dataConsent"
                                            checked={form.dataConsent}
                                            onChange={handleChange}
                                            type="checkbox"
                                        />
                                        {fieldErrors.dataConsent && (
                                            <p className="text-red-500 text-sm mt-1">{fieldErrors.dataConsent}</p>)}
                                        {/* This consent is mandatory for form submission, but we still allow users to check it to see the error message if they try to submit without checking it. */}
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            I give my consent to store my data for processing purposes.
                                            <span className="text-primary ml-1">*</span>
                                        </span>
                                    </label>
                                </div>

                                {successMsg && (
                                    <div className="border border-green-500/30 bg-green-500/10 text-green-200 px-4 py-3 rounded-xl">
                                        {successMsg}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className={`mt-4 w-full md:w-auto bg-primary text-background-dark px-10 py-4 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2
                                    ${loading ? "opacity-60 cursor-not-allowed" : "hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(60,249,26,0.4)]"}`}
                                >
                                    {loading ? "Sending..." : "Initialize Connection"}
                                    <MdSend />
                                </button>
                            </form>
                        </div>

                        {/* Right: Info + Image */}
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            {/* Image */}
                            <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                                <div className="absolute inset-0 z-10 opacity-30 pointer-events-none">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent"></div>
                                    <div className="concentric-circles absolute inset-0"></div>
                                </div>
                                <img
                                    alt="Developer"
                                    className="w-full h-full object-cover grayscale brightness-75 group-hover:scale-105 transition-transform duration-700"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrDVNjYo9FLxKg5oGOxTA5G20VTTaed8Hg8F2QuIXj7vLEHzTHAT8CJDrifAR_UMbkWiHBESx-i9qoFQ4y9x_us3ldq32GqKfdA2zaDh_Doig5T9bPvigjlDw6s7kqzlbxWCkHs7X0NK9Se5MDZkJ4_W9P0lIDSq0MY6rSvfyfkTYb4nXWHJDluvrxm20IEkrvZC5AIPFlAP0ZOwLyIUNBOIVcgJvI8QUMOURwqv-yMbnJ5Yq98mZ2jCHy0rUQruLPet2BryfWjyg"
                                />
                            </div>

                            {/* Contact Cards */}
                            <div className="bg-surface-dark/50 border border-white/10 rounded-3xl p-8 space-y-8 backdrop-blur-sm">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <FaWhatsapp />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Chat on WhatsApp</h3>
                                        <p className="text-gray-400 text-sm">
                                            <a
                                                className="text-primary hover:underline"
                                                href="https://wa.me/254745115711?text=Hello%2C%20I%20have%20a%20project%20I%27d%20like%20to%20discuss.%20I%27m%20looking%20for%20help%20building%20a%20digital%20solution%20%E2%80%94%20whether%20it%27s%20a%20website%2C%20mobile%20app%2C%20or%20custom%20software.%20Are%20you%20available%20to%20talk%20about%20it%3F"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Start WhatsApp chat
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <MdCall />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
                                        <p className="text-gray-400 text-sm">
                                            International: +(254) 745 115 711<br />
                                            Support: +(254) 101 350 206
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <MdPinDrop />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
                                        <p className="text-gray-400 text-sm">
                                            Tech Plaza, Suite 105<br />
                                            Nairobi, Kenya.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
}

