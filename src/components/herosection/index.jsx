import Link from 'next/link'
import React from 'react'
import Img1 from '../../../assets/Images/Seo.jpg'

import styles from './index.module.scss'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img
                            className="object-cover object-center rounded "
                            alt="hero"
                            src={Img1.src}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-brand font-poppins">
                            Before they sold out
                            <br className="hidden lg:inline-block" />
                            readymade gluten
                        </h1>
                        <p className="mb-8 leading-relaxed text-blueGray-500 font-light font-poppins">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                        <div className="flex justify-center">
                            <Link href="/about">
                                <a className="inline-flex text-white bg-brand border-0 py-2 px-6 focus:outline-none hover:opacity-80 transform hover:scale-110 duration-300 rounded text-md">
                                    MAIS SOBRE
                                </a>
                            </Link>
                            <Link href="/contact">
                                <a className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 transform hover:scale-110 duration-300 rounded text-md">
                                    FALE CONOSCO
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
