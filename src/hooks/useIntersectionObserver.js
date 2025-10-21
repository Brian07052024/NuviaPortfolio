import { useEffect, useRef, useState } from 'react';

/**
 * Hook personalizado para manejar Intersection Observer de forma optimizada
 * @param {Object} options - Opciones para el IntersectionObserver
 * @param {number} options.threshold - Porcentaje de visibilidad para activar (0-1)
 * @param {string} options.rootMargin - Margen adicional para activar antes/después
 * @param {boolean} options.triggerOnce - Si debe activarse solo una vez (default: true)
 * @returns {[React.RefObject, boolean]} - [ref para el elemento, isVisible]
 */
export function useIntersectionObserver(options = {}) {
    const {
        threshold = 0.15,
        rootMargin = '0px',
        triggerOnce = true
    } = options;

    const elementRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const observerRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        if (!element) return;

        // Crear observer solo una vez
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    
                    // Si solo queremos que se active una vez, desconectamos
                    if (triggerOnce && observerRef.current) {
                        observerRef.current.disconnect();
                    }
                } else if (!triggerOnce) {
                    // Si no es triggerOnce, permitimos que se oculte de nuevo
                    setIsVisible(false);
                }
            },
            {
                threshold,
                rootMargin,
            }
        );

        // Observar el elemento
        observerRef.current.observe(element);

        // Cleanup
        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [threshold, rootMargin, triggerOnce]);

    return [elementRef, isVisible];
}
