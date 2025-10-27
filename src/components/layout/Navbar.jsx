import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const closeMenu = () => setIsOpen(false)

    return (
        <nav className="z-50 p-4 sticky top-0 bg-[rgba(255, 255, 255, 0.3)] backdrop-blur-lg">
            <div className="flex items-center justify-between relative">
                <h1 className="z-[60] text-2xl">Alissa Gritti</h1>
                <button
                    className="relative z-[60] w-8 h-8 flex items-center justify-center text-3xl md:hidden"
                    onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "✕" : "☰"}
                </button>
                <ul className={`${isOpen ? "flex" : "hidden"} z-[55] fixed top-0 left-0 w-full h-screen bg-white flex-col items-center justify-center gap-8 transition-all duration-300 md:static md:flex md:flex-row md:h-auto md:gap-6 md:bg-transparent md:justify-end md:w-auto`}>
                    <li><a href="#work" className="text-2xl" onClick={closeMenu}>Work</a></li>
                    <li><a href="#about" className="text-2xl" onClick={closeMenu}>About</a></li>
                    <li><a href="#contact" className="text-2xl" onClick={closeMenu}>Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
