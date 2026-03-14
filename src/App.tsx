import { useState, useEffect } from "react"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import ThemeToggle from "./components/ThemeToggle"
// import GithubContributions from "./components/Githubcontributions "

export default function App() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Runs after the component mounts
    setMounted(true);
  }, [])

  if (!mounted) {
    // Loader before mounted
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-white dark:bg-black">
        <div className="flex space-x-2">
          <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce"></span>
          <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-150"></span>
          <span className="w-3 h-3 bg-orange-500 rounded-full animate-bounce delay-300"></span>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* always-on-top toggle — rendered outside the page flow */}
      <ThemeToggle />

      <div className="bg-white dark:bg-black text-gray-800 dark:text-white font-sans google-sans-flex">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
        {/* <GithubContributions /> */}
      </div>
    </>
  )
}