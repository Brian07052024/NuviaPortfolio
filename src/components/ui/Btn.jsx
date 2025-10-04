

function Btn(props) {
    const {text, link, colr, typeBtn, full, icon, iconLeft, ariaLabel, disabled, onClick } = props;
    
    // Clases comunes para ambos tipos de botón
    const baseClasses = `flex gap-2 justify-center items-center cursor-pointer font-semibold px-4 py-1.5 md:px-4 md:py-2 lg:px-5 lg:py-3 rounded-md border border-gray-300 hover:scale-[102%] duration-200 hover:border-gray-500 hover:shadow-[0_0_10px_1px_rgba(107,114,128,0.6)] focus:outline-none focus:ring-2 focus:ring-enfasis focus:ring-offset-2 transition-all ${colr ? colr : 'bg-white text-black'} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`;
    
    // Si es un botón de tipo submit, no debe tener un <a> dentro
    if (typeBtn === 'submit') {
        return (
            <button 
                type="submit" 
                className={`${full ? "w-full" : ""} ${baseClasses}`}
                disabled={disabled}
                aria-label={ariaLabel || text}
                onClick={onClick}
            >
                {icon && <span aria-hidden="true">{icon}</span>}
                <span className="text-base">{text}</span>
                {iconLeft && <span aria-hidden="true">{iconLeft}</span>}
            </button>
        );
    }
    
    // Si es un botón de enlace
    return (
        <a 
            href={link} 
            className={`${full ? "w-full" : ""} flex`}
            aria-label={ariaLabel || `Enlace a ${text}`}
            {...(link && link.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
            <button 
                type={typeBtn || 'button'} 
                className={`${full ? "w-full" : ""} shadow-md ${baseClasses}`}
                disabled={disabled}
                aria-label={ariaLabel || text}
                onClick={onClick}
            >
                {icon && <span aria-hidden="true">{icon}</span>}
                <span className="text-base">{text}</span>
                {iconLeft && <span aria-hidden="true">{iconLeft}</span>}
            </button>
        </a>
    );
}

export default Btn;