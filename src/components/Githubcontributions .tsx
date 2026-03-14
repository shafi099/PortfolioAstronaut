import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { GitHubCalendar } from "react-github-calendar"
import { SectionLabel } from "../shared/SectionLabel"
import { SectionHeader } from "../shared/SectionHeader"
import useTheme from "../hooks/useTheme"

const fadeUp: Variants = {
    hidden: { y: 24, opacity: 0 },
    show: (d = 0) => ({
        y: 0, opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
            delay: d,
        },
    }),
}

export default function GithubContributions() {

    const { theme } = useTheme();

    return (
        <section className="relative py-20 sm:py-28 overflow-hidden transition-colors duration-300">

            {/* background accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px]
                bg-gradient-to-r from-transparent via-gray-200 to-transparent
                dark:via-white/10" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px]
                    bg-green-100/50 dark:bg-green-500/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ── label ── */}
                <SectionLabel text="Github Activity" />

                {/* ── heading ── */}
                <SectionHeader header1="Coding, every" header2="single day." />

                <motion.p
                    variants={fadeUp} custom={0.15}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="text-sm sm:text-base leading-relaxed mb-10 max-w-md
                        text-gray-500 dark:text-gray-500"
                >
                    A live view of my commit history on GitHub — consistency is the habit.
                </motion.p>

                {/* ── calendar card ── */}
                <motion.div
                    variants={fadeUp} custom={0.2}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="rounded-2xl transition-colors duration-300"
                >
                    {/* calendar — theme adapts via CSS overrides below */}
                    <div className="w-full overflow-x-hidden px-2">

                        <GitHubCalendar
                            username="shafi099"
                            blockSize={12}
                            blockMargin={3}
                            blockRadius={1}
                            fontSize={11}
                            showTotalCount={true}
                            // showWeekdayLabels={true}
                            colorScheme={theme === "dark" ? "dark" : "light"}
                            theme={{
                                light: ["#f0fdf4", "#bbf7d0", "#4ade80", "#16a34a", "#14532d"],
                                dark: ["#0d1117", "#0e4429", "#006d32", "#26a641", "#39d353"],
                            }}
                            style={{ width: "100%" }}
                        />

                    </div>

                    {/* ── stat strip ── */}
                    <div className="mt-6 pt-5 border-t flex flex-wrap items-center justify-between gap-4
                        border-gray-100 dark:border-white/5">

                        <a
                            href="https://github.com/shafi099"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-medium transition-colors
                                text-gray-500 hover:text-gray-900
                                dark:text-gray-500 dark:hover:text-white"
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                            </svg>
                            github.com/shafi099
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5 opacity-50">
                                <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                                <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                            </svg>
                        </a>

                        {/* legend */}
                        {/* <div className="flex items-center gap-2 text-xs
                            text-gray-400 dark:text-gray-600">
                            <span>Less</span>
                            {["bg-green-100 dark:bg-[#0e4429]", "bg-green-300 dark:bg-[#006d32]", "bg-green-400 dark:bg-[#26a641]", "bg-green-600 dark:bg-[#39d353]"].map((cls, i) => (
                                <span key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
                            ))}
                            <span>More</span>
                        </div> */}
                    </div>
                </motion.div>

            </div>
        </section>
    )
}