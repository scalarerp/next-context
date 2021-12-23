import React from 'react'
import { MotionInView, varScaleInX } from 'components/animate'

const Services = () => {
    return (
        <section className="text-current body-font bg-inverse">
            <div className="container px-5 pb-14 pt-8 mx-auto">
                <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand">
                        Serviços
                    </h1>
                    <p className="lg:w-1/2 w-full leading-relaxed text-inverse">
                        Whatever cardigan tote bag tumblr hexagon brooklyn
                        asymmetrical gentrify, subway tile poke farm-to-table.
                    </p>
                </div>
                <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1">
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Garantia de Resultado
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle cx="6" cy="6" r="3"></circle>
                                        <circle cx="6" cy="18" r="3"></circle>
                                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Preço razoável
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                        <circle cx="12" cy="7" r="4"></circle>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Sem prazos perdidos
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Feedback rápido
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Abordagem Individual
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                    <MotionInView variants={varScaleInX}>
                        <div className="p-4">
                            <div className="border border-gray-200 p-6 rounded-lg">
                                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-lightBrand text-brand transform hover:rotate-[360deg] duration-500 hover:scale-125 mb-4">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h2 className="text-lg text-brand font-medium title-font mb-2">
                                    Equipe Dedicada
                                </h2>
                                <p className="leading-relaxed text-base text-inverse">
                                    Fingerstache flexitarian street art 8-bit
                                    waist co, subway tile poke farm.
                                </p>
                            </div>
                        </div>
                    </MotionInView>
                </div>
                <button className="flex mx-auto mt-16 text-white bg-brand py-2 px-6 hover:opacity-80 transform hover:scale-110 duration-300 rounded text-md">
                    MAIS SOBRE
                </button>
            </div>
        </section>
    )
}

export default Services
