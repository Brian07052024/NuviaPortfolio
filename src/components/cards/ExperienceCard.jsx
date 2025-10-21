function ExperienceCard({ title, plan, caracteristicas, solicitado, precio, className = '' }) {

    return (
        <div className={`relative group ${solicitado ? 'bg-gradient-to-br from-cyan-600 to bg-purple-600' : 'border-2 border-purple-600'} w-full p-8 flex flex-col justify-between min-h-[600px] rounded-2xl transition-all duration-300 hover:-translate-y-2 ${className}`}>
            
            {/* Badge "Más Solicitado" renovado */}
            {solicitado && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full blur-sm"></div>
                        <div className="relative w-max px-6 py-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500 rounded-full shadow-lg">
                            <div className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                                <span className="text-white font-bold text-xs uppercase tracking-wider">Más Popular</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Encabezado del plan */}
            <div className="w-full text-center space-y-3 mb-6">
                <div className="inline-block px-4 py-1 bg-gradient-to-r from-purple-100 to-cyan-100 rounded-full mb-2">
                    <span className="text-xs font-semibold bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent uppercase tracking-wider">
                        {plan}
                    </span>
                </div>
                
                <h2 className={`font-black text-3xl mb-2 ${solicitado ? 'text-white' : 'bg-gradient-to-r from-violet-600 to-cyan-600 bg-clip-text text-transparent'}`}>
                    {title}
                </h2>
                
                <div className={`text-sm flex flex-col items-center gap-1 ${solicitado ? 'text-white/90' : 'text-gray-600'}`}>
                    <span className={`font-bold text-4xl ${solicitado ? 'text-white' : 'text-gray-900'}`}>
                        {precio}<span className="text-xs">MXN</span>
                    </span>
                    {precio !== "Contáctanos" && <span className="text-xs opacity-70">Precio inicial</span>}
                </div>

                <div className={`h-1 w-20 mx-auto rounded-full ${solicitado ? 'bg-gradient-to-r from-yellow-400 to-orange-400' : 'bg-gradient-to-r from-purple-500 to-cyan-500'}`}></div>
            </div>

            {/* Lista de características */}
            <ul className="space-y-4 mb-8 flex-grow">
                {caracteristicas?.map((caracteristica, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                        <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                            solicitado 
                            ? 'bg-gradient-to-br from-yellow-400 to-orange-400' 
                            : 'bg-gradient-to-br from-purple-500 to-cyan-500'
                        } group-hover/item:scale-110 transition-transform`}>
                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <span className={`text-sm leading-relaxed ${solicitado ? 'text-white/95' : 'text-gray-700'} group-hover/item:translate-x-1 transition-transform`}>
                            {caracteristica}
                        </span>
                    </li>
                ))}
            </ul>

            {/* Botón CTA */}
            <div className="justify-center flex mt-auto">
                <a 
                    href="#contact" 
                    className={`group/btn w-full py-4 px-6 rounded-2xl font-bold text-center transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 ${
                        solicitado
                        ? 'bg-white text-purple-600 hover:shadow-2xl hover:shadow-white/50'
                        : 'bg-gradient-to-r from-violet-600 to-cyan-600 text-white hover:shadow-md hover:shadow-purple-500/50'
                    }`}
                >
                    <span>Comenzar Ahora</span>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="18" 
                        height="18" 
                        fill="currentColor" 
                        className="group-hover/btn:translate-x-1 transition-transform" 
                        viewBox="0 0 16 16"
                    >
                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                    </svg>
                </a>
            </div>

            {/* Efecto de brillo en hover */}
            {!solicitado && (
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/10 to-cyan-600/10"></div>
                </div>
            )}
        </div>
    );
}

export default ExperienceCard;