import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { MdClose, MdMenu } from "react-icons/md";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Desktop “liquid glass” hover highlight position (for specular reflection)
  const [shine, setShine] = useState({ x: 50, y: 30, a: 0 }); // percent + alpha
  const navRef = useRef(null);
  const manualActiveUntilRef = useRef(0);
  const visibleRef = useRef(new Map());

  const navItems = useMemo(
    () => [
      { label: "Home", href: "#home" },
      { label: "About", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "Skills", href: "#skills" },
      { label: "Projects", href: "#projects" },
      { label: "Contact", href: "#contact" },
    ],
    []
  );

  const [activeItem, setActiveItem] = useState("Home");
  const [hoveredItem, setHoveredItem] = useState(null);

  // Lock scroll when menu is open (mobile)
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileMenuOpen]);

  // MOBILE menu animation – height-based “grow down / retract”
  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.25, ease: "easeOut" },
        when: "beforeChildren",
        staggerChildren: 0.06,
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: {
        //control retract speed
        height: { duration: 0.65, ease: [0.4, 0, 0.2, 1] },
        opacity: { duration: 0.25, ease: "easeInOut" },
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
    exit: { opacity: 0, y: -8, transition: { duration: 0.15 } },
  };

  function handleNavMouseMove(e) {
    const el = navRef.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const px = ((e.clientX - r.left) / r.width) * 100;
    const py = ((e.clientY - r.top) / r.height) * 100;

    setShine({ x: px, y: py, a: 1 });
  }

  function handleNavMouseLeave() {
    setShine((s) => ({ ...s, a: 0 }));
    setHoveredItem(null);
  }

  function handleNavClick(event, targetId, label, closeMobile = false) {
    event.preventDefault();
    manualActiveUntilRef.current = Date.now() + 800;
    setActiveItem(label);
    if (closeMobile) {
      setMobileMenuOpen(false);
    }
    // Ensure scroll lock is released before scrolling on mobile.
    document.body.style.overflow = "";

    const id = targetId.replace("#", "");
    const target = document.getElementById(id);
    if (target) {
      const header = document.querySelector("header");
      const headerOffset = header ? header.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      setTimeout(() => {
        window.scrollTo({ top, behavior: "smooth" });
        // Keep hash in sync for mobile browsers that ignore programmatic scroll.
        if (window.location.hash !== targetId) {
          history.replaceState(null, document.title, targetId);
        }
      }, closeMobile ? 50 : 0);
    }
  }

  const currentFocus = hoveredItem || activeItem;

  useEffect(() => {
    const targets = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    if (targets.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleRef.current.set(entry.target.id, {
            ratio: entry.intersectionRatio,
            top: entry.boundingClientRect.top,
          });
        });

        if (Date.now() < manualActiveUntilRef.current) {
          return;
        }

        const visible = Array.from(visibleRef.current.entries()).filter(
          ([, data]) => data.ratio > 0
        );

        if (visible.length === 0) {
          return;
        }

        const inView = visible
          .filter(([, data]) => data.top >= 0)
          .sort((a, b) => a[1].top - b[1].top);

        const pick = inView[0] || visible.sort((a, b) => b[1].top - a[1].top)[0];

        const match = navItems.find((item) => item.href === `#${pick[0]}`);
        if (match && match.label !== activeItem) {
          setActiveItem(match.label);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75] }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [navItems, activeItem]);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* ===== TOP BAR ===== */}
      <div className="flex items-center justify-between px-6 py-6 md:px-12 lg:px-20 backdrop-blur-lg border-b border-white/5 bg-black/40 relative z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-background-dark shadow-[0_0_15px_rgba(60,249,26,0.4)]">
            <span className="text-[20px] font-bold">&lt;/&gt;</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-lg font-bold tracking-tight text-white">
              NGANGAH<span className="text-primary">.DEV</span>
            </span>
            <span className="text-[10px] text-white/40 tracking-[0.2em] uppercase">
              Portfolio
            </span>
          </div>
        </div>

        {/* ===== DESKTOP NAV (Liquid Glass Dynamic Island) ===== */}
        <nav
          ref={navRef}
          onMouseMove={handleNavMouseMove}
          onMouseLeave={handleNavMouseLeave}
          className="hidden md:flex items-center gap-2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          {navItems.map((item) => {
            const isFocused = currentFocus === item.label;

            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(event) => handleNavClick(event, item.href, item.label)}
                onMouseEnter={() => setHoveredItem(item.label)}
                className="relative px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
              >
                {/* Moving “Liquid Glass” pill */}
                {isFocused && (
                  <motion.span
                    layoutId="nav-liquid-pill"
                    className="absolute inset-0 rounded-full liquid-pill"
                    style={{
                      // Cursor-follow specular highlight (CSS reads these vars)
                      ["--shine-x"]: `${shine.x}%`,
                      ["--shine-y"]: `${shine.y}%`,
                      ["--shine-a"]: shine.a,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 700,
                      damping: 45,
                      mass: 0.6,
                    }}
                  >
                    {/* filter + overlay + specular layers */}
                    <span className="liquid-filter" aria-hidden="true" />
                    <span className="liquid-overlay" aria-hidden="true" />
                    <span className="liquid-specular" aria-hidden="true" />
                  </motion.span>
                )}

                {/* Text above pill */}
                <span className={`relative z-10 ${activeItem === item.label ? "text-primary" : ""}`}>
                  {item.label}
                </span>
              </a>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden md:flex text-sm font-bold text-primary border border-primary/30 px-5 py-2.5 rounded hover:bg-primary hover:text-background-dark transition-all duration-300 shadow-[0_0_10px_rgba(60,249,26,0.1)]"
            onClick={(event) => handleNavClick(event, "#contact", "Contact")}
          >
            Hire Me
          </a>

          <button
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-white p-2 hover:bg-white/5 rounded transition-all duration-300"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <MdClose className="w-6 h-6" />
            ) : (
              <MdMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* ===== BACKDROP (mobile) ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ===== MOBILE MENU (grow / retract smoothly) ===== */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute top-full left-0 w-full bg-background-dark/80 backdrop-blur-xl z-50 border-b border-white/10 overflow-hidden"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col items-center justify-center gap-6 py-10">
              {["Home", "About", "Services", "Skills", "Projects", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  variants={itemVariants}
                  onClick={(event) =>
                    handleNavClick(event, `#${item.toLowerCase()}`, item, true)
                  }
                  className="text-lg font-semibold text-white/80 hover:text-primary transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}

              <motion.a
                href="#contact"
                variants={itemVariants}
                onClick={(event) => handleNavClick(event, "#contact", "Contact", true)}
                className="mt-4 inline-flex text-sm font-bold text-background-dark bg-primary px-8 py-3 rounded-lg hover:scale-105 transition-all shadow-[0_0_20px_rgba(60,249,26,0.3)]"
              >
                Hire Me
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SVG filter definition (must exist once on page) */}
      <svg width="0" height="0" className="absolute">
        <filter id="lg-dist" x="0%" y="0%" width="100%" height="100%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.008"
            numOctaves="2"
            seed="92"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="2" result="blurred" />
          <feDisplacementMap in="SourceGraphic" in2="blurred" scale="55" xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </svg>
    </header>
  );
}
