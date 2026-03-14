import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useState } from "react"
import { experiences } from "../data/experience"
import { SectionLabel } from "../shared/SectionLabel"
import { SectionHeader } from "../shared/SectionHeader"

/* ── animation helpers ──────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { y: 28, opacity: 0 },
    show: (d = 0) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
}

const domainColors: Record<string, { badge: string; dot: string; line: string; stack: string }> = {
    blue: {
        badge: `bg-blue-100 text-blue-700 border-blue-200
      dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20
    `,
        dot: `
      bg-blue-500
      dark:bg-blue-400 dark:shadow-blue-400/40
    `,
        line: `
      from-blue-300 to-transparent
      dark:from-blue-500/40
    `,
        stack: `
      bg-blue-100 text-blue-700 border-blue-200
      dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/15
    `,
    },

    teal: {
        badge: `
      bg-teal-100 text-teal-700 border-teal-200
      dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20
    `,
        dot: `
      bg-teal-500
      dark:bg-teal-400 dark:shadow-teal-400/40
    `,
        line: `
      from-teal-300 to-transparent
      dark:from-teal-500/40
    `,
        stack: `
      bg-teal-100 text-teal-700 border-teal-200
      dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/15
    `,
    },

    orange: {
        badge: `
      bg-orange-100 text-orange-700 border-orange-200
      dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20
    `,
        dot: `
      bg-orange-500
      dark:bg-orange-400 dark:shadow-orange-400/40
    `,
        line: `
      from-orange-300 to-transparent
      dark:from-orange-500/40
    `,
        stack: `
      bg-orange-100 text-orange-700 border-orange-200
      dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/15
    `,
    },
}

/* ── component ──────────────────────────────────────────── */
export default function Experience() {

    const [expanded, setExpanded] = useState<string | null>("entoss")

    const totalExperience = (() => {
        const start = new Date(2022, 10, 1); // November 2022 (month is 0-indexed)
        const now = new Date();
        const diffInMonths = (now.getFullYear() - start.getFullYear()) * 12 + (now.getMonth() - start.getMonth());
        const diffInYears = diffInMonths / 12;
        return diffInYears.toFixed(1); // e.g., "3.4"
    })();

    return (
        <section id="experience" className="relative py-24 sm:py-32 overflow-hidden">

            {/* background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-600/35 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ── header ── */}
                <SectionLabel text="Experience" />
                <SectionHeader header1="Where I've built" header2="real things."></SectionHeader>

                {/* ── timeline ── */}
                <div className="relative">

                    {/* vertical rule */}
                    <div className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-px bg-gradient-to-b from-black/50 dark:from-white/10 via-black/25 dark:via-white/5 to-transparent hidden sm:block" />

                    <motion.div
                        variants={stagger}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="space-y-5"
                    >
                        {experiences.map((exp, idx) => {
                            const c = domainColors[exp.domainColor]
                            const isOpen = expanded === exp.id

                            return (
                                <motion.div
                                    key={exp.id}
                                    variants={fadeUp}
                                    custom={idx * 0.1}
                                    layout
                                    className="relative sm:pl-14"
                                >
                                    {/* timeline dot */}
                                    <div className="hidden sm:flex absolute left-0 top-5 w-[46px] justify-center">
                                        <span className={`w-3 h-3 rounded-full shadow-lg ${c.dot} ${exp.status === "current" ? "ring-2 ring-offset-2 dark:ring-offset-gray-950" : ""}`}
                                        // style={exp.status === "current" ? ({ ringColor: "currentColor" } as any) : {}}
                                        >
                                            {exp.status === "current" && (
                                                <span className={`absolute inset-0 rounded-full animate-ping opacity-60 ${c.dot}`} />
                                            )}
                                        </span>
                                    </div>

                                    {/* card */}
                                    <div
                                        className={`group cursor-pointer rounded-2xl border transition-all duration-300
                                            ${isOpen ? "border-black/10 bg-black/[0.05] dark:border-white/10 dark:bg-white/[0.05]"
                                                : "border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] hover:bg-black/[0.04] dark:hover:bg-white/[0.04] hover:border-black/8 dark:hover:border-white/8"
                                            }`}
                                        onClick={() => setExpanded(isOpen ? null : exp.id)}
                                    >
                                        {/* card header */}
                                        <div className="flex items-start justify-between gap-4 p-5 sm:p-6">
                                            <div className="flex-1 min-w-0">

                                                {/* top row */}
                                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${c.badge}`}>
                                                        {exp.domain}
                                                    </span>
                                                    {exp.status === "current" && (
                                                        <span className="text-xs font-medium px-2.5 py-0.5 rounded-full border bg-green-600/10 dark:bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20 flex items-center gap-1.5">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 animate-pulse" />
                                                            Currently working here
                                                        </span>
                                                    )}
                                                </div>

                                                <h3
                                                    className="text-gray-800 dark:text-white font-bold text-lg sm:text-xl leading-snug mb-0.5"
                                                    style={{ fontFamily: "'Syne', sans-serif" }}
                                                >
                                                    {exp.role}
                                                </h3>

                                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500 dark:text-gray-400">
                                                    <span className="font-medium text-gray-500 dark:text-gray-300">{exp.company}</span>
                                                    <span className="text-gray-700">·</span>
                                                    <span>{exp.period}</span>
                                                    <span className="text-gray-700">·</span>
                                                    <span className="flex items-center gap-1">
                                                        <svg viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3 text-gray-600">
                                                            <path fillRule="evenodd" d="M8 1.5a5 5 0 100 10A5 5 0 008 1.5zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd" />
                                                            <path d="M8 4.5a.5.5 0 01.5.5v3H11a.5.5 0 010 1H8a.5.5 0 01-.5-.5V5a.5.5 0 01.5-.5z" />
                                                        </svg>
                                                        {exp.type}
                                                    </span>
                                                </div>
                                            </div>

                                            {/* chevron */}
                                            <motion.span
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="shrink-0 mt-1 text-gray-600 group-hover:text-gray-400 transition-colors"
                                            >
                                                <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </motion.span>
                                        </div>

                                        {/* expanded body */}
                                        <motion.div
                                            initial={false}
                                            animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-5 sm:px-6 pb-6 space-y-5">

                                                {/* divider */}
                                                <div className={`h-px w-full bg-gradient-to-r ${c.line}`} />

                                                {/* summary */}
                                                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                                                    {exp.summary}
                                                </p>

                                                {/* bullets */}
                                                <ul className="space-y-2.5">
                                                    {exp.bullets.map((b, i) => (
                                                        <li key={i} className="flex gap-3 text-sm text-gray-500 leading-relaxed">
                                                            <span className={`mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full ${c.dot}`} />
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* stack pills */}
                                                <div className="flex flex-wrap gap-2 pt-1">
                                                    {exp.stack.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className={`text-xs px-3 py-1 rounded-full border font-mono ${c.stack}`}
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>

                                            </div>
                                        </motion.div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>

                {/* ── total experience bar ── */}
                <motion.div
                    variants={fadeUp} custom={0.4}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
                >
                    {[
                        { label: "Total experience", value: `${totalExperience}+ years`, icon: "⏱" },
                        { label: "Companies", value: "3 companies", icon: "🏢" },
                        { label: "Domains shipped", value: "Healthcare · Logistics · Fintech", icon: "🚀" },
                    ].map((s) => (
                        <div
                            key={s.label}
                            className="flex items-center gap-3 px-5 py-4 rounded-xl border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]"
                        >
                            <span className="text-xl">{s.icon}</span>
                            <div>
                                <p className="text-gray-800 dark:text-white font-semibold text-sm">{s.value}</p>
                                <p className="text-gray-600 text-xs">{s.label}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
        </section>
    )
}