// import Image from 'next/image'
import React from 'react'
// import Fundo from 'assets/Icons/foto-quote.jpg'

const Blockquote = () => {
    return (
        <div className="sm:block hidden">
            <blockquote className="blockquote ">
                {/* <Image
                    alt="block"
                    src={Fundo}
                    layout="responsive"
                    placeholder="blur"
                    className=''
                /> */}
                <h1 className="md:text-5xl sm:text-3xl text-2xl min-w-[250px] p-40 sm:text-center text-white font-IntoLight">
                    <em>“O surf liberta as ondas de uma vida”</em>
                    <div className="text-lg font-poppins">Regis Pereira</div>
                </h1>
            </blockquote>
        </div>
    )
}

export default Blockquote
