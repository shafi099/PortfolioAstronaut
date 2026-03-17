export type Project = {
    id: string
    title: string
    subtitle: string
    desc: string
    domain: "Logistics" | "Healthcare" | "Fintech" | "SaaS" | "Productivity"
    domainColor: "blue" | "teal" | "orange" | "purple" | "green"
    stack: string[]
    bullets: string[]
    featured?: boolean
    links?: { label: string; href: string; icon: "github" | "external" }[],
}

const projects: Project[] = [
    {
        id: "healtho",
        title: "HealthO",
        subtitle: "Hospital & Lab Management System",
        desc: "Full HMS/LMS platform for hospitals, clinics, and labs — managing patient records, appointments, reports, billing, and inventory.",
        domain: "Healthcare",
        domainColor: "teal",
        featured: true,
        stack: ["Angular", "TypeScript", "WebSocket", "Bootstrap", "SCSS"],
        bullets: [
            "Led frontend development solo, delivering responsive interfaces for healthcare workflows.",
            "Integrated APIs for patient data, billing, and reporting with secure role-based access.",
            "Optimised performance — 60% faster load times with efficient async data handling.",
        ],
    },
    {
        id: "saveiy",
        title: "Saveiy",
        subtitle: "Subscription Tracking Application",
        desc: "Fintech app using consent-based smart-sync to detect and categorise recurring payments from user-linked financial accounts — no manual entry required.",
        domain: "Fintech",
        domainColor: "orange",
        featured: true,
        stack: ["React", "React Native", "Express.js", "Node.js"],
        bullets: [
            "Integrated Account Aggregator (AA) framework APIs + SMS/email parsing to classify transactions in near real time.",
            "Aligned with Sahamati / FinVu data-sharing standards for regulatory compliance.",
            "Designed app UI and built mobile app in React Native with Express.js backend.",
        ],
    },
    {
        id: "onefreight",
        title: "OneFreight",
        subtitle: "Logistics Management Platform",
        desc: "Comprehensive freight forwarding platform enabling efficient management of bookings, shipment tracking, and payment workflows across road, sea, and rail.",
        domain: "Logistics",
        domainColor: "blue",
        featured: true,
        stack: ["Angular", "Express.js", "Node.js", "CouchDB"],
        bullets: [
            "Built end-to-end country-to-country shipping management including road, sea freight, and containerised deliveries.",
            "Engineered fully responsive Angular frontend with zero horizontal scrolling and optimised viewport management.",
            "Implemented scalable Express.js backend ensuring reliable performance and smooth data flow.",
        ],
    },
    {
        id: "nextevent",
        title: "Next Event",
        subtitle: "Banquet Hall Management System",
        desc: "Full-stack web and mobile application for banquet hall booking administration — complete ownership of frontend and backend.",
        domain: "SaaS",
        domainColor: "purple",
        stack: ["React", "React Native", "Express.js", "MongoDB", "Node.js"],
        bullets: [
            "Built Admin Dashboard in React and mobile app in React Native with TypeScript.",
            "Implemented dynamic search, full CRUD operations, and virtual pagination for performance.",
            "Designed RESTful APIs with Node.js / Express.js and MongoDB/Mongoose for data management.",
        ],
        links: [
            { label: "ios Live", href: "https://apps.apple.com/in/app/nextevent-venue-management/id6758663607", icon: "external" },
            { label: "Android Live", href: "https://play.google.com/store/apps/details?id=com.nextevent&hl=en_IN", icon: "external" },
        ],
    },
    {
        id: "lnqurl",
        title: "Lnq",
        subtitle: "URL shortner application",
        desc: "A fast URL shortener that converts long links into compact, shareable URLs with basic analytics. Built using a modern full-stack setup for smooth redirection and easy link management.",
        domain: "Productivity",
        domainColor: "green",
        stack: ["React", "Node.js", "MongoDB", "TypeScript", "TailwindCSS"],
        bullets: [
            "Built a fast and reliable URL shortening system with unique link generation and instant redirection.",
            "Implemented click tracking and analytics to monitor link performance and user engagement.",
            "Designed a responsive and user-friendly interface for creating, managing, and sharing short URLs.",
        ],
        links: [
            { label: "Live", href: "https://lnq.up.railway.app/", icon: "external" },
        ],
    },
    {
        id: "wordsprint",
        title: "Word Sprint",
        subtitle: "Typing Practice Application",
        desc: "Interactive web app to improve typing speed and accuracy through gamified practice — real-time WPM, accuracy scoring, and customisable sessions.",
        domain: "Productivity",
        domainColor: "green",
        stack: ["React", "JavaScript", "CSS"],
        bullets: [
            "Built real-time feedback system calculating WPM and accuracy with immediate visual updates.",
            "Implemented configurable time limits, word targets, and difficulty levels.",
            "Designed gamified UX to keep users engaged through progressive challenges.",
        ],
        links: [
            { label: "Live", href: "https://word-sprint.netlify.app/", icon: "external" },
        ],
    },
    {
        id: "mycargo",
        title: "MyCargo",
        subtitle: "International Shipping Booking Platform",
        desc: "Shipper platform for international cargo booking adhering to DCSA standards, ensuring compatibility with global carriers and regulatory environments.",
        domain: "Logistics",
        domainColor: "blue",
        stack: ["Angular", "Express.js", "Node.js", "CouchDB"],
        bullets: [
            "Implemented DCSA-compliant application for global carrier compatibility.",
            "Ensured worldwide usability across different carriers and regulatory environments.",
            "Created intuitive booking flows for country-to-country goods transportation.",
        ],
    },
]

export default projects