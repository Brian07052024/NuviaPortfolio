import { useState, useEffect } from "react";
import Link from "../ui/Link";


function Header() {
    // Estado para mostrar/ocultar header según scroll
    const [showHeader, setShowHeader] = useState(true);
    const [stickyHeader, setStickyHeader] = useState(false);
    // Estado para el menú móvil
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const heroElement = document.querySelector("#hero");

            if (heroElement) {
                const heroHeight = heroElement.offsetHeight;
                const heroBottom = heroElement.getBoundingClientRect().bottom;

                // Si estamos en el hero (arriba)
                if (currentScrollY < heroHeight * 0.2) {
                    setShowHeader(true);
                    setStickyHeader(false);
                }
                // Si estamos en medio del hero, ocultar
                else if (currentScrollY >= heroHeight * 0.2 && heroBottom > 0) {
                    setShowHeader(false);
                    setStickyHeader(false);
                }
                // Si pasamos el hero, mostrar sticky
                else if (heroBottom <= 0) {
                    setShowHeader(true);
                    setStickyHeader(true);
                }
            }
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(handleScroll);
                ticking = true;
            }
        };

        handleScroll(); // Ejecutar al montar
        window.addEventListener('scroll', requestTick, { passive: true });
        return () => window.removeEventListener('scroll', requestTick);
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
                className={`fixed top-0 left-0 w-full flex justify-center items-center z-50 transition-all duration-500 ${showHeader
                        ? 'translate-y-0 opacity-100'
                        : '-translate-y-full opacity-0'
                    } ${stickyHeader
                        ? 'backdrop-blur-sm bg-white/70'
                        : 'bg-transparent'
                    }`}
            >
                
                <div className="w-full max-w-7xl mx-auto flex justify-between items-center px-4 py-2">
                    {/* Logo */}
                    <div className="flex gap-3 items-center group ">
                        <a href="#hero" aria-label="Ir a inicio" className="flex items-center gap-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity"></div>
                                <img id="avatar" src="/img/logosf.webp" alt="Logo de Nuvia.JS" className="relative cursor-pointer size-11 object-contain group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex flex-col">
                                <p className={`font-bold text-lg bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent`}>
                                    Nuvia.JS
                                </p>
                                <p className={`text-xs transition-colors ${stickyHeader ? 'text-gray-600' : 'text-white/90'}`}>
                                    Desarrollo Web Profesional
                                </p>
                            </div>
                        </a>
                    </div>

                    {/* Navegación desktop */}
                    <nav className="hidden md:block" role="navigation" aria-label="Navegación principal">
                        <ul role="list" className="flex gap-1 items-center">
                            <li><Link enlace="#about-me" text="Nosotros" estado={stickyHeader ? '' : 'text-white hover:text-white/80 hover:bg-white/10'} /></li>
                            <li><Link enlace="#services" text="Servicios" estado={stickyHeader ? '' : 'text-white hover:text-white/80 hover:bg-white/10'} /></li>
                            <li><Link enlace="#projects" text="Proyectos" estado={stickyHeader ? '' : 'text-white hover:text-white/80 hover:bg-white/10'} /></li>
                            <li>
                                <a href="#contact" className="px-5 py-2 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>

                    {/* Botón hamburguesa móvil */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center size-8 space-y-1.5 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
                        aria-expanded={isMobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${stickyHeader ? 'bg-gradient-to-r from-violet-600 to-cyan-600' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} aria-hidden="true"></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${stickyHeader ? 'bg-gradient-to-r from-violet-600 to-cyan-600' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`} aria-hidden="true"></span>
                        <span className={`block w-6 h-0.5 transition-all duration-300 ${stickyHeader ? 'bg-gradient-to-r from-violet-600 to-cyan-600' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} aria-hidden="true"></span>
                    </button>
                </div>

            </header>

            {/* Menú móvil - Fuera del header para evitar overflow issues */}
            <div
                id="mobile-menu"
                className={`${stickyHeader ? "bg-white/70" : "bg-white/5"} md:hidden fixed top-14 left-0 w-full backdrop-blur-sm shadow-lg transition-all duration-300 ease-in-out z-40 ${isMobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
                aria-hidden={!isMobileMenuOpen}
            >
                    <nav className="py-4" role="navigation" aria-label="Navegación móvil">
                        <ul className={`${stickyHeader ? "text-black" : "text-white"} flex flex-col space-y-2`} role="list">
                            <li role="listitem">
                                <a
                                    href="#about-me"
                                    className="block px-6 py-3 hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Nosotros"
                                >
                                    Nosotros
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#services"
                                    className="block px-6 py-3 hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Servicios"
                                >
                                    Servicios
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#projects"
                                    className="block px-6 py-3 hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Proyectos de clientes"
                                >
                                    Proyectos de clientes
                                </a>
                            </li>
                            <li role="listitem">
                                <a
                                    href="#contact"
                                    className="block px-6 py-3 hover:bg-gray-100 hover:text-enfasis transition-colors focus:outline-none focus:bg-gray-100 focus:text-enfasis"
                                    onClick={closeMobileMenu}
                                    aria-label="Ir a la sección Contacto"
                                >
                                    Contacto
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

        </>
    );
}

export default Header;