import { useRef, useEffect, useState } from "react";
import TitleSection from "../common/TitleSection";
import Btn from "../ui/Btn";

function AboutUs() {
    const aboutMeRef = useRef(null);
    const [showAboutMe, setShowAboutMe] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowAboutMe(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (aboutMeRef.current) {
            observer.observe(aboutMeRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-8 mx-4 py-20" id="about-me">
            <TitleSection
                spanText={"Sobre Nosotros"}
                h2Text={"¿Quiénes somos?"}
            />

            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center" ref={aboutMeRef}>
                {/* Tarjeta de contenido principal */}
                <div className={`flex-1 transition-all duration-700 ${showAboutMe ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                    <div className="relative p-8 lg:p-10 bg-gradient-to-br from-white via-purple-50 to-cyan-50 rounded-3xl shadow-2xl hover-lift border border-purple-100">
                        {/* Decoración de fondo */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/20 to-purple-400/20 rounded-full blur-2xl"></div>
                        
                        <div className="relative z-10 flex flex-col gap-5">
                            <div className="inline-flex items-center gap-2 w-fit">
                                <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-cyan-500 rounded-full"></div>
                                <h3 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 via-violet-600 to-cyan-600 bg-clip-text text-transparent">
                                    Nuvia.JS
                                </h3>
                            </div>
                            
                            <p className="text-gray-700 text-lg leading-relaxed">
                                Transforma tu visión en una <span className="font-bold text-purple-600">experiencia web extraordinaria</span>. 
                                Somos especialistas en crear sitios que no solo se ven bien, sino que generan resultados.
                            </p>
                            
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold text-gray-900">Desarrollo completo:</span> Desde diseño visual hasta funcionalidad compleja
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold text-gray-900">Personalización única:</span> Cada proyecto diseñado específicamente para ti
                                    </p>
                                </div>
                                
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                    </div>
                                    <p className="text-gray-700">
                                        <span className="font-semibold text-gray-900">Optimización SEO:</span> Tu sitio destacará en buscadores
                                    </p>
                                </div>
                            </div>

                            <div className="mt-4 p-5 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-2xl text-white">
                                <p className="font-bold text-lg mb-2">✨ Todo con precios competitivos</p>
                                <p className="text-sm text-white/90">
                                    Hosting profesional incluido. Tu negocio listo desde el primer día.
                                </p>
                            </div>

                            <a href="#contact" className="group mt-2 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white rounded-full font-semibold hover:shadow-md hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 w-fit">
                                <span>Trabajemos Juntos</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Imagen con efectos */}
                <div className={`lg:w-5/12 transition-all duration-700 ${showAboutMe ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                    <div className="relative group">
                        {/* Efecto de brillo de fondo */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-violet-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                        
                        {/* Contenedor de imagen */}
                        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                            <picture>
                                <source srcSet="/img/shot2.webp" type="image/webp" />
                                <img 
                                    src="/img/shot2.webp" 
                                    alt="Nuvia.JS Team" 
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 cursor-pointer" 
                                />
                            </picture>
                            
                            {/* Overlay con gradiente */}
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Badge flotante */}
                        <div className="absolute -bottom-2 -right-2 bg-white rounded-2xl shadow-lg px-3 py-2 transform group-hover:scale-110 transition-transform">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm font-bold text-gray-800">Disponibles</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
