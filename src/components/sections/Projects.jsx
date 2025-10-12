import { useRef, useEffect, useState } from "react";
import TitleSection from "../common/TitleSection";
import Btn from "../ui/Btn";

function Projects() {
    const projectRef = useRef(null);
    const [showProjects, setShowProjects] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowProjects(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.2,
                rootMargin: '50px'
            }
        );

        if (projectRef.current) {
            observer.observe(projectRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const projects = [
        {
            mainImg: "/img/Project1.webp",
            title: "Carpinteria Ramirez",
            description: "Desarrollo del sitio web para Carpintería Ramírez, empresa con más de 40 años de experiencia en muebles a la medida. Implementación de sistema de citas integrado para agendamiento de visitas técnicas y panel de administración profesional.",
            link: "https://carpinteriaramirez.com",
            text: "Ver proyecto"
        },
        {
            mainImg: "/img/Project2.webp",
            title: "CleanSkin Shop",
            description: "E-commerce especializado en productos de skincare y maquillaje. Cuenta con carrito, whishlist, perfiles, usuarios, filtros, busqueda personalizada, sistema CRUD, etc. Tambien cuenta con un panel de administración profesional para revisar todo lo del sitio.",
            link: "#",
            text: "En proceso de subida..."
        }
    ];

    return (
        <div className="flex flex-col gap-8 mx-4 mt-20" id="projects" ref={projectRef}>
            <TitleSection
                spanText={"Proyectos"}
                h2Text={"Proyectos Destacados"}
            />

            <div className={`grid mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4`}>
                {projects.map((project, idx) => (
                    <div idx={idx} key={project.title} className={`bg-white w-full flex flex-col gap-4 rounded-2xl overflow-hidden shadow-md md:transition md:duration-700 ${showProjects ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-8 md:pointer-events-none'}`}>
                        <div>
                            <img src={project.mainImg} alt="" />
                            <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                        </div>
                        <div className="p-4 flex flex-col justify-between h-full gap-4">
                            <h3 className="text-black font-bold text-2xl">{project.title}</h3>

                            <div className="flex flex-col gap-2">
                                <p className="text-gray-500 text-sm/normal line-he">
                                    {project.description}
                                </p>
                            </div>

                            <Btn
                                link={project.link}
                                text={project.text}
                                iconLeft={
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                                }
                                colr="bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
