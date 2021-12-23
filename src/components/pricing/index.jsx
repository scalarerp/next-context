import React from 'react'
import { pricingCards } from 'CardsPricing'
import Link from 'next/link'

const Pricing = () => {
    return (
        <div className="pt-8 pb-8">
            {' '}
            <div className="flex justify-center sm:text-3xl text-2xl font-medium title-font mb-14 text-brand">
                <h1>Escolha um Plano</h1>
                {/* <pre>{JSON.stringify(imageList2, null, 2)}</pre> */}
            </div>{' '}
            <section className="grid lg:grid-cols-3 sm:grid-cols-1">
                {pricingCards.map((item, index) => {
                    return (
                        <div
                            className="border-4 p-8 rounded-lg w-[75%] mx-auto border-section text-center  mb-8"
                            key={index}
                        >
                            <div>
                                <h1 className="mb-8 text-xl  title-font text-primary font-bold">
                                    {item.title}
                                </h1>
                                <span
                                    className={`${item.className} text-7xl font-poppins font-semibold `}
                                >
                                    <sup className="text-2xl ">R$</sup>
                                    {item.price}
                                </span>
                                <p className="mt-4 font-poppins text-sm h-16">
                                    {item.description}
                                </p>
                                <Link href="#">
                                    <a className="mt-8 inline-flex text-white bg-brand border-0 py-2 px-6 focus:outline-none hover:opacity-80 transform hover:scale-110 duration-300 rounded text-md">
                                        COMPRAR
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </section>
        </div>
    )
}

export default Pricing
