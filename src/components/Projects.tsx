import { motion, AnimatePresence } from "framer-motion"
import type { Variants } from "framer-motion"
import { useState } from "react"
import projects from "../data/projects"
import type { Project } from "../data/projects"
import { SectionLabel } from "../shared/SectionLabel"
import { SectionHeader } from "../shared/SectionHeader"

/* ── animation helpers ──────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { y: 28, opacity: 0 },
    show: (d = 0) => ({
        y: 0, opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}

const cardVariants: Variants = {
    hidden: { y: 20, opacity: 0, scale: 0.97 },
    show: { y: 0, opacity: 1, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
    exit: { y: -10, opacity: 0, scale: 0.97, transition: { duration: 0.2 } },
}

/* ── color tokens ───────────────────────────────────────── */
type Color = Project["domainColor"]

const colors: Record<Color, {
    badge: string; dot: string; pill: string
    cardBorder: string; cardHover: string; iconBg: string; iconText: string; glow: string
}> = {
    blue: {
        badge: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/20",
        dot: "bg-blue-500 dark:bg-blue-400",
        pill: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-300 dark:border-blue-500/15",
        cardBorder: "border-gray-200 dark:border-white/5 hover:border-blue-500/30",
        cardHover: "hover:bg-blue-50 dark:hover:bg-blue-500/[0.04]",
        iconBg: "bg-blue-200 dark:bg-blue-500/15",
        iconText: "text-blue-700 dark:text-blue-400",
        glow: "group-hover:shadow-blue-200/20 dark:group-hover:shadow-blue-500/10",
    },
    teal: {
        badge: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-400 dark:border-teal-500/20",
        dot: "bg-teal-500 dark:bg-teal-400",
        pill: "bg-teal-100 text-teal-700 border-teal-200 dark:bg-teal-500/10 dark:text-teal-300 dark:border-teal-500/15",
        cardBorder: "border-gray-200 dark:border-white/5 hover:border-teal-500/30",
        cardHover: "hover:bg-teal-50 dark:hover:bg-teal-500/[0.04]",
        iconBg: "bg-teal-200 dark:bg-teal-500/15",
        iconText: "text-teal-700 dark:text-teal-400",
        glow: "group-hover:shadow-teal-200/20 dark:group-hover:shadow-teal-500/10",
    },
    orange: {
        badge: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/20",
        dot: "bg-orange-500 dark:bg-orange-400",
        pill: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-300 dark:border-orange-500/15",
        cardBorder: "border-gray-200 dark:border-white/5 hover:border-orange-500/30",
        cardHover: "hover:bg-orange-50 dark:hover:bg-orange-500/[0.04]",
        iconBg: "bg-orange-200 dark:bg-orange-500/15",
        iconText: "text-orange-700 dark:text-orange-400",
        glow: "group-hover:shadow-orange-200/20 dark:group-hover:shadow-orange-500/10",
    },
    purple: {
        badge: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/20",
        dot: "bg-purple-500 dark:bg-purple-400",
        pill: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-300 dark:border-purple-500/15",
        cardBorder: "border-gray-200 dark:border-white/5 hover:border-purple-500/30",
        cardHover: "hover:bg-purple-50 dark:hover:bg-purple-500/[0.04]",
        iconBg: "bg-purple-200 dark:bg-purple-500/15",
        iconText: "text-purple-700 dark:text-purple-400",
        glow: "group-hover:shadow-purple-200/20 dark:group-hover:shadow-purple-500/10",
    },
    green: {
        badge: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/20",
        dot: "bg-green-500 dark:bg-green-400",
        pill: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-300 dark:border-green-500/15",
        cardBorder: "border-gray-200 dark:border-white/5 hover:border-green-500/30",
        cardHover: "hover:bg-green-50 dark:hover:bg-green-500/[0.04]",
        iconBg: "bg-green-200 dark:bg-green-500/15",
        iconText: "text-green-700 dark:text-green-400",
        glow: "group-hover:shadow-green-200/20 dark:group-hover:shadow-green-500/10",
    },
}

const domains = ["All", "Logistics", "Healthcare", "Fintech", "SaaS", "Productivity"] as const
type Filter = (typeof domains)[number]

/* ── domain icons ───────────────────────────────────────── */
const DomainIcon = ({ domain, className }: { domain: Project["domain"]; className?: string }) => {
    const paths: Record<Project["domain"], React.ReactNode> = {
        Logistics: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10l2.042.006M13 16H9m4 0h2m2 0h1.042M15 8h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 01.293.707V16h-1M15 8V6" />
            </svg>
        ),
        Healthcare: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
        ),
        Fintech: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
        SaaS: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
        ),
        Productivity: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className={className}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    }
    return <>{paths[domain]}</>
}

