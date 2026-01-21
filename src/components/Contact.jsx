export default function Contact() {
    return (
        <section className="relative bg-background-dark py-12 px-6 lg:py-24 overflow-hidden">
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

                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">First Name</label>
                                        <input
                                            className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                            placeholder="First name"
                                            type="text"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-semibold text-gray-300">Last Name</label>
                                        <input
                                            className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                            placeholder="Last name"
                                            type="text"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Email</label>
                                    <input
                                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md"
                                        placeholder="you@company.com"
                                        type="email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-300">Message</label>
                                    <textarea
                                        className="w-full bg-white/5 border border-primary/20 rounded-xl px-4 py-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary transition-all backdrop-blur-md resize-none"
                                        placeholder="Tell me about your project..."
                                        rows={5}
                                    />
                                </div>

                                <div className="space-y-4">
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            className="mt-1 bg-white/5 border-primary/30 rounded text-primary focus:ring-primary"
                                            type="checkbox"
                                        />
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            I agree to receive other communication messages.
                                            <span className="text-primary ml-1">*</span>
                                        </span>
                                    </label>

                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            className="mt-1 bg-white/5 border-primary/30 rounded text-primary focus:ring-primary"
                                            type="checkbox"
                                        />
                                        <span className="text-sm text-gray-400 group-hover:text-gray-200 transition-colors">
                                            I give my consent to store my data for processing purposes.
                                            <span className="text-primary ml-1">*</span>
                                        </span>
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="mt-4 w-full md:w-auto bg-primary text-background-dark px-10 py-4 rounded-xl font-bold hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(60,249,26,0.4)] transition-all duration-300 flex items-center justify-center gap-2"
                                >
                                    Initialize Connection
                                    <span className="material-symbols-outlined">send</span>
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
                                        <span className="material-symbols-outlined">mail</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Quick Contact</h3>
                                        <p className="text-gray-400 text-sm">
                                            Email: <a className="text-primary hover:underline" href="mailto:hello@dev_portfolio.com">ngangah@dev.com</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">call</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Phone Number</h3>
                                        <p className="text-gray-400 text-sm">
                                            International: +(254) 745 115 711<br />
                                            Support: +(254) 745 115 711
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                                        <span className="material-symbols-outlined">pin_drop</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-white mb-1">Headquarters</h3>
                                        <p className="text-gray-400 text-sm">
                                            Tech Plaza, Suite 105<br />
                                            Nairibi, P.O 94105, Kenya.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}