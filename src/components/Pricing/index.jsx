import Link from 'next/link'
import React from 'react'

const Pricing = () => {
    return (
        <section className="mt-0 lg:mt-40" id="Aulas">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div className="flex justify-center mt-16">
                        <h1 className="font-poppins text-5xl font-bold text-[#3b82f6]">
                            Planos
                        </h1>
                    </div>
                </div>
                <div className="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
                    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold">
                                Infantil
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">
                                    <sup>R$</sup>25
                                </div>
                                <div className="text-gray-700">/ mês</div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">
                                    dos 4 aos 14 anos
                                </div>
                                <div className="text-gray-700">
                                    professor profissional
                                </div>
                                <div className="text-gray-700">
                                    2h de treino
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/Matricula">
                                <a className="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transform hover:scale-105 transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                                    COMPRAR AGORA
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-[#3b82f6]">
                        <div className="absolute inset-x-0 top-0 flex justify-center -mt-3">
                            <div className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-[#3b82f6]">
                                Mais Popular
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="text-lg font-semibold">Adulto</div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">
                                    <sup>R$</sup>48
                                </div>
                                <div className="text-gray-700">/ mês</div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">
                                    dos 15 aos 23 anos
                                </div>
                                <div className="text-gray-700">
                                    professor profissional
                                </div>
                                <div className="text-gray-700">
                                    2h de treino
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/Matricula">
                                <a className="inline-flex items-center transform hover:scale-105  justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#3b82f6] hover:bg-[#296ad4] focus:shadow-outline focus:outline-none">
                                    COMPRAR AGORA
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
                        <div className="text-center">
                            <div className="text-lg font-semibold">
                                Profissional
                            </div>
                            <div className="flex items-center justify-center mt-2">
                                <div className="mr-1 text-5xl font-bold">
                                    <sup>R$</sup>235
                                </div>
                                <div className="text-gray-700">/ mês</div>
                            </div>
                            <div className="mt-2 space-y-3">
                                <div className="text-gray-700">
                                    todas as idades
                                </div>
                                <div className="text-gray-700">
                                    aula com um dos melhores surfitas do país
                                </div>
                                <div className="text-gray-700">
                                    4 a 5 horas de treino
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/Matricula">
                                <a className="inline-flex transform hover:scale-105 items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
                                    COMPRAR AGORA
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>{' '}
                <div className="flex justify-center mt-8">
                    <p className="font-poppins font-medium text-center">
                        Possui um grupo com{' '}
                        <span className="text-[#ee652e]">
                            3 ou mais pessoas? <br />
                        </span>{' '}
                        entre em{' '}
                        <span className="border-b-2 border-[#ee652e]">
                            <a href="#Contato">contato</a>
                        </span>{' '}
                        e consiga grandes descontos!!
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Pricing
