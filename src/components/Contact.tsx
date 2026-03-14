import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useState } from "react"
import { contactLinks } from "../data/contactsLinks"
import { SectionLabel } from "../shared/SectionLabel"
import { SectionHeader } from "../shared/SectionHeader"

/* ── animations ─────────────────────────────────────────── */
const fadeUp: Variants = {
    hidden: { y: 28, opacity: 0 },
    show: (d = 0) => ({
        y: 0, opacity: 1,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: d },
    }),
}

const stagger: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.09 } },
}


const colorMap: Record<string, { icon: string; hover: string; border: string }> = {
    orange: {
        icon: "text-orange-600 bg-orange-100 dark:text-orange-400 dark:bg-orange-500/10",
        hover: "hover:border-orange-500/30 hover:bg-orange-50 dark:hover:bg-orange-500/[0.05]",
        border: "border-gray-300 dark:border-white/5",
    },
    teal: {
        icon: "text-teal-600 bg-teal-100 dark:text-teal-400 dark:bg-teal-500/10",
        hover: "hover:border-teal-500/30 hover:bg-teal-50 dark:hover:bg-teal-500/[0.05]",
        border: "border-gray-300 dark:border-white/5",
    },
    blue: {
        icon: "text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-500/10",
        hover: "hover:border-blue-500/30 hover:bg-blue-50 dark:hover:bg-blue-500/[0.05]",
        border: "border-gray-300 dark:border-white/5",
    },
    purple: {
        icon: "text-purple-600 bg-purple-100 dark:text-purple-400 dark:bg-purple-500/10",
        hover: "hover:border-purple-500/30 hover:bg-purple-50 dark:hover:bg-purple-500/[0.05]",
        border: "border-gray-300 dark:border-white/5",
    },
    gray: {
        icon: "text-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-white/5",
        hover: "hover:border-gray-400 hover:bg-gray-200 dark:hover:border-white/20 dark:hover:bg-white/[0.05]",
        border: "border-gray-300 dark:border-white/5",
    },
}

/* ── form state type ────────────────────────────────────── */
type FormState = "idle" | "sending" | "success" | "error"

/* ── component ──────────────────────────────────────────── */
export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" })
    const [state, setState] = useState<FormState>("idle")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
        setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setState("sending")
        try {
            const res = await fetch("https://getform.io/f/71066576-9c3c-4fa1-8909-a2a00b969f9a", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(form),
            })
            setState(res.ok ? "success" : "error")
            if (res.ok) setForm({ name: "", email: "", message: "" })
        } catch {
            setState("error")
        }
    }

    return (
        <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">

            {/* background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-orange/35 to-transparent" />
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-orange-500/5 rounded-full blur-[140px]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

                {/* ── header ── */}
                <SectionLabel text="Contact" />
                <SectionHeader header1="Interested?" header2="Let's get in touch." />

                <motion.p
                    variants={fadeUp} custom={0.2}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="text-gray-500 text-base sm:text-lg max-w-xl mb-14 leading-relaxed"
                >
                    Open to new opportunities, or just a good tech conversation.
                    Pick any channel — I typically respond within 24 hours.
                </motion.p>

                {/* ── two-column body ── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

                    {/* ── LEFT: form ── */}
                    <motion.div
                        variants={fadeUp} custom={0.25}
                        initial="hidden" whileInView="show" viewport={{ once: true }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* name */}
                            <div>
                                <label className="block text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-600 resize-none
                    focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05]
                    transition-all duration-200 font-semibold"
                                />
                            </div>

                            {/* email */}
                            <div>
                                <label className="block text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    required
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-600 resize-none
                    focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05]
                    transition-all duration-200 font-semibold"
                                />
                            </div>

                            {/* message */}
                            <div>
                                <label className="block text-xs font-mono text-gray-600 tracking-widest uppercase mb-2">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Tell me what you have in mind..."
                                    className="w-full bg-white/[0.03] border border-white/8 rounded-xl px-4 py-3 text-sm text-gray-800 dark:text-gray-200 placeholder-gray-600 resize-none
                    focus:outline-none focus:border-orange-500/50 focus:bg-white/[0.05]
                    transition-all duration-200 font-semibold"
                                />
                            </div>

                            {/* submit */}
                            <motion.button
                                className={`w-full flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-sm
                                                transition-all duration-200
                                                ${state === "success"
                                        ? "bg-green-100 dark:bg-green-500/20 border border-green-300 dark:border-green-500/30 text-green-600 dark:text-green-400 cursor-default"
                                        : state === "error"
                                            ? "bg-red-100 dark:bg-red-500/20 border border-red-300 dark:border-red-500/30 text-red-600 dark:text-red-400"
                                            : "bg-orange-500 hover:bg-orange-400 text-white shadow-lg shadow-orange-500/20"
                                    }`}
                            >
                                {state === "sending" && (
                                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                    </svg>
                                )}
                                {state === "success" && (
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {state === "error" && (
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {state === "idle" && (
                                    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                                    </svg>
                                )}
                                {state === "idle" && "Send message"}
                                {state === "sending" && "Sending…"}
                                {state === "success" && "Message sent!"}
                                {state === "error" && "Failed — try again"}
                            </motion.button>

                            {state === "error" && (
                                <p className="text-xs text-red-400/70 text-center">
                                    Something went wrong. You can also email me directly.
                                </p>
                            )}
                        </form>
                    </motion.div>

                    {/* ── RIGHT: contact links ── */}
                    <div className="flex flex-col gap-3">

                        <motion.p
                            variants={fadeUp} custom={0.3}
                            initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="text-xs font-mono text-gray-600 tracking-widest uppercase mb-1"
                        >
                            Or reach me directly
                        </motion.p>

                        <motion.div
                            variants={stagger}
                            initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="flex flex-col gap-3"
                        >
                            {contactLinks.map((link) => {
                                const c = colorMap[link.color]
                                return (
                                    <motion.a
                                        className={`group flex items-center gap-4 p-4 rounded-2xl border ${c.border} 
                                        bg-gray-50 dark:bg-white/[0.02] ${c.hover} transition-all duration-200`}
                                    >
                                        <span className={`shrink-0 p-2.5 rounded-xl ${c.icon} transition-transform duration-200 group-hover:scale-110`}>
                                            {link.icon}
                                        </span>
                                        <div className="min-w-0">
                                            <p className="text-xs font-mono text-gray-700 dark:text-gray-600 tracking-widest uppercase mb-0.5">
                                                {link.label}
                                            </p>
                                            <p className="text-sm text-gray-900 dark:text-gray-300 truncate group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                                {link.display}
                                            </p>
                                        </div>
                                    </motion.a>
                                )
                            })}
                        </motion.div>

                        {/* availability card */}
                        <motion.div
                            variants={fadeUp} custom={0.7}
                            initial="hidden" whileInView="show" viewport={{ once: true }}
                            className="mt-2 flex items-center gap-3 px-4 py-3.5 rounded-xl border border-white/5 bg-white/[0.02]"
                        >
                            <span className="relative flex h-2.5 w-2.5 shrink-0">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-400" />
                            </span>
                            <p className="text-sm text-gray-400">
                                Currently <span className="text-gray-800 dark:text-white font-medium">open to full-time</span> opportunities
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* ── footer line ── */}
                <motion.div
                    variants={fadeUp} custom={0.5}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-20 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-700 font-mono"
                >
                    <span>© {new Date().getFullYear()} Shafi Shaik · Built with React & Tailwind CSS</span>
                    <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        All systems operational
                    </span>
                </motion.div>

            </div>

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800;900&display=swap');
      `}</style>
        </section>
    )
}