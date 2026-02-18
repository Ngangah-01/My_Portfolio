import {
    MdCloudOff,
    MdGridView,
    MdInstallMobile,
    MdMemory,
    MdTerminal,
} from "react-icons/md";
import serviceUi from "../assets/service-ui.svg";
import serviceWeb from "../assets/service-web.svg";
import serviceMobile from "../assets/service-mobile.svg";
import serviceCloud from "../assets/service-cloud.svg";
import serviceAutomation from "../assets/service-automation.svg";

const Services = () => {
    const mobileServices = [
        {
            title: "UI/UX Architecture",
            meta: "01 / System Design",
            desc: "High-fidelity interfaces and design systems with strong user flow.",
            Icon: MdGridView,
            image: serviceUi,
        },
        {
            title: "Web Forge",
            meta: "02 / Full Stack",
            desc: "Modern frameworks for scalable, high-performance web apps.",
            Icon: MdTerminal,
            image: serviceWeb,
        },
        {
            title: "Mobile Core",
            meta: "03 / Native Feel",
            desc: "Cross-platform mobile experiences for iOS and Android.",
            Icon: MdInstallMobile,
            image: serviceMobile,
        },
        {
            title: "Cloud Ops",
            meta: "04 / Reliability",
            desc: "Infra, Docker orchestration, and automated pipelines.",
            Icon: MdCloudOff,
            image: serviceCloud,
        },
        {
            title: "Automation",
            meta: "05 / AI & Data",
            desc: "Custom AI integrations and data pipelines at scale.",
            Icon: MdMemory,
            image: serviceAutomation,
        },
    ];

    return (
        <section id="services" className="relative py-12 md:py-12 px-6 overflow-hidden bg-background-dark">
            {/* Ambient Background */}
            <div className="fixed inset-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full" />
                <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-500/5 blur-[100px] rounded-full" />
            </div>

            {/* Ghost Text */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
                <h1 className="text-[20vw] font-bold text-primary/[0.02] tracking-tighter whitespace-nowrap">
                    SERVICES
                </h1>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <header className="mb-12 space-y-4">
                    <div className="flex items-center gap-4 text-primary font-mono text-sm tracking-widest uppercase mb-2">
                        <span className="h-px w-12 bg-primary" />
                        <span className="animate-pulse">System Capabilities</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Services{" "}
                        <span className="text-primary font-mono italic">I Offer</span>
                    </h2>

                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                        Engineering high-performance digital solutions with a focus on
                        technical excellence and next-generation user experience.
                    </p>
                </header>

                {/* Mobile Services – cinematic swipe deck */}
                <div className="md:hidden">
                    <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold tracking-widest uppercase text-primary">Service Matrix</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/40 to-transparent" />
                    </div>
                    <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide">
                        {mobileServices.map(({ title, meta, desc, Icon, image }) => (
                            <article
                                key={title}
                                className="snap-center shrink-0 w-[82vw] max-w-sm"
                            >
                                <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.85)]">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center"
                                        style={{ backgroundImage: `url(${image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(60,249,26,0.25),transparent_45%)] opacity-70" />
                                    <div className="relative z-10 h-full p-6 flex flex-col">
                                        <div className="flex items-center justify-between">
                                            <span className="text-[10px] font-mono tracking-widest text-white/60">
                                                {meta}
                                            </span>
                                            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary">
                                                <Icon className="text-2xl" />
                                            </div>
                                        </div>
                                        <div className="mt-auto">
                                            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
                                            <p className="text-sm text-white/70 leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-[10px] uppercase tracking-[0.3em] text-white/30">
                        <span className="h-px w-8 bg-white/10" />
                        Swipe
                        <span className="h-px w-8 bg-white/10" />
                    </div>
                </div>

                {/* Services Grid */}
                <div className="hidden md:grid grid-cols-12 gap-6">
                    {/* 01 */}
                    <div className="col-span-12 lg:col-span-7 glass-morphic parallax-tilt rounded-3xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-circuit opacity-20" />
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-[60px] slow-pulse" />

                        <div className="relative z-10 flex flex-col h-full justify-between">
                            <div>
                                <div className="mb-12 inline-block">
                                    <MdGridView className="text-primary text-5xl neon-glow" />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-6 font-mono tracking-tight group-hover:text-primary transition-colors">
                                    01. UI/UX Architecture
                                </h3>

                                <p className="text-slate-400 text-xl leading-relaxed max-w-md">
                                    Crafting high-fidelity, intuitive interfaces and design systems
                                    that prioritize user flow and emotional resonance.
                                </p>
                            </div>

                            <div className="mt-16 flex flex-wrap gap-3 font-mono text-[10px] tracking-tighter uppercase">
                                {["Prototype Engine", "System Design", "Human Factors"].map(
                                    (tag) => (
                                        <span
                                            key={tag}
                                            className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary"
                                        >
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* 02 */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-5 glass-morphic parallax-tilt rounded-3xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-circuit opacity-10" />
                        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-[40px] slow-pulse" />

                        <div className="relative z-10">
                            <div className="mb-12 inline-block">
                                <MdTerminal className="text-primary text-5xl neon-glow" />
                            </div>

                            <h3 className="text-3xl font-bold text-white mb-6 font-mono tracking-tight group-hover:text-primary transition-colors">
                                02. Web Forge
                            </h3>

                            <p className="text-slate-400 text-lg leading-relaxed">
                                Full-stack engineering utilizing modern frameworks to deliver
                                scalable, blazing-fast web applications.
                            </p>

                            <div className="mt-12 space-y-4 font-mono text-sm">
                                <div className="flex justify-between border-b border-primary/10 pb-2 text-slate-500">
                                    <span>Frontend Protocol</span>
                                    <span className="text-primary">React / Next.js</span>
                                </div>
                                <div className="flex justify-between border-b border-primary/10 pb-2 text-slate-500">
                                    <span>Logic Layer</span>
                                    <span className="text-primary">Node / Python</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 03 */}
                    <div className="col-span-12 md:col-span-6 lg:col-span-4 glass-morphic parallax-tilt rounded-3xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-circuit opacity-10" />
                        <div className="relative z-10">
                            <div className="mb-12 inline-block">
                                <MdInstallMobile className="text-primary text-5xl neon-glow" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-tight">
                                03. Mobile Core
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Cross-platform native experiences built with Flutter and React
                                Native for iOS and Android deployments.
                            </p>
                        </div>
                    </div>

                    {/* 04 */}
                    <div className="col-span-12 md:col-span-7 lg:col-span-4 glass-morphic parallax-tilt rounded-3xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-circuit opacity-10" />
                        <div className="relative z-10">
                            <div className="mb-12 inline-block">
                                <MdCloudOff className="text-primary text-5xl neon-glow" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-tight">
                                04. Cloud Ops
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Infrastructure as code, Docker orchestration, and automated CI/CD
                                pipelines for mission-critical uptime.
                            </p>
                        </div>
                    </div>

                    {/* 05 */}
                    <div className="col-span-12 md:col-span-5 lg:col-span-4 glass-morphic parallax-tilt rounded-3xl p-10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-circuit opacity-10" />
                        <div className="relative z-10">
                            <div className="mb-12 inline-block">
                                <MdMemory className="text-primary text-5xl neon-glow" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4 font-mono tracking-tight">
                                05. Automation
                            </h3>
                            <p className="text-slate-400 leading-relaxed">
                                Custom AI integrations and data processing pipelines designed
                                for enterprise-scale automation.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Banner – UNCHANGED */}
                <div className="mt-20 relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-700" />
                    <div className="relative glass-morphic rounded-[2.5rem] p-12 md:p-20 overflow-hidden border-2 border-primary/20">
                        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-[120px] slow-pulse" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="space-y-6 max-w-2xl text-center md:text-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] font-mono uppercase">
                                    <span className="w-1 h-1 rounded-full bg-primary animate-ping" />
                                    Establishing Connection
                                </div>

                                <h2 className="text-4xl md:text-6xl font-bold text-white">
                                    INITIATE YOUR{" "}
                                    <span className="text-primary font-mono block">
                                        NEXT PROJECT_
                                    </span>
                                </h2>

                                <p className="text-slate-400 text-lg">
                                    Ready to bypass limitations and build something that defines
                                    the next generation of the web?
                                </p>
                            </div>

                            <div className="flex flex-col gap-4 w-full md:w-auto">
                                <button className="relative px-10 py-5 bg-primary text-black font-mono font-bold uppercase rounded-xl hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition"
                                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} >
                                    [ GET_IN_TOUCH ]
                                </button>
                                <button className="px-10 py-5 border border-primary/30 text-primary font-mono font-bold uppercase rounded-xl hover:bg-primary/5"
                                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
                                    VIEW_NODES
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
