import {
    MdAllInclusive,
    MdAnalytics,
    MdApi,
    MdCloudCircle,
    MdCloudDone,
    MdCode,
    MdDevices,
    MdDns,
    MdGridView,
    MdHtml,
    MdInsights,
    MdInstallMobile,
    MdIntegrationInstructions,
    MdLayers,
    MdOutlineStorage,
    MdPublish,
    MdRocketLaunch,
    MdSettingsEthernet,
    MdSmartphone,
    MdStorage,
    MdTerminal,
    MdVerified,
    MdWeb,
    MdWorkspaces,
} from "react-icons/md";

export default function Skills() {
    return (
        <section id="skills" className="scroll-reveal-section relative min-h-screen flex flex-col py-12 px-6 md:px-10 lg:px-24 bg-background-dark">
            {/* Background Effects */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-20 -left-20 text-[20vw] font-bold text-primary opacity-[0.02] leading-none whitespace-nowrap select-none">
                    /.
                </div>
                <div className="absolute top-[40vh] -right-40 text-[20vw] font-bold text-primary opacity-[0.02] leading-none whitespace-nowrap select-none rotate-90">
                    ARSENAL
                </div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#274a21]/20 rounded-full blur-[100px] mix-blend-screen"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1280px] mx-auto ">
                <div className="w-full grid grid-cols-1 gap-10 ">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-primary/10 pb-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2 text-primary font-bold text-xs tracking-widest uppercase mb-1">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Nganga.Dev Status
                        </div>
                        
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-white">
                            TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">ARSENAL</span>
                        </h1>
                        <p className="text-gray-400 text-lg max-w-xl">
                            A categorized breakdown of my technical proficiencies, specialized stacks, and deployment ecosystem.
                        </p>
                    </div>

                    {/* View Toggle (Grid selected by default) */}
                    <div className="flex h-10 items-center rounded-lg bg-[#1c3518] p-1 border border-primary/20">
                        <label className="cursor-pointer flex h-full items-center px-4 rounded-md text-gray-400 hover:text-primary transition-all">
                            <MdWorkspaces className="text-sm mr-2" />
                            <span className="text-sm font-medium">Orbit</span>
                            <input className="hidden" type="radio" name="view" value="orbit" />
                        </label>
                        <label className="cursor-pointer flex h-full items-center px-4 rounded-md bg-primary text-background-dark shadow-sm transition-all">
                            <MdGridView className="text-sm mr-2" />
                            <span className="text-sm font-bold">Grid</span>
                            <input className="hidden" type="radio" name="view" value="grid" defaultChecked />
                        </label>
                    </div>
                </div>

                {/* Category Filters */}
                <div className="w-full flex flex-wrap gap-3">
                    <button className="px-4 py-2 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium hover:bg-primary hover:text-background-dark transition-all shadow-[0_0_10px_rgba(60,249,26,0.1)]">
                        All Systems
                    </button>
                    <button className="px-4 py-2 rounded-full bg-[#1c3518] text-gray-400 border border-transparent hover:border-primary/30 hover:text-white transition-all text-sm">
                        Frontend
                    </button>
                    <button className="px-4 py-2 rounded-full bg-[#1c3518] text-gray-400 border border-transparent hover:border-primary/30 hover:text-white transition-all text-sm">
                        Backend & Data
                    </button>
                    <button className="px-4 py-2 rounded-full bg-[#1c3518] text-gray-400 border border-transparent hover:border-primary/30 hover:text-white transition-all text-sm">
                        DevOps
                    </button>
                </div>

                {/* Skill Categories */}
                <div className="flex flex-col gap-12 mt-2">
                    {/* Frontend */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <MdDevices className="text-blue-400 text-2xl" />
                            <h3 className="text-2xl font-bold text-white tracking-wide">Frontend Domain</h3>
                            <div className="h-[1px] bg-gradient-to-r from-blue-400/50 to-transparent flex-1 ml-4"></div>
                        </div>
                        <div className="skills-reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {/* Web Fundamentals */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdHtml className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                                        <MdCode className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 rounded px-2 py-1">WEB</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors">Web Fundamentals</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">The bedrock of web development. Semantic markup, advanced styling, and core logic.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['HTML', 'CSS', 'SASS', 'JavaScript'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-blue-400 h-full w-[98%] shadow-[0_0_10px_#60a5fa] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-blue-400 font-bold font-mono">98%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Web Frameworks */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdLayers className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(56,189,248,0.1)]">
                                        <MdWeb className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded px-2 py-1">FRAMEWORKS</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-sky-400 transition-colors">Web Frameworks</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Building scalable SPAs with modern component-based architectures.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['React.js', 'Angular', 'Hooks'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-sky-400 h-full w-[95%] shadow-[0_0_10px_#38bdf8] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-sky-400 font-bold font-mono">95%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Solutions */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdSmartphone className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(192,132,252,0.1)]">
                                        <MdInstallMobile className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-purple-400 bg-purple-500/10 border border-purple-500/20 rounded px-2 py-1">MOBILE</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-purple-400 transition-colors">Mobile Solutions</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Cross-platform development for high-performance iOS and Android apps.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Flutter', 'React Native', 'Dart'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-purple-400 h-full w-[88%] shadow-[0_0_10px_#c084fc] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-purple-400 font-bold font-mono">88%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Backend & Intelligence */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <MdDns className="text-emerald-400 text-2xl" />
                            <h3 className="text-2xl font-bold text-white tracking-wide">Backend & Intelligence</h3>
                            <div className="h-[1px] bg-gradient-to-r from-emerald-400/50 to-transparent flex-1 ml-4"></div>
                        </div>
                        <div className="skills-reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                            {/* Backend Engineering */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdTerminal className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(251,146,60,0.1)]">
                                        <MdSettingsEthernet className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-orange-400 bg-orange-500/10 border border-orange-500/20 rounded px-2 py-1">SERVER</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors">Backend Engineering</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Robust server-side logic and microservices architecture.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Node/Express', 'Python/Django', 'Java/Spring'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-orange-400 h-full w-[90%] shadow-[0_0_10px_#fb923c] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-orange-400 font-bold font-mono">90%</span>
                                    </div>
                                </div>
                            </div>

                            {/* MERN Stack - Highlighted as Expert */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden ring-1 ring-primary/40 bg-primary/5">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdIntegrationInstructions className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/40 flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(60,249,26,0.2)]">
                                        <MdVerified className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-background-dark bg-primary border border-primary rounded px-2 py-1 shadow-[0_0_10px_rgba(60,249,26,0.4)]">EXPERT</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-primary transition-colors">MERN Stack</h4>
                                    <p className="text-gray-300 text-xs mt-2 mb-4 leading-relaxed">End-to-end fullstack JavaScript development for high-scale applications.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['MongoDB', 'Express', 'React', 'Node.js'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-primary/10 border border-primary/30 text-primary">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-primary h-full w-[99%] shadow-[0_0_10px_#3cf91a] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-primary font-bold font-mono">99%</span>
                                    </div>
                                </div>
                            </div>

                            {/* API Architecture */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdApi className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                        <div className="w-12 h-12 rounded-lg bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(45,212,191,0.1)]">
                                        <MdApi className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-teal-400 bg-teal-500/10 border border-teal-500/20 rounded px-2 py-1">CONNECT</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-teal-400 transition-colors">API Architecture</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Designing efficient, secure, and documented data exchange protocols.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['RESTful', 'GraphQL', 'Webhooks'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-teal-400 h-full w-[92%] shadow-[0_0_10px_#2dd4bf] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-teal-400 font-bold font-mono">92%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Data Science & ML */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdInsights className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(244,114,182,0.1)]">
                                        <MdAnalytics className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-pink-400 bg-pink-500/10 border border-pink-500/20 rounded px-2 py-1">SCIENCE</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-pink-400 transition-colors">Data Science & ML</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Extracting insights and building predictive models using Python's ecosystem.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Python Analysis', 'Pandas', 'NumPy'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-pink-400 h-full w-[85%] shadow-[0_0_10px_#f472b6] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-pink-400 font-bold font-mono">85%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Infrastructure & Ops */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <MdCloudDone className="text-purple-400 text-2xl" />
                            <h3 className="text-2xl font-bold text-white tracking-wide">Infrastructure & Ops</h3>
                            <div className="h-[1px] bg-gradient-to-r from-purple-400/50 to-transparent flex-1 ml-4"></div>
                        </div>
                        <div className="skills-reveal-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {/* Database Systems */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdStorage className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(251,113,133,0.1)]">
                                        <MdOutlineStorage className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded px-2 py-1">DATA</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-rose-400 transition-colors">Database Systems</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Designing schemas and optimizing queries for relational and NoSQL data.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['PostgreSQL', 'MongoDB', 'MySQL'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-rose-400 h-full w-[90%] shadow-[0_0_10px_#fb7185] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-rose-400 font-bold font-mono">90%</span>
                                    </div>
                                </div>
                            </div>

                            {/* DevOps */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdCloudCircle className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                                        <MdAllInclusive className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 rounded px-2 py-1">CI/CD</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">DevOps</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Streamlining development lifecycles with containerization and automation.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Docker', 'AWS', 'Pipelines'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-cyan-400 h-full w-[80%] shadow-[0_0_10px_#22d3ee] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-cyan-400 font-bold font-mono">80%</span>
                                    </div>
                                </div>
                            </div>

                            {/* Cloud Deployment */}
                            <div className="glass-card glass-card-hover scroll-reveal-item skills-reveal-card rounded-xl p-6 flex flex-col gap-4 group relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity">
                                    <MdRocketLaunch className="text-6xl" />
                                </div>
                                <div className="flex justify-between items-start z-10">
                                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(129,140,248,0.1)]">
                                        <MdPublish className="text-2xl" />
                                    </div>
                                    <span className="text-[10px] font-mono font-bold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 rounded px-2 py-1">DEPLOY</span>
                                </div>
                                <div className="z-10">
                                    <h4 className="text-white font-bold text-xl group-hover:text-indigo-400 transition-colors">Cloud Deployment</h4>
                                    <p className="text-gray-400 text-xs mt-2 mb-4 leading-relaxed">Modern hosting platforms for rapid and scalable application delivery.</p>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {['Vercel', 'Netlify', 'Edge'].map(tag => (
                                            <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-gray-300">{tag}</span>
                                        ))}
                                    </div>
                                    <div className="w-full bg-black/40 h-1.5 rounded-full overflow-hidden relative">
                                        <div className="bg-indigo-400 h-full w-[88%] shadow-[0_0_10px_#818cf8] relative overflow-hidden">
                                            <div className="skill-bar-shine"></div>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-2 items-center">
                                        <span className="text-[10px] text-gray-500 font-mono tracking-wider">PROFICIENCY</span>
                                        <span className="text-xs text-indigo-400 font-bold font-mono">88%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Stats */}
                {/* <div className="flex flex-col md:flex-row gap-4 mt-8 bg-[#0d180b] border border-primary/10 rounded-xl p-4 md:p-6 justify-between items-center text-sm">
                    <div className="flex items-center gap-3 text-gray-400">
                        <span className="material-symbols-outlined text-primary/60">hub</span>
                        <span>Total Technologies: <span className="text-white font-bold">28</span></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-400">
                        <span className="material-symbols-outlined text-primary/60">update</span>
                        <span>Last Updated: <span className="text-white font-bold">Today</span></span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-gray-500 text-xs font-mono">SYSTEM_ID: V2.0.1</span>
                    </div>
                </div> */}
                </div>
            </div>

        </section>
    );
}


