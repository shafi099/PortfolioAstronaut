import { motion, useReducedMotion } from "framer-motion"
import type { Variants } from "framer-motion"
import astronaut from "../assets/astronaut.png"

/* ── animation variants ─────────────────────────────────── */
const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
}

const letter: Variants = {
    hidden: { y: 50, opacity: 0, skewX: 8 },
    show: {
        y: 0,
        opacity: 1,
        skewX: 0,
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
}

const fadeUp: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: (delay = 0) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: "easeOut", delay },
    }),
}

/* ── nav items ──────────────────────────────────────────── */
const navItems = [
    {
        text: "About",
        ref: "#about",
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        text: "Experience",
        ref: "#experience",
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                />
            </svg>
        ),
    },
    {
        text: "Work",
        ref: "#projects",
        icon: (
            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                />
                <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
            </svg>
        ),
    },
    {
        text: "Contact",
        ref: "#contact",
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm10 7L2 6v12h20V6l-10 5z" />
            </svg>
        ),
    },
    // {
    //     text: "Skills",
    //     ref: "#skills",
    //     icon: (
    //         <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
    //             <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    //         </svg>
    //     ),
    // },
]

/* ── floating particles ─────────────────────────────────── */
const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 5,
}))

/* ── component ──────────────────────────────────────────── */
export default function Hero() {

    const shouldReduce = useReducedMotion()
    const name = "Shafi Shaik"
    const totalExperience = (() => {
        const start = new Date(2022, 10, 1); // November 2022 (month is 0-indexed)
        const now = new Date();
        const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const diffInYears = diffInMonths / 12;
        return diffInYears.toFixed(1); // e.g., "3.4"
    })();

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden">

            {/* ── layered background ── */}
            <div className="absolute inset-0 pointer-events-none">
                {/* deep base */}
                <div className="absolute inset-0 bg-gradient-to-bl from-orange-600 via-gray-50 to-white dark:from-orange-900 dark:via-gray-950 dark:to-black" />

                {/* warm accent blob — top-right */}
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-orange-500/10 blur-[120px]" />

                {/* subtle blue blob — bottom-left */}
                <div className="absolute -bottom-40 -left-20 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[100px]" />

                {/* grid texture */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                        backgroundSize: "60px 60px",
                    }}
                />
                {/* floating particles */}
                {!shouldReduce &&
                    particles.map((p) => (
                        <motion.span
                            key={p.id}
                            className="absolute rounded-full bg-orange-400"
                            style={{
                                width: p.size,
                                height: p.size,
                                left: `${p.x}%`,
                                top: `${p.y}%`,
                            }}
                            animate={{ y: [0, -40, 0], opacity: [0.2, 0.7, 0.2] }}
                            transition={{
                                duration: p.duration,
                                repeat: Infinity,
                                delay: p.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
            </div>

            {/* ── content grid ── */}
            <div className="relative z-10 max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-20 sm:py-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-16">

                {/* ── TEXT SIDE ── */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1">

                    {/* pill badge */}
                    <motion.div
                        variants={fadeUp}
                        custom={0}
                        initial="hidden"
                        animate="show"
                        className="mb-5 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-600 dark:text-green-400 text-xs sm:text-xs tracking-wide"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 dark:bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 dark:bg-green-400" />
                        </span>
                        Available for new opportunities
                    </motion.div>

                    {/* "Hi, I'm" */}
                    <motion.p
                        variants={fadeUp}
                        custom={0.05}
                        initial="hidden"
                        animate="show"
                        className="text-gray-600 dark:text-gray-400 text-xl sm:text-2xl md:text-3xl font-light tracking-tight mb-1"
                    >
                        Hi, I'm
                    </motion.p>

                    {/* animated name */}
                    <motion.h1
                        variants={container}
                        initial="hidden"
                        animate="show"
                        aria-label={name}
                        className="flex flex-wrap gap-1 md:gap-0 justify-center md:justify-start font-black leading-none tracking-tighter text-orange-500
              text-4xl sm:text-6xl md:text-6xl lg:text-8xl xl:text-8xl mb-4"
                        style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                        {name.split(" ").map((char, i) => (
                            <motion.span key={i} variants={letter} className="inline-block">
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* title tag */}
                    <motion.div
                        variants={fadeUp}
                        custom={0.6}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-2 mb-4"
                    >
                        <span className="h-px w-8 bg-orange-500/50" />
                        <span className="text-orange-400/80 text-sm sm:text-base font-mono tracking-widest uppercase">
                            Software Engineer
                        </span>
                    </motion.div>

                    {/* description */}
                    <motion.p
                        variants={fadeUp}
                        custom={0.75}
                        initial="hidden"
                        animate="show"
                        className="font-light text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-md leading-relaxed max-w-md mb-8"
                    >
                        {totalExperience}+ years crafting scalable web applications — from pixel-perfect UIs
                        to resilient backend systems. I turn complex problems into elegant,
                        user-centred products.
                    </motion.p>

                    {/* stats row */}
                    <motion.div
                        variants={fadeUp}
                        custom={0.85}
                        initial="hidden"
                        animate="show"
                        className="flex gap-6 sm:gap-10 mb-8 text-center md:text-left"
                    >
                        {[
                            { value: `${totalExperience}+`, label: "Years exp." },
                            // { value: "9+", label: "Projects" },
                            { value: "99%", label: "Client sat." },
                        ].map((s) => (
                            <div key={s.label}>
                                <p className="text-2xl sm:text-3xl font-black text-gray-600 dark:text-white leading-none">
                                    {s.value}
                                </p>
                                <p className="text-xs text-gray-500 mt-0.5 tracking-wide">{s.label}</p>
                            </div>
                        ))}
                    </motion.div>

                    {/* buttons */}
                    <motion.div
                        variants={fadeUp}
                        custom={0.95}
                        initial="hidden"
                        animate="show"
                        className="flex flex-wrap justify-center md:justify-start gap-3"
                    >
                        {navItems.map((item) => (
                            <motion.a
                                key={item.text}
                                href={item.ref}
                                whileHover={{ scale: 1.06, y: -2 }}
                                whileTap={{ scale: 0.96 }}
                                className="group inline-flex items-center gap-2 px-4 py-2.5 sm:px-4 sm:py-2 rounded-xl
                                        bg-white border border-gray-200 hover:border-orange-400
                                        text-gray-700 hover:text-orange-600
                                        dark:bg-white/5 dark:border-white/10 dark:hover:bg-orange-500 dark:hover:border-orange-500
                                        dark:text-gray-300 dark:hover:text-white
                                        text-xs transition-all duration-200 ease-out"
                            >
                                <span className="
                                            text-orange-500 group-hover:text-orange-600
                                            dark:text-orange-400 dark:group-hover:text-white
                                            transition-colors duration-200
                                        ">
                                    {item.icon}
                                </span>

                                {item.text}
                            </motion.a>
                        ))}

                        {/* resume CTA */}
                        <motion.a
                            href="/shaikshafieluru_gmail_com.pdf"
                            download
                            whileHover={{ scale: 1.06, y: -2 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-4 sm:py-2 rounded-xl
                bg-orange-500 hover:bg-orange-400 text-white text-xs
                shadow-lg shadow-orange-500/25 hover:shadow-orange-400/35
                transition-all duration-200 ease-out"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Resume
                        </motion.a>
                    </motion.div>

                    {/* social links */}
                    <motion.div
                        variants={fadeUp}
                        custom={1.05}
                        initial="hidden"
                        animate="show"
                        className="flex items-center gap-4 mt-8"
                    >
                        {[
                            {
                                label: "LinkedIn",
                                href: "https://www.linkedin.com/in/shaik-shafi-eluru/",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.97 0 1.77-.77 1.77-1.73V1.73C24 .77 23.2 0 22.23 0z" />
                                    </svg>
                                ),
                            },

                            {
                                label: "GitHub",
                                href: "https://github.com/shafi099",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M12 .5A11.5 11.5 0 000 12.28c0 5.42 3.44 10.01 8.21 11.64.6.11.82-.26.82-.58v-2.05c-3.34.75-4.04-1.64-4.04-1.64-.55-1.42-1.34-1.8-1.34-1.8-1.1-.77.08-.75.08-.75 1.21.09 1.85 1.27 1.85 1.27 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.67-.31-5.48-1.37-5.48-6.11 0-1.35.47-2.46 1.24-3.33-.12-.31-.54-1.57.12-3.28 0 0 1.02-.34 3.35 1.27a11.4 11.4 0 016.1 0c2.33-1.61 3.34-1.27 3.34-1.27.66 1.71.24 2.97.12 3.28.77.87 1.24 1.98 1.24 3.33 0 4.75-2.81 5.8-5.49 6.11.43.38.81 1.12.81 2.27v3.37c0 .32.22.7.82.58A11.51 11.51 0 0024 12.28 11.5 11.5 0 0012 .5z" />
                                    </svg>
                                ),
                            },

                            {
                                label: "WhatsApp",
                                href: "https://api.whatsapp.com/send/?phone=919440267786&text=Hi+%2AShafi%2A%2C%0A%0AI+came+across+your+portfolio+and+wanted+to+reach+out+to+discuss+potential+opportunities+or+ask+about+your+experience+.%0A%0AThank+you%21+&type=phone_number&app_absent=0",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M20.52 3.48A11.8 11.8 0 0012.01 0C5.37 0 .02 5.35.02 12c0 2.11.55 4.18 1.6 6.01L0 24l6.2-1.63A11.94 11.94 0 0012.01 24c6.63 0 11.99-5.36 11.99-12 0-3.2-1.25-6.2-3.48-8.52zM12 21.82c-1.8 0-3.56-.48-5.11-1.39l-.37-.22-3.68.97.98-3.59-.24-.37A9.74 9.74 0 012.27 12C2.27 6.63 6.63 2.27 12 2.27c2.6 0 5.04 1.01 6.88 2.85A9.66 9.66 0 0121.73 12c0 5.37-4.36 9.82-9.73 9.82z" />
                                    </svg>
                                ),
                            },

                            {
                                label: "Mail",
                                href: "https://mail.google.com/mail/?view=cm&fs=1&to=shaikshafieluru@gmail.com&su=Connect%20with%20Shafi%20%F0%9F%A4%9D&body=Hi%20Shafi%20%F0%9F%91%8B,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20to%20discuss%20potential%20opportunities%20or%20ask%20about%20your%20experience%20.%0A%0AThank%20you!%20%F0%9F%8C%8A",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M2 4h20a2 2 0 012 2v12a2 2 0 01-2 2H2a2 2 0 01-2-2V6a2 2 0 012-2zm10 9L2 6v12h20V6l-10 7z" />
                                    </svg>
                                ),
                            },

                            {
                                label: "Phone",
                                href: "tel:+919440267786",
                                icon: (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                        <path d="M6.62 10.79a15.07 15.07 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V21a1 1 0 01-1 1C10.07 22 2 13.93 2 3a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
                                    </svg>
                                ),
                            },
                        ].map((s) => (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                whileHover={{ scale: 1.15, y: -2 }}
                                whileTap={{ scale: 0.9 }}
                                className="text-gray-500 hover:text-orange-400 transition-colors duration-200"
                            >
                                {s.icon}
                            </motion.a>
                        ))}
                        <span className="h-px w-8 bg-gray-700" />
                        <span className="text-gray-600 text-xs tracking-widest font-mono">SOCIALS</span>
                    </motion.div>
                </div>

                {/* ── ASTRONAUT SIDE ── */}
                <div className="flex justify-center md:justify-end relative order-1 md:order-2">

                    {/* orbit ring */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div
                            className="w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[430px] md:h-[430px] rounded-full border border-dashed border-orange-500/20 dark:border-orange-500/15"
                            style={{ animation: "spin 30s linear infinite" }}
                        />
                    </div>

                    {/* glow disc */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[200px] h-[40px] rounded-full bg-orange-500/15 blur-2xl" />

                    <motion.img
                        src={astronaut}
                        alt="Floating astronaut"
                        className="relative z-10 w-52 sm:w-72 md:w-[380px] lg:w-[460px] xl:w-[520px] drop-shadow-2xl"
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                        style={
                            shouldReduce
                                ? undefined
                                : { animation: "float 7s ease-in-out infinite" }
                        }
                    />
                </div>

            </div>

            {/* ── scroll indicator ── */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-gray-600"
            >
                <span className="text-xs tracking-widest font-mono">SCROLL</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </motion.div>
            </motion.div>

            {/* ── keyframes ── */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800;900&display=swap');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-22px) rotate(2deg); }
          66%       { transform: translateY(-10px) rotate(-2deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>
        </section>
    )
}