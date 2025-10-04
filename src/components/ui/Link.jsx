function Link({ enlace, text, estado, ariaLabel }) {
    const handleClick = (e) => {
        // Mejorar navegación suave si es un enlace interno
        if (enlace.startsWith('#')) {
            e.preventDefault();
            const targetElement = document.querySelector(enlace);
            if (targetElement) {
                targetElement.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
                // Enfocar el elemento para accesibilidad
                targetElement.setAttribute('tabindex', '-1');
                targetElement.focus();
            }
        }
    };

    return (
        <a 
            href={enlace} 
            className={`text-xs md:text-base rounded-md py-1 px-2 hover:text-enfasis focus:text-enfasis focus:outline-none focus:ring-2 focus:ring-enfasis focus:ring-offset-2 transition-all text-black ${estado ? estado : ''}`}
            onClick={handleClick}
            aria-label={ariaLabel || `Ir a la sección ${text}`}
        >
            {text}
        </a>
    );
}

export default Link;