/* ── project card ───────────────────────────────────────── */
function ProjectCard({ p, featured }: { p: Project; featured?: boolean }) {
    const c = colors[p.domainColor]
    const [hovered, setHovered] = useState(false)

    return (
        <motion.div
            variants={cardVariants}
            layout
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={`
                    group relative flex flex-col rounded-2xl 
                    border ${c.cardBorder} bg-gray-50 dark:bg-white/[0.02]
                    ${c.cardHover} ${c.glow}
                    transition-all duration-300 overflow-hidden
                    hover:shadow-xl
                    ${featured ? "md:col-span-1" : ""}
                `}
        >
            {/* featured glow bar */}
            {featured && (
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-current to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${c.iconText}`} />
            )}

            <div className="p-5 sm:p-6 flex flex-col flex-1">

                {/* top row */}
                <div className="flex items-center justify-between gap-3 mb-4">
                    <span className={`p-2.5 rounded-xl ${c.iconBg} ${c.iconText} transition-transform duration-300 group-hover:scale-110`}>
                        <DomainIcon domain={p.domain} className="w-5 h-5" />
                    </span>
                    <div className="flex items-center gap-2">
                        {featured && (
                            <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded-full bg-white/5 text-gray-500 border border-white/5 tracking-wider uppercase">
                                Featured
                            </span>
                        )}
                        <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${c.badge}`}>
                            {p.domain}
                        </span>
                    </div>
                </div>

                {/* title */}
                <h3 className="text-gray-900 dark:text-white font-bold text-lg leading-snug mb-0.5" style={{ fontFamily: "'Syne', sans-serif" }}>
                    {p.title}
                </h3>
                <p className={`text-gray-600 dark:text-gray-300 text-xs font-mono mb-3`}>
                    {p.subtitle}
                </p>

                <p className="text-gray-700 dark:text-gray-500 text-sm leading-relaxed mb-4 flex-1">
                    {p.desc}
                </p>

                {/* bullets — revealed on hover */}
                <AnimatePresence>
                    {hovered && (
                        <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="overflow-hidden space-y-1.5 mb-4"
                        >
                            {p.bullets.map((b, i) => (
                                <li key={i} className="flex gap-2.5 text-xs text-gray-500 leading-relaxed">
                                    <span className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${c.dot}`} />
                                    {b}
                                </li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>

                {/* stack pills */}
                <div className="flex flex-wrap gap-1.5 mt-auto mb-2 pt-2 border-t border-white/5">
                    {p.stack.map((tech) => (
                        <span
                            key={tech}
                            className={`text-[11px] px-2.5 py-0.5 rounded-full border font-mono ${c.pill}`}
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* link buttons — only rendered when links are present */}
                {p.links && p.links.length > 0 && (
                    <div className="flex items-center gap-2 pt-1">
                        {p.links.map((link) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150
                    ${link.icon === "github"
                                        ? "border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 dark:border-white/10 dark:bg-white/5 dark:text-gray-400 dark:hover:text-white dark:hover:bg-white/10"
                                        : `bg-gray-950 dark:bg-white text-gray-100 dark:text-gray-800 shadow-xl hover:opacity-80`
                                    }`}
                            >
                                {link.icon === "github" ? (
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                                    </svg>
                                ) : (
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5">
                                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                                    </svg>
                                )}
                                {link.label}
                            </motion.a>
                        ))}
                    </div>)}
            </div>
        </motion.div>
    )
}

/* ── main component ─────────────────────────────────────── */
export default function Projects() {
    const [filter, setFilter] = useState<Filter>("All")

    const filtered = filter === "All"
        ? projects
        : projects.filter((p) => p.domain === filter)

    const featured = projects.filter((p) => p.featured)
    const rest = projects.filter((p) => !p.featured)

    return (
        <section id="projects" className="relative py-24 sm:py-32 overflow-hidden">

            {/* background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange-600/35 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[140px]" />
                <div className="absolute bottom-0 left-0 w-72 h-72 bg-teal-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ── header ── */}
                <SectionLabel text="Projects"></SectionLabel>


                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
                    <SectionHeader header1="Things I've" header2="shipped."></SectionHeader>

                    {/* filter tabs */}
                    <motion.div
                        variants={fadeUp} custom={0.2}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {domains.map((d) => (
                            <button
                                key={d}
                                onClick={() => setFilter(d)}
                                className={`text-xs px-3 py-1.5 rounded-full border font-medium transition-all duration-200
    ${filter === d
                                        ? "bg-orange-500 text-white border-orange-500 shadow-lg shadow-orange-500/20"
                                        : "border-gray-300 dark:border-white/10 text-gray-700 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-300 bg-gray-100 dark:bg-white/[0.02]"
                                    }`}
                            >
                                {d}
                                {d !== "All" && (
                                    <span className="ml-1 text-[10px] opacity-60">
                                        {projects.filter((p) => p.domain === d).length}
                                    </span>
                                )}
                            </button>
                        ))}
                    </motion.div>
                </div>

                {/* ── grid ── */}
                <AnimatePresence mode="wait">
                    {filter === "All" ? (
                        <motion.div key="all" initial="hidden" animate="show" exit="exit" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } }, exit: {} }}>
                            {/* featured row */}
                            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-4">
                                Featured
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                                {featured.map((p) => (
                                    <ProjectCard key={p.id} p={p} featured />
                                ))}
                            </div>

                            {/* rest */}
                            <p className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-4 mt-10">
                                More projects
                            </p>
                            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                                {rest.map((p) => (
                                    <ProjectCard key={p.id} p={p} />
                                ))}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key={filter}
                            initial="hidden"
                            animate="show"
                            exit="exit"
                            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } }, exit: {} }}
                            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
                        >
                            {filtered.length > 0
                                ? filtered.map((p) => <ProjectCard key={p.id} p={p} />)
                                : (
                                    <motion.p variants={fadeUp} className="col-span-3 text-center text-gray-600 py-20 text-sm">
                                        No projects in this category yet.
                                    </motion.p>
                                )
                            }
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* ── bottom count ── */}
                <motion.p
                    variants={fadeUp} custom={0.5}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="text-center text-gray-700 text-xs font-mono mt-14 tracking-widest"
                >
                    {projects.length} PROJECTS · {[...new Set(projects.map(p => p.stack).flat())].length}+ TECHNOLOGIES
                </motion.p>

            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
        </section>
    )
}