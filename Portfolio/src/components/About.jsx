import { useEffect } from "react";

export default function About() {
    // Trigger stagger animations on mount (fade-in-up with delays)
    useEffect(() => {
        const items = document.querySelectorAll(".stagger");
        items.forEach((item, index) => {
            item.style.animationDelay = `${(index + 1) * 200}ms`;
            item.classList.add("opacity-0", "animate-fade-in-up");
            item.classList.remove("opacity-0");
        });
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col py-12 px-6 md:px-12 lg:px-24 bg-background-dark">
            {/* Hidden dummy to force Tailwind v4 to generate animate-fade-in-up */}
            <div className="hidden animate-fade-in-up"></div>
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(60,249,26,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,249,26,0.03)_1px,transparent_1px)] bg-[size:40px_40px] opacity-30"></div>
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] animate-pulse"></div>
                <div
                    className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse"
                    style={{ animationDelay: "2s" }}
                ></div>
                <div
                    className="absolute top-1/4 left-[-50px] text-[20vw] font-bold text-white/[0.05] whitespace-nowrap select-none rotate-90 origin-left"
                    style={{ lineHeight: "0.8" }}
                >
                    DEVELOPER
                </div>
                <div
                    className="absolute bottom-1/4 right-[-50px] text-[15vw] font-bold text-white/[0.05] whitespace-nowrap select-none -rotate-90 origin-right"
                    style={{ lineHeight: "0.8" }}
                >
                    CREATOR
                </div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                {/* Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-10">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary text-sm font-bold tracking-widest uppercase mb-2">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Who Am I
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold leading-[0.95] tracking-tight">
                            Decoding the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                                Developer.
                            </span>
                        </h1>
                        <p className="text-gray-400 text-lg leading-relaxed pt-4">
                            I am a creative technologist bridging the gap between design and
                            engineering. My philosophy is rooted in clean code, immersive
                            experiences, and pushing the boundaries of the web.
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 pt-4">
                        <button className="group flex items-center gap-3 px-6 py-3 border border-primary/50 text-primary rounded hover:bg-primary/10 transition-all duration-300">
                            <span className="font-medium">Download Resume</span>
                            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform">
                                download
                            </span>
                        </button>

                        <div className="flex items-center gap-4">
                            <a
                                className="w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                href="#"
                            >
                                {/* GitHub SVG */}
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                className="w-10 h-10 rounded flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                href="#"
                            >
                                {/* LinkedIn SVG */}
                                <svg
                                    className="w-5 h-5"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        clipRule="evenodd"
                                        d="M20 1H4a3 3 0 00-3 3v16a3 3 0 003 3h16a3 3 0 003-3V4a3 3 0 00-3-3zM8 18.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v8zm-1.5-10a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm13.5 10a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-4.5c0-1-.5-1.5-1.5-1.5s-1.5.5-1.5 1.5v4.5a.5.5 0 01-.5.5h-2a.5.5 0 01-.5-.5v-8a.5.5 0 01.5-.5h2a.5.5 0 01.5.5v.5c.5-1 1.5-1.5 2.5-1.5 2.5 0 3.5 2 3.5 4.5v4.5z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column - Clean Subtle Timeline */}
                <div className="lg:col-span-7 relative pl-0 lg:pl-10">
                    <div className="absolute -top-10 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl animate-float opacity-50"></div>
                    <div className="relative h-[600px]">
                        <div className="absolute bottom-4 left-0 right-0 z-20 flex items-end justify-center pointer-events-none opacity-80">
                            <span className="material-symbols-outlined text-primary/50 animate-bounce text-sm">keyboard_double_arrow_down</span>
                        </div>
                        <div className="h-full overflow-y-auto px-6 py-4 [mask-image:linear-gradient(to_bottom,transparent,black_5%,black_95%,transparent)]">
                            {/* Vertical Line */}
                            <div className="absolute left-[38px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/30 to-transparent z-0"></div>

                            {/* Timeline Items */}
                            {[
                                {
                                    title: "Senior Frontend Engineer",
                                    date: "2021 - Present",
                                    desc: "Leading the frontend architecture for next-gen SaaS platforms. Specialized in micro-frontends and high-performance rendering.",
                                    tags: ["React", "TypeScript", "Three.js"],
                                    current: true,
                                },
                                {
                                    title: "Creative Developer",
                                    date: "2018 - 2021",
                                    desc: "Collaborated with design teams to bring award-winning websites to life. Focused on interaction design and WebGL.",
                                    tags: ["Stitch","Figma"],
                                },
                                {
                                    title: "Junior Web Dev",
                                    date: "2016 - 2018",
                                    desc: "Started the journey building responsive layouts and mastering the fundamentals of the web.",
                                    tags: [],
                                },
                                {
                                    title: "Freelance Developer",
                                    date: "2015 - 2016",
                                    desc: "Worked with small businesses to create their first online presence, customizing WordPress themes and vanilla JS components.",
                                    tags: [],
                                },
                                {
                                    title: "Intern",
                                    date: "2015",
                                    desc: "First exposure to production environments. Assisted senior devs with QA, bug fixes, and documentation.",
                                    tags: [],
                                },
                            ].map((job, index) => (
                                <div
                                    key={index}
                                    className="relative mb-12 group stagger "
                                >
                                    {/* Dot - Pulsating only for current job */}
                                    <div className="absolute left-0 top-0 w-20 flex justify-center h-full">
                                        <div className="w-4 h-4 mt-6 relative z-10 flex items-center justify-center">
                                            <div className={`
        rounded-full transition-all duration-300
        ${job.current
                                                    ? 'w-4 h-4 bg-primary shadow-[0_0_15px_rgba(60,249,26,0.6)]'
                                                    : 'w-3 h-3 bg-[#1e2b1d] border-2 border-gray-600 group-hover:border-primary group-hover:bg-primary/50'
                                                }
        `}>
                                                {/* Pulsating ring only on current job */}
                                                {job.current && (
                                                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75"></div>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card - Thick green left border on hover and current */}
                                    <div className="ml-16">
                                        <div className={`
        bg-[rgba(22,32,21,0.4)] backdrop-blur-md border border-[rgba(60,249,26,0.1)]
        p-6 rounded-lg transition-all duration-300
        ${job.current
                                                ? 'border-l-4 border-l-primary'
                                                : 'border-l-2 border-l-transparent group-hover:border-l-primary'
                                            }
        group-hover:bg-white/5
      `}>
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                                                    {job.title}
                                                </h3>
                                                {/* Standout date badge for current job */}
                                                <span className={`
            text-xs font-mono px-3 py-1.5 rounded transition-all duration-300
            ${job.current
                                                        ? 'text-primary bg-primary/20'
                                                        : 'text-gray-500 bg-transparent'
                                                    }
          `}>
                                                    {job.date}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400 leading-relaxed mb-4">
                                                {job.desc}
                                            </p>
                                            {job.tags.length > 0 && (
                                                <div className="flex gap-2 flex-wrap">
                                                    {job.tags.map((tag) => (
                                                        <span key={tag} className="text-xs text-gray-300 bg-[#1e2b1d] px-3 py-1.5 rounded border border-white/5">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            <div className="h-10"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
