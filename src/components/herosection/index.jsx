import Link from 'next/link'
import React from 'react'
// import Img1 from 'assets/images/Seo.jpg'
import Img from 'assets/images/pexels-mike-3820181.jpg'

// import styles from './index.module.scss'
import Image from 'next/image'

const Hero = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded "
                            alt="hero"
                            src={Img.src}
                            width={Img.width}
                            height={Img.height}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
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
                            <Link href="/about">
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
                <div className="p-5 relative  text-justify columns-1 sm:columns-2 lg:columns-3 ">
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                    <div className="p-3">
                        <img
                            className="w-80 h-40 rounded-lg shadow-xl bg-white"
                            src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero
