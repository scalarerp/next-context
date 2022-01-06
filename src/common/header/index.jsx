import LogoSvg from 'common/svgIcons/LogoSvg'
import Link from 'next/link'
import React from 'react'

const AppHeader = () => {
    return (
        <header className="shadow-md  relative z-50  bg-gradient-to-r from-gray-800 via-blue-800 to-blue-500  lg:flex lg:justify-between lg:items-center">
            <div className="lg:ml-20  flex justify-center">
                <Link href="/">
                    <a>
                        <h1 className="text-gray-50 text-5xl font-MoonDance font-bold">
                            <LogoSvg />
                        </h1>
                    </a>
                </Link>
            </div>
            <nav className="uppercase lg:mr-20 flex justify-center">
                <div className=" responsive-header">
                    <div className="flex items-center text-center">
                        <Link href="#Praia">
                            <a className="lg:ml-4 text-center sm:font-xl text-white p-2 font-semibold hover:text-[#ee652e] duration-300">
                                Praia
                            </a>
                        </Link>
                        <span className="ball-separete w-2 rounded-full border-2 border-white h-2 bg-transparent lg:ml-2"></span>
                    </div>
                    <div className="flex items-center text-center">
                        <Link href="#Aulas">
                            <a className="lg:ml-4  sm:font-xl text-white p-2 font-semibold hover:text-[#ee652e] duration-300">
                                Aulas
                            </a>
                        </Link>
                        <span className="ball-separete w-2 rounded-full border-2 border-white h-2 bg-transparent lg:ml-2"></span>
                    </div>
                    <div className="flex items-center text-center">
                        <Link href="#Contato">
                            <a className="lg:ml-4  sm:font-xl text-white p-2 font-semibold hover:text-[#ee652e] duration-300">
                                Contato
                            </a>
                        </Link>
                        <span className="ball-separete w-2 rounded-full border-2 border-white h-2 bg-transparent lg:ml-2"></span>
                    </div>
                    <div className="flex items-center text-center">
                        <Link href="/Matricula">
                            <a className="lg:ml-4  sm:font-xl text-white p-2 font-semibold hover:text-[#ee652e] duration-300">
                                Matricula
                            </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default AppHeader
