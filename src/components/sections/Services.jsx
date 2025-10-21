import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import TitleSection from "../common/TitleSection";
import ExperienceCard from "../cards/ExperienceCard";

function Services() {
    const [experienceRef, showCards] = useIntersectionObserver({
        threshold: 0.15,
        rootMargin: '0px'
    });

    return (
        <div className="flex flex-col gap-5 mx-4 mt-20" id="services" ref={experienceRef}>
            <TitleSection
                spanText={"Servicios"}
                h2Text={"Lo que ofrecemos"}
            />

            <div className={`md:transition md:duration-700 ${showCards ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-8 md:pointer-events-none'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-6 justify-items-center max-w-7xl mx-auto">

                    <ExperienceCard
                        plan="Intermedio"
                        title="Sitio web completo"
                        caracteristicas={["Todo del plan Básico", "Hasta 7 secciones personalizadas", "Integración con Google Maps", "Formulario de contacto avanzado", "Galería de imágenes/portafolio", "Blog o sección de noticias", "2 rondas de revisiones gratuitas", "Capacitación para gestión de contenido"]}
                        precio={"Desde $4,499"}
                        className="order-2 lg:order-1"
                    />
                    <ExperienceCard
                        plan="Básico"
                        title="Presencia Online"
                        caracteristicas={["Página informativa profesional", "Integración con redes sociales", "Dominio por 1 año", "Optimización SEO (te encontrarán fácil)", "Hosting para tu sitio", "Diseño responsivo", "Formulario de contacto/WhatsApp", "Certificado SSL/TLS", "1 ronda de revisiones gratuitas"]}
                        solicitado={true}
                        precio={"Desde $2,499"}
                        className="order-1 lg:order-2"
                    />
                    <ExperienceCard
                        plan="Avanzado"
                        title="E-commerce / WebApp"
                        caracteristicas={["Todo de los planes anteriores", "Tienda online completa o WebApp a medida", "Sistema de carrito de compras", "Pasarelas de pago (Stripe)", "Panel de administración personalizado", "Correos corporativos profesionales (@tunegocio.com)", "SEO avanzado + Google Analytics", "Soporte técnico prioritario", "3 rondas de revisiones gratuitas"]}
                        precio={"Contáctanos"}
                        className="order-3"
                    />
                </div>
            </div>
        </div>
    );
}

export default Services;
