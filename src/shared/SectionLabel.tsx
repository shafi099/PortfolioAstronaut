import { motion } from "framer-motion"
import type { Variants } from "framer-motion"

const fadeUp: Variants = {
    hidden: { y: 32, opacity: 0 },
    show: (d = 0) => ({
        y: 0,
        opacity: 1,
        transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}

export const SectionLabel = ({ text }: { text: string }) => {
    return <motion.div
        variants={fadeUp}
        custom={0}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-4"
    >
        <span className="h-px w-8 bg-orange-500/60" />
        <span className="text-orange-500 dark:text-orange-400 text-xs font-mono tracking-widest uppercase">
            {text}
        </span>
    </motion.div>
}