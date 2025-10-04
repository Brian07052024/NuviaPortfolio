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
        <div className="flex flex-col gap-5 mx-4" id="about-me">
            <TitleSection
                spanText={"Sobre Nosotros"}
                h2Text={"¿Quiénes somos?"}
            />

            <div className="flex flex-col md:flex-row gap-5" ref={aboutMeRef}>
                <div className={`transition duration-700 ${showAboutMe ? 'opacity-100 lg:-translate-x-0 translate-y-0' : 'opacity-0 lg:-translate-x-8 translate-y-8 pointer-events-none'}`}>
                    <div className="text-black flex flex-col gap-3 mb-5 text-pretty">
                        <p><span className="bg-gradient-to-r text-enfasis text-4xl font-semibold">Nuvia.JS</span> transforma tu visión en una experiencia web extraordinaria.</p>
                        <p>Desarrollamos sitios y aplicaciones web completas desde cero: desde el diseño visual hasta la funcionalidad más compleja que necesites. Cada proyecto es único, con personalización milimétrica que refleje exactamente lo que buscas.</p>
                        <p>Utilizamos las mejores prácticas de desarrollo web y optimización. Tu sitio no solo se verá increíble, sino que también destacará en los motores de búsqueda.</p>
                        <p><strong>Todo esto con precios competitivos</strong> que se adaptan a tu presupuesto. Incluimos hosting profesional para que tu negocio esté listo desde el primer día. ¡Trabajemos juntos para impulsar tu marca!</p>
                    </div>
                    <Btn

                        text="Contáctanos"
                        link="#contact"
                        icon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                            </svg>
                        }
                    />
                </div>

                <div className={`shadow-md h-max rounded-2xl overflow-hidden transition duration-700 ${showAboutMe ? 'opacity-100 lg:translate-x-0 translate-y-0' : 'opacity-0 lg:translate-x-8 translate-y-8 pointer-events-none'}`}>
                    <picture>
                        <source srcSet="/img/nuviaAbout.webp" type="image" />
                        <img src="/img/nuviaAbout.webp" alt="Nuvia.JS Team" className="hover:scale-110 transition cursor-pointer" />
                    </picture>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
