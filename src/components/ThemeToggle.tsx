import { motion, AnimatePresence } from "framer-motion"
import useTheme from "../hooks/useTheme"

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme()
    const isDark = theme === "dark"

    return (
        <motion.button
            onClick={toggleTheme}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className={`fixed top-5 right-5 z-50 flex items-center gap-2 px-3.5 py-2 rounded-xl
        border text-xs font-medium font-mono tracking-wide
        shadow-lg backdrop-blur-md transition-colors duration-300
        ${isDark
                    ? "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 shadow-black/30"
                    : "bg-gray-950/80 border-white/10 text-gray-200 hover:bg-gray-900 shadow-black/20"
                }`}
        >
            {/* animated icon swap */}
            <span className="relative w-4 h-4">
                <AnimatePresence mode="wait" initial={false}>
                    {isDark ? (
                        <motion.span
                            key="sun"
                            initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* sun icon */}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-amber-400">
                                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                            </svg>
                        </motion.span>
                    ) : (
                        <motion.span
                            key="moon"
                            initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                            animate={{ rotate: 0, opacity: 1, scale: 1 }}
                            exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-0 flex items-center justify-center"
                        >
                            {/* moon icon */}
                            <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-blue-300">
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                            </svg>
                        </motion.span>
                    )}
                </AnimatePresence>
            </span>

            {/* label */}
            <AnimatePresence mode="wait" initial={false}>
                <motion.span
                    key={isDark ? "light-label" : "dark-label"}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.15 }}
                >
                    {isDark ? "Light" : "Dark"}
                </motion.span>
            </AnimatePresence>
        </motion.button>
    )
}