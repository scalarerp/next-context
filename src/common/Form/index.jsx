import React from 'react'

const FormSubmit = () => {
    return (
        <section className="mt-20">
            <div className="flex justify-center mt-16">
                <h1 className="font-poppins text-5xl font-bold text-[#3b82f6] mb-10">
                    Contato
                </h1>
            </div>
            <div className="flex justify-center">
                <div className="grid lg:grid-cols-2">
                    <form
                        action="https://formsubmit.co/mauriciogedrat@gmail.com"
                        method="POST"
                        className=""
                    >
                        <div>
                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Nome"
                                className="p-4 border-2 border-gray-400 rounded-md outline-none sm:w-[450px] w-[250px] mt-8"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="E-mail"
                                className="p-4 border-2 border-gray-400 rounded-md outline-none sm:w-[450px] w-[250px] mt-8"
                            />
                        </div>

                        <div className="sm:flex items-center">
                            <div>
                                <textarea
                                    name="message"
                                    required
                                    placeholder="Mensagem"
                                    className="p-2 border-2 border-gray-400 rounded-md outline-none w-[250px] mt-8"
                                ></textarea>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className=" bg-gradient-to-r from-[#df2518] mt-6 via-[#f23a18] to-[#ee652e] p-5 sm:w-[200px] w-[250px] px-4 text-white font-semibold sm:rounded-tr-md sm:rounded-br-md rounded-md hover:opacity-80 duration-300"
                                >
                                    Enviar
                                </button>
                            </div>
                            <input
                                type="hidden"
                                name="_next"
                                value="http://localhost:3000/FormSucess"
                            />
                        </div>
                    </form>
                    <div>
                        {' '}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6177.14783607344!2d-43.19701385128906!3d-22.98871607252588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd51b432fdc95%3A0x721eea5331e0fda1!2sPraia%20do%20Arpoador!5e0!3m2!1spt-BR!2sbr!4v1640724319941!5m2!1spt-BR!2sbr"
                            loading="lazy"
                            className="md:rounded-lg mt-8 sm:mr-8 mr-0 -bottom-56 left-8 frame sm:w-[450px] sm:h-[250px]  w-[300] h-[200] max-w-full"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FormSubmit
