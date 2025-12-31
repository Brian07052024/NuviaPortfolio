
function Hero() {

    return (
        <div className='relative h-lvh flex justify-center items-center overflow-hidden' id='hero'>

            {/* Fondo animado con gradiente */}
            <div className="absolute h-full w-full bg-gray-950"><div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div></div>
            <div className='inset-0 absolute bg-linear-to-b from-transparent via-transparent to-violet-600/20'></div>


            <div className='max-w-7xl w-full h-lvh px-6 md:px-8 relative z-20 py-32 md:py-40'>
                <div className='flex flex-col justify-center items-center'>

                    <div className="relative animate-jump mb-2 w-max px-6 py-2 bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-full shadow-lg">
                        <div className="flex items-center gap-2">
                            
                            <span className="text-white font-bold text-xs uppercase tracking-wider">!20% OFF!</span>
                        </div>
                    </div>

                    {/* Badge superior */}
                    <div className='animate-fade-down animate-delay-300 mb-6'>
                        <div className='rotating-border-badge inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-lg'>
                            <span className='w-2 h-2 bg-gradient-to-b from-violet-600 to-cyan-600 rounded-full'></span>
                            <p className='text-xs md:text-sm text-white/90 font-medium tracking-wide'>
                                Nuvia.JS | Desarrollo web
                            </p>
                        </div>
                    </div>


                    {/* Título principal */}
                    <div className='text-center flex flex-col gap-4 md:gap-6 items-center justify-center w-full animate-fade animate-delay-100'>
                        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-white leading-tight uppercase'>
                            <span className='bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]'>
                                Todo gran proyecto
                            </span>
                            <br />
                            <span className='text-white/90'>Comienza con una idea</span>
                        </h1>

                        <p className='text-sm md:text-xl text-white/70 font-light tracking-wide max-w-2xl px-4'>
                            Desarrollamos tu proyecto
                            <span className='block mt-2 mb-6 text-cyan-300 font-medium'>Sitios web modernos que impulsan tu negocio.</span>
                        </p>
                    </div>

                    {/* Botones CTA */}
                    <div className='animate-fade-up animate-delay-500 flex flex-col w-full justify-center items-center'>
                        <div className='flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-auto items-center justify-center'>
                            <a href="#services" className='group relative px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-full font-semibold shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full md:w-auto justify-center'>
                                <span>Ver Planes</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-stars group-hover:rotate-12 transition-transform" viewBox="0 0 16 16">
                                    <path d="M7.657 6.247c.11-.33.576-.33.686 0l.645 1.937a2.89 2.89 0 0 0 1.829 1.828l1.936.645c.33.11.33.576 0 .686l-1.937.645a2.89 2.89 0 0 0-1.828 1.829l-.645 1.936a.361.361 0 0 1-.686 0l-.645-1.937a2.89 2.89 0 0 0-1.828-1.828l-1.937-.645a.361.361 0 0 1 0-.686l1.937-.645a2.89 2.89 0 0 0 1.828-1.828zM3.794 1.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387A1.73 1.73 0 0 0 4.593 5.69l-.387 1.162a.217.217 0 0 1-.412 0L3.407 5.69A1.73 1.73 0 0 0 2.31 4.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387A1.73 1.73 0 0 0 3.407 2.31zM10.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.16 1.16 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.16 1.16 0 0 0-.732-.732L9.1 2.137a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732z" />
                                </svg>
                            </a>

                            <a href="#contact" className='group px-6 py-3 bg-white/10 border-2 border-white/20 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-3 w-full md:w-auto justify-center'>
                                <span>Contactar</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-right group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                                </svg>
                            </a>
                        </div>

                        {/* Stats/Features rápidos */}
                        <div className='hidden sm:grid grid-cols-3 gap-4 md:gap-8 mt-8 w-full max-w-4xl '>
                            {[
                                {
                                    svg: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#ca8a04" className="bi bi-lightning-charge" viewBox="0 0 16 16">
                                            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41z" />
                                        </svg>
                                    ),
                                    title: 'Desarrollo Rápido',
                                    desc: 'En tiempo récord'
                                },
                                {
                                    svg: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#0891b2" className="bi bi-gem" viewBox="0 0 16 16">
                                            <path d="M3.1.7a.5.5 0 0 1 .4-.2h9a.5.5 0 0 1 .4.2l2.976 3.974c.149.185.156.45.01.644L8.4 15.3a.5.5 0 0 1-.8 0L.1 5.3a.5.5 0 0 1 0-.6zm11.386 3.785-1.806-2.41-.776 2.413zm-3.633.004.961-2.989H4.186l.963 2.995zM5.47 5.495 8 13.366l2.532-7.876zm-1.371-.999-.78-2.422-1.818 2.425zM1.499 5.5l5.113 6.817-2.192-6.82zm7.889 6.817 5.123-6.83-2.928.002z" />
                                        </svg>
                                    ),
                                    title: 'Diseño Único',
                                    desc: 'Personalizado 100%'
                                },
                                {
                                    svg: (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#7c3aed" className="bi bi-grid-1x2" viewBox="0 0 16 16">
                                            <path d="M6 1H1v14h5zm9 0h-5v5h5zm0 9v5h-5v-5zM0 1a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm9 0a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1zm1 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1z" />
                                        </svg>
                                    ),
                                    title: 'Responsive',
                                    desc: 'Todos los dispositivos'
                                }
                            ].map((item, idx) => (
                                <div key={idx} className='group relative px-3 py-2 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-purple-500/20'>
                                    <div className='mb-3'>{item.svg}</div>
                                    <h3 className='text-white font-bold text-sm mb-1'>{item.title}</h3>
                                    <p className='text-white/60 text-xs'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero
