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
            className={`text-sm md:text-base rounded-full py-2 px-5 ${
                estado 
                    ? estado 
                    : 'text-gray-700 hover:bg-purple-50 hover:text-purple-600'
            } focus:text-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300 font-medium`}
            onClick={handleClick}
            aria-label={ariaLabel || `Ir a la sección ${text}`}
        >
            {text}
        </a>
    );
}

export default Link;
