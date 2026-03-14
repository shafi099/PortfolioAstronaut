import { Link } from "react-scroll"

export default function Navbar() {

    return (

        <nav className="fixed w-full z-50 backdrop-blur-md">

            <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

                <h1 className="font-bold text-xl">Shafi</h1>

                <div className="flex gap-6 text-gray-300">

                    <Link to="about" smooth={true}>About</Link>
                    <Link to="projects" smooth={true}>Projects</Link>
                    <Link to="contact" smooth={true}>Contact</Link>

                </div>

            </div>

        </nav>

    )
}