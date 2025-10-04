import { useRef, useEffect, useState } from "react";
import TitleSection from "../common/TitleSection";
import ExperienceCard from "../cards/ExperienceCard";

function Services() {
    const experienceRef = useRef(null);
    const [showCards, setShowCards] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowCards(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (experienceRef.current) {
            observer.observe(experienceRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div className="flex flex-col gap-5 mx-4 mt-20" id="services" ref={experienceRef}>
            <TitleSection
                spanText={"Servicios"}
                h2Text={"Lo que ofrecemos"}
            />

            <div className={`transition duration-700 ${showCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8 pointer-events-none'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center max-w-7xl mx-auto">

                    <ExperienceCard
                        plan="Intermedio"
                        title="Sitio web completo"
                        caracteristicas={["Hasta 6–8 secciones", "Hosting incluido (mejor rendimiento)", "Integración con redes sociales y Google Maps", "Optimización SEO Intermedio", "2 rondas de cambios", "Capacitación básica para actualizar contenido"]}
                        precio={"Desde $3,999 MXN"}
                    />
                    <ExperienceCard
                        plan="Básico"
                        title="Presencia Online"
                        caracteristicas={["Página informativa", "Integración con redes sociales", "Optimización SEO Inicial (búsquedas locales)", "Hosting incluido (plan básico)", "Diseño responsivo", "Formulario de contacto/WhatsApp", "Certificado SSL/TLS", "1 ronda de cambios"]}
                        solicitado={true}
                        precio={"Desde $1,999 MXN"}
                    />
                    <ExperienceCard
                        plan="Avanzado"
                        title="E-commerce / WebApp"
                        caracteristicas={["E-commerce o aplicación web personalizada", "Catálogo de productos/servicios (con carrito, pasarelas de pago (stripe)", "Panel de administración para el cliente", "Hosting mejorado++", "Integración con correos corporativos", "Optimización SEO avanzada", "Mejores opciones de mantenimiento", "3 rondas de cambios"]}
                        precio={"Contactanos"}
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;
