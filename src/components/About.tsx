import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { SectionLabel } from "../shared/SectionLabel"
import { SectionHeader } from "../shared/SectionHeader"

const totalExperience = (() => {
    const start = new Date(2022, 10, 1); // November 2022 (month is 0-indexed)
    const now = new Date();
    const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
    const diffInYears = diffInMonths / 12;
    return diffInYears.toFixed(1); // e.g., "3.4"
})();

/* ── animation helpers ──────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { y: 32, opacity: 0 },
    show: (d = 0) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
}

/* ── data ───────────────────────────────────────────────── */
const highlights = [
    {
        value: `${totalExperience}+`,
        label: "Years Experience",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        value: "9+",
        label: "Projects Shipped",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
        ),
    },
    {
        value: "3",
        label: "Domains: Healthcare, Logistics, Fintech",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
        ),
    },
    {
        value: "60%",
        label: "Perf. improvement at HealthOCare",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
        ),
    },
]

const traits = [
    {
        title: "Frontend specialist",
        body: "Angular & React are my home turf — pixel-perfect UIs, responsive layouts, and smooth micro-interactions.",
        color: "orange",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        title: "Full-stack capable",
        body: "Node.js, Express.js and MongoDB on the backend — I can own a feature end-to-end without handoffs slowing things down.",
        color: "blue",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
            </svg>
        ),
    },
    {
        title: "Agile collaborator",
        body: "Comfortable as a sole engineer or inside cross-functional squads. I write clean PRs, communicate blockers early, and ship on time.",
        color: "teal",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        ),
    },
]

const colorMap: Record<string, { card: string; icon: string; border: string }> = {
    orange: {
        card: "bg-orange-500/5 hover:bg-orange-500/10",
        icon: "bg-orange-500/15 text-orange-400",
        border: "border-orange-500/20",
    },
    blue: {
        card: "bg-blue-500/5 hover:bg-blue-500/10",
        icon: "bg-blue-500/15 text-blue-400",
        border: "border-blue-500/20",
    },
    teal: {
        card: "bg-teal-500/5 hover:bg-teal-500/10",
        icon: "bg-teal-500/15 text-teal-400",
        border: "border-teal-500/20",
    },
}

