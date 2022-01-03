import React from 'react'
import Img1 from 'components/Icons/foto-galeria.png'
import Image from 'next/image'

const Aula = () => {
    return (
        <div className="bg-gray-50">
            {' '}
            <section>
                <div className="flex justify-center mt-16">
                    <h1 className="font-poppins text-5xl font-bold text-[#3b82f6]">
                        Praias
                    </h1>
                </div>
                <div className="flex justify-center mt-16">
                    <div className="grid xl:grid-cols-2">
                        <div className="relative">
                            <Image
                                alt="praia"
                                src={Img1}
                                className="md:rounded-lg Img-aula"
                            />

                            <div className="flex justify-center ">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6177.14783607344!2d-43.19701385128906!3d-22.98871607252588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bd51b432fdc95%3A0x721eea5331e0fda1!2sPraia%20do%20Arpoador!5e0!3m2!1spt-BR!2sbr!4v1640724319941!5m2!1spt-BR!2sbr"
                                    loading="lazy"
                                    className="md:rounded-lg xl:absolute md:mt-0 mt-8 -bottom-56 left-8 frame md:w-[480px] md:h-[275px] w-[300] h-[200] max-w-full"
                                ></iframe>
                            </div>
                        </div>
                        <div className="xl:mt-0 mt-8 xl:ml-16">
                            <h1 className="md:text-6xl text-4xl font-semibold leading-snug font-poppins ">
                                <span className="text-blue-500">Aulas</span> em
                                uma
                                <br /> das melhores
                                <br /> praias do{' '}
                                <span className="text-blue-500">Rio</span>
                            </h1>
                            <div>
                                <ul className="mt-16">
                                    <li className="md:text-3xl text-xl font-SourceSerif p-4 mb-8">
                                        <div className=" w-8  h-1 bg-blue-500 "></div>
                                        8 km de costa
                                    </li>
                                    <li className="md:text-3xl text-xl font-SourceSerif p-4 mb-8">
                                        {' '}
                                        <div className=" w-8  h-1 bg-blue-500 "></div>
                                        Restaurante á beira mar
                                    </li>
                                    <li className="md:text-3xl text-xl font-SourceSerif p-4 mb-8">
                                        {' '}
                                        <div className=" w-8  h-1 bg-blue-500 "></div>
                                        Salva-vidas a cada 250m
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <p className="max-w-md font-poppins lg:absolute md:text-lg text-sm py-2">
                                    Localizada entre a praias do Diabo e
                                    Ipanema, Arpoador é o nome de uma praia e de
                                    uma formação rochosa. ... Historiadores
                                    atribuem a origem do nome Arpoador ao fato
                                    de que, no período colonial, o local era
                                    utilizado por pescadores (arpoadores) para
                                    visualização e pesca com arpões das baleias
                                    que se aproximavam do local.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Aula
