// src/components/PortfolioHero.jsx (complete replacement with fixes)
import { useEffect, useState } from 'react';
import {
    MdAccountTree,
    MdAlternateEmail,
    MdFolder,
    MdKeyboardReturn,
    MdMail,
    MdPublic,
    MdRocketLaunch,
    MdSatelliteAlt,
    MdTerminal,
    MdWifi,
    MdWork,
} from 'react-icons/md';
import avatarAvif from '../assets/avatar.avif';
import avatarPng from '../assets/avatar.png';
import avatarWebp from '../assets/avatar.webp';

export default function PortfolioHero() {
    const [terminalInput, setTerminalInput] = useState('');
    const [terminalOutput, setTerminalOutput] = useState([
        'import { Architecture } from "@core/systems";',
        'const nexus = new Architecture();',
        '// Initializing neural interface...',
        'nexus.initialize({',
        '  latency: "minimal",',
        '  mode: "hyper-performance",',
        '  autoScale: true',
        '});',
        '// Status check',
        '> system.status()',
        'OPTIMAL - ALL SYSTEMS FUNCTIONAL',
        'alex@dev:~/repo $ '
    ]);
    const [currentLine, setCurrentLine] = useState('');
    const [effectsReady, setEffectsReady] = useState(false);

    // Typing animation state for subtitle
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const typingTexts = [
        'I am Hillary Nganga a creative dev',
        'Full Stack Engineer specializing in modern web',
        'Passionate about elegant architecture & futuristic UI'
    ];

    const commands = {
        help: 'Available commands: ls (list projects), whoami, contact, clear',
        ls: 'Projects: CryptoDash AI, Nexus Mobile, DataVault, GeoTrack VR, Aether UI',
        whoami: 'Nganga.H - Full Stack Engineer / UI Architect',
        contact: 'Email: hello@nganga.dev | LinkedIn: /in/nganga-h',
        clear: ''
    };

    const handleTerminalInput = (e) => {
        if (e.key === 'Enter') {
            const input = currentLine.trim().toLowerCase();
            let response = commands[input] || 'Command not found. Type "help" for available commands.';

            setTerminalOutput(prev => [
                ...prev.slice(0, -1),
                `${prev[prev.length - 1]}${input}`,
                response,
                'alex@dev:~/repo $ '
            ]);
            setCurrentLine('');
        } else if (e.key === 'Backspace') {
            setCurrentLine(prev => prev.slice(0, -1));
        } else if (e.key.length === 1) {
            setCurrentLine(prev => prev + e.key);
        }
    };

    // Typing animation for subtitle
    useEffect(() => {
        const currentText = typingTexts[textIndex];
        const speed = isDeleting ? 50 : 80;
        const delay = isDeleting ? 30 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting) {
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 1500);
                }
            } else {
                if (displayedText.length > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prev) => (prev + 1) % typingTexts.length);
                }
            }
        }, isDeleting ? speed : delay);

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, typingTexts]);

    useEffect(() => {
        window.addEventListener('keydown', handleTerminalInput);
        return () => window.removeEventListener('keydown', handleTerminalInput);
    }, [currentLine]);

    useEffect(() => {
        const id = requestAnimationFrame(() => setEffectsReady(true));
        return () => cancelAnimationFrame(id);
    }, []);

    return (
        <section id="home" className="scroll-reveal-section is-visible">
            {/* Background Effects – suppressed greens, reduced blur/opacity for darker feel */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className={`absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/5 rounded-full ${effectsReady ? 'blur-[80px]' : 'blur-0'} animate-pulse`}></div>
                <div className={`absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-emerald-900/5 rounded-full ${effectsReady ? 'blur-[100px]' : 'blur-0'}`}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-bold text-white/[0.02] whitespace-nowrap select-none leading-none z-0">DEV</div>
            </div>

            {/* Mobile Social Bar – under header */}
<div className="lg:hidden relative z-40 mt-8 px-6">
    <div className="flex items-center justify-center gap-4">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-primary/40"></div>

        <div className="flex gap-5">
            {[
                { Icon: MdTerminal, label: 'github' },
                { Icon: MdWork, label: 'linkedin' },
                { Icon: MdAlternateEmail, label: 'email' },
                { Icon: MdMail, label: 'contact' },
            ].map(({ Icon, label }) => (
                <button
                    key={label}
                    type="button"
                    aria-label={label}
                    className="text-white/50 hover:text-primary transition-colors"
                    onClick={() => {}}
                >
                    <Icon className="text-lg" />
                </button>
            ))}
        </div>

        <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-primary/40"></div>
    </div>
</div>


            {/* Sidebar – not fixed (scrolls with page), added tooltips */}
            <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-8 items-center">
                <div className="w-[1px] h-32 bg-linear-to-b from-transparent via-primary/30 to-primary/30"></div>
                <div className="flex flex-col gap-6">
                    <a className="group relative flex items-center justify-center text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1" href="https://github.com/Ngangah-01" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <MdTerminal className="text-[24px]" />
                        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest bg-background-dark border border-primary/20 px-2 py-1 rounded text-primary whitespace-nowrap pointer-events-none">
                            GITHUB
                        </span>
                    </a>
                    <a className="group relative flex items-center justify-center text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1" href="https://www.instagram.com/_code.nerd/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <MdPublic className="text-[24px]" />
                        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest bg-background-dark border border-primary/20 px-2 py-1 rounded text-primary whitespace-nowrap pointer-events-none">
                            INSTAGRAM
                        </span>
                    </a>
                    <a className="group relative flex items-center justify-center text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1" href="https://www.linkedin.com/in/ngangahillary254/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <MdWork className="text-[24px]" />
                        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest bg-background-dark border border-primary/20 px-2 py-1 rounded text-primary whitespace-nowrap pointer-events-none">
                            LINKEDIN
                        </span>
                    </a>
                    <a className="group relative flex items-center justify-center text-white/40 hover:text-primary transition-all duration-300 hover:-translate-y-1" href="mailto:ngangahillary84@gmail.com" aria-label="Email">
                        <MdAlternateEmail className="text-[24px]" />
                        <span className="absolute left-10 opacity-0 group-hover:opacity-100 transition-opacity text-xs font-bold tracking-widest bg-background-dark border border-primary/20 px-2 py-1 rounded text-primary whitespace-nowrap pointer-events-none">
                            EMAIL
                        </span>
                    </a>
                </div>
                <div className="w-[1px] h-32 bg-gradient-to-t from-transparent via-primary/30 to-primary/30"></div>
            </div>

            {/* Main Content – background-dark as #0a0f09 */}
            <main className="flex-grow flex items-center justify-center px-6 md:px-12 lg:px-20 py-12 lg:pl-32 relative">
                <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
                    <div className="flex flex-col gap-8 order-2 lg:order-1 text-center lg:text-left items-center lg:items-start">
                        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-background-dark border border-primary/20 w-fit backdrop-blur-sm shadow-lg">
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                            </span>
                            <span className="text-xs font-bold text-white/80 tracking-widest uppercase">Available for projects</span>
                        </div>
                        <div className="space-y-2">
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight text-white">
                                CRAFTING <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-white to-primary bg-[length:200%_auto] animate-[pulse_4s_ease-in-out_infinite]">SOLUTIONS</span>
                            </h1>
                        </div>
                        <div className="flex flex-col gap-4 max-w-xl">
                            <h2 className="text-base md:text-lg font-medium text-white/90 flex justify-center lg:justify-start items-center gap-2 h-[36px]">
                                <span className="text-primary font-bold mr-1">&gt;</span>
                                <span className="flex items-center gap-1">
                                    <span className="block">{displayedText}</span>
                                    <span className="w-2 h-6 bg-primary animate-blink inline-block"></span>
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-white/50 leading-relaxed">
                                I build high-performance web applications with a focus on elegant architecture and futuristic user interfaces.
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-2 w-full">
                            <button className="group relative flex items-center justify-center gap-3 h-14 px-10 bg-primary text-background-dark text-base font-bold rounded hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(60,249,26,0.3)] w-full sm:w-auto">
                                <span>Download CV</span>
                                <MdRocketLaunch className="text-lg group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button className="flex items-center justify-center gap-2 h-14 px-10 bg-transparent border border-white/20 text-white text-base font-bold rounded hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 w-full sm:w-auto" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
                                <span>Get in Touch</span>
                            </button>
                        </div>
                    </div>

                    {/* Terminal Area – removed circular background, darkened terminal, sloping perspective, text cursor, glow on hover */}
                    <div className="hidden lg:flex relative order-1 lg:order-2 flex justify-center items-center perspective-1000 min-h-[600px]">
                        <div className="relative w-full max-w-[520px] aspect-[4/3] flex items-center justify-center preserve-3d animate-float">
                            <div className={`relative w-full h-full glass-panel rounded-xl overflow-hidden ${effectsReady ? 'shadow-2xl' : 'shadow-none'} preserve-3d group terminal-active transition-all duration-500 hover:shadow-[0_0_50px_rgba(60,249,26,0.15)] hover:border-primary/40 cursor-text`}>
                                <div className="absolute top-0 left-0 w-full h-10 bg-white/5 border-b border-white/10 flex items-center justify-between px-4">
                                    <div className="flex items-center gap-2">
                                        <div className="size-3 rounded-full bg-[#ff5f56]"></div>
                                        <div className="size-3 rounded-full bg-[#ffbd2e]"></div>
                                        <div className="size-3 rounded-full bg-[#27c93f]"></div>
                                        <div className="ml-4 text-[10px] text-white/40 font-mono tracking-widest uppercase flex items-center gap-2">
                                            <MdFolder className="text-[12px]" />
                                            ~/projects/next-gen
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-[10px] text-white/30 font-mono">
                                        <MdAccountTree className="text-[14px] text-primary/60" />
                                        <span>branch: <span className="text-primary/80">main</span></span>
                                    </div>
                                </div>

                                {/* Interactive Terminal – darkened background-dark, Fira Code font */}
                                <div className="p-6 pt-14 font-mono text-xs md:text-sm leading-relaxed h-full overflow-y-auto bg-black/90 flex flex-col">
                                    {terminalOutput.map((line, index) => (
                                        <div key={index} className="whitespace-pre-wrap">
                                            {line}
                                        </div>
                                    ))}
                                    <div className="flex items-center">
                                        alex@dev:~/repo $ {currentLine}
                                        <span className="w-2 h-5 bg-primary animate-blink ml-1 inline-block"></span>
                                    </div>
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/40 to-transparent pointer-events-none"></div>
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary/20 animate-scanline"></div>
                                <div className="absolute top-12 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                    <div className="bg-primary/20 backdrop-blur-md border border-primary/40 px-3 py-1.5 rounded-lg flex items-center gap-2 animate-notification shadow-[0_0_15px_rgba(60,249,26,0.2)]">
                                        <span className="size-1.5 rounded-full bg-primary animate-ping"></span>
                                        <span className="text-[9px] font-bold text-primary uppercase tracking-tighter">User Input Detected: Initializing...</span>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Keys – increased floating distance (translateY from 0 to -30px) */}
                            <div className="absolute -top-10 -right-4 w-12 h-12 glass-panel rounded-lg flex items-center justify-center text-primary text-xl font-bold animate-float-key-1 shadow-[0_0_15px_rgba(60,249,26,0.3)] pointer-events-none">
                                <span>⌘</span>
                            </div>
                            <div className="absolute top-20 -left-10 w-10 h-10 glass-panel rounded-lg flex items-center justify-center text-primary/80 text-lg font-bold animate-float-key-2 shadow-[0_0_10px_rgba(60,249,26,0.2)] pointer-events-none">
                                <span>⌥</span>
                            </div>
                            <div className="absolute -bottom-12 left-1/4 w-14 h-14 glass-panel rounded-lg flex items-center justify-center text-primary text-2xl font-bold animate-float-key-3 shadow-[0_0_20px_rgba(60,249,26,0.4)] pointer-events-none">
                                <MdKeyboardReturn />
                            </div>
                            <div className="absolute top-1/2 -right-12 w-10 h-10 glass-panel rounded-lg flex items-center justify-center text-primary/70 text-base font-bold animate-float-key-2 shadow-[0_0_10px_rgba(60,249,26,0.1)] pointer-events-none">
                                <span>S</span>
                            </div>
                            <div className="absolute bottom-6 right-6 z-30 pointer-events-none lg:pointer-events-auto">
                                <div className="bg-background-dark/90 backdrop-blur-xl border border-primary/20 p-4 rounded-xl shadow-2xl flex items-center gap-4 hover:border-primary/50 transition-all duration-500 group/status cursor-default">
                                    <div className="relative flex items-center justify-center size-10 bg-primary/10 rounded-lg border border-primary/20 group-hover/status:bg-primary/20">
                                        <MdSatelliteAlt className="text-primary text-xl" />
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-[9px] text-white/40 uppercase tracking-[0.2em] font-bold">Node Identity</span>
                                        <span className="text-sm font-bold text-white flex items-center gap-2">
                                            Online <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#3cf91a]"></span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:hidden order-1 flex justify-center items-center py-4">
                                                    {/* Right Avatar */}
                    <div className="relative order-1 lg:order-2 flex flex-col items-center justify-center lg:justify-end py-2 lg:py-0 w-full">


                        <div className="absolute inset-0 rounded-full transform scale-90 lg:translate-x-10"></div>
                        <div className="relative w-72 h-72 md:w-96 md:h-96 lg:w-[600px] lg:h-[600px] group/avatar">
                            <div className="absolute inset-0 rounded-full border border-white/5"></div>
                            <div className="absolute -inset-4 md:-inset-8 rounded-full border border-dashed border-primary/20 animate-spin"></div>
                            <div className="absolute inset-8 rounded-full border border-dotted border-white/10 animate-spin-reverse"></div>
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/50 shadow-2xl relative bg-background-dark z-10 group-hover/avatar:border-primary transition-colors duration-500">
                                <picture>
                                    <source srcSet={avatarAvif} type="image/avif" />
                                    <source srcSet={avatarWebp} type="image/webp" />
                                    <img
                                        alt="Futuristic portrait of a developer with clean lighting"
                                        className="w-full h-full object-cover grayscale group-hover/avatar:grayscale-0 transition-all duration-700 ease-out scale-105 group-hover/avatar:scale-110"
                                        src={avatarPng}
                                    />
                                </picture>
                            </div>

                            <div className="absolute bottom-0 right-0 md:bottom-6 md:right-6 lg:bottom-12 lg:right-4 z-20">
                                <div className="bg-background-dark/80 backdrop-blur-md border border-white/10 p-4 rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex items-center gap-4 hover:border-primary/50 transition-colors duration-300">
                                    <div className="relative flex items-center justify-center size-10 bg-white/5 rounded-lg border border-white/10">
                                        <MdWifi className="text-primary text-xl" />
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
                    </div>
                </div>
                <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce-slow cursor-pointer hover:text-primary transition-colors group">
                    <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/20 group-hover:text-primary transition-colors">Initialize Scroll</span>
                    <div className="w-5 h-9 border border-white/10 rounded-full flex justify-center p-1 group-hover:border-primary transition-colors">
                        <div className="w-0.5 h-1.5 bg-primary rounded-full"></div>
                    </div>
                </div>
            </main>

        </section>
    );
}

