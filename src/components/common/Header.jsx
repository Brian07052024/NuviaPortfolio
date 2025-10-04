import { useState, useEffect } from "react";
import Link from "../ui/Link";


function Header() {
    // Estado para mostrar/ocultar header según scroll
    const [showHeader, setShowHeader] = useState(false);
    // Estado para el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const bottomHero = document.querySelector("#hero").getBoundingClientRect().bottom;

            if (currentScrollY > bottomHero) {
                setShowHeader(true)
            } else {
                setShowHeader(false)
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <header
                id="header"
                className={`absolute w-full backdrop-blur-md bg-transparent flex justify-center py-1 items-center top-0 right-0 left-0 z-50 transition-transform duration-300 shadow-md ${showHeader ? 'animate-fade fixed' : 'animate-fade-down'}`}
            >
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4">
                    {/* Logo */}
                    <div className="flex gap-3 items-center">
                        <a href="/" aria-label="Ir a inicio">
                            <img id="avatar" src="/svg/nube.svg" alt="Logo de Nuvia.JS - Nube con diseño moderno" className="cursor-pointer size-10 object-contain" />
                        </a>
                        <div className={`block w-[1px] h-10 rounded-2xl bg-black/50`} role="separator" aria-hidden="true"></div>
                        <div className="flex flex-col">
                            <p className={`font-semibold`}>Nuvia.JS</p>
                            <p className={`text-sm `}><span className="">Desarrollo Web</span> Profesional</p>
                        </div>
                    </div>

                    {/* Navegación desktop */}
                    <nav className="hidden md:block" role="navigation" aria-label="Navegación principal">
                        <ul role="list">
                            <li className="flex gap-3 text-center">
                                <Link enlace="#about-me" text="Nosotros" />
                                <Link enlace="#services" text="Servicios" />
                                <Link enlace="#projects" text="Proyectos de clientes" />
                                <Link enlace="#contact" text="Contacto" />
                            </li>
                        </ul>
                    </nav>

                    {/* Botón hamburguesa móvil */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-enfasis focus:ring-offset-2 rounded"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} aria-hidden="true"></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} aria-hidden="true"></span>
                        <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} aria-hidden="true"></span>
                    </button>
                </div>

                {/* Menú móvil */}
                <div 
                    id="mobile-menu"
                    className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                    aria-hidden={!isMobileMenuOpen}
                >
                    <nav className="py-4" role="navigation" aria-label="Navegación móvil">
                        <ul className="flex flex-col space-y-2" role="list">
                            <li role="listitem">
                                <a
                                    href="#about-me"
                                    className="block px-6 py-3 text-black hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Nosotros"
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#services"
                                    className="block px-6 py-3 text-black hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Servicios"
                                >
                                    Servicios
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#projects"
                                    className="block px-6 py-3 text-black hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Proyectos de clientes"
                                >
                                    Proyectos de clientes
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#contact"
                                    className="block px-6 py-3 text-black hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Contacto"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;