/* ── component ──────────────────────────────────────────── */
export default function About() {
    return (
        <section
            id="about"
            className="relative py-24 sm:py-32 overflow-hidden"
        >
            {/* subtle background accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ── section label ── */}
                <SectionLabel text="About Me"></SectionLabel>

                {/* ── headline ── */}
                <SectionHeader header1="The engineer behind" header2="the interface."></SectionHeader>

                {/* ── two-column layout ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* LEFT — bio + stats */}
                    <div>
                        <motion.p
                            variants={fadeUp}
                            custom={0.2}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-gray-800 dark:text-gray-400 text-base sm:text-lg leading-relaxed mb-4"
                        >
                            I'm a <span className="text-gray-800 dark:text-white font-medium">Software Engineer</span> with
                            over 3 years of experience turning complex requirements into
                            clean, fast, and maintainable web applications.
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            custom={0.3}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="text-gray-500 text-sm sm:text-base leading-relaxed mb-10"
                        >
                            I've worked across <span className="text-gray-800 dark:text-gray-300">healthcare</span>,{" "}
                            <span className="text-gray-800 dark:text-gray-300">logistics</span>, and{" "}
                            <span className="text-gray-800 dark:text-gray-300">fintech</span> — building everything from
                            hospital management systems and multimodal freight platforms to
                            subscription-tracking fintech apps. My stack of choice is
                            Angular / React on the frontend and Node.js on the backend, but I
                            care far more about solving the right problem than defending any
                            particular tool.
                        </motion.p>

                        {/* stat grid */}
                        <motion.div
                            variants={stagger}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 gap-3"
                        >
                            {highlights.map((h) => (
                                <motion.div
                                    key={h.label}
                                    variants={fadeUp}
                                    className="group flex items-start gap-3 p-4 rounded-2xl border border-white/5 bg-white/[0.03] hover:bg-white/[0.06] transition-colors duration-200"
                                >
                                    <span className="mt-0.5 shrink-0 text-orange-400">{h.icon}</span>
                                    <div>
                                        <p className="text-xl font-black text-gray-800 dark:text-white leading-none mb-0.5">
                                            {h.value}
                                        </p>
                                        <p className="text-xs text-gray-500 leading-snug">{h.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* currently working at */}
                        <motion.div
                            variants={fadeUp}
                            custom={0.5}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="mt-6 flex items-center gap-3 px-4 py-3 rounded-xl border border-white/5 bg-white/[0.03]"
                        >
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                            </span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Currently{" "}
                                <span className="text-gray-800 dark:text-white font-medium">Software Engineer @ Entoss Technologies</span>
                                <span className="text-gray-600 ml-2 text-xs">Mar 2025 – Present · Remote</span>
                            </p>
                        </motion.div>
                    </div>

                    {/* RIGHT — trait cards */}
                    <motion.div
                        variants={stagger}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="flex flex-col gap-4"
                    >
                        {traits.map((t) => {
                            const c = colorMap[t.color]
                            return (
                                <motion.div
                                    key={t.title}
                                    variants={fadeUp}
                                    whileHover={{ x: 4 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    className={`group flex gap-4 p-5 rounded-2xl border ${c.card} ${c.border} transition-colors duration-200`}
                                >
                                    <span className={`shrink-0 mt-0.5 p-2.5 rounded-xl ${c.icon}`}>
                                        {t.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-gray-800 dark:text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                                            {t.title}
                                        </h3>
                                        <p className="text-gray-500 text-sm leading-relaxed">{t.body}</p>
                                    </div>
                                </motion.div>
                            )
                        })}

                        {/* education callout */}
                        <motion.div
                            variants={fadeUp}
                            className="flex gap-4 p-5 rounded-2xl border border-black/5 dark:border-white/5 bg-white/[0.02]"
                        >
                            <span className="shrink-0 mt-0.5 p-2.5 rounded-xl bg-black/5 dark:bg-white/5 text-gray-400">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                </svg>
                            </span>
                            <div>
                                <h3 className="text-gray-800 dark:text-white font-semibold text-sm mb-1" style={{ fontFamily: "'Syne', sans-serif" }}>
                                    Education
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    B.E. in Electrical & Electronics Engineering —{" "}
                                    <span className="text-gray-800 dark:text-gray-400">Sir CR Reddy College of Engineering, Eluru</span>, 2023.
                                    Self-taught full-stack engineer who transitioned from EEE to
                                    professional software development.
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* ── bottom CTA strip ── */}
                <motion.div
                    variants={fadeUp}
                    custom={0.4}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 rounded-2xl border border-black/5 dark:border-white/5 bg-gray-50 dark:bg-white/[0.02]"
                >
                    <p className="text-gray-800 dark:text-gray-400 text-sm text-center sm:text-left">
                        Want to know more? My full resume has the complete picture.
                    </p>
                    <div className="flex flex-wrap gap-3 shrink-0">
                        <motion.a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=shaikshafieluru@gmail.com&su=Connect%20with%20Shafi%20%F0%9F%A4%9D&body=Hi%20Shafi%20%F0%9F%91%8B,%0A%0AI%20came%20across%20your%20portfolio%20and%20wanted%20to%20reach%20out%20to%20discuss%20potential%20opportunities%20or%20ask%20about%20your%20experience%20.%0A%0AThank%20you!%20%F0%9F%8C%8A"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:bg-white/10 text-gray-800 dark:text-gray-300 text-sm font-medium transition-colors duration-200"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Say hello
                        </motion.a>
                        <motion.a
                            href="/shaikshafieluru_gmail_com.pdf"
                            download
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.96 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-white text-sm font-semibold shadow-lg shadow-orange-500/20 transition-colors duration-200"
                        >
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Download Resume
                        </motion.a>
                    </div>
                </motion.div>

            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
        </section>
    )
}