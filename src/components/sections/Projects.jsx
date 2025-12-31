import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import TitleSection from "../common/TitleSection";
import Btn from "../ui/Btn";

function Projects() {
    const [projectRef, showProjects] = useIntersectionObserver({
        threshold: 0.15,
        rootMargin: '0px'
    });

    const projects = [
        {
            mainImg: "/img/Project1.webp",
            title: "Carpinteria Ramirez",
            description: "Desarrollo del sitio web para Carpintería Ramírez, empresa con más de 40 años de experiencia en muebles a la medida. Implementación de sistema de citas integrado para agendamiento de visitas técnicas y panel de administración profesional.",
            link: "https://carpinteriaramirez.com",
            text: "Ver proyecto",
            
        },
        {
            mainImg: "/img/bt.webp",
            title: "BT Fitness",
            description: "Sitio web corporativo para un gimnasio. La página presenta de forma clara sus servicios, enfoque en el bienestar físico y una imagen moderna orientada a atraer nuevos clientes, funcionando como un punto de contacto digital para información y promoción del gimnasio.",
            link: "https://btfitness.com.mx/",
            text: "Ver proyecto"
        },
        {
            mainImg: "/img/nt.webp",
            title: "App Gradients",
            description: "Aplicación web para diseñadores y programadores, capaz de crear asombrosos gradientes estáticos y animados, exportarlos fácilmente y extraer su código listo para usar en proyectos web.",
            link: "https://nuvia-tools-gradients-download.netlify.app/",
            text: "Ver proyecto"
        },
        {
            mainImg: "/img/my.webp",
            title: "Taller Mecánico “Yeremy”",
            description: "Sitio web claro y conciso para taller automotriz en Nuevo León, con más de 15 años de experiencia ofreciendo servicios de mantenimiento y reparación especializados, atención confiable y precios justos.",
            link: "https://mecanicayeremy.netlify.app/",
            text: "Ver proyecto"
        },
        {
            mainImg: "/img/Project2.webp",
            title: "CleanSkin Shop",
            description: "E-commerce especializado en productos de skincare y maquillaje. Cuenta con carrito, whishlist, perfiles, usuarios, filtros, busqueda personalizada, sistema CRUD, etc. Tambien cuenta con un panel de administración profesional para revisar todo lo del sitio.",
            link: "https://youtu.be/LaZtqI_8slI",
            text: "Ver demo"
        },
        {
            mainImg: "/img/pt.webp",
            title: "Pleasure travel",
            description: "Sitio web para una agencia de viajes, en la que se le invita al usuario a explorar los servicios de turismo que ofrecen, con un diseño moderno y atractivo.",
            link: "https://ptravel.com.mx/",
            text: "En proceso..."
        }
    ];

    return (
        <div className="flex flex-col gap-8 mx-4 mt-20" id="projects" ref={projectRef}>
            <TitleSection
                spanText={"Proyectos"}
                h2Text={"Proyectos Destacados"}
            />

            <div className={`grid mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4`}>

                {/* proyectos */}
                {projects.map((project, idx) => (

                    <div idx={idx} key={project.title} className={`bg-white w-full flex flex-col gap-4 rounded-2xl overflow-hidden shadow-md md:transition md:duration-700 ${showProjects ? 'md:opacity-100 md:translate-y-0' : 'md:opacity-0 md:translate-y-8 md:pointer-events-none'}`}>

                        <div>
                            <a href={project.link}>
                                <img 
                                    src={project.mainImg} 
                                    alt={project.title}
                                />
                            </a>
                            <div className="w-full h-1 bg-gradient-to-r from-purple-600 to-cyan-600"></div>
                        </div>
                        
                        <div className="p-4 flex flex-col justify-between h-full gap-4">
                            <h3 className="text-black font-bold text-2xl">{project.title}</h3> {/* Titulo del proyecto */}

                            <div className="flex flex-col gap-2">
                                <p className="text-gray-500 text-sm/normal line-he">
                                    {project.description}{/* descripcion del proyecto */}
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
                            />{/* btoton de accion ver pyto */}

                        </div>
                    </div>

                ))}{/* fin proyectos */}
                
            </div>
        </div>
    );
}

export default Projects;
