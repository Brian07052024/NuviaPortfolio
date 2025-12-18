function Footer() {
    return (
        <footer className="relative overflow-hidden bg-gradient-to-b from-gray-900 to-black">


            <div className="relative max-w-7xl mx-auto px-6 py-16 flex flex-col gap-12 items-center">
                

                {/* Logo y descripción */}
                <div className="text-center space-y-4">
                    <h3 className="text-4xl font-bold">
                        <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">Nuvia.JS</span>
                    </h3>
                    <p className="text-white/80 text-base max-w-md mx-auto">
                        Transformamos ideas en experiencias web extraordinarias. Tu socio tecnológico de confianza.
                    </p>
                    <div className="h-1 w-20 mx-auto bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"></div>
                </div>

                {/* Información de contacto */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
                    <div className="group flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </div>
                        <p className="text-white font-bold text-lg">Desarrollador</p>
                        <p className="text-white/80 text-sm">Brian Ramirez</p>
                    </div>

                    <div className="group flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <p className="text-white font-bold text-lg">Email</p>
                        <a href="mailto:nuviajssolutions@hotmail.com" className="text-white/80 text-sm hover:text-cyan-400 transition text-center break-all">
                            nuviajssolutions@hotmail.com
                        </a>
                    </div>

                    <div className="group flex flex-col items-center gap-3 p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <p className="text-white font-bold text-lg">WhatsApp</p>
                        <a href="https://wa.me/+528131038748" className="text-white/80 text-sm hover:text-cyan-400 transition">
                            (+52) 81 31 03 87 48
                        </a>
                    </div>
                </div>

                {/* Redes sociales */}
                <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61575666244036&locale=es_LA" className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-purple-500/50" aria-label="Facebook">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/nuviajs.web/" className="group w-12 h-12 bg-white/10 hover:bg-gradient-to-br hover:from-purple-500 hover:to-cyan-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md hover:shadow-cyan-500/50" aria-label="Instagram">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/10 pt-8 w-full text-center space-y-2">
                    <p className="text-white/70 text-sm">
                        © 2025 Nuvia.JS Solutions. Todos los derechos reservados.
                    </p>
                    
                </div>

            </div>
        </footer>
    );
}

export default Footer;