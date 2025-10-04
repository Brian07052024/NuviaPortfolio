import Btn from "../ui/Btn";

function ExperienceCard({ title, plan, caracteristicas, solicitado, precio }) {

    return (
        <div className={`${solicitado ? "h-[550px]" : "h-[500px]"} relative shadow-md rounded-2xl w-full p-5 flex flex-col justify-between bg-gradient-to-b from-slate-900 to-teal-900`}>

            {solicitado ? (
                <div className="absolute bg-red-500 -top-5  p-1 m-2 rounded-md animate-bounce">
                    <p className="text-white">Más solicitado</p>
                </div>
            ) : ""}

            <div className="w-full text-center">
                <div className="text-xs w-fit mx-auto text-center text-gray-400 flex items-baseline">
                    <span className="text-white font-bold text-base">{precio}</span>
                    <span>/{plan}</span>
                </div>

                <h2 className="text-center font-black text-2xl bg-gradient-to-r from-slate-400 via-teal-400 to-teal-700 bg-clip-text text-transparent">{title}</h2>
                <div className="baja w-full bg-white mt-2"></div>
            </div>

            <>
                <ul className="space-y-4 text-white text-sm">
                    {caracteristicas?.map((caracteristica, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{caracteristica}</span>
                        </li>
                    ))}
                </ul>
            </>

            <div className="justify-center flex">
                <Btn

                    text="Envianos un mensaje"
                    link="#contact"
                    icon={
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                            <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                            <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                        </svg>
                    }

                />
            </div>
        </div>
    );
}

export default ExperienceCard;