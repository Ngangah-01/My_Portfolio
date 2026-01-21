import React from "react";

const Footer = () => {
    return (
        <footer className="relative z-10 mt-0 border-t border-white/10 bg-black/80 backdrop-blur-2xl animate-fade-in">
            <div className="mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 pt-20 pb-10">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand & About */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="size-8 text-primary drop-shadow-[0_0_8px_rgba(60,249,26,0.6)]">
                                <svg
                                    className="w-full h-full"
                                    fill="none"
                                    viewBox="0 0 48 48"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </div>

                            <span className="text-white text-xl font-bold tracking-tight uppercase text-glow">
                                DEV_PORTFOLIO
                            </span>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Crafting next-generation digital experiences with precision,
                            performance, and purpose.
                        </p>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_5px_rgba(60,249,26,0.4)]">
                                    call
                                </span>
                                <span className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                                    +1 (555) 123-4567
                                </span>
                            </div>

                            <div className="flex items-center gap-3 group">
                                <span className="material-symbols-outlined text-primary text-xl drop-shadow-[0_0_5px_rgba(60,249,26,0.4)]">
                                    mail
                                </span>
                                <span className="text-gray-400 text-sm group-hover:text-primary transition-colors">
                                    hello@devportfolio.com
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Information */}
                    <div className="space-y-6">
                        <h4 className="text-primary text-xs font-bold tracking-widest uppercase">
                            Information
                        </h4>
                        <ul className="space-y-4">
                            {["About", "Services", "Projects", "Testimonials", "Blog"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Helpful Links */}
                    <div className="space-y-6">
                        <h4 className="text-primary text-xs font-bold tracking-widest uppercase">
                            Helpful Links
                        </h4>
                        <ul className="space-y-4">
                            {["Support", "Terms & Conditions", "Privacy Policy"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            href="#"
                                            className="flex items-center gap-2 text-gray-400 hover:text-primary text-sm transition-colors group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors" />
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="space-y-6">
                        <h4 className="text-primary text-xs font-bold tracking-widest uppercase">
                            Connect
                        </h4>

                        <ul className="flex flex-col gap-4">
                            {[
                                { name: "LinkedIn", href: "#" },
                                { name: "Twitter / X", href: "#" },
                                { name: "GitHub", href: "#" },
                            ].map((social) => (
                                <li key={social.name}>
                                    <a
                                        href={social.href}
                                        className="flex items-center gap-4 text-gray-400 hover:text-primary transition-colors group"
                                    >
                                        <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all">
                                            <span className="material-symbols-outlined text-lg">
                                                link
                                            </span>
                                        </div>
                                        <span className="text-sm font-medium">
                                            {social.name}
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <p className="text-gray-500 text-sm font-medium">
                        © {new Date().getFullYear()} DEV_PORTFOLIO. All rights reserved.
                    </p>

                    <button
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: "smooth" })
                        }
                        className="flex items-center gap-4 text-sm font-bold text-primary group transition-all"
                    >
                        <span className="tracking-widest uppercase">
                            Back to Top
                        </span>
                        <div className="size-10 rounded-full border border-primary/30 flex items-center justify-center bg-primary/5 group-hover:bg-primary group-hover:text-black transition-all duration-500 hover:shadow-[0_0_20px_rgba(60,249,26,0.4)]">
                            <span className="material-symbols-outlined transition-transform duration-300 group-hover:-translate-y-1">
                                arrow_upward
                            </span>
                        </div>
                    </button>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
