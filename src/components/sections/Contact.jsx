import { useRef, useEffect, useState } from "react";
import TitleSection from "../common/TitleSection";
import Btn from "../ui/Btn";
import { sendContactEmail } from "../../services/emailService";

function Contact() {
    const contactRef = useRef(null);
    const [showContact, setShowContact] = useState(false);

    useEffect(() => {
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShowContact(true);
                    observer.disconnect();
                }
            },
            { 
                threshold: 0.2,
                rootMargin: '50px'
            }
        );

        if (contactRef.current) {
            observer.observe(contactRef.current);
        }

        return () => observer.disconnect();
    }, []);

    function validar(e) {
        e.preventDefault();

        const name = document.querySelector("#name");
        const email = document.querySelector("#email");
        const phone = document.querySelector("#phone");
        const service = document.querySelector("#service");
        const message = document.querySelector("#message");
        const errorContainer = document.querySelector("#form-errors");

        const values = {
            name: name.value.trim(),
            email: email.value.trim(),
            phone: phone.value.trim(),
            service: service.value.trim(),
            message: message.value.trim()
        }

        const errores = [];

        Object.entries(values).forEach(([key, value]) => {
            if (value === "") {
                errores.push(key);
            }
        });

        // Limpiar errores anteriores
        if (errorContainer) {
            errorContainer.innerHTML = "";
        }

        if (errores.length > 0) {
            if (errorContainer) {
                errores.forEach((campo) => {
                    const p = document.createElement("p");
                    p.textContent = `El campo '${campo}' es obligatorio.`;
                    p.className = "bg-red-100 text-red-600 rounded p-2 mb-2 text-sm font-semibold text-center";
                    errorContainer.appendChild(p);
                });
            }
            return;
        }

        // Si no hay errores, enviamos el form
        sendContactEmail(values)
            .then((result) => {
                console.log('Correo enviado', result.text);
                // mensaje de éxito al usuario
                if (errorContainer) {
                    const p = document.createElement("p");
                    p.textContent = "¡Mensaje enviado con éxito!";
                    p.className = "bg-green-100 text-green-700 rounded p-2 mb-2 text-sm font-semibold text-center";
                    errorContainer.appendChild(p);
                    // Ocultar el mensaje después de 3 segundos
                    setTimeout(() => {
                        if (errorContainer.contains(p)) {
                            errorContainer.removeChild(p);
                        }
                    }, 3000);
                }
                // Limpiar campos
                name.value = '';
                email.value = '';
                phone.value = '';
                service.value = '';
                message.value = '';
            })
            .catch((error) => {
                console.log('Error al enviar', error.text);
                if (errorContainer) {
                    const p = document.createElement("p");
                    p.textContent = "Hubo un error al enviar el mensaje. Intenta de nuevo.";
                    p.className = "bg-red-100 text-red-600 rounded p-2 mb-2 text-sm font-semibold text-center";
                    errorContainer.appendChild(p);
                }
            });
    }

    return (
        <div className="flex flex-col gap-8 mx-4 mt-20" id="contact" ref={contactRef}>
            <TitleSection
                spanText={"Contacto"}
                h2Text={"Hablemos de tu proyecto"}
            />
            <div className={`flex flex-col-reverse items-center md:items-start md:flex-row gap-10`}>

                <form
                    action=""
                    className={`shadow-lg block w-full max-w-96 min-w-72 bg-white p-6 rounded-2xl md:transition md:duration-700 ${showContact ? 'md:opacity-100 md:-translate-x-0' : 'md:opacity-0 md:-translate-x-8 md:pointer-events-none'}`}
                    onSubmit={validar}
                    role="form"
                    aria-labelledby="contact-form-title"
                    noValidate
                >

                    <div className="flex flex-col gap-4">
                        <h3 id="contact-form-title" className="text-center font-bold text-xl text-black">Contáctanos</h3>

                        <div id="form-errors" role="alert" aria-live="polite" className="hidden"></div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700 text-sm" htmlFor="name">
                                Nombre <span className="text-red-500" aria-label="obligatorio">*</span>
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="Tu nombre"
                                className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                                required
                                aria-describedby="name-error"
                                autoComplete="given-name"
                            />
                            <div id="name-error" className="text-red-500 text-xs hidden" role="alert"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700 text-sm" htmlFor="email">
                                Email <span className="text-red-500" aria-label="obligatorio">*</span>
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="tu@email.com"
                                className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                                required
                                aria-describedby="email-error"
                                autoComplete="email"
                            />
                            <div id="email-error" className="text-red-500 text-xs hidden" role="alert"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700 text-sm" htmlFor="phone">
                                Teléfono <span className="text-red-500" aria-label="obligatorio">*</span>
                            </label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="Tu número de teléfono"
                                className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                                required
                                aria-describedby="phone-error"
                                autoComplete="tel"
                            />
                            <div id="phone-error" className="text-red-500 text-xs hidden" role="alert"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700 text-sm" htmlFor="service">
                                Tipo de servicio <span className="text-red-500" aria-label="obligatorio">*</span>
                            </label>
                            <select
                                id="service"
                                name="service"
                                className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 transition"
                                required
                                aria-describedby="service-error"
                            >
                                <option value="" className="bg-white text-gray-700">Selecciona un servicio</option>
                                <option value="basico" className="bg-white text-gray-700">Presencia Online - Básico</option>
                                <option value="intermedio" className="bg-white text-gray-700">Sitio web completo - Intermedio</option>
                                <option value="avanzado" className="bg-white text-gray-700">E-commerce / WebApp - Avanzado</option>
                                <option value="otro" className="bg-white text-gray-700">Otro / Consultoría</option>
                            </select>
                            <div id="service-error" className="text-red-500 text-xs hidden" role="alert"></div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-700 text-sm" htmlFor="message">
                                Mensaje <span className="text-red-500" aria-label="obligatorio">*</span>
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Cuéntanos sobre tu proyecto..."
                                className="p-3 rounded-lg bg-gray-50 border border-gray-200 text-gray-700 placeholder-gray-400 focus:border-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-200 transition h-24 resize-none"
                                required
                                aria-describedby="message-error"
                                rows="4"
                            ></textarea>
                            <div id="message-error" className="text-red-500 text-xs hidden" role="alert"></div>
                        </div>

                        <p className="text-xs text-gray-500" role="note">
                            <strong>Nota:</strong> Verifica que tu email esté escrito correctamente para poder contactarte. Todos los campos marcados con <span className="text-red-500">*</span> son obligatorios.
                        </p>
                        <Btn
                            typeBtn="submit"
                            root="/svg/mail.svg"
                            text="Enviar mensaje"
                            colr="bg-gradient-to-r from-purple-600 to-cyan-600 text-white"
                            full={true}
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-envelope-at-fill" viewBox="0 0 16 16">
                                    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671" />
                                    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791" />
                                </svg>
                            }
                        />

                        <div className="relative">
                            <div className="flex items-center">
                                <div className="flex-grow border-t border-gray-300"></div>
                                <span className="flex-shrink mx-4 text-gray-500 text-xs">o</span>
                                <div className="flex-grow border-t border-gray-300"></div>
                            </div>
                        </div>

                        <a
                            href="https://wa.me/+528131038748?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20desarrollo%20web"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                            </svg>
                            Escribir por WhatsApp
                        </a>
                    </div>
                </form>

                <div className={`flex flex-col gap-6 md:transition md:duration-700 ${showContact ? 'md:opacity-100 md:translate-x-0' : 'md:opacity-0 md:translate-x-8 md:pointer-events-none'}`}>
                    <div className="bg-gradient-to-r from-violet-600 to-cyan-600 p-6 rounded-2xl shadow-lg">
                        <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">
                            ¿Tienes una gran
                            <span className="bg-gradient-to-r from-cyan-200 to-purple-200 bg-clip-text text-transparent"> idea</span>?
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl mb-6">
                            Transformemos tu visión en una realidad digital que impulse tu negocio al siguiente nivel.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-400`}>
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white/90 text-sm">Consulta gratuita para analizar tu proyecto</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-400`}>
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white/90 text-sm">Respuesta en menos de 24 horas</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className={`mt-0.5 w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-yellow-400 to-orange-400`}>
                                    <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white/90 text-sm">Propuesta personalizada sin compromiso</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white/10 border border-white/20 p-4 rounded-xl">
                        <p className="text-slate-600 text-sm text-center">
                            💡 <strong>¿Necesitas ayuda?</strong> Escríbenos por WhatsApp para una respuesta más rápida
                        </p>
                    </div>

                    <div id="form-errors" className="mb-2"></div>
                </div>

            </div>

            {/* Botón flotante de WhatsApp */}
            <a
                href="https://wa.me/+525518991234?text=Hola,%20me%20interesa%20conocer%20más%20sobre%20sus%20servicios%20de%20desarrollo%20web"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-md transition-all duration-300 z-50 animate-bounce"
                title="Escribir por WhatsApp"
            >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.785" />
                </svg>
            </a>
        </div>
    );
}

export default Contact;
