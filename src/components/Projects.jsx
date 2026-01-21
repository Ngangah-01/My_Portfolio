import { useEffect, useRef } from 'react';

export default function Projects() {
    const revealRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        revealRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addToRefs = (el) => {
        if (el && !revealRefs.current.includes(el)) {
            revealRefs.current.push(el);
        }
    };

    return (
        <section className="relative min-h-screen bg-background-dark py-12 px-6 md:px-10 lg:px-24 overflow-hidden">
            {/* Background Blobs */}
            <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[20%] -left-[10%] text-[20vw] font-bold text-white/[0.02] leading-none select-none font-display tracking-tighter whitespace-nowrap">
                    /
                </div>
                <div className="absolute top-[60%] -right-[10%] text-[20vw] font-bold text-white/[0.02] leading-none select-none font-display tracking-tighter whitespace-nowrap">
                    ..
                </div>
                <div className="absolute top-[-10%] right-[10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#274a21]/20 rounded-full blur-[140px] animate-blob" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: '4s' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-[1280px] mx-auto">
                <div className="w-full grid grid-cols-1 gap-10 ">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
                    <div className="w-full">
                        <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase mb-2">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            Selected works
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-[1] mb-6">
                            Digital <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-primary/50">Experiments</span>
                        </h1>
                        <p className="text-white/60 text-lg max-w-xl leading-relaxed">
                            Curated projects showcasing interface design, data visualization, and mobile interactions.
                        </p>
                    </div>
                    <div className="flex flex-nowrap gap-3 shrink-0 lg:justify-start">
                        <button className="px-6 py-2 rounded-full bg-primary text-background-dark font-bold text-sm shadow-[0_0_20px_rgba(60,249,26,0.3)] hover:shadow-[0_0_30px_rgba(60,249,26,0.5)] transition-all hover:-translate-y-1">
                            All Work
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all backdrop-blur-md">
                            Mobile
                        </button>
                        <button className="px-6 py-2 rounded-full border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:border-primary/50 hover:text-primary transition-all backdrop-blur-md">
                            Web
                        </button>
                    </div>
                </div>

                {/* Desktop: Bento Grid */}
                <div className="hidden lg:grid grid-cols-12 gap-8 auto-rows-[320px] mb-8">
                    {/* Large Card - CryptoDash AI */}
                    <article ref={addToRefs} className="reveal-on-scroll group relative col-span-8 row-span-2 rounded-[2.5rem] overflow-hidden bg-[#0a0a0a] border border-white/5 shadow-2xl hover:border-primary/30 transition-all duration-500">
                        <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBdm_tS8olD_V40Zlfc-0L6bz-xIn3Ou2iQkyUEuKanuEw3evxDjaqwtkZwSVZk69_gYzbYk0TxxJqGDleHm1bBW84IS6S_5LGbmFdfW2g4rNSNJTriG0rtSA3LO4aGhJjJaU9M5yflYcDnH6AVY9E1jjsVMsj3kBVCv_VzBEaI3jy19gIeDatPoBR_GOpMwteYlanOaKcGtc4MTFgJHMnqFqA-EMW_spzmSxORCUvv4mYsxRRE086uEOCE_TrFLWg7n2QpMGyuPpc')" }}></div>
                        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90"></div>

                        <div className="absolute bottom-8 left-8 right-8 lg:right-auto lg:w-[480px] z-20">
                            <div className="bg-black/70 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-3xl group-hover:-translate-y-2 transition-transform">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex gap-2">
                                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 rounded-full">Web App</span>
                                        <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white/60 bg-white/5 border border-white/10 rounded-full">AI/ML</span>
                                    </div>
                                    <span className="material-symbols-outlined text-white/40">dashboard</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">CryptoDash AI</h3>
                                <p className="text-white/70 text-sm mb-6">A comprehensive financial dashboard integrating predictive machine learning models to forecast market trends. Features real-time WebSocket data streams.</p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    <div className="flex -space-x-2">
                                        <div className="w-8 h-8 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">Re</div>
                                        <div className="w-8 h-8 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">Ts</div>
                                        <div className="w-8 h-8 rounded-full bg-[#202020] border border-white/10 flex items-center justify-center text-[10px] text-white font-bold">Py</div>
                                    </div>
                                    <button className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors group/btn">
                                        View Case Study
                                        <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                            <button className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                                <span className="material-symbols-outlined text-[24px]">north_east</span>
                            </button>
                        </div>
                    </article>

                    {/* Mobile Mockup - Nexus */}
                    <article ref={addToRefs} className="reveal-on-scroll col-span-4 row-span-2 flex items-center justify-center" style={{ transitionDelay: '100ms' }}>
                        <div className="relative w-full max-w-sm p-6 bg-[#0a0a0a] rounded-[2.5rem] border border-white/5 group">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary/20 rounded-full blur-[100px] group-hover:bg-primary/30 transition-colors"></div>
                            <div className="text-center mb-6 z-10 flex justify-between items-end">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">Nexus</h3>
                                    <span className="text-white/40 text-xs">Mobile App</span>
                                </div>
                                <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 text-white">
                                    <span className="material-symbols-outlined text-[20px]">smartphone</span>
                                </button>
                            </div>
                            <div className="relative mx-auto w-[280px] h-[580px] bg-black rounded-[40px] overflow-hidden border-8 border-[#222] shadow-2xl group-hover:-translate-y-4 transition-transform">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-b-2xl z-30"></div>
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[30%] h-1 bg-[#222] rounded-full"></div>
                                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBOtXjQMYGOQ0Icdh4YbitLSNZVWsxaOHW5yPpn1Z9rv9R3IWmGsPE0M8Fury2E48XtqMKjqd02oitF6ujmmMknVpxJVdUhdURDfEtiEhPrVMdZaA-oypczV31DQ24119HcD144TnGRWo1Zi4M_hrwYTIw31WSvA-kygAiAwZ-58BH_6a7Ox1ijTV3Mip9ykwLqRHkL1vANqVF0BYuM6CqS7pxh7ejJY__ulbfjLv4F6mDVpgy98Atwfu-KvtAyM3yKdQl0EnXzLNQ" alt="Nexus App" className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-center p-6">
                                    <span className="material-symbols-outlined text-4xl text-primary mb-2">touch_app</span>
                                    <h4 className="text-xl font-bold text-white">Interactive Preview</h4>
                                    <p className="text-white/60 text-xs mt-2 mb-4">React Native • GraphQL</p>
                                    <button className="px-4 py-2 bg-white text-black text-xs font-bold uppercase rounded-lg hover:bg-primary transition-colors">
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Smaller Cards */}
                    {/* DataVault */}
                    <article ref={addToRefs} className="reveal-on-scroll group relative col-span-4 rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-primary/40" style={{ transitionDelay: '200ms' }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtxoBPHeMFRKDNclOMqKat2KDK3xlIJVumxQ6ywDkAonI_11-e57EkE6EFseoZkMuBzbsTAYVi2kWekxCjWP4ArMoiE7UDWoJ0-FtUIzoUB88h_V8rKVdUOzDfZh5us_7SD8XHsbMs8GQ5vcalLWVlPSqkR9dmHo7F3a9rGukvSc3kOIr54qfYt4epfkw-5PnkC7YxM60KKZfCI9UMTbiL6M428_NWWa3mIhfg5HcOrvDMPmlpKUd-cE6w0nhOTxqJGv0G7x2SuRE" alt="DataVault" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
                        <div className="absolute inset-0 p-6 flex flex-col justify-end z-20">
                            <div className="mb-auto flex justify-between items-start">
                                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary backdrop-blur-md">
                                    <span className="material-symbols-outlined">analytics</span>
                                </div>
                                <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] text-white/50 uppercase font-mono">v2.4.0</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">DataVault</h3>
                            <p className="text-white/50 text-xs mb-4">Secure decentralized data storage analysis.</p>
                            <div className="flex items-center justify-between">
                                <div className="flex gap-1">
                                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70">Python</span>
                                    <span className="px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-white/70">Pandas</span>
                                </div>
                                <button className="text-xs font-bold text-white flex items-center gap-1 hover:text-primary">
                                    Details <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* GeoTrack VR */}
                    <article ref={addToRefs} className="reveal-on-scroll group relative col-span-4 rounded-[2rem] overflow-hidden bg-[#0a0a0a] border border-white/5 hover:border-primary/40" style={{ transitionDelay: '250ms' }}>
                        <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe6U4np4tEnJHP95qqxvwULEcvSEBzTmHAzrwGqdekMsLpfuYW-B_N0u0QVlpD7Y3YlvIXsSL7mWR6kAfWzR7QG-lxRVaqANRawOq54uGUF0Lt8IlgG0oWvLjEFhBSV6eL6nOBvUP-yNUJbNLGaC9tdUjdPJbzlVtH4z92oaeV_bPe1LeK3yFJcyHwLiOrgBBQ6NxHNaidKW5QH0LBDqPYJ91XBFWHH7sHbW7fzJ69znC6b9IpiSJvmxwpeZ2JjXpfmJTsBcWtMns" alt="GeoTrack VR" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10"></div>
                        <div className="absolute inset-0 z-20 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform">
                            <div className="flex items-center gap-2 mb-2">
                                <span className="w-2 h-2 rounded-full bg-primary"></span>
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Immersive</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-1">GeoTrack VR</h3>
                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all">
                                <p className="text-white/60 text-xs mt-2 mb-3">Spatial tracking in virtual environments using WebXR.</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[10px] text-white/80 bg-white/10 px-2 py-1 rounded">Three.js</span>
                                    <span className="text-[10px] text-white/80 bg-white/10 px-2 py-1 rounded">WebGL</span>
                                </div>
                            </div>
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-colors backdrop-blur-sm">
                                <span className="material-symbols-outlined">view_in_ar</span>
                            </button>
                        </div>
                    </article>

                    {/* Aether UI */}
                    <article ref={addToRefs} className="reveal-on-scroll group relative col-span-4 rounded-[2rem] overflow-hidden bg-[#111] border border-white/5 hover:border-primary/40" style={{ transitionDelay: '300ms' }}>
                        <div className="absolute inset-0 p-8 flex flex-col items-center justify-center z-10">
                            <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary/20 to-blue-500/20 blur-xl absolute"></div>
                            <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBWta2lNlmZeQcH7kJ6FwLK73MUy1ChxjZd_-Kr4Z0CcSVoBfK9UevhnOjs7Z7QURuiTSW8e6ScNLVSHx_aLGspvoCyk9XqlYnr8y_bpqF7RlHlSoK9LJ6NmwvvdacV6RVNl07ENlP9KjnKUUqUDf_D6IsOw8E5S2mJTQ7Wk2Qy_4w5CAWN4R8twfcJHiU_94YIcTy3L64XRIb37ABCxHX4lG1r5tL9oVfrx9LiOT0cKNnom4Z1O6U-dvHbQYfoAj_xhirrwR_7Tw" alt="Aether UI" className="relative z-10 w-full h-40 object-cover rounded-lg shadow-2xl group-hover:scale-105 transition-transform border border-white/10" />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-[#0f0f0f]/90 backdrop-blur-md p-5 z-20 border-t border-white/5">
                            <div className="flex justify-between items-center mb-1">
                                <h3 className="text-lg font-bold text-white">Aether UI</h3>
                                <span className="text-[10px] font-mono text-white/40">v1.0</span>
                            </div>
                            <p className="text-white/50 text-xs mb-3">React component library.</p>
                            <button className="w-full py-2 rounded-lg bg-white/5 border border-white/10 text-xs text-white hover:bg-primary hover:text-black hover:border-primary transition-all font-bold">
                                View Documentation
                            </button>
                        </div>
                    </article>
                </div>

                {/* Mobile: Horizontal Swipeable Layered Cards */}
                <div className="lg:hidden -mx-6 px-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                    <div className="flex gap-6 pb-8 pt-4">
                        {[
                            { title: "CryptoDash AI", tag: "Web App • AI/ML", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdm_tS8olD_V40Zlfc-0L6bz-xIn3Ou2iQkyUEuKanuEw3evxDjaqwtkZwSVZk69_gYzbYk0TxxJqGDleHm1bBW84IS6S_5LGbmFdfW2g4rNSNJTriG0rtSA3LO4aGhJjJaU9M5yflYcDnH6AVY9E1jjsVMsj3kBVCv_VzBEaI3jy19gIeDatPoBR_GOpMwteYlanOaKcGtc4MTFgJHMnqFqA-EMW_spzmSxORCUvv4mYsxRRE086uEOCE_TrFLWg7n2QpMGyuPpc" },
                            { title: "Nexus", tag: "Mobile App", mockup: true, img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBOtXjQMYGOQ0Icdh4YbitLSNZVWsxaOHW5yPpn1Z9rv9R3IWmGsPE0M8Fury2E48XtqMKjqd02oitF6ujmmMknVpxJVdUhdURDfEtiEhPrVMdZaA-oypczV31DQ24119HcD144TnGRWo1Zi4M_hrwYTIw31WSvA-kygAiAwZ-58BH_6a7Ox1ijTV3Mip9ykwLqRHkL1vANqVF0BYuM6CqS7pxh7ejJY__ulbfjLv4F6mDVpgy98Atwfu-KvtAyM3yKdQl0EnXzLNQ" },
                            { title: "DataVault", tag: "Data • Security", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtxoBPHeMFRKDNclOMqKat2KDK3xlIJVumxQ6ywDkAonI_11-e57EkE6EFseoZkMuBzbsTAYVi2kWekxCjWP4ArMoiE7UDWoJ0-FtUIzoUB88h_V8rKVdUOzDfZh5us_7SD8XHsbMs8GQ5vcalLWVlPSqkR9dmHo7F3a9rGukvSc3kOIr54qfYt4epfkw-5PnkC7YxM60KKZfCI9UMTbiL6M428_NWWa3mIhfg5HcOrvDMPmlpKUd-cE6w0nhOTxqJGv0G7x2SuRE" },
                            { title: "GeoTrack VR", tag: "Immersive • WebXR", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBe6U4np4tEnJHP95qqxvwULEcvSEBzTmHAzrwGqdekMsLpfuYW-B_N0u0QVlpD7Y3YlvIXsSL7mWR6kAfWzR7QG-lxRVaqANRawOq54uGUF0Lt8IlgG0oWvLjEFhBSV6eL6nOBvUP-yNUJbNLGaC9tdUjdPJbzlVtH4z92oaeV_bPe1LeK3yFJcyHwLiOrgBBQ6NxHNaidKW5QH0LBDqPYJ91XBFWHH7sHbW7fzJ69znC6b9IpiSJvmxwpeZ2JjXpfmJTsBcWtMns" },
                            { title: "Aether UI", tag: "Component Library", img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDBWta2lNlmZeQcH7kJ6FwLK73MUy1ChxjZd_-Kr4Z0CcSVoBfK9UevhnOjs7Z7QURuiTSW8e6ScNLVSHx_aLGspvoCyk9XqlYnr8y_bpqF7RlHlSoK9LJ6NmwvvdacV6RVNl07ENlP9KjnKUUqUDf_D6IsOw8E5S2mJTQ7Wk2Qy_4w5CAWN4R8twfcJHiU_94YIcTy3L64XRIb37ABCxHX4lG1r5tL9oVfrx9LiOT0cKNnom4Z1O6U-dvHbQYfoAj_xhirrwR_7Tw" },
                        ].map((project, i) => (
                            <div key={i} className="snap-center shrink-0 w-[85vw] first:ml-6 last:mr-6">
                                <div className="relative rounded-3xl overflow-hidden bg-[#0a0a0a] border border-white/10 shadow-2xl">
                                    {project.mockup ? (
                                        <div className="relative h-96 bg-black rounded-3xl overflow-hidden border-8 border-[#222]">
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[35%] h-7 bg-black rounded-b-2xl z-30"></div>
                                            <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
                                        </div>
                                    ) : (
                                        <img src={project.img} alt={project.title} className="w-full h-80 object-cover" />
                                    )}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                                        <span className="text-primary text-xs font-bold uppercase tracking-wider">{project.tag}</span>
                                        <h3 className="text-2xl font-bold text-white mt-1">{project.title}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-20 text-center">
                    <p className="text-white/40 text-sm font-mono tracking-widest uppercase mb-4">Exploration continues</p>
                    <button className="group relative px-8 py-3 rounded-full bg-transparent border border-white/20 hover:border-primary/50 text-white transition-all duration-300 overflow-hidden">
                        <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                        <span className="relative flex items-center gap-3 font-bold">
                            View Complete Archive
                            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                        </span>
                    </button>
                </div>
            </div>
            </div>

            {/* Scroll Hint */}
            <div className="fixed bottom-8 right-8 z-50 animate-float hidden lg:block">
                <button className="group flex items-center gap-3 bg-black/80 backdrop-blur-xl border border-white/10 pr-6 pl-2 py-2 rounded-full shadow-[0_0_30px_rgba(0,0,0,0.5)] hover:border-primary/50 transition-all">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-black transition-colors text-white border border-white/10">
                        <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-[10px] text-white/40 uppercase tracking-wider font-bold">Scroll</span>
                        <span className="text-sm font-bold text-white group-hover:text-primary transition-colors">Explore</span>
                    </div>
                </button>
            </div>
        </section>
    );
}