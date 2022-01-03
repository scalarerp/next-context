import Image from 'next/image'
import React from 'react'
import bgImg from 'components/Icons/bg-intro.jpg'
import Link from 'next/link'

const Intro = () => {
    return (
        <section>
            <div>
                <div className="grid xl:grid-cols-2">
                    <div>
                        <Image
                            layout="responsive"
                            className="lg:h-auto h-56 relative object-cover transform opacity-95 "
                            alt="bg-intro"
                            height={700}
                            src={bgImg}
                        />
                    </div>
                    <div className="bg-gradient-to-r from-[#1e40af] via-[#2c5fd0] to-[#3b82f6] ">
                        <div className="flex justify-start items-center">
                            <div>
                                <h1 className="font-semibold sm:text-6xl text-4xl text-white ml-8 mt-8 font-poppins">
                                    Escola de <br />
                                    <span className="text-blue-300 font-IntoLight ">
                                        Surf<strong>.</strong>
                                    </span>
                                </h1>
                            </div>
                        </div>
                        <div className="ml-8">
                            <form className="py-8">
                                <h1 className="font-poppins text-white font-semibold text-2xl text-blue-200 mb-4">
                                    Matrícule-se
                                </h1>
                                <div>
                                    <input
                                        type="email"
                                        className="outline-none p-2 rounded-tl-md rounded-bl-md"
                                    />
                                    <Link href="/Matricula">
                                        <a className=" bg-gradient-to-r from-[#df2518] via-[#f23a18] to-[#ee652e] p-[9.5px] px-4 text-white font-semibold rounded-tr-md rounded-br-md hover:opacity-80 duration-300">
                                            Enviar
                                        </a>
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
// bg-[]
