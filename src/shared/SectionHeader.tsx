import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

/* ── animation helpers ──────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { y: 28, opacity: 0 },
    show: (d = 0) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}


export const SectionHeader = ({ header1, header2 }: { header1: string, header2: string }) => {
    return <motion.h2
        variants={fadeUp} custom={0.1}
        initial="hidden" whileInView="show" viewport={{ once: true }}
        className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 dark:text-white tracking-tight leading-tight mb-6"
        style={{ fontFamily: "'Syne', sans-serif" }}
    >
        {header1}
        <br />
        <span className="text-orange-500">{header2}</span>
    </motion.h2>
}