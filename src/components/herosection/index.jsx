import Link from 'next/link'
import React from 'react'
// import Img1 from 'assets/images/Seo.jpg'
import Img from 'assets/images/hero.png'

// import styles from './index.module.scss'

import { MotionInView, varScaleInY } from 'components/animate'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font pt-10 flex items-center">
                <div className="container mx-auto grid px-5 py-24 md:flex-row lg:grid-cols-2 items-center">
                    <MotionInView variants={varScaleInY}>
                        <div className="mt-24">
                            <Image
                                className="object-cover object-center rounded xl:w-[1200px] lg:mb-0 mb-8"
                                alt="hero"
                                src={Img}
                            />
                        </div>
                    </MotionInView>
                    <div className="lg:flex-grow  lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center  ">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-brand font-poppins">
                            Uma empresa especializada
                            <br className="hidden lg:inline-block" />
                            em MARKETING
                        </h1>
                        <p className="mb-8 leading-relaxed text-blueGray-500 font-light font-poppins">
                            Copper mug try-hard pitchfork pour-over freegan
                            heirloom neutra air plant cold-pressed tacos poke
                            beard tote bag. Heirloom echo park mlkshk tote bag
                            selvage hot chicken authentic tumeric truffaut
                            hexagon try-hard chambray.
                        </p>
                        <div className="flex justify-center">
                            <Link href="#">
                                <a className="inline-flex text-white bg-brand border-0 py-2 px-6 focus:outline-none hover:opacity-80 transform hover:scale-110 duration-300 rounded text-md">
                                    SAIBA MAIS
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
