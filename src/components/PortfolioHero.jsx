import { useEffect, useState } from 'react';

export default function PortfolioHero() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Trigger stat animations on mount
    useEffect(() => {
        document.documentElement.classList.add('dark');
    }, []);

    return (
        <>
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute top-[40%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px]"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-900/10 rounded-full blur-[120px]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold text-white/[0.02] whitespace-nowrap select-none leading-none z-0">
                    DEV
                </div>
                <div className="absolute top-[10%] left-[5%] text-6xl font-bold text-white/[0.01] rotate-90 select-none">
                    TECHIE
                </div>
            </div>

            {/* Left Sidebar (Desktop) */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8 items-center">
                <div className="w-[1px] h-32 bg-gradient-to-b from-transparent via-primary/30 to-primary/30"></div>
                <div className="flex flex-col gap-6">
                    {['terminal', 'work', 'alternate_email', 'mail'].map((icon, i) => (
                        <a key={i} className="group relative flex items-center justify-center text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1" href="#">
                            <span className="material-symbols-outlined text-[24px]">{icon}</span>
                            <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest bg-background-dark border border-primary/20 px-2 py-1 rounded text-primary whitespace-nowrap pointer-events-none">
                                {['GITHUB', 'LINKEDIN', 'X / TWITTER', 'EMAIL'][i]}
                            </span>
                        </a>
                    ))}
                </div>
                <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-primary/30 to-primary/30"></div>
            </div>

            {/* Header */}
            <header className="w-full px-6 py-4 md:px-12 lg:px-20 backdrop-blur-xl fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-background-dark/80 transition-all duration-300">
                <div className="flex items-center justify-between w-full relative z-20">
                    <div className="flex items-center gap-3">
                        <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-background-dark shadow-[0_0_15px_rgba(60,249,26,0.4)] hover:shadow-[0_0_25px_rgba(60,249,26,0.6)] transition-shadow duration-300 cursor-pointer">
                            <span className="material-symbols-outlined text-[20px] font-bold">code</span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-lg font-bold tracking-tight text-white">ALEX<span className="text-primary">.DEV</span></span>
                            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">Portfolio</span>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <a className="relative group flex flex-col items-center justify-center h-10" href="#">
                            <span className="absolute top-[-6px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-primary animate-pulse-glow"></span>
                            <span className="text-sm font-bold text-white tracking-wide z-10">Home</span>
                            <span className="absolute bottom-[-6px] w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[6px] border-t-primary animate-pulse-glow"></span>
                        </a>
                        {['About', 'Stack', 'Work', 'Projects'].map((item) => (
                            <a key={item} className="text-sm font-medium text-white/60 hover:text-primary hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(60,249,26,0.4)] transition-all duration-300 ease-out" href="#">
                                {item}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-4">
                        <a className="hidden md:flex text-sm font-bold text-primary border border-primary/30 px-6 py-2 rounded-md hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-[0_0_10px_rgba(60,249,26,0.1)] hover:shadow-[0_0_25px_rgba(60,249,26,0.5)] active:scale-95" href="#">
                            Hire Me
                        </a>
                        <label className="md:hidden text-white p-2 hover:bg-white/5 rounded-lg transition-colors cursor-pointer select-none" htmlFor="mobile-menu-toggle">
                            <input type="checkbox" id="mobile-menu-toggle" className="hidden" checked={mobileMenuOpen} onChange={() => setMobileMenuOpen(!mobileMenuOpen)} />
                            <span className="material-symbols-outlined">menu</span>
                        </label>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden absolute top-[100%] left-0 w-full bg-background-dark/95 backdrop-blur-xl border-b border-white/10 overflow-hidden transition-all duration-500 origin-top ${mobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'} z-10 shadow-2xl`}>
                    <div className="flex flex-col items-center gap-6 py-10">
                        {['Home', 'About', 'Services', 'Skills', 'Projects','Contact'].map((item) => (
                            <a key={item} className="text-lg font-bold text-white hover:text-primary transition-colors" href="#">{item}</a>
                        ))}
                        <a className="mt-4 px-8 py-3 border border-primary/30 rounded-lg text-primary font-bold hover:bg-primary hover:text-background-dark transition-colors" href="#">Hire Me</a>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-24 md:py-28 lg:pl-32 relative">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-center">
                    {/* Left Content */}
                    <div className="flex flex-col gap-6 md:gap-8 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-background-dark border border-primary/20 w-fit backdrop-blur-sm shadow-lg">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-white/80 tracking-widest uppercase">Available for hire</span>
                        </div>

                        <div className="space-y-2">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black leading-[0.9] tracking-tight text-white">
                                HELLO, I'M <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-[pulse_4s_ease-in-out_infinite]">
                                    NGANGA<span className="text-primary">.</span>H
                                </span>
                            </h1>
                        </div>

                        <div className="flex flex-col gap-4 max-w-xl">
                            <h2 className="text-xl md:text-2xl font-medium text-white/90 flex justify-center lg:justify-start items-center gap-2 font-mono h-[36px]">
                                <span className="text-primary font-bold mr-1">&gt;</span>
                                <div className="inline-block w-fit">
                                    <span className="block overflow-hidden whitespace-nowrap border-r-4 border-primary animate-type-cursor w-0">
                                        Full Stack Dev & Architect
                                    </span>
                                </div>
                            </h2>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed">
                                Building digital experiences that merge form and function. I craft pixel-perfect, minimal, and modern interfaces for the web of tomorrow.
                            </p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 w-full">
                            <button className="group relative flex items-center justify-center gap-3 h-14 px-8 bg-primary text-background-dark text-base font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(60,249,26,0.3)] w-full sm:w-auto">
                                <span>Resume</span>
                                <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 h-14 px-8 bg-transparent border border-white/20 text-white text-base font-bold rounded hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto">
                                <span>Contact Me</span>
                            </button>
                        </div>

                        <div className="w-full mt-2 pt-4 md:mt-4 md:pt-6 border-t border-white/10">
                            <div className="grid grid-cols-3 gap-4 md:gap-8">
                                {[
                                    { label: "Years Exp.", delay: "0.1s" },
                                    { label: "Projects", delay: "0.3s" },
                                    { label: "Clients", delay: "0.5s" },
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col gap-1 items-center lg:items-start group cursor-default stat-card" style={{ animationDelay: stat.delay }}>
                                        <span className={`text-3xl md:text-4xl font-bold text-white group-hover:text-primary transition-colors duration-300 stat-${['exp', 'proj', 'client'][i]}`}></span>
                                        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-white/40 group-hover:text-white/80 transition-colors">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Avatar */}
                    <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center lg:justify-end py-6 lg:py-0 w-full">
                        <div className="lg:hidden flex items-center justify-center gap-4 w-full max-w-sm mb-8">
                            <div className="h-[1px] bg-gradient-to-r from-transparent to-primary/50 flex-1"></div>
                            <div className="flex gap-4">
                                {['terminal', 'work', 'alternate_email', 'mail'].map((icon) => (
                                    <a key={icon} className="text-white/50 hover:text-primary transition-colors" href="#">
                                        <span className="material-symbols-outlined text-base">{icon}</span>
                                    </a>
                                ))}
                            </div>
                            <div className="h-[1px] bg-gradient-to-l from-transparent to-primary/50 flex-1"></div>
                        </div>

                        <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full transform scale-90 lg:translate-x-10"></div>
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] group/avatar">
                            <div className="absolute inset-0 rounded-full border border-white/5"></div>
                            <div className="absolute -inset-4 md:-inset-8 rounded-full border border-dashed border-primary/20 animate-spin"></div>
                            <div className="absolute inset-8 rounded-full border border-dotted border-white/10 animate-spin-reverse"></div>
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl relative bg-background-dark z-10 group-hover/avatar:border-primary transition-colors duration-500">
                                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-20 pointer-events-none"></div>
                                <img
                                    alt="Futuristic portrait of a developer with clean lighting"
                                    className="w-full h-full object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover/avatar:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRgt4bN6j_N-K_wC_uaEMmCZUjRVo3gErcGB9bmPRfEQSb_UGY9szsUbbtJCaoYrO8b8IzV_RYmofHL1MlFLh2E0tHasgADf86uSFZbecS3BTNxxaYg5nYT4vKKT652-XaJyOjxu5pBUClYVWGmrm49BjnTFCFXCeVdezHFQliEWJJxI7UJy7PrJegXohjNXrzb40eVzXHVZCGGEJWlE0n8PiuLXRZcJ6kiOtOWjHOeC_Z-UcId-haoJwn6DrSh2LfjapgLWruHgg"
                                />
                            </div>

                            <div className="absolute bottom-0 right-0 md:bottom-6 md:right-6 lg:bottom-12 lg:right-4 z-20">
                                <div className="bg-background-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-4 hover:border-primary/50 transition-colors duration-300">
                                    <div className="relative flex items-center justify-center size-10 bg-white/5 rounded-lg border border-white/10">
                                        <span className="material-symbols-outlined text-primary text-xl">wifi</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-white/40 uppercase tracking-widest font-bold">Current Status</span>
                                        <span className="text-sm font-bold text-white flex items-center gap-2">
                                            Online
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="hidden lg:flex absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow cursor-pointer hover:text-primary transition-colors duration-300 group z-20">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30 group-hover:text-primary transition-colors">Scroll for more</span>
                        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1 group-hover:border-primary transition-colors">
                            <div className="w-1 h-2 bg-primary rounded-full animate-bounce"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer
            <footer className="py-6 w-full text-center border-t border-white/5 bg-background-dark/50 backdrop-blur-sm z-30 relative">
                <div className="flex items-center justify-center gap-2 text-white/20 text-[10px] tracking-[0.2em] uppercase font-bold">
                    <span className="material-symbols-outlined text-[14px]">bolt</span>
                    <span>Designed for the Future · 2024</span>
                </div>
            </footer> */}
        </>
    );
}